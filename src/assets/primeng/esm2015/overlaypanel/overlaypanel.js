import { NgModule, Component, Input, Output, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef, NgZone, ContentChildren, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

function OverlayPanel_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function OverlayPanel_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function OverlayPanel_div_0_button_4_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(2); return ctx_r3.onCloseClick($event); })("keydown.enter", function OverlayPanel_div_0_button_4_Template_button_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.hide(); });
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r2.ariaCloseLabel);
} }
const _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function OverlayPanel_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function OverlayPanel_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onContainerClick(); })("@animation.start", function OverlayPanel_div_0_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onAnimationStart($event); })("@animation.done", function OverlayPanel_div_0_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onAnimationEnd($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵtemplate(3, OverlayPanel_div_0_ng_container_3_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, OverlayPanel_div_0_button_4_Template, 2, 1, "button", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-overlaypanel p-component")("ngStyle", ctx_r0.style)("@animation", ɵngcc0.ɵɵpureFunction2(10, _c1, ctx_r0.overlayVisible ? "open" : "close", ɵngcc0.ɵɵpureFunction2(7, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showCloseIcon);
} }
const _c2 = ["*"];
export class OverlayPanel {
    constructor(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.dismissable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.focusOnShow = true;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.overlayVisible = false;
        this.render = false;
        this.isContainerClicked = true;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
            this.cd.markForCheck();
        });
    }
    onContainerClick() {
        this.isContainerClicked = true;
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener && this.dismissable) {
            this.zone.runOutsideAngular(() => {
                let documentEvent = DomHandler.isIOS() ? 'touchstart' : 'click';
                const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
                    if (!this.container.contains(event.target) && this.target !== event.target && !this.target.contains(event.target) && !this.isContainerClicked) {
                        this.zone.run(() => {
                            this.hide();
                        });
                    }
                    this.isContainerClicked = false;
                    this.cd.markForCheck();
                });
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    toggle(event, target) {
        if (this.overlayVisible) {
            if (this.hasTargetChanged(event, target)) {
                this.destroyCallback = () => {
                    this.show(null, (target || event.currentTarget || event.target));
                };
            }
            this.hide();
        }
        else {
            this.show(event, target);
        }
    }
    show(event, target) {
        this.target = target || event.currentTarget || event.target;
        this.overlayVisible = true;
        this.render = true;
        this.cd.markForCheck();
    }
    hasTargetChanged(event, target) {
        return this.target != null && this.target !== (target || event.currentTarget || event.target);
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                DomHandler.appendChild(this.container, this.appendTo);
        }
    }
    restoreAppend() {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    }
    align() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
        }
        DomHandler.absolutePosition(this.container, this.target);
        const containerOffset = DomHandler.getOffset(this.container);
        const targetOffset = DomHandler.getOffset(this.target);
        let arrowLeft = 0;
        if (containerOffset.left < targetOffset.left) {
            arrowLeft = targetOffset.left - containerOffset.left;
        }
        this.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);
        if (containerOffset.top < targetOffset.top) {
            DomHandler.addClass(this.container, 'p-overlaypanel-flipped');
        }
    }
    onAnimationStart(event) {
        if (event.toState === 'open') {
            this.container = event.element;
            this.onShow.emit(null);
            this.appendContainer();
            this.align();
            this.bindDocumentClickListener();
            this.bindDocumentResizeListener();
            this.bindScrollListener();
            if (this.focusOnShow) {
                this.focus();
            }
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                if (this.destroyCallback) {
                    this.destroyCallback();
                    this.destroyCallback = null;
                }
                break;
            case 'close':
                this.onContainerDestroy();
                this.onHide.emit({});
                this.render = false;
                break;
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
    hide() {
        this.overlayVisible = false;
        this.cd.markForCheck();
    }
    onCloseClick(event) {
        this.hide();
        event.preventDefault();
    }
    onWindowResize(event) {
        this.hide();
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
                if (this.overlayVisible) {
                    this.hide();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    onContainerDestroy() {
        this.target = null;
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
    }
    ngOnDestroy() {
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.target = null;
        this.destroyCallback = null;
        if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
        }
    }
}
OverlayPanel.ɵfac = function OverlayPanel_Factory(t) { return new (t || OverlayPanel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
OverlayPanel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OverlayPanel, selectors: [["p-overlayPanel"]], contentQueries: function OverlayPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { dismissable: "dismissable", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", focusOnShow: "focusOnShow", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", showCloseIcon: "showCloseIcon", style: "style", styleClass: "styleClass", appendTo: "appendTo", ariaCloseLabel: "ariaCloseLabel" }, outputs: { onShow: "onShow", onHide: "onHide" }, ngContentSelectors: _c2, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], [1, "p-overlaypanel-content"], [4, "ngTemplateOutlet"], ["type", "button", "class", "p-overlaypanel-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-overlaypanel-close", "p-link", 3, "click", "keydown.enter"], [1, "p-overlaypanel-close-icon", "pi", "pi-times"]], template: function OverlayPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, OverlayPanel_div_0_Template, 5, 13, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.render);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-overlaypanel{margin-top:10px;position:absolute}.p-overlaypanel-flipped{margin-bottom:10px;margin-top:0}.p-overlaypanel-close{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;content:\" \";height:0;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);pointer-events:none;position:absolute;width:0}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;margin-left:auto;right:1.25em}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after,.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}"], encapsulation: 2, data: { animation: [
            trigger('animation', [
                state('void', style({
                    transform: 'scaleY(0.8)',
                    opacity: 0
                })),
                state('close', style({
                    opacity: 0
                })),
                state('open', style({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                transition('void => open', animate('{{showTransitionParams}}')),
                transition('open => close', animate('{{hideTransitionParams}}')),
            ])
        ] }, changeDetection: 0 });
OverlayPanel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
OverlayPanel.propDecorators = {
    dismissable: [{ type: Input }],
    showCloseIcon: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    appendTo: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    ariaCloseLabel: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    focusOnShow: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayPanel, [{
        type: Component,
        args: [{
                selector: 'p-overlayPanel',
                template: `
        <div *ngIf="render" [ngClass]="'p-overlaypanel p-component'" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick()"
            [@animation]="{value: (overlayVisible ? 'open': 'close'), params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}"
                (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)">
            <div class="p-overlaypanel-content">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </div>
            <button *ngIf="showCloseIcon" type="button" class="p-overlaypanel-close p-link" (click)="onCloseClick($event)" (keydown.enter)="hide()" [attr.aria-label]="ariaCloseLabel" pRipple>
                <span class="p-overlaypanel-close-icon pi pi-times"></span>
            </button>
        </div>
    `,
                animations: [
                    trigger('animation', [
                        state('void', style({
                            transform: 'scaleY(0.8)',
                            opacity: 0
                        })),
                        state('close', style({
                            opacity: 0
                        })),
                        state('open', style({
                            transform: 'translateY(0)',
                            opacity: 1
                        })),
                        transition('void => open', animate('{{showTransitionParams}}')),
                        transition('open => close', animate('{{hideTransitionParams}}')),
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-overlaypanel{margin-top:10px;position:absolute}.p-overlaypanel-flipped{margin-bottom:10px;margin-top:0}.p-overlaypanel-close{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;content:\" \";height:0;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);pointer-events:none;position:absolute;width:0}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;margin-left:auto;right:1.25em}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after,.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { dismissable: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], focusOnShow: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], showCloseIcon: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], ariaCloseLabel: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class OverlayPanelModule {
}
OverlayPanelModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OverlayPanelModule });
OverlayPanelModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function OverlayPanelModule_Factory(t) { return new (t || OverlayPanelModule)(); }, imports: [[CommonModule, RippleModule, SharedModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OverlayPanelModule, { declarations: function () { return [OverlayPanel]; }, imports: function () { return [CommonModule, RippleModule, SharedModule]; }, exports: function () { return [OverlayPanel, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayPanelModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule, SharedModule],
                exports: [OverlayPanel, SharedModule],
                declarations: [OverlayPanel]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheXBhbmVsLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvb3ZlcmxheXBhbmVsL292ZXJsYXlwYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFXLFlBQVksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFDcEcsZUFBZSxFQUF3Qyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN0RSxPQUFPLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQWdCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQzFGLE1BQU0sT0FBTyxZQUFZO0FBQUcsSUFvRHhCLFlBQW1CLEVBQWMsRUFBUyxRQUFtQixFQUFTLEVBQXFCLEVBQVUsSUFBWTtBQUFJLFFBQWxHLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFRLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO0FBQUMsUUFsRHpHLGdCQUFXLEdBQVksSUFBSSxDQUFDO0FBQ3pDLFFBU2EsZUFBVSxHQUFZLElBQUksQ0FBQztBQUN4QyxRQUdhLGVBQVUsR0FBVyxDQUFDLENBQUM7QUFD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Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsT3V0cHV0LE9uRGVzdHJveSxFdmVudEVtaXR0ZXIsUmVuZGVyZXIyLEVsZW1lbnRSZWYsQ2hhbmdlRGV0ZWN0b3JSZWYsTmdab25lLFxuICAgICAgICBDb250ZW50Q2hpbGRyZW4sVGVtcGxhdGVSZWYsQWZ0ZXJDb250ZW50SW5pdCxRdWVyeUxpc3QsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtEb21IYW5kbGVyLCBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGUsUHJpbWVUZW1wbGF0ZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7dHJpZ2dlcixzdGF0ZSxzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGUsQW5pbWF0aW9uRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atb3ZlcmxheVBhbmVsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwicmVuZGVyXCIgW25nQ2xhc3NdPVwiJ3Atb3ZlcmxheXBhbmVsIHAtY29tcG9uZW50J1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiAoY2xpY2spPVwib25Db250YWluZXJDbGljaygpXCJcbiAgICAgICAgICAgIFtAYW5pbWF0aW9uXT1cInt2YWx1ZTogKG92ZXJsYXlWaXNpYmxlID8gJ29wZW4nOiAnY2xvc2UnKSwgcGFyYW1zOiB7c2hvd1RyYW5zaXRpb25QYXJhbXM6IHNob3dUcmFuc2l0aW9uT3B0aW9ucywgaGlkZVRyYW5zaXRpb25QYXJhbXM6IGhpZGVUcmFuc2l0aW9uT3B0aW9uc319XCJcbiAgICAgICAgICAgICAgICAoQGFuaW1hdGlvbi5zdGFydCk9XCJvbkFuaW1hdGlvblN0YXJ0KCRldmVudClcIiAoQGFuaW1hdGlvbi5kb25lKT1cIm9uQW5pbWF0aW9uRW5kKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW92ZXJsYXlwYW5lbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dDbG9zZUljb25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwLW92ZXJsYXlwYW5lbC1jbG9zZSBwLWxpbmtcIiAoY2xpY2spPVwib25DbG9zZUNsaWNrKCRldmVudClcIiAoa2V5ZG93bi5lbnRlcik9XCJoaWRlKClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFDbG9zZUxhYmVsXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtb3ZlcmxheXBhbmVsLWNsb3NlLWljb24gcGkgcGktdGltZXNcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnY2xvc2UnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBvcGVuJywgYW5pbWF0ZSgne3tzaG93VHJhbnNpdGlvblBhcmFtc319JykpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZScsIGFuaW1hdGUoJ3t7aGlkZVRyYW5zaXRpb25QYXJhbXN9fScpKSxcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3ZlcmxheXBhbmVsLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlQYW5lbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBkaXNtaXNzYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBzaG93Q2xvc2VJY29uOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBhbnk7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGFyaWFDbG9zZUxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgZm9jdXNPblNob3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgc2hvd1RyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnLjEycyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSc7XG5cbiAgICBASW5wdXQoKSBoaWRlVHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMXMgbGluZWFyJztcblxuICAgIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgb3ZlcmxheVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHJlbmRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaXNDb250YWluZXJDbGlja2VkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGRvY3VtZW50Q2xpY2tMaXN0ZW5lcjogYW55O1xuXG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICB3aWxsSGlkZTogYm9vbGVhbjtcblxuICAgIHNjcm9sbEhhbmRsZXI6IGFueTtcblxuICAgIGRvY3VtZW50UmVzaXplTGlzdGVuZXI6IGFueTtcblxuICAgIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGRlc3Ryb3lDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Db250YWluZXJDbGljaygpIHtcbiAgICAgICAgdGhpcy5pc0NvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgJiYgdGhpcy5kaXNtaXNzYWJsZSkge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZG9jdW1lbnRFdmVudCA9IERvbUhhbmRsZXIuaXNJT1MoKSA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljayc7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRUYXJnZXQ6IGFueSA9IHRoaXMuZWwgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudCA6ICdkb2N1bWVudCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50VGFyZ2V0LCBkb2N1bWVudEV2ZW50LCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lci5jb250YWlucyhldmVudC50YXJnZXQpICYmIHRoaXMudGFyZ2V0ICE9PSBldmVudC50YXJnZXQgJiYgIXRoaXMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIXRoaXMuaXNDb250YWluZXJDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvbnRhaW5lckNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQsIHRhcmdldD8pIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1RhcmdldENoYW5nZWQoZXZlbnQsIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KG51bGwsICh0YXJnZXR8fGV2ZW50LmN1cnJlbnRUYXJnZXR8fGV2ZW50LnRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhldmVudCwgdGFyZ2V0Pykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldHx8ZXZlbnQuY3VycmVudFRhcmdldHx8ZXZlbnQudGFyZ2V0O1xuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGhhc1RhcmdldENoYW5nZWQoZXZlbnQsIHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgIT0gbnVsbCAmJiB0aGlzLnRhcmdldCAhPT0gKHRhcmdldHx8ZXZlbnQuY3VycmVudFRhcmdldHx8ZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBhcHBlbmRDb250YWluZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIsIHRoaXMuYXBwZW5kVG8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZUFwcGVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGlnbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1pJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuekluZGV4ID0gU3RyaW5nKHRoaXMuYmFzZVpJbmRleCArICgrK0RvbUhhbmRsZXIuemluZGV4KSk7XG4gICAgICAgIH1cbiAgICAgICAgRG9tSGFuZGxlci5hYnNvbHV0ZVBvc2l0aW9uKHRoaXMuY29udGFpbmVyLCB0aGlzLnRhcmdldCk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyT2Zmc2V0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5jb250YWluZXIpO1xuICAgICAgICBjb25zdCB0YXJnZXRPZmZzZXQgPSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLnRhcmdldCk7XG4gICAgICAgIGxldCBhcnJvd0xlZnQgPSAwO1xuXG4gICAgICAgIGlmIChjb250YWluZXJPZmZzZXQubGVmdCA8IHRhcmdldE9mZnNldC5sZWZ0KSB7XG4gICAgICAgICAgICBhcnJvd0xlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAtIGNvbnRhaW5lck9mZnNldC5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLW92ZXJsYXlBcnJvd0xlZnQnLCBgJHthcnJvd0xlZnR9cHhgKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyT2Zmc2V0LnRvcCA8IHRhcmdldE9mZnNldC50b3ApIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5jb250YWluZXIsICdwLW92ZXJsYXlwYW5lbC1mbGlwcGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGV2ZW50LmVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLm9uU2hvdy5lbWl0KG51bGwpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250YWluZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYWxpZ24oKTtcbiAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNPblNob3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFuaW1hdGlvbkVuZChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbnRhaW5lckRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uSGlkZS5lbWl0KHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgbGV0IGZvY3VzYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmNvbnRhaW5lciwgJ1thdXRvZm9jdXNdJyk7XG4gICAgICAgIGlmIChmb2N1c2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBmb2N1c2FibGUuZm9jdXMoKSwgNSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25XaW5kb3dSZXNpemUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbmV3IENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyKHRoaXMudGFyZ2V0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdW5iaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db250YWluZXJEZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLmRlc3Ryb3lDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlQXBwZW5kKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ29udGFpbmVyRGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsUmlwcGxlTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtPdmVybGF5UGFuZWwsIFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbT3ZlcmxheVBhbmVsXVxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5UGFuZWxNb2R1bGUgeyB9XG4iXX0=