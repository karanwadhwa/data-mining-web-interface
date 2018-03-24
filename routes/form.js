const express = require('express');
const router = express.Router();

// Import Student Model
let Student = require('../models/student.js');

router.get('/', (req,res,next) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  req.checkBody('name','Enter your name bruh!').notEmpty();
  req.checkBody('email','Enter a valid email id').notEmpty().isEmail();
  req.checkBody('reg','Enter your registration number').notEmpty().isInt();
  req.checkBody('age','Enter your age').notEmpty().isInt();
  req.checkBody('gender','Select your gender').notEmpty();
  req.checkBody('tenBoard','Select your Secondary School Board').notEmpty();
  req.checkBody('ten','Enter your 10th grade marks').notEmpty().isInt();
  req.checkBody('twelve','Enter your 12th grade marks').notEmpty().isInt();
  req.checkBody('twPhy','Enter the marks you scored in 12th Boards Physics').notEmpty().isInt();
  req.checkBody('twChem','Enter the marks you scored in 12th Boards Chemistry').notEmpty().isInt();
  req.checkBody('twMath','Enter the marks you scored in 12th Boards Maths').notEmpty().isInt();
  req.checkBody('TTPhy1','Enter the TERM TEST grade you scored in Applied Physics 1').notEmpty();
  req.checkBody('TTChem1','Enter the TERM TEST  grade you scored in Applied Chemistry 1').notEmpty();
  req.checkBody('TTMath1','Enter the TERM TEST grade you scored in Applied Mathematics 1').notEmpty();
  req.checkBody('Phy1','Enter the FINAL grade you scored in Applied Physics 1').notEmpty();
  req.checkBody('Chem1','Enter the FINAL grade you scored in Applied Chemistry 1').notEmpty();
  req.checkBody('Math1','Enter the FINAL grade you scored in Applied Mathematics 1').notEmpty();
  req.checkBody('SEM1','Enter your Semester 1 Pointer').notEmpty().isInt();
  req.checkBody('TTPhy2','Enter the TERM TEST grade you scored in Applied Physics 2').notEmpty();
  req.checkBody('TTChem2','Enter the TERM TEST  grade you scored in Applied Chemistry 2').notEmpty();
  req.checkBody('TTMath2','Enter the TERM TEST  grade you scored in Applied Mathematics 2').notEmpty();
  req.checkBody('coaching','Did you attend any external coaching classes?').notEmpty();
  req.checkBody('travel','Enter your travel time to college').notEmpty();
  req.checkBody('attendance','Enter your attendance range').notEmpty();
  req.checkBody('health','How would you rate your general health?').notEmpty();

  //Get Errors
  let errors = req.validationErrors();

    if(errors){
      res.render('form', {
        errors:errors
      });
    }else{
      let student = new Student();
      student.name = req.body.name;
      student.email = req.body.email;
      student.reg = req.body.reg;
      student.age = req.body.age;
      student.gender = req.body.gender;
      student.tenBoard = req.body.tenBoard;
      student.ten = req.body.ten;
      student.twelve = req.body.twelve;
      student.twPhy = req.body.twPhy;
      student.twChem = req.body.twChem;
      student.twMath = req.body.twMath;
      student.TTPhy1 = req.body.TTPhy1;
      student.TTChem1 = req.body.TTChem1;
      student.TTMath1 = req.body.TTMath1;
      student.Phy1 = req.body.Phy1;
      student.Chem1 = req.body.Chem1;
      student.Math1 = req.body.Math1;
      student.SEM1 = req.body.SEM1;
      student.TTPhy2 = req.body.TTPhy2;
      student.TTChem2 = req.body.TTChem2;
      student.TTMath2 = req.body.TTMath2;
      student.coaching = req.body.coaching;
      student.travel = req.body.travel;
      student.attendance = req.body.attendance;
      student.health = req.body.health;

      student.save(function(err){
        if(err){
          console.log(err);
        }else{
          console.log('Details Saved');
          req.flash('green lighten-4 green-text text-darken-4', 'Your details were recorded successfully');
          res.redirect('/');
        }
      });
    }

});

module.exports = router;