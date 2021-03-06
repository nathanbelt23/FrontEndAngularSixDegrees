import { forwardRef, ɵɵdefineInjectable, Injectable, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Injector, Input, Output, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["rb"];
const _c1 = function (a1, a2, a3) { return { "p-radiobutton-label": true, "p-radiobutton-label-active": a1, "p-disabled": a2, "p-radiobutton-label-focus": a3 }; };
function RadioButton_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 4);
    ɵngcc0.ɵɵlistener("click", function RadioButton_label_6_Template_label_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.select($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵclassMap(ctx_r1.labelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(5, _c1, _r0.checked, ctx_r1.disabled, ctx_r1.focused));
    ɵngcc0.ɵɵattribute("for", ctx_r1.inputId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
const _c2 = function (a1, a2, a3) { return { "p-radiobutton p-component": true, "p-radiobutton-checked": a1, "p-radiobutton-disabled": a2, "p-radiobutton-focused": a3 }; };
const _c3 = function (a1, a2, a3) { return { "p-radiobutton-box": true, "p-highlight": a1, "p-disabled": a2, "p-focus": a3 }; };
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButton),
    multi: true
};
class RadioControlRegistry {
    constructor() {
        this.accessors = [];
    }
    add(control, accessor) {
        this.accessors.push([control, accessor]);
    }
    remove(accessor) {
        this.accessors = this.accessors.filter((c) => {
            return c[1] !== accessor;
        });
    }
    select(accessor) {
        this.accessors.forEach((c) => {
            if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].writeValue(accessor.value);
            }
        });
    }
    isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control) {
            return false;
        }
        return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
    }
}
RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) { return new (t || RadioControlRegistry)(); };
RadioControlRegistry.ɵprov = ɵɵdefineInjectable({ factory: function RadioControlRegistry_Factory() { return new RadioControlRegistry(); }, token: RadioControlRegistry, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioControlRegistry, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class RadioButton {
    constructor(cd, injector, registry) {
        this.cd = cd;
        this.injector = injector;
        this.registry = registry;
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        if (this.formControlName) {
            this.control = this.injector.get(NgControl);
            this.checkName();
            this.registry.add(this.control, this);
        }
    }
    handleClick(event, radioButton, focus) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.select(event);
        if (focus) {
            radioButton.focus();
        }
    }
    select(event) {
        if (!this.disabled) {
            this.inputViewChild.nativeElement.checked = true;
            this.checked = true;
            this.onModelChange(this.value);
            if (this.formControlName) {
                this.registry.select(this);
            }
            this.onClick.emit(event);
        }
    }
    writeValue(value) {
        this.checked = (value == this.value);
        if (this.inputViewChild && this.inputViewChild.nativeElement) {
            this.inputViewChild.nativeElement.checked = this.checked;
        }
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onChange(event) {
        this.select(event);
    }
    focus() {
        this.inputViewChild.nativeElement.focus();
    }
    ngOnDestroy() {
        if (this.formControlName) {
            this.registry.remove(this);
        }
    }
    checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this.throwNameError();
        }
        if (!this.name && this.formControlName) {
            this.name = this.formControlName;
        }
    }
    throwNameError() {
        throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
    }
}
RadioButton.ɵfac = function RadioButton_Factory(t) { return new (t || RadioButton)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(RadioControlRegistry)); };
RadioButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RadioButton, selectors: [["p-radioButton"]], viewQuery: function RadioButton_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    } }, inputs: { disabled: "disabled", name: "name", value: "value", formControlName: "formControlName", label: "label", tabindex: "tabindex", inputId: "inputId", ariaLabelledBy: "ariaLabelledBy", ariaLabel: "ariaLabel", style: "style", styleClass: "styleClass", labelStyleClass: "labelStyleClass" }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, features: [ɵngcc0.ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR])], decls: 7, vars: 23, consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "change", "focus", "blur"], ["rb", ""], [3, "ngClass", "click"], [1, "p-radiobutton-icon"], [3, "class", "ngClass", "click", 4, "ngIf"]], template: function RadioButton_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("change", function RadioButton_Template_input_change_2_listener($event) { return ctx.onChange($event); })("focus", function RadioButton_Template_input_focus_2_listener($event) { return ctx.onInputFocus($event); })("blur", function RadioButton_Template_input_blur_2_listener($event) { return ctx.onInputBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵlistener("click", function RadioButton_Template_div_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const _r0 = ɵngcc0.ɵɵreference(3); return ctx.handleClick($event, _r0, true); });
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, RadioButton_label_6_Template, 2, 9, "label", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction3(15, _c2, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("value", ctx.value)("tabindex", ctx.tabindex)("aria-checked", ctx.checked)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(19, _c3, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
RadioButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Injector },
    { type: RadioControlRegistry }
];
RadioButton.propDecorators = {
    value: [{ type: Input }],
    formControlName: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    label: [{ type: Input }],
    tabindex: [{ type: Input }],
    inputId: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    labelStyleClass: [{ type: Input }],
    onClick: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    inputViewChild: [{ type: ViewChild, args: ['rb',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioButton, [{
        type: Component,
        args: [{
                selector: 'p-radioButton',
                template: `
        <div [ngStyle]="style" [ngClass]="{'p-radiobutton p-component':true,'p-radiobutton-checked': checked, 'p-radiobutton-disabled': disabled, 'p-radiobutton-focused': focused}" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #rb type="radio" [attr.id]="inputId" [attr.name]="name" [attr.value]="value" [attr.tabindex]="tabindex" [attr.aria-checked]="checked" [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy" [checked]="checked" (change)="onChange($event)" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" [disabled]="disabled">
            </div>
            <div (click)="handleClick($event, rb, true)" [ngClass]="{'p-radiobutton-box':true, 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}">
                <span class="p-radiobutton-icon"></span>
            </div>
        </div>
        <label (click)="select($event)" [class]="labelStyleClass"
            [ngClass]="{'p-radiobutton-label':true, 'p-radiobutton-label-active':rb.checked, 'p-disabled':disabled, 'p-radiobutton-label-focus':focused}"
            *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
                providers: [RADIO_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Injector }, { type: RadioControlRegistry }]; }, { onClick: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], formControlName: [{
            type: Input
        }], label: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], inputId: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], labelStyleClass: [{
            type: Input
        }], inputViewChild: [{
            type: ViewChild,
            args: ['rb']
        }] }); })();
class RadioButtonModule {
}
RadioButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RadioButtonModule });
RadioButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RadioButtonModule_Factory(t) { return new (t || RadioButtonModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RadioButtonModule, { declarations: function () { return [RadioButton]; }, imports: function () { return [CommonModule]; }, exports: function () { return [RadioButton]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [RadioButton],
                declarations: [RadioButton]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { RADIO_VALUE_ACCESSOR, RadioButton, RadioButtonModule, RadioControlRegistry };

//# sourceMappingURL=primeng-radiobutton.js.map