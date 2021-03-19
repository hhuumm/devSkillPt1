const skills=
[
    {id:123546,title:'programming',efficiency:2},
    {id:123547,title:'skateboarding',efficiency:6},
    {id:123548,title:'snowboarding',efficiency:4},
    {id:123549,title:'gaming',efficiency:10}
];


module.exports={
getAll,
getOne,
addSkill,
deleteOne,
update

}

function update(id,newSkill){

    let idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].title = newSkill.title
    skills[idx].efficiency = parseInt(newSkill.efficiency)
}

function getAll(){return skills;}

function getOne(id){return skills.find(skill=>skill.id==parseInt(id))}

function addSkill(skill){
    console.log(`this is my skill :: ${skill.title}`)
    skill.id=Date.now()%1000000
    skills.push(skill)
}

function deleteOne(id){
    let idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
  }