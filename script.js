let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let img = document.getElementById("img");
let country = document.getElementById("country");
let input = document.getElementById("inp");
let API_key = "82eb07718b53af1baef11333c91784e3";

const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    console.log(getData);

    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location")
        img.src="op.jpg";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
        country.innerHTML="";
    }
    if(jsonData.cod == 404){
        alert("Please Enter Right Location")
        img.src="op.jpg";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
        country.innerHTML="";
    }

    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;
    country.innerHTML=jsonData.sys.country;

    if (type.innerHTML == "Clouds") {
        img.src="cloud.jpg"
    } else if (type.innerHTML == "Clear") {
        img.src="clear.jpg"
    } else if (type.innerHTML == "Rain") {
        img.src="rain.jpg"
    } else if (type.innerHTML == "Mist") {
        img.src="clear2.jpg"
    } else if (type.innerHTML == "Haze") {
        img.src="haze.webp"
    } else if (type.innerHTML == "Storm") {
        img.src="storm.jpg";
    }else if (type.innerHTML == "Fog") {
        img.src="fog.jpg";
    }else if (type.innerHTML == "Smoke") {
        img.src="Smoke.jpg";
    }
    input.value = ""
}

function myFun() {
    search = input.value;
    data(search)
}


function onlyEnter(event) {
    if(event.key === 'Enter') {
        myFun();
    }
}

