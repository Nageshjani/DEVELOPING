const express=require("express")
const app=express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs")

app.listen(8000,()=>{
    console.log("app running at port 3000")

})


app.get("/form",(req,res)=>{
    res.render("register")
})

app.get('/login',(req,res)=>{
    res.render("login")
})

const mongoose =require("mongoose")
mongoose.connect('mongodb://localhost:27017/employeeRegistration').then(()=>{
    console.log("conn done")
})


const employeeSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const Register=new mongoose.model("Register",employeeSchema)

app.post('/submit',(req,res)=>{
    const registerEmployee=new Register({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    registerEmployee.save()
    res.render("hello")
    res.send(req.body)
})


app.post('login',(req,res)=>{
    const email=req.body.email;
    const data= db.registers.find({email:'abc@gmail.com'});
    res.send(data)
    console.log(data)


})