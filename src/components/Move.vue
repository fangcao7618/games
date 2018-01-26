<template>
    <div class="move">
        <h3>基于JavaScript实现鼠标箭头移动图片跟着移动</h3>
        <div id="dv1" @mousemove="Divflying" >
            <img src="../assets/scroll.png"><br>低调的跟着鼠标飘过~~
        </div>
    </div>
</template>

<script>
export default {
    name: 'Move',
    methods: {
        Divflying() {
            const div = document.getElementById('dv1');
            if (!div) {
                return;
            }
            const intX = window.event.clientX;
            const intY = window.event.clientY;
            div.style.left = `${intX}px`;
            div.style.top = `${intY}px`;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .move {
        background-color: red;
        margin: 0;
        padding: 0;
        position: relative;
        width: 100%;
        height: 50vh;
        #dv1 {
            position: absolute;
            width: 10vw;
            height: 10vw;
            img {
                display: block;
                width: 100%;
            }
        }
    }
</style>
