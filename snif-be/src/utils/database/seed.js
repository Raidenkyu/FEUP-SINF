const User = require("../../models/user.model");

User.collection.drop();

const seedDb = () => {
    User.create([
        {
            email: "antero@mail.com",
            username: "Antero Santos",
            password: "123456",
            role: "admin"
        },
        {
            email: "diogo@mail.com",
            username: "Diogo Yaguas",
            password: "123456",
            role: "admin"
        },
        {
            email: "duarte@mail.com",
            username: "Duarte Oliveira",
            password: "123456",
            role: "admin"
        },
        {
            email: "fernando@mail.com",
            username: "Fernando Alves",
            password: "123456",
            role: "admin"
        },
        {
            email: "joao@mail.com",
            username: "João Maduro",
            password: "123456",
            role: "admin"
        },
    ]);    
};

module.exports = {
    seedDb,
}