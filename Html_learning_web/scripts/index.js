async function calc(){
    var a=100;
    setTimeout(function(){a=2+2},4000)
    return Promise.reject(a);
    
}
calc().then(function(result){console.log(result)},console.log("i mr rejected"));