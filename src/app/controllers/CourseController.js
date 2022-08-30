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
       .then(()=> res.redirect('/me/stored/courses'))
       .catch(error =>{

       });
       
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {  
        Course.findById(req.params.id)
            .then(course =>  res.render('courses/edit',
            {
                course: MongooseToObject(course)
            }) )
            .catch(next)
       
       
    }
    //[PUT] /courses/:id
    update(req, res, next) {  
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }   
    //[delete] /courses/:id
    
    destroy(req, res, next)
    {
        Course.delete({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }

    //[delete] /courses/:id/force

    forceDestroy(req, res, next)
    {
        Course.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }

    //[patch] /courses/:id/restore
    restore(req, res, next)
    {
        Course.restore({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
}

module.exports = new CourseController();
