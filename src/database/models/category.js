const Category = (sequelize, DataTypes) => {
	const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
		name: {
      type: DataTypes.STRING,
      allowNull: false
    },	
	},);

	Category.associate = (models) => {
		Category.belongsToMany(models.PostCategory, { as: 'category', foreignKey: 'categoryId' });
	};

	return Category;
};

module.exports = Category;