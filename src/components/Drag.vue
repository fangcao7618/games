<template>
    <div class="drag" @mousedown="oDragMouseDown" @mousemove="oDragMouseMove" @mouseup="oDragMouseUp">
    </div>
</template>

<script>
export default {
    name: 'Drag',
    data() {
        return {
            scrollLeft: 0,
            scrollTop: 0,
            leftInDrag: 0,
            TopInDrag: 0,
            x: 0,
            y: 0,
            moveTimer: null, // 运行tween的计时器
        };
    },
    methods: {
        oDragMouseDown(e) {
            const events = e || window.event;
            const oDrag = events.target;
            // 浏览器默认当鼠标移动时，滚动条也会跟着动，所以要阻止默认事件
            events.preventDefault();
            // 记录鼠标在拖拽方块内的位置
            this.scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
            this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            this.leftInDrag = (events.clientX - oDrag.offsetLeft) + this.scrollLeft;
            this.TopInDrag = (events.clientY - oDrag.offsetTop) + this.scrollTop;
        },
        oDragMouseMove(e) {
            const events = e || window.event;
            const oDrag = events.target;
            // 阻止默认事件
            events.preventDefault();
            this.x = events.clientX - this.leftInDrag;
            this.y = events.clientY - this.TopInDrag;
            // 临界值判断，当元素超出窗口大小时，把元素位置定在窗口的最小/最大值
            this.x = this.x <= 0 ? 0 : this.x;
            if (this.x >= document.documentElement.clientWidth - oDrag.offsetWidth) {
                this.x = document.documentElement.clientWidth - oDrag.offsetWidth;
            }
            this.y = Math.max(this.y, 0); // 这个语句得到的结果和if判断一样，只是本人手懒，想少敲几个代码
            this.y = Math.min(this.y, (document.documentElement.clientHeight - oDrag.offsetHeight));
            oDrag.style.left = `${this.x + this.scrollLeft}px`;
            oDrag.style.top = `${this.y + this.scrollTop}px`;
        },
        oDragMouseUp(e) {},
    },
    mounted() {
    },
};
</script>

<style lang="scss" scoped>
    .drag {
        position: absolute;
        left: 100px;
        top: 100px;
        width: 100px;
        height: 100px;
        background: #cde;
        cursor: move;
    }
</style>

