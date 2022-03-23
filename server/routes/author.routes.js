const AuthorsController = require('../controllers/author.controllers')

module.exports = (app) => {
    app.get("/api/Authors", AuthorsController.allAuthors)
    app.get("/api/Authors/:id", AuthorsController.oneAuthor)
    app.post("/api/Authors", AuthorsController.createAuthor)
    app.put("/api/Authors/:id", AuthorsController.updateAuthor)
    app.delete("/api/Authors/:id", AuthorsController.deleteAuthor)
}