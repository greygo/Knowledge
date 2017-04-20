(function executeRule(current, previous /*null when async*/) {	
	try {
		var r = new sn_ws.RESTMessageV2('x_92516_k17_slack.Lab 5.0', 'Lab 5.0 POST');
		r.setStringParameterNoEscape('channel', current.x_92516_k17_slack_slack_id);
		var response = r.execute();
		var responseBody = response.getBody();
		var httpStatus = response.getStatusCode();
	}
	catch(ex) {
		var message = ex.getMessage();
	}
})(current, previous);
