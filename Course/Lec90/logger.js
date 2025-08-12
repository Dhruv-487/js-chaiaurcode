//MODULES AND CLASSES OF NODE JS
const fs=require('fs')
const os=require('os')

const EventEmitter=require('events') 

//the whole idea behind the even emitter is i am allowed to throw an event
class Logger extends EventEmitter{
    //CUSTOM METHOD
    log(message){
        //WHATEVER MSG I AM GIVING TO TO YOU JUST USE THAT MSG
        this.emit('message',{message})
    }
}

//WE WENT AHEAD AND CREATED A SIMPLE OBJ LOGGER
const logger=new Logger()
//WE ARE ALSO KEEPING A REFERENCE THAT THIS IS GOING TO BE THE FILE  WHERE WE ARE DUMPING DOWN THE INFORMATION
const logFile='./eventlog.txt'

const logToFile=(event)=>{
    //THIS TAKES AN EVENT AND IT GOES AHEAD AND CRAFT A LOG MESSAGE BASED ON THE EVENT AND THAT EVENT.MSG COMES FROM ABOVE LOG AND THAT WHY WE TREATING IT AS EVENT AND EXTRACTING THE EVENT FROM HERE 
    const logMessage=`${new Date().toISOString()} - ${event.message} \n`
    fs.appendFileSync(logFile,logMessage)
}

//logger is basically an object of the logger class which extend to the event Emitter

//(1,2)
// 1- the event which is i listening for 
// 2-do this after that work is done

logger.on('message',logToFile)//THIS IS CONSTANTLY LISTENING
//THIS LINES LISTENS WHEN THAT EMIT CODE EXECUTES 

// this willl not work here as we are not throwing any event as we have created the definition part we havent used it anywhere we need to learn how logger or an object.log untill used to do a log activity our event listener dont do anything 


//after certain intervals i want to calc something from the os and i want to launch my eevent which is the log get the resource calc and launch it 

//THIS EXEC AFTER CERTAIN PRD OF TIME
setInterval(()=>{
    //HOW MUCH FREE MEMORY WE HAVE AT THAT TIME
    const memoryUsage=(os.freemem()/os.totalmem()) * 100
    logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`)
},3000)

logger.log('Application started');
logger.log('Application event occured ');
//SO WHAT'S HAPPENING
// every 3 sec this method will run and   