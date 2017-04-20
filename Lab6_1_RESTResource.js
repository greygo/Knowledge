(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var slack_user = request.queryParams.user_name[0];
	var slack_channel = request.queryParams.channel_id[0];
	var text = request.queryParams.text[0];
	var response_url = request.queryParams.response_url[0];
	var JSON = new global.JSON();
	var responseText = '';
	var user = new GlideRecord('incident');
	user.addQuery('x_92516_k17_slack_slack_id', slack_channel);	
	user.query();
	if(user.next()){		
		user.work_notes = 'From Slack user ' + slack_user + ':\n' + text;
		user.update();
		responseText = "Incident has been updated";
	}
	else
		responseText = 'Incident does not exist';
	var returnObj = {
		"response_type": "ephemeral",
		"text": responseText
	};
	response.setContentType('application/json');
	response.getStreamWriter().writeString(JSON.encode(returnObj));
})(request, response);
