const express = require('express');
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send("POUUU");
})

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);
routes.post("/like/:id", LikeController.store);
//routes.get("/timeline", TimelineController.index);
//routes.get("/login", LoginController.index);
module.exports = routes;