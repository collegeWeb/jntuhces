const express = require('express')
const newsController = require('../controllers/newsController')
const facultyController = require('../controllers/facultyController')
const notifsController = require('../controllers/notifsController')
const appConfig = require("./../config/appConfig")


let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;
    
    app.get('/', function (req, res) {
    res.send('Hello! This App is for JNTUHCES. Contact Administrator for more routes. Admin:Surya(9494391985)')
    })

    app.get(baseUrl+'/news/all',newsController.getAllNews);

    app.get(baseUrl+'/faculty/principal',facultyController.getPrincipalInfo);

    app.get(baseUrl+'/faculty/viceprincipal',facultyController.getVicePrincipalInfo);
    
    app.get(baseUrl + '/faculty/cse', facultyController.getCseFacultyInfo);

    app.get(baseUrl + '/faculty/ece', facultyController.getEceFacultyInfo);

    app.get(baseUrl + '/faculty/cee', facultyController.getCeeFacultyInfo);

    app.get(baseUrl + '/faculty/msnt', facultyController.getMsntFacultyInfo);
    
    app.get(baseUrl + '/images/cse', imageController.getCseImages);

    app.get(baseUrl + '/images/ece', imageController.getEceImages);

    app.get(baseUrl + '/images/cee', imageController.getCeeImages);

    app.get(baseUrl + '/images/msnt', imageController.getMsntImages);

    //app.get(baseUrl+'/view/:blogId',blogController.viewByBlogId);

    //app.get(baseUrl+'/view/by/author/:author',blogController.viewByAuthor);

    //app.get(baseUrl+'/view/by/category/:category',blogController.viewByCategory);

    app.post(baseUrl + '/news/:listId/delete', newsController.deleteNews);

    app.post(baseUrl + '/faculty/:name/delete', facultyController.deleteFaculty);
    
    app.post(baseUrl + '/image/:imageId/delete', imageController.deleteImage);

    //app.put(baseUrl+'/:blogId/edit',blogController.editBlog);

    app.post(baseUrl+'/news/create',newsController.createNews);

    app.post(baseUrl+'/faculty/create',facultyController.createFaculty);
    
    app.post(baseUrl + '/image/create', imageController.createImage);

    app.post(baseUrl+'/notifications',notifsController.addPushSubscriber);

    app.post(baseUrl+'/newsletter',notifsController.sendNewsletter);

    //app.get(baseUrl+'/:blogId/count/view',blogController.increaseBlogView);

    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}
