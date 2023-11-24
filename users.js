const express=require('express');

const router=express.Router();
const { v4: uuidv4 } = require('uuid');
const myUuid = uuidv4();
let users =[
    {
    name:"Pritam",
    lastname:"Saha",
    age:21
    },
    
]
router.get('/', (req, res)=>{
    console.log(users);
    res.send(users);
}); 

router.post('/',(req,res)=>{

    console.log(req.body);
    const user=req.body;
    console.log(myUuid);
    const userWithId={ ...user, id:myUuid};
    users.push(userWithId);
    res.send(`User with the name ${user.name}  is added to database`);
});

router.get('/:id',(req,res)=>{
    const { id }=req.params;
    const founduser=users.find(user=>user.id===id);
    res.send(founduser);
})

router.delete('/:id',(req,res)=>{
    const { id }=req.params;
    users= users.filter((user=>user.id !=id));
    res.send(`${id} is deleted`);
})

router.patch('/id', (req,re)=>{
    const { id }=req.params;
    const{name, lastname , Age }=req.body;
    const user=user.find(user=>user.id == id);

    if(name) user.name=name;
    if(lastname) user.lastname=lastname;
    if(Age) user.Age=Age;

    res.send(`User with the id ${id} has been updated`);

});


module.exports=router;



