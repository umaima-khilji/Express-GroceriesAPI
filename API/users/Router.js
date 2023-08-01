const app = require('express')
const router = app.Router()

const { SignUp, Dummy, Login, allUsers, getUserbyEmail,userbyEmail,DelUser,updateUser } = require('./Controller')


router.post('/users', Dummy)
router.post('/signup', SignUp)
router.post('/login', Login)
router.get('/getallusers', allUsers)
router.delete('/DelUser', DelUser)
router.get('/userbyemail/:email', getUserbyEmail)
router.get('/getuserbyemail', userbyEmail)
router.put('/users',updateUser)


module.exports = router

  