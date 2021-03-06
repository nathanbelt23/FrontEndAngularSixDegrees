import { Directive, ElementRef, Input, Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { UniqueComponentId } from 'primeng/utils';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
class BadgeDirective {
    constructor(el) {
        this.el = el;
        this.iconPos = 'left';
    }
    ngAfterViewInit() {
        this.id = UniqueComponentId() + '_badge';
        let el = this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
        let badge = document.createElement('span');
        badge.id = this.id;
        badge.className = 'p-badge p-component';
        if (this.severity) {
            DomHandler.addClass(badge, 'p-badge-' + this.severity);
        }
        if (this.value != null) {
            badge.appendChild(document.createTextNode(this.value));
            if (String(this.value).length === 1) {
                DomHandler.addClass(badge, 'p-badge-no-gutter');
            }
        }
        else {
            DomHandler.addClass(badge, 'p-badge-dot');
        }
        DomHandler.addClass(el, 'p-overlay-badge');
        el.appendChild(badge);
        this.initialized = true;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (val !== this._value) {
            this._value = val;
            if (this.initialized) {
                let badge = document.getElementById(this.id);
                if (this._value) {
                    if (DomHandler.hasClass(badge, 'p-badge-dot'))
                        DomHandler.removeClass(badge, 'p-badge-dot');
                    if (String(this._value).length === 1) {
                        DomHandler.addClass(badge, 'p-badge-no-gutter');
                    }
                    else {
                        DomHandler.removeClass(badge, 'p-badge-no-gutter');
                    }
                }
                else if (!this._value && !DomHandler.hasClass(badge, 'p-badge-dot')) {
                    DomHandler.addClass(badge, 'p-badge-dot');
                }
                badge.innerHTML = '';
                badge.appendChild(document.createTextNode(this._value));
            }
        }
    }
    ngOnDestroy() {
        this.initialized = false;
    }
}
BadgeDirective.ɵfac = function BadgeDirective_Factory(t) { return new (t || BadgeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BadgeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BadgeDirective, selectors: [["", "pBadge", ""]], inputs: { iconPos: "iconPos", value: "value", severity: "severity" } });
BadgeDirective.ctorParameters = () => [
    { type: ElementRef }
];
BadgeDirective.propDecorators = {
    iconPos: [{ type: Input }],
    value: [{ type: Input }],
    severity: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeDirective, [{
        type: Directive,
        args: [{
                selector: '[pBadge]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { iconPos: [{
            type: Input
        }], value: [{
            type: Input
        }], severity: [{
            type: Input
        }] }); })();
class Badge {
    containerClass() {
        return {
            'p-badge p-component': true,
            'p-badge-no-gutter': this.value && String(this.value).length === 1,
            'p-badge-lg': this.size === 'large',
            'p-badge-xl': this.size === 'xlarge',
            'p-badge-info': this.severity === 'info',
            'p-badge-success': this.severity === 'success',
            'p-badge-warning': this.severity === 'warning',
            'p-badge-danger': this.severity === 'danger'
        };
    }
}
Badge.ɵfac = function Badge_Factory(t) { return new (t || Badge)(); };
Badge.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Badge, selectors: [["p-badge"]], inputs: { styleClass: "styleClass", style: "style", size: "size", severity: "severity", value: "value" }, decls: 2, vars: 5, consts: [[3, "ngClass", "ngStyle"]], template: function Badge_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, " ");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-badge{border-radius:10px;display:inline-block;padding:0 .5rem;text-align:center}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{margin:0;position:absolute;right:0;top:0;transform:translate(50%,-50%);transform-origin:100% 0}.p-badge-dot{height:.5rem;min-width:.5rem;width:.5rem}.p-badge-dot,.p-badge-no-gutter{border-radius:50%;padding:0}"], encapsulation: 2, changeDetection: 0 });
Badge.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    size: [{ type: Input }],
    severity: [{ type: Input }],
    value: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Badge, [{
        type: Component,
        args: [{
                selector: 'p-badge',
                template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
                {{value}}
        </span>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-badge{border-radius:10px;display:inline-block;padding:0 .5rem;text-align:center}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{margin:0;position:absolute;right:0;top:0;transform:translate(50%,-50%);transform-origin:100% 0}.p-badge-dot{height:.5rem;min-width:.5rem;width:.5rem}.p-badge-dot,.p-badge-no-gutter{border-radius:50%;padding:0}"]
            }]
    }], null, { styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], size: [{
            type: Input
        }], severity: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
class BadgeModule {
}
BadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BadgeModule });
BadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BadgeModule_Factory(t) { return new (t || BadgeModule)(); }, imports: [[CommonModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BadgeModule, { declarations: function () { return [Badge, BadgeDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Badge, BadgeDirective, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Badge, BadgeDirective, SharedModule],
                declarations: [Badge, BadgeDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Badge, BadgeDirective, BadgeModule };

//# sourceMappingURL=primeng-badge.js.map