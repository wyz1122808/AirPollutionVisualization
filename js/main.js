

const vancouveer = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=49.2400&lon=-123.1197&appid=206c3e6904669f5da96abc0ea2c3d9b2';
const link1 = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=';
const link2 = '&lon=';
const link3 = '&appid=206c3e6904669f5da96abc0ea2c3d9b2';
const names = ['vancouver', 'losangeles', 'boston'];
const locations = [[49.2400, -123.1197], [34.1050, -118.2965]]
let currentLink = ''
let currentCity1,currentCity2;
let firstCity;
let secondCity;
let rotate=0;


function setup(){
    console.log('setup function called');
    let renderer = createCanvas(windowWidth*0.9, windowHeight*2);
    renderer.parent("square")
    rectMode(CENTER)
  
    // noLoop();
    // background(255,0,0);

    
    
};

function draw(){
    background(255, 255, 255);
    noStroke()
    textSize(20)
    fill(0)
    textAlign(RIGHT, CENTER)
    text("good",width*0.35-5,height*0.03125)
    textAlign(LEFT, CENTER)
    text("very poor",width*0.65+5,height*0.03125)
    for(let i=0;i<width*0.3;i++){
        // let x = map(i,0,255,0,height*0.3)
        stroke(map(i,0,width*0.3,0,255),100,200)
        line(width*0.35+i,height*0.025,width*0.35+i,height*0.0375)
    }
    noStroke()
    if(currentCity1){
        fill(0)
        textAlign(LEFT, CENTER)
        text(str(currentCity1.name),400,height*0.1)
        
       text('(μg/m3)CO: ' + str(currentCity1.co),400,height*0.175);
       text('(μg/m3)PM2.5: ' + str( currentCity1.pm25),400,height*0.325);
       text('(μg/m3)NO2: ' + str( currentCity1.no2),400,height*0.475);
       text('(μg/m3)SO2: ' + str( currentCity1.so2),400,height*0.625);
       text('(μg/m3)PM10: ' + str( currentCity1.pm10),400,height*0.775);
       text('General Air Quality Index: '+ str( currentCity1.aqi), 400,height*0.925);

       let co = 2500
       let pm25 = 500
       let no2 = 2049
       let so2 = 1000
       let pm10 = 430

       let col = 2500
       let pm25l = 500
       let no2l = 2049
       let so2l = 1000
       let pm10l = 430

       if(currentCity1.co < co){
        col = currentCity1.co;
   }
   else{
        col = co;
   }
   if(currentCity1.pm25 < pm25){
        pm25l = currentCity1.pm25;
   }
   else{
        pm25l = pm25;
   }
   if(currentCity1.no2 < no2){
        no2l = currentCity1.no2;
   }
   else{
        no2l = no2;
   }
   if(currentCity1.so2 < so2){
        so2l = currentCity1.so2;
   }
   else{
        so2l = so2;
   }
   if(currentCity1.pm10 < pm10){
        pm10l = currentCity1.pm10;
   }
   else{
        pm10l = pm10;
   }

       let h1 = map(col,0,2500,0,height*0.125)
       fill(map(h1,0,height*0.1,0,255),100,200)
       rect(width*0.5-width*0.025,height*0.175,width*0.015,h1)
       fill(map(h1,0,height*0.1,0,255),100,200,100)
       rect(width*0.5-width*0.025,height*0.175,width*0.015,height*0.125)

       let h2 = map(pm25l,0,500,0,height*0.125)
       fill(map(h2,0,height*0.1,0,255),100,200)
       rect(width*0.5-width*0.025,height*0.325,width*0.015,h2)
       fill(map(h2,0,height*0.1,0,255),100,200,100)
       rect(width*0.5-width*0.025,height*0.325,width*0.015,height*0.125)


       let h3 = map(no2l,0,2049,0,height*0.125)
       fill(map(h3,0,height*0.1,0,255),100,200)
       rect(width*0.5-width*0.025,height*0.475,width*0.015,h3)
       fill(map(h3,0,height*0.1,0,255),100,200,100)
       rect(width*0.5-width*0.025,height*0.475,width*0.015,height*0.125)

       let h4 = map(so2l,0,1000,0,height*0.125)
       fill(map(h4,0,height*0.1,0,255),100,200)
       rect(width*0.5-width*0.025,height*0.625,width*0.015,h4)
       fill(map(h4,0,height*0.1,0,255),100,200,100)
       rect(width*0.5-width*0.025,height*0.625,width*0.015,height*0.125)

       let h5 = map(pm10l,0,430,0,height*0.125)
       fill(map(h5,0,height*0.1,0,255),100,200)
       rect(width*0.5-width*0.025,height*0.775,width*0.015,h5)
       fill(map(h5,0,height*0.1,0,255),100,200,100)
       rect(width*0.5-width*0.025,height*0.775,width*0.015,height*0.125)


    }

    if(currentCity2){
        fill(0)
        textAlign(RIGHT, CENTER)
        text(str(currentCity2.name),width-400,height*0.1)
      
       
       text('(μg/m3)CO: ' + str(currentCity2.co),width-400,height*0.175);
       text('(μg/m3)PM2.5: ' + str( currentCity2.pm25),width-400,height*0.325);
       text('(μg/m3)NO2: ' + str( currentCity2.no2),width-400,height*0.475);
       text('(μg/m3)SO2: ' + str( currentCity2.so2),width-400,height*0.625);
       text('(μg/m3)PM10: ' + str( currentCity2.pm10),width-400,height*0.775);
       text('General Air Quality Index: '+ str( currentCity2.aqi),width- 400,height*0.925);

       let co = 2500
       let pm25 = 500
       let no2 = 2049
       let so2 = 1000
       let pm10 = 430

       let coll = 2500
       let pm25ll = 500
       let no2ll = 2049
       let so2ll = 1000
       let pm10ll = 430

       if(currentCity2.co < co){
            coll = currentCity2.co;
       }
       else{
            coll = co;
       }
       if(currentCity2.pm25 < pm25){
            pm25ll = currentCity2.pm25;
       }
       else{
            pm25ll = pm25;
       }
       if(currentCity2.no2 < no2){
            no2ll = currentCity2.no2;
       }
       else{
            no2ll = no2;
       }
       if(currentCity2.so2 < so2){
            so2ll = currentCity2.so2;
       }
       else{
            so2ll = so2;
       }
       if(currentCity2.pm10 < pm10){
            pm10ll = currentCity2.pm10;
       }
       else{
            pm10ll = pm10;
       }
       
       let h1 = map(coll,0,2500,0,height*0.125)
       fill(map(h1,0,height*0.1,0,255),100,200)
       rect(width*0.5+width*0.025,height*0.175,width*0.015,h1)
       fill(map(h1,0,height*0.1,0,255),100,200,100)
       rect(width*0.5+width*0.025,height*0.175,width*0.015,height*0.125)


       let h2 = map(pm25ll,0,500,0,height*0.125)
       fill(map(h2,0,height*0.1,0,255),100,200)
       rect(width*0.5+width*0.025,height*0.325,width*0.015,h2)
       fill(map(h2,0,height*0.1,0,255),100,200,100)
       rect(width*0.5+width*0.025,height*0.325,width*0.015,height*0.125)


       let h3 = map(no2ll,0,2049,0,height*0.125)
       fill(map(h2,0,height*0.1,0,255),100,200)
       rect(width*0.5+width*0.025,height*0.475,width*0.015,h3)
       fill(map(h2,0,height*0.1,0,255),100,200,100)
       rect(width*0.5+width*0.025,height*0.475,width*0.015,height*0.125)

       let h4 = map(so2ll,0,1000,0,height*0.125)
       fill(map(h4,0,height*0.1,0,255),100,200)
       rect(width*0.5+width*0.025,height*0.625,width*0.015,h4)
       fill(map(h4,0,height*0.1,0,255),100,200,100)
       rect(width*0.5+width*0.025,height*0.625,width*0.015,height*0.125)

       let h5 = map(pm10ll,0,430,0,height*0.125)
       fill(map(h5,0,height*0.1,0,255),100,200)
       rect(width*0.5+width*0.025,height*0.775,width*0.015,h5)
       fill(map(h5,0,height*0.1,0,255),100,200,100)
       rect(width*0.5+width*0.025,height*0.775,width*0.015,height*0.125)

    }
}





