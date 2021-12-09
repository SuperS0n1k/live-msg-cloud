const fetch = require("node-fetch");
const { Session, Cloud } = require('scratchcloud');
const s2n = require('string2num');
var Vibrant = require('node-vibrant');
let at = '';
var Scratch = require('scratch-api');

Scratch.UserSession.create(process.env.USERNAME, process.env.PASSWORD, function(err, user) {
  user.cloudSession(process.env.PROJECT_ID, function(err, cloud) {


    })
    
  cloud.set(c('pleaseRefresh'), 200);
