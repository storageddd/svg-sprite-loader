import { PullToRefresh } from '../assets/js/pulltorefresh.js';

export default {
    bind: (el, binding, vnode) => {
        PullToRefresh.init({
            mainElement: el,
            instructionsRefreshing: ' ',
            instructionsReleaseToRefresh: ' ',
            instructionsPullToRefresh: ' ',
            onRefresh: (done) => {
                vnode.context.$emit('pullToRefresh:refresh', done)
            }
        });
    }
}