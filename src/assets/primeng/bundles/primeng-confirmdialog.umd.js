(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/api'),require('@angular/common'),require('primeng/button'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/dom'), require('primeng/api'), require('primeng/button'), require('primeng/utils')) :
    typeof define === 'function' && define.amd ? define('primeng/confirmdialog', ['@angular/core','primeng/api','@angular/common','primeng/button','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/dom', 'primeng/api', 'primeng/button', 'primeng/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.api,global.ng.common,global.primeng.button,(global.primeng = global.primeng || {}, global.primeng.confirmdialog = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.dom, global.primeng.api, global.primeng.button, global.primeng.utils));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, animations, common, dom, api, button, utils) { 
var _c0 = ["content"];
function ConfirmDialog_div_0_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ConfirmDialog_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
} }
function ConfirmDialog_div_0_div_1_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.option("header"));
} }
var _c1 = function () { return { "p-dialog-header-icon p-dialog-header-close p-link": true }; };
function ConfirmDialog_div_0_div_1_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_2_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(4); return ctx_r11.close($event); })("keydown.enter", function ConfirmDialog_div_0_div_1_div_2_button_3_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r13 = ɵngcc0.ɵɵnextContext(4); return ctx_r13.close($event); });
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
    var ctx_r3 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.option("header"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.closable);
} }
function ConfirmDialog_div_0_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 1);
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
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
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
function ConfirmDialog_div_0_div_1_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 20);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_8_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); var ctx_r17 = ɵngcc0.ɵɵnextContext(4); return ctx_r17.reject(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMap(ctx_r15.option("rejectButtonStyleClass"));
    ɵngcc0.ɵɵproperty("icon", ctx_r15.option("rejectIcon"))("label", ctx_r15.rejectButtonLabel)("ngClass", "p-confirm-dialog-reject");
    ɵngcc0.ɵɵattribute("aria-label", ctx_r15.rejectAriaLabel);
} }
function ConfirmDialog_div_0_div_1_div_8_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 20);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_8_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r19 = ɵngcc0.ɵɵnextContext(4); return ctx_r19.accept(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r16 = ɵngcc0.ɵɵnextContext(4);
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
    var ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.option("rejectVisible"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.option("acceptVisible"));
} }
var _c2 = function (a1) { return { "p-dialog p-confirm-dialog p-component": true, "p-dialog-rtl": a1 }; };
var _c3 = function (a0, a1) { return { transform: a0, transition: a1 }; };
var _c4 = function (a1) { return { value: "visible", params: a1 }; };
function ConfirmDialog_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("mousedown", function ConfirmDialog_div_0_div_1_Template_div_mousedown_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r21 = ɵngcc0.ɵɵnextContext(2); return ctx_r21.moveOnTop(); })("@animation.start", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.onAnimationStart($event); })("@animation.done", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r24 = ɵngcc0.ɵɵnextContext(2); return ctx_r24.onAnimationEnd($event); });
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
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
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
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.maskStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.getMaskClass());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
} }
var _c5 = [[["p-footer"]]];
var _c6 = ["p-footer"];
'use strict';

    var showAnimation = animations.animation([
        animations.style({ transform: '{{transform}}', opacity: 0 }),
        animations.animate('{{transition}}', animations.style({ transform: 'none', opacity: 1 }))
    ]);
    var hideAnimation = animations.animation([
        animations.animate('{{transition}}', animations.style({ transform: '{{transform}}', opacity: 0 }))
    ]);
    var ConfirmDialog = /** @class */ (function () {
        function ConfirmDialog(el, renderer, confirmationService, zone, cd, config) {
            var _this = this;
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
            this.onHide = new core.EventEmitter();
            this._position = "center";
            this.transformOptions = "scale(0.7)";
            this.id = utils.UniqueComponentId();
            this.subscription = this.confirmationService.requireConfirmation$.subscribe(function (confirmation) {
                if (!confirmation) {
                    _this.hide();
                    return;
                }
                if (confirmation.key === _this.key) {
                    _this.confirmation = confirmation;
                    _this.confirmationOptions = {
                        message: _this.confirmation.message || _this.message,
                        icon: _this.confirmation.icon || _this.icon,
                        header: _this.confirmation.header || _this.header,
                        rejectVisible: _this.confirmation.rejectVisible == null ? _this.rejectVisible : _this.confirmation.rejectVisible,
                        acceptVisible: _this.confirmation.acceptVisible == null ? _this.acceptVisible : _this.confirmation.acceptVisible,
                        acceptLabel: _this.confirmation.acceptLabel || _this.acceptLabel,
                        rejectLabel: _this.confirmation.rejectLabel || _this.rejectLabel,
                        acceptIcon: _this.confirmation.acceptIcon || _this.acceptIcon,
                        rejectIcon: _this.confirmation.rejectIcon || _this.rejectIcon,
                        acceptButtonStyleClass: _this.confirmation.acceptButtonStyleClass || _this.acceptButtonStyleClass,
                        rejectButtonStyleClass: _this.confirmation.rejectButtonStyleClass || _this.rejectButtonStyleClass,
                        defaultFocus: _this.confirmation.defaultFocus || _this.defaultFocus,
                        blockScroll: (_this.confirmation.blockScroll === false || _this.confirmation.blockScroll === true) ? _this.confirmation.blockScroll : _this.blockScroll,
                        closeOnEscape: (_this.confirmation.closeOnEscape === false || _this.confirmation.closeOnEscape === true) ? _this.confirmation.closeOnEscape : _this.closeOnEscape,
                        dismissableMask: (_this.confirmation.dismissableMask === false || _this.confirmation.dismissableMask === true) ? _this.confirmation.dismissableMask : _this.dismissableMask
                    };
                    if (_this.confirmation.accept) {
                        _this.confirmation.acceptEvent = new core.EventEmitter();
                        _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
                    }
                    if (_this.confirmation.reject) {
                        _this.confirmation.rejectEvent = new core.EventEmitter();
                        _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
                    }
                    _this.visible = true;
                }
            });
        }
        Object.defineProperty(ConfirmDialog.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                this._visible = value;
                if (this._visible && !this.maskVisible) {
                    this.maskVisible = true;
                }
                this.cd.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConfirmDialog.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (value) {
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
            },
            enumerable: false,
            configurable: true
        });
        ;
        ConfirmDialog.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                }
            });
        };
        ConfirmDialog.prototype.ngOnInit = function () {
            if (this.breakpoints) {
                this.createStyle();
            }
        };
        ConfirmDialog.prototype.option = function (name) {
            var source = this.confirmationOptions || this;
            if (source.hasOwnProperty(name)) {
                return source[name];
            }
            return undefined;
        };
        ConfirmDialog.prototype.onAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.container = event.element;
                    this.wrapper = this.container.parentElement;
                    this.contentContainer = dom.DomHandler.findSingle(this.container, '.p-dialog-content');
                    this.container.setAttribute(this.id, '');
                    var element = this.getElementToFocus();
                    if (element) {
                        element.focus();
                    }
                    this.appendContainer();
                    this.moveOnTop();
                    this.bindGlobalListeners();
                    this.enableModality();
                    break;
            }
        };
        ConfirmDialog.prototype.onAnimationEnd = function (event) {
            switch (event.toState) {
                case 'void':
                    this.onOverlayHide();
                    break;
            }
        };
        ConfirmDialog.prototype.getElementToFocus = function () {
            switch (this.option('defaultFocus')) {
                case 'accept':
                    return dom.DomHandler.findSingle(this.container, '.p-confirm-dialog-accept');
                case 'reject':
                    return dom.DomHandler.findSingle(this.container, '.p-confirm-dialog-reject');
                case 'close':
                    return dom.DomHandler.findSingle(this.container, '.p-dialog-header-close');
                case 'none':
                    return null;
                //backward compatibility
                default:
                    return dom.DomHandler.findSingle(this.container, '.p-confirm-dialog-accept');
            }
        };
        ConfirmDialog.prototype.appendContainer = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.wrapper);
                else
                    dom.DomHandler.appendChild(this.wrapper, this.appendTo);
            }
        };
        ConfirmDialog.prototype.restoreAppend = function () {
            if (this.wrapper && this.appendTo) {
                this.el.nativeElement.appendChild(this.wrapper);
            }
        };
        ConfirmDialog.prototype.enableModality = function () {
            var _this = this;
            if (this.option('blockScroll')) {
                dom.DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
            if (this.option('dismissableMask')) {
                this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', function (event) {
                    if (_this.wrapper && _this.wrapper.isSameNode(event.target)) {
                        _this.close(event);
                    }
                });
            }
        };
        ConfirmDialog.prototype.disableModality = function () {
            this.maskVisible = false;
            if (this.option('blockScroll')) {
                dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
            if (this.dismissableMask) {
                this.unbindMaskClickListener();
            }
            if (this.container && !this.cd['destroyed']) {
                this.cd.detectChanges();
            }
        };
        ConfirmDialog.prototype.createStyle = function () {
            if (!this.styleElement) {
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                document.head.appendChild(this.styleElement);
                var innerHTML = '';
                for (var breakpoint in this.breakpoints) {
                    innerHTML += "\n                    @media screen and (max-width: " + breakpoint + ") {\n                        .p-dialog[" + this.id + "] {\n                            width: " + this.breakpoints[breakpoint] + " !important;\n                        }\n                    }\n                ";
                }
                this.styleElement.innerHTML = innerHTML;
            }
        };
        ConfirmDialog.prototype.close = function (event) {
            if (this.confirmation.rejectEvent) {
                this.confirmation.rejectEvent.emit(api.ConfirmEventType.CANCEL);
            }
            this.hide(api.ConfirmEventType.CANCEL);
            event.preventDefault();
        };
        ConfirmDialog.prototype.hide = function (type) {
            this.onHide.emit(type);
            this.visible = false;
            this.confirmation = null;
            this.confirmationOptions = null;
        };
        ConfirmDialog.prototype.moveOnTop = function () {
            if (this.autoZIndex) {
                this.container.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
                this.wrapper.style.zIndex = String(this.baseZIndex + (dom.DomHandler.zindex - 1));
            }
        };
        ConfirmDialog.prototype.getMaskClass = function () {
            var maskClass = { 'p-dialog-mask p-component-overlay': true, 'p-dialog-mask-scrollblocker': this.blockScroll };
            maskClass[this.getPositionClass().toString()] = true;
            return maskClass;
        };
        ConfirmDialog.prototype.getPositionClass = function () {
            var _this = this;
            var positions = ['left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
            var pos = positions.find(function (item) { return item === _this.position; });
            return pos ? "p-dialog-" + pos : '';
        };
        ConfirmDialog.prototype.bindGlobalListeners = function () {
            var _this = this;
            if ((this.option('closeOnEscape') && this.closable) || this.focusTrap && !this.documentEscapeListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', function (event) {
                    if (event.which == 27 && (_this.option('closeOnEscape') && _this.closable)) {
                        if (parseInt(_this.container.style.zIndex) === (dom.DomHandler.zindex + _this.baseZIndex) && _this.visible) {
                            _this.close(event);
                        }
                    }
                    if (event.which === 9 && _this.focusTrap) {
                        event.preventDefault();
                        var focusableElements = dom.DomHandler.getFocusableElements(_this.container);
                        if (focusableElements && focusableElements.length > 0) {
                            if (!focusableElements[0].ownerDocument.activeElement) {
                                focusableElements[0].focus();
                            }
                            else {
                                var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
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
        };
        ConfirmDialog.prototype.unbindGlobalListeners = function () {
            if (this.documentEscapeListener) {
                this.documentEscapeListener();
                this.documentEscapeListener = null;
            }
        };
        ConfirmDialog.prototype.unbindMaskClickListener = function () {
            if (this.maskClickListener) {
                this.maskClickListener();
                this.maskClickListener = null;
            }
        };
        ConfirmDialog.prototype.onOverlayHide = function () {
            this.disableModality();
            this.unbindGlobalListeners();
            this.container = null;
        };
        ConfirmDialog.prototype.destroyStyle = function () {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        };
        ConfirmDialog.prototype.ngOnDestroy = function () {
            this.restoreAppend();
            this.onOverlayHide();
            this.subscription.unsubscribe();
            this.destroyStyle();
        };
        ConfirmDialog.prototype.accept = function () {
            if (this.confirmation && this.confirmation.acceptEvent) {
                this.confirmation.acceptEvent.emit();
            }
            this.hide(api.ConfirmEventType.ACCEPT);
        };
        ConfirmDialog.prototype.reject = function () {
            if (this.confirmation && this.confirmation.rejectEvent) {
                this.confirmation.rejectEvent.emit(api.ConfirmEventType.REJECT);
            }
            this.hide(api.ConfirmEventType.REJECT);
        };
        Object.defineProperty(ConfirmDialog.prototype, "acceptButtonLabel", {
            get: function () {
                return this.option('acceptLabel') || this.config.getTranslation(api.TranslationKeys.ACCEPT);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConfirmDialog.prototype, "rejectButtonLabel", {
            get: function () {
                return this.option('rejectLabel') || this.config.getTranslation(api.TranslationKeys.REJECT);
            },
            enumerable: false,
            configurable: true
        });
ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) { return new (t || ConfirmDialog)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ConfirmationService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig)); };
ConfirmDialog.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ConfirmDialog, selectors: [["p-confirmDialog"]], contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
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
            animations.trigger('animation', [
                animations.transition('void => visible', [
                    animations.useAnimation(showAnimation)
                ]),
                animations.transition('visible => void', [
                    animations.useAnimation(hideAnimation)
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialog, [{
        type: core.Component,
        args: [{
                selector: 'p-confirmDialog',
                template: "\n        <div [class]=\"maskStyleClass\" [ngClass]=\"getMaskClass()\" *ngIf=\"maskVisible\">\n            <div [ngClass]=\"{'p-dialog p-confirm-dialog p-component':true,'p-dialog-rtl':rtl}\" [ngStyle]=\"style\" [class]=\"styleClass\" (mousedown)=\"moveOnTop()\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" *ngIf=\"visible\">\n                <div class=\"p-dialog-header\" *ngIf=\"headerTemplate\">\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                </div>\n                <div class=\"p-dialog-header\" *ngIf=\"!headerTemplate\">\n                    <span class=\"p-dialog-title\" *ngIf=\"option('header')\">{{option('header')}}</span>\n                    <div class=\"p-dialog-header-icons\">\n                        <button *ngIf=\"closable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-close p-link':true}\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                            <span class=\"pi pi-times\"></span>\n                        </button>\n                    </div>\n                </div>\n                <div #content class=\"p-dialog-content\">\n                    <i [ngClass]=\"'p-confirm-dialog-icon'\" [class]=\"option('icon')\" *ngIf=\"option('icon')\"></i>\n                    <span class=\"p-confirm-dialog-message\" [innerHTML]=\"option('message')\"></span>\n                </div>\n                <div class=\"p-dialog-footer\" *ngIf=\"footer || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n                <div class=\"p-dialog-footer\" *ngIf=\"!footer && !footerTemplate\">\n                    <button type=\"button\" pButton [icon]=\"option('rejectIcon')\" [label]=\"rejectButtonLabel\" (click)=\"reject()\" [ngClass]=\"'p-confirm-dialog-reject'\" [class]=\"option('rejectButtonStyleClass')\" *ngIf=\"option('rejectVisible')\" [attr.aria-label]=\"rejectAriaLabel\"></button>\n                    <button type=\"button\" pButton [icon]=\"option('acceptIcon')\" [label]=\"acceptButtonLabel\" (click)=\"accept()\" [ngClass]=\"'p-confirm-dialog-accept'\" [class]=\"option('acceptButtonStyleClass')\" *ngIf=\"option('acceptVisible')\" [attr.aria-label]=\"acceptAriaLabel\"></button>\n                </div>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('animation', [
                        animations.transition('void => visible', [
                            animations.useAnimation(showAnimation)
                        ]),
                        animations.transition('visible => void', [
                            animations.useAnimation(hideAnimation)
                        ])
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-dialog-mask{align-items:center;background-color:transparent;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{align-items:center;display:flex;flex-shrink:0;justify-content:space-between}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{align-items:center;display:flex}.p-dialog .p-dialog-header-icon{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:transparent}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{height:100%;left:0!important;max-height:100%;top:0!important;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{align-items:flex-start;justify-content:flex-end}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{align-items:flex-end;justify-content:flex-start}.p-dialog-bottom-right{align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{align-items:center;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.ConfirmationService }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.PrimeNGConfig }]; }, { acceptIcon: [{
            type: core.Input
        }], acceptVisible: [{
            type: core.Input
        }], rejectIcon: [{
            type: core.Input
        }], rejectVisible: [{
            type: core.Input
        }], closeOnEscape: [{
            type: core.Input
        }], blockScroll: [{
            type: core.Input
        }], closable: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], transitionOptions: [{
            type: core.Input
        }], focusTrap: [{
            type: core.Input
        }], defaultFocus: [{
            type: core.Input
        }], onHide: [{
            type: core.Output
        }], visible: [{
            type: core.Input
        }], position: [{
            type: core.Input
        }], header: [{
            type: core.Input
        }], icon: [{
            type: core.Input
        }], message: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], maskStyleClass: [{
            type: core.Input
        }], acceptLabel: [{
            type: core.Input
        }], acceptAriaLabel: [{
            type: core.Input
        }], rejectLabel: [{
            type: core.Input
        }], rejectAriaLabel: [{
            type: core.Input
        }], acceptButtonStyleClass: [{
            type: core.Input
        }], rejectButtonStyleClass: [{
            type: core.Input
        }], dismissableMask: [{
            type: core.Input
        }], rtl: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], key: [{
            type: core.Input
        }], breakpoints: [{
            type: core.Input
        }], footer: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], contentViewChild: [{
            type: core.ViewChild,
            args: ['content']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return ConfirmDialog;
    }());
    ConfirmDialog.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: api.ConfirmationService },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef },
        { type: api.PrimeNGConfig }
    ]; };
    ConfirmDialog.propDecorators = {
        header: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        message: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        maskStyleClass: [{ type: core.Input }],
        acceptIcon: [{ type: core.Input }],
        acceptLabel: [{ type: core.Input }],
        acceptAriaLabel: [{ type: core.Input }],
        acceptVisible: [{ type: core.Input }],
        rejectIcon: [{ type: core.Input }],
        rejectLabel: [{ type: core.Input }],
        rejectAriaLabel: [{ type: core.Input }],
        rejectVisible: [{ type: core.Input }],
        acceptButtonStyleClass: [{ type: core.Input }],
        rejectButtonStyleClass: [{ type: core.Input }],
        closeOnEscape: [{ type: core.Input }],
        dismissableMask: [{ type: core.Input }],
        blockScroll: [{ type: core.Input }],
        rtl: [{ type: core.Input }],
        closable: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        key: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        transitionOptions: [{ type: core.Input }],
        focusTrap: [{ type: core.Input }],
        defaultFocus: [{ type: core.Input }],
        breakpoints: [{ type: core.Input }],
        visible: [{ type: core.Input }],
        position: [{ type: core.Input }],
        onHide: [{ type: core.Output }],
        footer: [{ type: core.ContentChild, args: [api.Footer,] }],
        contentViewChild: [{ type: core.ViewChild, args: ['content',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var ConfirmDialogModule = /** @class */ (function () {
        function ConfirmDialogModule() {
        }
ConfirmDialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ConfirmDialogModule });
ConfirmDialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ConfirmDialogModule_Factory(t) { return new (t || ConfirmDialogModule)(); }, imports: [[common.CommonModule, button.ButtonModule], ɵngcc3.ButtonModule, ɵngcc1.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ConfirmDialogModule, { declarations: [ConfirmDialog], imports: [ɵngcc2.CommonModule, ɵngcc3.ButtonModule], exports: [ConfirmDialog, ɵngcc3.ButtonModule, ɵngcc1.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialogModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, button.ButtonModule],
                exports: [ConfirmDialog, button.ButtonModule, api.SharedModule],
                declarations: [ConfirmDialog]
            }]
    }], function () { return []; }, null); })();
        return ConfirmDialogModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ConfirmDialog = ConfirmDialog;
    exports.ConfirmDialogModule = ConfirmDialogModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-confirmdialog.umd.js.map