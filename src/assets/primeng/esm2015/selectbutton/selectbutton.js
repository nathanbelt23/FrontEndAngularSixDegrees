import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ContentChild, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
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
export const SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectButton),
    multi: true
};
export class SelectButton {
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
export class SelectButtonModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YnV0dG9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0YnV0dG9uL3NlbGVjdGJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1SyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUF1QixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFRO0FBQ2hELElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0FBQzdDLElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUEyQkYsTUFBTSxPQUFPLFlBQVk7QUFBRyxJQW9DeEIsWUFBbUIsRUFBcUI7QUFBSSxRQUF6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBMUJoQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO0FBQ2xDLFFBYWMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNwRSxRQUNjLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMvRCxRQUtJLGtCQUFhLEdBQWEsR0FBRyxFQUFFLEdBQUUsQ0FB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QkFDcEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FDL0I7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixmb3J3YXJkUmVmLENoYW5nZURldGVjdG9yUmVmLENvbnRlbnRDaGlsZCxUZW1wbGF0ZVJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge09iamVjdFV0aWxzfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUQlVUVE9OX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RCdXR0b24pLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXNlbGVjdEJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1zZWxlY3RidXR0b24gcC1idXR0b25zZXQgcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiICByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zOyBsZXQgaSA9IGluZGV4XCIgI2J0biBjbGFzcz1cInAtYnV0dG9uIHAtY29tcG9uZW50XCIgW2NsYXNzXT1cIm9wdGlvbi5zdHlsZUNsYXNzXCIgcm9sZT1cImJ1dHRvblwiIFthdHRyLmFyaWEtcHJlc3NlZF09XCJpc1NlbGVjdGVkKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOmlzU2VsZWN0ZWQob3B0aW9uKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAncC1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwLWJ1dHRvbi1pY29uLW9ubHknOiAob3B0aW9uLmljb24gJiYgIWdldE9wdGlvbkxhYmVsKG9wdGlvbikpfVwiIFxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsb3B0aW9uLGkpXCIgKGtleWRvd24uZW50ZXIpPVwib25JdGVtQ2xpY2soJGV2ZW50LG9wdGlvbixpKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwib3B0aW9uLnRpdGxlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJvcHRpb24ubGFiZWxcIiAoYmx1cik9XCJvbkJsdXIoKVwiIFthdHRyLnRhYmluZGV4XT1cImRpc2FibGVkID8gbnVsbCA6IHRhYmluZGV4XCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cInRoaXMuZ2V0T3B0aW9uTGFiZWwob3B0aW9uKVwiIHBSaXBwbGU+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtVGVtcGxhdGUgZWxzZSBjdXN0b21jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cIidwLWJ1dHRvbi1pY29uIHAtYnV0dG9uLWljb24tbGVmdCdcIiBbY2xhc3NdPVwib3B0aW9uLmljb25cIiAqbmdJZj1cIm9wdGlvbi5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYnV0dG9uLWxhYmVsXCI+e3tnZXRPcHRpb25MYWJlbChvcHRpb24pfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjdXN0b21jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBvcHRpb24sIGluZGV4OiBpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtTRUxFQ1RCVVRUT05fVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2J1dHRvbi9idXR0b24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QnV0dG9uIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgb3B0aW9uczogYW55W107XG5cbiAgICBASW5wdXQoKSBvcHRpb25MYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uVmFsdWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG9wdGlvbkRpc2FibGVkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMDtcblxuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRhdGFLZXk6IHN0cmluZ1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBpdGVtVGVtcGxhdGU7XG4gICAgXG4gICAgdmFsdWU6IGFueTtcbiAgICAgICAgXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBcbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuICAgIFxuICAgIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkxhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uTGFiZWwpIDogKG9wdGlvbi5sYWJlbCAhPSB1bmRlZmluZWQgPyBvcHRpb24ubGFiZWwgOiBvcHRpb24pO1xuICAgIH1cblxuICAgIGdldE9wdGlvblZhbHVlKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogKHRoaXMub3B0aW9uTGFiZWwgfHwgb3B0aW9uLnZhbHVlID09PSB1bmRlZmluZWQgPyBvcHRpb24gOiBvcHRpb24udmFsdWUpO1xuICAgIH1cblxuICAgIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uRGlzYWJsZWQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25EaXNhYmxlZCkgOiAob3B0aW9uLmRpc2FibGVkICE9PSB1bmRlZmluZWQgPyBvcHRpb24uZGlzYWJsZWQgOiBmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cbiAgICBcbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICBvbkl0ZW1DbGljayhldmVudCwgb3B0aW9uOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZChvcHRpb24pKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlT3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFsuLi4odGhpcy52YWx1ZXx8W10pLCB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbildO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB9XG5cbiAgICByZW1vdmVPcHRpb24ob3B0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKHZhbCA9PiAhT2JqZWN0VXRpbHMuZXF1YWxzKHZhbCwgdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pLCB0aGlzLmRhdGFLZXkpKTtcbiAgICB9XG4gICAgXG4gICAgaXNTZWxlY3RlZChvcHRpb246IGFueSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3RVdGlscy5lcXVhbHModmFsLCBvcHRpb25WYWx1ZSwgdGhpcy5kYXRhS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IE9iamVjdFV0aWxzLmVxdWFscyh0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbiksIHRoaXMudmFsdWUsIHRoaXMuZGF0YUtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsUmlwcGxlTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU2VsZWN0QnV0dG9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTZWxlY3RCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEJ1dHRvbk1vZHVsZSB7IH1cbiJdfQ==