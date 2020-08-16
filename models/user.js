module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    User.associate = models => {
        User.hasMany(models.Post, {
            onDelete: "CASCADE"
        });
        User.hasMany(models.Profile, {
            onDelete: "CASCADE"
        });
    }

    return User;
};
