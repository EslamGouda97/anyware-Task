//-----------------------------------------------------------signUp with bcrypt hashing-----------------------------------------------------------
import jwt from 'jsonwebtoken'
import User from '../User/User.Model.js';
import bcrypt from 'bcrypt';
import { AppError } from '../../Utils/AppError.js';

// import { sendEmail } from '../../Utils/emails/sendMail.js';
export const signUp = async(req,res,next)=>{    
try{
    const {name,email,password,age}=req.body;  
    const userData = await User.findOne({email:email});  
    if(!userData){
        bcrypt.hash(password,10, async function(err, hash) {   
            const NewUser=new User({
                name
                ,email
                ,password:hash
                ,age});
                const SavedUser= await NewUser.save();                        
                if (!SavedUser) {
                    next( new AppError("can't add this NewUser check your data",400));          
                }else{
                    // sendEmail({email});
                    res.status(200).json(SavedUser);
                } 
            })    
    }
    else{    
        next( new AppError("This email is in use",400));          
    }
}
catch(error){
    console.log(error);
    next(error); 
} 
}   

//-------------------------------------------------------verify the Email-------------------------------------

export const verifyEmail =async(req,res,next)=>{
    try{
        const {token}=req.params;
        jwt.verify(token,"EslamGouda",async(err,decoded)=>{ 
        if(err){
            next(err);
        }
        else{
            await User.findOneAndUpdate({email:decoded.email},{confirmedEmail:true});
            res.status(200).json({message:"Your email is verified"})
        }
        });
    }
    catch(error){
        next(error)
    }
} 

        
//-------------------------------------------------------signIn with bcrypt hashing-------------------------------------
export const signIn = async(req,res,next)=>{ 
try{
    const {email,password}=req.body;  
    const userData = await User.findOne({email:email});   
    if(userData){     
        // if(userData.confirmedEmail===true){
            const match = await bcrypt.compare(password,userData.password);
            if(match){
                const token=jwt.sign({userId:userData._id,role:userData.role},process.env.secret_Token, { expiresIn: '2h' });
                res.status(200).json({message:"Login Succesfuly",token:token})
            } else{             
                next( new AppError("Incorrect password",400));          
            }
        // }
        // else{
        // let error = new Error("message:"Please Verify your email First");
        // error.code = 500;
        // next(error);   
    // }
    }else{next( new AppError("This email is not found,Please sign Up",404));}
}
catch(error){
    next(error)
}
}


//-----------------------------------------------------------signUp with crypto-js hashing-----------------------------------------------------------
//  const User=require('../Models/User.Model');  
//  const CryptoJS = require("crypto-js");   

//         module.exports.signUp = async (request, response, next) => {
//             const {userName,email,password,age}=request.body;
//             const newUser = new User({
//               userName,
//               email,
//               password: CryptoJS.AES.encrypt(
//                  password,
//                 "process.env.PASS_SEC"
//               ).toString(),
//               age,
//             });
//             try {
//               // new user
//               const savedUser = await newUser.save();
//               // console.log(savedUser);
//               const {...others} = savedUser._doc;
//               response.status(201).json(others);
//             } catch (err) {
//               let error = new Error(err);
//               error.status = 401;
//               next(error);
//             }
//           };
//-------------------------------------------------------signIn with crypto-js hashing-------------------------------------

// export const signIn= async (req,res)=>{ 
//     const {email,password}=req.body;  

//     const userData = await User.findOne({email:email});
//     if(userData){
//         const hashedPass = CryptoJS.AES.decrypt(
//             userData.password,
//             "process.env.PASS_SEC" );

//             const originalPassword = hashedPass.toString(CryptoJS.enc.Utf8);
//             if (originalPassword !== password) {

//             let error = new Error("wrong password!");
//             error.status = 401;

//             } else {
//             res.status(200).json({message:"Login"})}      

//     }else{
//         res.status(404).json({message:"This email is not found,Please sign Up"})
//     }

//     }