module.exports = function(sequelize, DataTypes) {
    var Countries = sequelize.define("Countries", {
        //add stuff here
    });
    Countries.associate = function(models) {
        Countries.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

    }
    return Countries;

}