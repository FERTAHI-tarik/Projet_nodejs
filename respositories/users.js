//const { where } = require('sequelize/types');
const { User } = require('../models')
const user = require('../models/user')
module.exports = {
    getAllUsers() {
    return User.findAll()
    },

    getUsers(n1, n2) { 
        return User.findAndCountAll({
            offset : n1,
            limit : n2
        });
    },

    getAdmins(){ 
        return User.findAll({
            where : { 
                role : "admin"
            },
        });
     },

    getAuthors() {
        return User.findAll({
            where : { 
                role : "author"
            },
        });
     },

    getGuests(){
        return User.findAll({
            where : { 
                role : "guest"
            },
        });
     },

    getUser(id) {
        return User.findOne({
            where : { 
                id : id
            },
        }); 
    },


    getUserByEmail(email) { 
        return User.findOne({
            where : { 
                email : email
            },
        }); 
    },

    addUser(user) { 
        return User.Create(user)
    },

    updateUser(user) { 
        return User.update(user);
    },

    deleteUser(id) { 
        User.destroy({
            where: {
                id: id
            },
        });
    },
    // D'autres méthodes jugées utiles
    }