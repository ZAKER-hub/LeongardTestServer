const User = require("../UserModel")

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

module.exports.find = async function(req, res){
    let users = await User.find({
        name: req.body.name ? req.body.name:{$gte: 0},
        surname: req.body.surname ? req.body.surname:{$gte: 0},
        age: {$gte: req.body.date_ot, $lte: req.body.date_do},
        sex: req.body.sex ? req.body.sex:{$gte: 0}
    }).sort( { 'surname' : -1 } ).skip(Number(req.body.offset)*Number(req.body.limit)).limit(Number(req.body.limit))
    res.status(200).json(users)
    
}