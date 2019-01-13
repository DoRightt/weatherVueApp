<template>
    <div id="app">
        <h2>{{message}}</h2>
        <HeaderComponent></HeaderComponent>
    </div>
</template>

<script>
    import HeaderComponent from './HeaderComponent.vue'

    export default {
        components: {
            'HeaderComponent': HeaderComponent
        },
        data: function() {
            return {
                message: 'hello'
            }
        }
    }
</script>