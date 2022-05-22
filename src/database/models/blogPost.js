const BlogPost = (sequelize, DataTypes) => {
	const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
		title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE
    }
	}, );

	BlogPost.associate = (models) => {
		BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'id' });
	};

	return BlogPost;
};

module.exports = BlogPost;