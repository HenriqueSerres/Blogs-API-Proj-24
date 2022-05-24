const PostCategory = (sequelize, DataTypes) => {
	const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
		categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }, 
	}, {
		timestamps: false,
	});

	PostCategory.associate = (models) => {
		models.BlogPost.belongsToMany(models.Category, { 
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
    models.Category.belongsToMany(models.BlogPost, { 
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
	};

	return PostCategory;
};

module.exports = PostCategory;