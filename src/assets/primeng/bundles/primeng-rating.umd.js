(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/rating', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.rating = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, forms) { 
function Rating_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵlistener("click", function Rating_span_1_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.clear($event); })("keydown.enter", function Rating_span_1_Template_span_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.clear($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.iconCancelClass)("ngStyle", ctx_r0.iconCancelStyle);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r0.disabled || ctx_r0.readonly ? null : "0");
} }
function Rating_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵlistener("click", function Rating_span_2_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var i_r6 = ctx.index; var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.rate($event, i_r6); })("keydown.enter", function Rating_span_2_Template_span_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var i_r6 = ctx.index; var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.rate($event, i_r6); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r6 = ctx.index;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r1.value || i_r6 >= ctx_r1.value ? ctx_r1.iconOffClass : ctx_r1.iconOnClass)("ngStyle", !ctx_r1.value || i_r6 >= ctx_r1.value ? ctx_r1.iconOffStyle : ctx_r1.iconOnStyle);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r1.disabled || ctx_r1.readonly ? null : "0");
} }
var _c0 = function (a0, a1) { return { "p-readonly": a0, "p-disabled": a1 }; };
'use strict';

    var RATING_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return Rating; }),
        multi: true
    };
    var Rating = /** @class */ (function () {
        function Rating(cd) {
            this.cd = cd;
            this.stars = 5;
            this.cancel = true;
            this.iconOnClass = 'pi pi-star';
            this.iconOffClass = 'pi pi-star-o';
            this.iconCancelClass = 'pi pi-ban';
            this.onRate = new core.EventEmitter();
            this.onCancel = new core.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        Rating.prototype.ngOnInit = function () {
            this.starsArray = [];
            for (var i = 0; i < this.stars; i++) {
                this.starsArray[i] = i;
            }
        };
        Rating.prototype.rate = function (event, i) {
            if (!this.readonly && !this.disabled) {
                this.value = (i + 1);
                this.onModelChange(this.value);
                this.onModelTouched();
                this.onRate.emit({
                    originalEvent: event,
                    value: (i + 1)
                });
            }
            event.preventDefault();
        };
        Rating.prototype.clear = function (event) {
            if (!this.readonly && !this.disabled) {
                this.value = null;
                this.onModelChange(this.value);
                this.onModelTouched();
                this.onCancel.emit(event);
            }
            event.preventDefault();
        };
        Rating.prototype.writeValue = function (value) {
            this.value = value;
            this.cd.detectChanges();
        };
        Rating.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        Rating.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        Rating.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
Rating.ɵfac = function Rating_Factory(t) { return new (t || Rating)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Rating.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Rating, selectors: [["p-rating"]], inputs: { stars: "stars", cancel: "cancel", iconOnClass: "iconOnClass", iconOffClass: "iconOffClass", iconCancelClass: "iconCancelClass", disabled: "disabled", readonly: "readonly", iconOnStyle: "iconOnStyle", iconOffStyle: "iconOffStyle", iconCancelStyle: "iconCancelStyle" }, outputs: { onRate: "onRate", onCancel: "onCancel" }, features: [ɵngcc0.ɵɵProvidersFeature([RATING_VALUE_ACCESSOR])], decls: 3, vars: 6, consts: [[1, "p-rating", 3, "ngClass"], ["class", "p-rating-icon p-rating-cancel", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngIf"], ["class", "p-rating-icon", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "p-rating-icon", "p-rating-cancel", 3, "ngClass", "ngStyle", "click", "keydown.enter"], [1, "p-rating-icon", 3, "ngClass", "ngStyle", "click", "keydown.enter"]], template: function Rating_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Rating_span_1_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(2, Rating_span_2_Template, 1, 3, "span", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx.readonly, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.cancel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.starsArray);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgStyle], styles: [".p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Rating, [{
        type: core.Component,
        args: [{
                selector: 'p-rating',
                template: "\n        <div class=\"p-rating\" [ngClass]=\"{'p-readonly': readonly, 'p-disabled': disabled}\">\n            <span [attr.tabindex]=\"(disabled || readonly) ? null : '0'\" *ngIf=\"cancel\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\" class=\"p-rating-icon p-rating-cancel\" [ngClass]=\"iconCancelClass\" [ngStyle]=\"iconCancelStyle\"></span>\n            <span *ngFor=\"let star of starsArray;let i=index\" class=\"p-rating-icon\" [attr.tabindex]=\"(disabled || readonly) ? null : '0'\"  (click)=\"rate($event,i)\" (keydown.enter)=\"rate($event,i)\"\n                [ngClass]=\"(!value || i >= value) ? iconOffClass : iconOnClass\"\n                [ngStyle]=\"(!value || i >= value) ? iconOffStyle : iconOnStyle\"></span>\n        </div>\n    ",
                providers: [RATING_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { stars: [{
            type: core.Input
        }], cancel: [{
            type: core.Input
        }], iconOnClass: [{
            type: core.Input
        }], iconOffClass: [{
            type: core.Input
        }], iconCancelClass: [{
            type: core.Input
        }], onRate: [{
            type: core.Output
        }], onCancel: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], iconOnStyle: [{
            type: core.Input
        }], iconOffStyle: [{
            type: core.Input
        }], iconCancelStyle: [{
            type: core.Input
        }] }); })();
        return Rating;
    }());
    Rating.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    Rating.propDecorators = {
        disabled: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        stars: [{ type: core.Input }],
        cancel: [{ type: core.Input }],
        iconOnClass: [{ type: core.Input }],
        iconOnStyle: [{ type: core.Input }],
        iconOffClass: [{ type: core.Input }],
        iconOffStyle: [{ type: core.Input }],
        iconCancelClass: [{ type: core.Input }],
        iconCancelStyle: [{ type: core.Input }],
        onRate: [{ type: core.Output }],
        onCancel: [{ type: core.Output }]
    };
    var RatingModule = /** @class */ (function () {
        function RatingModule() {
        }
RatingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RatingModule });
RatingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RatingModule, { declarations: [Rating], imports: [ɵngcc1.CommonModule], exports: [Rating] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RatingModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Rating],
                declarations: [Rating]
            }]
    }], function () { return []; }, null); })();
        return RatingModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RATING_VALUE_ACCESSOR = RATING_VALUE_ACCESSOR;
    exports.Rating = Rating;
    exports.RatingModule = RatingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-rating.umd.js.map