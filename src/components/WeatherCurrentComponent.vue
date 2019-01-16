<template>
    <div class="currentWeather-block" v-bind:style="{backgroundImage: bgStyle}">
        <div class="currentWeather__date-block">
            <div>
                Cейчас <span class="currentWeather__time">{{time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}}</span>
                <br/>
                <span class="currentWeather__date">{{time.toLocaleDateString()}}</span>
            </div>
        </div>
        <div clase="weather-prop-name weather-prop-name--main">
            <img class="weather-icon" :src="imageUrl" alt=""/>
            <span class="weather-prop-value weather-prop-value--temp">{{curTemperature}}&#176;</span>
        </div>
        <p class="weather--more">{{weatherReview}}</p>
        <div class="currentWeather__detail">
            <div class="weather-prop-name">Ветер <span class="weather-prop-value">{{windSpeed}} м/c</span></div>
            <div class="weather-prop-name">Влажность <span class="weather-prop-value">{{humidity}}%</span></div>
            <div class="weather-prop-name">Давление <span class="weather-prop-value">{{curPressure }}<span> мм     рт.ст.</span></span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherCurrentComponent',
        props: {
            weather: Object
        },
        computed: {
            curTemperature: function() {
                return Math.round((this.getProperty('temperature') - 32) / 1.8);
            },
            curPressure: function() {
                return Math.round(this.getProperty('pressure') * 0.75)
            },
            humidity: function() {
                return Math.round(this.getProperty('humidity') * 100);
            },
            windSpeed: function() {
                return (this.getProperty('windSpeed') * 1000 / 3600).toFixed(1)
            },
            weatherReview: function() {
                return this.weatherReviewList[this.getProperty('icon')];
            },
            upTime: function() {
                var th = this;
                setInterval(function() {th.time = new Date()}, 1000)
            },
            imageUrl: function() {
                return this.iconSet[this.getProperty('icon')];
            },
            bgStyle: function() {
                return `url('${this.windowBg[this.getProperty('icon')]}')`
            }
        },
        methods: {
          getProperty(prop) {
              return this.weather.hasOwnProperty('currently') ? this.weather.currently[prop] : '~'
          }
        },
        data: function() {
            return {
                message: 'Test',
                time: new Date(),
                weatherReviewList: {
                    'rain': 'Дождь',
                    'snow': 'Снег',
                    'cloudy': 'Пасмурно',
                    'partly-cloudy-day': 'Переменная облачность',
                    'partly-cloudy-night': 'Переменная облачность',
                    'sleet': 'Снег с дождем',
                    'wind': 'Сильный ветер',
                    'fog': 'Туман',
                    'clear-day': 'Ясное небо',
                    'clear-night': 'Ясное небо'
                },
                iconSet: {
                    'rain': require('../image/rain.png'),
                    'snow': require('../image/snow.png'),
                    'cloudy': require('../image/cloud.png'),
                    'partly-cloudy-day': require('../image/cloudy.png'),
                    'partly-cloudy-night': require('../image/nightCloudy.png'),
                    'sleet': require('../image/nightSnowRain.png'),
                    'wind': require('../image/wind.png'),
                    'fog': require('../image/fog.png'),
                    'clear-day': require('../image/sun.png'),
                    'clear-night': require('../image/moon.png')
                },
                windowBg: {
                    'rain': require('../image/rainbg.jpg'),
                    'snow': require('../image/snowbg.jpg'),
                    'cloudy': require('../image/cloudybg.jpg'),
                    'partly-cloudy-day': require('../image/partlycloudybg.jpg'),
                    'partly-cloudy-night': require('../image/partlycloudybg.jpg'),
                    'sleet': require('../image/rainbg.jpg'),
                    'wind': require('../image/windbg.jpg'),
                    'fog': require('../image/fogbg.jpg'),
                    'clear-day': require('../image/clearDaybg.jpg'),
                    'clear-night': require('../image/clearnightbg.png')
                }
            }
        }
    }
</script>