module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        authorsComment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Comments.associate = function(models) {
        Comments.belongsTo(models.User, {foreignKey: {allowNull: false}});
        Comments.belongsTo(models.Photos, {foreignKey: {allowNull: false}});

    }
    return Comments;

}