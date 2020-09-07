const express = require("express")
const router = express.Router()
const Celebrity = require("../model/Celebrity")

router.get("/celebrities", (req, res, next) => {
	Celebrity.find()
		.then((data) => {
			console.log(data)
			res.render("celebrities/index", { celebrities: data })
		})
		.catch((err) => next(err))
})

module.exports = router
