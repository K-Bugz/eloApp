const router = require('express').Router();
const sequelize = require('../config/connection'); // using sequlize if we need to get data from a tables... not used yet
const { User, Organization } = require('../models'); // schema for the data and tables
const withAuth = require('../utils/auth');

// get all users for homepage and added withAuth to verify login. 
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    // This is to get all user information!!!!!
    User.findAll({
        // where: { // hopefully this gets the user id for the specific user's data
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'username',
            'email',
            'wins',
            'losses',
            'elo'
        ]
    })
        .then(dbUserData => {
            const users = dbUserData.map(user => user.get({ plain: true }));
            const user = users.find(u => u.id === req.session.user_id)
            res.render('homepage', { user, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// get single user stuff
router.get('/user/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'username',
            'email',
            'wins',
            'losses',
            'elo'
        ],
        include: [
            {
                model: Organization,
                attributes: ['id', 'name']
            }
        ]
        , nested: true
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            const user = dbUserData.get({ plain: true });
            res.render('homepage', {
                user,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Login Page load up
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


router.get('/rankings-individual', withAuth, (req, res) => {
    User.findAll({
        where: {
            id: req.session.id
        },
    })
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            const usersWithOrg = JSON.parse(JSON.stringify(dbUsersData));
            console.log(usersWithOrg);
            res.render('rankings-individual', {
                usersWithOrg,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/clubpage', withAuth, (req, res) => {
    User.findAll({
        where: {
            org_id: req.session.org_id
        },
    })
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            const usersWithOrg = JSON.parse(JSON.stringify(dbUsersData));
            console.log(usersWithOrg);
            res.render('clubpage', {
                usersWithOrg,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/user-profile', withAuth, (req, res) => {
    User.findAll({
        where: {
            id: req.session.id
        },
    })
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            const usersWithOrg = JSON.parse(JSON.stringify(dbUsersData));
            console.log(usersWithOrg);
            res.render('user-profile', {
                usersWithOrg,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;