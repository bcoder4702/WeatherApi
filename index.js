let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icons");
let tempvalue=document.getElementById("temp-value");
let climate= document.getElementById("climate");
let icon;

const searchbutton=document.getElementById("search-button");


searchbutton.addEventListener('click', ()=>{
   
    let searchInput=document.getElementById("search-input").value;
    clea();
    weather.fetchweather(searchInput);
})

let weather ={
    fetchweather: function (searchtext){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ searchtext + "&appid=c9cdb96aac998cf1a6ea385e7d374c0e"
        ).then((response) => response.json()) 
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name}=data;
        const{id,description}=data.weather[0]; // because weather is an array
        const{temp}=data.main;
        console.log(name,description,temp,id);
        loc.innerHTML=name;
       tempvalue.innerHTML=Math.round(temp-273);
        climate.innerHTML=description;
        if(id<300 && id>200){
            tempicon.src="thunderstorm.pgn"
        }
        if(id>300 && id<400){
            tempicon.src="rain.png"
        }

        if(id>800){
            tempicon.src="cloud.png"
        }
    },
   
};
function clea(){
    document.getElementById("search-input").value='';
}
document.getElementById("search-input").addEventListener('keyup',calling);
function calling(event){
    if(event.key=="Enter"){
        let searchInput=document.getElementById("search-input").value;
        clea();
        weather.fetchweather(searchInput);
    }
}
