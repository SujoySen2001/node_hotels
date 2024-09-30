const express=require('express')
const rounter=express.Router()

const MenuItem = require('./../models/MenuItem');

rounter.post('/',async (req,res)=>{
    try{
      const data=req.body
  
      const Menu=new MenuItem(data)
  
      const response=await Menu.save()
      console.log('Menu Saved')
      res.status(200).json(response)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
})
  
rounter.get('/',async (req,res)=>{
    try{
      const data=await MenuItem.find()
      console.log('Menu Fetched')
      res.status(200).json(data)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
})

rounter.get('/:tasteType',async (req,res)=>{
    try{
        const tasteType= req.params.tasteType
        if(tasteType=='sweet' || tasteType=='spicy'|| tasteType=='sour'){
            const response= await MenuItem.find({taste: tasteType})
            console.log('Taste type fetched')
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:'Invalid taste type'})
        }
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
})

rounter.put('/:id',async (req,res)=>{
  try{
    const menuID=req.params.id
    const updatedMenu=req.body

    const response=await MenuItem.findByIdAndUpdate(menuID,updatedMenu,{
      new: true,
      runValidators: true
    })
    if(!response){
      res.status(404).json({error: 'Menu not found'})
    }
    console.log('Data updated')
    res.status(200).json(response)
  }
  catch(err){
    console.log(err)
    res.status(500).json({error:'Internal Server Error'})
  }
  
})

rounter.delete('/:id',async (req,res)=>{
  try{
    const menuID=req.params.id
    const response= await MenuItem.findByIdAndDelete(menuID)
    if(!response){
      res.status(404).json({error:'Person not found'})
    }
    console.log('Data deleted')
    res.status(200).json({message: 'Menu deleted successfully'})
  }
  catch(err){
    console.log(err)
    res.status(500).json({error:'Internal Server Error'})
  }
})
module.exports=rounter