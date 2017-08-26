$(document).ready(function () {
	
	$.getJSON("assets/json/main.json", function (data) {
		$("#tree").jstree({
			core: {
				data: data
			}
		});
	})
	.fail(function (x, s, r) {
		console.log(s);
	});

	setInterval(function () {
		$(".jira").each(function (e) {
			var name = $(this).attr("data-name");
			var status = $(this).attr("data-status");
			status = status == "AD" ? "In Progress; Awaiting Dependencies" : status;
			status = status == "AV" ? "Fixed; Awaiting QA Validation" : status;
			status = status == "D" ? "Fixed; Awaiting QA Deployment" : status;
			status = status == "V" ? "Done; QA Validated" : status;
			status = status == "IP" ? "In Development" : status;
			status = status == "C" ? "Closed" : status;
			status = status == "T" ? "To Do" : status;

			var text = "<strong>["+status+"]</strong>"+" " + name;
			$(this).html(text);
		});
	}, 500);
});
