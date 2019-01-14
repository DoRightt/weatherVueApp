<template>
    <div class="header">
        <h1 class="app-title">Gismeteo<span>Killer</span></h1>
        <HeaderNavigation />
    </div>
</template>

<script>
    import HeaderNavigation from './HeaderNavigation.vue'

    export default {
        name: 'HeaderComponent',
        components: {
            'HeaderNavigation': HeaderNavigation
        },
        data: function() {
            return {
                message: 'Test'
            }
        }
    }
</script>