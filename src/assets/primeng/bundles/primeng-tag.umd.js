(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/tag', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.tag = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 
function Tag_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.icon);
} }
var _c0 = ["*"];
'use strict';

    var Tag = /** @class */ (function () {
        function Tag() {
        }
        Tag.prototype.containerClass = function () {
            return {
                'p-tag p-component': true,
                'p-tag-info': this.severity === 'info',
                'p-tag-success': this.severity === 'success',
                'p-tag-warning': this.severity === 'warning',
                'p-tag-danger': this.severity === 'danger',
                'p-tag-rounded': this.rounded
            };
        };
Tag.ɵfac = function Tag_Factory(t) { return new (t || Tag)(); };
Tag.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Tag, selectors: [["p-tag"]], inputs: { styleClass: "styleClass", style: "style", severity: "severity", value: "value", icon: "icon", rounded: "rounded" }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[3, "ngClass", "ngStyle"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-value"], [1, "p-tag-icon", 3, "ngClass"]], template: function Tag_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Tag_span_2_Template, 1, 1, "span", 1);
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.value);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf], styles: [".p-tag{align-items:center;display:inline-flex;justify-content:center}.p-tag-icon,.p-tag-icon.pi,.p-tag-value{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Tag, [{
        type: core.Component,
        args: [{
                selector: 'p-tag',
                template: "\n        <span [ngClass]=\"containerClass()\" [class]=\"styleClass\" [ngStyle]=\"style\">\n            <ng-content></ng-content>\n            <span class=\"p-tag-icon\" [ngClass]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"p-tag-value\">{{value}}</span>\n        </span>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-tag{align-items:center;display:inline-flex;justify-content:center}.p-tag-icon,.p-tag-icon.pi,.p-tag-value{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}"]
            }]
    }], function () { return []; }, { styleClass: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], severity: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], icon: [{
            type: core.Input
        }], rounded: [{
            type: core.Input
        }] }); })();
        return Tag;
    }());
    Tag.propDecorators = {
        styleClass: [{ type: core.Input }],
        style: [{ type: core.Input }],
        severity: [{ type: core.Input }],
        value: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        rounded: [{ type: core.Input }]
    };
    var TagModule = /** @class */ (function () {
        function TagModule() {
        }
TagModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TagModule });
TagModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TagModule_Factory(t) { return new (t || TagModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TagModule, { declarations: [Tag], imports: [ɵngcc1.CommonModule], exports: [Tag] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Tag],
                declarations: [Tag]
            }]
    }], function () { return []; }, null); })();
        return TagModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Tag = Tag;
    exports.TagModule = TagModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-tag.umd.js.map