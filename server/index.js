import express, { json } from 'express';
import { connect } from 'mongoose';
const server = express();
import * as dotenv from'dotenv';
import authRoute from './src/Modules/Auth/authRoute.js';
import userRoute from './src/Modules/User/userRoute.js';
import quizRoute from './src/Modules/Quiz/Quiz.Route.js';
import announcementsRoute from './src/Modules/Announcement/Announcement.Route.js';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
server.use(cors());
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "./config/.env") });
server.use("/uploads", express.static(path.join(__dirname, "./src/uploads/")));

//-----------------------------------------------------Conncet to Db And open Server ---------------------------------------------------
const Port=process.env.PORT || 3000;
connect(process.env.Db_connected_url).then(()=>{
  console.log("DB is connected 👌");
  server.listen(Port,()=>{
    console.log(`Server is listening at port ${Port}`);
  })
}).catch((err)=>{
  console.log(err);
})

server.use(json());
//-----------------------------------------------------All Endpoints ---------------------------------------------------
server.use(authRoute);
server.use(userRoute);
server.use(quizRoute);
server.use(announcementsRoute);

//-----------------------------------------------------Not Found MW----------------------------------------------------
server.all("*",(req, res, next) => {
  res.status(404).json({ message: "Invalid url can not access this endPoint"+ req.originalUrl });
});

//-----------------------------------------------------Error Handeling  MW-----------------------------------------------
server.use((err,req,res,next)=>{
  const code = err.statusCode || 500
res.status(code).json({message:err.message, statusCode:code})
});
//-----------------------------------------------------------------------------------------------------------------------
export default server;











