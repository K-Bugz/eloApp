// import all models
const User = require('./User');
const Organization = require('./Organization');


// create associations (how you set up your queries)
Organization.hasMany(User, {
    foreignKey: 'org_id',
    constraints: false
});
// Since I am getting API calling the User I need to associate 
User.belongsTo(Organization, {
    foreignKey: 'org_id',
    key: 'id'
})
// User belongs to organization
// Users.hasOne(Organization, {
//     foreignKey: 'org_id',
//     // constraints: false
// });

module.exports = { User, Organization };