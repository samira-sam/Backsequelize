const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Article extends Model {}

Article.init(
  {
    id_article: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    
},
    
  {
    sequelize,
    tableName: "Article",
    timestamps: false,
  }
);

module.exports = Article;
