// copied from wk 14 hw -- UPDATE

// import all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Post, Vote, Comment };