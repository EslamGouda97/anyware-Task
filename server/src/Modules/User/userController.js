import { AppError } from '../../Utils/AppError.js';
import User from './User.Model.js';

export const getAllUsers=async(req,res,next)=>{
    try{
      const usersData= await User.find();
      if(!usersData) return next(new AppError("There are no users",404));
      res.status(200).json({message:'success',data:usersData})
    }catch(err){
      next(err);
    }
  }

  export const deleteUser= async(req,res,next)=>{
    try{
      const {id} =req.params;
      const userDeleted = await User.findByIdAndDelete({_id:id});
      if(!userDeleted) return next(new AppError("This User is Not Found",404))
        res.status(200).json({message:'deleted'})
    }catch(err){
      next(err);
    }
  }

  export const updateUser= async(req,res,next)=>{
    try{
      const id =req.userId;
      const {name,age,password}=req.body;
      const userUpdated=  await User.findByIdAndUpdate({_id:id},{name:name,age:age,password:password});  
      if(!userUpdated) return next(new AppError("This user is Not Found",404)) 
      res.status(201).json({message:'updated',data:userUpdated})
    }catch(err){
      next(err);
    }
  }

  export const getSingleUser= async(req,res,next)=>{
    try{
      const {id} =req.params;
      const userData= await User.findById({_id:id},{password:0,confirmedEmail:0,role:0});
      if(!userData) return next(new AppError("This user is Not Found",404));
      res.status(200).json({message:'Success',data:userData})
    }catch(err){
      next(err);
    }
  }

  
