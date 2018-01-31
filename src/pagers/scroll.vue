<template>
    <div refs="scroll" class="scroll">
        <h3>在移动端上使用原生滑屏解决方案</h3>(http://www.hacke2.cn/scroll-in-uc/)
        <ul refs="scrollUI">
            <li>
                <img srcset="" src="../assets/scroll.png" />
            </li>
            <li>
                <img srcset="" src="../assets/scroll.png" />
            </li>
            <li>
                <img srcset="" src="../assets/scroll.png" />
            </li>
            <li>
                <img srcset="" src="../assets/scroll.png" />
            </li>
            <li>
                <img srcset="" src="../assets/scroll.png" />
            </li>
            <li>
                <img srcset="" src="../assets/scroll.png" />
            </li>
        </ul>
    </div>
</template>

<script>
import {
    preventUCDefault,
} from '../assets/js/uc';

export default {
    name: 'Scroll',
    mounted() {
        preventUCDefault.init(this.$refs.scrollUI);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .scroll {
        width: 100%;
        background-color: #161270;
        overflow: hidden;
        >ul {
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            width: 100vw;
            background-color: #161270;
            transform: translateZ(0); // 开启gpu加速
            >li {
                list-style: none;
                width: 50vw;
                display: inline-block;
                img {
                    display: block;
                    width: 100%;
                }
            }
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>
