import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { ModulState } from './modul-state';
import { ModulMutations } from './mutations';
import ComponentsMeta from 'vuejs-components/dist/components-meta';

export class ModulActions {
    public static COMPOSANT_GET: string = 'COMPOSANT_GET';

    public static getComposantAction: Action<ModulState, ModulState> = (context: ActionContext<ModulState, ModulState>, composant: any) => {
        context.commit(ModulMutations.COMPOSANT_GET, ComponentsMeta.getMeta(composant));
    }
}
