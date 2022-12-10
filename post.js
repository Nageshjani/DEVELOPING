const express=require("express")
const app=express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs")

app.listen(5000,()=>{
    console.log("app running at port 3000")

})


app.get('/form',(req,res)=>{
    res.render("post_form")

})
app.post('/lodo',(req,res)=>{
    res.render('hello')
})