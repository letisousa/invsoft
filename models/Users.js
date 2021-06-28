const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        endereco: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        telefone: DataTypes.INTEGER,
    });

    return User;
};

module.exports = User;