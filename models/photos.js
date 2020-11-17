module.exports = function(sequelize, DataTypes) {
    var Photos = sequelize.define("Photos", {
        photoUrl:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        comments:{
            type: DataTypes.ARRAY,
            allowNull: false,
        },
    });
    Photos.associate = function(models) {
        Photos.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

    }
    return Photos;

}