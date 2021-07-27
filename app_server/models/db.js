const { SIGINT } = require('constants');

const { win32 } = require('path');
var mongoose = require('mongoose');
var readline = require('readline');
var environment = process.env.NODE_ENV;
var dbURI = "mongodb://localhost:27017/loc8r";
if(environment === 'production'){
    console.log("Pointing to production");
    dbURI = process.env.MONGODB_URI;
}

var connectionOptions = {useNewUrlParser: true,  useUnifiedTopology: true};
mongoose.connect(dbURI, connectionOptions);

if(process.platform === "win32"){
    var rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        }
    );

    rl.on("SIGINT", function emitSIGNINT(){process.emit("SIGNINT")}) //SIGINT = Nodejs's closing signal
    rl.on("SIGTERM", function emitSIGNINT(){process.emit("SIGTERM")}) //SIGTERM = Heroku's closing signal
    rl.on("SIGUSR2", function emitSIGNINT(){process.emit("SIGUSR2")}) // SIGUSER2 = Nodemon's restarting signal
}

function exitProcess(){
    process.exit(0);
}
function killProcess(){
    process.kill(process.pid, 'SIGUSR2');
}
process.on("SIGINT", () => {
    gracefulShutdown('Local app termination', exitProcess);
});
process.on("SIGTERM", () => {
    gracefulShutdown('Heroku app termination', exitProcess);
});
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', killProcess);
});

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected through : " + msg);
        callback();
    });
}



function connectionSuccess(){
    console.log(`Mongodb connection ${dbURI}`);
}
function connectionFailed(){
    console.log(`Connection Failes`);
}
function dbDisconnected(){
    console.log(`DB disconnected from ${dbURI}`)
}
mongoose.connection.on('connected', connectionSuccess);
mongoose.connection.on('err', connectionFailed);
mongoose.connection.on('dicconnected', dbDisconnected);

require('./locations');