function load(city,data){
    let t = '';
    console.log('load function called');
    
    
    city.load(data);
    // if (rotate==1){
    //     t = 'You\'ve successfully set your current city.';
    //     let time = Date(currentCity.dt );
    //     console.log('printing data for city 1:');
    //     document.getElementById('f1').innerHTML = 'AQI: ' + currentCity.aqi;
    //     document.getElementById('f2').innerHTML = 'Current time: ' + time;
    //     document.getElementById('f3').innerHTML = 'CO: ' + currentCity.co;
    //     document.getElementById('f4').innerHTML = 'PM2.5: '
    //     + currentCity.pm25;


    // }
    // else{
    //     t = 'You\'ve successfully set your destination.';
    //     let time = Date(currentCity.dt );
    //     console.log('printing data for city 2:');
    //     document.getElementById('s1').innerHTML = 'AQI: ' + currentCity.aqi;
    //     document.getElementById('s2').innerHTML = 'Current time: ' + time;
    //     document.getElementById('s3').innerHTML = 'CO: ' + currentCity.co;
    //     document.getElementById('s4').innerHTML = 'PM2.5: '
    //     + currentCity.pm25;
    // }
    // document.getElementById("rollText").innerHTML = t;
    
    
    

}

function checkLatLon(latt, lonn){
    let l = latt;
    let n = lonn;
    if(latt > 180){
        l = latt - 360;
    }
    if(latt < -180){
        l = latt + 360;
    }
    if(lonn > 180){
        n = lonn - 360;
    }
    if(lonn < -180){
        n = lonn + 360;
    }
    return [l, n];


}

