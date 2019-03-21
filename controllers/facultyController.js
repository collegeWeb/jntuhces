const express = require('express')
const mongoose = require('mongoose');

//Importing the model here 
const FacultyModel = mongoose.model('Faculty')

let getPrincipalInfo = (req, res) => {
    FacultyModel.find({tag: 'principal'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Principal Details Found')
                res.send("No Principal Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getVicePrincipalInfo = (req, res) => {
    FacultyModel.find({tag: 'viceprincipal'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Vice Principal Details Found')
                res.send("No Vice Principal Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

/**
 * function to create the blog.
 */
let createFaculty = (req, res) => {

    let newFaculty = new FacultyModel({

        name: req.body.name,
        designation: req.body.designation,
        field: req.body.field,
        image: req.body.image,
        text: req.body.text,
        official_email: req.body.official_email,
        alternate_email: req.body.alternate_email,
        tag: req.body.tag
    }) // end new blog model

    //let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    //newBlog.tags = tags

    newFaculty.save((err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(result)

        }
    }) // end new blog save
}

module.exports = {
    getPrincipalInfo: getPrincipalInfo,
    createFaculty: createFaculty,
    getVicePrincipalInfo: getVicePrincipalInfo
}