<template>
    <div class="current-week__block cweek-block cweek-block--ten">
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
                    <div class="temp__day"><span>Max</span>{{day.temperatureMax}}&#176;</div>
                    <div class="temp__night"><span>Min</span>{{day.temperatureMin}}&#176;</div>
                </div>
                <div class="current-day__separator" v-html="day.htmlTemplateWind"></div>
                <div class="thday-block__wind">
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windMax}}</div>
                    </div>
                </div>
                <div class="current-day__separator" v-html="day.htmlTemplatePrecip"></div>
                <div class="thday-block__precip">
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precip}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherTenDaysComponent',
        props: {
            weatherTwo: Object
        },
        methods: {
            setDaysObjProp(id, prop) {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather[id][prop] : '.'
            },
            getDay() {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather : ''
            },
            magicalReducer(reducedItem) {
                return reducedItem.map(function(index) {
                    var item = index
                    if (item.indexOf('snow') > -1 || item.indexOf('Blizzard') > -1) {
                        item = 'snow'
                    } else if (item.indexOf('Partly cloudy') > -1) {
                        item = 'partly-cloudy-day'
                    } else if (item.indexOf('Partly cloudy') > -1) {
                        item = 'partly-cloudy-night'
                    } else if (item.indexOf('Cloudy') > -1 || item.indexOf('Overcast') > -1) {
                        item = 'cloudy'
                    } else if (item.indexOf('Mist') > -1 || item.indexOf("Freezing fog") > -1) {
                        item = 'fog'
                    } else if (item.indexOf('sleet') > -1) {
                        item = 'sleet'
                    } else if (item.indexOf('rain') > -1 || item.indexOf('Light drizzle') > -1) {
                        item = 'rain'
                    }

                    return item;
                })
            },
        },
        computed: {
            getDaysOfWeek: function() {
                if (this.getDay() === '') {
                    return []
                } else {
                    return this.getDay().map(function(index) {
                        var dateArr = index.date.split('-');
                        return new Date(dateArr[0], dateArr[1] -1 , dateArr[2]).getDay()
                    });
                }
            },
            daysMaxWind: function() {
                if (this.getDay() === '') {
                    return []
                } else {
                    return this.getDay().map(function(index) {
                        return Math.max.apply(null, index.hourly.map(function(index) {
                            return +index.windspeedKmph
                        }));
                    });
                }
            },
            daysIcons: function() {
                if (this.getDay() === '') {
                    return []
                } else {
                    return this.getDay().map(function(index) {
                        return index.hourly.map(function(index) {
                            return index.weatherDesc[0].value
                        })
                    });
                }
            },
            icons: function() {
                var th = this;
                if (this.daysIcons.length === 0) {
                    return []
                } else {
                    return this.daysIcons.map(function(index) {
                        return th.magicalReducer(index)
                    }).map(function(index) {
                        if (index.indexOf('snow') > -1) {
                            index = 'snow';
                        } else if (index.indexOf('rain') > -1) {
                            index = 'rain';
                        } else if (index.indexOf('sleet') > -1) {
                            index = 'sleet';
                        } else if (index.indexOf('wind') > -1) {
                            index = 'wind';
                        } else if (index.indexOf('partly-cloudy-day') > -1) {
                            index = 'partly-cloudy-day';
                        } else if (index.indexOf('partly-cloudy-night') > -1) {
                            index = 'partly-cloudy-day';
                        } else if (index.indexOf('cloudy') > -1) {
                            index = 'cloudy';
                        } else {
                            index = 'clear-day'
                        }

                        return index
                    })
                }
            },
            days: function() {
                return {
                    '1': {
                        date: this.setDaysObjProp(0, 'date').split('-')[2],
                        day: 'today',
                        month: this.setDaysObjProp(0, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(0, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(0, 'mintempC'),
                        icon: this.iconSet[this.icons[0]],
                        windMax:  this.daysMaxWind[0],
                        precip: this.setDaysObjProp(0, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[0] === 0 || this.getDaysOfWeek[0] === 6,
                        htmlTemplateWind: `<span>Максимальная скорость ветра, <i>м.с</i></span>`,
                        htmlTemplatePrecip: `<span>Осадки, <i>мм</i></span>`
                    },
                    '2': {
                        date: this.setDaysObjProp(1, 'date').split('-')[2],
                        day: this.getDaysOfWeek[1],
                        month: this.setDaysObjProp(1, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(1, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(1, 'mintempC'),
                        icon: this.iconSet[this.icons[1]],
                        windMax:  this.daysMaxWind[1],
                        precip: this.setDaysObjProp(1, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[1] === 0 || this.getDaysOfWeek[1] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '3': {
                        date: this.setDaysObjProp(2, 'date').split('-')[2],
                        day: this.getDaysOfWeek[2],
                        month: this.setDaysObjProp(2, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(2, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(2, 'mintempC'),
                        icon: this.iconSet[this.icons[2]],
                        windMax:  this.daysMaxWind[2],
                        precip: this.setDaysObjProp(2, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[2] === 0 || this.getDaysOfWeek[2] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '4': {
                        date: this.setDaysObjProp(3, 'date').split('-')[2],
                        day: this.getDaysOfWeek[3],
                        month: this.setDaysObjProp(3, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(3, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(3, 'mintempC'),
                        icon: this.iconSet[this.icons[3]],
                        windMax:  this.daysMaxWind[3],
                        precip: this.setDaysObjProp(3, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[3] === 0 || this.getDaysOfWeek[3] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '5': {
                        date: this.setDaysObjProp(4, 'date').split('-')[2],
                        day: this.getDaysOfWeek[4],
                        month: this.setDaysObjProp(4, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(4, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(4, 'mintempC'),
                        icon: this.iconSet[this.icons[4]],
                        windMax:  this.daysMaxWind[4],
                        precip: this.setDaysObjProp(4, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[4] === 0 || this.getDaysOfWeek[4] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '6': {
                        date: this.setDaysObjProp(5, 'date').split('-')[2],
                        day: this.getDaysOfWeek[5],
                        month: this.setDaysObjProp(5, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(5, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(5, 'mintempC'),
                        icon: this.iconSet[this.icons[5]],
                        windMax:  this.daysMaxWind[5],
                        precip: this.setDaysObjProp(5, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[5] === 0 || this.getDaysOfWeek[5] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '7': {
                        date: this.setDaysObjProp(6, 'date').split('-')[2],
                        day: this.getDaysOfWeek[6],
                        month: this.setDaysObjProp(6, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(6, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(6, 'mintempC'),
                        icon: this.iconSet[this.icons[6]],
                        windMax:  this.daysMaxWind[6],
                        precip: this.setDaysObjProp(6, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[6] === 0 || this.getDaysOfWeek[6] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '8': {
                        date: this.setDaysObjProp(7, 'date').split('-')[2],
                        day: this.getDaysOfWeek[7],
                        month: this.setDaysObjProp(7, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(7, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(7, 'mintempC'),
                        icon: this.iconSet[this.icons[7]],
                        windMax:  this.daysMaxWind[7],
                        precip: this.setDaysObjProp(7, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[7] === 0 || this.getDaysOfWeek[7] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '9': {
                        date: this.setDaysObjProp(8, 'date').split('-')[2],
                        day: this.getDaysOfWeek[8],
                        month: this.setDaysObjProp(8, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(8, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(8, 'mintempC'),
                        icon: this.iconSet[this.icons[8]],
                        windMax:  this.daysMaxWind[8],
                        precip: this.setDaysObjProp(8, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[8] === 0 || this.getDaysOfWeek[8] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '10': {
                        date: this.setDaysObjProp(9, 'date').split('-')[2],
                        day: this.getDaysOfWeek[9],
                        month: this.setDaysObjProp(9, 'date').split('-')[1] - 1,
                        temperatureMax: this.setDaysObjProp(9, 'maxtempC'),
                        temperatureMin: this.setDaysObjProp(9, 'mintempC'),
                        icon: this.iconSet[this.icons[9]],
                        windMax:  this.daysMaxWind[9],
                        precip: this.setDaysObjProp(9, 'totalSnow_cm'),
                        isWeekend: this.getDaysOfWeek[9] === 0 || this.getDaysOfWeek[9] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
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