var request=new XMLHttpRequest;
console.log(request);
request.open('GET',"https://restcountries.com/v3.1/all",true);
console.log(request.open('GET',"https://restcountries.com/v3.1/all",true))
request.send()
request.onload=function(){
    var data =request.response;
    
    var result = JSON.parse(data);
    for (var i=0;i<result.length;i++){
        console.log(result[i].name.common,":",result[i].region,":",result[i].population ,":",result[i].subregion);
    }

    
}