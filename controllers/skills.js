const Skill= require('../models/skill')


module.exports = {
index,
show,
deleteSkill,
addSkill,
newSkill,
edit,
update
}
function update(req,res){

  req.body.done = !!req.body.done
  Skill.update(req.params.id, req.body)
  res.redirect('/skills')
}
function edit (req, res)
{
res.render('skills/edit',{
  skill:Skill.getOne(req.params.id)
})
} 
function newSkill (req , res) {
  res.render('skills/addSkill')
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      time: req.time
    });
  }

  function addSkill(req , res){
    Skill.addSkill(req.body)
    res.redirect('/skills')
    // res.render('skills/addSkill',{
    //   title: "Add Skill ",
    }


  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'the title'
    })
  }

  function deleteSkill(req,res){
    console.log(req.params.id)
    Skill.deleteOne(req.params.id)
    
    res.redirect('/skills')
  }