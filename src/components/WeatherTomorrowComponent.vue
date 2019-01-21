<template>
    <div>
        <div class="current-location">Погода в городе - <span>{{location}}</span> на завтра</div>
        <div class="current-week__block cweek-block cweek-block--ten tomorrow">
            <div class="cweek-block__weather">
                <div class="current-week__item cweek-item cweek-item--first" v-for="hour in hours">
                    <div class="cweek-item__date">
                        <span class="cdate__day-of-week">{{hour.hour}}</span>
                    </div>
                    <div class="cweek-item__icon">
                        <img :src="hour.icon" alt=""/>
                    </div>
                    <div class="cweek-item__temp">
                        <div class="temp__day">{{hour.temperature}}&#176;</div>
                    </div>
                    <div class="cweek-item__resume">
                        {{hour.review}}
                    </div>
                    <div class="current-day__separator" v-html="hour.htmlTemplateWind">
                    </div>
                    <div class="thday-block__wind">
                        <div class="thday__item">
                            <div class="thday-item__wind">{{hour.wind}}</div>
                        </div>
                    </div>
                    <div class="current-day__separator" v-html="hour.htmlTemplatePrecip">
                    </div>
                    <div class="thday-block__precip">
                        <div class="thday__item">
                            <div class="thday-item__precip">{{hour.precip}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherTomorrowComponent',
        props: {
            weatherTwo: Object,
            location: [String, Object]
        },
        methods: {
            getDayObj(id, prop) {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather['1'].hourly[id][prop] : '.'
            },
            getDayIconsUrl() {
                return this.weatherTwo.hasOwnProperty('data') ? this.weatherTwo.data.weather['1'].hourly : ''
            }
        },
        computed: {
            icons: function() {
                if (this.getDayIconsUrl() === '') {
                    return []
                } else {
                    return this.getDayIconsUrl().map(function(index) {
                        var firstUrl = index.weatherDesc[0].value;

                        if (firstUrl.indexOf('snow') > -1 || firstUrl.indexOf('Blizzard') > -1) {
                            firstUrl = 'snow'
                        } else if (firstUrl.indexOf('Partly cloudy') > -1) {
                            firstUrl = 'partly-cloudy-day'
                        } else if (firstUrl.indexOf('Partly cloudy') > -1) {
                            firstUrl = 'partly-cloudy-night'
                        } else if (firstUrl.indexOf('Cloudy') > -1 || firstUrl.indexOf('Overcast') > -1) {
                            firstUrl = 'cloudy'
                        } else if (firstUrl.indexOf('Mist') > -1 || firstUrl.indexOf("Freezing fog") > -1) {
                            firstUrl = 'fog'
                        } else if (firstUrl.indexOf('sleet') > -1) {
                            firstUrl = 'sleet'
                        } else if (firstUrl.indexOf('rain') > -1 || firstUrl.indexOf('Light drizzle') > -1) {
                            firstUrl = 'rain'
                        }

                        return firstUrl

                    })
                }
            },
            hours: function() {
                return {
                    '1': {
                        hour: '00:00',
                        temperature: this.getDayObj(0, 'tempC'),
                        icon: this.iconSet[this.icons[0]],
                        review: this.weatherReview[this.icons[0]],
                        wind: Math.round(this.getDayObj(0, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(0, 'precipMM'),
                        htmlTemplateWind: `<span>Скорость ветра, <i>м.с</i></span>`,
                        htmlTemplatePrecip: `<span>Осадки, <i>мм</i></span>`
                    },
                    '2': {
                        hour: '03:00',
                        temperature: this.getDayObj(1, 'tempC'),
                        icon: this.iconSet[this.icons[1]],
                        review: this.weatherReview[this.icons[1]],
                        wind: Math.round(this.getDayObj(1, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(1, 'precipMM'),
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '3': {
                        hour: '06:00',
                        temperature: this.getDayObj(2, 'tempC'),
                        icon: this.iconSet[this.icons[2]],
                        review: this.weatherReview[this.icons[2]],
                        wind: Math.round(this.getDayObj(3, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(2, 'precipMM'),
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '4': {
                        hour: '09:00',
                        temperature: this.getDayObj(3, 'tempC'),
                        icon: this.iconSet[this.icons[3]],
                        review: this.weatherReview[this.icons[3]],
                        wind: Math.round(this.getDayObj(3, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(3, 'precipMM'),
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '5': {
                        hour: '12:00',
                        temperature: this.getDayObj(4, 'tempC'),
                        icon: this.iconSet[this.icons[4]],
                        review: this.weatherReview[this.icons[4]],
                        wind: Math.round(this.getDayObj(4, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(4, 'precipMM'),
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '6': {
                        hour: '15:00',
                        temperature: this.getDayObj(5, 'tempC'),
                        icon: this.iconSet[this.icons[5]],
                        review: this.weatherReview[this.icons[5]],
                        wind: Math.round(this.getDayObj(5, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(5, 'precipMM'),
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '7': {
                        hour: '18:00',
                        temperature: this.getDayObj(6, 'tempC'),
                        icon: this.iconSet[this.icons[6]],
                        review: this.weatherReview[this.icons[6]],
                        wind: Math.round(this.getDayObj(6, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(6, 'precipMM'),
                        htmlTemplateWind: `<div class="sep-line"></div>`,
                        htmlTemplatePrecip: `<div class="sep-line"></div>`
                    },
                    '8': {
                        hour: '21:00',
                        temperature: this.getDayObj(7, 'tempC'),
                        icon: this.iconSet[this.icons[7]],
                        review: this.weatherReview[this.icons[7]],
                        wind: Math.round(this.getDayObj(7, 'windspeedKmph') / 3.6),
                        precip: this.getDayObj(7, 'precipMM')
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
                }
            }
        }
    }
</script>