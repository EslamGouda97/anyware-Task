import jwt from 'jsonwebtoken'

export const authenticationMW=(req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    jwt.verify(token,process.env.secret_Token,(err,decoded)=>{
        if(err){
            res.status(403).json({
                message:"Not Authenticated",err:err
            })
        }
        else{
            req.userId=decoded.userId;
            req.role=decoded.role;
            next();
        }
    });
}

export const isAdmin =(req,res,next)=>{
    if(req.role==='admin'){
        next();
    }else{
        res.status(401).json({message:"Not Authorized"})
    }
}