module.exports = function (sequelize, DataTypes) {
    var UserCountries = sequelize.define("UserCountries", {

        CountryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    UserCountries.associate = function (models) {
        UserCountries.belongsTo(models.User, { foreignKey: { allowNull: false } });
        //maybe associate with photos ?
        //UserCountries.hasMany(models.Photos, {onDelete: "cascade"});
    }
    return UserCountries;

}