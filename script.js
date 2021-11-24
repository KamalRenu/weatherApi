async function fetchData(){
    try{
        var data = await fetch("https://restcountries.com/v3.1/all");
        var dataObj = await data.json()
        console.log(dataObj);
        var board = document.createElement("div");
        board.style.width = "1000";  
        board.style.display = "flex";
        board.style.flexDirection = "row";
        board.style.flexWrap = "wrap";
        board.style.justifyContent = "center";
        board.style.backgroundColor = "#ffdea6";
        dataObj.forEach(element => {
            var box = document.createElement("div");
            box.style.height = "255px";
            box.style.width = "250px";
            box.style.border = "1px solid black";
            board.appendChild(box)
    
            var box1 = document.createElement("div");
            box1.style.width = "100%";
            box.appendChild(box1)
    
            var pic = document.createElement("img");
            pic.style.width = "100%";
            pic.style.height = "150px"
            pic.setAttribute("src",element.flags.png)
            box1.appendChild(pic)
    
            var box2 = document.createElement("p");
            box2.innerText = "name:"+element.name.common;
            box.appendChild(box2)
    
            var box3 = document.createElement("p");
            box3.innerText = "code:"+element.altSpellings[0];
            box.appendChild(box3)

            var APIkey = "08baf3803137d6add5c3596ba13372a1";
            var buttonTag = document.createElement("button");
            buttonTag.innerText = "weather";
            buttonTag.addEventListener('click',async (event)=>{
                try{
                    var data1 = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+element.latlng[0]+"&lon="+element.latlng[1]+"&appid="+APIkey);
                    var dataObj1 = await data1.json()
                    alert("weather:"+dataObj1.weather[0].description+'\n'+"Temperature:"+dataObj1.main.temp+'\n'+"Wind Speed:"+dataObj1.wind.speed);
                }
                catch(error){
                    console.log(error);
                }

            })
            box.appendChild(buttonTag)
        });
        document.body.appendChild(board);
    }
    catch(error){
        console.log(error);
    }
}
fetchData();