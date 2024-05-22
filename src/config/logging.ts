const getTimeStamp = () => {
    return new Date().toISOString();
}

const info = (namespace : string, messege: string, object?:any)=>{
    if(object){
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${messege}`,object)
    }else{
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${messege}`)
    }
}
const warn = (namespace : string, messege: string, object?:any)=>{
    if(object){
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${messege}`,object)
    }else{
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${messege}`)
    }
}
const debug = (namespace : string, messege: string, object?:any)=>{
    if(object){
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${messege}`,object)
    }else{
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${messege}`)
    }
}
const error = (namespace : string, messege: string, object?:any)=>{
    if(object){
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${messege}`,object)
    }else{
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${messege}`)
    }
}

//exporting as a object
export default{
    info,
    debug,
    error,
    warn
}