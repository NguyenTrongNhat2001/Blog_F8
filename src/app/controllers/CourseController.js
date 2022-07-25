const Course = require('../models/Course');
const {  MongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] / courses/:slug
    

    show(req, res, next) {  
        Course.findOne({ slug: req.params.slug })
            .then(
                course =>  {res.render('courses/show',{course  :  MongooseToObject(course)});}
            )
            .catch(next);
       
    }
    //[GET] /courses/create
    create(req, res, next) {  
        res.render('courses/create');
       
    }
    //[POST] /courses/store
    store(req, res, next) {  
       // res.json(req.body);
       const fromData = req.body;
       fromData.image = `https://img.youtube.com/vi/${fromData.videoId}/sddefault.jpg`
       const course = new Course(fromData);
       course.save()
       .then(()=> res.redirect('/'))
       .catch(error =>{

       });
       
    }
}

module.exports = new CourseController();
