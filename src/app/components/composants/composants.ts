import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './composants.html?style=./composants.scss';
import { ModulActions } from '@/app/store/actions';

@WithRender
@Component
export class Composants extends Vue {
    public mounted(): void {
        this.$store.dispatch(ModulActions.COMPONENTS_META_GET, 'fr');
    }
}
