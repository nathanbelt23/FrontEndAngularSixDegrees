(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/api'),require('@angular/cdk/drag-drop'),require('@angular/common'),require('primeng/button'),require('primeng/ripple'),exports, require('@angular/core'), require('@angular/common'), require('primeng/button'), require('primeng/api'), require('primeng/dom'), require('primeng/ripple'), require('@angular/cdk/drag-drop'), require('primeng/utils')) :
    typeof define === 'function' && define.amd ? define('primeng/picklist', ['@angular/core','primeng/api','@angular/cdk/drag-drop','@angular/common','primeng/button','primeng/ripple','exports', '@angular/core', '@angular/common', 'primeng/button', 'primeng/api', 'primeng/dom', 'primeng/ripple', '@angular/cdk/drag-drop', 'primeng/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.api,global.ng.cdk.dragDrop,global.ng.common,global.primeng.button,global.primeng.ripple,(global.primeng = global.primeng || {}, global.primeng.picklist = {}), global.ng.core, global.ng.common, global.primeng.button, global.primeng.api, global.primeng.dom, global.primeng.ripple, global.ng.cdk.dragDrop, global.primeng.utils));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, core, common, button, api, dom, ripple, dragDrop, utils) { 
var _c0 = ["sourcelist"];
var _c1 = ["targetlist"];
var _c2 = ["sourceFilter"];
var _c3 = ["targetFilter"];
function PickList_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵelementStart(1, "button", 19);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r12.moveUp(_r3, ctx_r12.source, ctx_r12.selectedItemsSource, ctx_r12.onSourceReorder, ctx_r12.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 20);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r14 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r14.moveTop(_r3, ctx_r14.source, ctx_r14.selectedItemsSource, ctx_r14.onSourceReorder, ctx_r14.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 21);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r15 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r15.moveDown(_r3, ctx_r15.source, ctx_r15.selectedItemsSource, ctx_r15.onSourceReorder, ctx_r15.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 22);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r16 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r16.moveBottom(_r3, ctx_r16.source, ctx_r16.selectedItemsSource, ctx_r16.onSourceReorder, ctx_r16.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
} }
function PickList_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵelementStart(1, "div", 24);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.sourceHeader);
} }
function PickList_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵelementStart(2, "input", 27, 28);
    ɵngcc0.ɵɵlistener("keyup", function PickList_div_4_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onFilter($event, ctx_r18.source, ctx_r18.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r2.sourceFilterPlaceholder)("aria-label", ctx_r2.ariaSourceFilterLabel);
} }
function PickList_ng_template_7_li_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c4 = function (a1, a2) { return { "p-picklist-item": true, "p-highlight": a1, "p-disabled": a2 }; };
var _c5 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function PickList_ng_template_7_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵlistener("click", function PickList_ng_template_7_li_0_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var item_r20 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onItemClick($event, item_r20, ctx_r25.selectedItemsSource, ctx_r25.onSourceSelect); })("dblclick", function PickList_ng_template_7_li_0_Template_li_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onSourceItemDblClick(); })("touchend", function PickList_ng_template_7_li_0_Template_li_touchend_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r29 = ɵngcc0.ɵɵnextContext(2); return ctx_r29.onItemTouchEnd(); })("keydown", function PickList_ng_template_7_li_0_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var item_r20 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onItemKeydown($event, item_r20, ctx_r30.selectedItemsSource, ctx_r30.onSourceSelect); });
    ɵngcc0.ɵɵtemplate(1, PickList_ng_template_7_li_0_ng_container_1_Template, 1, 0, "ng-container", 32);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r32 = ɵngcc0.ɵɵnextContext();
    var item_r20 = ctx_r32.$implicit;
    var i_r21 = ctx_r32.index;
    var ctx_r23 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c4, ctx_r23.isSelected(item_r20, ctx_r23.selectedItemsSource), ctx_r23.disabled))("cdkDragData", item_r20)("cdkDragDisabled", !ctx_r23.dragdrop);
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r23.isSelected(item_r20, ctx_r23.selectedItemsSource));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r23.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c5, item_r20, i_r21));
} }
function PickList_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PickList_ng_template_7_li_0_Template, 2, 12, "li", 30);
} if (rf & 2) {
    var item_r20 = ctx.$implicit;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.isItemVisible(item_r20, ctx_r4.SOURCE_LIST));
} }
function PickList_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 33);
    ɵngcc0.ɵɵtemplate(2, PickList_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 34);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.emptyMessageSourceTemplate);
} }
function PickList_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r34 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r34.targetHeader);
} }
function PickList_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtemplate(1, PickList_div_15_div_1_Template, 2, 1, "div", 35);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.targetHeader);
} }
function PickList_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵelementStart(2, "input", 27, 36);
    ɵngcc0.ɵɵlistener("keyup", function PickList_div_16_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); var ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onFilter($event, ctx_r36.target, ctx_r36.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r7.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r7.targetFilterPlaceholder)("aria-label", ctx_r7.ariaTargetFilterLabel);
} }
function PickList_ng_template_19_li_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_template_19_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r44 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵlistener("click", function PickList_ng_template_19_li_0_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); var item_r38 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r43 = ɵngcc0.ɵɵnextContext(); return ctx_r43.onItemClick($event, item_r38, ctx_r43.selectedItemsTarget, ctx_r43.onTargetSelect); })("dblclick", function PickList_ng_template_19_li_0_Template_li_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); var ctx_r46 = ɵngcc0.ɵɵnextContext(2); return ctx_r46.onTargetItemDblClick(); })("touchend", function PickList_ng_template_19_li_0_Template_li_touchend_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); var ctx_r47 = ɵngcc0.ɵɵnextContext(2); return ctx_r47.onItemTouchEnd(); })("keydown", function PickList_ng_template_19_li_0_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); var item_r38 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r48 = ɵngcc0.ɵɵnextContext(); return ctx_r48.onItemKeydown($event, item_r38, ctx_r48.selectedItemsTarget, ctx_r48.onTargetSelect); });
    ɵngcc0.ɵɵtemplate(1, PickList_ng_template_19_li_0_ng_container_1_Template, 1, 0, "ng-container", 32);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r50 = ɵngcc0.ɵɵnextContext();
    var item_r38 = ctx_r50.$implicit;
    var i_r39 = ctx_r50.index;
    var ctx_r41 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c4, ctx_r41.isSelected(item_r38, ctx_r41.selectedItemsTarget), ctx_r41.disabled))("cdkDragData", item_r38)("cdkDragDisabled", !ctx_r41.dragdrop);
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r41.isSelected(item_r38, ctx_r41.selectedItemsTarget));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r41.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c5, item_r38, i_r39));
} }
function PickList_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PickList_ng_template_19_li_0_Template, 2, 12, "li", 30);
} if (rf & 2) {
    var item_r38 = ctx.$implicit;
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.isItemVisible(item_r38, ctx_r9.TARGET_LIST));
} }
function PickList_ng_container_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 33);
    ɵngcc0.ɵɵtemplate(2, PickList_ng_container_20_ng_container_2_Template, 1, 0, "ng-container", 34);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.emptyMessageTargetTemplate);
} }
function PickList_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 37);
    ɵngcc0.ɵɵelementStart(1, "button", 19);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r53); var ctx_r52 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r52.moveUp(_r8, ctx_r52.target, ctx_r52.selectedItemsTarget, ctx_r52.onTargetReorder, ctx_r52.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 20);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r53); var ctx_r54 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r54.moveTop(_r8, ctx_r54.target, ctx_r54.selectedItemsTarget, ctx_r54.onTargetReorder, ctx_r54.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 21);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r53); var ctx_r55 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r55.moveDown(_r8, ctx_r55.target, ctx_r55.selectedItemsTarget, ctx_r55.onTargetReorder, ctx_r55.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 22);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r53); var ctx_r56 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r56.moveBottom(_r8, ctx_r56.target, ctx_r56.selectedItemsTarget, ctx_r56.onTargetReorder, ctx_r56.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
} }
'use strict';

    var PickList = /** @class */ (function () {
        function PickList(el, cd, filterService) {
            this.el = el;
            this.cd = cd;
            this.filterService = filterService;
            this.trackBy = function (index, item) { return item; };
            this.showSourceFilter = true;
            this.showTargetFilter = true;
            this.metaKeySelection = true;
            this.dragdrop = false;
            this.showSourceControls = true;
            this.showTargetControls = true;
            this.disabled = false;
            this.filterMatchMode = "contains";
            this.breakpoint = "960px";
            this.onMoveToSource = new core.EventEmitter();
            this.onMoveAllToSource = new core.EventEmitter();
            this.onMoveAllToTarget = new core.EventEmitter();
            this.onMoveToTarget = new core.EventEmitter();
            this.onSourceReorder = new core.EventEmitter();
            this.onTargetReorder = new core.EventEmitter();
            this.onSourceSelect = new core.EventEmitter();
            this.onTargetSelect = new core.EventEmitter();
            this.onSourceFilter = new core.EventEmitter();
            this.onTargetFilter = new core.EventEmitter();
            this.selectedItemsSource = [];
            this.selectedItemsTarget = [];
            this.id = utils.UniqueComponentId();
            this.SOURCE_LIST = -1;
            this.TARGET_LIST = 1;
        }
        PickList.prototype.ngOnInit = function () {
            if (this.responsive) {
                this.createStyle();
            }
        };
        PickList.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'emptymessagesource':
                        _this.emptyMessageSourceTemplate = item.template;
                        break;
                    case 'emptymessagetarget':
                        _this.emptyMessageTargetTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        PickList.prototype.ngAfterViewChecked = function () {
            if (this.movedUp || this.movedDown) {
                var listItems = dom.DomHandler.find(this.reorderedListElement, 'li.p-highlight');
                var listItem = void 0;
                if (this.movedUp)
                    listItem = listItems[0];
                else
                    listItem = listItems[listItems.length - 1];
                dom.DomHandler.scrollInView(this.reorderedListElement, listItem);
                this.movedUp = false;
                this.movedDown = false;
                this.reorderedListElement = null;
            }
        };
        PickList.prototype.onItemClick = function (event, item, selectedItems, callback) {
            if (this.disabled) {
                return;
            }
            var index = this.findIndexInSelection(item, selectedItems);
            var selected = (index != -1);
            var metaSelection = this.itemTouched ? false : this.metaKeySelection;
            if (metaSelection) {
                var metaKey = (event.metaKey || event.ctrlKey || event.shiftKey);
                if (selected && metaKey) {
                    selectedItems.splice(index, 1);
                }
                else {
                    if (!metaKey) {
                        selectedItems.length = 0;
                    }
                    selectedItems.push(item);
                }
            }
            else {
                if (selected)
                    selectedItems.splice(index, 1);
                else
                    selectedItems.push(item);
            }
            callback.emit({ originalEvent: event, items: selectedItems });
            this.itemTouched = false;
        };
        PickList.prototype.onSourceItemDblClick = function () {
            if (this.disabled) {
                return;
            }
            this.moveRight();
        };
        PickList.prototype.onTargetItemDblClick = function () {
            if (this.disabled) {
                return;
            }
            this.moveLeft();
        };
        PickList.prototype.onFilter = function (event, data, listType) {
            var query = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
            if (listType === this.SOURCE_LIST)
                this.filterValueSource = query;
            else if (listType === this.TARGET_LIST)
                this.filterValueTarget = query;
            this.filter(data, listType);
        };
        PickList.prototype.filter = function (data, listType) {
            var searchFields = this.filterBy.split(',');
            if (listType === this.SOURCE_LIST) {
                this.visibleOptionsSource = this.filterService.filter(data, searchFields, this.filterValueSource, this.filterMatchMode, this.filterLocale);
                this.onSourceFilter.emit({ query: this.filterValueSource, value: this.visibleOptionsSource });
            }
            else if (listType === this.TARGET_LIST) {
                this.visibleOptionsTarget = this.filterService.filter(data, searchFields, this.filterValueTarget, this.filterMatchMode, this.filterLocale);
                this.onTargetFilter.emit({ query: this.filterValueTarget, value: this.visibleOptionsTarget });
            }
        };
        PickList.prototype.isItemVisible = function (item, listType) {
            if (listType == this.SOURCE_LIST)
                return this.isVisibleInList(this.visibleOptionsSource, item, this.filterValueSource);
            else
                return this.isVisibleInList(this.visibleOptionsTarget, item, this.filterValueTarget);
        };
        PickList.prototype.isVisibleInList = function (data, item, filterValue) {
            if (filterValue && filterValue.trim().length) {
                for (var i = 0; i < data.length; i++) {
                    if (item == data[i]) {
                        return true;
                    }
                }
            }
            else {
                return true;
            }
        };
        PickList.prototype.onItemTouchEnd = function () {
            if (this.disabled) {
                return;
            }
            this.itemTouched = true;
        };
        PickList.prototype.sortByIndexInList = function (items, list) {
            return items.sort(function (item1, item2) { return utils.ObjectUtils.findIndexInList(item1, list) - utils.ObjectUtils.findIndexInList(item2, list); });
        };
        PickList.prototype.moveUp = function (listElement, list, selectedItems, callback, listType) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = 0; i < selectedItems.length; i++) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != 0) {
                        var movedItem = list[selectedItemIndex];
                        var temp = list[selectedItemIndex - 1];
                        list[selectedItemIndex - 1] = movedItem;
                        list[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }
                if (this.dragdrop && ((this.filterValueSource && listType === this.SOURCE_LIST) || (this.filterValueTarget && listType === this.TARGET_LIST)))
                    this.filter(list, listType);
                this.movedUp = true;
                this.reorderedListElement = listElement;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveTop = function (listElement, list, selectedItems, callback, listType) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = 0; i < selectedItems.length; i++) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != 0) {
                        var movedItem = list.splice(selectedItemIndex, 1)[0];
                        list.unshift(movedItem);
                    }
                    else {
                        break;
                    }
                }
                if (this.dragdrop && ((this.filterValueSource && listType === this.SOURCE_LIST) || (this.filterValueTarget && listType === this.TARGET_LIST)))
                    this.filter(list, listType);
                listElement.scrollTop = 0;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveDown = function (listElement, list, selectedItems, callback, listType) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != (list.length - 1)) {
                        var movedItem = list[selectedItemIndex];
                        var temp = list[selectedItemIndex + 1];
                        list[selectedItemIndex + 1] = movedItem;
                        list[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }
                if (this.dragdrop && ((this.filterValueSource && listType === this.SOURCE_LIST) || (this.filterValueTarget && listType === this.TARGET_LIST)))
                    this.filter(list, listType);
                this.movedDown = true;
                this.reorderedListElement = listElement;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveBottom = function (listElement, list, selectedItems, callback, listType) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = utils.ObjectUtils.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != (list.length - 1)) {
                        var movedItem = list.splice(selectedItemIndex, 1)[0];
                        list.push(movedItem);
                    }
                    else {
                        break;
                    }
                }
                if (this.dragdrop && ((this.filterValueSource && listType === this.SOURCE_LIST) || (this.filterValueTarget && listType === this.TARGET_LIST)))
                    this.filter(list, listType);
                listElement.scrollTop = listElement.scrollHeight;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveRight = function () {
            if (this.selectedItemsSource && this.selectedItemsSource.length) {
                for (var i = 0; i < this.selectedItemsSource.length; i++) {
                    var selectedItem = this.selectedItemsSource[i];
                    if (utils.ObjectUtils.findIndexInList(selectedItem, this.target) == -1) {
                        this.target.push(this.source.splice(utils.ObjectUtils.findIndexInList(selectedItem, this.source), 1)[0]);
                    }
                }
                this.onMoveToTarget.emit({
                    items: this.selectedItemsSource
                });
                this.selectedItemsSource = [];
                if (this.filterValueTarget) {
                    this.filter(this.target, this.TARGET_LIST);
                }
            }
        };
        PickList.prototype.moveAllRight = function () {
            if (this.source) {
                var movedItems = [];
                for (var i = 0; i < this.source.length; i++) {
                    if (this.isItemVisible(this.source[i], this.SOURCE_LIST)) {
                        var removedItem = this.source.splice(i, 1)[0];
                        this.target.push(removedItem);
                        movedItems.push(removedItem);
                        i--;
                    }
                }
                this.onMoveAllToTarget.emit({
                    items: movedItems
                });
                this.selectedItemsSource = [];
                if (this.filterValueTarget) {
                    this.filter(this.target, this.TARGET_LIST);
                }
            }
        };
        PickList.prototype.moveLeft = function () {
            if (this.selectedItemsTarget && this.selectedItemsTarget.length) {
                for (var i = 0; i < this.selectedItemsTarget.length; i++) {
                    var selectedItem = this.selectedItemsTarget[i];
                    if (utils.ObjectUtils.findIndexInList(selectedItem, this.source) == -1) {
                        this.source.push(this.target.splice(utils.ObjectUtils.findIndexInList(selectedItem, this.target), 1)[0]);
                    }
                }
                this.onMoveToSource.emit({
                    items: this.selectedItemsTarget
                });
                this.selectedItemsTarget = [];
                if (this.filterValueSource) {
                    this.filter(this.source, this.SOURCE_LIST);
                }
            }
        };
        PickList.prototype.moveAllLeft = function () {
            if (this.target) {
                var movedItems = [];
                for (var i = 0; i < this.target.length; i++) {
                    if (this.isItemVisible(this.target[i], this.TARGET_LIST)) {
                        var removedItem = this.target.splice(i, 1)[0];
                        this.source.push(removedItem);
                        movedItems.push(removedItem);
                        i--;
                    }
                }
                this.onMoveAllToSource.emit({
                    items: movedItems
                });
                this.selectedItemsTarget = [];
                if (this.filterValueSource) {
                    this.filter(this.source, this.SOURCE_LIST);
                }
            }
        };
        PickList.prototype.isSelected = function (item, selectedItems) {
            return this.findIndexInSelection(item, selectedItems) != -1;
        };
        PickList.prototype.findIndexInSelection = function (item, selectedItems) {
            return utils.ObjectUtils.findIndexInList(item, selectedItems);
        };
        PickList.prototype.onDrop = function (event, listType) {
            var isTransfer = event.previousContainer !== event.container;
            var dropIndexes = this.getDropIndexes(event.previousIndex, event.currentIndex, listType, isTransfer, event.item.data);
            if (listType === this.SOURCE_LIST) {
                if (isTransfer) {
                    dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                    if (this.visibleOptionsTarget)
                        this.visibleOptionsTarget.splice(event.previousIndex, 1);
                    this.onMoveToSource.emit({ items: event.item.data });
                }
                else {
                    dragDrop.moveItemInArray(event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                    this.onSourceReorder.emit({ items: event.item.data });
                }
                if (this.filterValueSource) {
                    this.filter(this.source, this.SOURCE_LIST);
                }
            }
            else {
                if (isTransfer) {
                    dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                    if (this.visibleOptionsSource)
                        this.visibleOptionsSource.splice(event.previousIndex, 1);
                    this.onMoveToTarget.emit({ items: event.item.data });
                }
                else {
                    dragDrop.moveItemInArray(event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                    this.onTargetReorder.emit({ items: event.item.data });
                }
                if (this.filterValueTarget) {
                    this.filter(this.target, this.TARGET_LIST);
                }
            }
        };
        PickList.prototype.getDropIndexes = function (fromIndex, toIndex, droppedList, isTransfer, data) {
            var previousIndex, currentIndex;
            if (droppedList === this.SOURCE_LIST) {
                previousIndex = isTransfer ? this.filterValueTarget ? utils.ObjectUtils.findIndexInList(data, this.target) : fromIndex : this.filterValueSource ? utils.ObjectUtils.findIndexInList(data, this.source) : fromIndex;
                currentIndex = this.filterValueSource ? this.findFilteredCurrentIndex(this.visibleOptionsSource, toIndex, this.source) : toIndex;
            }
            else {
                previousIndex = isTransfer ? this.filterValueSource ? utils.ObjectUtils.findIndexInList(data, this.source) : fromIndex : this.filterValueTarget ? utils.ObjectUtils.findIndexInList(data, this.target) : fromIndex;
                currentIndex = this.filterValueTarget ? this.findFilteredCurrentIndex(this.visibleOptionsTarget, toIndex, this.target) : toIndex;
            }
            return { previousIndex: previousIndex, currentIndex: currentIndex };
        };
        PickList.prototype.findFilteredCurrentIndex = function (visibleOptions, index, options) {
            if (visibleOptions.length === index) {
                var toIndex = utils.ObjectUtils.findIndexInList(visibleOptions[index - 1], options);
                return toIndex + 1;
            }
            else {
                return utils.ObjectUtils.findIndexInList(visibleOptions[index], options);
            }
        };
        PickList.prototype.resetFilter = function () {
            this.visibleOptionsSource = null;
            this.filterValueSource = null;
            this.visibleOptionsTarget = null;
            this.filterValueTarget = null;
            this.sourceFilterViewChild.nativeElement.value = '';
            this.targetFilterViewChild.nativeElement.value = '';
        };
        PickList.prototype.onItemKeydown = function (event, item, selectedItems, callback) {
            var listItem = event.currentTarget;
            switch (event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(listItem);
                    if (nextItem) {
                        nextItem.focus();
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    var prevItem = this.findPrevItem(listItem);
                    if (prevItem) {
                        prevItem.focus();
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    this.onItemClick(event, item, selectedItems, callback);
                    event.preventDefault();
                    break;
            }
        };
        PickList.prototype.findNextItem = function (item) {
            var nextItem = item.nextElementSibling;
            if (nextItem)
                return !dom.DomHandler.hasClass(nextItem, 'p-picklist-item') || dom.DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        };
        PickList.prototype.findPrevItem = function (item) {
            var prevItem = item.previousElementSibling;
            if (prevItem)
                return !dom.DomHandler.hasClass(prevItem, 'p-picklist-item') || dom.DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        };
        PickList.prototype.createStyle = function () {
            if (!this.styleElement) {
                this.el.nativeElement.children[0].setAttribute(this.id, '');
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                document.head.appendChild(this.styleElement);
                var innerHTML = "\n            @media screen and (max-width: " + this.breakpoint + ") {\n                .p-picklist[" + this.id + "] {\n                    flex-direction: column;\n                }\n            \n                .p-picklist[" + this.id + "] .p-picklist-buttons {\n                    padding: var(--content-padding);\n                    flex-direction: row;\n                }\n            \n                .p-picklist[" + this.id + "] .p-picklist-buttons .p-button {\n                    margin-right: var(--inline-spacing);\n                    margin-bottom: 0;\n                }\n            \n                .p-picklist[" + this.id + "] .p-picklist-buttons .p-button:last-child {\n                    margin-right: 0;\n                }\n            \n                .p-picklist[" + this.id + "] .pi-angle-right:before {\n                    content: \"\\e930\"\n                }\n            \n                .p-picklist[" + this.id + "] .pi-angle-double-right:before {\n                    content: \"\\e92c\"\n                }\n            \n                .p-picklist[" + this.id + "] .pi-angle-left:before {\n                    content: \"\\e933\"\n                }\n            \n                .p-picklist[" + this.id + "] .pi-angle-double-left:before {\n                    content: \"\\e92f\"\n                }\n            }\n            ";
                this.styleElement.innerHTML = innerHTML;
            }
        };
        PickList.prototype.destroyStyle = function () {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
                "";
            }
        };
        PickList.prototype.ngOnDestroy = function () {
            this.destroyStyle();
        };
PickList.ɵfac = function PickList_Factory(t) { return new (t || PickList)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FilterService)); };
PickList.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PickList, selectors: [["p-pickList"]], contentQueries: function PickList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function PickList_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listViewSourceChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listViewTargetChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sourceFilterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.targetFilterViewChild = _t.first);
    } }, inputs: { trackBy: "trackBy", showSourceFilter: "showSourceFilter", showTargetFilter: "showTargetFilter", metaKeySelection: "metaKeySelection", dragdrop: "dragdrop", showSourceControls: "showSourceControls", showTargetControls: "showTargetControls", disabled: "disabled", filterMatchMode: "filterMatchMode", breakpoint: "breakpoint", source: "source", target: "target", sourceHeader: "sourceHeader", targetHeader: "targetHeader", responsive: "responsive", filterBy: "filterBy", filterLocale: "filterLocale", sourceTrackBy: "sourceTrackBy", targetTrackBy: "targetTrackBy", style: "style", styleClass: "styleClass", sourceStyle: "sourceStyle", targetStyle: "targetStyle", sourceFilterPlaceholder: "sourceFilterPlaceholder", targetFilterPlaceholder: "targetFilterPlaceholder", ariaSourceFilterLabel: "ariaSourceFilterLabel", ariaTargetFilterLabel: "ariaTargetFilterLabel" }, outputs: { onMoveToSource: "onMoveToSource", onMoveAllToSource: "onMoveAllToSource", onMoveAllToTarget: "onMoveAllToTarget", onMoveToTarget: "onMoveToTarget", onSourceReorder: "onSourceReorder", onTargetReorder: "onTargetReorder", onSourceSelect: "onSourceSelect", onTargetSelect: "onTargetSelect", onSourceFilter: "onSourceFilter", onTargetFilter: "onTargetFilter" }, decls: 22, vars: 24, consts: [["cdkDropListGroup", "", 3, "ngStyle", "ngClass"], ["class", "p-picklist-buttons p-picklist-source-controls", 4, "ngIf"], [1, "p-picklist-list-wrapper", "p-picklist-source-wrapper"], ["class", "p-picklist-header", 4, "ngIf"], ["class", "p-picklist-filter-container", 4, "ngIf"], ["cdkDropList", "", "role", "listbox", "aria-multiselectable", "multiple", 1, "p-picklist-list", "p-picklist-source", 3, "cdkDropListData", "ngStyle", "cdkDropListDropped"], ["sourcelist", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "p-picklist-buttons", "p-picklist-transfer-buttons"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-right", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-right", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-left", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-left", 3, "disabled", "click"], [1, "p-picklist-list-wrapper", "p-picklist-target-wrapper"], ["cdkDropList", "", "role", "listbox", "aria-multiselectable", "multiple", 1, "p-picklist-list", "p-picklist-target", 3, "cdkDropListData", "ngStyle", "cdkDropListDropped"], ["targetlist", ""], ["class", "p-picklist-buttons p-picklist-target-controls", 4, "ngIf"], [1, "p-picklist-buttons", "p-picklist-source-controls"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-up", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-up", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-down", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-down", 3, "disabled", "click"], [1, "p-picklist-header"], [1, "p-picklist-title"], [1, "p-picklist-filter-container"], [1, "p-picklist-filter"], ["type", "text", "role", "textbox", 1, "p-picklist-filter-input", "p-inputtext", "p-component", 3, "disabled", "keyup"], ["sourceFilter", ""], [1, "p-picklist-filter-icon", "pi", "pi-search"], ["pRipple", "", "cdkDrag", "", "tabindex", "0", "role", "option", 3, "ngClass", "cdkDragData", "cdkDragDisabled", "click", "dblclick", "touchend", "keydown", 4, "ngIf"], ["pRipple", "", "cdkDrag", "", "tabindex", "0", "role", "option", 3, "ngClass", "cdkDragData", "cdkDragDisabled", "click", "dblclick", "touchend", "keydown"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-picklist-empty-message"], [4, "ngTemplateOutlet"], ["class", "p-picklist-title", 4, "ngIf"], ["targetFilter", ""], [1, "p-picklist-buttons", "p-picklist-target-controls"]], template: function PickList_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, PickList_div_1_Template, 5, 4, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, PickList_div_3_Template, 3, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(4, PickList_div_4_Template, 5, 3, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "ul", 5, 6);
        ɵngcc0.ɵɵlistener("cdkDropListDropped", function PickList_Template_ul_cdkDropListDropped_5_listener($event) { return ctx.onDrop($event, ctx.SOURCE_LIST); });
        ɵngcc0.ɵɵtemplate(7, PickList_ng_template_7_Template, 1, 1, "ng-template", 7);
        ɵngcc0.ɵɵtemplate(8, PickList_ng_container_8_Template, 3, 1, "ng-container", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelementStart(10, "button", 10);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_10_listener() { return ctx.moveRight(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "button", 11);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_11_listener() { return ctx.moveAllRight(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "button", 12);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_12_listener() { return ctx.moveLeft(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "button", 13);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_13_listener() { return ctx.moveAllLeft(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 14);
        ɵngcc0.ɵɵtemplate(15, PickList_div_15_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(16, PickList_div_16_Template, 5, 3, "div", 4);
        ɵngcc0.ɵɵelementStart(17, "ul", 15, 16);
        ɵngcc0.ɵɵlistener("cdkDropListDropped", function PickList_Template_ul_cdkDropListDropped_17_listener($event) { return ctx.onDrop($event, ctx.TARGET_LIST); });
        ɵngcc0.ɵɵtemplate(19, PickList_ng_template_19_Template, 1, 1, "ng-template", 7);
        ɵngcc0.ɵɵtemplate(20, PickList_ng_container_20_Template, 3, 1, "ng-container", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(21, PickList_div_21_Template, 5, 4, "div", 17);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-picklist p-component");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSourceControls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.sourceHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterBy && ctx.showSourceFilter !== false);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkDropListData", ctx.source)("ngStyle", ctx.sourceStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.source)("ngForTrackBy", ctx.sourceTrackBy || ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.source == null || ctx.source.length === 0) && ctx.emptyMessageSourceTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.targetHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterBy && ctx.showTargetFilter !== false);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkDropListData", ctx.target)("ngStyle", ctx.targetStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.target)("ngForTrackBy", ctx.targetTrackBy || ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.target == null || ctx.target.length === 0) && ctx.emptyMessageTargetTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showTargetControls);
    } }, directives: [ɵngcc2.CdkDropListGroup, ɵngcc3.NgStyle, ɵngcc3.NgClass, ɵngcc3.NgIf, ɵngcc2.CdkDropList, ɵngcc3.NgForOf, ɵngcc4.ButtonDirective, ɵngcc5.Ripple, ɵngcc2.CdkDrag, ɵngcc3.NgTemplateOutlet], styles: [".p-picklist{display:flex}.p-picklist-buttons{display:flex;flex-direction:column;justify-content:center}.p-picklist-list-wrapper{flex:1 1 50%}.p-picklist-list{list-style-type:none;margin:0;min-height:12rem;overflow:auto;padding:0}.p-picklist-item{cursor:pointer;display:block;overflow:hidden;position:relative}.p-picklist-item:not(.cdk-drag-disabled){cursor:move}.p-picklist-item.cdk-drag-placeholder{opacity:0}.p-picklist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-picklist-filter{position:relative}.p-picklist-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-picklist-filter-input{width:100%}.p-picklist-list.cdk-drop-list-dragging .p-picklist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PickList, [{
        type: core.Component,
        args: [{
                selector: 'p-pickList',
                template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'p-picklist p-component'\" cdkDropListGroup>\n            <div class=\"p-picklist-buttons p-picklist-source-controls\" *ngIf=\"showSourceControls\">\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-up\" [disabled]=\"disabled\" (click)=\"moveUp(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-up\" [disabled]=\"disabled\" (click)=\"moveTop(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-down\" [disabled]=\"disabled\" (click)=\"moveDown(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-down\" [disabled]=\"disabled\" (click)=\"moveBottom(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)\"></button>\n            </div>\n            <div class=\"p-picklist-list-wrapper p-picklist-source-wrapper\">\n                <div class=\"p-picklist-header\" *ngIf=\"sourceHeader\">\n                    <div class=\"p-picklist-title\">{{sourceHeader}}</div>\n                </div>\n                <div class=\"p-picklist-filter-container\" *ngIf=\"filterBy && showSourceFilter !== false\">\n                    <div class=\"p-picklist-filter\">\n                        <input #sourceFilter type=\"text\" role=\"textbox\" (keyup)=\"onFilter($event,source,SOURCE_LIST)\" class=\"p-picklist-filter-input p-inputtext p-component\" [disabled]=\"disabled\" [attr.placeholder]=\"sourceFilterPlaceholder\" [attr.aria-label]=\"ariaSourceFilterLabel\">\n                        <span class=\"p-picklist-filter-icon pi pi-search\"></span>\n                    </div>\n                </div>\n                \n                <ul #sourcelist class=\"p-picklist-list p-picklist-source\" cdkDropList [cdkDropListData]=\"source\" (cdkDropListDropped)=\"onDrop($event, SOURCE_LIST)\"\n                    [ngStyle]=\"sourceStyle\" role=\"listbox\" aria-multiselectable=\"multiple\">\n                    <ng-template ngFor let-item [ngForOf]=\"source\" [ngForTrackBy]=\"sourceTrackBy || trackBy\" let-i=\"index\" let-l=\"last\">\n                        <li [ngClass]=\"{'p-picklist-item':true,'p-highlight':isSelected(item,selectedItemsSource),'p-disabled': disabled}\" pRipple cdkDrag [cdkDragData]=\"item\" [cdkDragDisabled]=\"!dragdrop\"\n                            (click)=\"onItemClick($event,item,selectedItemsSource,onSourceSelect)\" (dblclick)=\"onSourceItemDblClick()\" (touchend)=\"onItemTouchEnd()\" (keydown)=\"onItemKeydown($event,item,selectedItemsSource,onSourceSelect)\"\n                            *ngIf=\"isItemVisible(item, SOURCE_LIST)\" tabindex=\"0\" role=\"option\" [attr.aria-selected]=\"isSelected(item, selectedItemsSource)\">\n                            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                        </li>\n                    </ng-template>\n                    <ng-container *ngIf=\"(source == null || source.length === 0) && emptyMessageSourceTemplate\">\n                        <li class=\"p-picklist-empty-message\">\n                            <ng-container *ngTemplateOutlet=\"emptyMessageSourceTemplate\"></ng-container>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"p-picklist-buttons p-picklist-transfer-buttons\">\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-right\" [disabled]=\"disabled\" (click)=\"moveRight()\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-right\" [disabled]=\"disabled\" (click)=\"moveAllRight()\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-left\" [disabled]=\"disabled\" (click)=\"moveLeft()\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-left\" [disabled]=\"disabled\" (click)=\"moveAllLeft()\"></button>\n            </div>\n            <div class=\"p-picklist-list-wrapper p-picklist-target-wrapper\">\n                <div class=\"p-picklist-header\" *ngIf=\"targetHeader\">\n                    <div class=\"p-picklist-title\" *ngIf=\"targetHeader\">{{targetHeader}}</div>\n                </div>\n                <div class=\"p-picklist-filter-container\" *ngIf=\"filterBy && showTargetFilter !== false\">\n                    <div class=\"p-picklist-filter\">\n                        <input #targetFilter type=\"text\" role=\"textbox\" (keyup)=\"onFilter($event,target,TARGET_LIST)\" class=\"p-picklist-filter-input p-inputtext p-component\" [disabled]=\"disabled\" [attr.placeholder]=\"targetFilterPlaceholder\" [attr.aria-label]=\"ariaTargetFilterLabel\">\n                        <span class=\"p-picklist-filter-icon pi pi-search\"></span>\n                    </div>\n                </div>\n                <ul #targetlist class=\"p-picklist-list p-picklist-target\" cdkDropList [cdkDropListData]=\"target\" (cdkDropListDropped)=\"onDrop($event, TARGET_LIST)\"\n                    [ngStyle]=\"targetStyle\" role=\"listbox\" aria-multiselectable=\"multiple\">\n                    <ng-template ngFor let-item [ngForOf]=\"target\" [ngForTrackBy]=\"targetTrackBy || trackBy\" let-i=\"index\" let-l=\"last\">\n                        <li [ngClass]=\"{'p-picklist-item':true,'p-highlight':isSelected(item,selectedItemsTarget), 'p-disabled': disabled}\" pRipple cdkDrag [cdkDragData]=\"item\" [cdkDragDisabled]=\"!dragdrop\"\n                            (click)=\"onItemClick($event,item,selectedItemsTarget,onTargetSelect)\" (dblclick)=\"onTargetItemDblClick()\" (touchend)=\"onItemTouchEnd()\" (keydown)=\"onItemKeydown($event,item,selectedItemsTarget,onTargetSelect)\"\n                            *ngIf=\"isItemVisible(item, TARGET_LIST)\" tabindex=\"0\" role=\"option\" [attr.aria-selected]=\"isSelected(item, selectedItemsTarget)\">\n                            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                        </li>\n                    </ng-template>\n                    <ng-container *ngIf=\"(target == null || target.length === 0) && emptyMessageTargetTemplate\">\n                        <li class=\"p-picklist-empty-message\">\n                            <ng-container *ngTemplateOutlet=\"emptyMessageTargetTemplate\"></ng-container>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"p-picklist-buttons p-picklist-target-controls\" *ngIf=\"showTargetControls\">\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-up\" [disabled]=\"disabled\" (click)=\"moveUp(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-up\" [disabled]=\"disabled\" (click)=\"moveTop(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-down\" [disabled]=\"disabled\" (click)=\"moveDown(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-down\" [disabled]=\"disabled\" (click)=\"moveBottom(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)\"></button>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-picklist{display:flex}.p-picklist-buttons{display:flex;flex-direction:column;justify-content:center}.p-picklist-list-wrapper{flex:1 1 50%}.p-picklist-list{list-style-type:none;margin:0;min-height:12rem;overflow:auto;padding:0}.p-picklist-item{cursor:pointer;display:block;overflow:hidden;position:relative}.p-picklist-item:not(.cdk-drag-disabled){cursor:move}.p-picklist-item.cdk-drag-placeholder{opacity:0}.p-picklist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-picklist-filter{position:relative}.p-picklist-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-picklist-filter-input{width:100%}.p-picklist-list.cdk-drop-list-dragging .p-picklist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FilterService }]; }, { trackBy: [{
            type: core.Input
        }], showSourceFilter: [{
            type: core.Input
        }], showTargetFilter: [{
            type: core.Input
        }], metaKeySelection: [{
            type: core.Input
        }], dragdrop: [{
            type: core.Input
        }], showSourceControls: [{
            type: core.Input
        }], showTargetControls: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], filterMatchMode: [{
            type: core.Input
        }], breakpoint: [{
            type: core.Input
        }], onMoveToSource: [{
            type: core.Output
        }], onMoveAllToSource: [{
            type: core.Output
        }], onMoveAllToTarget: [{
            type: core.Output
        }], onMoveToTarget: [{
            type: core.Output
        }], onSourceReorder: [{
            type: core.Output
        }], onTargetReorder: [{
            type: core.Output
        }], onSourceSelect: [{
            type: core.Output
        }], onTargetSelect: [{
            type: core.Output
        }], onSourceFilter: [{
            type: core.Output
        }], onTargetFilter: [{
            type: core.Output
        }], source: [{
            type: core.Input
        }], target: [{
            type: core.Input
        }], sourceHeader: [{
            type: core.Input
        }], targetHeader: [{
            type: core.Input
        }], responsive: [{
            type: core.Input
        }], filterBy: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], sourceTrackBy: [{
            type: core.Input
        }], targetTrackBy: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], sourceStyle: [{
            type: core.Input
        }], targetStyle: [{
            type: core.Input
        }], sourceFilterPlaceholder: [{
            type: core.Input
        }], targetFilterPlaceholder: [{
            type: core.Input
        }], ariaSourceFilterLabel: [{
            type: core.Input
        }], ariaTargetFilterLabel: [{
            type: core.Input
        }], listViewSourceChild: [{
            type: core.ViewChild,
            args: ['sourcelist']
        }], listViewTargetChild: [{
            type: core.ViewChild,
            args: ['targetlist']
        }], sourceFilterViewChild: [{
            type: core.ViewChild,
            args: ['sourceFilter']
        }], targetFilterViewChild: [{
            type: core.ViewChild,
            args: ['targetFilter']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return PickList;
    }());
    PickList.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: api.FilterService }
    ]; };
    PickList.propDecorators = {
        source: [{ type: core.Input }],
        target: [{ type: core.Input }],
        sourceHeader: [{ type: core.Input }],
        targetHeader: [{ type: core.Input }],
        responsive: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        trackBy: [{ type: core.Input }],
        sourceTrackBy: [{ type: core.Input }],
        targetTrackBy: [{ type: core.Input }],
        showSourceFilter: [{ type: core.Input }],
        showTargetFilter: [{ type: core.Input }],
        metaKeySelection: [{ type: core.Input }],
        dragdrop: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        sourceStyle: [{ type: core.Input }],
        targetStyle: [{ type: core.Input }],
        showSourceControls: [{ type: core.Input }],
        showTargetControls: [{ type: core.Input }],
        sourceFilterPlaceholder: [{ type: core.Input }],
        targetFilterPlaceholder: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        ariaSourceFilterLabel: [{ type: core.Input }],
        ariaTargetFilterLabel: [{ type: core.Input }],
        filterMatchMode: [{ type: core.Input }],
        breakpoint: [{ type: core.Input }],
        onMoveToSource: [{ type: core.Output }],
        onMoveAllToSource: [{ type: core.Output }],
        onMoveAllToTarget: [{ type: core.Output }],
        onMoveToTarget: [{ type: core.Output }],
        onSourceReorder: [{ type: core.Output }],
        onTargetReorder: [{ type: core.Output }],
        onSourceSelect: [{ type: core.Output }],
        onTargetSelect: [{ type: core.Output }],
        onSourceFilter: [{ type: core.Output }],
        onTargetFilter: [{ type: core.Output }],
        listViewSourceChild: [{ type: core.ViewChild, args: ['sourcelist',] }],
        listViewTargetChild: [{ type: core.ViewChild, args: ['targetlist',] }],
        sourceFilterViewChild: [{ type: core.ViewChild, args: ['sourceFilter',] }],
        targetFilterViewChild: [{ type: core.ViewChild, args: ['targetFilter',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var PickListModule = /** @class */ (function () {
        function PickListModule() {
        }
PickListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PickListModule });
PickListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PickListModule_Factory(t) { return new (t || PickListModule)(); }, imports: [[common.CommonModule, button.ButtonModule, api.SharedModule, ripple.RippleModule, dragDrop.DragDropModule], ɵngcc1.SharedModule, ɵngcc2.DragDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PickListModule, { declarations: [PickList], imports: [ɵngcc3.CommonModule, ɵngcc4.ButtonModule, ɵngcc1.SharedModule, ɵngcc5.RippleModule, ɵngcc2.DragDropModule], exports: [PickList, ɵngcc1.SharedModule, ɵngcc2.DragDropModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PickListModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, button.ButtonModule, api.SharedModule, ripple.RippleModule, dragDrop.DragDropModule],
                exports: [PickList, api.SharedModule, dragDrop.DragDropModule],
                declarations: [PickList]
            }]
    }], function () { return []; }, null); })();
        return PickListModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PickList = PickList;
    exports.PickListModule = PickListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-picklist.umd.js.map