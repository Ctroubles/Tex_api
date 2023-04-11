const User = require('../../models/users.models.js')
const {getUser} = require('../../controllers/user/getUser.js')


const createUser = async (email) => {
    const userBD = await User.findOne(email)

    if (userBD) {
        return userBD
    }else{
        const dataAuth0 = await getUser(email.email)
        const newUser = new User({
            useridAuth0: dataAuth0[0].identities[0].user_id,
            name: dataAuth0[0].given_name,
            surname: dataAuth0[0].family_name,
            email: dataAuth0[0].email,
        })
        
        const result = await newUser.save();
        return result;
    }    
}

module.exports = createUser