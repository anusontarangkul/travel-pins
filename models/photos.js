module.exports = function(sequelize, DataTypes) {
    var Photos = sequelize.define("Photos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        photoUrl:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    Photos.associate = function(models) {
        Photos.belongsTo(models.User, {foreignKey: {allowNull: false}});
        Photos.belongsTo(models.Countries, {foreignKey: {allowNull: false}});
        Photos.hasMany(models.Comments, {onDelete: "cascade"});
    }
    return Photos;

}