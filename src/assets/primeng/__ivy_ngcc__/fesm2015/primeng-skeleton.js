import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
class Skeleton {
    constructor() {
        this.shape = "rectangle";
        this.animation = "wave";
        this.borderRadius = null;
        this.size = null;
        this.width = "100%";
        this.height = "1rem";
    }
    containerClass() {
        return {
            'p-skeleton p-component': true,
            'p-skeleton-circle': this.shape === 'circle',
            'p-skeleton-none': this.animation === 'none'
        };
    }
    containerStyle() {
        if (this.size)
            return Object.assign(Object.assign({}, this.style), { width: this.size, height: this.size, borderRadius: this.borderRadius });
        else
            return Object.assign(Object.assign({}, this.style), { width: this.width, height: this.height, borderRadius: this.borderRadius });
    }
}
Skeleton.ɵfac = function Skeleton_Factory(t) { return new (t || Skeleton)(); };
Skeleton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Skeleton, selectors: [["p-skeleton"]], inputs: { shape: "shape", animation: "animation", borderRadius: "borderRadius", size: "size", width: "width", height: "height", styleClass: "styleClass", style: "style" }, decls: 1, vars: 4, consts: [[3, "ngClass", "ngStyle"]], template: function Skeleton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle());
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-skeleton{overflow:hidden;position:relative}.p-skeleton:after{animation:p-skeleton-animation 1.2s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"], encapsulation: 2, changeDetection: 0 });
Skeleton.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    shape: [{ type: Input }],
    animation: [{ type: Input }],
    borderRadius: [{ type: Input }],
    size: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Skeleton, [{
        type: Component,
        args: [{
                selector: 'p-skeleton',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle()">
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-skeleton{overflow:hidden;position:relative}.p-skeleton:after{animation:p-skeleton-animation 1.2s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"]
            }]
    }], function () { return []; }, { shape: [{
            type: Input
        }], animation: [{
            type: Input
        }], borderRadius: [{
            type: Input
        }], size: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
class SkeletonModule {
}
SkeletonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SkeletonModule });
SkeletonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SkeletonModule_Factory(t) { return new (t || SkeletonModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SkeletonModule, { declarations: function () { return [Skeleton]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Skeleton]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkeletonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Skeleton],
                declarations: [Skeleton]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Skeleton, SkeletonModule };

//# sourceMappingURL=primeng-skeleton.js.map