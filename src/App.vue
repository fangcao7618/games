<template>
    <div id="app">
        <!-- <Move /> -->
        <!-- <Drag /> -->
        <router-view/>
    </div>
</template>

<script>
// import Move from '@/components/Move';
// import Drag from '@/components/Drag';

export default {
    name: 'App',
    components: {
        // Move,
        // Drag,
    },
};
</script>

<style lang="sass">
@import './assets/scss/_base';
</style>

