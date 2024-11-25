const initDatabase = require('../config/database');
const User = require('./User');
const Blog = require('./Blog');
const Service = require('./Service');

async function initModels() {
    const sequelize = await initDatabase;

    // Define associations
    Blog.belongsTo(User, {
        foreignKey: 'authorId',
        as: 'author'
    });

    User.hasMany(Blog, {
        foreignKey: 'authorId',
        as: 'blogs'
    });

    const models = {
        User,
        Blog,
        Service,
        sequelize
    };

    return models;
}

module.exports = initModels();
