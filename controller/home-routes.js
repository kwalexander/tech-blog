const router = require('express').Router();
const sequelize = require('../config/connection');
// const { Post, User, Comment, Vote } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage')
    console.log("get homepage");
});

module.exports = router;