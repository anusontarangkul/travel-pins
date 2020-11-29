module.exports = function (sequelize, DataTypes) {
    var Countries = sequelize.define("Countries", {

        CountryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Countries;

}