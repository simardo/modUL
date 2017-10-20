import Vue from 'vue';
import { ModulVue } from '../../utils/vue/vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './accordion-group.html?style=./accordion-group.scss';
import { ACCORDION_NAME, ACCORDION_GROUP_NAME } from '../component-names';
import { MAccordion, MAccordionSkin } from '../accordion/accordion';

@WithRender
@Component
export class MAccordionGroup extends ModulVue {

    @Prop({ default: MAccordionSkin.Regular })
    public skin: MAccordionSkin;

    @Prop({ default: false })
    public concurrent: boolean;

    @Prop({ default: false })
    public allOpen: boolean;

    @Prop()
    public value: string;

    public componentName: string = ACCORDION_GROUP_NAME;

    private arrAccordion: MAccordion[] = new Array();
    private nbAccordionOpen: number = 0;
    private indexAccordionOpen: number | undefined = undefined;

    private hasError: boolean = false;
    private errorDefaultMesage: string = 'ERROR in <' + ACCORDION_GROUP_NAME + '> : ';
    private errorMessage: string = '';

    protected mounted(): void {
        for (let i = 0; i < this.$children.length; i++) {
            if (this.checkAccordion(i)) {
                let accordion: MAccordion = this.$children[i] as MAccordion;
                accordion.id = i;
                accordion.$on('click', (open: boolean) => this.toggleAccordionGroup(open));
                this.arrAccordion.push(accordion);
                if (accordion.isOpen) {
                    if (this.concurrent) {
                        this.indexAccordionOpen = i;
                        accordion.isOpen = false;
                    } else {
                        this.nbAccordionOpen++;
                    }
                }
            }
        }
        if (this.concurrent) {
            this.openAccordionConcurrent();
        }
        if (this.propAllOpen && !this.concurrent) {
            this.openAllAccordions(false);
        }
        if (this.arrAccordion.length == 0) {
            this.hasError = true;
            this.errorMessage = this.errorDefaultMesage + 'No <' + ACCORDION_NAME + '> found in <' + ACCORDION_GROUP_NAME + '>';
            console.error(this.errorMessage);
        }
    }

    private toggleAccordionGroup(open: boolean): void {
        if (this.concurrent) {
            this.closeAllAccordions(true);
            if (open) {
                this.openAccordionConcurrent();
            }
        } else {
            if (open) {
                this.nbAccordionOpen++;
            } else {
                this.nbAccordionOpen--;
            }
        }
    }

    private openAccordionConcurrent(): void {
        if (this.indexAccordionOpen != undefined) {
            this.arrAccordion[this.indexAccordionOpen].isOpen = true;
            this.nbAccordionOpen = 1;
        } else {
            this.nbAccordionOpen = 0;
        }
    }

    private checkAccordion(index: number): boolean {
        return (this.$children[index] as MAccordion).componentName == ACCORDION_NAME ? true : false;
    }

    private openAllAccordions(isAnimActive: boolean = true): void {
        this.nbAccordionOpen = this.arrAccordion.length;
        this.arrAccordion.forEach(el => {
            el.isOpen = true;
        });
    }

    private closeAllAccordions(isAnimActive: boolean = true): void {
        this.nbAccordionOpen = 0;
        this.arrAccordion.forEach(el => {
            el.isOpen = false;
        });
    }

    private get propAllOpen(): boolean {
        return this.nbAccordionOpen == this.arrAccordion.length;
    }

    private get propAllClosed(): boolean {
        return this.nbAccordionOpen == 0;
    }

    private get hasTitleSlot(): boolean {
        return !!this.$slots['title'];
    }
}

const AccordionGroupPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(ACCORDION_GROUP_NAME, MAccordionGroup);
    }
};

export default AccordionGroupPlugin;
