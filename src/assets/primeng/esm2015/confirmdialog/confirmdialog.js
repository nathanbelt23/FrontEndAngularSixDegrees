import { NgModule, Component, ElementRef, Input, EventEmitter, Renderer2, ContentChild, NgZone, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren, Output } from '@angular/core';
import { trigger, style, transition, animate, useAnimation, animation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { Footer, SharedModule, PrimeTemplate, PrimeNGConfig, TranslationKeys, ConfirmEventType } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { UniqueComponentId } from 'primeng/utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/button';

const _c0 = ["content"];
function ConfirmDialog_div_0_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ConfirmDialog_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
} }
function ConfirmDialog_div_0_div_1_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.option("header"));
} }
const _c1 = function () { return { "p-dialog-header-icon p-dialog-header-close p-link": true }; };
function ConfirmDialog_div_0_div_1_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_2_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(4); return ctx_r11.close($event); })("keydown.enter", function ConfirmDialog_div_0_div_1_div_2_button_3_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(4); return ctx_r13.close($event); });
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(1, _c1));
} }
function ConfirmDialog_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_2_span_1_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵelementStart(2, "div", 13);
    ɵngcc0.ɵɵtemplate(3, ConfirmDialog_div_0_div_1_div_2_button_3_Template, 2, 2, "button", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.option("header"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.closable);
} }
function ConfirmDialog_div_0_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 1);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMap(ctx_r5.option("icon"));
    ɵngcc0.ɵɵproperty("ngClass", "p-confirm-dialog-icon");
} }
function ConfirmDialog_div_0_div_1_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ConfirmDialog_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, ConfirmDialog_div_0_div_1_div_7_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
function ConfirmDialog_div_0_div_1_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 20);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_8_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(4); return ctx_r17.reject(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMap(ctx_r15.option("rejectButtonStyleClass"));
    ɵngcc0.ɵɵproperty("icon", ctx_r15.option("rejectIcon"))("label", ctx_r15.rejectButtonLabel)("ngClass", "p-confirm-dialog-reject");
    ɵngcc0.ɵɵattribute("aria-label", ctx_r15.rejectAriaLabel);
} }
function ConfirmDialog_div_0_div_1_div_8_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 20);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_8_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(4); return ctx_r19.accept(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMap(ctx_r16.option("acceptButtonStyleClass"));
    ɵngcc0.ɵɵproperty("icon", ctx_r16.option("acceptIcon"))("label", ctx_r16.acceptButtonLabel)("ngClass", "p-confirm-dialog-accept");
    ɵngcc0.ɵɵattribute("aria-label", ctx_r16.acceptAriaLabel);
} }
function ConfirmDialog_div_0_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_8_button_1_Template, 1, 6, "button", 19);
    ɵngcc0.ɵɵtemplate(2, ConfirmDialog_div_0_div_1_div_8_button_2_Template, 1, 6, "button", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.option("rejectVisible"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.option("acceptVisible"));
} }
const _c2 = function (a1) { return { "p-dialog p-confirm-dialog p-component": true, "p-dialog-rtl": a1 }; };
const _c3 = function (a0, a1) { return { transform: a0, transition: a1 }; };
const _c4 = function (a1) { return { value: "visible", params: a1 }; };
function ConfirmDialog_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("mousedown", function ConfirmDialog_div_0_div_1_Template_div_mousedown_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(2); return ctx_r21.moveOnTop(); })("@animation.start", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.onAnimationStart($event); })("@animation.done", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r24 = ɵngcc0.ɵɵnextContext(2); return ctx_r24.onAnimationEnd($event); });
    ɵngcc0.ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_1_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, ConfirmDialog_div_0_div_1_div_2_Template, 4, 2, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5, 6);
    ɵngcc0.ɵɵtemplate(5, ConfirmDialog_div_0_div_1_i_5_Template, 1, 3, "i", 7);
    ɵngcc0.ɵɵelement(6, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, ConfirmDialog_div_0_div_1_div_7_Template, 3, 1, "div", 9);
    ɵngcc0.ɵɵtemplate(8, ConfirmDialog_div_0_div_1_div_8_Template, 3, 2, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c2, ctx_r1.rtl))("ngStyle", ctx_r1.style)("@animation", ɵngcc0.ɵɵpureFunction1(16, _c4, ɵngcc0.ɵɵpureFunction2(13, _c3, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.headerTemplate);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.option("icon"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r1.option("message"), ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.footer || ctx_r1.footerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.footer && !ctx_r1.footerTemplate);
} }
function ConfirmDialog_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, ConfirmDialog_div_0_div_1_Template, 9, 18, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.maskStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.getMaskClass());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
} }
const _c5 = [[["p-footer"]]];
const _c6 = ["p-footer"];
const showAnimation = animation([
    style({ transform: '{{transform}}', opacity: 0 }),
    animate('{{transition}}', style({ transform: 'none', opacity: 1 }))
]);
const hideAnimation = animation([
    animate('{{transition}}', style({ transform: '{{transform}}', opacity: 0 }))
]);
export class ConfirmDialog {
    constructor(el, renderer, confirmationService, zone, cd, config) {
        this.el = el;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.zone = zone;
        this.cd = cd;
        this.config = config;
        this.acceptIcon = 'pi pi-check';
        this.acceptVisible = true;
        this.rejectIcon = 'pi pi-times';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.blockScroll = true;
        this.closable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.focusTrap = true;
        this.defaultFocus = 'accept';
        this.onHide = new EventEmitter();
        this._position = "center";
        this.transformOptions = "scale(0.7)";
        this.id = UniqueComponentId();
        this.subscription = this.confirmationService.requireConfirmation$.subscribe(confirmation => {
            if (!confirmation) {
                this.hide();
                return;
            }
            if (confirmation.key === this.key) {
                this.confirmation = confirmation;
                this.confirmationOptions = {
                    message: this.confirmation.message || this.message,
                    icon: this.confirmation.icon || this.icon,
                    header: this.confirmation.header || this.header,
                    rejectVisible: this.confirmation.rejectVisible == null ? this.rejectVisible : this.confirmation.rejectVisible,
                    acceptVisible: this.confirmation.acceptVisible == null ? this.acceptVisible : this.confirmation.acceptVisible,
                    acceptLabel: this.confirmation.acceptLabel || this.acceptLabel,
                    rejectLabel: this.confirmation.rejectLabel || this.rejectLabel,
                    acceptIcon: this.confirmation.acceptIcon || this.acceptIcon,
                    rejectIcon: this.confirmation.rejectIcon || this.rejectIcon,
                    acceptButtonStyleClass: this.confirmation.acceptButtonStyleClass || this.acceptButtonStyleClass,
                    rejectButtonStyleClass: this.confirmation.rejectButtonStyleClass || this.rejectButtonStyleClass,
                    defaultFocus: this.confirmation.defaultFocus || this.defaultFocus,
                    blockScroll: (this.confirmation.blockScroll === false || this.confirmation.blockScroll === true) ? this.confirmation.blockScroll : this.blockScroll,
                    closeOnEscape: (this.confirmation.closeOnEscape === false || this.confirmation.closeOnEscape === true) ? this.confirmation.closeOnEscape : this.closeOnEscape,
                    dismissableMask: (this.confirmation.dismissableMask === false || this.confirmation.dismissableMask === true) ? this.confirmation.dismissableMask : this.dismissableMask
                };
                if (this.confirmation.accept) {
                    this.confirmation.acceptEvent = new EventEmitter();
                    this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
                }
                if (this.confirmation.reject) {
                    this.confirmation.rejectEvent = new EventEmitter();
                    this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
                }
                this.visible = true;
            }
        });
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        if (this._visible && !this.maskVisible) {
            this.maskVisible = true;
        }
        this.cd.markForCheck();
    }
    get position() {
        return this._position;
    }
    ;
    set position(value) {
        this._position = value;
        switch (value) {
            case 'top-left':
            case 'bottom-left':
            case 'left':
                this.transformOptions = "translate3d(-100%, 0px, 0px)";
                break;
            case 'top-right':
            case 'bottom-right':
            case 'right':
                this.transformOptions = "translate3d(100%, 0px, 0px)";
                break;
            case 'bottom':
                this.transformOptions = "translate3d(0px, 100%, 0px)";
                break;
            case 'top':
                this.transformOptions = "translate3d(0px, -100%, 0px)";
                break;
            default:
                this.transformOptions = "scale(0.7)";
                break;
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
            }
        });
    }
    ngOnInit() {
        if (this.breakpoints) {
            this.createStyle();
        }
    }
    option(name) {
        const source = this.confirmationOptions || this;
        if (source.hasOwnProperty(name)) {
            return source[name];
        }
        return undefined;
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.wrapper = this.container.parentElement;
                this.contentContainer = DomHandler.findSingle(this.container, '.p-dialog-content');
                this.container.setAttribute(this.id, '');
                const element = this.getElementToFocus();
                if (element) {
                    element.focus();
                }
                this.appendContainer();
                this.moveOnTop();
                this.bindGlobalListeners();
                this.enableModality();
                break;
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    getElementToFocus() {
        switch (this.option('defaultFocus')) {
            case 'accept':
                return DomHandler.findSingle(this.container, '.p-confirm-dialog-accept');
            case 'reject':
                return DomHandler.findSingle(this.container, '.p-confirm-dialog-reject');
            case 'close':
                return DomHandler.findSingle(this.container, '.p-dialog-header-close');
            case 'none':
                return null;
            //backward compatibility
            default:
                return DomHandler.findSingle(this.container, '.p-confirm-dialog-accept');
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.wrapper);
            else
                DomHandler.appendChild(this.wrapper, this.appendTo);
        }
    }
    restoreAppend() {
        if (this.wrapper && this.appendTo) {
            this.el.nativeElement.appendChild(this.wrapper);
        }
    }
    enableModality() {
        if (this.option('blockScroll')) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
        if (this.option('dismissableMask')) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', (event) => {
                if (this.wrapper && this.wrapper.isSameNode(event.target)) {
                    this.close(event);
                }
            });
        }
    }
    disableModality() {
        this.maskVisible = false;
        if (this.option('blockScroll')) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
        if (this.dismissableMask) {
            this.unbindMaskClickListener();
        }
        if (this.container && !this.cd['destroyed']) {
            this.cd.detectChanges();
        }
    }
    createStyle() {
        if (!this.styleElement) {
            this.styleElement = document.createElement('style');
            this.styleElement.type = 'text/css';
            document.head.appendChild(this.styleElement);
            let innerHTML = '';
            for (let breakpoint in this.breakpoints) {
                innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
            }
            this.styleElement.innerHTML = innerHTML;
        }
    }
    close(event) {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
        }
        this.hide(ConfirmEventType.CANCEL);
        event.preventDefault();
    }
    hide(type) {
        this.onHide.emit(type);
        this.visible = false;
        this.confirmation = null;
        this.confirmationOptions = null;
    }
    moveOnTop() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
            this.wrapper.style.zIndex = String(this.baseZIndex + (DomHandler.zindex - 1));
        }
    }
    getMaskClass() {
        let maskClass = { 'p-dialog-mask p-component-overlay': true, 'p-dialog-mask-scrollblocker': this.blockScroll };
        maskClass[this.getPositionClass().toString()] = true;
        return maskClass;
    }
    getPositionClass() {
        const positions = ['left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
        const pos = positions.find(item => item === this.position);
        return pos ? `p-dialog-${pos}` : '';
    }
    bindGlobalListeners() {
        if ((this.option('closeOnEscape') && this.closable) || this.focusTrap && !this.documentEscapeListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', (event) => {
                if (event.which == 27 && (this.option('closeOnEscape') && this.closable)) {
                    if (parseInt(this.container.style.zIndex) === (DomHandler.zindex + this.baseZIndex) && this.visible) {
                        this.close(event);
                    }
                }
                if (event.which === 9 && this.focusTrap) {
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
            });
        }
    }
    unbindGlobalListeners() {
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
    onOverlayHide() {
        this.disableModality();
        this.unbindGlobalListeners();
        this.container = null;
    }
    destroyStyle() {
        if (this.styleElement) {
            document.head.removeChild(this.styleElement);
            this.styleElement = null;
        }
    }
    ngOnDestroy() {
        this.restoreAppend();
        this.onOverlayHide();
        this.subscription.unsubscribe();
        this.destroyStyle();
    }
    accept() {
        if (this.confirmation && this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide(ConfirmEventType.ACCEPT);
    }
    reject() {
        if (this.confirmation && this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
        }
        this.hide(ConfirmEventType.REJECT);
    }
    get acceptButtonLabel() {
        return this.option('acceptLabel') || this.config.getTranslation(TranslationKeys.ACCEPT);
    }
    get rejectButtonLabel() {
        return this.option('rejectLabel') || this.config.getTranslation(TranslationKeys.REJECT);
    }
}
ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) { return new (t || ConfirmDialog)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ConfirmationService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig)); };
ConfirmDialog.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ConfirmDialog, selectors: [["p-confirmDialog"]], contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function ConfirmDialog_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
    } }, inputs: { acceptIcon: "acceptIcon", acceptVisible: "acceptVisible", rejectIcon: "rejectIcon", rejectVisible: "rejectVisible", closeOnEscape: "closeOnEscape", blockScroll: "blockScroll", closable: "closable", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", transitionOptions: "transitionOptions", focusTrap: "focusTrap", defaultFocus: "defaultFocus", visible: "visible", position: "position", header: "header", icon: "icon", message: "message", style: "style", styleClass: "styleClass", maskStyleClass: "maskStyleClass", acceptLabel: "acceptLabel", acceptAriaLabel: "acceptAriaLabel", rejectLabel: "rejectLabel", rejectAriaLabel: "rejectAriaLabel", acceptButtonStyleClass: "acceptButtonStyleClass", rejectButtonStyleClass: "rejectButtonStyleClass", dismissableMask: "dismissableMask", rtl: "rtl", appendTo: "appendTo", key: "key", breakpoints: "breakpoints" }, outputs: { onHide: "onHide" }, ngContentSelectors: _c6, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", "ngStyle", "class", "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle", "mousedown"], ["class", "p-dialog-header", 4, "ngIf"], [1, "p-dialog-content"], ["content", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-confirm-dialog-message", 3, "innerHTML"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-dialog-header"], [4, "ngTemplateOutlet"], ["class", "p-dialog-title", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title"], ["type", "button", 3, "ngClass", "click", "keydown.enter"], [1, "pi", "pi-times"], [1, "p-dialog-footer"], ["type", "button", "pButton", "", 3, "icon", "label", "ngClass", "class", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "label", "ngClass", "click"]], template: function ConfirmDialog_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c5);
        ɵngcc0.ɵɵtemplate(0, ConfirmDialog_div_0_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.maskVisible);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgTemplateOutlet, ɵngcc3.ButtonDirective], styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"], encapsulation: 2, data: { animation: [
            trigger('animation', [
                transition('void => visible', [
                    useAnimation(showAnimation)
                ]),
                transition('visible => void', [
                    useAnimation(hideAnimation)
                ])
            ])
        ] }, changeDetection: 0 });
