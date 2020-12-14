$(document).ready(function () {
	$("#submit").on("click", function (e) {
		e.preventDefault();
		//console.log(e);
		const burgerName = $("#burger").val();
		//console.log(burgerName);
        submitData(burgerName);
        $("#burger").val("");
        location.reload();

	});
	function submitData(burger) {
		var settings = {
			url: "http://localhost:8080/",
			method: "POST",
			timeout: 0,
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({ "burger_name": burger }),
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	}
});
