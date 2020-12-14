const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (_req, res) => {
	burger.all((data) => {
		const dataOb = {
			burgers: data,
		};
		res.render("index", dataOb);
	});
});

router.post("/", (req, res) => {
	console.log(req.body.burger_name);
	burger.insert(req.body.burger_name, function (result) {
		if (result) {
			console.log(`Records updated: ${result.affectedRows}`);
			res.sendStatus(201).end();
		} else {
			res.sendStatus(400).end();
		}
	});
});

router.patch("/", (req, res) => {
	console.log(req.body);
	const idValue = req.body.id;
		burger.update(idValue, function (result) {
			if (result) {
				console.log(`Records updated: ${result.affectedRows}`);
				res.sendStatus(202).end();
			} else {
				res.sendStatus(400).end();
			}
		});
});

router.delete('/api/deleteAll', async (_req, res) => {

	await burger.clear(
		function (result) {
			if (result) {
				console.log(`Records updated: ${result.affectedRows}`);
				res.sendStatus(202).end();
			} else {
				res.sendStatus(400).end();
			}
		}
	);
});

module.exports = router;
