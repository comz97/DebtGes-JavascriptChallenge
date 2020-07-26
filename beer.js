const btnSearch = document.getElementById('btnSearch');
const txtSearch = document.getElementById('food');
const btnSearch1 = document.getElementById('btnSearch1');
const txtSearch1 = document.getElementById('name');
const btnSearch2 = document.getElementById('btnSearch2');
const txtSearch2 = document.getElementById('date');
const btnReload = document.getElementById('btnReload');
const resultArea = document.getElementById('result');
let out="";

btnSearch.onclick = function(){
    var searchTerm = txtSearch.value;
    const url = `https://api.punkapi.com/v2/beers?food=${searchTerm}`;
    console.log(url)
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(jsonObject){
        console.log(jsonObject);
        for(beer in jsonObject){
            const beerInfo = new Array(jsonObject[beer].name,jsonObject[beer].tagline,jsonObject[beer].description,jsonObject[beer].image_url);
            beerOut(beerInfo);
        }
        resultArea.innerHTML=out;
    })
    .catch(function(e){
        console.log("Error: ", + e);
    });
}

btnSearch1.onclick = function(){
    var searchTerm = txtSearch1.value;
    const url = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`;
    console.log(url)
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(jsonObject){
        console.log(jsonObject);
        for(beer in jsonObject){
            const beerInfo = new Array(jsonObject[beer].name,jsonObject[beer].tagline,jsonObject[beer].description,jsonObject[beer].image_url);
            beerOut(beerInfo);
        }
        resultArea.innerHTML=out;
    })
    .catch(function(e){
        console.log("Error: ", + e);
    });
}

btnSearch2.onclick = function(){
    var searchTerm = txtSearch2.value;
    const url = `https://api.punkapi.com/v2/beers?brewed_before=${searchTerm}`;
    console.log(url)
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(jsonObject){
        console.log(jsonObject);
        for(beer in jsonObject){
            const beerInfo = new Array(jsonObject[beer].name,jsonObject[beer].tagline,jsonObject[beer].description,jsonObject[beer].image_url);
            beerOut(beerInfo);
        }
        resultArea.innerHTML=out;
    })
    .catch(function(e){
        console.log("Error: ", + e);
    });
}

function beerOut(beer){
    console.log(beer);
    out += `<div class="beer">
        <div class="beerImage"><img src="${beer[3]}"/></div>
        <div class="beerText">
            <h2>${beer[0]}</h2>
            <h3>${beer[1]}</h3>
            <p><em>${beer[2]}</em></p>
            </div><!--beerText-->
            </div><!--beer-->`;
}
