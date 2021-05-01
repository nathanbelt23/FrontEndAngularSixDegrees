import { Component, NgModule, ComponentFactoryResolver, ViewChild, ChangeDetectorRef, Renderer2, NgZone, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate, animation, useAnimation } from '@angular/animations';
import { DynamicDialogContent } from './dynamicdialogcontent';
import { DynamicDialogConfig } from './dynamicdialog-config';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { DynamicDialogRef } from './dynamicdialog-ref';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["mask"];
function DynamicDialogComponent_div_2_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function DynamicDialogComponent_div_2_div_1_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(3); return ctx_r6.hide(); })("keydown.enter", function DynamicDialogComponent_div_2_div_1_button_4_Template_button_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r8 = ɵngcc0.ɵɵnextContext(3); return ctx_r8.hide(); });
    ɵngcc0.ɵɵelement(1, "span", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("ngClass", "p-dialog-header-icon p-dialog-header-maximize p-link");
} }
function DynamicDialogComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "span", 9);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 10);
    ɵngcc0.ɵɵtemplate(4, DynamicDialogComponent_div_2_div_1_button_4_Template, 2, 1, "button", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.config.header);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.config.closable !== false);
} }
function DynamicDialogComponent_div_2_ng_template_3_Template(rf, ctx) { }
function DynamicDialogComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.config.footer, " ");
} }
const _c1 = function (a1) { return { "p-dialog p-dynamic-dialog p-component": true, "p-dialog-rtl": a1 }; };
const _c2 = function (a0, a1) { return { transform: a0, transition: a1 }; };
const _c3 = function (a1) { return { value: "visible", params: a1 }; };
function DynamicDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("@animation.start", function DynamicDialogComponent_div_2_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onAnimationStart($event); })("@animation.done", function DynamicDialogComponent_div_2_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onAnimationEnd($event); });
    ɵngcc0.ɵɵtemplate(1, DynamicDialogComponent_div_2_div_1_Template, 5, 2, "div", 4);
    ɵngcc0.ɵɵelementStart(2, "div", 5);
    ɵngcc0.ɵɵtemplate(3, DynamicDialogComponent_div_2_ng_template_3_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, DynamicDialogComponent_div_2_div_4_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.config.styleClass);
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.config.width)("height", ctx_r1.config.height);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c1, ctx_r1.config.rtl))("ngStyle", ctx_r1.config.style)("@animation", ɵngcc0.ɵɵpureFunction1(17, _c3, ɵngcc0.ɵɵpureFunction2(14, _c2, ctx_r1.transformOptions, ctx_r1.config.transitionOptions || "150ms cubic-bezier(0, 0, 0.2, 1)")));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.config.showHeader === false ? false : true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.config.contentStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.config.footer);
} }
const _c4 = function (a1) { return { "p-dialog-mask": true, "p-component-overlay p-dialog-mask-scrollblocker": a1 }; };
const showAnimation = animation([
    style({ transform: '{{transform}}', opacity: 0 }),
    animate('{{transition}}', style({ transform: 'none', opacity: 1 }))
]);
const hideAnimation = animation([
    animate('{{transition}}', style({ transform: '{{transform}}', opacity: 0 }))
]);
export class DynamicDialogComponent {
    constructor(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
        this.transformOptions = "scale(0.7)";
    }
    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }
    loadChildComponent(componentType) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        let viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
    moveOnTop() {
        if (this.config.autoZIndex !== false) {
            const zIndex = (this.config.baseZIndex || 0) + (++DomHandler.zindex);
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
        }
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.wrapper = this.container.parentElement;
                this.moveOnTop();
                this.bindGlobalListeners();
                if (this.config.modal !== false) {
                    this.enableModality();
                }
                this.focus();
                break;
            case 'void':
                this.onContainerDestroy();
                break;
        }
    }
    onAnimationEnd(event) {
        if (event.toState === 'void') {
            this.dialogRef.destroy();
        }
    }
    onContainerDestroy() {
        this.unbindGlobalListeners();
        if (this.config.modal !== false) {
            this.disableModality();
        }
        this.container = null;
    }
    close() {
        this.visible = false;
        this.cd.markForCheck();
    }
    hide() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }
    enableModality() {
        if (this.config.closable !== false && this.config.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', (event) => {
                if (this.wrapper && this.wrapper.isSameNode(event.target)) {
                    this.hide();
                }
            });
        }
        if (this.config.modal !== false) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }
    disableModality() {
        if (this.wrapper) {
            if (this.config.dismissableMask) {
                this.unbindMaskClickListener();
            }
            if (this.config.modal !== false) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
            if (!this.cd.destroyed) {
                this.cd.detectChanges();
            }
        }
    }
    onKeydown(event) {
        if (event.which === 9) {
            event.preventDefault();
            let focusableElements = DomHandler.getFocusableElements(this.container);
            if (focusableElements && focusableElements.length > 0) {
                if (!focusableElements[0].ownerDocument.activeElement) {
                    focusableElements[0].focus();
                }
                else {
                    let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
                    if (event.shiftKey) {
                        if (focusedIndex == -1 || focusedIndex === 0)
                            focusableElements[focusableElements.length - 1].focus();
                        else
                            focusableElements[focusedIndex - 1].focus();
                    }
                    else {
                        if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                            focusableElements[0].focus();
                        else
                            focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        }
    }
    focus() {
        let focusable = DomHandler.findSingle(this.container, '[autofocus]');
        if (focusable) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => focusable.focus(), 5);
            });
        }
    }
    bindGlobalListeners() {
        this.bindDocumentKeydownListener();
        if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
        }
    }
    unbindGlobalListeners() {
        this.unbindDocumentKeydownListener();
        this.unbindDocumentEscapeListener();
    }
    bindDocumentKeydownListener() {
        this.zone.runOutsideAngular(() => {
            this.documentKeydownListener = this.onKeydown.bind(this);
            window.document.addEventListener('keydown', this.documentKeydownListener);
        });
    }
    unbindDocumentKeydownListener() {
        if (this.documentKeydownListener) {
            window.document.removeEventListener('keydown', this.documentKeydownListener);
            this.documentKeydownListener = null;
        }
    }
    bindDocumentEscapeListener() {
        const documentTarget = this.maskViewChild ? this.maskViewChild.nativeElement.ownerDocument : 'document';
        this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', (event) => {
            if (event.which == 27) {
                if (parseInt(this.container.style.zIndex) == (DomHandler.zindex + (this.config.baseZIndex ? this.config.baseZIndex : 0))) {
                    this.hide();
                }
            }
        });
    }
    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }
    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    }
    ngOnDestroy() {
        this.onContainerDestroy();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}
