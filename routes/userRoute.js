'use strict';
// userRoute
const express = require('express');
const multer  = require('multer');
const userController = require('../controllers/userController');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', userController.user_list_get);
router.post('/', upload.single('user'),  userController.user_create);

router.get('/:id', userController.user_get_by_id);
router.put('/:id', userController.user_update);
router.delete('/:id', userController.user_delete);

module.exports = router;
