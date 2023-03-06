class city {
    constructor(name, lat, lon){
        this.link = '';
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.aqi = 0;
        this.co = 0;
        this.no2 = 0;
        this.so2 = 0;
        this.pm25 = 0;
        this.pm10 = 0;
        this.dt = 0;

    }

    update(){
        const link1 = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=';
        const link2 = '&lon=';
        const link3 = '&appid=206c3e6904669f5da96abc0ea2c3d9b2';
        this.link = link1 + this.lat + link2 + this.lon + link3;
        // loadJSON(link, this.load);
        
        

    }
    load(data){

        this.aqi = data.list[0].main.aqi;
        
        this.co = data.list[0].components.co;
        this.no2 = data.list[0].components.no2;
        this.pm25 = data.list[0].components.pm2_5;
        this.so2 = data.list[0].components.so2;
        this.pm10 = data.list[0].components.pm10;
        this.dt = data.list[0].dt;

    }


}