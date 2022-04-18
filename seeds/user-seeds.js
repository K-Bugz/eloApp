const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: "josh",
        email: "josh@email.com",
        is_Host: true,
        password: "password123",
        wins: 200,
        losses: 0,
        elo: 420,
        org_id: 3

    },
    {
        username: "DatBoiBugz",
        email: "kbugusky@gmail.com",
        is_Host: true,
        password: "dabears34",
        wins: 123,
        losses: 2,
        elo: 2149,
        org_id: 3
    },
    {
        username: "rpendred1",
        email: "hmelby1@toplist.cz",
        is_Host: false,
        password: "gaypoop",
        wins: 19,
        losses: 53,
        elo: 1168,
        org_id: 3
    },
    {
        username: "rnutley2",
        email: "miiannoni2@cafepress.com",
        is_Host: true,
        password: "ZahGe8HHU",
        wins: 19,
        losses: 8,
        elo: 1617,
        org_id: 2
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;