const express=require("express")
const router=express.Router();

const {
    getPeople,
    createPerson,
    createPerson,
    updatePerson,
    createPersonPostman
}=require('../controllers/people')

router.get('/',)

router.post('/',)

router.post('/postman',)



router.put('/:id',)

router.delete('/:id',(req,res)=>{
    const person=people.find((person)=>person.id===Number(req.params.id))

    if(!person){
        return res
        .status(404)
        .json({success:false,msg:`no person with id ${req.params.id}`})
    }

    const newPeople=people.filter((person)=>person.id!==Number(req.params.id))
    return res.status(200).json({success:true,data:newPeople})
})




module.exports=router;
