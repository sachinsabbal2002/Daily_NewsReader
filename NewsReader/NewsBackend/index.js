const express=require("express")
const cors=require('cors')
const app=express()
const path = require("path");
const port=8000;
app.use(cors())
app.use(express.json())
app.get('/',async(req,res)=>{
   try{
    const url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=a0507de64f0c463d9dc01d4c13245062`
    const respone=await fetch(url);
    const data=await respone.json();
    res.json(data)
   }
   catch(error){
    console.log(error)
   }
})
app.get('/general',async(req,res)=>{
    try{
     const url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=a0507de64f0c463d9dc01d4c13245062`
     const respone=await fetch(url);
     const data=await respone.json();
     res.json(data)
    }
    catch(error){
     console.log(error)
    }
 })
app.get('/entertainment',async(req,res)=>{
    try{
     const url = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=a0507de64f0c463d9dc01d4c13245062`
     const respone=await fetch(url);
     const data=await respone.json();
     // console.log(data);
     res.json(data)
    }
    catch(error){
     console.log(error)
    }
 })
 app.get('/business',async(req,res)=>{
    try{
     const url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=a0507de64f0c463d9dc01d4c13245062`
     const respone=await fetch(url);
     const data=await respone.json();
     res.json(data)
    }
    catch(error){
     console.log(error)
    }
 })
 app.get('/health',async(req,res)=>{
    try{
     const url = `https://newsapi.org/v2/top-headlines?category=health&apiKey=a0507de64f0c463d9dc01d4c13245062`
     const respone=await fetch(url);
     const data=await respone.json();
     res.json(data)
    }
    catch(error){
     console.log(error)
    }
 })
 app.get('/technology',async(req,res)=>{
    try{
     const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=a0507de64f0c463d9dc01d4c13245062`
     const respone=await fetch(url);
     const data=await respone.json();
     res.json(data)
    }
    catch(error){
     console.log(error)
    }
 })
 app.get('/science',async(req,res)=>{
    try{
     const url = `https://newsapi.org/v2/top-headlines?category=science&apiKey=a0507de64f0c463d9dc01d4c13245062`
     const respone=await fetch(url);
     const data=await respone.json();
     res.json(data)
    }
    catch(error){
     console.log(error)
    }
 })
 app.get('/sport',async(req,res)=>{
    try{
     const url = `https://newsapi.org/v2/top-headlines?category=sport&apiKey=a0507de64f0c463d9dc01d4c13245062`
     const respone=await fetch(url);
     const data=await respone.json();
     res.json(data)
    }
    catch(error){
     console.log(error)
    }
 })
 

app.listen(port,()=>{
    console.log(`the serve is start at http://localhost:${port}`)
})
