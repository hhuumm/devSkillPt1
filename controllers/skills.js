const skill= require('../models/skill')


module.exports = {
index,
show,
deleteSkill
}


function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll(),
      time: req.time
    });
  }


  function show(req, res) {
    res.render('skills/show', {
      Skill: skill.getOne(req.params.id),
      title: 'the title'
    })
  }

  function deleteSkill(req,res){
    console.log(req.params.id)
    skill.deleteOne(req.params.id)
    
    res.redirect('/skills')
  }