const controllers ={
    home: (req,res)=>{
        res.render('home')
    },
    login: (req,res)=>{
        res.render('login')
    },
    detalle: (req,res)=>{
        res.render('detalle-producto')
    },
    registro:(req,res)=>{
        res.render('registro')
    }

}



module.exports =controllers;