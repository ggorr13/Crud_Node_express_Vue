import pkg from 'mongoose'
const { model, Schema } = pkg;


let schema = new Schema({
    server:{
        type:String,
        required:true
    }
})

export default model('list',schema)


