const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (_req, res) => {
	console.log("router.get.req");
	burger.all((data) => {
		const dataOb = {
			burgers: data,
		};
		res.render("index", dataOb);
		console.log("router.get.res");
	});
});

router.post("/", (req, res) => {
	burger.insert(req.body.burger_name, function (result) {
		if (result) {
			console.log(result);
			res.sendStatus(201).end();
		} else {
			console.log("post error");
			res.sendStatus(400).end();
		}
	});
});

router.patch("/", (req, res) => {
	const idValue = req.body.id;
		burger.update(idValue, function (result) {
			if (result) {
				console.log(result);
				res.sendStatus(202).end();
			} else {
				console.log("patch error");
				res.sendStatus(400).end();
			}
		});
});

router.delete('/api/deleteAll', async (_req, res) => {
	await burger.clear(
		function (result) {
			if (result) {
				console.log(result);
				res.sendStatus(202).end();
			} else {
				res.sendStatus(400).end();
			}
		}
	);
});

module.exports = router;