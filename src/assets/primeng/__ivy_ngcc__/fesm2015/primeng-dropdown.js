import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { forwardRef, EventEmitter, Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, ChangeDetectorRef, NgZone, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FilterService, PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/ripple';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/api';
import * as ɵngcc4 from 'primeng/tooltip';
import * as ɵngcc5 from '@angular/cdk/scrolling';

function DropdownItem_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label || "empty");
} }
function DropdownItem_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a1, a2) { return { "p-dropdown-item": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c2 = function (a0) { return { $implicit: a0 }; };
const _c3 = ["container"];
const _c4 = ["filter"];
const _c5 = ["in"];
const _c6 = ["editableInput"];
function Dropdown_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.label || "empty");
} }
function Dropdown_span_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c7 = function (a1) { return { "p-dropdown-label p-inputtext": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵtemplate(1, Dropdown_span_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_span_5_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c7, ctx_r2.label == null || ctx_r2.label.length === 0))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(10, _c2, ctx_r2.selectedOption));
} }
const _c8 = function (a1) { return { "p-dropdown-label p-inputtext p-placeholder": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c8, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.placeholder || "empty");
} }
function Dropdown_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 16, 17);
    ɵngcc0.ɵɵlistener("click", function Dropdown_input_7_Template_input_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onEditableInputClick(); })("input", function Dropdown_input_7_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onEditableInputChange($event); })("focus", function Dropdown_input_7_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onEditableInputFocus($event); })("blur", function Dropdown_input_7_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onInputBlur($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵattribute("maxlength", ctx_r4.maxlength)("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
} }
function Dropdown_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 18);
    ɵngcc0.ɵɵlistener("click", function Dropdown_i_8_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.clear($event); });
    ɵngcc0.ɵɵelementEnd();
} }
function Dropdown_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵlistener("click", function Dropdown_div_11_div_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementStart(2, "input", 27, 28);
    ɵngcc0.ɵɵlistener("keydown.enter", function Dropdown_div_11_div_1_Template_input_keydown_enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.preventDefault(); })("keydown", function Dropdown_div_11_div_1_Template_input_keydown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onKeydown($event, false); })("input", function Dropdown_div_11_div_1_Template_input_input_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onFilterInputChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r17.filterValue || "");
    ɵngcc0.ɵɵattribute("placeholder", ctx_r17.filterPlaceholder)("aria-label", ctx_r17.ariaFilterLabel);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const optgroup_r30 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r31 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r31.getOptionGroupLabel(optgroup_r30) || "empty");
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1) { return { $implicit: a0, selectedOption: a1 }; };
function Dropdown_div_11_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 14);
} if (rf & 2) {
    const optgroup_r30 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r20 = ɵngcc0.ɵɵreference(7);
    const ctx_r29 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r29.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r29.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c2, optgroup_r30));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c9, ctx_r29.getOptionGroupChildren(optgroup_r30), ctx_r29.selectedOption));
} }
function Dropdown_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_Template, 4, 10, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r18.optionsToDisplay);
} }
function Dropdown_div_11_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r20 = ɵngcc0.ɵɵreference(7);
    const ctx_r19 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c9, ctx_r19.optionsToDisplay, ctx_r19.selectedOption));
} }
function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_dropdownItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(4); return ctx_r44.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r42 = ctx.$implicit;
    const selectedOption_r37 = ɵngcc0.ɵɵnextContext(2).selectedOption;
    const ctx_r41 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("option", option_r42)("selected", selectedOption_r37 == option_r42)("label", ctx_r41.getOptionLabel(option_r42))("disabled", ctx_r41.isOptionDisabled(option_r42))("template", ctx_r41.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template, 1, 5, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const options_r36 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_dropdownItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r59); const ctx_r58 = ɵngcc0.ɵɵnextContext(5); return ctx_r58.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    const selectedOption_r37 = ɵngcc0.ɵɵnextContext(3).selectedOption;
    const ctx_r50 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r51)("selected", selectedOption_r37 == option_r51)("label", ctx_r50.getOptionLabel(option_r51))("disabled", ctx_r50.isOptionDisabled(option_r51))("template", ctx_r50.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    const _r62 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 36, 37);
    ɵngcc0.ɵɵlistener("scrolledIndexChange", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r62); const ctx_r61 = ɵngcc0.ɵɵnextContext(4); return ctx_r61.scrollToSelectedVirtualScrollElement(); });
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 5, "ng-container", 38);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r36 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r48 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r48.scrollHeight))("itemSize", ctx_r48.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 35);
} if (rf & 2) {
    const ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r40.virtualScroll && ctx_r40.optionsToDisplay && ctx_r40.optionsToDisplay.length);
} }
function Dropdown_div_11_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 32);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 33, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r39 = ɵngcc0.ɵɵreference(2);
    const ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r21.virtualScroll)("ngIfElse", _r39);
} }
function Dropdown_div_11_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 39);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.emptyFilterMessage);
} }
const _c10 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c11 = function (a1) { return { value: "visible", params: a1 }; };
const _c12 = function (a0) { return { "p-dropdown-virtualscroll": a0 }; };
function Dropdown_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r65 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function Dropdown_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r65); const ctx_r64 = ɵngcc0.ɵɵnextContext(); return ctx_r64.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_div_1_Template, 5, 3, "div", 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21);
    ɵngcc0.ɵɵelementStart(3, "ul", 22);
    ɵngcc0.ɵɵtemplate(4, Dropdown_div_11_ng_container_4_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(5, Dropdown_div_11_ng_container_5_Template, 2, 5, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(6, Dropdown_div_11_ng_template_6_Template, 3, 2, "ng-template", null, 23, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(8, Dropdown_div_11_li_8_Template, 2, 1, "li", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r6.panelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-dropdown-panel p-component")("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(15, _c11, ɵngcc0.ɵɵpureFunction2(12, _c10, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("ngStyle", ctx_r6.panelStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c12, ctx_r6.virtualScroll));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.group);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.group);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter && (!ctx_r6.optionsToDisplay || ctx_r6.optionsToDisplay && ctx_r6.optionsToDisplay.length === 0));
} }
const _c13 = function (a1, a2, a3, a4) { return { "p-dropdown p-component": true, "p-disabled": a1, "p-dropdown-open": a2, "p-focus": a3, "p-dropdown-clearable": a4 }; };
const DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Dropdown),
    multi: true
};
class DropdownItem {
    constructor() {
        this.onClick = new EventEmitter();
    }
    onOptionClick(event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    }
}
DropdownItem.ɵfac = function DropdownItem_Factory(t) { return new (t || DropdownItem)(); };
DropdownItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownItem, selectors: [["p-dropdownItem"]], inputs: { option: "option", selected: "selected", label: "label", disabled: "disabled", visible: "visible", itemSize: "itemSize", template: "template" }, outputs: { onClick: "onClick" }, decls: 3, vars: 14, consts: [["role", "option", "pRipple", "", 3, "ngStyle", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DropdownItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵlistener("click", function DropdownItem_Template_li_click_0_listener($event) { return ctx.onOptionClick($event); });
        ɵngcc0.ɵɵtemplate(1, DropdownItem_span_1_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(7, _c0, ctx.itemSize + "px"))("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c1, ctx.selected, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-label", ctx.label)("aria-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(12, _c2, ctx.option));
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
DropdownItem.propDecorators = {
    option: [{ type: Input }],
    selected: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    visible: [{ type: Input }],
    itemSize: [{ type: Input }],
    template: [{ type: Input }],
    onClick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownItem, [{
        type: Component,
        args: [{
                selector: 'p-dropdownItem',
                template: `
        <li (click)="onOptionClick($event)" role="option" pRipple
            [attr.aria-label]="label" [attr.aria-selected]="selected"
            [ngStyle]="{'height': itemSize + 'px'}"
            [ngClass]="{'p-dropdown-item':true, 'p-highlight': selected, 'p-disabled': disabled}">
            <span *ngIf="!template">{{label||'empty'}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `
            }]
    }], function () { return []; }, { onClick: [{
            type: Output
        }], option: [{
            type: Input
        }], selected: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], visible: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
class Dropdown {
    constructor(el, renderer, cd, zone, filterService) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.filterService = filterService;
        this.scrollHeight = '200px';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.optionGroupChildren = "items";
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.onChange = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.viewPortOffsetTop = 0;
    }
    get disabled() {
        return this._disabled;
    }
    ;
    set disabled(_disabled) {
        if (_disabled) {
            this.focused = false;
            if (this.overlayVisible)
                this.hide();
        }
        this._disabled = _disabled;
        if (!this.cd.destroyed) {
            this.cd.detectChanges();
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                case 'group':
                    this.groupTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngOnInit() {
        this.optionsToDisplay = this.options;
        this.updateSelectedOption(null);
    }
    get options() {
        return this._options;
    }
    set options(val) {
        this._options = val;
        this.optionsToDisplay = this._options;
        this.updateSelectedOption(this.value);
        this.optionsChanged = true;
        this.updateFilledState();
        if (this._filterValue && this._filterValue.length) {
            this.activateFilter();
        }
    }
    get filterValue() {
        return this._filterValue;
    }
    set filterValue(val) {
        this._filterValue = val;
        this.activateFilter();
    }
    ngAfterViewInit() {
        if (this.editable) {
            this.updateEditableLabel();
        }
    }
    get label() {
        return this.selectedOption ? this.getOptionLabel(this.selectedOption) : null;
    }
    updateEditableLabel() {
        if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.getOptionLabel(this.selectedOption) : this.value || '');
        }
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
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : (optionGroup.label != undefined ? optionGroup.label : optionGroup);
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    onItemClick(event) {
        const option = event.option;
        if (!this.isOptionDisabled(option)) {
            this.selectItem(event, option);
            this.accessibleViewChild.nativeElement.focus();
        }
        setTimeout(() => {
            this.hide();
        }, 150);
    }
    selectItem(event, option) {
        if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = this.getOptionValue(option);
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
                originalEvent: event.originalEvent,
                value: this.value
            });
            if (this.virtualScroll) {
                setTimeout(() => {
                    this.viewPortOffsetTop = this.viewPort ? this.viewPort.measureScrollOffset() : 0;
                }, 1);
            }
        }
    }
    ngAfterViewChecked() {
        if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;
            if (this.virtualScroll) {
                this.updateVirtualScrollSelectedIndex(true);
            }
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.alignOverlay();
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
                let range = this.viewPort.getRenderedRange();
                this.updateVirtualScrollSelectedIndex(false);
                if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                    this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                }
            }
            let selectedItem = DomHandler.findSingle(this.overlay, 'li.p-highlight');
            if (selectedItem) {
                DomHandler.scrollInView(this.itemsWrapper, DomHandler.findSingle(this.overlay, 'li.p-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    }
    writeValue(value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.updateSelectedOption(value);
        this.updateEditableLabel();
        this.updateFilledState();
        this.cd.markForCheck();
    }
    resetFilter() {
        this._filterValue = null;
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
        }
        this.optionsToDisplay = this.options;
    }
    updateSelectedOption(val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
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
    onMouseclick(event) {
        if (this.disabled || this.readonly || this.isInputClick(event)) {
            return;
        }
        this.onClick.emit(event);
        this.accessibleViewChild.nativeElement.focus();
        if (this.overlayVisible)
            this.hide();
        else
            this.show();
        this.cd.detectChanges();
    }
    isInputClick(event) {
        return DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') ||
            event.target.isSameNode(this.accessibleViewChild.nativeElement) ||
            (this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement));
    }
    isOutsideClicked(event) {
        return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
    }
    onEditableInputClick() {
        this.bindDocumentClickListener();
    }
    onEditableInputFocus(event) {
        this.focused = true;
        this.hide();
        this.onFocus.emit(event);
    }
    onEditableInputChange(event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    show() {
        this.overlayVisible = true;
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                let itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.p-dropdown-items-wrapper';
                this.itemsWrapper = DomHandler.findSingle(this.overlay, itemsWrapperSelector);
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                if (this.options && this.options.length) {
                    if (!this.virtualScroll) {
                        let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
                        if (selectedListItem) {
                            DomHandler.scrollInView(this.itemsWrapper, selectedListItem);
                        }
                    }
                }
                if (this.filterViewChild && this.filterViewChild.nativeElement) {
                    this.preventModelTouched = true;
                    if (this.autofocusFilter) {
                        this.filterViewChild.nativeElement.focus();
                    }
                }
                this.onShow.emit(event);
                break;
            case 'void':
                this.onOverlayHide();
                this.onHide.emit(event);
                break;
        }
    }
    scrollToSelectedVirtualScrollElement() {
        if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
                this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            }
            else if (this.virtualScrollSelectedIndex > -1) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
        }
        this.virtualAutoScrolled = true;
    }
    updateVirtualScrollSelectedIndex(resetOffset) {
        if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
                this.viewPortOffsetTop = 0;
            }
            this.virtualScrollSelectedIndex = this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay);
        }
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                DomHandler.appendChild(this.overlay, this.appendTo);
            if (!this.overlay.style.minWidth) {
                this.overlay.style.minWidth = DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
            }
        }
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    hide() {
        this.overlayVisible = false;
        if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
        }
        if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
        }
        this.cd.markForCheck();
    }
    alignOverlay() {
        if (this.overlay) {
            if (this.appendTo)
                DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.onBlur.emit(event);
        if (!this.preventModelTouched) {
            this.onModelTouched();
        }
        this.preventModelTouched = false;
    }
    findPrevEnabledOption(index) {
        let prevEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (let i = (index - 1); 0 <= i; i--) {
                let option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    prevEnabledOption = option;
                    break;
                }
            }
            if (!prevEnabledOption) {
                for (let i = this.optionsToDisplay.length - 1; i >= index; i--) {
                    let option = this.optionsToDisplay[i];
                    if (this.isOptionDisabled(option)) {
                        continue;
                    }
                    else {
                        prevEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return prevEnabledOption;
    }
    findNextEnabledOption(index) {
        let nextEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (let i = (index + 1); index < (this.optionsToDisplay.length - 1); i++) {
                let option = this.optionsToDisplay[i];
                if (this.isOptionDisabled(option)) {
                    continue;
                }
                else {
                    nextEnabledOption = option;
                    break;
                }
            }
            if (!nextEnabledOption) {
                for (let i = 0; i < index; i++) {
                    let option = this.optionsToDisplay[i];
                    if (this.isOptionDisabled(option)) {
                        continue;
                    }
                    else {
                        nextEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return nextEnabledOption;
    }
    onKeydown(event, search) {
        if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
        }
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                }
                else {
                    if (this.group) {
                        let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                        if (selectedItemIndex !== -1) {
                            let nextItemIndex = selectedItemIndex.itemIndex + 1;
                            if (nextItemIndex < (this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex]).length)) {
                                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[nextItemIndex]);
                                this.selectedOptionUpdated = true;
                            }
                            else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex + 1])[0]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                        else {
                            this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[0])[0]);
                        }
                    }
                    else {
                        let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                        let nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
                        if (nextEnabledOption) {
                            this.selectItem(event, nextEnabledOption);
                            this.selectedOptionUpdated = true;
                        }
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (this.group) {
                    let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                    if (selectedItemIndex !== -1) {
                        let prevItemIndex = selectedItemIndex.itemIndex - 1;
                        if (prevItemIndex >= 0) {
                            this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[prevItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                        else if (prevItemIndex < 0) {
                            let prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
                            if (prevGroup) {
                                this.selectItem(event, this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                    }
                }
                else {
                    let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                    let prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
                    if (prevEnabledOption) {
                        this.selectItem(event, prevEnabledOption);
                        this.selectedOptionUpdated = true;
                    }
                }
                event.preventDefault();
                break;
            //space
            case 32:
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                if (!this.filter || (this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
                    this.hide();
                }
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide();
                break;
            //search item based on keyboard input
            default:
                if (search && !event.metaKey) {
                    this.search(event);
                }
                break;
        }
    }
    search(event) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        const char = event.key;
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;
        if (this.previousSearchChar === this.currentSearchChar)
            this.searchValue = this.currentSearchChar;
        else
            this.searchValue = this.searchValue ? this.searchValue + char : char;
        let newOption;
        if (this.group) {
            let searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : { groupIndex: 0, itemIndex: 0 };
            newOption = this.searchOptionWithinGroup(searchIndex);
        }
        else {
            let searchIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
            newOption = this.searchOption(++searchIndex);
        }
        if (newOption && !this.isOptionDisabled(newOption)) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
        }
        this.searchTimeout = setTimeout(() => {
            this.searchValue = null;
        }, 250);
    }
    searchOption(index) {
        let option;
        if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);
            if (!option) {
                option = this.searchOptionInRange(0, index);
            }
        }
        return option;
    }
    searchOptionInRange(start, end) {
        for (let i = start; i < end; i++) {
            let opt = this.optionsToDisplay[i];
            if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
                return opt;
            }
        }
        return null;
    }
    searchOptionWithinGroup(index) {
        let option;
        if (this.searchValue) {
            for (let i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
                for (let j = (index.groupIndex === i) ? (index.itemIndex + 1) : 0; j < this.getOptionGroupChildren(this.optionsToDisplay[i]).length; j++) {
                    let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
                    if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
                        return opt;
                    }
                }
            }
            if (!option) {
                for (let i = 0; i <= index.groupIndex; i++) {
                    for (let j = 0; j < ((index.groupIndex === i) ? index.itemIndex : this.getOptionGroupChildren(this.optionsToDisplay[i]).length); j++) {
                        let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
                        if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
                            return opt;
                        }
                    }
                }
            }
        }
        return null;
    }
    findOptionIndex(val, opts) {
        let index = -1;
        if (opts) {
            for (let i = 0; i < opts.length; i++) {
                if ((val == null && this.getOptionValue(opts[i]) == null) || ObjectUtils.equals(val, this.getOptionValue(opts[i]), this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    findOptionGroupIndex(val, opts) {
        let groupIndex, itemIndex;
        if (opts) {
            for (let i = 0; i < opts.length; i++) {
                groupIndex = i;
                itemIndex = this.findOptionIndex(val, this.getOptionGroupChildren(opts[i]));
                if (itemIndex !== -1) {
                    break;
                }
            }
        }
        if (itemIndex !== -1) {
            return { groupIndex: groupIndex, itemIndex: itemIndex };
        }
        else {
            return -1;
        }
    }
    findOption(val, opts, inGroup) {
        if (this.group && !inGroup) {
            let opt;
            if (opts && opts.length) {
                for (let optgroup of opts) {
                    opt = this.findOption(val, this.getOptionGroupChildren(optgroup), true);
                    if (opt) {
                        break;
                    }
                }
            }
            return opt;
        }
        else {
            let index = this.findOptionIndex(val, opts);
            return (index != -1) ? opts[index] : null;
        }
    }
    onFilterInputChange(event) {
        let inputValue = event.target.value;
        if (inputValue && inputValue.length) {
            this._filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this._filterValue = null;
            this.optionsToDisplay = this.options;
        }
        this.optionsChanged = true;
        this.onFilter.emit({ originalEvent: event, filter: this._filterValue });
    }
    activateFilter() {
        let searchFields = (this.filterBy || this.optionLabel || 'label').split(',');
        if (this.options && this.options.length) {
            if (this.group) {
                let filteredGroups = [];
                for (let optgroup of this.options) {
                    let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push(Object.assign(Object.assign({}, optgroup), { [this.optionGroupChildren]: filteredSubOptions }));
                    }
                }
                this.optionsToDisplay = filteredGroups;
            }
            else {
                this.optionsToDisplay = this.filterService.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            }
            this.optionsChanged = true;
        }
    }
    applyFocus() {
        if (this.editable)
            DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();
        else
            DomHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    }
    focus() {
        this.applyFocus();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (this.isOutsideClicked(event)) {
                    this.hide();
                    this.unbindDocumentClickListener();
                }
                this.cd.markForCheck();
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        if (!DomHandler.isAndroid()) {
            this.hide();
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, (event) => {
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
    updateFilledState() {
        this.filled = (this.selectedOption != null);
    }
    clear(event) {
        this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
        this.updateSelectedOption(this.value);
        this.updateEditableLabel();
        this.updateFilledState();
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
        this.overlay = null;
        this.itemsWrapper = null;
        this.onModelTouched();
    }
    ngOnDestroy() {
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
}
Dropdown.ɵfac = function Dropdown_Factory(t) { return new (t || Dropdown)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FilterService)); };
Dropdown.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Dropdown, selectors: [["p-dropdown"]], contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Dropdown_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accessibleViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewPort = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function Dropdown_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
    } }, inputs: { scrollHeight: "scrollHeight", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", optionGroupChildren: "optionGroupChildren", autoDisplayFirst: "autoDisplayFirst", emptyFilterMessage: "emptyFilterMessage", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", autofocusFilter: "autofocusFilter", disabled: "disabled", options: "options", filterValue: "filterValue", filter: "filter", name: "name", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", readonly: "readonly", required: "required", editable: "editable", appendTo: "appendTo", tabindex: "tabindex", placeholder: "placeholder", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", inputId: "inputId", selectId: "selectId", dataKey: "dataKey", filterBy: "filterBy", autofocus: "autofocus", optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", optionGroupLabel: "optionGroupLabel", group: "group", showClear: "showClear", virtualScroll: "virtualScroll", itemSize: "itemSize", ariaFilterLabel: "ariaFilterLabel", ariaLabelledBy: "ariaLabelledBy", maxlength: "maxlength", tooltipStyleClass: "tooltipStyleClass" }, outputs: { onChange: "onChange", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onShow: "onShow", onHide: "onHide" }, features: [ɵngcc0.ɵɵProvidersFeature([DROPDOWN_VALUE_ACCESSOR])], decls: 12, vars: 22, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "p-dropdown-label p-inputtext", "aria-haspopup", "listbox", 3, "disabled", "click", "input", "focus", "blur", 4, "ngIf"], ["class", "p-dropdown-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["type", "text", "aria-haspopup", "listbox", 1, "p-dropdown-label", "p-inputtext", 3, "disabled", "click", "input", "focus", "blur"], ["editableInput", ""], [1, "p-dropdown-clear-icon", "pi", "pi-times", 3, "click"], [3, "ngClass", "ngStyle"], ["class", "p-dropdown-header", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["itemslist", ""], ["class", "p-dropdown-empty-message", 4, "ngIf"], [1, "p-dropdown-header"], [1, "p-dropdown-filter-container", 3, "click"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], [1, "p-dropdown-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-dropdown-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], [3, "option", "selected", "label", "disabled", "template", "onClick"], [3, "ngStyle", "itemSize", "scrolledIndexChange", 4, "ngIf"], [3, "ngStyle", "itemSize", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "p-dropdown-empty-message"]], template: function Dropdown_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function Dropdown_Template_div_click_0_listener($event) { return ctx.onMouseclick($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function Dropdown_Template_input_focus_3_listener($event) { return ctx.onInputFocus($event); })("blur", function Dropdown_Template_input_blur_3_listener($event) { return ctx.onInputBlur($event); })("keydown", function Dropdown_Template_input_keydown_3_listener($event) { return ctx.onKeydown($event, true); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, Dropdown_span_5_Template, 3, 12, "span", 5);
        ɵngcc0.ɵɵtemplate(6, Dropdown_span_6_Template, 2, 4, "span", 6);
        ɵngcc0.ɵɵtemplate(7, Dropdown_input_7_Template, 2, 4, "input", 7);
        ɵngcc0.ɵɵtemplate(8, Dropdown_i_8_Template, 1, 0, "i", 8);
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelement(10, "span", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, Dropdown_div_11_Template, 9, 19, "div", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(17, _c13, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("autofocus", ctx.autofocus);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label != null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label == null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.editable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.value != null && ctx.showClear && !ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.overlayVisible);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dropdownIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc4.Tooltip, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, DropdownItem, ɵngcc5.CdkVirtualScrollViewport, ɵngcc5.CdkFixedSizeVirtualScroll, ɵngcc5.CdkVirtualForOf], styles: [".p-dropdown{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"], encapsulation: 2, data: { animation: [
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
Dropdown.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: FilterService }
];
Dropdown.propDecorators = {
    scrollHeight: [{ type: Input }],
    filter: [{ type: Input }],
    name: [{ type: Input }],
    style: [{ type: Input }],
    panelStyle: [{ type: Input }],
    styleClass: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    readonly: [{ type: Input }],
    required: [{ type: Input }],
    editable: [{ type: Input }],
    appendTo: [{ type: Input }],
    tabindex: [{ type: Input }],
    placeholder: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    filterLocale: [{ type: Input }],
    inputId: [{ type: Input }],
    selectId: [{ type: Input }],
    dataKey: [{ type: Input }],
    filterBy: [{ type: Input }],
    autofocus: [{ type: Input }],
    resetFilterOnHide: [{ type: Input }],
    dropdownIcon: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionDisabled: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    autoDisplayFirst: [{ type: Input }],
    group: [{ type: Input }],
    showClear: [{ type: Input }],
    emptyFilterMessage: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    itemSize: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    maxlength: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    autofocusFilter: [{ type: Input }],
    onChange: [{ type: Output }],
    onFilter: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onClick: [{ type: Output }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    filterViewChild: [{ type: ViewChild, args: ['filter',] }],
    accessibleViewChild: [{ type: ViewChild, args: ['in',] }],
    viewPort: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }],
    editableInputViewChild: [{ type: ViewChild, args: ['editableInput',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    disabled: [{ type: Input }],
    options: [{ type: Input }],
    filterValue: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Dropdown, [{
        type: Component,
        args: [{
                selector: 'p-dropdown',
                template: `
         <div #container [ngClass]="{'p-dropdown p-component':true,
            'p-disabled':disabled, 'p-dropdown-open':overlayVisible, 'p-focus':focused, 'p-dropdown-clearable': showClear && !disabled}"
            (click)="onMouseclick($event)" [ngStyle]="style" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #in [attr.id]="inputId" type="text" readonly (focus)="onInputFocus($event)" aria-haspopup="listbox"
                    aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" [attr.aria-labelledby]="ariaLabelledBy" (blur)="onInputBlur($event)" (keydown)="onKeydown($event, true)"
                    [disabled]="disabled" [attr.tabindex]="tabindex" [attr.autofocus]="autofocus">
            </div>
            <span [ngClass]="{'p-dropdown-label p-inputtext':true,'p-dropdown-label-empty':(label == null || label.length === 0)}" *ngIf="!editable && (label != null)" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <ng-container *ngIf="!selectedItemTemplate">{{label||'empty'}}</ng-container>
                <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: selectedOption}"></ng-container>
            </span>
            <span [ngClass]="{'p-dropdown-label p-inputtext p-placeholder':true,'p-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}" *ngIf="!editable && (label == null)">{{placeholder||'empty'}}</span>
            <input #editableInput type="text" [attr.maxlength]="maxlength" class="p-dropdown-label p-inputtext" *ngIf="editable" [disabled]="disabled" [attr.placeholder]="placeholder"
                aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" (click)="onEditableInputClick()" (input)="onEditableInputChange($event)" (focus)="onEditableInputFocus($event)" (blur)="onInputBlur($event)">
            <i class="p-dropdown-clear-icon pi pi-times" (click)="clear($event)" *ngIf="value != null && showClear && !disabled"></i>
            <div class="p-dropdown-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible">
                <span class="p-dropdown-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="'p-dropdown-panel p-component'" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" [ngStyle]="panelStyle" [class]="panelStyleClass">
                <div class="p-dropdown-header" *ngIf="filter" >
                    <div class="p-dropdown-filter-container" (click)="$event.stopPropagation()">
                        <input #filter type="text" autocomplete="off" [value]="filterValue||''" class="p-dropdown-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder"
                        (keydown.enter)="$event.preventDefault()" (keydown)="onKeydown($event, false)" (input)="onFilterInputChange($event)" [attr.aria-label]="ariaFilterLabel">
                        <span class="p-dropdown-filter-icon pi pi-search"></span>
                    </div>
                </div>
                <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <ul class="p-dropdown-items" [ngClass]="{'p-dropdown-virtualscroll': virtualScroll}" role="listbox">
                        <ng-container *ngIf="group">
                            <ng-template ngFor let-optgroup [ngForOf]="optionsToDisplay">
                                <li class="p-dropdown-item-group">
                                    <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                                </li>
                                <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup), selectedOption: selectedOption}"></ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-container *ngIf="!group">
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}"></ng-container>
                        </ng-container>
                        <ng-template #itemslist let-options let-selectedOption="selectedOption">
                            <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                                <ng-template ngFor let-option let-i="index" [ngForOf]="options">
                                    <p-dropdownItem [option]="option" [selected]="selectedOption == option" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)"
                                                    (onClick)="onItemClick($event)"
                                                    [template]="itemTemplate"></p-dropdownItem>
                                </ng-template>
                            </ng-container>
                            <ng-template #virtualScrollList>
                                <cdk-virtual-scroll-viewport (scrolledIndexChange)="scrollToSelectedVirtualScrollElement()" #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && optionsToDisplay && optionsToDisplay.length">
                                    <ng-container *cdkVirtualFor="let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                        <p-dropdownItem [option]="option" [selected]="selectedOption == option" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)"
                                                                   (onClick)="onItemClick($event)"
                                                                   [template]="itemTemplate"></p-dropdownItem>
                                    </ng-container>
                                </cdk-virtual-scroll-viewport>
                            </ng-template>
                        </ng-template>
                        <li *ngIf="filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))" class="p-dropdown-empty-message">{{emptyFilterMessage}}</li>
                    </ul>
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
                providers: [DROPDOWN_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-dropdown{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc3.FilterService }]; }, { scrollHeight: [{
            type: Input
        }], resetFilterOnHide: [{
            type: Input
        }], dropdownIcon: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], autoDisplayFirst: [{
            type: Input
        }], emptyFilterMessage: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], filterMatchMode: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipPositionStyle: [{
            type: Input
        }], autofocusFilter: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onFilter: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onClick: [{
            type: Output
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], filterValue: [{
            type: Input
        }], filter: [{
            type: Input
        }], name: [{
            type: Input
        }], style: [{
            type: Input
        }], panelStyle: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], readonly: [{
            type: Input
        }], required: [{
            type: Input
        }], editable: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], inputId: [{
            type: Input
        }], selectId: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionDisabled: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], group: [{
            type: Input
        }], showClear: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], filterViewChild: [{
            type: ViewChild,
            args: ['filter']
        }], accessibleViewChild: [{
            type: ViewChild,
            args: ['in']
        }], viewPort: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }], editableInputViewChild: [{
            type: ViewChild,
            args: ['editableInput']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class DropdownModule {
}
DropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DropdownModule });
DropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DropdownModule_Factory(t) { return new (t || DropdownModule)(); }, imports: [[CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropdownModule, { declarations: function () { return [Dropdown, DropdownItem]; }, imports: function () { return [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule]; }, exports: function () { return [Dropdown, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule],
                exports: [Dropdown, SharedModule, ScrollingModule],
                declarations: [Dropdown, DropdownItem]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DROPDOWN_VALUE_ACCESSOR, Dropdown, DropdownItem, DropdownModule };

//# sourceMappingURL=primeng-dropdown.js.map