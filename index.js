const express = require('express')
const app = express();
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')



//Connect Mongodb
mongoose.connect('mongodb+srv://645021001187:15451545@cluster0.qhnbn5u.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })

global.loggedIn = null // จับค่าว่าเข้าหรือยัง

//Controller
const indexController = require('./controllers/indexcontroller') //เชื่อม controller
const loginController = require('./controllers/logincontroller')
const loginUserController = require('./controllers/loginUsercontroller')
const registerController = require('./controllers/registercontroller')
const storeUserController = require('./controllers/storeUsercontroller')
const logoutController = require('./controllers/logoutcontroller')
const homeController = require('./controllers/homecontroller')
const fishController = require('./controllers/fishcontroller')//3
const mollyController = require('./controllers/mollycontroller')
const gruppyController = require('./controllers/gruppycontroller')
const angelController = require('./controllers/angelcontroller')
const zebraController = require('./controllers/zebracontroller')
const goldfishController = require('./controllers/goldfishcontroller')
const biteController = require('./controllers/bitecontroller')
const searchController = require('./controllers/searchcontroller')
const addfishController = require('./controllers/addfishcontroller')

const updateuser = require('./controllers/updateuser');
const updateuserfunction = require('./controllers/updateuserfunction');

const deletefish = require('./controllers/deletefish');
const deletefishfunction = require('./controllers/deletefishfunction');

const updatefish = require('./controllers/updatefish');
const updatefishfunction = require('./controllers/updatefishfunction');

const searchfishname = require('./controllers/searchfishname');
const searchfishnamefunction = require('./controllers/searchfishfunction')




//middleware
const redirectIfAuth = require('./middleware/redirectifAuth')
const authMiddleware = require('./middleware/authMiddleware');
const addfishfunction = require('./controllers/addfishfunction');

app.use(express.static('public')) //access to public folder
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})


app.set('view engine', 'ejs')


app.get('/', indexController) //เรียกใช้
app.get('/home', authMiddleware, homeController)//authMiddleware กันพิม url
app.get('/login', redirectIfAuth, loginController)
app.get('/register', redirectIfAuth, registerController)
app.get('/logout', logoutController)
app.get('/fish', fishController)//4
app.get('/molly', mollyController)//
app.get('/gruppy', gruppyController)//
app.get('/angel', angelController)//
app.get('/zebra', zebraController)//
app.get('/goldfish', goldfishController)//
app.get('/bite', biteController)//
app.get('/searchfish', searchController)//4
app.get('/addfish', addfishController)//4
app.get('/updateuser', updateuser)
app.get('/addfish', addfishfunction)
app.get('/updatefish', updatefish)
app.get('/deletefish', deletefish)
app.get('/searchfishname', searchfishname)




app.post('/user/update', updateuserfunction)
app.post('/user/register', redirectIfAuth, storeUserController)//post ใช้เพิ่มข้อมูล
app.post('/user/login', redirectIfAuth, loginUserController)
app.post('/fish/addfish', addfishfunction)
app.post('/fish/deletefish', deletefishfunction)
app.post('/fish/updatefish', updatefishfunction)
app.post('/fish/searchfishname', searchfishnamefunction)


app.listen(3000, () => {
    console.log("App listen on port 3000")
})
