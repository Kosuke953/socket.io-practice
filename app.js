// // 中身を理解しながら見ないで書けるようになるまで練習。

// // // // // let app = require('http').createServer(handler);
// // // // // let io = require('socket.io').listen(app);
// // // // // let fs = require('fs');
// // // // // app.listen(3001);
// // // // // function handler(req, res){
// // // // //     fs.readFile(__dirname + '/index.html', function(err, data){
// // // // //         if(err){
// // // // //             res.writeHead(500);
// // // // //             return res.end('Error')
// // // // //         }
// // // // //         res.writeHead(200);
// // // // //         res.write(data);
// // // // //         res.end();
// // // // //     })
// // // // // }

// // // // let app = require('http').createServer(handler);
// // // // let io = require('socket.io').listen(app);
// // // // let fs = require('fs');
// // // // app.listen(3001);
// // // // function handler(req, res){
// // // //     fs.readFile(__dirname + '/index.html', function(err, data){
// // // //         if(err){
// // // //             res.writeHead(500);
// // // //             return res.end('Error');
// // // //         }
// // // //         res.writeHead(200);
// // // //         res.write(data);
// // // //         res.end();
// // // //     })
// // // // }

// // // let app = require('http').createServer(handler);
// // // let io = require('socket.io').listen(app);
// // // let fs = require('fs');
// // // app.listen(3001);

// // // function handler(req, res){
// // //     fs.readFile(__dirname + 'index.html' + function(err, data){
// // //         if(err){
// // //             res.writeHead(500);
// // //             return res.end('Error');
// // //         }
// // //         res.writeHead(200);
// // //         res.write(data);
// // //         res.end();
// // //     })
// // // }

// // let app = require('http').createServer(handler);
// // let io = require('socket.io').listen(app);
// // let fs = require('fs');
// // app.listen(3001);
// // function handler(req, res){
// //     fs.readFile(__dirname + '/index.html' + function(err, data){
// //         if(err){
// //             res.writeHead(500);
// //             return res.end('Error');
// //         }
// //         res.writeHead(200);
// //         res.write(data);
// //         res.end();
// //     })
// // }

// let app = require('http').createServer(handler);
// let io = require(socket.io).listen(app);
// let fs =require('fs');
// app.listen('3001');
// function handler (req, res){
//     fs.readFile(__dirname + '/index.html' + function(err, data){
//         if (err){
//             res.writeHead(500);
//             return res.end('ERROR');
//         }
//         res.writeHead(200);
//         res.write(data);
//         res.end();
//     })
// }
let app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');
app.listen(1337);
function handler(req, res){
    fs.readFile(__dirname + '/index.html' ,function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('ERROR');
        }
        res.writeHead(200);
        res.write(data);
        res.end();
    })
}