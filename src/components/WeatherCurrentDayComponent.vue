<template>
    <div class="current-day__block cday-block">
        <div class="cday-block__weather">
            <div class="current-day__item cday-item" v-for="hour in hours" >
                <div class="cday-item__time">
                    {{hour.time < 10 ? '0' + hour.time : hour.time}}<span>00</span>
                </div>
                <div class="cday-item__icon">
                    <img :src="hour.icon" alt=""/>
                </div>
                <div class="cday-item__temp">
                    {{hour.temperature}}&#176;
                </div>
            </div>
        </div>
        <div class="current-day__separator">
            <span>Скорость ветра, <i>м.с</i></span>
            <div class="sep-line"></div>
        </div>
        <div class="cday-block__wind">
            <div class="current-day__item" v-for="hour in hours">
                <div class="cday-item__wind">{{hour.windSpeed}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherCurrentDayComponent',
        props: {
            weather: Object
        },
        methods: {
            getHoursObj(id, prop) {
                return this.weather.hasOwnProperty('hourly') ? this.weather.hourly.data[id][prop] : '.'
            }
        },
        computed: {
            hours: function() {
                return {
                    '1': {
                        time: new Date(+`${this.getHoursObj(0, 'time')}000`).getHours(),
                        temperature: Math.round((this.getHoursObj(0, 'temperature') - 32) / 1.8),
                        icon: this.iconSet[this.getHoursObj(0, 'icon')],
                        windSpeed: (this.getHoursObj(0, 'windSpeed') * 1000 / 3600).toFixed(1)
                    },
                    '2': {
                        time: new Date(+`${this.getHoursObj(2, 'time')}000`).getHours(),
                        temperature: Math.round((this.getHoursObj(2, 'temperature') - 32) / 1.8),
                        icon: this.iconSet[this.getHoursObj(2, 'icon')],
                        windSpeed: (this.getHoursObj(2, 'windSpeed') * 1000 / 3600).toFixed(1)
                    },
                    '3': {
                        time: new Date(+`${this.getHoursObj(5, 'time')}000`).getHours(),
                        temperature: Math.round((this.getHoursObj(5, 'temperature') - 32) / 1.8),
                        icon: this.iconSet[this.getHoursObj(5, 'icon')],
                        windSpeed: (this.getHoursObj(5, 'windSpeed') * 1000 / 3600).toFixed(1)
                    },
                    '4': {
                        time: new Date(+`${this.getHoursObj(8, 'time')}000`).getHours(),
                        temperature: Math.round((this.getHoursObj(8, 'temperature') - 32) / 1.8),
                        icon: this.iconSet[this.getHoursObj(8, 'icon')],
                        windSpeed: (this.getHoursObj(8, 'windSpeed') * 1000 / 3600).toFixed(1)
                    },
                    '5': {
                        time: new Date(+`${this.getHoursObj(11, 'time')}000`).getHours(),
                        temperature: Math.round((this.getHoursObj(11, 'temperature') - 32) / 1.8),
                        icon: this.iconSet[this.getHoursObj(11, 'icon')],
                        windSpeed: (this.getHoursObj(11, 'windSpeed') * 1000 / 3600).toFixed(1)
                    },
                    '6': {
                        time: new Date(+`${this.getHoursObj(14, 'time')}000`).getHours(),
                        temperature: Math.round((this.getHoursObj(14, 'temperature') - 32) / 1.8),
                        icon: this.iconSet[this.getHoursObj(14, 'icon')],
                        windSpeed: (this.getHoursObj(14, 'windSpeed') * 1000 / 3600).toFixed(1)
                    },
                    '7': {
                        time: new Date(+`${this.getHoursObj(17, 'time')}000`).getHours(),
                        temperature: Math.round((this.getHoursObj(17, 'temperature') - 32) / 1.8),
                        icon: this.iconSet[this.getHoursObj(17, 'icon')],
                        windSpeed: (this.getHoursObj(17, 'windSpeed') * 1000 / 3600).toFixed(1)
                    }
                }
            }
        },
        data: function() {
            return {
                message: 'Test',
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
                }
            }
        }
    }
</script>