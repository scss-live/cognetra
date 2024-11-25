const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tags: {
        type: DataTypes.JSON,
        defaultValue: []
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.ENUM('draft', 'published'),
        defaultValue: 'draft'
    },
    metaDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true,
    hooks: {
        beforeValidate: (blog) => {
            if (blog.title) {
                blog.slug = blog.title
                    .toLowerCase()
                    .replace(/[^a-zA-Z0-9]/g, '-')
                    .replace(/-+/g, '-');
            }
        }
    }
});

// Define associations
Blog.associate = (models) => {
    Blog.belongsTo(models.User, {
        foreignKey: 'authorId',
        as: 'author'
    });
};

module.exports = Blog;
