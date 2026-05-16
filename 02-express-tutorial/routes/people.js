const express=require("express")
const router=express.Router();

const {
    getPeople,
    deletePerson,
    createPerson,
    updatePerson,
    createPersonPostman
}=require('../controllers/people')

router.get('/',getPeople)

router.post('/',createPerson)

router.post('/postman',createPersonPostman)



router.put('/:id',updatePerson)

router.delete('/:id',deletePerson)




module.exports=router;
