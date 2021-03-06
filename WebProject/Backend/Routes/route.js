var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());
var User = require('../models/User');
var syllabus = require('../models/Syllabus');

router.get('/verifyUser', function (req, res, next) {
  User.findOne({email: req.body.email}).then(user =>{
    if (user) {
      res.send('user exits')
    } else {
      res.send('new user')
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
});

router.get('/getSyllabusByUserId/:userId', function (req, res, next) {
  console.log('Get request by user id syllabus');
  syllabus.find({userId: req.params.userId})
      .exec(function (err, syllabus) {
        if(err){
          console.log("Error retrieving syllabus");
        }else {
          res.json(syllabus);
        }
      })
});
router.post('/syllabus', function (req, res, next) {

  var syllabusObj = {
    semester: req.body.syllabus.semester ,
    course: req.body.syllabus.course
  }
  console.log('Request in syllabus - ', req.body);
  syllabus.findOneAndUpdate({userId: req.body.userId},
      { "$push": { "Syllabus": syllabusObj } },
      { "new": true }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

});
router.post('/login', function (req, res, next) {
  User.findOne({email: req.body.email}).then(user =>{
    if (user) {
      if(req.body.password === user.password){
        res.json(user);
      }
      else{
        res.send('password does not match')
      }
    }
    else {
      res.send('User does not exist')
    }
  }).catch(err => {
    console.log("eroor");

    res.send('error: ' + err)
  })
});

router.post('/saveCode', function (req, res, next) {
  code.findOne({email: req.body.email}).then(user =>{
    if (user) {
      if(req.body.password === user.password){
        res.json(user);
      }
      else{
        res.send('password does not match')
      }
    }
    else {
      res.send('User does not exist')
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
});


router.put('/updateProfile', function(req, res, next){
  User.findByIdAndUpdate(req.body._id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
router.post('/register', function (req, res, next) {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.emailId,
    password: req.body.password,
    typeOfUser: req.body.typeOfUser
  }
  User.findOne({email: req.body.emailId}).then(user => {
    console.log(res.json(user));
    if (user) {
      console.log('user exists');
      res.send('user exits')
    }
    else {
      User.create(userData, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
});

module.exports = router;
