// imports for the seeds
const seedUsers = require('./user-seeds');
const seedOrganizations = require('./organization-seeds');

// Querries for debugging
const sequelize = require("../config/connection"); // connection to db different due to inside seeds instead of root


// SeedALL function
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedOrganizations();
    console.log('--------------');
    await seedUsers();
    // await seedOrganizations();
    process.exit(0);
};

// Call of the function
seedAll();