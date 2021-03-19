const express = require('express');
const router = express.Router();

const skills = require('../controllers/skills');

router.get('/',skills.index)
router.get('/new',skills.newSkill)
router.get('/:id/edit', skills.edit)
router.get('/:id',skills.show)

router.delete('/:id',skills.deleteSkill)
router.post('/',skills.addSkill)
router.put('/:id',skills.update)


module.exports=router;