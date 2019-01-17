<template>
    <div class="main">
        <div class="current-location">Погода в городе - <span>{{location}}</span> на сегодня</div>
        <div class="td-weather__wrapper">
            <WeatherCurrentComponent  v-bind:weather="weather" />
            <WeatherCurrentDayComponent v-bind:weather="weather" />
        </div>
        <h2 class="main__title">Прогноз на неделю</h2>
        <WeatherCurrentWeekComponent v-bind:weather="weather" />
        <WeatherTomorrowComponent v-bind:weatherTwo="weatherTwo" />
        <WeatherTenDaysComponent v-bind:weatherTwo="weatherTwo" />
    </div>

</template>

<script>
    import WeatherCurrentComponent from './WeatherCurrentComponent.vue';
    import WeatherCurrentDayComponent from './WeatherCurrentDayComponent.vue';
    import WeatherCurrentWeekComponent from './WeatherCurrentWeekComponent.vue';
    import WeatherTomorrowComponent from './WeatherTomorrowComponent.vue';
    import WeatherTenDaysComponent from './WeatherTenDaysComponent.vue';

    export default {
        components: {
            'WeatherCurrentComponent': WeatherCurrentComponent,
            'WeatherCurrentDayComponent': WeatherCurrentDayComponent,
            'WeatherCurrentWeekComponent': WeatherCurrentWeekComponent,
            'WeatherTomorrowComponent': WeatherTomorrowComponent,
            'WeatherTenDaysComponent': WeatherTenDaysComponent,
        },
        props: {
            weather: Object,
            weatherTwo: Object,
            location: [String, Object]
        },
        methods: {

        },
        mounted() {

        },
        data: function() {
            return {

            }
        },
        computed: {

        },
        name: 'MainComponent'
    }
</script>