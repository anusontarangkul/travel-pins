module.exports = function(sequelize, DataTypes) {
    var Followers = sequelize.define("Followers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        followerId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        followeeId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Followers.associate = function(models) {
        Followers.belongsTo(models.User, {foreignKey: {allowNull: false}});
    }
    return Followers;

}
// followers join table many user can follow other users 
// User { id } -> UserToUser { id: followerId FK(user.id), foloweeId FK(user.id)} -> User { id }
//                                   1           2
//                                   1           3
//                                   3           1