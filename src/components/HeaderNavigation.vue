<template>
    <nav class="header__nav nav">
        <router-link exact to="/" active-class="nav--active" class="nav__item">Сегодня</router-link>
        <router-link to="/tomorrow" active-class="nav--active" class="nav__item">Завтра</router-link>
        <router-link to="/threedays" active-class="nav--active" class="nav__item">3 дня</router-link>
        <router-link to="/tendays" active-class="nav--active" class="nav__item">10 дней</router-link>
        <router-link to="/twoweeks" active-class="nav--active" class="nav__item">2 недели</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderNavigation'
    }
</script>