import { Router } from 'express';
const router=Router();
import * as controller from './userController.js';
import { authenticationMW, isAdmin } from '../../MiddleWares/authMW.js';

  router.route('/users').get(authenticationMW, controller.getAllUsers );
  router.route('/users/:id').get(controller.getSingleUser).delete(authenticationMW,isAdmin,controller.deleteUser );
  router.route('/user').patch(authenticationMW,controller.updateUser);

  export default router;