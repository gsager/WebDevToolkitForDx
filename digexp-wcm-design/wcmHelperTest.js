/*
 * Copyright 2015  IBM Corp.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the 
 * specific language governing permissions and limitations under the License.
 */

wcmHelper = require('./wcmHelper');
// wcmHelper.init('gsagercf05trans.rtp.raleigh.ibm.com', 10039, '/wps/mycontenthandler', 'wpsadmin', 'wpsadmin','C:/awcm1');
//var options = { project: 'TestProject'};
var options = { project1: 'VP Project'};
//wcmHelper.init('gsagerwcmdesign.rtp.raleigh.ibm.com', 10039, '/wps/mycontenthandler', 'wpsadmin', 'wpsadmin', false, 'c:\awcm1', options).then(function(){
wcmHelper.init('gsagerwcmdesign.rtp.raleigh.ibm.com', 10039, '/wps/mycontenthandler/Gws', 'wpsadmin', 'wpsadmin', false, 'c:\\awcm1', options).then(function(){
	wcmHelper.pushLibrary('Web Content Templates 3.0', true, options).then(function(files){
		console.log('sucess');
	},
	function(err){
		console.log(err);
	});
},
    function(err){
        console.log(err);
    });
// wcmHelper.init('gsagerwcmdesign.rtp.raleigh.ibm.com', 10039, '/wps/mycontenthandler', 'wpsadmin', 'wpsadmin','C:/awcm1');

/*wcmHelper.getLibraries().then(function(libs){
});*/
