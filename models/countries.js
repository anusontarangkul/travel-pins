module.exports = function(sequelize, DataTypes) {
    var Countries = sequelize.define("Countries", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CountryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Countries;

}