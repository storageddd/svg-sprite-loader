import Focus from './Focus.js';
import SelectPlaceholder from './SelectPlaceholder.js';
import InfiniteScroll from './InfiniteScroll.js';
import PullToRefresh from './PullToRefresh.js';

let directives = {
    'focus': Focus,
    'select-placeholder': SelectPlaceholder,
    'infinite-scroll': InfiniteScroll,
    'pull-to-refresh': PullToRefresh
};

let VuePlugin = {
    install: function install(Vue) {
        if (Vue._directives_installed) return;

        Vue._directives_installed = true;

        for (let name in directives) {
            Vue.directive(name, directives[name]);
        }
    }
};

export default VuePlugin;