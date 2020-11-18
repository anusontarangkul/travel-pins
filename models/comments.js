module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        //add stuff here
    });
    Comments.associate = function(models) {
        Comments.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

    }
    return Comments;

}