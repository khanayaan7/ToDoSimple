import express from 'express';


const app=express()
const port=3000

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/",(req,res)=>{
    const d=new Date()
    const time=`${d.getHours()} : ${d.getMinutes()}`
    const date=`${d.getDay()+1}-${d.getMonth()+1}-${d.getFullYear()}`;
        res.render("index.ejs",{
            CurrTime: time,
            CurrDate : date
        })
})
app.listen(port,(err)=>{
    if(err)console.log("Server has error listening.")
    else console.log(`Server listening on port ${port}`)
})