(function executeRule(current, previous /*null when async*/) {
	try {
		var r = new sn_ws.RESTMessageV2('x_92516_k17_slack.Lab 3.0', 'Lab 3.0 POST');
		r.setStringParameter('username', 'Lab3.0');
		r.setStringParameter('number', current.number);
		r.setStringParameter('title', 'New Priority ' + current.priority + ' Incident has been created');
		r.setStringParameter('short_description', current.short_description);
		r.setStringParameter('requested_by', current.caller_id.name);
		r.setStringParameter('url', 'https://' + gs.getProperty('instance_name') + '.service-now.com/nav_to.do?uri=incident.do?sysparm_query=number=' + current.number);
		var response = r.execute();
		var responseBody = response.getBody();
		var httpStatus = response.getStatusCode();
	}
	catch(ex) {
		var message = ex.getMessage();
	}
})(current, previous);