ConfirmDialog.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ConfirmationService },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: PrimeNGConfig }
];
ConfirmDialog.propDecorators = {
    header: [{ type: Input }],
    icon: [{ type: Input }],
    message: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    maskStyleClass: [{ type: Input }],
    acceptIcon: [{ type: Input }],
    acceptLabel: [{ type: Input }],
    acceptAriaLabel: [{ type: Input }],
    acceptVisible: [{ type: Input }],
    rejectIcon: [{ type: Input }],
    rejectLabel: [{ type: Input }],
    rejectAriaLabel: [{ type: Input }],
    rejectVisible: [{ type: Input }],
    acceptButtonStyleClass: [{ type: Input }],
    rejectButtonStyleClass: [{ type: Input }],
    closeOnEscape: [{ type: Input }],
    dismissableMask: [{ type: Input }],
    blockScroll: [{ type: Input }],
    rtl: [{ type: Input }],
    closable: [{ type: Input }],
    appendTo: [{ type: Input }],
    key: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    transitionOptions: [{ type: Input }],
    focusTrap: [{ type: Input }],
    defaultFocus: [{ type: Input }],
    breakpoints: [{ type: Input }],
    visible: [{ type: Input }],
    position: [{ type: Input }],
    onHide: [{ type: Output }],
    footer: [{ type: ContentChild, args: [Footer,] }],
    contentViewChild: [{ type: ViewChild, args: ['content',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialog, [{
        type: Component,
        args: [{
                selector: 'p-confirmDialog',
                template: `
        <div [class]="maskStyleClass" [ngClass]="getMaskClass()" *ngIf="maskVisible">
            <div [ngClass]="{'p-dialog p-confirm-dialog p-component':true,'p-dialog-rtl':rtl}" [ngStyle]="style" [class]="styleClass" (mousedown)="moveOnTop()"
                [@animation]="{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}" (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" *ngIf="visible">
                <div class="p-dialog-header" *ngIf="headerTemplate">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </div>
                <div class="p-dialog-header" *ngIf="!headerTemplate">
                    <span class="p-dialog-title" *ngIf="option('header')">{{option('header')}}</span>
                    <div class="p-dialog-header-icons">
                        <button *ngIf="closable" type="button" [ngClass]="{'p-dialog-header-icon p-dialog-header-close p-link':true}" (click)="close($event)" (keydown.enter)="close($event)">
                            <span class="pi pi-times"></span>
                        </button>
                    </div>
                </div>
                <div #content class="p-dialog-content">
                    <i [ngClass]="'p-confirm-dialog-icon'" [class]="option('icon')" *ngIf="option('icon')"></i>
                    <span class="p-confirm-dialog-message" [innerHTML]="option('message')"></span>
                </div>
                <div class="p-dialog-footer" *ngIf="footer || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
                <div class="p-dialog-footer" *ngIf="!footer && !footerTemplate">
                    <button type="button" pButton [icon]="option('rejectIcon')" [label]="rejectButtonLabel" (click)="reject()" [ngClass]="'p-confirm-dialog-reject'" [class]="option('rejectButtonStyleClass')" *ngIf="option('rejectVisible')" [attr.aria-label]="rejectAriaLabel"></button>
                    <button type="button" pButton [icon]="option('acceptIcon')" [label]="acceptButtonLabel" (click)="accept()" [ngClass]="'p-confirm-dialog-accept'" [class]="option('acceptButtonStyleClass')" *ngIf="option('acceptVisible')" [attr.aria-label]="acceptAriaLabel"></button>
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.ConfirmationService }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.PrimeNGConfig }]; }, { acceptIcon: [{
            type: Input
        }], acceptVisible: [{
            type: Input
        }], rejectIcon: [{
            type: Input
        }], rejectVisible: [{
            type: Input
        }], closeOnEscape: [{
            type: Input
        }], blockScroll: [{
            type: Input
        }], closable: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], focusTrap: [{
            type: Input
        }], defaultFocus: [{
            type: Input
        }], onHide: [{
            type: Output
        }], visible: [{
            type: Input
        }], position: [{
            type: Input
        }], header: [{
            type: Input
        }], icon: [{
            type: Input
        }], message: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], maskStyleClass: [{
            type: Input
        }], acceptLabel: [{
            type: Input
        }], acceptAriaLabel: [{
            type: Input
        }], rejectLabel: [{
            type: Input
        }], rejectAriaLabel: [{
            type: Input
        }], acceptButtonStyleClass: [{
            type: Input
        }], rejectButtonStyleClass: [{
            type: Input
        }], dismissableMask: [{
            type: Input
        }], rtl: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], key: [{
            type: Input
        }], breakpoints: [{
            type: Input
        }], footer: [{
            type: ContentChild,
            args: [Footer]
        }], contentViewChild: [{
            type: ViewChild,
            args: ['content']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class ConfirmDialogModule {
}
ConfirmDialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ConfirmDialogModule });
ConfirmDialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ConfirmDialogModule_Factory(t) { return new (t || ConfirmDialogModule)(); }, imports: [[CommonModule, ButtonModule], ButtonModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ConfirmDialogModule, { declarations: function () { return [ConfirmDialog]; }, imports: function () { return [CommonModule, ButtonModule]; }, exports: function () { return [ConfirmDialog, ButtonModule, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule],
                exports: [ConfirmDialog, ButtonModule, SharedModule],
                declarations: [ConfirmDialog]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWRpYWxvZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2NvbmZpcm1kaWFsb2cvY29uZmlybWRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQVcsS0FBSyxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUE0QyxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDelEsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBaUIsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFDaEMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUF5VzFDLE1BQU0sT0FBTyxtQkFBbUI7QUFBRzsrQ0FMbEMsUUFBUSxTQUFDLGtCQUNOO01BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLENBQUMsa0JBQ3BDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUNsRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FDaEM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixPbkRlc3Ryb3ksSW5wdXQsRXZlbnRFbWl0dGVyLFJlbmRlcmVyMixDb250ZW50Q2hpbGQsTmdab25lLFZpZXdDaGlsZCxDaGFuZ2VEZXRlY3RvclJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgT3V0cHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0cmlnZ2VyLHN0eWxlLHRyYW5zaXRpb24sYW5pbWF0ZSxBbmltYXRpb25FdmVudCwgdXNlQW5pbWF0aW9uLCBhbmltYXRpb259IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RvbUhhbmRsZXJ9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7Rm9vdGVyLFNoYXJlZE1vZHVsZSwgUHJpbWVUZW1wbGF0ZSwgUHJpbWVOR0NvbmZpZywgVHJhbnNsYXRpb25LZXlzLCBDb25maXJtRXZlbnRUeXBlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHtDb25maXJtYXRpb259IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7Q29uZmlybWF0aW9uU2VydmljZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtVbmlxdWVDb21wb25lbnRJZH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5cbmNvbnN0IHNob3dBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAne3t0cmFuc2Zvcm19fScsIG9wYWNpdHk6IDAgfSksXG4gICAgYW5pbWF0ZSgne3t0cmFuc2l0aW9ufX0nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ25vbmUnLCBvcGFjaXR5OiAxIH0pKVxuXSk7XG5cbmNvbnN0IGhpZGVBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIGFuaW1hdGUoJ3t7dHJhbnNpdGlvbn19Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd7e3RyYW5zZm9ybX19Jywgb3BhY2l0eTogMCB9KSlcbl0pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY29uZmlybURpYWxvZycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwibWFza1N0eWxlQ2xhc3NcIiBbbmdDbGFzc109XCJnZXRNYXNrQ2xhc3MoKVwiICpuZ0lmPVwibWFza1Zpc2libGVcIj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydwLWRpYWxvZyBwLWNvbmZpcm0tZGlhbG9nIHAtY29tcG9uZW50Jzp0cnVlLCdwLWRpYWxvZy1ydGwnOnJ0bH1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKG1vdXNlZG93bik9XCJtb3ZlT25Ub3AoKVwiXG4gICAgICAgICAgICAgICAgW0BhbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3RyYW5zZm9ybTogdHJhbnNmb3JtT3B0aW9ucywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbk9wdGlvbnN9fVwiIChAYW5pbWF0aW9uLnN0YXJ0KT1cIm9uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiIChAYW5pbWF0aW9uLmRvbmUpPVwib25BbmltYXRpb25FbmQoJGV2ZW50KVwiICpuZ0lmPVwidmlzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRpYWxvZy1oZWFkZXJcIiAqbmdJZj1cImhlYWRlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRpYWxvZy1oZWFkZXJcIiAqbmdJZj1cIiFoZWFkZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZGlhbG9nLXRpdGxlXCIgKm5nSWY9XCJvcHRpb24oJ2hlYWRlcicpXCI+e3tvcHRpb24oJ2hlYWRlcicpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRpYWxvZy1oZWFkZXItaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjbG9zYWJsZVwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7J3AtZGlhbG9nLWhlYWRlci1pY29uIHAtZGlhbG9nLWhlYWRlci1jbG9zZSBwLWxpbmsnOnRydWV9XCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIiAoa2V5ZG93bi5lbnRlcik9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaSBwaS10aW1lc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICNjb250ZW50IGNsYXNzPVwicC1kaWFsb2ctY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBbbmdDbGFzc109XCIncC1jb25maXJtLWRpYWxvZy1pY29uJ1wiIFtjbGFzc109XCJvcHRpb24oJ2ljb24nKVwiICpuZ0lmPVwib3B0aW9uKCdpY29uJylcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1jb25maXJtLWRpYWxvZy1tZXNzYWdlXCIgW2lubmVySFRNTF09XCJvcHRpb24oJ21lc3NhZ2UnKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kaWFsb2ctZm9vdGVyXCIgKm5nSWY9XCJmb290ZXIgfHwgZm9vdGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRpYWxvZy1mb290ZXJcIiAqbmdJZj1cIiFmb290ZXIgJiYgIWZvb3RlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gW2ljb25dPVwib3B0aW9uKCdyZWplY3RJY29uJylcIiBbbGFiZWxdPVwicmVqZWN0QnV0dG9uTGFiZWxcIiAoY2xpY2spPVwicmVqZWN0KClcIiBbbmdDbGFzc109XCIncC1jb25maXJtLWRpYWxvZy1yZWplY3QnXCIgW2NsYXNzXT1cIm9wdGlvbigncmVqZWN0QnV0dG9uU3R5bGVDbGFzcycpXCIgKm5nSWY9XCJvcHRpb24oJ3JlamVjdFZpc2libGUnKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwicmVqZWN0QXJpYUxhYmVsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gW2ljb25dPVwib3B0aW9uKCdhY2NlcHRJY29uJylcIiBbbGFiZWxdPVwiYWNjZXB0QnV0dG9uTGFiZWxcIiAoY2xpY2spPVwiYWNjZXB0KClcIiBbbmdDbGFzc109XCIncC1jb25maXJtLWRpYWxvZy1hY2NlcHQnXCIgW2NsYXNzXT1cIm9wdGlvbignYWNjZXB0QnV0dG9uU3R5bGVDbGFzcycpXCIgKm5nSWY9XCJvcHRpb24oJ2FjY2VwdFZpc2libGUnKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYWNjZXB0QXJpYUxhYmVsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oc2hvd0FuaW1hdGlvbilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHVzZUFuaW1hdGlvbihoaWRlQW5pbWF0aW9uKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2RpYWxvZy9kaWFsb2cuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsT25Jbml0LE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtYXNrU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYWNjZXB0SWNvbjogc3RyaW5nID0gJ3BpIHBpLWNoZWNrJztcblxuICAgIEBJbnB1dCgpIGFjY2VwdExhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhY2NlcHRBcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFjY2VwdFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgcmVqZWN0SWNvbjogc3RyaW5nID0gJ3BpIHBpLXRpbWVzJztcblxuICAgIEBJbnB1dCgpIHJlamVjdExhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZWplY3RBcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHJlamVjdFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgYWNjZXB0QnV0dG9uU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcmVqZWN0QnV0dG9uU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgY2xvc2VPbkVzY2FwZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkaXNtaXNzYWJsZU1hc2s6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBibG9ja1Njcm9sbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBydGw6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBjbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBhcHBlbmRUbzogYW55O1xuXG4gICAgQElucHV0KCkga2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGZvY3VzVHJhcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkZWZhdWx0Rm9jdXM6IHN0cmluZyA9ICdhY2NlcHQnO1xuXG4gICAgQElucHV0KCkgYnJlYWtwb2ludHM6IGFueTtcblxuICAgIEBJbnB1dCgpIGdldCB2aXNpYmxlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICAgIH1cbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTphbnkpIHtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLl92aXNpYmxlICYmICF0aGlzLm1hc2tWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2tWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9O1xuXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZTtcblxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AtbGVmdCc6XG4gICAgICAgICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU9wdGlvbnMgPSBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1PcHRpb25zID0gXCJ0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU9wdGlvbnMgPSBcInRyYW5zbGF0ZTNkKDBweCwgMTAwJSwgMHB4KVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtT3B0aW9ucyA9IFwidHJhbnNsYXRlM2QoMHB4LCAtMTAwJSwgMHB4KVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtT3B0aW9ucyA9IFwic2NhbGUoMC43KVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBDb250ZW50Q2hpbGQoRm9vdGVyKSBmb290ZXI7XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudFZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZm9vdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbjtcblxuICAgIF92aXNpYmxlOiBib29sZWFuO1xuXG4gICAgbWFza1Zpc2libGU6IGJvb2xlYW47XG5cbiAgICBkb2N1bWVudEVzY2FwZUxpc3RlbmVyOiBhbnk7XG5cbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgd3JhcHBlcjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb250ZW50Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgbWFza0NsaWNrTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gICAgcHJlV2lkdGg6IG51bWJlcjtcblxuICAgIF9wb3NpdGlvbjogc3RyaW5nID0gXCJjZW50ZXJcIjtcblxuICAgIHRyYW5zZm9ybU9wdGlvbnM6IGFueSA9IFwic2NhbGUoMC43KVwiO1xuXG4gICAgc3R5bGVFbGVtZW50OiBhbnk7XG5cbiAgICBpZCA9IFVuaXF1ZUNvbXBvbmVudElkKCk7XG5cbiAgICBjb25maXJtYXRpb25PcHRpb25zOiBDb25maXJtYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsIHB1YmxpYyB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLnJlcXVpcmVDb25maXJtYXRpb24kLnN1YnNjcmliZShjb25maXJtYXRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKCFjb25maXJtYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtYXRpb24ua2V5ID09PSB0aGlzLmtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uID0gY29uZmlybWF0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5jb25maXJtYXRpb24ubWVzc2FnZXx8dGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmNvbmZpcm1hdGlvbi5pY29ufHx0aGlzLmljb24sXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdGhpcy5jb25maXJtYXRpb24uaGVhZGVyfHx0aGlzLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0VmlzaWJsZTogdGhpcy5jb25maXJtYXRpb24ucmVqZWN0VmlzaWJsZSA9PSBudWxsID8gdGhpcy5yZWplY3RWaXNpYmxlIDogdGhpcy5jb25maXJtYXRpb24ucmVqZWN0VmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0VmlzaWJsZTogdGhpcy5jb25maXJtYXRpb24uYWNjZXB0VmlzaWJsZSA9PSBudWxsID8gdGhpcy5hY2NlcHRWaXNpYmxlIDogdGhpcy5jb25maXJtYXRpb24uYWNjZXB0VmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0TGFiZWw6IHRoaXMuY29uZmlybWF0aW9uLmFjY2VwdExhYmVsfHx0aGlzLmFjY2VwdExhYmVsLFxuICAgICAgICAgICAgICAgICAgICByZWplY3RMYWJlbDogdGhpcy5jb25maXJtYXRpb24ucmVqZWN0TGFiZWx8fHRoaXMucmVqZWN0TGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdEljb246IHRoaXMuY29uZmlybWF0aW9uLmFjY2VwdEljb24gfHwgdGhpcy5hY2NlcHRJY29uLFxuICAgICAgICAgICAgICAgICAgICByZWplY3RJY29uOiB0aGlzLmNvbmZpcm1hdGlvbi5yZWplY3RJY29uIHx8IHRoaXMucmVqZWN0SWNvbixcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0QnV0dG9uU3R5bGVDbGFzczogdGhpcy5jb25maXJtYXRpb24uYWNjZXB0QnV0dG9uU3R5bGVDbGFzcyB8fCB0aGlzLmFjY2VwdEJ1dHRvblN0eWxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdEJ1dHRvblN0eWxlQ2xhc3M6IHRoaXMuY29uZmlybWF0aW9uLnJlamVjdEJ1dHRvblN0eWxlQ2xhc3MgfHwgdGhpcy5yZWplY3RCdXR0b25TdHlsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Rm9jdXM6IHRoaXMuY29uZmlybWF0aW9uLmRlZmF1bHRGb2N1cyB8fCB0aGlzLmRlZmF1bHRGb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tTY3JvbGw6ICh0aGlzLmNvbmZpcm1hdGlvbi5ibG9ja1Njcm9sbCA9PT0gZmFsc2UgfHwgdGhpcy5jb25maXJtYXRpb24uYmxvY2tTY3JvbGwgPT09IHRydWUpID8gdGhpcy5jb25maXJtYXRpb24uYmxvY2tTY3JvbGwgOiB0aGlzLmJsb2NrU2Nyb2xsLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uRXNjYXBlOiAodGhpcy5jb25maXJtYXRpb24uY2xvc2VPbkVzY2FwZSA9PT0gZmFsc2UgfHwgdGhpcy5jb25maXJtYXRpb24uY2xvc2VPbkVzY2FwZSA9PT0gdHJ1ZSkgPyB0aGlzLmNvbmZpcm1hdGlvbi5jbG9zZU9uRXNjYXBlIDogdGhpcy5jbG9zZU9uRXNjYXBlLFxuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzYWJsZU1hc2s6ICh0aGlzLmNvbmZpcm1hdGlvbi5kaXNtaXNzYWJsZU1hc2sgPT09IGZhbHNlIHx8IHRoaXMuY29uZmlybWF0aW9uLmRpc21pc3NhYmxlTWFzayA9PT0gdHJ1ZSkgPyB0aGlzLmNvbmZpcm1hdGlvbi5kaXNtaXNzYWJsZU1hc2sgOiB0aGlzLmRpc21pc3NhYmxlTWFza1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maXJtYXRpb24uYWNjZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLmFjY2VwdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbi5hY2NlcHRFdmVudC5zdWJzY3JpYmUodGhpcy5jb25maXJtYXRpb24uYWNjZXB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maXJtYXRpb24ucmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLnJlamVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbi5yZWplY3RFdmVudC5zdWJzY3JpYmUodGhpcy5jb25maXJtYXRpb24ucmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3R5bGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5jb25maXJtYXRpb25PcHRpb25zIHx8IHRoaXM7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQudG9TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBldmVudC5lbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuY29udGFpbmVyLCAnLnAtZGlhbG9nLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUodGhpcy5pZCwgJycpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudFRvRm9jdXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVPblRvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlTW9kYWxpdHkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BbmltYXRpb25FbmQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudFRvRm9jdXMoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm9wdGlvbignZGVmYXVsdEZvY3VzJykpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjY2VwdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmNvbnRhaW5lciwgJy5wLWNvbmZpcm0tZGlhbG9nLWFjY2VwdCcpO1xuXG4gICAgICAgICAgICBjYXNlICdyZWplY3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5jb250YWluZXIsICcucC1jb25maXJtLWRpYWxvZy1yZWplY3QnKTtcblxuICAgICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5jb250YWluZXIsICcucC1kaWFsb2ctaGVhZGVyLWNsb3NlJyk7XG5cbiAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAvL2JhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmNvbnRhaW5lciwgJy5wLWNvbmZpcm0tZGlhbG9nLWFjY2VwdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gPT09ICdib2R5JylcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIsIHRoaXMuYXBwZW5kVG8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZUFwcGVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlciAmJiB0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZU1vZGFsaXR5KCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24oJ2Jsb2NrU2Nyb2xsJykpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb24oJ2Rpc21pc3NhYmxlTWFzaycpKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2tDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy53cmFwcGVyLCAnbW91c2Vkb3duJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53cmFwcGVyICYmIHRoaXMud3JhcHBlci5pc1NhbWVOb2RlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlTW9kYWxpdHkoKSB7XG4gICAgICAgIHRoaXMubWFza1Zpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb24oJ2Jsb2NrU2Nyb2xsJykpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNtaXNzYWJsZU1hc2spIHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kTWFza0NsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiAhdGhpcy5jZFsnZGVzdHJveWVkJ10pIHtcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlU3R5bGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlRWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBicmVha3BvaW50IGluIHRoaXMuYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke2JyZWFrcG9pbnR9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucC1kaWFsb2dbJHt0aGlzLmlkfV0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3RoaXMuYnJlYWtwb2ludHNbYnJlYWtwb2ludF19ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5jb25maXJtYXRpb24ucmVqZWN0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLnJlamVjdEV2ZW50LmVtaXQoQ29uZmlybUV2ZW50VHlwZS5DQU5DRUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlKENvbmZpcm1FdmVudFR5cGUuQ0FOQ0VMKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBoaWRlKHR5cGU/KSB7XG4gICAgICAgIHRoaXMub25IaWRlLmVtaXQodHlwZSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uT3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgbW92ZU9uVG9wKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvWkluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKCsrRG9tSGFuZGxlci56aW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKERvbUhhbmRsZXIuemluZGV4IC0gMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWFza0NsYXNzKCkge1xuICAgICAgICBsZXQgbWFza0NsYXNzID0geydwLWRpYWxvZy1tYXNrIHAtY29tcG9uZW50LW92ZXJsYXknOiB0cnVlLCAncC1kaWFsb2ctbWFzay1zY3JvbGxibG9ja2VyJzogdGhpcy5ibG9ja1Njcm9sbH07XG4gICAgICAgIG1hc2tDbGFzc1t0aGlzLmdldFBvc2l0aW9uQ2xhc3MoKS50b1N0cmluZygpXSA9IHRydWU7XG4gICAgICAgIHJldHVybiBtYXNrQ2xhc3M7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb25DbGFzcygpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCddO1xuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbnMuZmluZChpdGVtID0+IGl0ZW0gPT09IHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiBwb3MgPyBgcC1kaWFsb2ctJHtwb3N9YCA6ICcnO1xuICAgIH1cblxuICAgIGJpbmRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICgodGhpcy5vcHRpb24oJ2Nsb3NlT25Fc2NhcGUnKSAmJiB0aGlzLmNsb3NhYmxlKSB8fCB0aGlzLmZvY3VzVHJhcCAmJiAhdGhpcy5kb2N1bWVudEVzY2FwZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudFRhcmdldDogYW55ID0gdGhpcy5lbCA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50IDogJ2RvY3VtZW50JztcblxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudEVzY2FwZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnRUYXJnZXQsICdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09IDI3ICYmICh0aGlzLm9wdGlvbignY2xvc2VPbkVzY2FwZScpICYmIHRoaXMuY2xvc2FibGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLmNvbnRhaW5lci5zdHlsZS56SW5kZXgpID09PSAoRG9tSGFuZGxlci56aW5kZXggKyB0aGlzLmJhc2VaSW5kZXgpICYmIHRoaXMudmlzaWJsZSnCoHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA5ICYmIHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvY3VzYWJsZUVsZW1lbnRzID0gRG9tSGFuZGxlci5nZXRGb2N1c2FibGVFbGVtZW50cyh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzICYmIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm9jdXNhYmxlRWxlbWVudHNbMF0ub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2N1c2VkSW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5pbmRleE9mKGZvY3VzYWJsZUVsZW1lbnRzWzBdLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PSAtMSB8fCBmb2N1c2VkSW5kZXggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2VkSW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PSAtMSB8fCBmb2N1c2VkSW5kZXggPT09IChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzZWRJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50RXNjYXBlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRFc2NhcGVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudEVzY2FwZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZE1hc2tDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5tYXNrQ2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5tYXNrQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5tYXNrQ2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk92ZXJsYXlIaWRlKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVNb2RhbGl0eSgpO1xuICAgICAgICB0aGlzLnVuYmluZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgZGVzdHJveVN0eWxlKCkge1xuICAgICAgICBpZiAodGhpcy5zdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQodGhpcy5zdHlsZUVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZUFwcGVuZCgpO1xuICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95U3R5bGUoKTtcbiAgICB9XG5cbiAgICBhY2NlcHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1hdGlvbiAmJiB0aGlzLmNvbmZpcm1hdGlvbi5hY2NlcHRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24uYWNjZXB0RXZlbnQuZW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlKENvbmZpcm1FdmVudFR5cGUuQUNDRVBUKTtcbiAgICB9XG5cbiAgICByZWplY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1hdGlvbiAmJiB0aGlzLmNvbmZpcm1hdGlvbi5yZWplY3RFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24ucmVqZWN0RXZlbnQuZW1pdChDb25maXJtRXZlbnRUeXBlLlJFSkVDVCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpZGUoQ29uZmlybUV2ZW50VHlwZS5SRUpFQ1QpO1xuICAgIH1cblxuICAgIGdldCBhY2NlcHRCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24oJ2FjY2VwdExhYmVsJykgfHwgdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkFDQ0VQVCk7XG4gICAgfVxuXG4gICAgZ2V0IHJlamVjdEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbigncmVqZWN0TGFiZWwnKSB8fCB0aGlzLmNvbmZpZy5nZXRUcmFuc2xhdGlvbihUcmFuc2xhdGlvbktleXMuUkVKRUNUKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxCdXR0b25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtDb25maXJtRGlhbG9nLEJ1dHRvbk1vZHVsZSxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0NvbmZpcm1EaWFsb2ddXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1EaWFsb2dNb2R1bGUgeyB9XG4iXX0=