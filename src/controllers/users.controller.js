import { getConnection } from "./../database/database"

const getUsers = async(req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id,name,status FROM users");
        console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const updateUser = async(req, res) =>{
    try {
        const { id } = req.params;
        const { name } = req.body;
        if(name === undefined || id === undefined){
            res.status(400);
            res.send("Bad request");
            return;
        }
        const user = { id, name };
        const connection = await getConnection();
        await connection.query("UPDATE users SET ? WHERE id = ?", [user, id]);
        res.json({message:"User Updated"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const disableUser = async(req, res) =>{
    try {
        const { id } = req.params;
        if(id === undefined){
            res.status(400);
            res.send("Bad request");
            return;
        }
        const status = "Desabilitado";
        const user = { id, status };
        const connection = await getConnection();
        await connection.query("UPDATE users SET ? WHERE id = ?", [user, id]);
        res.json({message:"User Dissabled"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const enableUser = async(req, res) =>{
    try {
        const { id } = req.params;
        if(id === undefined){
            res.status(400);
            res.send("Bad request");
            return;
        }
        const status = "Habilitado";
        const user = { id, status };
        const connection = await getConnection();
        await connection.query("UPDATE users SET ? WHERE id = ?", [user, id]);
        res.json({message:"User Enabled"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addUser = async(req,res)=>{
    try {
        console.log(req.body)
        const {name, status} = req.body;
        console.log(status)

        if(name === undefined || status === undefined){
            res.status(400);
            res.send("Bad request");
            return;
        }
        const user = { name, status };
        const connection = await getConnection();
        await connection.query("INSERT INTO users SET ?", user);
        res.json({message:"User added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods={
    getUsers,
    addUser,
    updateUser,
    disableUser,
    enableUser
};