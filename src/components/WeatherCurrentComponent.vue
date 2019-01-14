<template>
    <div class="currentWeather-block">
        <div class="currentWeather__date-block">
            <div>
                Cейчас <span class="currentWeather__time">24:00</span>
                <br/>
                <span class="currentWeather__date">12</span>
            </div>
        </div>
        <div clase="weather-prop-name weather-prop-name--main">
            <img class="weather-icon" src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/weather-icon.png" alt=""/>
            <span class="weather-prop-value weather-prop-value--temp">12&#176;</span>
        </div>
        <p class="weather--more">пасмурно</p>
        <div class="currentWeather__detail">
            <div class="weather-prop-name">Ветер <span class="weather-prop-value">3 м/c</span></div>
            <div class="weather-prop-name">Влажность <span class="weather-prop-value">3%</span></div>
            <div class="weather-prop-name">Давление <span class="weather-prop-value">3 <span>мм     рт.ст.</span></span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherCurrentComponent',
        data: function() {
            return {
                message: 'Test'
            }
        }
    }
</script>