DynamicDialogComponent.ɵfac = function DynamicDialogComponent_Factory(t) { return new (t || DynamicDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(DynamicDialogConfig), ɵngcc0.ɵɵdirectiveInject(DynamicDialogRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
DynamicDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DynamicDialogComponent, selectors: [["p-dynamicDialog"]], viewQuery: function DynamicDialogComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(DynamicDialogContent, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.insertionPoint = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.maskViewChild = _t.first);
    } }, decls: 3, vars: 4, consts: [[3, "ngClass"], ["mask", ""], ["role", "dialog", 3, "ngClass", "ngStyle", "class", "width", "height", 4, "ngIf"], ["role", "dialog", 3, "ngClass", "ngStyle"], ["class", "p-dialog-header", 4, "ngIf"], [1, "p-dialog-content", 3, "ngStyle"], ["pDynamicDialogContent", ""], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-dialog-header"], [1, "p-dialog-title"], [1, "p-dialog-header-icons"], ["type", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-close-icon", "pi", "pi-times"], [1, "p-dialog-footer"]], template: function DynamicDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, DynamicDialogComponent_div_2_Template, 5, 19, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c4, ctx.config.modal !== false));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: function () { return [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgStyle, DynamicDialogContent]; }, styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"], encapsulation: 2, data: { animation: [
            trigger('animation', [
                transition('void => visible', [
                    useAnimation(showAnimation)
                ]),
                transition('visible => void', [
                    useAnimation(hideAnimation)
                ])
            ])
        ] } });
DynamicDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: DynamicDialogConfig },
    { type: DynamicDialogRef },
    { type: NgZone }
];
DynamicDialogComponent.propDecorators = {
    insertionPoint: [{ type: ViewChild, args: [DynamicDialogContent,] }],
    maskViewChild: [{ type: ViewChild, args: ['mask',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicDialogComponent, [{
        type: Component,
        args: [{
                selector: 'p-dynamicDialog',
                template: `
        <div #mask [ngClass]="{'p-dialog-mask':true, 'p-component-overlay p-dialog-mask-scrollblocker': config.modal !== false}">
            <div [ngClass]="{'p-dialog p-dynamic-dialog p-component':true, 'p-dialog-rtl': config.rtl}" [ngStyle]="config.style" [class]="config.styleClass"
                [@animation]="{value: 'visible', params: {transform: transformOptions, transition: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}"
                (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" role="dialog" *ngIf="visible"
                [style.width]="config.width" [style.height]="config.height">
                <div class="p-dialog-header" *ngIf="config.showHeader === false ? false: true">
                    <span class="p-dialog-title">{{config.header}}</span>
                    <div class="p-dialog-header-icons">
                        <button [ngClass]="'p-dialog-header-icon p-dialog-header-maximize p-link'" type="button" (click)="hide()" (keydown.enter)="hide()" *ngIf="config.closable !== false">
                            <span class="p-dialog-header-close-icon pi pi-times"></span>
                        </button>
                    </div>
                </div>
                <div class="p-dialog-content" [ngStyle]="config.contentStyle">
                    <ng-template pDynamicDialogContent></ng-template>
                </div>
                <div class="p-dialog-footer" *ngIf="config.footer">
                    {{config.footer}}
                </div>
            </div>
        </div>
	`,
                animations: [
                    trigger('animation', [
                        transition('void => visible', [
                            useAnimation(showAnimation)
                        ]),
                        transition('visible => void', [
                            useAnimation(hideAnimation)
                        ])
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: DynamicDialogConfig }, { type: DynamicDialogRef }, { type: ɵngcc0.NgZone }]; }, { insertionPoint: [{
            type: ViewChild,
            args: [DynamicDialogContent]
        }], maskViewChild: [{
            type: ViewChild,
            args: ['mask']
        }] }); })();
export class DynamicDialogModule {
}
DynamicDialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DynamicDialogModule });
DynamicDialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DynamicDialogModule_Factory(t) { return new (t || DynamicDialogModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DynamicDialogModule, { declarations: function () { return [DynamicDialogComponent, DynamicDialogContent]; }, imports: function () { return [CommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicDialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [DynamicDialogComponent, DynamicDialogContent],
                entryComponents: [DynamicDialogComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2RpYWxvZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2R5bmFtaWNkaWFsb2cvZHluYW1pY2RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBUSx3QkFBd0IsRUFBRSxTQUFTLEVBQTBDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQWMsdUJBQXVCLEVBQVcsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOU8sT0FBTyxFQUFFLE9BQU8sRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9HLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLElBQUksS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDckQsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUNoQyxJ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MUIsTUFBTSxPQUFPLG1CQUFtQjtBQUFHOytDQUxsQyxRQUFRLFNBQUMsa0JBQ1Q7TUFBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxrQkFDNUQsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUMsY0FDekM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgVHlwZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgQ29tcG9uZW50UmVmLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgUmVuZGVyZXIyLCBOZ1pvbmUsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlcixzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGUsQW5pbWF0aW9uRXZlbnQsIGFuaW1hdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEeW5hbWljRGlhbG9nQ29udGVudCB9IGZyb20gJy4vZHluYW1pY2RpYWxvZ2NvbnRlbnQnO1xuaW1wb3J0IHsgRHluYW1pY0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZHluYW1pY2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBEeW5hbWljRGlhbG9nUmVmIH0gZnJvbSAnLi9keW5hbWljZGlhbG9nLXJlZic7XG5cbmNvbnN0IHNob3dBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAne3t0cmFuc2Zvcm19fScsIG9wYWNpdHk6IDAgfSksXG4gICAgYW5pbWF0ZSgne3t0cmFuc2l0aW9ufX0nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ25vbmUnLCBvcGFjaXR5OiAxIH0pKVxuXSk7XG5cbmNvbnN0IGhpZGVBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIGFuaW1hdGUoJ3t7dHJhbnNpdGlvbn19Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd7e3RyYW5zZm9ybX19Jywgb3BhY2l0eTogMCB9KSlcbl0pO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwLWR5bmFtaWNEaWFsb2cnLFxuXHR0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNtYXNrIFtuZ0NsYXNzXT1cInsncC1kaWFsb2ctbWFzayc6dHJ1ZSwgJ3AtY29tcG9uZW50LW92ZXJsYXkgcC1kaWFsb2ctbWFzay1zY3JvbGxibG9ja2VyJzogY29uZmlnLm1vZGFsICE9PSBmYWxzZX1cIj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydwLWRpYWxvZyBwLWR5bmFtaWMtZGlhbG9nIHAtY29tcG9uZW50Jzp0cnVlLCAncC1kaWFsb2ctcnRsJzogY29uZmlnLnJ0bH1cIiBbbmdTdHlsZV09XCJjb25maWcuc3R5bGVcIiBbY2xhc3NdPVwiY29uZmlnLnN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgICAgIFtAYW5pbWF0aW9uXT1cInt2YWx1ZTogJ3Zpc2libGUnLCBwYXJhbXM6IHt0cmFuc2Zvcm06IHRyYW5zZm9ybU9wdGlvbnMsIHRyYW5zaXRpb246IGNvbmZpZy50cmFuc2l0aW9uT3B0aW9ucyB8fCAnMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknfX1cIlxuICAgICAgICAgICAgICAgIChAYW5pbWF0aW9uLnN0YXJ0KT1cIm9uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiIChAYW5pbWF0aW9uLmRvbmUpPVwib25BbmltYXRpb25FbmQoJGV2ZW50KVwiIHJvbGU9XCJkaWFsb2dcIiAqbmdJZj1cInZpc2libGVcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjb25maWcud2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cImNvbmZpZy5oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kaWFsb2ctaGVhZGVyXCIgKm5nSWY9XCJjb25maWcuc2hvd0hlYWRlciA9PT0gZmFsc2UgPyBmYWxzZTogdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZGlhbG9nLXRpdGxlXCI+e3tjb25maWcuaGVhZGVyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRpYWxvZy1oZWFkZXItaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW25nQ2xhc3NdPVwiJ3AtZGlhbG9nLWhlYWRlci1pY29uIHAtZGlhbG9nLWhlYWRlci1tYXhpbWl6ZSBwLWxpbmsnXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJoaWRlKClcIiAoa2V5ZG93bi5lbnRlcik9XCJoaWRlKClcIiAqbmdJZj1cImNvbmZpZy5jbG9zYWJsZSAhPT0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZGlhbG9nLWhlYWRlci1jbG9zZS1pY29uIHBpIHBpLXRpbWVzXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRpYWxvZy1jb250ZW50XCIgW25nU3R5bGVdPVwiY29uZmlnLmNvbnRlbnRTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcER5bmFtaWNEaWFsb2dDb250ZW50PjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZGlhbG9nLWZvb3RlclwiICpuZ0lmPVwiY29uZmlnLmZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7e2NvbmZpZy5mb290ZXJ9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHRgLFxuXHRhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oc2hvd0FuaW1hdGlvbilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHVzZUFuaW1hdGlvbihoaWRlQW5pbWF0aW9uKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuLi9kaWFsb2cvZGlhbG9nLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cblx0bWFzazogSFRNTERpdkVsZW1lbnQ7XG5cblx0QFZpZXdDaGlsZChEeW5hbWljRGlhbG9nQ29udGVudCkgaW5zZXJ0aW9uUG9pbnQ6IER5bmFtaWNEaWFsb2dDb250ZW50O1xuXG5cdEBWaWV3Q2hpbGQoJ21hc2snKSBtYXNrVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG5cdGNoaWxkQ29tcG9uZW50VHlwZTogVHlwZTxhbnk+O1xuXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHdyYXBwZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50RXNjYXBlTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gICAgbWFza0NsaWNrTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gICAgdHJhbnNmb3JtT3B0aW9uczogc3RyaW5nID0gXCJzY2FsZSgwLjcpXCI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0cHVibGljIGNvbmZpZzogRHluYW1pY0RpYWxvZ0NvbmZpZywgcHJpdmF0ZSBkaWFsb2dSZWY6IER5bmFtaWNEaWFsb2dSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmxvYWRDaGlsZENvbXBvbmVudCh0aGlzLmNoaWxkQ29tcG9uZW50VHlwZSk7XG5cdFx0dGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRsb2FkQ2hpbGRDb21wb25lbnQoY29tcG9uZW50VHlwZTogVHlwZTxhbnk+KSB7XG5cdFx0bGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlKTtcblxuXHRcdGxldCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5pbnNlcnRpb25Qb2ludC52aWV3Q29udGFpbmVyUmVmO1xuXHRcdHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdH1cblxuXHRtb3ZlT25Ub3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvWkluZGV4ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgekluZGV4ID0gKHRoaXMuY29uZmlnLmJhc2VaSW5kZXh8fDApICsgKCsrRG9tSGFuZGxlci56aW5kZXgpO1xuXHRcdFx0dGhpcy5jb250YWluZXIuc3R5bGUuekluZGV4ID0gU3RyaW5nKHpJbmRleCk7XG5cdFx0XHR0aGlzLm1hc2tWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS56SW5kZXggPSBTdHJpbmcoekluZGV4IC0gMSk7XG5cdFx0fVxuICAgIH1cblxuXHRvbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuXHRcdHN3aXRjaChldmVudC50b1N0YXRlKSB7XG5cdFx0XHRjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGV2ZW50LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5jb250YWluZXIucGFyZW50RWxlbWVudDtcblx0XHRcdFx0dGhpcy5tb3ZlT25Ub3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHbG9iYWxMaXN0ZW5lcnMoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5tb2RhbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVNb2RhbGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG5cdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndm9pZCc6XG5cdFx0XHRcdHRoaXMub25Db250YWluZXJEZXN0cm95KCk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRvbkFuaW1hdGlvbkVuZChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcblx0XHRpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG5cdFx0XHR0aGlzLmRpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0fVxuXHR9XG5cblx0b25Db250YWluZXJEZXN0cm95KCkge1xuXHRcdHRoaXMudW5iaW5kR2xvYmFsTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1vZGFsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlTW9kYWxpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdH1cblxuXHRjbG9zZSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpYWxvZ1JlZikge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZU1vZGFsaXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xvc2FibGUgIT09IGZhbHNlICYmIHRoaXMuY29uZmlnLmRpc21pc3NhYmxlTWFzaykge1xuICAgICAgICAgICAgdGhpcy5tYXNrQ2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMud3JhcHBlciwgJ21vdXNlZG93bicsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud3JhcHBlciAmJiB0aGlzLndyYXBwZXIuaXNTYW1lTm9kZShldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1vZGFsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAncC1vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVNb2RhbGl0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRpc21pc3NhYmxlTWFzaykge1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kTWFza0NsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1vZGFsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKHRoaXMuY2QgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgZm9jdXNhYmxlRWxlbWVudHMgPSBEb21IYW5kbGVyLmdldEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzICYmIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZvY3VzYWJsZUVsZW1lbnRzWzBdLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvY3VzZWRJbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmluZGV4T2YoZm9jdXNhYmxlRWxlbWVudHNbMF0ub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPT0gLTEgfHwgZm9jdXNlZEluZGV4ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNlZEluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPT0gLTEgfHwgZm9jdXNlZEluZGV4ID09PSAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2VkSW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIGxldCBmb2N1c2FibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5jb250YWluZXIsICdbYXV0b2ZvY3VzXScpO1xuICAgICAgICBpZiAoZm9jdXNhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZm9jdXNhYmxlLmZvY3VzKCksIDUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0YmluZEdsb2JhbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRLZXlkb3duTGlzdGVuZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xvc2VPbkVzY2FwZSAhPT0gZmFsc2UgJiYgdGhpcy5jb25maWcuY2xvc2FibGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmREb2N1bWVudEVzY2FwZUxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRLZXlkb3duTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudEVzY2FwZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50S2V5ZG93bkxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudEtleWRvd25MaXN0ZW5lciA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudEtleWRvd25MaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5kb2N1bWVudEtleWRvd25MaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuXHRiaW5kRG9jdW1lbnRFc2NhcGVMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRUYXJnZXQ6IGFueSA9IHRoaXMubWFza1ZpZXdDaGlsZCA/IHRoaXMubWFza1ZpZXdDaGlsZC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAnZG9jdW1lbnQnO1xuXG4gICAgICAgIHRoaXMuZG9jdW1lbnRFc2NhcGVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50VGFyZ2V0LCAna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09IDI3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuY29udGFpbmVyLnN0eWxlLnpJbmRleCkgPT0gKERvbUhhbmRsZXIuemluZGV4ICsgKHRoaXMuY29uZmlnLmJhc2VaSW5kZXggPyB0aGlzLmNvbmZpZy5iYXNlWkluZGV4IDogMCkpKSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRFc2NhcGVMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRFc2NhcGVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudEVzY2FwZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RXNjYXBlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kTWFza0NsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hc2tDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2tDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLm1hc2tDbGlja0xpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLm9uQ29udGFpbmVyRGVzdHJveSgpO1xuXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdFx0fVxuXHR9XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuXHRkZWNsYXJhdGlvbnM6IFtEeW5hbWljRGlhbG9nQ29tcG9uZW50LCBEeW5hbWljRGlhbG9nQ29udGVudF0sXG5cdGVudHJ5Q29tcG9uZW50czogW0R5bmFtaWNEaWFsb2dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNEaWFsb2dNb2R1bGUgeyB9XG4iXX0=