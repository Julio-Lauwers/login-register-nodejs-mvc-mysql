const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class UserController {
  
  // CADASTRO DE USUARIO //
  static async register(req, res) {
    
    const { usuario, senha, confirmarsenha } = req.body

    res.render('users/register')
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
  
  }
}


