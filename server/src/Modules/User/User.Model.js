import { Schema, model } from "mongoose";


const image = new Schema(
    {
      url: {
        type: String,
        default: "",
      },
      publicId: { type: String, default: "" },
    },
    { _id: false }
  );

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true,
    unique:true
    },

    password:{
    type:String,
    required:true,
    minLength:[2,"password is so short"]
    },
    age:{
        type:Number,
        required:true,
        min:12,
        max:80
        },
        
    confirmedEmail:{
            type:Boolean,
            default:false
        },

    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    image: {
        type: image,
        default: {},
      },
    })
    export default model('User', userSchema);
    