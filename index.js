function getJokes(){
    const jokesApiUrl = "https://official-joke-api.appspot.com/random_ten";

    fetch(jokesApiUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<table class=\"table-bordered table-hover\">";
        html += "<tr><th>Setup</th><th>Punchline</th></tr>"
        json.forEach((joke)=>{
            html += "<tr><td>" + joke.setup + 
            "</td><td>" + joke.punchline + "</td>"
        });
        html+= "</table>";
        document.getElementById("jokeTable").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}