function getName(lat, lon){

    let k = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + str(lat) + "&lon=" + str(lon) + "&limit=1&appid=206c3e6904669f5da96abc0ea2c3d9b2"




}



async function roll(latt, lonn){
    rotate = rotate + 1;
    rotate = rotate % 2;
    
    let ar = checkLatLon(latt, lonn);
    let t = '';
    console.log(rotate + ' ' + ar[0] + ' ' + [ar[1]]);
    
    let k = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + str(latt) + "&lon=" + str(lonn) + "&limit=1&appid=206c3e6904669f5da96abc0ea2c3d9b2"

    let resNAME = await fetch(k);
    let nameRes = await resNAME.json();

    let n = nameRes[0].name;

    if (rotate == 0){
        

        

        currentCity2 = new city(n, ar[0], [ar[1]]);
        currentCity2.update();
         
        currentLink = currentCity2.link;
        let response = await fetch(currentLink);
        let result = await response.json();
        load(currentCity2,result);
        // console.log(currentCity2.co);
        // console.log(t);
        t = 'You\'ve successfully set your destination. Next click will re-assign your current city.'; 
        
          
    }
    else{
        currentCity1 = new city(n, ar[0], [ar[1]]);
        currentCity1.update();
         
        currentLink = currentCity1.link;
        let response = await fetch(currentLink);
        let result = await response.json();
        let resNAME = await fetch(k);
        let nameRes = await resNAME.json();

        console.log(nameRes[0].name)
        load(currentCity1,result);
        // console.log(currentCity1.co);
        // console.log(t);
        t = 'You\'ve successfully set your current city. Next click will re-assign your destination.';
        
        
        
    }
   
    
   

}

