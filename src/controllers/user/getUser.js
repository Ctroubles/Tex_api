require('dotenv').config();
const {ManagementClient} = require ('auth0')


const {
  DOMAIN_AUTH0,
  CLIENT_ID_AUTH0,
  CLIENT_SECRET_AUTH0,
} = process.env;

const auth00 = new ManagementClient({
    domain: DOMAIN_AUTH0,
    clientId: CLIENT_ID_AUTH0,
    clientSecret: CLIENT_SECRET_AUTH0,
    scope: 'read:users'
  });
  
  // Get all users
 const getAllUsers = async ()=>{
    try {
      return await auth00.users.getAll();
    } catch (error) {
      throw new Error(error.message)
    }
    
 }

 const getUser = async (useremail) => {
  
    return await auth00.users.getByEmail(useremail);

  
 }




module.exports= {getAllUsers, getUser,}
