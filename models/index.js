// import all models
const User = require('./User');
const Organization = require('./Organization');


// create associations (how you set up your queries)
Organization.hasMany(User, {
    foreignKey: 'org_id',
    constraints: false // can sometimes create circular reference
});
// Since I am getting API calling the User I need to associate 
User.belongsTo(Organization, {
    foreignKey: 'org_id',
    key: 'id',
    onDelete: 'cascade'
})
// User belongs to organization
// Users.hasOne(Organization, {
//     foreignKey: 'org_id',
//     // constraints: false
// });

module.exports = { User, Organization };