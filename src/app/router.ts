import Vue from 'vue';
import Router from 'vue-router';
import { ExperienceUnifiee } from './components/experience-unifiee/experience-unifiee';
import { NormesGraphiques } from './components/normes-graphiques/normes-graphiques';
import { ReglesEditoriales } from './components/regles-editoriales/regles-editoriales';
import { Composants } from './components/composants/composants';
import { Composant } from './components/composants/composant';
import { Ecosysteme } from './components/ecosysteme/ecosysteme';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ExperienceUnifiee
        },
        {
            path: '/normes-graphiques',
            component: NormesGraphiques
        },
        {
            path: '/regles-editoriales',
            component: ReglesEditoriales
        },
        {
            path: '/composants',
            component: Composants,
            children: [
                {
                    path: 'bouton',
                    meta: 'button',
                    component: Composant
                },
                {
                    path: 'liste',
                    meta: 'list',
                    component: Composant
                }
            ]
        },
        {
            path: '/ecosysteme',
            component: Ecosysteme
        }
    ]
});
