<template>
    <div class="current-week__block cweek-block">
        <div class="cweek-block__weather">
            <div class="current-week__item cweek-item cweek-item--first" v-for="day in days">
                <div class="cweek-item__date">
                    <span class="cdate__day-of-week" v-bind:class="{weekend: day.isWeekend}">{{daysName[day.day]}}</span>
                    <span class="cdate__day-of-month">{{day.date}} {{months[day.month]}}</span>
                </div>
                <div class="cweek-item__icon">
                    <img :src="day.icon" alt=""/>
                </div>
                <div class="cweek-item__temp">
                    <div class="temp__day"><span>Днем</span>{{day.temperatureMax}}&#176;</div>
                    <div class="temp__night"><span>Ночью</span>{{day.temperatureMin}}&#176;</div>
                </div>
                <div class="cweek-item__resume">
                   {{weatherReview[day.review]}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherCurrentWeekComponent',
        props: {
            weather: Object
        },
        methods: {
            getDaysObj(id, prop) {
                return this.weather.hasOwnProperty('daily') ? this.weather.daily.data[id][prop] : '.'
            }
        },
        computed: {
            days: function() {
                return {
                    '1': {
                        date: new Date(+`${this.getDaysObj(0, 'time')}000`).getDate(),
                        day: 'today',
                        month: new Date(+`${this.getDaysObj(0, 'time')}000`).getMonth(),
                        temperatureMax: Math.round((this.getDaysObj(0, 'temperatureMax') - 32) / 1.8),
                        temperatureMin: Math.round((this.getDaysObj(0, 'temperatureMin') - 32) / 1.8),
                        icon: this.iconSet[this.getDaysObj(0, 'icon')],
                        review: this.getDaysObj(0, 'icon'),
                        isWeekend: (new Date(+`${this.getDaysObj(0, 'time')}000`).getDay() === 0 || new Date(+`${this.getDaysObj(0, 'time')}000`).getDay() === 6)
                    },
                    '2': {
                        date: new Date(+`${this.getDaysObj(1, 'time')}000`).getDate(),
                        day: new Date(+`${this.getDaysObj(1, 'time')}000`).getDay(),
                        month: new Date(+`${this.getDaysObj(1, 'time')}000`).getMonth(),
                        temperatureMax: Math.round((this.getDaysObj(1, 'temperatureMax') - 32) / 1.8),
                        temperatureMin: Math.round((this.getDaysObj(1, 'temperatureMin') - 32) / 1.8),
                        icon: this.iconSet[this.getDaysObj(1, 'icon')],
                        review: this.getDaysObj(1, 'icon'),
                        isWeekend: (new Date(+`${this.getDaysObj(1, 'time')}000`).getDay() === 0 || new Date(+`${this.getDaysObj(1, 'time')}000`).getDay() === 6)

                    },
                    '3': {
                        date: new Date(+`${this.getDaysObj(2, 'time')}000`).getDate(),
                        day: new Date(+`${this.getDaysObj(2, 'time')}000`).getDay(),
                        month: new Date(+`${this.getDaysObj(2, 'time')}000`).getMonth(),
                        temperatureMax: Math.round((this.getDaysObj(2, 'temperatureMax') - 32) / 1.8),
                        temperatureMin: Math.round((this.getDaysObj(2, 'temperatureMin') - 32) / 1.8),
                        icon: this.iconSet[this.getDaysObj(2, 'icon')],
                        review: this.getDaysObj(2, 'icon'),
                        isWeekend: (new Date(+`${this.getDaysObj(2, 'time')}000`).getDay() === 0 || new Date(+`${this.getDaysObj(2, 'time')}000`).getDay() === 6)
                    },
                    '4': {
                        date: new Date(+`${this.getDaysObj(3, 'time')}000`).getDate(),
                        day: new Date(+`${this.getDaysObj(3, 'time')}000`).getDay(),
                        month: new Date(+`${this.getDaysObj(3, 'time')}000`).getMonth(),
                        temperatureMax: Math.round((this.getDaysObj(3, 'temperatureMax') - 32) / 1.8),
                        temperatureMin: Math.round((this.getDaysObj(3, 'temperatureMin') - 32) / 1.8),
                        icon: this.iconSet[this.getDaysObj(3, 'icon')],
                        review: this.getDaysObj(3, 'icon'),
                        isWeekend: (new Date(+`${this.getDaysObj(3, 'time')}000`).getDay() === 0 || new Date(+`${this.getDaysObj(3, 'time')}000`).getDay() === 6)
                    },
                    '5': {
                        date: new Date(+`${this.getDaysObj(4, 'time')}000`).getDate(),
                        day: new Date(+`${this.getDaysObj(4, 'time')}000`).getDay(),
                        month: new Date(+`${this.getDaysObj(4, 'time')}000`).getMonth(),
                        temperatureMax: Math.round((this.getDaysObj(4, 'temperatureMax') - 32) / 1.8),
                        temperatureMin: Math.round((this.getDaysObj(4, 'temperatureMin') - 32) / 1.8),
                        icon: this.iconSet[this.getDaysObj(4, 'icon')],
                        review: this.getDaysObj(4, 'icon'),
                        isWeekend: (new Date(+`${this.getDaysObj(4, 'time')}000`).getDay() === 0 || new Date(+`${this.getDaysObj(4, 'time')}000`).getDay() === 6)
                    },
                    '6': {
                        date: new Date(+`${this.getDaysObj(5, 'time')}000`).getDate(),
                        day: new Date(+`${this.getDaysObj(5, 'time')}000`).getDay(),
                        month: new Date(+`${this.getDaysObj(5, 'time')}000`).getMonth(),
                        temperatureMax: Math.round((this.getDaysObj(5, 'temperatureMax') - 32) / 1.8),
                        temperatureMin: Math.round((this.getDaysObj(5, 'temperatureMin') - 32) / 1.8),
                        icon: this.iconSet[this.getDaysObj(5, 'icon')],
                        review: this.getDaysObj(5, 'icon'),
                        isWeekend: (new Date(+`${this.getDaysObj(5, 'time')}000`).getDay() === 0 || new Date(+`${this.getDaysObj(5, 'time')}000`).getDay() === 6)
                    },
                    '7': {
                        date: new Date(+`${this.getDaysObj(6, 'time')}000`).getDate(),
                        day: new Date(+`${this.getDaysObj(6, 'time')}000`).getDay(),
                        month: new Date(+`${this.getDaysObj(6, 'time')}000`).getMonth(),
                        temperatureMax: Math.round((this.getDaysObj(6, 'temperatureMax') - 32) / 1.8),
                        temperatureMin: Math.round((this.getDaysObj(6, 'temperatureMin') - 32) / 1.8),
                        icon: this.iconSet[this.getDaysObj(6, 'icon')],
                        review: this.getDaysObj(6, 'icon'),
                        isWeekend: (new Date(+`${this.getDaysObj(6, 'time')}000`).getDay() == 0 || new Date(+`${this.getDaysObj(6, 'time')}000`).getDay() == 6)
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
                },
                weatherReview: {
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
                months: {
                    0: 'Января',
                    1: 'Февраля',
                    2: 'Марта',
                    3: 'Апреля',
                    4: 'Мая',
                    5: 'Июня',
                    6: 'Июля',
                    7: 'Августа',
                    8: 'Сентября',
                    9: 'Октября',
                    10: 'Ноября',
                    11: 'Декабря',
                },
                daysName: {
                    0: 'Вс',
                    1: 'Пн',
                    2: 'Вт',
                    3: 'Ср',
                    4: 'Чт',
                    5: 'Пт',
                    6: 'Сб',
                    'today': 'Сегодня'
                }
            }
        }
    }
</script>