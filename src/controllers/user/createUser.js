const User = require('../../models/users.models.js')


const createUser = async (user) => {
    const userBD = await User.findOne({email:user.email})
    if (userBD) {
        return userBD
    }else{
        const newUser = new User({
            useridAuth0: user.sub,
            verified: user.email_verified,
            name: user.given_name,
            surname: user.family_name,
            email: user.email,
        })
        
        const result = await newUser.save();
        return result;
    }    
}

module.exports = createUser