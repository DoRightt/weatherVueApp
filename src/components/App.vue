<template>
    <div id="app">
        <h2>{{message}}</h2>
        <HeaderComponent></HeaderComponent>
    </div>
</template>

<script>
    import Header from './Header.vue'

    export default {
        components: {
            'HeaderComponent': Header
        },
        data: function() {
            return {
                message: 'hello'
            }
        }
    }
</script>