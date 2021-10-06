import users from '../../data/users.js';

class User {
    createUser(user) {
        users.push(user);
        return users.find(element => element.username == user.username);
    }

    isRegistered(user) {
        let foundIndex = users.findIndex(element => element.username == user.username);
        if (foundIndex < 0) {
            return false;
        }

        let found = users.find(element => element.username == user.username);
        
        if (found.password == user.password) {
            return true;
        } else return false;
    }


}

export default new User();