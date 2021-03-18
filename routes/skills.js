const express = require('express');
const router = express.Router();

const skills=require('../controllers/skills.js');

router.get('/',skills.index)
router.get('/:id',skills.show)
router.delete('/:id',skills.deleteSkill)


module.exports=router;