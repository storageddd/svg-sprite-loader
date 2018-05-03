import Sidebar from '@/components/ui/Sidebar';
import PageHeader from '@/components/ui/Header';
import SvgImage from '@/components/ui/Icon';
import Label from '@/components/ui/Label';
import LineTitle from '@/components/ui/LineTitle';
import AddButton from '@/components/ui/AddButton';
import RowItemBlock from '@/components/ui/RowItemBlock';
import RowItemFlex from '@/components/ui/RowItemFlex';

let components = {
    'c-sidebar': Sidebar,
    'c-header': PageHeader,
    'c-icon': SvgImage,
    'c-label': Label,
    'c-line-title': LineTitle,
    'c-add-button': AddButton,
    'c-row-item-block': RowItemBlock,
    'c-row-item-flex': RowItemFlex
};

let VuePlugin = {
    install: function install(Vue) {
        if (Vue._components_installed) return;

        Vue._components_installed = true;

        for (let name in components) {
            Vue.component(name, components[name]);
        }
    }
};

export default VuePlugin;