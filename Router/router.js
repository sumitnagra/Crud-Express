import express from 'express'

import Studentcontroller from './controller.js';
const router = express.Router();

router.get('/', Studentcontroller.getAllDoc)
router.post('/', Studentcontroller.createDoc)
router.get('/edit/:id', Studentcontroller.findById)

router.post('/update/:id', Studentcontroller.findAndUpdate)
router.post('/delete/:id', Studentcontroller.deleteByID)
export default router;