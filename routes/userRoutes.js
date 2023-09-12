const express = require('express')
const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/register', UserController.register)


module.exports = router