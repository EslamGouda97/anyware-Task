import { body, param } from 'express-validator';

export const createAnnounValidation = [
  body('publisherName').notEmpty().withMessage('Publisher name is required'),
  body('publisherDepartment').notEmpty().withMessage('Publisher department is required'),
  body('content').notEmpty().withMessage('Content is required'),
  (req, res, next) => {
    if (!req.files || !req.files.image) {
      return next('Image is required');
    }
    const image = req.files.image;
    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(image[0].mimetype)) {
      return next('Invalid image format. Only JPEG and PNG are allowed.');
    }
    next();
  },
];
export const updateAnnounValidation = [
  param('id').notEmpty().withMessage('Announcement ID is required'),
  body('publisherName').notEmpty().withMessage('Publisher name is required'),
  body('publisherDepartment').notEmpty().withMessage('Publisher department is required'),
  body('content').notEmpty().withMessage('Content is required'),
  (req, res, next) => {
    if (!req.files || !req.files.image) {
      return next('Image is required');
    }
    const image = req.files.image;
    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(image[0].mimetype)) {
      return next('Invalid image format. Only JPEG and PNG are allowed.');
    }
    next();
  },
];

export const deleteAnnounValidation = [
  param('id').notEmpty().withMessage('Announcement ID is required'),
];