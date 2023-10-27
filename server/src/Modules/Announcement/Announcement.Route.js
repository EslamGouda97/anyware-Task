// announcementRoutes.js
import { Router } from 'express';
import * as controller from './Announcement.Controller.js';
import { createAnnounValidation, deleteAnnounValidation, updateAnnounValidation } from './Announcement.Validation.js';
import { fileUpload, fileValidation } from '../../Utils/FileUpload.js';
import { validationError } from '../../MiddleWares/ValidationError.js'; 
import { authenticationMW, isAdmin } from '../../MiddleWares/authMW.js';

const router = Router();

router.route('/announcements')
  .get(authenticationMW, controller.getAllAnnouncements)
  .post(authenticationMW,isAdmin,fileUpload("Announcement", fileValidation.image).fields([{ name: "image" }]), 
  createAnnounValidation,validationError, controller.createAnnouncement); 
  router.route('/announcements/:id').patch(authenticationMW,isAdmin,updateAnnounValidation,validationError,controller.updateAnnouncement)
  .delete(authenticationMW,isAdmin,deleteAnnounValidation,validationError,controller.deleteAnnouncement)

export default router;
