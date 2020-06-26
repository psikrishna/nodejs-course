const log = console.log;

fetch('http://localhost:3000/weather?address=@@').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            log(data.error)
        }
        else{
            log(data.location)
            log(data.forecast)
        }
    })
});