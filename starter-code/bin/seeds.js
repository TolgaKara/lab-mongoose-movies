const mongoose = require("mongoose")
const Celebrity = require("../model/Celebrity")

mongoose.connect("mongodb://localhost/celebrity", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const celebrities = [
	{
		name: "Kevin Hart",
		occupation: "comedian",
		catchPhrase:
			"I think if someone gets kicked in the face it is their fault - they watched the foot come towards their face.",
	},
	{
		name: "Dave Chappelle",
		occupation: "comedian",
		catchPhrase:
			"The hardest thing to do is to be true to yourself, especially when everybody is watching.",
	},
	{
		name: "Bill Burr",
		occupation: "comedian",
		catchPhrase:
			"I still remember the first gig where I got people going, it was Rascals in New Jersey, and the place was packed. I was scared. People were expecting me to be funny. I gotta be honest, every time I walk into a club, it's that same fear.",
	},
	{
		name: "Louis C.K",
		occupation: "comedian",
		catchPhrase:
			"I still remember the first gig where I got people going, it was Rascals in New Jersey, and the place was packed. I was scared. People were expecting me to be funny. I gotta be honest, every time I walk into a club, it's that same fear.",
	},
	{
		name: "Ali Wong",
		occupation: "comedian",
		catchPhrase:
			"I still remember the first gig where I got people going, it was Rascals in New Jersey, and the place was packed. I was scared. People were expecting me to be funny. I gotta be honest, every time I walk into a club, it's that same fear.",
	},
]

Celebrity.insertMany(celebrities)
	.then((data) => {
		console.log(`Success, Added ${data.length} celebreties to the database`)
		mongoose.connection.close()
	})
	.catch((err) => {
		console.log(err)
	})
