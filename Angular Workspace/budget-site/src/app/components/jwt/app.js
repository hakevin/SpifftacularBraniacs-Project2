
// const express = require('express');
// const jwt = require('jsonwebtoken');
// // express is a server, but we already have ng serve
// const app = express();

// app.get('/api', (req,res) => { 
//     res.json({
//         message: 'welcome'
//     });
// });
// //app would be like http client
// app.post('/api/posts', (req , res) => {
// // similar to credentials
//     const user = {
//         username: 'user',
//         password: 'pass'
//     }
//     //                  localhost8080,({user}, 'somekey')
//     //this.httpClient.post(url, body, {withCredentials: true}).subscribe( (payload) => {
//     jwt.sign({user}, 'somekey', (err,token) =>{
//         res.json({
//             token
//         })
//          //this would be navigating by url
         
//     });
// },

// app.post('/api/posts', verifyToken (req , res) => {
//     jwt.verify(req.token, 'somekey', (err,authData) =>{
//         if(err){
//             res.sendStatus(403);
//         }else{
//             res.json({
//                 message: '...',
//                 authData
//             })
//         }
//     }
// }),






// //format of token
// //Authorization: Bearer <access_token>
// function verifyToken(req,res,next) {
//     //get header value
//     const bearerHeader = req.headers['authorization']
//     //check if undefined
//     if(typeof bearerHeader !== 'undefined'){
// //continue
// // split at space
// const bearer = bearerHeader.split(' ');
// // get token from array
// const bearerToken = bearer[1];
// // set token
// req.token = bearerToken;

// next(); 

//     }else{
// //forbidden
//         res.sendStatus(403);
//     }
// }






// app.post('/api/posts', (req , res) => {
//     res.json({
//         message: 'posted'
//     });
// }),


// app.listen(4200, () => console.log('server is all good'));
// // dont need since ng serve only watches localhost 4200