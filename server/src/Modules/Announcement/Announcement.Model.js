import { Schema, model } from "mongoose";
    const announcementSchema = Schema({
      publisherName: {
        type: String,
        required: true,
      },
      publisherDepartment: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      imageUrl: { 
        type: String,
        default:"uploads/Announcement/KF0uXzCF1Sz_MYaGHcHRE_man-character_665280-46970.jpg"
      },
      date: {
        type: Date,
        default: Date.now,
      },
    });
    
    export default model('Announcement', announcementSchema);
