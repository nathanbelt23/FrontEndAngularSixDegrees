import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, Output, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from 'primeng/utils';
import { RippleModule } from 'primeng/ripple';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

function SelectButton_div_1_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(option_r1.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-button-icon p-button-icon-left");
} }
function SelectButton_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, SelectButton_div_1_ng_container_2_span_1_Template, 1, 3, "span", 6);
    ɵngcc0.ɵɵelementStart(2, "span", 7);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", option_r1.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.getOptionLabel(option_r1));
} }
function SelectButton_div_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function SelectButton_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectButton_div_1_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    const option_r1 = ctx_r11.$implicit;
    const i_r2 = ctx_r11.index;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, option_r1, i_r2));
} }
const _c1 = function (a0, a1, a2) { return { "p-highlight": a0, "p-disabled": a1, "p-button-icon-only": a2 }; };
function SelectButton_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2, 3);
    ɵngcc0.ɵɵlistener("click", function SelectButton_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onItemClick($event, option_r1, i_r2); })("keydown.enter", function SelectButton_div_1_Template_div_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onItemClick($event, option_r1, i_r2); })("blur", function SelectButton_div_1_Template_div_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onBlur(); });
    ɵngcc0.ɵɵtemplate(2, SelectButton_div_1_ng_container_2_Template, 4, 2, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(3, SelectButton_div_1_ng_template_3_Template, 1, 5, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const _r5 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(option_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(10, _c1, ctx_r0.isSelected(option_r1), ctx_r0.disabled || ctx_r0.isOptionDisabled(option_r1), option_r1.icon && !ctx_r0.getOptionLabel(option_r1)));
    ɵngcc0.ɵɵattribute("aria-pressed", ctx_r0.isSelected(option_r1))("title", option_r1.title)("aria-label", option_r1.label)("tabindex", ctx_r0.disabled ? null : ctx_r0.tabindex)("aria-labelledby", ctx_r0.getOptionLabel(option_r1));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.itemTemplate)("ngIfElse", _r5);
} }
const SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectButton),
    multi: true
};
class SelectButton {
    constructor(cd) {
        this.cd = cd;
        this.tabindex = 0;
        this.onOptionClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : (option.label != undefined ? option.label : option);
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : (this.optionLabel || option.value === undefined ? option : option.value);
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : (option.disabled !== undefined ? option.disabled : false);
    }
    writeValue(value) {
        this.value = value;
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
    onItemClick(event, option, index) {
        if (this.disabled || this.isOptionDisabled(option)) {
            return;
        }
        if (this.multiple) {
            if (this.isSelected(option))
                this.removeOption(option);
            else
                this.value = [...(this.value || []), this.getOptionValue(option)];
        }
        else {
            this.value = this.getOptionValue(option);
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    onBlur() {
        this.onModelTouched();
    }
    removeOption(option) {
        this.value = this.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
    }
    isSelected(option) {
        let selected = false;
        let optionValue = this.getOptionValue(option);
        if (this.multiple) {
            if (this.value) {
                for (let val of this.value) {
                    if (ObjectUtils.equals(val, optionValue, this.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.getOptionValue(option), this.value, this.dataKey);
        }
        return selected;
    }
}
SelectButton.ɵfac = function SelectButton_Factory(t) { return new (t || SelectButton)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SelectButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SelectButton, selectors: [["p-selectButton"]], contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    } }, inputs: { tabindex: "tabindex", disabled: "disabled", options: "options", optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", multiple: "multiple", style: "style", styleClass: "styleClass", ariaLabelledBy: "ariaLabelledBy", dataKey: "dataKey" }, outputs: { onOptionClick: "onOptionClick", onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR])], decls: 2, vars: 5, consts: [["role", "group", 3, "ngClass", "ngStyle"], ["class", "p-button p-component", "role", "button", "pRipple", "", 3, "class", "ngClass", "click", "keydown.enter", "blur", 4, "ngFor", "ngForOf"], ["role", "button", "pRipple", "", 1, "p-button", "p-component", 3, "ngClass", "click", "keydown.enter", "blur"], ["btn", ""], [4, "ngIf", "ngIfElse"], ["customcontent", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SelectButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SelectButton_div_1_Template, 5, 14, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-selectbutton p-buttonset p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc2.Ripple, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".p-button{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:inline-flex;margin:0;overflow:hidden;position:relative;text-align:center;user-select:none;vertical-align:bottom}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{flex:0 0 auto;visibility:hidden;width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-bottom-right-radius:0;border-top-right-radius:0}.p-buttonset .p-button:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}.p-button-label{transition:all .2s}"], encapsulation: 2, changeDetection: 0 });
SelectButton.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SelectButton.propDecorators = {
    options: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionDisabled: [{ type: Input }],
    tabindex: [{ type: Input }],
    multiple: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    disabled: [{ type: Input }],
    dataKey: [{ type: Input }],
    onOptionClick: [{ type: Output }],
    onChange: [{ type: Output }],
    itemTemplate: [{ type: ContentChild, args: [TemplateRef,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectButton, [{
        type: Component,
        args: [{
                selector: 'p-selectButton',
                template: `
        <div [ngClass]="'p-selectbutton p-buttonset p-component'" [ngStyle]="style" [class]="styleClass"  role="group">
            <div *ngFor="let option of options; let i = index" #btn class="p-button p-component" [class]="option.styleClass" role="button" [attr.aria-pressed]="isSelected(option)"
                [ngClass]="{'p-highlight':isSelected(option), 
                        'p-disabled': disabled || isOptionDisabled(option),
                        'p-button-icon-only': (option.icon && !getOptionLabel(option))}" 
                (click)="onItemClick($event,option,i)" (keydown.enter)="onItemClick($event,option,i)"
                [attr.title]="option.title" [attr.aria-label]="option.label" (blur)="onBlur()" [attr.tabindex]="disabled ? null : tabindex" [attr.aria-labelledby]="this.getOptionLabel(option)" pRipple>
                <ng-container *ngIf="!itemTemplate else customcontent">
                    <span [ngClass]="'p-button-icon p-button-icon-left'" [class]="option.icon" *ngIf="option.icon"></span>
                    <span class="p-button-label">{{getOptionLabel(option)}}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                </ng-template>
            </div>
        </div>
    `,
                providers: [SELECTBUTTON_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-button{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:inline-flex;margin:0;overflow:hidden;position:relative;text-align:center;user-select:none;vertical-align:bottom}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{flex:0 0 auto;visibility:hidden;width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-bottom-right-radius:0;border-top-right-radius:0}.p-buttonset .p-button:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}.p-button-label{transition:all .2s}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { tabindex: [{
            type: Input
        }], onOptionClick: [{
            type: Output
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionDisabled: [{
            type: Input
        }], multiple: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], itemTemplate: [{
            type: ContentChild,
            args: [TemplateRef]
        }] }); })();
class SelectButtonModule {
}
SelectButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SelectButtonModule });
SelectButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SelectButtonModule_Factory(t) { return new (t || SelectButtonModule)(); }, imports: [[CommonModule, RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SelectButtonModule, { declarations: function () { return [SelectButton]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [SelectButton]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [SelectButton],
                declarations: [SelectButton]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SELECTBUTTON_VALUE_ACCESSOR, SelectButton, SelectButtonModule };

//# sourceMappingURL=primeng-selectbutton.js.map