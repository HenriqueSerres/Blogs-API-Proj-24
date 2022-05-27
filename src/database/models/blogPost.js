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
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
	}, {
		timestamps: false,
	});

	BlogPost.associate = (models) => {
		BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
	};

	return BlogPost;
};

module.exports = BlogPost;