import { AppError } from '../../Utils/AppError.js';
import Announcement from './Announcement.Model.js';

//-------------------------------------------------get All Announcements------------------------------------------------------------------------
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find({});
    res.status(200).json(announcements);
  } catch (err) {
    next(err);
  }
}
//-------------------------------------------------create Announcement------------------------------------------------------------------------
export const createAnnouncement = async (req, res, next) => {
  try {
    const { publisherName, publisherDepartment, content } = req.body;
    if (req.files) {
      for (const key in req.files) {
        let [image] = req.files[key];
        req.body[key] = image.dest;
      }
    }
      const newAnnouncement = new Announcement({
        publisherName,
        publisherDepartment,
        content,
        imageUrl:req.body.image,
      });

      const announcementAdded = await newAnnouncement.save();
      if (!announcementAdded) {
        return next(new AppError("This Announcement is Not Added", 500));
      }
      res.status(201).json({ message: "Announcement is added", data: announcementAdded });
  } catch (err) {
    next(err);
  }
}
//-------------------------------------------------update Announcement------------------------------------------------------------------------
export const updateAnnouncement = async (req, res, next) => {
  try {
    const { publisherName, publisherDepartment, content } = req.body;
    const {id} = req.params; 
    const existingAnnouncement = await Announcement.findById(id);

    if (!existingAnnouncement) {
      return next(new AppError("Announcement not found", 404));
    }
    if (req.files) {
      for (const key in req.files) {
        let [image] = req.files[key];
        req.body[key] = image.dest;
      }
    }
    existingAnnouncement.publisherName = publisherName;
    existingAnnouncement.publisherDepartment = publisherDepartment;
    existingAnnouncement.content = content;
    existingAnnouncement.imageUrl = req.body.image; 

    const updatedAnnouncement = await existingAnnouncement.save();
    if (!updatedAnnouncement) {
      return next(new AppError("Failed to update the announcement", 500));
    }

    res.status(200).json({ message: "Announcement is updated", data: updatedAnnouncement });
  } catch (err) {
    next(err);
  }
}
//-------------------------------------------------delete Announcement------------------------------------------------------------------------
export const deleteAnnouncement = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
    if (!deletedAnnouncement) {
      return next(new AppError("Announcement not found", 404));
    }
    res.status(200).json({ message: "Announcement deleted" });
  } catch (err) {
    next(err);
  }
}
