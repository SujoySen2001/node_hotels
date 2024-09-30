const express=require('express')
const rounter=express.Router()
const Person = require('./../models/person');

rounter.post('/',async (req,res)=>{
    try{
      const data=req.body
  
      //Create a new Person document using the Mongoose Model
      const newPerson= new Person(data);
  
      //Save the new Person to the database
      const response= await newPerson.save();
      console.log('Data saved')
      res.status(200).json(response)
  
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
  })
  
//Get method to get the details of the person
rounter.get('/',async (req,res)=>{
    try{
      const data=await Person.find()
      console.log('data fetched');
      res.status(200).json(data)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
  })

// Fetch Data based on work
rounter.get('/:workType',async (req,res)=>{
    try{
      const workType= req.params.workType
      if(workType=='chef' || workType=='manager' || workType=='waiter'){
        const response= await Person.find({work: workType})
        console.log('Response fetched')
        res.status(200).json(response)
      }
      else{
        res.status(404).json({error: 'Invalid Work Type'})
      }
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
})

rounter.put('/:id',async (req,res)=>{
  try{
    const personID= req.params.id // Extract the ID from the url parameter
    const updatedPersonData=req.body //Updated data of the person

    const response = await Person.findByIdAndUpdate(personID,updatedPersonData,{
      new: true,
      runValidators: true
    })
    if(!response){
      res.status(404).json({error:'Person not found'})
    }
    console.log('Data updated');
    res.status(200).json(response)
  }
  catch(err){
    console.log(err)
    res.status(500).json({error:'Internal Server Error'})
  }
})

rounter.delete('/:id',async (req,res)=>{
  try{
    const personID=req.params.id
    const response= await Person.findByIdAndDelete(personID)
    if(!response){
      res.status(404).json({error:'Person not found'})
    }
    console.log('Data deleted')
    res.status(200).json({message: 'Person deleted successfully'})
  }
  catch(err){
    console.log(err)
    res.status(500).json({error:'Internal Server Error'})
  }
  
})

//Comment
module.exports=rounter
  
  
  
  
  