import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { ExperienceUnifiee } from './components/experience-unifiee/experience-unifiee';
import { NormesGraphiques } from './components/normes-graphiques/normes-graphiques';
import { ReglesEditoriales } from './components/regles-editoriales/regles-editoriales';
import { Composants } from './components/composants/composants';
import { Composant } from './components/composants/composant';
import { Ecosysteme } from './components/ecosysteme/ecosysteme';
import Meta from 'modul-components/dist/meta';

Vue.use(Router);

const componentsChildren: RouteConfig[] = [];

Meta.getTagsByLanguage('fr').forEach(tag => {
    componentsChildren.push({
        path: tag,
        meta: tag,
        component: Composant
    });
});

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
            children: componentsChildren
        },
        {
            path: '/ecosysteme',
            component: Ecosysteme
        }
    ]
});
