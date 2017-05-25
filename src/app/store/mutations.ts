import { Mutation } from 'vuex';
import { ModulState } from './modul-state';
import { ComposantMeta } from 'vuejs-components/dist/components-meta';

export class ModulMutations {
    public static COMPOSANT_GET: string = 'COMPOSANT_GET';

    public static getComposantSucces: Mutation<ModulState> = (state: ModulState, composant: ComposantMeta) => {
        state.composantState.composant = composant;
    }
}
