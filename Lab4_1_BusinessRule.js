(function executeRule(current, previous /*null when async*/) {
	try {
		var r = new sn_ws.RESTMessageV2('x_92516_k17_slack.Lab 4.0', 'Lab 4.0 POST');
		r.setStringParameter('name', current.number);
		var response = r.execute();
		var responseBody = response.getBody();
		var httpStatus = response.getStatusCode();
		var obj = JSON.parse(responseBody);
		current.x_92516_k17_slack_slack_id = obj.group.id;		
		current.update();
	}
	catch(ex) {
		var message = ex.getMessage();
	}
})(current, previous);
