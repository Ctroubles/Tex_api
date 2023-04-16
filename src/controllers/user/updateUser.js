const User= require("../../models/users.models");


const deleteUser = async (id) =>{
        const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = false
        return await userxd.save().catch(e => console.log(e))
}

const activateUser = async(id)=>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = true
        return await userxd.save().catch(e => console.log(e))
}

const updateUser = async(id, data) => {
    try {
        const user = await User.findOne({ _id: id });
        if (!user) throw new Error('No se ha encontrado un Usuario con ese ID');
    
        if (Object.keys(data).length === 0) {
          throw new Error('No se han especificado datos para actualizar');
        }
    
        for (let field in data) {
          user[field] = data[field];
        }
    
        user.updated_at = Date.now();
        await user.save();
        return user;
      } catch (error) {
        throw new Error('Hubo un problema al actualizar usuario');
      }
}

const giveAdmin = async(id) =>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isAdmin = true
        return await userxd.save().catch(e => console.log(e))
}

const removeAdmin = async(id) =>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isAdmin = false
        return await userxd.save().catch(e => console.log(e))
}

const addOrder = async(id, order) =>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.orders.push(order)
        return await userxd.save().catch(e => console.log(e))
}


module.exports= {deleteUser, activateUser, updateUser, giveAdmin, removeAdmin, addOrder}