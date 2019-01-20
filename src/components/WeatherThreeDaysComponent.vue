<template>
    <div class="threedays__block thd-block">
        <div class="thd-block__weather">
            <div class="thd-block__item thday-item thday-item--first" v-for="day in days">
                <div class="thday-item__date">
                    <span class="cdate__day-of-week" v-bind:class="{weekend: day.isWeekend}">{{daysName[day.day]}}</span>
                    <span class="cdate__day-of-month">{{day.date}} {{months[day.month]}}</span>
                </div>
                <div class="thday-item__temp">
                    <div class="thday-item__info th-info">
                        <span class="th-info__time">03:00</span>
                        <img class="th-info__icon" :src="day.iconArr[1]" />
                        <span class="th-info__temp">{{day.temperatureArr[1]}}&#176;</span>
                    </div>
                    <div class="thday-item__info th-info">
                        <span class="th-info__time">06:00</span>
                        <img class="th-info__icon" :src="day.iconArr[2]" />
                        <span class="th-info__temp">{{day.temperatureArr[2]}}&#176;</span>
                    </div>
                    <div class="thday-item__info th-info">
                        <span class="th-info__time">09:00</span>
                        <img class="th-info__icon" :src="day.iconArr[3]" />
                        <span class="th-info__temp">{{day.temperatureArr[3]}}&#176;</span>
                    </div>
                    <div class="thday-item__info th-info">
                        <span class="th-info__time">12:00</span>
                        <img class="th-info__icon" :src="day.iconArr[4]" />
                        <span class="th-info__temp">{{day.temperatureArr[4]}}&#176;</span>
                    </div>
                    <div class="thday-item__info th-info">
                        <span class="th-info__time">15:00</span>
                        <img class="th-info__icon" :src="day.iconArr[5]" />
                        <span class="th-info__temp">{{day.temperatureArr[5]}}&#176;</span>
                    </div>
                    <div class="thday-item__info th-info">
                        <span class="th-info__time">18:00</span>
                        <img class="th-info__icon" :src="day.iconArr[6]" />
                        <span class="th-info__temp">{{day.temperatureArr[6]}}&#176;</span>
                    </div>
                    <div class="thday-item__info th-info">
                        <span class="th-info__time">21:00</span>
                        <img class="th-info__icon" :src="day.iconArr[7]" />
                        <span class="th-info__temp">{{day.temperatureArr[7]}}&#176;</span>
                    </div>
                </div>
                <div class="current-day__separator" v-html="day.htmlTemplateWind">
                </div>
                <div class="thday-block__wind">
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windArr[1]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windArr[2]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windArr[3]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windArr[4]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windArr[5]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windArr[6]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__wind">{{day.windArr[7]}}</div>
                    </div>
                </div>
                <div class="current-day__separator" v-html="day.htmlTemplatePrecip"></div>
                <div class="thday-block__precip">
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precipArr[1]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precipArr[2]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precipArr[3]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precipArr[4]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precipArr[5]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precipArr[6]}}</div>
                    </div>
                    <div class="thday__item">
                        <div class="thday-item__precip">{{day.precipArr[7]}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherThreeDaysComponent',
        props: {
            weatherTwo: Object
        },
        methods: {
            setDaysObjProp(id, prop) {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather[id][prop] : '.'
            },
            getDayHourlyTemp(id) {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather[id].hourly.map(function(index) { return index.tempC }) : '.'
            },
            getDayHourlyWind(id) {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather[id].hourly.map(function(index) { return Math.round(index.windspeedKmph / 3.6)}) : '.'
            },
            getDayHourlyIcons(id) {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather[id].hourly.map(function(index) { return index.weatherDesc[0].value }) : '.'
            },
            getDayHourlyPrecip(id) {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather[id].hourly.map(function(index) { return index.precipMM }) : '.'
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
                        return th.magicalReducer(index).map(function(index) {
                            return th.iconSet[index]
                        })
                    })
                }
            },
            days: function() {
                return {
                    '1': {
                        date: this.setDaysObjProp(0, 'date').split('-')[2],
                        day: 'today',
                        month: this.setDaysObjProp(0, 'date').split('-')[1] - 1,
                        temperatureArr: this.getDayHourlyTemp(0),
                        iconArr: this.icons[0],
                        windArr:  this.getDayHourlyWind(0),
                        precipArr: this.getDayHourlyPrecip(0),
                        isWeekend: this.getDaysOfWeek[0] === 0 || this.getDaysOfWeek[0] === 6,
                        htmlTemplateWind: `<span>Cкорость ветра, <i>м.с</i></span><div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<span>Осадки, <i>мм</i></span><div class="sep-line"></div>`,
                        isShow: true,
                        isFirst: true,
                        id: 1
                    },
                    '2': {
                        date: this.setDaysObjProp(1, 'date').split('-')[2],
                        day: this.getDaysOfWeek[1],
                        month: this.setDaysObjProp(1, 'date').split('-')[1] - 1,
                        temperatureArr: this.getDayHourlyTemp(1),
                        iconArr: this.icons[1],
                        windArr:  this.getDayHourlyWind(1),
                        precipArr: this.getDayHourlyPrecip(1),
                        isWeekend: this.getDaysOfWeek[1] === 0 || this.getDaysOfWeek[1] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`,
                        isShow: false,
                        isFirst: false,
                        id: 2
                    },
                    '3': {
                        date: this.setDaysObjProp(2, 'date').split('-')[2],
                        day: this.getDaysOfWeek[2],
                        month: this.setDaysObjProp(2, 'date').split('-')[1] - 1,
                        temperatureArr: this.getDayHourlyTemp(2),
                        iconArr: this.icons[2],
                        windArr:  this.getDayHourlyWind(2),
                        precipArr: this.getDayHourlyPrecip(2),
                        isWeekend: this.getDaysOfWeek[2] === 0 || this.getDaysOfWeek[2] === 6,
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`,
                        isShow: false,
                        isFirst: false,
                        id: 3
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