//const { where } = require('sequelize/types');
const { User } = require('../models')
const user = require('../models/user')
module.exports = {
    getAllUsers() {
    return User.findAll()
    },

    getUsers(offset=0, limit=10) { 
        return User.findAndCountAll({
            offset : offset,
            limit : limit
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

    addUser(username, email, password, role) {
        const user_ = {
            username:username, 
            email:email, 
            password:password, 
            role:role
        };
        return User.create(user_)
    },
    updateUser(user) { 
        return User.update(
             user,
           {
               where:{
                   email : user.email
               }
           }
         )
     },

/*
    updateUser( user) { 
        
        const user_ = {

            username:username, 
            email:email, 
            password:password, 
            role:role
        };
        return User.update(user_)
    },
*/
    deleteUser(id) { 
        User.destroy({
            where: {
                id: id
            },
        });
    },
    // D'autres méthodes jugées utiles
    }