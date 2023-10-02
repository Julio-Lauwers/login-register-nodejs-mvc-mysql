const { request } = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const flash = require('connect-flash')

module.exports = class UserController {
  
  // CADASTRO DE USUARIO //
  static register(req, res) {
    req.flash('message', "Preencha o nome de usuario!")
    res.render('users/register')
  }

  static async registerSave(req, res){

    const usuario = req.body.usuario
    const senha = req.body.senha
    const confirmarsenha = req.body.confirmarsenha

    // VALIDATIONS 

    if(!usuario){
      res.send(req.flash('message'))
      return
    }

    if(!senha){
      res.send('Por favor ensira uma senha!')
      return
    }

    if(!confirmarsenha){
      res.send('Por favor ensira a confirmação de senha!')
      return
    }

    if(senha != confirmarsenha){
      res.send('As senhas devem ser iguais!')
      return
    }

    const userExists = await User.findOne({ where: { usuario: usuario} })

    if (userExists) {
      res.send('Por favor, utilize outro nome de usuario')
      return
    }

    // create user
    const user = new User({
      usuario: usuario,
      senha: senha
    })

    try {
      const newUser = await user.save()

      await createUserToken(newUser, req, res)
    } catch (error) {
      res.status(500).json({ message: error })
    }

    res.redirect('users/login')
  }


  static login(req, res){
    res.render('users/login')
  }
}



    //validation

    /*if (!usuario) {
      res.send('<script>alert("함수 이름 중복!")</script>');
      return
    }
    if (!senha) {
      res.status(422).json({ message: 'A senha é obrigatória!'})
      return
    }
    if (!confirmarsenha) {
      res.status(422).json({ message: 'Confirmação de senha é obrigatório!'})
      return
    }
    if (senha !== confirmarsenha){
      res.status(422).json({ message: 'A confirmação de senha deve ser identica a senha!'})
      return
    } 
    
    // confirmar se o Usuario já existe  //

    const userExists = await UserController.findOne({ usuario: usuario})

    if (userExists) {
      res.status(422).json({ message: 'Por favor, Utilize outro nome de usuario!'})
    }

    // criar senha 
  */