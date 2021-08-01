import List from "../model/Crud.js";

export const getAll = async (req,res) => {
    let servers = await List.find({});
    res.status(200).json(servers)
}

export const addServer = async (req,res) => {
    console.log(req.paramd);
    let add =  new List({
        server: req.body.name
    })
    await add.save()
    res.status(200);
}

export const deleteServer = async (req,res) => {
    await List.deleteOne({_id:req.params.serverId})
    res.status(200)
}

export const updateServer = async (req,res) => {
    await List.updateOne({_id:req.params.serverId},{$set:{server:req.body.update}})
    res.status(200)
}