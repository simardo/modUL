import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';
import { ModulState } from './modul-state';
import { ModulActions } from './actions';
import { ModulMutations } from './mutations';
import { ComposantState } from '@/app/components/composants/composant.state';

Vue.use(Vuex);

const modulState: ModulState = new ModulState();
const mutations: MutationTree<ModulState> = {
    [ModulMutations.COMPOSANT_GET]: ModulMutations.getComposantSucces
};

const actions: Vuex.ActionTree<ModulState, ModulState> = {
    [ModulActions.COMPOSANT_GET]: ModulActions.getComposantAction
};

const store: Vuex.Store<ModulState> = new Vuex.Store<ModulState>({
    // strict: true, // TODO debug mode only
    state: modulState,
    mutations: mutations,
    actions: actions
});

export default store;
