<template>
    <div>
        <div class="cont">
            <div id="scroll">
                <div id="scroller"></div>
            </div>
            <div class="next">
                <div id="chart"></div>
                <div id="line"></div>
            </div>
        </div>
        <div class="oper">
            Tween类型
            <p>
                <label>
                    <input @click="rTweensFun('Linear')"
                           type="radio"
                           name="rTween"
                           value="Linear"
                           checked
                    />Linear
                </label>
                <label>
                    <input @click="rTweensFun('Quad')"
                           type="radio"
                           name="rTween"
                           value="Quad"
                    />Quad
                </label>
                <label>
                    <input @click="rTweensFun('Cubic')"
                           type="radio"
                           name="rTween"
                           value="Cubic"
                    />Cubic
                </label>
                <label>
                    <input @click="rTweensFun('Quart')"
                           type="radio"
                           name="rTween"
                           value="Quart" />Quart
                </label>
                <label>
                    <input @click="rTweensFun('Quint')"
                           type="radio"
                           name="rTween"
                           value="Quint" />Quint
                </label>
                <br/>
                <label>
                    <input @click="rTweensFun('Sine')"
                           type="radio"
                           name="rTween"
                           value="Sine" />Sine
                </label>
                <label>
                    <input @click="rTweensFun('Expo')"
                           type="radio"
                           name="rTween"
                           value="Expo" />Expo
                </label>
                <label>
                    <input @click="rTweensFun('Circ')"
                           type="radio"
                           name="rTween"
                           value="Circ" />Circ
                </label>
                <label>
                    <input @click="rTweensFun('Elastic')"
                           type="radio"
                           name="rTween"
                           value="Elastic" />Elastic
                </label>
                <label>
                    <input @click="rTweensFun('Back')"
                           type="radio"
                           name="rTween"
                           value="Back" />Back
                </label>
                <label>
                    <input @click="rTweensFun('Bounce')"
                           type="radio"
                           name="rTween"
                           value="Bounce" />Bounce
                </label>
            </p>
            Ease类型
            <p>
                <label>
                    <input @click="rEasesFun('easeIn')"
                           type="radio"
                           name="rEase"
                           value="easeIn"
                           checked/>easeIn
                </label>
                <label>
                    <input @click="rEasesFun('easeOut')"
                           type="radio"
                           name="rEase"
                           value="easeOut" />easeOut
                </label>
                <label>
                    <input @click="rEasesFun('easeInOut')"
                           type="radio"
                           name="rEase"
                           value="easeInOut" />easeInOut
                </label>
            </p>
            <button id="run" @click="runFun">Run</button>
        </div>
    </div>
</template>

<script>
import {
    Tween,
    T$,
} from '../assets/js/Tween';

export default {
    name: 'TweenDemo',
    data() {
        return {
            change: 500,
            duration: 100,
            timer: null,
            rTween: 'Linear',
            rEase: 'easeIn',
            fx: Tween.Linear,
        };
    },
    mounted() {
        this.setMethod();
        this.drawChart();
    },
    methods: {
        rTweensFun(value) {
            this.rTween = value;
            this.setMethod();
            this.drawChart();
        },
        rEasesFun(value) {
            this.rEase = value;
            this.setMethod();
            this.drawChart();
        },
        runFun() {
            this.scroller();
            this.drawChart();
        },
        setMethod() {
            const ac = this.rTween;
            const re = this.rEase;
            this.fx = this.rTween === 'Linear' ? Tween.Linear : Tween[ac][re];
            console.log(this.fx);
        },
        scroller() {
            clearTimeout(this.timer);
            let time = 0;
            const begin = 0;
            const sl = T$('line');
            const ss = T$('scroller');
            sl.style.display = 'block';

            function run() {
                console.log(this.fx);
                ss.style.left = `${Math.ceil(this.fx(time, begin, this.change - 50, this.duration))}px`;
                sl.style.left = `${Math.ceil(Tween.Linear(time, begin, this.change, this.duration))}px`;
                if (time < this.duration) {
                    time += 1;
                    this.timer = setTimeout(run, 10);
                } else {
                    time = this.duration;
                    sl.style.display = 'none';
                    clearTimeout(this.timer);
                }
            }
            run();
        },
        drawChart() {
            const sc = T$('chart');
            const arr = [];
            let i = 0;
            for (i = 0; i <= this.change;) {
                i += 1;
                arr.push(`<div style="width:2px;height:2px;font-size:0;background-color:#006600;position:absolute;left:${i - 1}px;top:${Math.ceil(this.fx(i, 200, -200, this.change))}px"></div>`);
            }
            sc.innerHTML = arr.join('');
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .cont {
        margin-left: 50px;
    }

    #scroll {
        width: 500px;
        height: 50px;
        border: 1px solid #800000;
        position: relative
    }

    #scroller {
        width: 50px;
        height: 50px;
        background-color: #006600;
        position: absolute
    }

    .oper {
        margin-left: 50px;
        margin-top: 10px;
    }

    .next {
        margin-top: 50px;
        width: 500px;
        height: 200px;
        border: 1px solid #800000;
        position: relative
    }

    #chart {
        position: absolute;
        height: 200px;
    }

    #line {
        position: absolute;
        left: 0;
        top: 0;
        height: 200px;
        width: 2px;
        background-color: #006600;
        display: none;
    }
</style>
