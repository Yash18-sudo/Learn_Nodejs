const express = require('express');
const router = express.Router();
const person = require('../models/person');

router.get('/',async(req,res)=>{
    try{
        const data = await person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
    }
});

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        if (worktype === 'chef' || worktype === 'manager' || worktype === 'waiter') {
            const response = await person.find({ work: worktype });
            console.log("response fetched");
            res.status(200).json(response); // Send the response back to the client
        } else {
            res.status(404).json({ error: 'Invalid worktype' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/',async (req,res)=>{

      try{
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
      }
      catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
      }

});

router.put('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await person.findByIdAndUpdate(personId, updatePersonData,{
            new:true,
            runValidators:true
        });

        if(!response){
            return res.status(404).json({error : 'Person not found'});
        }

        console.log("data updated");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log("data deleted");
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;