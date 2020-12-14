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
		const settings = {
			url: "http://localhost:8080/",
			method: "POST",
			timeout: 0,
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({ burger_name: burger }),
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	}

	$(".devour").on("click", function (e) {
		console.log(`devour clicked`);
        console.log(e.currentTarget.id);
        const settings = {
			url: "http://localhost:8080/",
			method: "PATCH",
			timeout: 0,
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({ id: e.currentTarget.id }),
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
        location.reload();

	});
});
