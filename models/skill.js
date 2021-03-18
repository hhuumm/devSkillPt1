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
createSkill,
deleteOne

}


function getAll(){return skills;}
function getOne(id){return skills.find(skill=>skill.id==parseInt(id))}
function createSkill(skill){skills.push(skill)}

function deleteOne(id){
    let idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
  }