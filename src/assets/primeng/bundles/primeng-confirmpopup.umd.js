(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/api'),require('@angular/common'),require('primeng/button'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api'), require('primeng/button'), require('@angular/animations'), require('primeng/dom')) :
    typeof define === 'function' && define.amd ? define('primeng/confirmpopup', ['@angular/core','primeng/api','@angular/common','primeng/button','exports', '@angular/core', '@angular/common', 'primeng/api', 'primeng/button', '@angular/animations', 'primeng/dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.api,global.ng.common,global.primeng.button,(global.primeng = global.primeng || {}, global.primeng.confirmpopup = {}), global.ng.core, global.ng.common, global.primeng.api, global.primeng.button, global.ng.animations, global.primeng.dom));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, api, button, animations, dom) { 
function ConfirmPopup_div_0_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r2.confirmation.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-confirm-popup-icon");
} }
function ConfirmPopup_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 9);
    ɵngcc0.ɵɵlistener("click", function ConfirmPopup_div_0_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.reject(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r3.confirmation.rejectButtonStyleClass || "p-button-text");
    ɵngcc0.ɵɵproperty("icon", ctx_r3.confirmation.rejectIcon)("label", ctx_r3.rejectButtonLabel)("ngClass", "p-confirm-popup-reject p-button-sm");
    ɵngcc0.ɵɵattribute("aria-label", ctx_r3.rejectButtonLabel);
} }
function ConfirmPopup_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 9);
    ɵngcc0.ɵɵlistener("click", function ConfirmPopup_div_0_button_8_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.accept(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r4.confirmation.acceptButtonStyleClass);
    ɵngcc0.ɵɵproperty("icon", ctx_r4.confirmation.acceptIcon)("label", ctx_r4.acceptButtonLabel)("ngClass", "p-confirm-popup-accept p-button-sm");
    ɵngcc0.ɵɵattribute("aria-label", ctx_r4.acceptButtonLabel);
} }
var _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c1 = function (a1) { return { value: "open", params: a1 }; };
function ConfirmPopup_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("@animation.start", function ConfirmPopup_div_0_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onAnimationStart($event); })("@animation.done", function ConfirmPopup_div_0_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onAnimationEnd($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 2, 3);
    ɵngcc0.ɵɵtemplate(3, ConfirmPopup_div_0_i_3_Template, 1, 3, "i", 4);
    ɵngcc0.ɵɵelementStart(4, "span", 5);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵtemplate(7, ConfirmPopup_div_0_button_7_Template, 1, 6, "button", 7);
    ɵngcc0.ɵɵtemplate(8, ConfirmPopup_div_0_button_8_Template, 1, 6, "button", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-confirm-popup p-component")("ngStyle", ctx_r0.style)("@animation", ɵngcc0.ɵɵpureFunction1(12, _c1, ɵngcc0.ɵɵpureFunction2(9, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.confirmation.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.confirmation.message);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.confirmation.rejectVisible !== false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.confirmation.acceptVisible !== false);
} }
'use strict';

    var ConfirmPopup = /** @class */ (function () {
        function ConfirmPopup(el, confirmationService, renderer, cd, config) {
            var _this = this;
            this.el = el;
            this.confirmationService = confirmationService;
            this.renderer = renderer;
            this.cd = cd;
            this.config = config;
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.subscription = this.confirmationService.requireConfirmation$.subscribe(function (confirmation) {
                if (!confirmation) {
                    _this.hide();
                    return;
                }
                if (confirmation.key === _this.key) {
                    _this.confirmation = confirmation;
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
        Object.defineProperty(ConfirmPopup.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                this._visible = value;
                this.cd.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        ConfirmPopup.prototype.onAnimationStart = function (event) {
            if (event.toState === 'open') {
                this.container = event.element;
                document.body.appendChild(this.container);
                this.align();
                this.bindListeners();
            }
        };
        ConfirmPopup.prototype.onAnimationEnd = function (event) {
            switch (event.toState) {
                case 'void':
                    this.onContainerDestroy();
                    break;
            }
        };
        ConfirmPopup.prototype.align = function () {
            if (this.autoZIndex) {
                this.container.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
            dom.DomHandler.absolutePosition(this.container, this.confirmation.target);
            var containerOffset = dom.DomHandler.getOffset(this.container);
            var targetOffset = dom.DomHandler.getOffset(this.confirmation.target);
            var arrowLeft = 0;
            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }
            this.container.style.setProperty('--overlayArrowLeft', arrowLeft + "px");
            if (containerOffset.top < targetOffset.top) {
                dom.DomHandler.addClass(this.container, 'p-confirm-popup-flipped');
            }
        };
        ConfirmPopup.prototype.hide = function () {
            this.visible = false;
        };
        ConfirmPopup.prototype.accept = function () {
            if (this.confirmation.acceptEvent) {
                this.confirmation.acceptEvent.emit();
            }
            this.hide();
        };
        ConfirmPopup.prototype.reject = function () {
            if (this.confirmation.rejectEvent) {
                this.confirmation.rejectEvent.emit();
            }
            this.hide();
        };
        ConfirmPopup.prototype.bindListeners = function () {
            this.bindDocumentClickListener();
            this.bindDocumentResizeListener();
            this.bindScrollListener();
        };
        ConfirmPopup.prototype.unbindListeners = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
        };
        ConfirmPopup.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentEvent = dom.DomHandler.isIOS() ? 'touchstart' : 'click';
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : document;
                this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, function (event) {
                    var targetElement = _this.confirmation.target;
                    if (_this.container !== event.target && !_this.container.contains(event.target) &&
                        targetElement !== event.target && !targetElement.contains(event.target)) {
                        _this.hide();
                    }
                });
            }
        };
        ConfirmPopup.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        ConfirmPopup.prototype.onWindowResize = function () {
            this.hide();
        };
        ConfirmPopup.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        ConfirmPopup.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        ConfirmPopup.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.confirmation.target, function () {
                    if (_this.visible) {
                        _this.hide();
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        ConfirmPopup.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        ConfirmPopup.prototype.unsubscribeConfirmationSubscriptions = function () {
            if (this.confirmation) {
                if (this.confirmation.acceptEvent) {
                    this.confirmation.acceptEvent.unsubscribe();
                }
                if (this.confirmation.rejectEvent) {
                    this.confirmation.rejectEvent.unsubscribe();
                }
            }
        };
        ConfirmPopup.prototype.onContainerDestroy = function () {
            this.unbindListeners();
            this.unsubscribeConfirmationSubscriptions();
            this.confirmation = null;
            this.container = null;
        };
        ConfirmPopup.prototype.restoreAppend = function () {
            if (this.container) {
                document.body.removeChild(this.container);
            }
            this.onContainerDestroy();
        };
        Object.defineProperty(ConfirmPopup.prototype, "acceptButtonLabel", {
            get: function () {
                return this.confirmation.acceptLabel || this.config.getTranslation(api.TranslationKeys.ACCEPT);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConfirmPopup.prototype, "rejectButtonLabel", {
            get: function () {
                return this.confirmation.rejectLabel || this.config.getTranslation(api.TranslationKeys.REJECT);
            },
            enumerable: false,
            configurable: true
        });
        ConfirmPopup.prototype.ngOnDestroy = function () {
            this.restoreAppend();
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
ConfirmPopup.ɵfac = function ConfirmPopup_Factory(t) { return new (t || ConfirmPopup)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ConfirmationService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig)); };
ConfirmPopup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ConfirmPopup, selectors: [["p-confirmPopup"]], inputs: { showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", visible: "visible", key: "key", style: "style", styleClass: "styleClass" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-confirm-popup-content"], ["content", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-confirm-popup-message"], [1, "p-confirm-popup-footer"], ["type", "button", "pButton", "", 3, "icon", "label", "ngClass", "class", "click", 4, "ngIf"], [3, "ngClass"], ["type", "button", "pButton", "", 3, "icon", "label", "ngClass", "click"]], template: function ConfirmPopup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ConfirmPopup_div_0_Template, 9, 14, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc3.ButtonDirective], styles: [".p-confirm-popup{margin-top:10px;position:absolute}.p-confirm-popup-flipped{margin-bottom:10px;margin-top:0}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;content:\" \";height:0;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);pointer-events:none;position:absolute;width:0}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after,.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{align-items:center;display:flex}"], encapsulation: 2, data: { animation: [
            animations.trigger('animation', [
                animations.state('void', animations.style({
                    transform: 'scaleY(0.8)',
                    opacity: 0
                })),
                animations.state('open', animations.style({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                animations.transition('void => open', animations.animate('{{showTransitionParams}}')),
                animations.transition('open => void', animations.animate('{{hideTransitionParams}}')),
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmPopup, [{
        type: core.Component,
        args: [{
                selector: 'p-confirmPopup',
                template: "\n        <div *ngIf=\"visible\" [ngClass]=\"'p-confirm-popup p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            [@animation]=\"{value: 'open', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\"\n            (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\">\n            <div #content class=\"p-confirm-popup-content\">\n                <i [ngClass]=\"'p-confirm-popup-icon'\" [class]=\"confirmation.icon\" *ngIf=\"confirmation.icon\"></i>\n                <span class=\"p-confirm-popup-message\">{{confirmation.message}}</span>\n            </div>\n            <div class=\"p-confirm-popup-footer\">\n                <button type=\"button\" pButton [icon]=\"confirmation.rejectIcon\" [label]=\"rejectButtonLabel\" (click)=\"reject()\" [ngClass]=\"'p-confirm-popup-reject p-button-sm'\"\n                    [class]=\"confirmation.rejectButtonStyleClass || 'p-button-text'\" *ngIf=\"confirmation.rejectVisible !== false\" [attr.aria-label]=\"rejectButtonLabel\"></button>\n                <button type=\"button\" pButton [icon]=\"confirmation.acceptIcon\" [label]=\"acceptButtonLabel\" (click)=\"accept()\" [ngClass]=\"'p-confirm-popup-accept p-button-sm'\"\n                    [class]=\"confirmation.acceptButtonStyleClass\" *ngIf=\"confirmation.acceptVisible !== false\" [attr.aria-label]=\"acceptButtonLabel\"></button>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('animation', [
                        animations.state('void', animations.style({
                            transform: 'scaleY(0.8)',
                            opacity: 0
                        })),
                        animations.state('open', animations.style({
                            transform: 'translateY(0)',
                            opacity: 1
                        })),
                        animations.transition('void => open', animations.animate('{{showTransitionParams}}')),
                        animations.transition('open => void', animations.animate('{{hideTransitionParams}}')),
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-confirm-popup{margin-top:10px;position:absolute}.p-confirm-popup-flipped{margin-bottom:10px;margin-top:0}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;content:\" \";height:0;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);pointer-events:none;position:absolute;width:0}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after,.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{align-items:center;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.ConfirmationService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.PrimeNGConfig }]; }, { showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], visible: [{
            type: core.Input
        }], key: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }] }); })();
        return ConfirmPopup;
    }());
    ConfirmPopup.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: api.ConfirmationService },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: api.PrimeNGConfig }
    ]; };
    ConfirmPopup.propDecorators = {
        key: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        visible: [{ type: core.Input }]
    };
    var ConfirmPopupModule = /** @class */ (function () {
        function ConfirmPopupModule() {
        }
ConfirmPopupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ConfirmPopupModule });
ConfirmPopupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ConfirmPopupModule_Factory(t) { return new (t || ConfirmPopupModule)(); }, imports: [[common.CommonModule, button.ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ConfirmPopupModule, { declarations: [ConfirmPopup], imports: [ɵngcc2.CommonModule, ɵngcc3.ButtonModule], exports: [ConfirmPopup] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmPopupModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, button.ButtonModule],
                exports: [ConfirmPopup],
                declarations: [ConfirmPopup]
            }]
    }], function () { return []; }, null); })();
        return ConfirmPopupModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ConfirmPopup = ConfirmPopup;
    exports.ConfirmPopupModule = ConfirmPopupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-confirmpopup.umd.js.map