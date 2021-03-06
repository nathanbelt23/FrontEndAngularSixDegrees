(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/button'),require('primeng/ripple'),require('@angular/cdk/scrolling'),require('primeng/api'),require('primeng/inputtext'),exports, require('@angular/core'), require('@angular/common'), require('@angular/animations'), require('primeng/inputtext'), require('primeng/button'), require('primeng/ripple'), require('primeng/api'), require('primeng/dom'), require('primeng/utils'), require('@angular/forms'), require('@angular/cdk/scrolling')) :
    typeof define === 'function' && define.amd ? define('primeng/autocomplete', ['@angular/core','@angular/common','primeng/button','primeng/ripple','@angular/cdk/scrolling','primeng/api','primeng/inputtext','exports', '@angular/core', '@angular/common', '@angular/animations', 'primeng/inputtext', 'primeng/button', 'primeng/ripple', 'primeng/api', 'primeng/dom', 'primeng/utils', '@angular/forms', '@angular/cdk/scrolling'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.button,global.primeng.ripple,global.ng.cdk.scrolling,global.primeng.api,global.primeng.inputtext,(global.primeng = global.primeng || {}, global.primeng.autocomplete = {}), global.ng.core, global.ng.common, global.ng.animations, global.primeng.inputtext, global.primeng.button, global.primeng.ripple, global.primeng.api, global.primeng.dom, global.primeng.utils, global.ng.forms, global.ng.cdk.scrolling));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,exports, core, common, animations, inputtext, button, ripple, api, dom, utils, forms, scrolling) { 
var _c0 = ["container"];
var _c1 = ["in"];
var _c2 = ["multiIn"];
var _c3 = ["multiContainer"];
var _c4 = ["ddBtn"];
var _c5 = function (a0, a1) { return { "p-autocomplete-dd-input": a0, "p-disabled": a1 }; };
function AutoComplete_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 7, 8);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_input_2_Template_input_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onInputClick($event); })("input", function AutoComplete_input_2_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onInput($event); })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onKeydown($event); })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onKeyup($event); })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onInputFocus($event); })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onInputBlur($event); })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onInputChange($event); })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onInputPaste($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.inputStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.inputStyle)("autocomplete", ctx_r1.autocomplete)("ngClass", ɵngcc0.ɵɵpureFunction2(23, _c5, ctx_r1.dropdown, ctx_r1.disabled))("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵattribute("type", ctx_r1.type)("id", ctx_r1.inputId)("required", ctx_r1.required)("name", ctx_r1.name)("aria-controls", ctx_r1.listId)("aria-expanded", ctx_r1.overlayVisible)("aria-activedescendant", "p-highlighted-option")("autofocus", ctx_r1.autofocus)("placeholder", ctx_r1.placeholder)("size", ctx_r1.size)("maxlength", ctx_r1.maxlength)("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required);
} }
function AutoComplete_ul_3_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_ul_3_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var val_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.resolveFieldData(val_r19));
} }
function AutoComplete_ul_3_li_2_span_4_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_ul_3_li_2_span_4_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); ɵngcc0.ɵɵnextContext(); var _r20 = ɵngcc0.ɵɵreference(1); var ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.removeItem(_r20); });
    ɵngcc0.ɵɵelementEnd();
} }
var _c6 = function (a0) { return { $implicit: a0 }; };
function AutoComplete_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 15, 16);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_ul_3_li_2_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_ul_3_li_2_span_3_Template, 2, 1, "span", 18);
    ɵngcc0.ɵɵtemplate(4, AutoComplete_ul_3_li_2_span_4_Template, 1, 0, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var val_r19 = ctx.$implicit;
    var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r17.selectedItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c6, val_r19));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r17.selectedItemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r17.disabled && !ctx_r17.readonly);
} }
var _c7 = function (a0, a1) { return { "p-disabled": a0, "p-focus": a1 }; };
function AutoComplete_ul_3_Template(rf, ctx) { if (rf & 1) {
    var _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ul", 9, 10);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_ul_3_Template_ul_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r28); var _r18 = ɵngcc0.ɵɵreference(5); return _r18.focus(); });
    ɵngcc0.ɵɵtemplate(2, AutoComplete_ul_3_li_2_Template, 5, 6, "li", 11);
    ɵngcc0.ɵɵelementStart(3, "li", 12);
    ɵngcc0.ɵɵelementStart(4, "input", 13, 14);
    ɵngcc0.ɵɵlistener("input", function AutoComplete_ul_3_Template_input_input_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onInput($event); })("click", function AutoComplete_ul_3_Template_input_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onInputClick($event); })("keydown", function AutoComplete_ul_3_Template_input_keydown_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onKeydown($event); })("keyup", function AutoComplete_ul_3_Template_input_keyup_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onKeyup($event); })("focus", function AutoComplete_ul_3_Template_input_focus_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.onInputFocus($event); })("blur", function AutoComplete_ul_3_Template_input_blur_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.onInputBlur($event); })("change", function AutoComplete_ul_3_Template_input_change_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.onInputChange($event); })("paste", function AutoComplete_ul_3_Template_input_paste_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onInputPaste($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(20, _c7, ctx_r2.disabled, ctx_r2.focus));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.value);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r2.inputStyleClass);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("autocomplete", ctx_r2.autocomplete)("ngStyle", ctx_r2.inputStyle);
    ɵngcc0.ɵɵattribute("type", ctx_r2.type)("id", ctx_r2.inputId)("placeholder", ctx_r2.value && ctx_r2.value.length ? null : ctx_r2.placeholder)("tabindex", ctx_r2.tabindex)("maxlength", ctx_r2.maxlength)("autofocus", ctx_r2.autofocus)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-controls", ctx_r2.listId)("aria-expanded", ctx_r2.overlayVisible)("aria-activedescendant", "p-highlighted-option");
} }
function AutoComplete_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 22);
} }
function AutoComplete_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 23, 24);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_button_5_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); var ctx_r38 = ɵngcc0.ɵɵnextContext(); return ctx_r38.handleDropdownClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r4.dropdownIcon)("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r4.tabindex);
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var optgroup_r46 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r47 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r47.getOptionGroupLabel(optgroup_r46) || "empty");
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 30);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_container_3_ng_template_1_span_1_Template, 2, 1, "span", 27);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    var optgroup_r46 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    var _r43 = ɵngcc0.ɵɵreference(6);
    var ctx_r45 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r45.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r45.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c6, optgroup_r46));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r43)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c6, ctx_r45.getOptionGroupChildren(optgroup_r46)));
} }
function AutoComplete_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_container_3_ng_template_1_Template, 4, 9, "ng-template", 29);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r41 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r41.suggestions);
} }
function AutoComplete_div_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r43 = ɵngcc0.ɵɵreference(6);
    var ctx_r42 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r43)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, ctx_r42.suggestions));
} }
function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r58 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r60 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r60.resolveFieldData(option_r58));
} }
function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c8 = function (a0) { return { "p-highlight": a0 }; };
var _c9 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r64 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 35);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r64); var option_r58 = ctx.$implicit; var ctx_r63 = ɵngcc0.ɵɵnextContext(4); return ctx_r63.selectItem(option_r58); });
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_container_0_li_1_span_1_Template, 2, 1, "span", 27);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_div_6_ng_template_5_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r58 = ctx.$implicit;
    var idx_r59 = ctx.index;
    var ctx_r57 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c8, option_r58 === ctx_r57.highlightOption))("id", ctx_r57.highlightOption == option_r58 ? "p-highlighted-option" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r57.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r57.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c9, option_r58, idx_r59));
} }
function AutoComplete_div_6_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_container_0_li_1_Template, 3, 10, "li", 34);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var suggestionsToDisplay_r52 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", suggestionsToDisplay_r52);
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r68 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r75 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r75.resolveFieldData(option_r68));
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c10 = function (a0) { return { "height": a0 }; };
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r79 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 39);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template_li_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r79); var option_r68 = ctx.$implicit; var ctx_r78 = ɵngcc0.ɵɵnextContext(5); return ctx_r78.selectItem(option_r68); });
    ɵngcc0.ɵɵtemplate(2, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_span_2_Template, 2, 1, "span", 27);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r68 = ctx.$implicit;
    var i_r69 = ctx.index;
    var ctx_r67 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c8, option_r68 === ctx_r67.highlightOption))("ngStyle", ɵngcc0.ɵɵpureFunction1(8, _c10, ctx_r67.itemSize + "px"))("id", ctx_r67.highlightOption == option_r68 ? "p-highlighted-option" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r67.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r67.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(10, _c9, option_r68, i_r69));
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 37);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template, 4, 13, "ng-container", 38);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var suggestionsToDisplay_r52 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r66 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c10, ctx_r66.scrollHeight))("itemSize", ctx_r66.itemSize);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", suggestionsToDisplay_r52);
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 2, 5, "cdk-virtual-scroll-viewport", 36);
} if (rf & 2) {
    var ctx_r55 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r55.virtualScroll && !ctx_r55.noResults);
} }
function AutoComplete_div_6_ng_template_5_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 40);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r56 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r56.emptyMessage);
} }
function AutoComplete_div_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, AutoComplete_div_6_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 31);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_template_1_Template, 1, 1, "ng-template", null, 32, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_template_5_li_3_Template, 2, 1, "li", 33);
} if (rf & 2) {
    var _r54 = ɵngcc0.ɵɵreference(2);
    var ctx_r44 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r44.virtualScroll)("ngIfElse", _r54);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r44.noResults && ctx_r44.emptyMessage);
} }
var _c11 = function () { return ["p-autocomplete-panel p-component"]; };
var _c12 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c13 = function (a1) { return { value: "visible", params: a1 }; };
var _c14 = function (a0) { return { "p-autocomplete-virtualscroll": a0 }; };
function AutoComplete_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r82 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0, 25);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function AutoComplete_div_6_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r82); var ctx_r81 = ɵngcc0.ɵɵnextContext(); return ctx_r81.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵelementStart(2, "ul", 26);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_container_3_Template, 2, 1, "ng-container", 27);
    ɵngcc0.ɵɵtemplate(4, AutoComplete_div_6_ng_container_4_Template, 2, 4, "ng-container", 27);
    ɵngcc0.ɵɵtemplate(5, AutoComplete_div_6_ng_template_5_Template, 4, 3, "ng-template", null, 28, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r5.panelStyleClass);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r5.virtualScroll ? "auto" : ctx_r5.scrollHeight);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(11, _c11))("ngStyle", ctx_r5.panelStyle)("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(15, _c13, ɵngcc0.ɵɵpureFunction2(12, _c12, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c14, ctx_r5.virtualScroll));
    ɵngcc0.ɵɵattribute("id", ctx_r5.listId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.group);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.group);
} }
var _c15 = function (a1, a2) { return { "p-autocomplete p-component": true, "p-autocomplete-dd": a1, "p-autocomplete-multiple": a2 }; };
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return AutoComplete; }),
        multi: true
    };
    var AutoComplete = /** @class */ (function () {
        function AutoComplete(el, renderer, cd, differs) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.differs = differs;
            this.minLength = 1;
            this.delay = 300;
            this.type = 'text';
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.dropdownIcon = "pi pi-chevron-down";
            this.unique = true;
            this.completeOnFocus = false;
            this.completeMethod = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUnselect = new core.EventEmitter();
            this.onFocus = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
            this.onDropdownClick = new core.EventEmitter();
            this.onClear = new core.EventEmitter();
            this.onKeyUp = new core.EventEmitter();
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.scrollHeight = '200px';
            this.dropdownMode = 'blank';
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
            this.autocomplete = 'off';
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
            this.overlayVisible = false;
            this.focus = false;
            this.inputFieldValue = null;
            this.differ = differs.find([]).create(null);
            this.listId = utils.UniqueComponentId() + '_list';
        }
        Object.defineProperty(AutoComplete.prototype, "suggestions", {
            get: function () {
                return this._suggestions;
            },
            set: function (val) {
                this._suggestions = val;
                this.handleSuggestionsChange();
            },
            enumerable: false,
            configurable: true
        });
        AutoComplete.prototype.ngAfterViewChecked = function () {
            var _this = this;
            //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
            if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
                setTimeout(function () {
                    if (_this.overlay) {
                        _this.alignOverlay();
                    }
                }, 1);
                this.suggestionsUpdated = false;
            }
            if (this.highlightOptionChanged) {
                setTimeout(function () {
                    if (_this.overlay && _this.itemsWrapper) {
                        var listItem = dom.DomHandler.findSingle(_this.overlay, 'li.p-highlight');
                        if (listItem) {
                            dom.DomHandler.scrollInView(_this.itemsWrapper, listItem);
                        }
                        if (_this.virtualScroll && _this.viewPort) {
                            var range = _this.viewPort.getRenderedRange();
                            _this.updateVirtualScrollSelectedIndex();
                            if (range.start > _this.virtualScrollSelectedIndex || range.end < _this.virtualScrollSelectedIndex) {
                                _this.viewPort.scrollToIndex(_this.virtualScrollSelectedIndex);
                            }
                        }
                    }
                }, 1);
                this.highlightOptionChanged = false;
            }
        };
        AutoComplete.prototype.handleSuggestionsChange = function () {
            if (this._suggestions != null && this.loading) {
                this.highlightOption = null;
                if (this._suggestions.length) {
                    this.noResults = false;
                    this.show();
                    this.suggestionsUpdated = true;
                    if (this.autoHighlight) {
                        this.highlightOption = this._suggestions[0];
                    }
                }
                else {
                    this.noResults = true;
                    if (this.emptyMessage) {
                        this.show();
                        this.suggestionsUpdated = true;
                    }
                    else {
                        this.hide();
                    }
                }
                this.loading = false;
            }
        };
        AutoComplete.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'group':
                        _this.groupTemplate = item.template;
                        break;
                    case 'selectedItem':
                        _this.selectedItemTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        AutoComplete.prototype.updateVirtualScrollSelectedIndex = function () {
            if (this.highlightOption && this.suggestions && this.suggestions.length) {
                this.virtualScrollSelectedIndex = this.findOptionIndex(this.highlightOption, this.suggestions);
            }
        };
        AutoComplete.prototype.writeValue = function (value) {
            this.value = value;
            this.filled = this.value && this.value != '';
            this.updateInputField();
            this.cd.markForCheck();
        };
        AutoComplete.prototype.getOptionGroupChildren = function (optionGroup) {
            return this.optionGroupChildren ? utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
        };
        AutoComplete.prototype.getOptionGroupLabel = function (optionGroup) {
            return this.optionGroupLabel ? utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : (optionGroup.label != undefined ? optionGroup.label : optionGroup);
        };
        AutoComplete.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        AutoComplete.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        AutoComplete.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        AutoComplete.prototype.onInput = function (event) {
            var _this = this;
            // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
            if (!this.inputKeyDown && dom.DomHandler.isIE()) {
                return;
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            var value = event.target.value;
            if (!this.multiple && !this.forceSelection) {
                this.onModelChange(value);
            }
            if (value.length === 0 && !this.multiple) {
                this.hide();
                this.onClear.emit(event);
                this.onModelChange(value);
            }
            if (value.length >= this.minLength) {
                this.timeout = setTimeout(function () {
                    _this.search(event, value);
                }, this.delay);
            }
            else {
                this.hide();
            }
            this.updateFilledState();
            this.inputKeyDown = false;
        };
        AutoComplete.prototype.onInputClick = function (event) {
            if (this.documentClickListener) {
                this.inputClick = true;
            }
        };
        AutoComplete.prototype.search = function (event, query) {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
                return;
            }
            this.loading = true;
            this.completeMethod.emit({
                originalEvent: event,
                query: query
            });
        };
        AutoComplete.prototype.selectItem = function (option, focus) {
            if (focus === void 0) { focus = true; }
            if (this.forceSelectionUpdateModelTimeout) {
                clearTimeout(this.forceSelectionUpdateModelTimeout);
                this.forceSelectionUpdateModelTimeout = null;
            }
            if (this.multiple) {
                this.multiInputEL.nativeElement.value = '';
                this.value = this.value || [];
                if (!this.isSelected(option) || !this.unique) {
                    this.value = __spread(this.value, [option]);
                    this.onModelChange(this.value);
                }
            }
            else {
                this.inputEL.nativeElement.value = this.resolveFieldData(option);
                this.value = option;
                this.onModelChange(this.value);
            }
            this.onSelect.emit(option);
            this.updateFilledState();
            if (focus) {
                this.itemClicked = true;
                this.focusInput();
            }
        };
        AutoComplete.prototype.show = function () {
            if (this.multiInputEL || this.inputEL) {
                var hasFocus = this.multiple ?
                    this.multiInputEL.nativeElement.ownerDocument.activeElement == this.multiInputEL.nativeElement :
                    this.inputEL.nativeElement.ownerDocument.activeElement == this.inputEL.nativeElement;
                if (!this.overlayVisible && hasFocus) {
                    this.overlayVisible = true;
                }
            }
        };
        AutoComplete.prototype.onOverlayAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.overlay = event.element;
                    this.itemsWrapper = this.virtualScroll ? dom.DomHandler.findSingle(this.overlay, '.cdk-virtual-scroll-viewport') : this.overlay;
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
                    }
                    this.alignOverlay();
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                    this.bindScrollListener();
                    this.onShow.emit(event);
                    break;
                case 'void':
                    this.onOverlayHide();
                    break;
            }
        };
        AutoComplete.prototype.appendOverlay = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.overlay);
                else
                    dom.DomHandler.appendChild(this.overlay, this.appendTo);
                if (!this.overlay.style.minWidth) {
                    this.overlay.style.minWidth = dom.DomHandler.getWidth(this.el.nativeElement.children[0]) + 'px';
                }
            }
        };
        AutoComplete.prototype.resolveFieldData = function (value) {
            var data = this.field ? utils.ObjectUtils.resolveFieldData(value, this.field) : value;
            return data !== (null || undefined) ? data : '';
        };
        AutoComplete.prototype.restoreOverlayAppend = function () {
            if (this.overlay && this.appendTo) {
                this.el.nativeElement.appendChild(this.overlay);
            }
        };
        AutoComplete.prototype.alignOverlay = function () {
            if (this.appendTo)
                dom.DomHandler.absolutePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
            else
                dom.DomHandler.relativePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
        };
        AutoComplete.prototype.hide = function () {
            this.overlayVisible = false;
            this.cd.markForCheck();
        };
        AutoComplete.prototype.handleDropdownClick = function (event) {
            if (!this.overlayVisible) {
                this.focusInput();
                var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
                if (this.dropdownMode === 'blank')
                    this.search(event, '');
                else if (this.dropdownMode === 'current')
                    this.search(event, queryValue);
                this.onDropdownClick.emit({
                    originalEvent: event,
                    query: queryValue
                });
            }
            else {
                this.hide();
            }
        };
        AutoComplete.prototype.focusInput = function () {
            if (this.multiple)
                this.multiInputEL.nativeElement.focus();
            else
                this.inputEL.nativeElement.focus();
        };
        AutoComplete.prototype.removeItem = function (item) {
            var itemIndex = dom.DomHandler.index(item);
            var removedValue = this.value[itemIndex];
            this.value = this.value.filter(function (val, i) { return i != itemIndex; });
            this.onModelChange(this.value);
            this.updateFilledState();
            this.onUnselect.emit(removedValue);
        };
        AutoComplete.prototype.onKeydown = function (event) {
            if (this.overlayVisible) {
                switch (event.which) {
                    //down
                    case 40:
                        if (this.group) {
                            var highlightItemIndex = this.findOptionGroupIndex(this.highlightOption, this.suggestions);
                            if (highlightItemIndex !== -1) {
                                var nextItemIndex_1 = highlightItemIndex.itemIndex + 1;
                                if (nextItemIndex_1 < (this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex]).length)) {
                                    this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex])[nextItemIndex_1];
                                    this.highlightOptionChanged = true;
                                }
                                else if (this.suggestions[highlightItemIndex.groupIndex + 1]) {
                                    this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex + 1])[0];
                                    this.highlightOptionChanged = true;
                                }
                            }
                            else {
                                this.highlightOption = this.getOptionGroupChildren(this.suggestions[0])[0];
                            }
                        }
                        else {
                            var highlightItemIndex = this.findOptionIndex(this.highlightOption, this.suggestions);
                            if (highlightItemIndex != -1) {
                                var nextItemIndex = highlightItemIndex + 1;
                                if (nextItemIndex != (this.suggestions.length)) {
                                    this.highlightOption = this.suggestions[nextItemIndex];
                                    this.highlightOptionChanged = true;
                                }
                            }
                            else {
                                this.highlightOption = this.suggestions[0];
                            }
                        }
                        event.preventDefault();
                        break;
                    //up
                    case 38:
                        if (this.group) {
                            var highlightItemIndex = this.findOptionGroupIndex(this.highlightOption, this.suggestions);
                            if (highlightItemIndex !== -1) {
                                var prevItemIndex = highlightItemIndex.itemIndex - 1;
                                if (prevItemIndex >= 0) {
                                    this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex])[prevItemIndex];
                                    this.highlightOptionChanged = true;
                                }
                                else if (prevItemIndex < 0) {
                                    var prevGroup = this.suggestions[highlightItemIndex.groupIndex - 1];
                                    if (prevGroup) {
                                        this.highlightOption = this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1];
                                        this.highlightOptionChanged = true;
                                    }
                                }
                            }
                        }
                        else {
                            var highlightItemIndex = this.findOptionIndex(this.highlightOption, this.suggestions);
                            if (highlightItemIndex > 0) {
                                var prevItemIndex = highlightItemIndex - 1;
                                this.highlightOption = this.suggestions[prevItemIndex];
                                this.highlightOptionChanged = true;
                            }
                        }
                        event.preventDefault();
                        break;
                    //enter
                    case 13:
                        if (this.highlightOption) {
                            this.selectItem(this.highlightOption);
                            this.hide();
                        }
                        event.preventDefault();
                        break;
                    //escape
                    case 27:
                        this.hide();
                        event.preventDefault();
                        break;
                    //tab
                    case 9:
                        if (this.highlightOption) {
                            this.selectItem(this.highlightOption);
                        }
                        this.hide();
                        break;
                }
            }
            else {
                if (event.which === 40 && this.suggestions) {
                    this.search(event, event.target.value);
                }
            }
            if (this.multiple) {
                switch (event.which) {
                    //backspace
                    case 8:
                        if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                            this.value = __spread(this.value);
                            var removedValue = this.value.pop();
                            this.onModelChange(this.value);
                            this.updateFilledState();
                            this.onUnselect.emit(removedValue);
                        }
                        break;
                }
            }
            this.inputKeyDown = true;
        };
        AutoComplete.prototype.onKeyup = function (event) {
            this.onKeyUp.emit(event);
        };
        AutoComplete.prototype.onInputFocus = function (event) {
            if (!this.itemClicked && this.completeOnFocus) {
                var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
                this.search(event, queryValue);
            }
            this.focus = true;
            this.onFocus.emit(event);
            this.itemClicked = false;
        };
        AutoComplete.prototype.onInputBlur = function (event) {
            this.focus = false;
            this.onModelTouched();
            this.onBlur.emit(event);
        };
        AutoComplete.prototype.onInputChange = function (event) {
            var e_1, _a;
            var _this = this;
            if (this.forceSelection) {
                var valid = false;
                var inputValue = event.target.value.trim();
                if (this.suggestions) {
                    var _loop_1 = function (suggestion) {
                        var itemValue = this_1.field ? utils.ObjectUtils.resolveFieldData(suggestion, this_1.field) : suggestion;
                        if (itemValue && inputValue === itemValue.trim()) {
                            valid = true;
                            this_1.forceSelectionUpdateModelTimeout = setTimeout(function () {
                                _this.selectItem(suggestion, false);
                            }, 250);
                            return "break";
                        }
                    };
                    var this_1 = this;
                    try {
                        for (var _b = __values(this.suggestions), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var suggestion = _c.value;
                            var state_1 = _loop_1(suggestion);
                            if (state_1 === "break")
                                break;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                if (!valid) {
                    if (this.multiple) {
                        this.multiInputEL.nativeElement.value = '';
                    }
                    else {
                        this.value = null;
                        this.inputEL.nativeElement.value = '';
                    }
                    this.onClear.emit(event);
                    this.onModelChange(this.value);
                    this.updateFilledState();
                }
            }
        };
        AutoComplete.prototype.onInputPaste = function (event) {
            this.onKeydown(event);
        };
        AutoComplete.prototype.isSelected = function (val) {
            var selected = false;
            if (this.value && this.value.length) {
                for (var i = 0; i < this.value.length; i++) {
                    if (utils.ObjectUtils.equals(this.value[i], val, this.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
            return selected;
        };
        AutoComplete.prototype.findOptionIndex = function (option, suggestions) {
            var index = -1;
            if (suggestions) {
                for (var i = 0; i < suggestions.length; i++) {
                    if (utils.ObjectUtils.equals(option, suggestions[i])) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        AutoComplete.prototype.findOptionGroupIndex = function (val, opts) {
            var groupIndex, itemIndex;
            if (opts) {
                for (var i = 0; i < opts.length; i++) {
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
        };
        AutoComplete.prototype.updateFilledState = function () {
            if (this.multiple)
                this.filled = (this.value && this.value.length) || (this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '');
            else
                this.filled = (this.inputFieldValue && this.inputFieldValue != '') || (this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '');
            ;
        };
        AutoComplete.prototype.updateInputField = function () {
            var formattedValue = this.resolveFieldData(this.value);
            this.inputFieldValue = formattedValue;
            if (this.inputEL && this.inputEL.nativeElement) {
                this.inputEL.nativeElement.value = formattedValue;
            }
            this.updateFilledState();
        };
        AutoComplete.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'click', function (event) {
                    if (event.which === 3) {
                        return;
                    }
                    if (!_this.inputClick && !_this.isDropdownClick(event)) {
                        _this.hide();
                    }
                    _this.inputClick = false;
                    _this.cd.markForCheck();
                });
            }
        };
        AutoComplete.prototype.isDropdownClick = function (event) {
            if (this.dropdown) {
                var target = event.target;
                return (target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement);
            }
            else {
                return false;
            }
        };
        AutoComplete.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        AutoComplete.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        AutoComplete.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        AutoComplete.prototype.onWindowResize = function () {
            this.hide();
        };
        AutoComplete.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.containerEL.nativeElement, function () {
                    if (_this.overlayVisible) {
                        _this.hide();
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        AutoComplete.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        AutoComplete.prototype.onOverlayHide = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
            this.onHide.emit();
        };
        AutoComplete.prototype.ngOnDestroy = function () {
            if (this.forceSelectionUpdateModelTimeout) {
                clearTimeout(this.forceSelectionUpdateModelTimeout);
                this.forceSelectionUpdateModelTimeout = null;
            }
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.restoreOverlayAppend();
            this.onOverlayHide();
        };
AutoComplete.ɵfac = function AutoComplete_Factory(t) { return new (t || AutoComplete)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
AutoComplete.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AutoComplete, selectors: [["p-autoComplete"]], contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function AutoComplete_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.multiInputEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.multiContainerEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownButton = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewPort = _t.first);
    } }, hostVars: 4, hostBindings: function AutoComplete_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus && !ctx.disabled || ctx.overlayVisible);
    } }, inputs: { minLength: "minLength", delay: "delay", type: "type", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", dropdownIcon: "dropdownIcon", unique: "unique", completeOnFocus: "completeOnFocus", scrollHeight: "scrollHeight", dropdownMode: "dropdownMode", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autocomplete: "autocomplete", suggestions: "suggestions", disabled: "disabled", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", inputStyle: "inputStyle", inputId: "inputId", inputStyleClass: "inputStyleClass", placeholder: "placeholder", readonly: "readonly", virtualScroll: "virtualScroll", itemSize: "itemSize", maxlength: "maxlength", name: "name", required: "required", size: "size", appendTo: "appendTo", autoHighlight: "autoHighlight", forceSelection: "forceSelection", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", group: "group", field: "field", dropdown: "dropdown", multiple: "multiple", tabindex: "tabindex", dataKey: "dataKey", emptyMessage: "emptyMessage", autofocus: "autofocus", optionGroupChildren: "optionGroupChildren", optionGroupLabel: "optionGroupLabel" }, outputs: { completeMethod: "completeMethod", onSelect: "onSelect", onUnselect: "onUnselect", onFocus: "onFocus", onBlur: "onBlur", onDropdownClick: "onDropdownClick", onClear: "onClear", onKeyUp: "onKeyUp", onShow: "onShow", onHide: "onHide" }, features: [ɵngcc0.ɵɵProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR])], decls: 7, vars: 12, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["class", "p-autocomplete-input p-inputtext p-component", "aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "ngStyle", "class", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste", 4, "ngIf"], ["class", "p-autocomplete-multiple-container p-component p-inputtext", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-autocomplete-loader pi pi-spinner pi-spin", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown", "pRipple", "", 3, "icon", "disabled", "click", 4, "ngIf"], [3, "ngClass", "max-height", "ngStyle", "class", 4, "ngIf"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 1, "p-autocomplete-input", "p-inputtext", "p-component", 3, "ngStyle", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste"], ["in", ""], [1, "p-autocomplete-multiple-container", "p-component", "p-inputtext", 3, "ngClass", "click"], ["multiContainer", ""], ["class", "p-autocomplete-token", 4, "ngFor", "ngForOf"], [1, "p-autocomplete-input-token"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "disabled", "readonly", "autocomplete", "ngStyle", "input", "click", "keydown", "keyup", "focus", "blur", "change", "paste"], ["multiIn", ""], [1, "p-autocomplete-token"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], ["class", "p-autocomplete-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-autocomplete-token-label"], [1, "p-autocomplete-token-icon", "pi", "pi-times-circle", 3, "click"], [1, "p-autocomplete-loader", "pi", "pi-spinner", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", 3, "icon", "disabled", "click"], ["ddBtn", ""], ["panel", ""], ["role", "listbox", 1, "p-autocomplete-items", 3, "ngClass"], [4, "ngIf"], ["itemslist", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-autocomplete-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-autocomplete-emptymessage p-autocomplete-item", 4, "ngIf"], ["role", "option", "class", "p-autocomplete-item", "pRipple", "", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "id", "click"], [3, "ngStyle", "itemSize", 4, "ngIf"], [3, "ngStyle", "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "ngStyle", "id", "click"], [1, "p-autocomplete-emptymessage", "p-autocomplete-item"]], template: function AutoComplete_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0, 1);
        ɵngcc0.ɵɵtemplate(2, AutoComplete_input_2_Template, 2, 26, "input", 2);
        ɵngcc0.ɵɵtemplate(3, AutoComplete_ul_3_Template, 6, 23, "ul", 3);
        ɵngcc0.ɵɵtemplate(4, AutoComplete_i_4_Template, 1, 0, "i", 4);
        ɵngcc0.ɵɵtemplate(5, AutoComplete_button_5_Template, 2, 3, "button", 5);
        ɵngcc0.ɵɵtemplate(6, AutoComplete_div_6_Template, 7, 19, "div", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c15, ctx.dropdown, ctx.multiple))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.multiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.multiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dropdown);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.ButtonDirective, ɵngcc3.Ripple, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf], styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{align-items:center;cursor:text;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"], encapsulation: 2, data: { animation: [
            animations.trigger('overlayAnimation', [
                animations.transition(':enter', [
                    animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animations.animate('{{showTransitionParams}}')
                ]),
                animations.transition(':leave', [
                    animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutoComplete, [{
        type: core.Component,
        args: [{
                selector: 'p-autoComplete',
                template: "\n        <span #container [ngClass]=\"{'p-autocomplete p-component':true,'p-autocomplete-dd':dropdown,'p-autocomplete-multiple':multiple}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <input *ngIf=\"!multiple\" #in [attr.type]=\"type\" [attr.id]=\"inputId\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [autocomplete]=\"autocomplete\" [attr.required]=\"required\" [attr.name]=\"name\"\n            class=\"p-autocomplete-input p-inputtext p-component\" [ngClass]=\"{'p-autocomplete-dd-input':dropdown,'p-disabled': disabled}\" [value]=\"inputFieldValue\" aria-autocomplete=\"list\" [attr.aria-controls]=\"listId\" role=\"searchbox\" [attr.aria-expanded]=\"overlayVisible\" aria-haspopup=\"true\" [attr.aria-activedescendant]=\"'p-highlighted-option'\"\n            (click)=\"onInputClick($event)\" (input)=\"onInput($event)\" (keydown)=\"onKeydown($event)\" (keyup)=\"onKeyup($event)\" [attr.autofocus]=\"autofocus\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\"\n            [attr.placeholder]=\"placeholder\" [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [readonly]=\"readonly\" [disabled]=\"disabled\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-required]=\"required\"\n            ><ul *ngIf=\"multiple\" #multiContainer class=\"p-autocomplete-multiple-container p-component p-inputtext\" [ngClass]=\"{'p-disabled':disabled,'p-focus':focus}\" (click)=\"multiIn.focus()\">\n                <li #token *ngFor=\"let val of value\" class=\"p-autocomplete-token\">\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: val}\"></ng-container>\n                    <span *ngIf=\"!selectedItemTemplate\" class=\"p-autocomplete-token-label\">{{resolveFieldData(val)}}</span>\n                    <span  class=\"p-autocomplete-token-icon pi pi-times-circle\" (click)=\"removeItem(token)\" *ngIf=\"!disabled && !readonly\"></span>\n                </li>\n                <li class=\"p-autocomplete-input-token\">\n                    <input #multiIn [attr.type]=\"type\" [attr.id]=\"inputId\" [disabled]=\"disabled\" [attr.placeholder]=\"(value&&value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" [attr.maxlength]=\"maxlength\" (input)=\"onInput($event)\"  (click)=\"onInputClick($event)\"\n                            (keydown)=\"onKeydown($event)\" [readonly]=\"readonly\" (keyup)=\"onKeyup($event)\" [attr.autofocus]=\"autofocus\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\" [autocomplete]=\"autocomplete\"\n                            [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-required]=\"required\"\n                            aria-autocomplete=\"list\" [attr.aria-controls]=\"listId\" role=\"searchbox\" [attr.aria-expanded]=\"overlayVisible\" aria-haspopup=\"true\" [attr.aria-activedescendant]=\"'p-highlighted-option'\">\n                </li>\n            </ul>\n            <i *ngIf=\"loading\" class=\"p-autocomplete-loader pi pi-spinner pi-spin\"></i><button #ddBtn type=\"button\" pButton [icon]=\"dropdownIcon\" class=\"p-autocomplete-dropdown\" [disabled]=\"disabled\" pRipple\n                (click)=\"handleDropdownClick($event)\" *ngIf=\"dropdown\" [attr.tabindex]=\"tabindex\"></button>\n            <div #panel *ngIf=\"overlayVisible\" [ngClass]=\"['p-autocomplete-panel p-component']\" [style.max-height]=\"virtualScroll ? 'auto' : scrollHeight\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\"\n                [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n                <ul role=\"listbox\" [attr.id]=\"listId\" class=\"p-autocomplete-items\" [ngClass]=\"{'p-autocomplete-virtualscroll': virtualScroll}\">\n                    <ng-container *ngIf=\"group\">\n                        <ng-template ngFor let-optgroup [ngForOf]=\"suggestions\">\n                            <li class=\"p-autocomplete-item-group\">\n                                <span *ngIf=\"!groupTemplate\">{{getOptionGroupLabel(optgroup)||'empty'}}</span>\n                                <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                            </li>\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}\"></ng-container>\n                        </ng-template>\n                    </ng-container>\n                    <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: suggestions}\"></ng-container>\n                    </ng-container>\n                    <ng-template #itemslist let-suggestionsToDisplay>\n                        <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                            <li role=\"option\" *ngFor=\"let option of suggestionsToDisplay; let idx = index\" class=\"p-autocomplete-item\" pRipple [ngClass]=\"{'p-highlight': (option === highlightOption)}\" [id]=\"highlightOption == option ? 'p-highlighted-option':''\" (click)=\"selectItem(option)\">\n                                <span *ngIf=\"!itemTemplate\">{{resolveFieldData(option)}}</span>\n                                <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: idx}\"></ng-container>\n                            </li>\n                        </ng-container>\n                        <ng-template #virtualScrollList>\n                            <cdk-virtual-scroll-viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && !noResults\">\n                                <ng-container *cdkVirtualFor=\"let option of suggestionsToDisplay; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                    <li role=\"option\" class=\"p-autocomplete-item\" pRipple [ngClass]=\"{'p-highlight': (option === highlightOption)}\" [ngStyle]=\"{'height': itemSize + 'px'}\" [id]=\"highlightOption == option ? 'p-highlighted-option':''\" (click)=\"selectItem(option)\">\n                                        <span *ngIf=\"!itemTemplate\">{{resolveFieldData(option)}}</span>\n                                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: i}\"></ng-container>\n                                    </li>\n                                </ng-container>\n                            </cdk-virtual-scroll-viewport>\n                        </ng-template>\n                        <li *ngIf=\"noResults && emptyMessage\" class=\"p-autocomplete-emptymessage p-autocomplete-item\">{{emptyMessage}}</li>\n                    </ng-template>\n                </ul>\n            </div>\n        </span>\n    ",
                animations: [
                    animations.trigger('overlayAnimation', [
                        animations.transition(':enter', [
                            animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animations.animate('{{showTransitionParams}}')
                        ]),
                        animations.transition(':leave', [
                            animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                        ])
                    ])
                ],
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': '(focus && !disabled) || overlayVisible'
                },
                providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{align-items:center;cursor:text;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.IterableDiffers }]; }, { minLength: [{
            type: core.Input
        }], delay: [{
            type: core.Input
        }], type: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], dropdownIcon: [{
            type: core.Input
        }], unique: [{
            type: core.Input
        }], completeOnFocus: [{
            type: core.Input
        }], completeMethod: [{
            type: core.Output
        }], onSelect: [{
            type: core.Output
        }], onUnselect: [{
            type: core.Output
        }], onFocus: [{
            type: core.Output
        }], onBlur: [{
            type: core.Output
        }], onDropdownClick: [{
            type: core.Output
        }], onClear: [{
            type: core.Output
        }], onKeyUp: [{
            type: core.Output
        }], onShow: [{
            type: core.Output
        }], onHide: [{
            type: core.Output
        }], scrollHeight: [{
            type: core.Input
        }], dropdownMode: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], autocomplete: [{
            type: core.Input
        }], suggestions: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], panelStyle: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], panelStyleClass: [{
            type: core.Input
        }], inputStyle: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], inputStyleClass: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], virtualScroll: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], maxlength: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], autoHighlight: [{
            type: core.Input
        }], forceSelection: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], group: [{
            type: core.Input
        }], field: [{
            type: core.Input
        }], dropdown: [{
            type: core.Input
        }], multiple: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], dataKey: [{
            type: core.Input
        }], emptyMessage: [{
            type: core.Input
        }], autofocus: [{
            type: core.Input
        }], optionGroupChildren: [{
            type: core.Input
        }], optionGroupLabel: [{
            type: core.Input
        }], containerEL: [{
            type: core.ViewChild,
            args: ['container']
        }], inputEL: [{
            type: core.ViewChild,
            args: ['in']
        }], multiInputEL: [{
            type: core.ViewChild,
            args: ['multiIn']
        }], multiContainerEL: [{
            type: core.ViewChild,
            args: ['multiContainer']
        }], dropdownButton: [{
            type: core.ViewChild,
            args: ['ddBtn']
        }], viewPort: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return AutoComplete;
    }());
    AutoComplete.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: core.IterableDiffers }
    ]; };
    AutoComplete.propDecorators = {
        minLength: [{ type: core.Input }],
        delay: [{ type: core.Input }],
        style: [{ type: core.Input }],
        panelStyle: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        panelStyleClass: [{ type: core.Input }],
        inputStyle: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        inputStyleClass: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        virtualScroll: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        maxlength: [{ type: core.Input }],
        name: [{ type: core.Input }],
        required: [{ type: core.Input }],
        size: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        autoHighlight: [{ type: core.Input }],
        forceSelection: [{ type: core.Input }],
        type: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        dropdownIcon: [{ type: core.Input }],
        unique: [{ type: core.Input }],
        group: [{ type: core.Input }],
        completeOnFocus: [{ type: core.Input }],
        completeMethod: [{ type: core.Output }],
        onSelect: [{ type: core.Output }],
        onUnselect: [{ type: core.Output }],
        onFocus: [{ type: core.Output }],
        onBlur: [{ type: core.Output }],
        onDropdownClick: [{ type: core.Output }],
        onClear: [{ type: core.Output }],
        onKeyUp: [{ type: core.Output }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        field: [{ type: core.Input }],
        scrollHeight: [{ type: core.Input }],
        dropdown: [{ type: core.Input }],
        dropdownMode: [{ type: core.Input }],
        multiple: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        dataKey: [{ type: core.Input }],
        emptyMessage: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        autofocus: [{ type: core.Input }],
        autocomplete: [{ type: core.Input }],
        optionGroupChildren: [{ type: core.Input }],
        optionGroupLabel: [{ type: core.Input }],
        containerEL: [{ type: core.ViewChild, args: ['container',] }],
        inputEL: [{ type: core.ViewChild, args: ['in',] }],
        multiInputEL: [{ type: core.ViewChild, args: ['multiIn',] }],
        multiContainerEL: [{ type: core.ViewChild, args: ['multiContainer',] }],
        dropdownButton: [{ type: core.ViewChild, args: ['ddBtn',] }],
        viewPort: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        suggestions: [{ type: core.Input }]
    };
    var AutoCompleteModule = /** @class */ (function () {
        function AutoCompleteModule() {
        }
AutoCompleteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AutoCompleteModule });
AutoCompleteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AutoCompleteModule_Factory(t) { return new (t || AutoCompleteModule)(); }, imports: [[common.CommonModule, inputtext.InputTextModule, button.ButtonModule, api.SharedModule, ripple.RippleModule, scrolling.ScrollingModule], ɵngcc5.SharedModule, ɵngcc4.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AutoCompleteModule, { declarations: [AutoComplete], imports: [ɵngcc1.CommonModule, ɵngcc6.InputTextModule, ɵngcc2.ButtonModule, ɵngcc5.SharedModule, ɵngcc3.RippleModule, ɵngcc4.ScrollingModule], exports: [AutoComplete, ɵngcc5.SharedModule, ɵngcc4.ScrollingModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutoCompleteModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, inputtext.InputTextModule, button.ButtonModule, api.SharedModule, ripple.RippleModule, scrolling.ScrollingModule],
                exports: [AutoComplete, api.SharedModule, scrolling.ScrollingModule],
                declarations: [AutoComplete]
            }]
    }], function () { return []; }, null); })();
        return AutoCompleteModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AUTOCOMPLETE_VALUE_ACCESSOR = AUTOCOMPLETE_VALUE_ACCESSOR;
    exports.AutoComplete = AutoComplete;
    exports.AutoCompleteModule = AutoCompleteModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-autocomplete.umd.js.map