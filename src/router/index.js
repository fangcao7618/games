import Vue from 'vue';
import Router from 'vue-router';
// import Scroll from '@/components/Scroll';
import Scroll from '@/pagers/scroll';
import TweenDemo from '@/pagers/TweenDemo';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Scroll',
        component: Scroll,
    }, {
        path: '/t',
        name: 'TweenDemo',
        component: TweenDemo,
    }],
});
