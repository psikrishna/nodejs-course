const log = console.log;

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        log(data);
    });
});