const express = require('express')
const newsController = require('../controllers/newsController')
const facultyController = require('../controllers/facultyController')
const appConfig = require("./../config/appConfig")


let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;

    app.get(baseUrl+'/news/all',newsController.getAllNews);

    app.get(baseUrl+'/faculty/principal',facultyController.getPrincipalInfo);

    app.get(baseUrl+'/faculty/viceprincipal',facultyController.getVicePrincipalInfo);

    //app.get(baseUrl+'/view/:blogId',blogController.viewByBlogId);

    //app.get(baseUrl+'/view/by/author/:author',blogController.viewByAuthor);

    //app.get(baseUrl+'/view/by/category/:category',blogController.viewByCategory);

    app.post(baseUrl+'/:listId/delete',newsController.deleteNews);

    //app.put(baseUrl+'/:blogId/edit',blogController.editBlog);

    app.post(baseUrl+'/news/create',newsController.createNews);

    app.post(baseUrl+'/faculty/create',facultyController.createFaculty);

    //app.get(baseUrl+'/:blogId/count/view',blogController.increaseBlogView);

    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}