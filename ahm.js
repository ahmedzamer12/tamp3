function data() {
    var bigdiv = document.createElement("div");
    bigdiv.className = "ss" ;
    document.body.appendChild(bigdiv);
    var mydata = new XMLHttpRequest();
    mydata.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200)
        {
            var objectjson = JSON.parse(this.responseText);
            for ( let i = 0; i < objectjson.length; i++ ) {
                var div = document.createElement("div");
                div.className = "aa" ;
                bigdiv.appendChild(div);
                var userid = document.createElement("h1") ;
                var id = document.createElement("h2");
                var title = document.createElement("span");
                var body = document.createElement("p");
                div.appendChild(userid);
                div.appendChild(id);
                div.appendChild(title);
                div.appendChild(body);
                userid.innerHTML = objectjson[i].userId + "<br>";
                id.innerHTML = objectjson[i].id + "<br>";
                title.innerHTML = objectjson[i].title + "<br>";
                body.innerHTML = objectjson[i].body + "<br>";
            }
        }    
    };
    mydata.open("GEt" , "https://jsonplaceholder.typicode.com/posts" , true);
    mydata.send();
}; 
