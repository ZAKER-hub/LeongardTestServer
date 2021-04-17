const User = require("../UserModel")
module.exports.login = function(req, res){
    res.status(200).json({
        login: {
            name: req.body.name,
            pass: req.body.pass
        }
    })
}

module.exports.register = async function(req, res){
    const condidate = await User.findOne({email: req.body.email})
    if(condidate){
        res.status(409).json({message: "Такая почта уже существует", where: "email"})
        console.log(req.body)
    }
    else if(req.body.name.length < 1){
        res.status(409).json({message: "Введите корректное имя", where: "name"})
    }
    else if(req.body.surname.length < 1){
        res.status(409).json({message: "Введите корректную фамилию", where: "surname"})
    }
    else{
        const user = new User(req.body);

        user.save(function () {
            console.log("Сохранен объект", user)
            res.status(200).json({message: "Данные успешно внесены"})
        });

        
    }
    
}

