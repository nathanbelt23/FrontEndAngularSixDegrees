import { forwardRef, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input, Output, ChangeDetectorRef, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { ObjectUtils } from 'primeng/utils';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { trigger, transition, style, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

function CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function CascadeSelectSub_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.optionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, option_r1));
} }
function CascadeSelectSub_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.getOptionLabelToRender(option_r1));
} }
function CascadeSelectSub_ng_template_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} }
function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-cascadeSelectSub", 11);
    ɵngcc0.ɵɵlistener("onSelect", function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template_p_cascadeSelectSub_onSelect_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.onOptionSelect($event); })("onOptionGroupSelect", function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template_p_cascadeSelectSub_onOptionGroupSelect_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.onOptionGroupSelect(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("selectionPath", ctx_r7.selectionPath)("options", ctx_r7.getOptionGroupChildren(option_r1))("optionLabel", ctx_r7.optionLabel)("optionValue", ctx_r7.optionValue)("level", ctx_r7.level + 1)("optionGroupLabel", ctx_r7.optionGroupLabel)("optionGroupChildren", ctx_r7.optionGroupChildren)("parentActive", ctx_r7.isOptionActive(option_r1))("dirty", ctx_r7.dirty)("optionTemplate", ctx_r7.optionTemplate);
} }
function CascadeSelectSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵlistener("click", function CascadeSelectSub_ng_template_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const option_r1 = ctx.$implicit; const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onOptionClick($event, option_r1); })("keydown", function CascadeSelectSub_ng_template_1_Template_div_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onKeyDown($event, option_r1, i_r2); });
    ɵngcc0.ɵɵtemplate(2, CascadeSelectSub_ng_template_1_ng_container_2_Template, 2, 4, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(3, CascadeSelectSub_ng_template_1_ng_template_3_Template, 2, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, CascadeSelectSub_ng_template_1_span_5_Template, 1, 0, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template, 1, 10, "p-cascadeSelectSub", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const _r4 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.getItemClass(option_r1));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.optionTemplate)("ngIfElse", _r4);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isOptionGroup(option_r1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isOptionGroup(option_r1) && ctx_r0.isOptionActive(option_r1));
} }
const _c1 = function (a0) { return { "p-cascadeselect-panel-root": a0 }; };
const _c2 = ["focusInput"];
const _c3 = ["container"];
function CascadeSelect_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c4 = function (a0, a1) { return { $implicit: a0, placeholder: a1 }; };
function CascadeSelect_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CascadeSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.valueTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c4, ctx_r2.value, ctx_r2.placeholder));
} }
function CascadeSelect_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.label(), " ");
} }
const _c5 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c6 = function (a1) { return { value: "visible", params: a1 }; };
function CascadeSelect_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function CascadeSelect_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onOverlayAnimationStart($event); })("@overlayAnimation.done", function CascadeSelect_div_11_Template_div_animation_overlayAnimation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onOverlayAnimationDone($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵelementStart(2, "p-cascadeSelectSub", 14);
    ɵngcc0.ɵɵlistener("onSelect", function CascadeSelect_div_11_Template_p_cascadeSelectSub_onSelect_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onOptionSelect($event); })("onGroupSelect", function CascadeSelect_div_11_Template_p_cascadeSelectSub_onGroupSelect_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onOptionGroupSelect($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(14, _c6, ɵngcc0.ɵɵpureFunction2(11, _c5, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("options", ctx_r5.options)("selectionPath", ctx_r5.selectionPath)("optionLabel", ctx_r5.optionLabel)("optionValue", ctx_r5.optionValue)("level", 0)("optionTemplate", ctx_r5.optionTemplate)("optionGroupLabel", ctx_r5.optionGroupLabel)("optionGroupChildren", ctx_r5.optionGroupChildren)("dirty", ctx_r5.dirty)("root", true);
} }
const CASCADESELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CascadeSelect),
    multi: true
};
class CascadeSelectSub {
    constructor(el) {
        this.el = el;
        this.level = 0;
        this.onSelect = new EventEmitter();
        this.onGroupSelect = new EventEmitter();
        this.activeOption = null;
    }
    get parentActive() {
        return this._parentActive;
    }
    ;
    set parentActive(val) {
        if (!val) {
            this.activeOption = null;
        }
        this._parentActive = val;
    }
    ngOnInit() {
        if (this.selectionPath && this.options && !this.dirty) {
            for (let option of this.options) {
                if (this.selectionPath.includes(option)) {
                    this.activeOption = option;
                    break;
                }
            }
        }
        if (!this.root) {
            this.position();
        }
    }
    onOptionClick(event, option) {
        if (this.isOptionGroup(option)) {
            this.activeOption = (this.activeOption === option) ? null : option;
            this.onGroupSelect.emit({
                originalEvent: event,
                value: option
            });
        }
        else {
            this.onSelect.emit({
                originalEvent: event,
                value: this.getOptionValue(option)
            });
        }
    }
    onOptionSelect(event) {
        this.onSelect.emit(event);
    }
    onOptionGroupSelect(event) {
        this.onGroupSelect.emit(event);
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[this.level]);
    }
    isOptionGroup(option) {
        return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[this.level]);
    }
    getOptionLabelToRender(option) {
        return this.isOptionGroup(option) ? this.getOptionGroupLabel(option) : this.getOptionLabel(option);
    }
    getItemClass(option) {
        return {
            'p-cascadeselect-item': true,
            'p-cascadeselect-item-group': this.isOptionGroup(option),
            'p-cascadeselect-item-active p-highlight': this.isOptionActive(option)
        };
    }
    isOptionActive(option) {
        return this.activeOption === option;
    }
    onKeyDown(event, option, index) {
        let listItem = event.currentTarget.parentElement;
        switch (event.key) {
            case 'Down':
            case 'ArrowDown':
                var nextItem = this.el.nativeElement.children[0].children[index + 1];
                if (nextItem) {
                    nextItem.children[0].focus();
                }
                break;
            case 'Up':
            case 'ArrowUp':
                var prevItem = this.el.nativeElement.children[0].children[index - 1];
                if (prevItem) {
                    prevItem.children[0].focus();
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (this.isOptionGroup(option)) {
                    if (this.isOptionActive(option)) {
                        listItem.children[1].children[0].children[0].children[0].focus();
                    }
                    else {
                        this.activeOption = option;
                    }
                }
                break;
            case 'Left':
            case 'ArrowLeft':
                this.activeOption = null;
                var parentList = listItem.parentElement.parentElement.parentElement;
                if (parentList) {
                    parentList.children[0].focus();
                }
                break;
            case 'Enter':
                this.onOptionClick(event, option);
                break;
        }
        event.preventDefault();
    }
    position() {
        const parentItem = this.el.nativeElement.parentElement;
        const containerOffset = DomHandler.getOffset(parentItem);
        const viewport = DomHandler.getViewport();
        const sublistWidth = this.el.nativeElement.children[0].offsetParent ? this.el.nativeElement.children[0].offsetWidth : DomHandler.getHiddenElementOuterWidth(this.el.nativeElement.children[0]);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
        if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
            this.el.nativeElement.children[0].style.left = '-200%';
        }
    }
}
CascadeSelectSub.ɵfac = function CascadeSelectSub_Factory(t) { return new (t || CascadeSelectSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CascadeSelectSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CascadeSelectSub, selectors: [["p-cascadeSelectSub"]], inputs: { level: "level", parentActive: "parentActive", selectionPath: "selectionPath", options: "options", optionGroupChildren: "optionGroupChildren", optionTemplate: "optionTemplate", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", dirty: "dirty", root: "root" }, outputs: { onSelect: "onSelect", onGroupSelect: "onGroupSelect" }, decls: 2, vars: 4, consts: [["role", "listbox", "aria-orientation", "horizontal", 1, "p-cascadeselect-panel", "p-cascadeselect-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["role", "none", 3, "ngClass"], ["tabindex", "0", "pRipple", "", 1, "p-cascadeselect-item-content", 3, "click", "keydown"], [4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "p-cascadeselect-group-icon pi pi-angle-right", 4, "ngIf"], ["class", "p-cascadeselect-sublist", 3, "selectionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "parentActive", "dirty", "optionTemplate", "onSelect", "onOptionGroupSelect", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-cascadeselect-item-text"], [1, "p-cascadeselect-group-icon", "pi", "pi-angle-right"], [1, "p-cascadeselect-sublist", 3, "selectionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "parentActive", "dirty", "optionTemplate", "onSelect", "onOptionGroupSelect"]], template: function CascadeSelectSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, CascadeSelectSub_ng_template_1_Template, 7, 5, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx.root));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc2.Ripple, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, CascadeSelectSub], encapsulation: 2, changeDetection: 0 });
CascadeSelectSub.ctorParameters = () => [
    { type: ElementRef }
];
CascadeSelectSub.propDecorators = {
    selectionPath: [{ type: Input }],
    options: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    optionTemplate: [{ type: Input }],
    level: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    dirty: [{ type: Input }],
    root: [{ type: Input }],
    onSelect: [{ type: Output }],
    onGroupSelect: [{ type: Output }],
    parentActive: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CascadeSelectSub, [{
        type: Component,
        args: [{
                selector: 'p-cascadeSelectSub',
                template: `
        <ul class="p-cascadeselect-panel p-cascadeselect-items" [ngClass]="{'p-cascadeselect-panel-root': root}" role="listbox" aria-orientation="horizontal">
            <ng-template ngFor let-option [ngForOf]="options" let-i="index">
                <li [ngClass]="getItemClass(option)" role="none">
                    <div class="p-cascadeselect-item-content" (click)="onOptionClick($event, option)" tabindex="0" (keydown)="onKeyDown($event, option, i)" pRipple>
                        <ng-container *ngIf="optionTemplate;else defaultOptionTemplate">
                            <ng-container *ngTemplateOutlet="optionTemplate; context: {$implicit: option}"></ng-container>
                        </ng-container>
                        <ng-template #defaultOptionTemplate>
                            <span class="p-cascadeselect-item-text">{{getOptionLabelToRender(option)}}</span>
                        </ng-template>
                        <span class="p-cascadeselect-group-icon pi pi-angle-right" *ngIf="isOptionGroup(option)"></span>
                    </div>
                    <p-cascadeSelectSub *ngIf="isOptionGroup(option) && isOptionActive(option)" class="p-cascadeselect-sublist" [selectionPath]="selectionPath" [options]="getOptionGroupChildren(option)"
                        [optionLabel]="optionLabel" [optionValue]="optionValue" [level]="level + 1" (onSelect)="onOptionSelect($event)" (onOptionGroupSelect)="onOptionGroupSelect()"
                        [optionGroupLabel]="optionGroupLabel" [optionGroupChildren]="optionGroupChildren" [parentActive]="isOptionActive(option)" [dirty]="dirty" [optionTemplate]="optionTemplate">
                    </p-cascadeSelectSub>
                </li>
            </ng-template>
        </ul>
    `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { level: [{
            type: Input
        }], onSelect: [{
            type: Output
        }], onGroupSelect: [{
            type: Output
        }], parentActive: [{
            type: Input
        }], selectionPath: [{
            type: Input
        }], options: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], optionTemplate: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], dirty: [{
            type: Input
        }], root: [{
            type: Input
        }] }); })();
class CascadeSelect {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.onChange = new EventEmitter();
        this.onGroupChange = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onBeforeShow = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.selectionPath = null;
        this.focused = false;
        this.filled = false;
        this.overlayVisible = false;
        this.dirty = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        this.updateSelectionPath();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'value':
                    this.valueTemplate = item.template;
                    break;
                case 'option':
                    this.optionTemplate = item.template;
                    break;
            }
        });
    }
    onOptionSelect(event) {
        this.value = event.value;
        this.updateSelectionPath();
        this.onModelChange(this.value);
        this.onChange.emit(event);
        this.hide();
        this.focusInputEl.nativeElement.focus();
    }
    onOptionGroupSelect(event) {
        this.dirty = true;
        this.onGroupChange.emit(event);
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupChildren(optionGroup, level) {
        return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    }
    isOptionGroup(option, level) {
        return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    }
    updateSelectionPath() {
        let path;
        if (this.value != null && this.options) {
            for (let option of this.options) {
                path = this.findModelOptionInGroup(option, 0);
                if (path) {
                    break;
                }
            }
        }
        this.selectionPath = path;
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = !(this.selectionPath == null || this.selectionPath.length == 0);
    }
    findModelOptionInGroup(option, level) {
        if (this.isOptionGroup(option, level)) {
            let selectedOption;
            for (let childOption of this.getOptionGroupChildren(option, level)) {
                selectedOption = this.findModelOptionInGroup(childOption, level + 1);
                if (selectedOption) {
                    selectedOption.unshift(option);
                    return selectedOption;
                }
            }
        }
        else if ((ObjectUtils.equals(this.value, this.getOptionValue(option), this.dataKey))) {
            return [option];
        }
        return null;
    }
    show() {
        this.onBeforeShow.emit();
        this.overlayVisible = true;
    }
    hide() {
        this.onBeforeHide.emit();
        this.overlayVisible = false;
        this.cd.markForCheck();
    }
    onClick(event) {
        if (this.disabled) {
            return;
        }
        if (!this.overlayEl || !this.overlayEl || !this.overlayEl.contains(event.target)) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                this.show();
            }
            this.focusInputEl.nativeElement.focus();
        }
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlayEl = event.element;
                this.onOverlayEnter();
                break;
        }
    }
    onOverlayAnimationDone(event) {
        switch (event.toState) {
            case 'void':
                this.onOverlayLeave();
                break;
        }
    }
    onOverlayEnter() {
        this.overlayEl.style.zIndex = String(DomHandler.generateZIndex());
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        this.onShow.emit();
    }
    onOverlayLeave() {
        this.unbindOutsideClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.onHide.emit();
        this.overlayEl = null;
        this.dirty = false;
    }
    writeValue(value) {
        this.value = value;
        this.updateSelectionPath();
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
    alignOverlay() {
        if (this.appendTo) {
            DomHandler.absolutePosition(this.overlayEl, this.containerEl.nativeElement);
            this.overlayEl.style.minWidth = DomHandler.getOuterWidth(this.containerEl.nativeElement) + 'px';
        }
        else {
            DomHandler.relativePosition(this.overlayEl, this.containerEl.nativeElement);
        }
    }
    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (this.overlayVisible && this.overlayEl && !this.containerEl.nativeElement.contains(event.target) && !this.overlayEl.contains(event.target)) {
                    this.hide();
                }
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }
    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerEl.nativeElement, () => {
                if (this.overlayVisible) {
                    this.hide();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.overlayVisible) {
                    this.hide();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }
    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlayEl);
            else
                document.getElementById(this.appendTo).appendChild(this.overlayEl);
        }
    }
    restoreAppend() {
        if (this.overlayEl && this.appendTo) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.overlayEl);
            else
                document.getElementById(this.appendTo).removeChild(this.overlayEl);
        }
    }
    label() {
        if (this.selectionPath)
            return this.getOptionLabel(this.selectionPath[this.selectionPath.length - 1]);
        else
            return this.placeholder || 'p-emptylabel';
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Down':
            case 'ArrowDown':
                if (this.overlayVisible) {
                    DomHandler.findSingle(this.overlayEl, '.p-cascadeselect-item').children[0].focus();
                }
                else if (event.altKey && this.options && this.options.length) {
                    this.show();
                }
                event.preventDefault();
                break;
            case 'Escape':
                if (this.overlayVisible) {
                    this.hide();
                    event.preventDefault();
                }
                break;
            case 'Tab':
                this.hide();
                break;
        }
    }
    containerClass() {
        return {
            'p-cascadeselect p-component p-inputwrapper': true,
            'p-disabled': this.disabled,
            'p-focus': this.focused
        };
    }
    labelClass() {
        return {
            'p-cascadeselect-label': true,
            'p-placeholder': this.label() === this.placeholder,
            'p-cascadeselect-label-empty': !this.value && (this.label() === 'p-emptylabel' || this.label().length === 0)
        };
    }
    ngOnDestroy() {
        this.restoreAppend();
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.overlayEl = null;
    }
}
CascadeSelect.ɵfac = function CascadeSelect_Factory(t) { return new (t || CascadeSelect)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CascadeSelect.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CascadeSelect, selectors: [["p-cascadeSelect"]], contentQueries: function CascadeSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function CascadeSelect_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.focusInputEl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerEl = _t.first);
    } }, hostVars: 4, hostBindings: function CascadeSelect_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
    } }, inputs: { showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", value: "value", disabled: "disabled", styleClass: "styleClass", style: "style", options: "options", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", optionGroupChildren: "optionGroupChildren", placeholder: "placeholder", dataKey: "dataKey", inputId: "inputId", tabindex: "tabindex", ariaLabelledBy: "ariaLabelledBy", appendTo: "appendTo", rounded: "rounded" }, outputs: { onChange: "onChange", onGroupChange: "onGroupChange", onShow: "onShow", onHide: "onHide", onBeforeShow: "onBeforeShow", onBeforeHide: "onBeforeHide" }, features: [ɵngcc0.ɵɵProvidersFeature([CASCADESELECT_VALUE_ACCESSOR])], decls: 12, vars: 14, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["focusInput", ""], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["defaultValueTemplate", ""], ["role", "button", "aria-haspopup", "listbox", 1, "p-cascadeselect-trigger"], [1, "p-cascadeselect-trigger-icon", "pi", "pi-chevron-down"], ["class", "p-cascadeselect-panel p-component", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-cascadeselect-panel", "p-component"], [1, "p-cascadeselect-items-wrapper"], [1, "p-cascadeselect-items", 3, "options", "selectionPath", "optionLabel", "optionValue", "level", "optionTemplate", "optionGroupLabel", "optionGroupChildren", "dirty", "root", "onSelect", "onGroupSelect"]], template: function CascadeSelect_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function CascadeSelect_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function CascadeSelect_Template_input_focus_3_listener() { return ctx.onFocus(); })("blur", function CascadeSelect_Template_input_blur_3_listener() { return ctx.onBlur(); })("keydown", function CascadeSelect_Template_input_keydown_3_listener($event) { return ctx.onKeyDown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "span", 5);
        ɵngcc0.ɵɵtemplate(6, CascadeSelect_ng_container_6_Template, 2, 5, "ng-container", 6);
        ɵngcc0.ɵɵtemplate(7, CascadeSelect_ng_template_7_Template, 1, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵelement(10, "span", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, CascadeSelect_div_11_Template, 3, 16, "div", 10);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.labelClass());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.valueTemplate)("ngIfElse", _r3);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.overlayVisible);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, CascadeSelectSub], styles: [".p-cascadeselect{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-cascadeselect-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-cascadeselect-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect .p-cascadeselect-panel{min-width:100%}.p-cascadeselect-panel{position:absolute}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{align-items:center;display:flex;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{list-style-type:none;margin:0;padding:0}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{display:none;min-width:100%;position:absolute;z-index:1}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}"], encapsulation: 2, data: { animation: [
            trigger('overlayAnimation', [
                transition(':enter', [
                    style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animate('{{showTransitionParams}}')
                ]),
                transition(':leave', [
                    animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
CascadeSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
CascadeSelect.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    options: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    dataKey: [{ type: Input }],
    inputId: [{ type: Input }],
    tabindex: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    appendTo: [{ type: Input }],
    disabled: [{ type: Input }],
    rounded: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    focusInputEl: [{ type: ViewChild, args: ['focusInput',] }],
    containerEl: [{ type: ViewChild, args: ['container',] }],
    onChange: [{ type: Output }],
    onGroupChange: [{ type: Output }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    onBeforeShow: [{ type: Output }],
    onBeforeHide: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CascadeSelect, [{
        type: Component,
        args: [{
                selector: 'p-cascadeSelect',
                template: `
        <div #container [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #focusInput type="text" [attr.id]="inputId" readonly [disabled]="disabled" (focus)="onFocus()" (blur)="onBlur()"  (keydown)="onKeyDown($event)" [attr.tabindex]="tabindex"
                    aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" [attr.aria-labelledby]="ariaLabelledBy">
            </div>
            <span [ngClass]="labelClass()">
                <ng-container *ngIf="valueTemplate;else defaultValueTemplate">
                        <ng-container *ngTemplateOutlet="valueTemplate; context: {$implicit: value, placeholder: placeholder}"></ng-container>
                </ng-container>
                <ng-template #defaultValueTemplate>
                    {{label()}}
                </ng-template>
            </span>
            <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible">
                <span class="p-cascadeselect-trigger-icon pi pi-chevron-down"></span>
            </div>
            <div class="p-cascadeselect-panel p-component" *ngIf="overlayVisible" 
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationDone($event)">
                <div class="p-cascadeselect-items-wrapper">
                    <p-cascadeSelectSub [options]="options" [selectionPath]="selectionPath" class="p-cascadeselect-items" 
                        [optionLabel]="optionLabel" [optionValue]="optionValue" [level]="0" [optionTemplate]="optionTemplate"
                        [optionGroupLabel]="optionGroupLabel" [optionGroupChildren]="optionGroupChildren" 
                        (onSelect)="onOptionSelect($event)" (onGroupSelect)="onOptionGroupSelect($event)" [dirty]="dirty" [root]="true">
                    </p-cascadeSelectSub>
                </div>
            </div>
        </div>
    `,
                animations: [
                    trigger('overlayAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animate('{{showTransitionParams}}')
                        ]),
                        transition(':leave', [
                            animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                        ])
                    ])
                ],
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focused || overlayVisible'
                },
                providers: [CASCADESELECT_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-cascadeselect{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-cascadeselect-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-cascadeselect-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect .p-cascadeselect-panel{min-width:100%}.p-cascadeselect-panel{position:absolute}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{align-items:center;display:flex;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{list-style-type:none;margin:0;padding:0}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{display:none;min-width:100%;position:absolute;z-index:1}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onGroupChange: [{
            type: Output
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], onBeforeShow: [{
            type: Output
        }], onBeforeHide: [{
            type: Output
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], options: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], inputId: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], rounded: [{
            type: Input
        }], focusInputEl: [{
            type: ViewChild,
            args: ['focusInput']
        }], containerEl: [{
            type: ViewChild,
            args: ['container']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class CascadeSelectModule {
}
CascadeSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CascadeSelectModule });
CascadeSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CascadeSelectModule_Factory(t) { return new (t || CascadeSelectModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CascadeSelectModule, { declarations: function () { return [CascadeSelect, CascadeSelectSub]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [CascadeSelect, CascadeSelectSub, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CascadeSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [CascadeSelect, CascadeSelectSub, SharedModule],
                declarations: [CascadeSelect, CascadeSelectSub]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CASCADESELECT_VALUE_ACCESSOR, CascadeSelect, CascadeSelectModule, CascadeSelectSub };

//# sourceMappingURL=primeng-cascadeselect.js.map