'use strict';
// catRoute
const express = require('express');
const multer  = require('multer');
const catController = require('../controllers/catController');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', catController.cat_list_get);
router.post('/', upload.single('cat'),  catController.cat_create);

router.get('/:id', catController.cat_get_by_id);
router.put('/:id', catController.cat_update);
router.delete('/:id', catController.cat_delete);

module.exports = router;
