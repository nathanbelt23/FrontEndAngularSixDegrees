import { NgModule, Component, ElementRef, Input, Output, ContentChildren, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SharedModule, PrimeTemplate, FilterService } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { RippleModule } from 'primeng/ripple';
import { DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/cdk/drag-drop';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'primeng/button';
import * as ɵngcc5 from 'primeng/ripple';

const _c0 = ["sourcelist"];
const _c1 = ["targetlist"];
const _c2 = ["sourceFilter"];
const _c3 = ["targetFilter"];
function PickList_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵelementStart(1, "button", 19);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); const _r3 = ɵngcc0.ɵɵreference(6); return ctx_r12.moveUp(_r3, ctx_r12.source, ctx_r12.selectedItemsSource, ctx_r12.onSourceReorder, ctx_r12.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 20);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(); const _r3 = ɵngcc0.ɵɵreference(6); return ctx_r14.moveTop(_r3, ctx_r14.source, ctx_r14.selectedItemsSource, ctx_r14.onSourceReorder, ctx_r14.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 21);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); const _r3 = ɵngcc0.ɵɵreference(6); return ctx_r15.moveDown(_r3, ctx_r15.source, ctx_r15.selectedItemsSource, ctx_r15.onSourceReorder, ctx_r15.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 22);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r16 = ɵngcc0.ɵɵnextContext(); const _r3 = ɵngcc0.ɵɵreference(6); return ctx_r16.moveBottom(_r3, ctx_r16.source, ctx_r16.selectedItemsSource, ctx_r16.onSourceReorder, ctx_r16.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
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
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.sourceHeader);
} }
function PickList_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵelementStart(2, "input", 27, 28);
    ɵngcc0.ɵɵlistener("keyup", function PickList_div_4_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onFilter($event, ctx_r18.source, ctx_r18.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r2.sourceFilterPlaceholder)("aria-label", ctx_r2.ariaSourceFilterLabel);
} }
function PickList_ng_template_7_li_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c4 = function (a1, a2) { return { "p-picklist-item": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c5 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function PickList_ng_template_7_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵlistener("click", function PickList_ng_template_7_li_0_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const item_r20 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onItemClick($event, item_r20, ctx_r25.selectedItemsSource, ctx_r25.onSourceSelect); })("dblclick", function PickList_ng_template_7_li_0_Template_li_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onSourceItemDblClick(); })("touchend", function PickList_ng_template_7_li_0_Template_li_touchend_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r29 = ɵngcc0.ɵɵnextContext(2); return ctx_r29.onItemTouchEnd(); })("keydown", function PickList_ng_template_7_li_0_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const item_r20 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onItemKeydown($event, item_r20, ctx_r30.selectedItemsSource, ctx_r30.onSourceSelect); });
    ɵngcc0.ɵɵtemplate(1, PickList_ng_template_7_li_0_ng_container_1_Template, 1, 0, "ng-container", 32);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = ɵngcc0.ɵɵnextContext();
    const item_r20 = ctx_r32.$implicit;
    const i_r21 = ctx_r32.index;
    const ctx_r23 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c4, ctx_r23.isSelected(item_r20, ctx_r23.selectedItemsSource), ctx_r23.disabled))("cdkDragData", item_r20)("cdkDragDisabled", !ctx_r23.dragdrop);
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r23.isSelected(item_r20, ctx_r23.selectedItemsSource));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r23.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c5, item_r20, i_r21));
} }
function PickList_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PickList_ng_template_7_li_0_Template, 2, 12, "li", 30);
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
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
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.emptyMessageSourceTemplate);
} }
function PickList_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r34.targetHeader);
} }
function PickList_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtemplate(1, PickList_div_15_div_1_Template, 2, 1, "div", 35);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.targetHeader);
} }
function PickList_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵelementStart(2, "input", 27, 36);
    ɵngcc0.ɵɵlistener("keyup", function PickList_div_16_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onFilter($event, ctx_r36.target, ctx_r36.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r7.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r7.targetFilterPlaceholder)("aria-label", ctx_r7.ariaTargetFilterLabel);
} }
function PickList_ng_template_19_li_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_template_19_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r44 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵlistener("click", function PickList_ng_template_19_li_0_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const item_r38 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r43 = ɵngcc0.ɵɵnextContext(); return ctx_r43.onItemClick($event, item_r38, ctx_r43.selectedItemsTarget, ctx_r43.onTargetSelect); })("dblclick", function PickList_ng_template_19_li_0_Template_li_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r46 = ɵngcc0.ɵɵnextContext(2); return ctx_r46.onTargetItemDblClick(); })("touchend", function PickList_ng_template_19_li_0_Template_li_touchend_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r47 = ɵngcc0.ɵɵnextContext(2); return ctx_r47.onItemTouchEnd(); })("keydown", function PickList_ng_template_19_li_0_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const item_r38 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r48 = ɵngcc0.ɵɵnextContext(); return ctx_r48.onItemKeydown($event, item_r38, ctx_r48.selectedItemsTarget, ctx_r48.onTargetSelect); });
    ɵngcc0.ɵɵtemplate(1, PickList_ng_template_19_li_0_ng_container_1_Template, 1, 0, "ng-container", 32);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r50 = ɵngcc0.ɵɵnextContext();
    const item_r38 = ctx_r50.$implicit;
    const i_r39 = ctx_r50.index;
    const ctx_r41 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c4, ctx_r41.isSelected(item_r38, ctx_r41.selectedItemsTarget), ctx_r41.disabled))("cdkDragData", item_r38)("cdkDragDisabled", !ctx_r41.dragdrop);
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r41.isSelected(item_r38, ctx_r41.selectedItemsTarget));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r41.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c5, item_r38, i_r39));
} }
function PickList_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PickList_ng_template_19_li_0_Template, 2, 12, "li", 30);
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
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
    const ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.emptyMessageTargetTemplate);
} }
function PickList_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 37);
    ɵngcc0.ɵɵelementStart(1, "button", 19);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r52 = ɵngcc0.ɵɵnextContext(); const _r8 = ɵngcc0.ɵɵreference(18); return ctx_r52.moveUp(_r8, ctx_r52.target, ctx_r52.selectedItemsTarget, ctx_r52.onTargetReorder, ctx_r52.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 20);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r54 = ɵngcc0.ɵɵnextContext(); const _r8 = ɵngcc0.ɵɵreference(18); return ctx_r54.moveTop(_r8, ctx_r54.target, ctx_r54.selectedItemsTarget, ctx_r54.onTargetReorder, ctx_r54.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 21);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r55 = ɵngcc0.ɵɵnextContext(); const _r8 = ɵngcc0.ɵɵreference(18); return ctx_r55.moveDown(_r8, ctx_r55.target, ctx_r55.selectedItemsTarget, ctx_r55.onTargetReorder, ctx_r55.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 22);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r56 = ɵngcc0.ɵɵnextContext(); const _r8 = ɵngcc0.ɵɵreference(18); return ctx_r56.moveBottom(_r8, ctx_r56.target, ctx_r56.selectedItemsTarget, ctx_r56.onTargetReorder, ctx_r56.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
} }
export class PickList {
    constructor(el, cd, filterService) {
        this.el = el;
        this.cd = cd;
        this.filterService = filterService;
        this.trackBy = (index, item) => item;
        this.showSourceFilter = true;
        this.showTargetFilter = true;
        this.metaKeySelection = true;
        this.dragdrop = false;
        this.showSourceControls = true;
        this.showTargetControls = true;
        this.disabled = false;
        this.filterMatchMode = "contains";
        this.breakpoint = "960px";
        this.onMoveToSource = new EventEmitter();
        this.onMoveAllToSource = new EventEmitter();
        this.onMoveAllToTarget = new EventEmitter();
        this.onMoveToTarget = new EventEmitter();
        this.onSourceReorder = new EventEmitter();
        this.onTargetReorder = new EventEmitter();
        this.onSourceSelect = new EventEmitter();
        this.onTargetSelect = new EventEmitter();
        this.onSourceFilter = new EventEmitter();
        this.onTargetFilter = new EventEmitter();
        this.selectedItemsSource = [];
        this.selectedItemsTarget = [];
        this.id = UniqueComponentId();
        this.SOURCE_LIST = -1;
        this.TARGET_LIST = 1;
    }
    ngOnInit() {
        if (this.responsive) {
            this.createStyle();
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'emptymessagesource':
                    this.emptyMessageSourceTemplate = item.template;
                    break;
                case 'emptymessagetarget':
                    this.emptyMessageTargetTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewChecked() {
        if (this.movedUp || this.movedDown) {
            let listItems = DomHandler.find(this.reorderedListElement, 'li.p-highlight');
            let listItem;
            if (this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            DomHandler.scrollInView(this.reorderedListElement, listItem);
            this.movedUp = false;
            this.movedDown = false;
            this.reorderedListElement = null;
        }
    }
    onItemClick(event, item, selectedItems, callback) {
        if (this.disabled) {
            return;
        }
        let index = this.findIndexInSelection(item, selectedItems);
        let selected = (index != -1);
        let metaSelection = this.itemTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey || event.shiftKey);
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
    }
    onSourceItemDblClick() {
        if (this.disabled) {
            return;
        }
        this.moveRight();
    }
    onTargetItemDblClick() {
        if (this.disabled) {
            return;
        }
        this.moveLeft();
    }
    onFilter(event, data, listType) {
        let query = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
        if (listType === this.SOURCE_LIST)
            this.filterValueSource = query;
        else if (listType === this.TARGET_LIST)
            this.filterValueTarget = query;
        this.filter(data, listType);
    }
    filter(data, listType) {
        let searchFields = this.filterBy.split(',');
        if (listType === this.SOURCE_LIST) {
            this.visibleOptionsSource = this.filterService.filter(data, searchFields, this.filterValueSource, this.filterMatchMode, this.filterLocale);
            this.onSourceFilter.emit({ query: this.filterValueSource, value: this.visibleOptionsSource });
        }
        else if (listType === this.TARGET_LIST) {
            this.visibleOptionsTarget = this.filterService.filter(data, searchFields, this.filterValueTarget, this.filterMatchMode, this.filterLocale);
            this.onTargetFilter.emit({ query: this.filterValueTarget, value: this.visibleOptionsTarget });
        }
    }
    isItemVisible(item, listType) {
        if (listType == this.SOURCE_LIST)
            return this.isVisibleInList(this.visibleOptionsSource, item, this.filterValueSource);
        else
            return this.isVisibleInList(this.visibleOptionsTarget, item, this.filterValueTarget);
    }
    isVisibleInList(data, item, filterValue) {
        if (filterValue && filterValue.trim().length) {
            for (let i = 0; i < data.length; i++) {
                if (item == data[i]) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
    onItemTouchEnd() {
        if (this.disabled) {
            return;
        }
        this.itemTouched = true;
    }
    sortByIndexInList(items, list) {
        return items.sort((item1, item2) => ObjectUtils.findIndexInList(item1, list) - ObjectUtils.findIndexInList(item2, list));
    }
    moveUp(listElement, list, selectedItems, callback, listType) {
        if (selectedItems && selectedItems.length) {
            selectedItems = this.sortByIndexInList(selectedItems, list);
            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);
                if (selectedItemIndex != 0) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex - 1];
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
    }
    moveTop(listElement, list, selectedItems, callback, listType) {
        if (selectedItems && selectedItems.length) {
            selectedItems = this.sortByIndexInList(selectedItems, list);
            for (let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);
                if (selectedItemIndex != 0) {
                    let movedItem = list.splice(selectedItemIndex, 1)[0];
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
    }
    moveDown(listElement, list, selectedItems, callback, listType) {
        if (selectedItems && selectedItems.length) {
            selectedItems = this.sortByIndexInList(selectedItems, list);
            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);
                if (selectedItemIndex != (list.length - 1)) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex + 1];
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
    }
    moveBottom(listElement, list, selectedItems, callback, listType) {
        if (selectedItems && selectedItems.length) {
            selectedItems = this.sortByIndexInList(selectedItems, list);
            for (let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);
                if (selectedItemIndex != (list.length - 1)) {
                    let movedItem = list.splice(selectedItemIndex, 1)[0];
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
    }
    moveRight() {
        if (this.selectedItemsSource && this.selectedItemsSource.length) {
            for (let i = 0; i < this.selectedItemsSource.length; i++) {
                let selectedItem = this.selectedItemsSource[i];
                if (ObjectUtils.findIndexInList(selectedItem, this.target) == -1) {
                    this.target.push(this.source.splice(ObjectUtils.findIndexInList(selectedItem, this.source), 1)[0]);
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
    }
    moveAllRight() {
        if (this.source) {
            let movedItems = [];
            for (let i = 0; i < this.source.length; i++) {
                if (this.isItemVisible(this.source[i], this.SOURCE_LIST)) {
                    let removedItem = this.source.splice(i, 1)[0];
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
    }
    moveLeft() {
        if (this.selectedItemsTarget && this.selectedItemsTarget.length) {
            for (let i = 0; i < this.selectedItemsTarget.length; i++) {
                let selectedItem = this.selectedItemsTarget[i];
                if (ObjectUtils.findIndexInList(selectedItem, this.source) == -1) {
                    this.source.push(this.target.splice(ObjectUtils.findIndexInList(selectedItem, this.target), 1)[0]);
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
    }
    moveAllLeft() {
        if (this.target) {
            let movedItems = [];
            for (let i = 0; i < this.target.length; i++) {
                if (this.isItemVisible(this.target[i], this.TARGET_LIST)) {
                    let removedItem = this.target.splice(i, 1)[0];
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
    }
    isSelected(item, selectedItems) {
        return this.findIndexInSelection(item, selectedItems) != -1;
    }
    findIndexInSelection(item, selectedItems) {
        return ObjectUtils.findIndexInList(item, selectedItems);
    }
    onDrop(event, listType) {
        let isTransfer = event.previousContainer !== event.container;
        let dropIndexes = this.getDropIndexes(event.previousIndex, event.currentIndex, listType, isTransfer, event.item.data);
        if (listType === this.SOURCE_LIST) {
            if (isTransfer) {
                transferArrayItem(event.previousContainer.data, event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                if (this.visibleOptionsTarget)
                    this.visibleOptionsTarget.splice(event.previousIndex, 1);
                this.onMoveToSource.emit({ items: event.item.data });
            }
            else {
                moveItemInArray(event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                this.onSourceReorder.emit({ items: event.item.data });
            }
            if (this.filterValueSource) {
                this.filter(this.source, this.SOURCE_LIST);
            }
        }
        else {
            if (isTransfer) {
                transferArrayItem(event.previousContainer.data, event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                if (this.visibleOptionsSource)
                    this.visibleOptionsSource.splice(event.previousIndex, 1);
                this.onMoveToTarget.emit({ items: event.item.data });
            }
            else {
                moveItemInArray(event.container.data, dropIndexes.previousIndex, dropIndexes.currentIndex);
                this.onTargetReorder.emit({ items: event.item.data });
            }
            if (this.filterValueTarget) {
                this.filter(this.target, this.TARGET_LIST);
            }
        }
    }
    getDropIndexes(fromIndex, toIndex, droppedList, isTransfer, data) {
        let previousIndex, currentIndex;
        if (droppedList === this.SOURCE_LIST) {
            previousIndex = isTransfer ? this.filterValueTarget ? ObjectUtils.findIndexInList(data, this.target) : fromIndex : this.filterValueSource ? ObjectUtils.findIndexInList(data, this.source) : fromIndex;
            currentIndex = this.filterValueSource ? this.findFilteredCurrentIndex(this.visibleOptionsSource, toIndex, this.source) : toIndex;
        }
        else {
            previousIndex = isTransfer ? this.filterValueSource ? ObjectUtils.findIndexInList(data, this.source) : fromIndex : this.filterValueTarget ? ObjectUtils.findIndexInList(data, this.target) : fromIndex;
            currentIndex = this.filterValueTarget ? this.findFilteredCurrentIndex(this.visibleOptionsTarget, toIndex, this.target) : toIndex;
        }
        return { previousIndex, currentIndex };
    }
    findFilteredCurrentIndex(visibleOptions, index, options) {
        if (visibleOptions.length === index) {
            let toIndex = ObjectUtils.findIndexInList(visibleOptions[index - 1], options);
            return toIndex + 1;
        }
        else {
            return ObjectUtils.findIndexInList(visibleOptions[index], options);
        }
    }
    resetFilter() {
        this.visibleOptionsSource = null;
        this.filterValueSource = null;
        this.visibleOptionsTarget = null;
        this.filterValueTarget = null;
        this.sourceFilterViewChild.nativeElement.value = '';
        this.targetFilterViewChild.nativeElement.value = '';
    }
    onItemKeydown(event, item, selectedItems, callback) {
        let listItem = event.currentTarget;
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
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return !DomHandler.hasClass(nextItem, 'p-picklist-item') || DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return !DomHandler.hasClass(prevItem, 'p-picklist-item') || DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }
    createStyle() {
        if (!this.styleElement) {
            this.el.nativeElement.children[0].setAttribute(this.id, '');
            this.styleElement = document.createElement('style');
            this.styleElement.type = 'text/css';
            document.head.appendChild(this.styleElement);
            let innerHTML = `
            @media screen and (max-width: ${this.breakpoint}) {
                .p-picklist[${this.id}] {
                    flex-direction: column;
                }
            
                .p-picklist[${this.id}] .p-picklist-buttons {
                    padding: var(--content-padding);
                    flex-direction: row;
                }
            
                .p-picklist[${this.id}] .p-picklist-buttons .p-button {
                    margin-right: var(--inline-spacing);
                    margin-bottom: 0;
                }
            
                .p-picklist[${this.id}] .p-picklist-buttons .p-button:last-child {
                    margin-right: 0;
                }
            
                .p-picklist[${this.id}] .pi-angle-right:before {
                    content: "\\e930"
                }
            
                .p-picklist[${this.id}] .pi-angle-double-right:before {
                    content: "\\e92c"
                }
            
                .p-picklist[${this.id}] .pi-angle-left:before {
                    content: "\\e933"
                }
            
                .p-picklist[${this.id}] .pi-angle-double-left:before {
                    content: "\\e92f"
                }
            }
            `;
            this.styleElement.innerHTML = innerHTML;
        }
    }
    destroyStyle() {
        if (this.styleElement) {
            document.head.removeChild(this.styleElement);
            this.styleElement = null;
            ``;
        }
    }
    ngOnDestroy() {
        this.destroyStyle();
    }
}
PickList.ɵfac = function PickList_Factory(t) { return new (t || PickList)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FilterService)); };
PickList.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PickList, selectors: [["p-pickList"]], contentQueries: function PickList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
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
PickList.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FilterService }
];
PickList.propDecorators = {
    source: [{ type: Input }],
    target: [{ type: Input }],
    sourceHeader: [{ type: Input }],
    targetHeader: [{ type: Input }],
    responsive: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterLocale: [{ type: Input }],
    trackBy: [{ type: Input }],
    sourceTrackBy: [{ type: Input }],
    targetTrackBy: [{ type: Input }],
    showSourceFilter: [{ type: Input }],
    showTargetFilter: [{ type: Input }],
    metaKeySelection: [{ type: Input }],
    dragdrop: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    sourceStyle: [{ type: Input }],
    targetStyle: [{ type: Input }],
    showSourceControls: [{ type: Input }],
    showTargetControls: [{ type: Input }],
    sourceFilterPlaceholder: [{ type: Input }],
    targetFilterPlaceholder: [{ type: Input }],
    disabled: [{ type: Input }],
    ariaSourceFilterLabel: [{ type: Input }],
    ariaTargetFilterLabel: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    breakpoint: [{ type: Input }],
    onMoveToSource: [{ type: Output }],
    onMoveAllToSource: [{ type: Output }],
    onMoveAllToTarget: [{ type: Output }],
    onMoveToTarget: [{ type: Output }],
    onSourceReorder: [{ type: Output }],
    onTargetReorder: [{ type: Output }],
    onSourceSelect: [{ type: Output }],
    onTargetSelect: [{ type: Output }],
    onSourceFilter: [{ type: Output }],
    onTargetFilter: [{ type: Output }],
    listViewSourceChild: [{ type: ViewChild, args: ['sourcelist',] }],
    listViewTargetChild: [{ type: ViewChild, args: ['targetlist',] }],
    sourceFilterViewChild: [{ type: ViewChild, args: ['sourceFilter',] }],
    targetFilterViewChild: [{ type: ViewChild, args: ['targetFilter',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PickList, [{
        type: Component,
        args: [{
                selector: 'p-pickList',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-picklist p-component'" cdkDropListGroup>
            <div class="p-picklist-buttons p-picklist-source-controls" *ngIf="showSourceControls">
                <button type="button" pButton pRipple icon="pi pi-angle-up" [disabled]="disabled" (click)="moveUp(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-up" [disabled]="disabled" (click)="moveTop(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-down" [disabled]="disabled" (click)="moveDown(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-down" [disabled]="disabled" (click)="moveBottom(sourcelist,source,selectedItemsSource,onSourceReorder,SOURCE_LIST)"></button>
            </div>
            <div class="p-picklist-list-wrapper p-picklist-source-wrapper">
                <div class="p-picklist-header" *ngIf="sourceHeader">
                    <div class="p-picklist-title">{{sourceHeader}}</div>
                </div>
                <div class="p-picklist-filter-container" *ngIf="filterBy && showSourceFilter !== false">
                    <div class="p-picklist-filter">
                        <input #sourceFilter type="text" role="textbox" (keyup)="onFilter($event,source,SOURCE_LIST)" class="p-picklist-filter-input p-inputtext p-component" [disabled]="disabled" [attr.placeholder]="sourceFilterPlaceholder" [attr.aria-label]="ariaSourceFilterLabel">
                        <span class="p-picklist-filter-icon pi pi-search"></span>
                    </div>
                </div>
                
                <ul #sourcelist class="p-picklist-list p-picklist-source" cdkDropList [cdkDropListData]="source" (cdkDropListDropped)="onDrop($event, SOURCE_LIST)"
                    [ngStyle]="sourceStyle" role="listbox" aria-multiselectable="multiple">
                    <ng-template ngFor let-item [ngForOf]="source" [ngForTrackBy]="sourceTrackBy || trackBy" let-i="index" let-l="last">
                        <li [ngClass]="{'p-picklist-item':true,'p-highlight':isSelected(item,selectedItemsSource),'p-disabled': disabled}" pRipple cdkDrag [cdkDragData]="item" [cdkDragDisabled]="!dragdrop"
                            (click)="onItemClick($event,item,selectedItemsSource,onSourceSelect)" (dblclick)="onSourceItemDblClick()" (touchend)="onItemTouchEnd()" (keydown)="onItemKeydown($event,item,selectedItemsSource,onSourceSelect)"
                            *ngIf="isItemVisible(item, SOURCE_LIST)" tabindex="0" role="option" [attr.aria-selected]="isSelected(item, selectedItemsSource)">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                        </li>
                    </ng-template>
                    <ng-container *ngIf="(source == null || source.length === 0) && emptyMessageSourceTemplate">
                        <li class="p-picklist-empty-message">
                            <ng-container *ngTemplateOutlet="emptyMessageSourceTemplate"></ng-container>
                        </li>
                    </ng-container>
                </ul>
            </div>
            <div class="p-picklist-buttons p-picklist-transfer-buttons">
                <button type="button" pButton pRipple icon="pi pi-angle-right" [disabled]="disabled" (click)="moveRight()"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-right" [disabled]="disabled" (click)="moveAllRight()"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-left" [disabled]="disabled" (click)="moveLeft()"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-left" [disabled]="disabled" (click)="moveAllLeft()"></button>
            </div>
            <div class="p-picklist-list-wrapper p-picklist-target-wrapper">
                <div class="p-picklist-header" *ngIf="targetHeader">
                    <div class="p-picklist-title" *ngIf="targetHeader">{{targetHeader}}</div>
                </div>
                <div class="p-picklist-filter-container" *ngIf="filterBy && showTargetFilter !== false">
                    <div class="p-picklist-filter">
                        <input #targetFilter type="text" role="textbox" (keyup)="onFilter($event,target,TARGET_LIST)" class="p-picklist-filter-input p-inputtext p-component" [disabled]="disabled" [attr.placeholder]="targetFilterPlaceholder" [attr.aria-label]="ariaTargetFilterLabel">
                        <span class="p-picklist-filter-icon pi pi-search"></span>
                    </div>
                </div>
                <ul #targetlist class="p-picklist-list p-picklist-target" cdkDropList [cdkDropListData]="target" (cdkDropListDropped)="onDrop($event, TARGET_LIST)"
                    [ngStyle]="targetStyle" role="listbox" aria-multiselectable="multiple">
                    <ng-template ngFor let-item [ngForOf]="target" [ngForTrackBy]="targetTrackBy || trackBy" let-i="index" let-l="last">
                        <li [ngClass]="{'p-picklist-item':true,'p-highlight':isSelected(item,selectedItemsTarget), 'p-disabled': disabled}" pRipple cdkDrag [cdkDragData]="item" [cdkDragDisabled]="!dragdrop"
                            (click)="onItemClick($event,item,selectedItemsTarget,onTargetSelect)" (dblclick)="onTargetItemDblClick()" (touchend)="onItemTouchEnd()" (keydown)="onItemKeydown($event,item,selectedItemsTarget,onTargetSelect)"
                            *ngIf="isItemVisible(item, TARGET_LIST)" tabindex="0" role="option" [attr.aria-selected]="isSelected(item, selectedItemsTarget)">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                        </li>
                    </ng-template>
                    <ng-container *ngIf="(target == null || target.length === 0) && emptyMessageTargetTemplate">
                        <li class="p-picklist-empty-message">
                            <ng-container *ngTemplateOutlet="emptyMessageTargetTemplate"></ng-container>
                        </li>
                    </ng-container>
                </ul>
            </div>
            <div class="p-picklist-buttons p-picklist-target-controls" *ngIf="showTargetControls">
                <button type="button" pButton pRipple icon="pi pi-angle-up" [disabled]="disabled" (click)="moveUp(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-up" [disabled]="disabled" (click)="moveTop(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-down" [disabled]="disabled" (click)="moveDown(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-down" [disabled]="disabled" (click)="moveBottom(targetlist,target,selectedItemsTarget,onTargetReorder,TARGET_LIST)"></button>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-picklist{display:flex}.p-picklist-buttons{display:flex;flex-direction:column;justify-content:center}.p-picklist-list-wrapper{flex:1 1 50%}.p-picklist-list{list-style-type:none;margin:0;min-height:12rem;overflow:auto;padding:0}.p-picklist-item{cursor:pointer;display:block;overflow:hidden;position:relative}.p-picklist-item:not(.cdk-drag-disabled){cursor:move}.p-picklist-item.cdk-drag-placeholder{opacity:0}.p-picklist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-picklist-filter{position:relative}.p-picklist-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-picklist-filter-input{width:100%}.p-picklist-list.cdk-drop-list-dragging .p-picklist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FilterService }]; }, { trackBy: [{
            type: Input
        }], showSourceFilter: [{
            type: Input
        }], showTargetFilter: [{
            type: Input
        }], metaKeySelection: [{
            type: Input
        }], dragdrop: [{
            type: Input
        }], showSourceControls: [{
            type: Input
        }], showTargetControls: [{
            type: Input
        }], disabled: [{
            type: Input
        }], filterMatchMode: [{
            type: Input
        }], breakpoint: [{
            type: Input
        }], onMoveToSource: [{
            type: Output
        }], onMoveAllToSource: [{
            type: Output
        }], onMoveAllToTarget: [{
            type: Output
        }], onMoveToTarget: [{
            type: Output
        }], onSourceReorder: [{
            type: Output
        }], onTargetReorder: [{
            type: Output
        }], onSourceSelect: [{
            type: Output
        }], onTargetSelect: [{
            type: Output
        }], onSourceFilter: [{
            type: Output
        }], onTargetFilter: [{
            type: Output
        }], source: [{
            type: Input
        }], target: [{
            type: Input
        }], sourceHeader: [{
            type: Input
        }], targetHeader: [{
            type: Input
        }], responsive: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], sourceTrackBy: [{
            type: Input
        }], targetTrackBy: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], sourceStyle: [{
            type: Input
        }], targetStyle: [{
            type: Input
        }], sourceFilterPlaceholder: [{
            type: Input
        }], targetFilterPlaceholder: [{
            type: Input
        }], ariaSourceFilterLabel: [{
            type: Input
        }], ariaTargetFilterLabel: [{
            type: Input
        }], listViewSourceChild: [{
            type: ViewChild,
            args: ['sourcelist']
        }], listViewTargetChild: [{
            type: ViewChild,
            args: ['targetlist']
        }], sourceFilterViewChild: [{
            type: ViewChild,
            args: ['sourceFilter']
        }], targetFilterViewChild: [{
            type: ViewChild,
            args: ['targetFilter']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class PickListModule {
}
PickListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PickListModule });
PickListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PickListModule_Factory(t) { return new (t || PickListModule)(); }, imports: [[CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule], SharedModule, DragDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PickListModule, { declarations: function () { return [PickList]; }, imports: function () { return [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule]; }, exports: function () { return [PickList, SharedModule, DragDropModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PickListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule],
                exports: [PickList, SharedModule, DragDropModule],
                declarations: [PickList]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2xpc3QuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9waWNrbGlzdC9waWNrbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXNDLEtBQUssRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUEwQixZQUFZLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25QLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxjQUFjLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkcsT0FBTyxFQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRjdELE1BQU0sT0FBTyxRQUFRO0FBQUcsSUEwSHBCLFlBQW1CLEVBQWMsRUFBUyxFQUFxQixFQUFTLGFBQTRCO0FBQUksUUFB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QUFPLHdCQUUvQixlQUFlLFNBQUMsYUFBYTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQXlrQjFDLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxjQUFjLENBQUMsa0JBQzdFLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsY0FBYyxDQUFDLGtCQUMvQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDM0I7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgSW5wdXQsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQge1NoYXJlZE1vZHVsZSxQcmltZVRlbXBsYXRlLEZpbHRlclNlcnZpY2V9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIERyYWdEcm9wTW9kdWxlLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7T2JqZWN0VXRpbHMsIFVuaXF1ZUNvbXBvbmVudElkfSBmcm9tICdwcmltZW5nL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXBpY2tMaXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbbmdDbGFzc109XCIncC1waWNrbGlzdCBwLWNvbXBvbmVudCdcIiBjZGtEcm9wTGlzdEdyb3VwPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcGlja2xpc3QtYnV0dG9ucyBwLXBpY2tsaXN0LXNvdXJjZS1jb250cm9sc1wiICpuZ0lmPVwic2hvd1NvdXJjZUNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIGljb249XCJwaSBwaS1hbmdsZS11cFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjbGljayk9XCJtb3ZlVXAoc291cmNlbGlzdCxzb3VyY2Usc2VsZWN0ZWRJdGVtc1NvdXJjZSxvblNvdXJjZVJlb3JkZXIsU09VUkNFX0xJU1QpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIGljb249XCJwaSBwaS1hbmdsZS1kb3VibGUtdXBcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwibW92ZVRvcChzb3VyY2VsaXN0LHNvdXJjZSxzZWxlY3RlZEl0ZW1zU291cmNlLG9uU291cmNlUmVvcmRlcixTT1VSQ0VfTElTVClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIHBSaXBwbGUgaWNvbj1cInBpIHBpLWFuZ2xlLWRvd25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwibW92ZURvd24oc291cmNlbGlzdCxzb3VyY2Usc2VsZWN0ZWRJdGVtc1NvdXJjZSxvblNvdXJjZVJlb3JkZXIsU09VUkNFX0xJU1QpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIGljb249XCJwaSBwaS1hbmdsZS1kb3VibGUtZG93blwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjbGljayk9XCJtb3ZlQm90dG9tKHNvdXJjZWxpc3Qsc291cmNlLHNlbGVjdGVkSXRlbXNTb3VyY2Usb25Tb3VyY2VSZW9yZGVyLFNPVVJDRV9MSVNUKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1waWNrbGlzdC1saXN0LXdyYXBwZXIgcC1waWNrbGlzdC1zb3VyY2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBpY2tsaXN0LWhlYWRlclwiICpuZ0lmPVwic291cmNlSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBpY2tsaXN0LXRpdGxlXCI+e3tzb3VyY2VIZWFkZXJ9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBpY2tsaXN0LWZpbHRlci1jb250YWluZXJcIiAqbmdJZj1cImZpbHRlckJ5ICYmIHNob3dTb3VyY2VGaWx0ZXIgIT09IGZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBpY2tsaXN0LWZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNzb3VyY2VGaWx0ZXIgdHlwZT1cInRleHRcIiByb2xlPVwidGV4dGJveFwiIChrZXl1cCk9XCJvbkZpbHRlcigkZXZlbnQsc291cmNlLFNPVVJDRV9MSVNUKVwiIGNsYXNzPVwicC1waWNrbGlzdC1maWx0ZXItaW5wdXQgcC1pbnB1dHRleHQgcC1jb21wb25lbnRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJzb3VyY2VGaWx0ZXJQbGFjZWhvbGRlclwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYVNvdXJjZUZpbHRlckxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtcGlja2xpc3QtZmlsdGVyLWljb24gcGkgcGktc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dWwgI3NvdXJjZWxpc3QgY2xhc3M9XCJwLXBpY2tsaXN0LWxpc3QgcC1waWNrbGlzdC1zb3VyY2VcIiBjZGtEcm9wTGlzdCBbY2RrRHJvcExpc3REYXRhXT1cInNvdXJjZVwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwib25Ecm9wKCRldmVudCwgU09VUkNFX0xJU1QpXCJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwic291cmNlU3R5bGVcIiByb2xlPVwibGlzdGJveFwiIGFyaWEtbXVsdGlzZWxlY3RhYmxlPVwibXVsdGlwbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIFtuZ0Zvck9mXT1cInNvdXJjZVwiIFtuZ0ZvclRyYWNrQnldPVwic291cmNlVHJhY2tCeSB8fCB0cmFja0J5XCIgbGV0LWk9XCJpbmRleFwiIGxldC1sPVwibGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cInsncC1waWNrbGlzdC1pdGVtJzp0cnVlLCdwLWhpZ2hsaWdodCc6aXNTZWxlY3RlZChpdGVtLHNlbGVjdGVkSXRlbXNTb3VyY2UpLCdwLWRpc2FibGVkJzogZGlzYWJsZWR9XCIgcFJpcHBsZSBjZGtEcmFnIFtjZGtEcmFnRGF0YV09XCJpdGVtXCIgW2Nka0RyYWdEaXNhYmxlZF09XCIhZHJhZ2Ryb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsaXRlbSxzZWxlY3RlZEl0ZW1zU291cmNlLG9uU291cmNlU2VsZWN0KVwiIChkYmxjbGljayk9XCJvblNvdXJjZUl0ZW1EYmxDbGljaygpXCIgKHRvdWNoZW5kKT1cIm9uSXRlbVRvdWNoRW5kKClcIiAoa2V5ZG93bik9XCJvbkl0ZW1LZXlkb3duKCRldmVudCxpdGVtLHNlbGVjdGVkSXRlbXNTb3VyY2Usb25Tb3VyY2VTZWxlY3QpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzSXRlbVZpc2libGUoaXRlbSwgU09VUkNFX0xJU1QpXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cIm9wdGlvblwiIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChpdGVtLCBzZWxlY3RlZEl0ZW1zU291cmNlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihzb3VyY2UgPT0gbnVsbCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSAmJiBlbXB0eU1lc3NhZ2VTb3VyY2VUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicC1waWNrbGlzdC1lbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVtcHR5TWVzc2FnZVNvdXJjZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1waWNrbGlzdC1idXR0b25zIHAtcGlja2xpc3QtdHJhbnNmZXItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSBpY29uPVwicGkgcGktYW5nbGUtcmlnaHRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwibW92ZVJpZ2h0KClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIHBSaXBwbGUgaWNvbj1cInBpIHBpLWFuZ2xlLWRvdWJsZS1yaWdodFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjbGljayk9XCJtb3ZlQWxsUmlnaHQoKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSBpY29uPVwicGkgcGktYW5nbGUtbGVmdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjbGljayk9XCJtb3ZlTGVmdCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIGljb249XCJwaSBwaS1hbmdsZS1kb3VibGUtbGVmdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjbGljayk9XCJtb3ZlQWxsTGVmdCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBpY2tsaXN0LWxpc3Qtd3JhcHBlciBwLXBpY2tsaXN0LXRhcmdldC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcGlja2xpc3QtaGVhZGVyXCIgKm5nSWY9XCJ0YXJnZXRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcGlja2xpc3QtdGl0bGVcIiAqbmdJZj1cInRhcmdldEhlYWRlclwiPnt7dGFyZ2V0SGVhZGVyfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1waWNrbGlzdC1maWx0ZXItY29udGFpbmVyXCIgKm5nSWY9XCJmaWx0ZXJCeSAmJiBzaG93VGFyZ2V0RmlsdGVyICE9PSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1waWNrbGlzdC1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjdGFyZ2V0RmlsdGVyIHR5cGU9XCJ0ZXh0XCIgcm9sZT1cInRleHRib3hcIiAoa2V5dXApPVwib25GaWx0ZXIoJGV2ZW50LHRhcmdldCxUQVJHRVRfTElTVClcIiBjbGFzcz1cInAtcGlja2xpc3QtZmlsdGVyLWlucHV0IHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwidGFyZ2V0RmlsdGVyUGxhY2Vob2xkZXJcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFUYXJnZXRGaWx0ZXJMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXBpY2tsaXN0LWZpbHRlci1pY29uIHBpIHBpLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsICN0YXJnZXRsaXN0IGNsYXNzPVwicC1waWNrbGlzdC1saXN0IHAtcGlja2xpc3QtdGFyZ2V0XCIgY2RrRHJvcExpc3QgW2Nka0Ryb3BMaXN0RGF0YV09XCJ0YXJnZXRcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cIm9uRHJvcCgkZXZlbnQsIFRBUkdFVF9MSVNUKVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInRhcmdldFN0eWxlXCIgcm9sZT1cImxpc3Rib3hcIiBhcmlhLW11bHRpc2VsZWN0YWJsZT1cIm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJ0YXJnZXRcIiBbbmdGb3JUcmFja0J5XT1cInRhcmdldFRyYWNrQnkgfHwgdHJhY2tCeVwiIGxldC1pPVwiaW5kZXhcIiBsZXQtbD1cImxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XCJ7J3AtcGlja2xpc3QtaXRlbSc6dHJ1ZSwncC1oaWdobGlnaHQnOmlzU2VsZWN0ZWQoaXRlbSxzZWxlY3RlZEl0ZW1zVGFyZ2V0KSwgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIiBwUmlwcGxlIGNka0RyYWcgW2Nka0RyYWdEYXRhXT1cIml0ZW1cIiBbY2RrRHJhZ0Rpc2FibGVkXT1cIiFkcmFnZHJvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCxpdGVtLHNlbGVjdGVkSXRlbXNUYXJnZXQsb25UYXJnZXRTZWxlY3QpXCIgKGRibGNsaWNrKT1cIm9uVGFyZ2V0SXRlbURibENsaWNrKClcIiAodG91Y2hlbmQpPVwib25JdGVtVG91Y2hFbmQoKVwiIChrZXlkb3duKT1cIm9uSXRlbUtleWRvd24oJGV2ZW50LGl0ZW0sc2VsZWN0ZWRJdGVtc1RhcmdldCxvblRhcmdldFNlbGVjdClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNJdGVtVmlzaWJsZShpdGVtLCBUQVJHRVRfTElTVClcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwib3B0aW9uXCIgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpc1NlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSXRlbXNUYXJnZXQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGl9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHRhcmdldCA9PSBudWxsIHx8IHRhcmdldC5sZW5ndGggPT09IDApICYmIGVtcHR5TWVzc2FnZVRhcmdldFRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLXBpY2tsaXN0LWVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW1wdHlNZXNzYWdlVGFyZ2V0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBpY2tsaXN0LWJ1dHRvbnMgcC1waWNrbGlzdC10YXJnZXQtY29udHJvbHNcIiAqbmdJZj1cInNob3dUYXJnZXRDb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSBpY29uPVwicGkgcGktYW5nbGUtdXBcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwibW92ZVVwKHRhcmdldGxpc3QsdGFyZ2V0LHNlbGVjdGVkSXRlbXNUYXJnZXQsb25UYXJnZXRSZW9yZGVyLFRBUkdFVF9MSVNUKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSBpY29uPVwicGkgcGktYW5nbGUtZG91YmxlLXVwXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIm1vdmVUb3AodGFyZ2V0bGlzdCx0YXJnZXQsc2VsZWN0ZWRJdGVtc1RhcmdldCxvblRhcmdldFJlb3JkZXIsVEFSR0VUX0xJU1QpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIGljb249XCJwaSBwaS1hbmdsZS1kb3duXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIm1vdmVEb3duKHRhcmdldGxpc3QsdGFyZ2V0LHNlbGVjdGVkSXRlbXNUYXJnZXQsb25UYXJnZXRSZW9yZGVyLFRBUkdFVF9MSVNUKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSBpY29uPVwicGkgcGktYW5nbGUtZG91YmxlLWRvd25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwibW92ZUJvdHRvbSh0YXJnZXRsaXN0LHRhcmdldCxzZWxlY3RlZEl0ZW1zVGFyZ2V0LG9uVGFyZ2V0UmVvcmRlcixUQVJHRVRfTElTVClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGlja2xpc3QuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGlja0xpc3QgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkLEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgQElucHV0KCkgc291cmNlOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIHRhcmdldDogYW55W107XG5cbiAgICBASW5wdXQoKSBzb3VyY2VIZWFkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRhcmdldEhlYWRlcjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRyYWNrQnk6IEZ1bmN0aW9uID0gKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgPT4gaXRlbTtcblxuICAgIEBJbnB1dCgpIHNvdXJjZVRyYWNrQnk6IEZ1bmN0aW9uO1xuXG4gICAgQElucHV0KCkgdGFyZ2V0VHJhY2tCeTogRnVuY3Rpb247XG5cbiAgICBASW5wdXQoKSBzaG93U291cmNlRmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHNob3dUYXJnZXRGaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgbWV0YUtleVNlbGVjdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkcmFnZHJvcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNvdXJjZVN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSB0YXJnZXRTdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc2hvd1NvdXJjZUNvbnRyb2xzOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHNob3dUYXJnZXRDb250cm9sczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBzb3VyY2VGaWx0ZXJQbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGFyZ2V0RmlsdGVyUGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBhcmlhU291cmNlRmlsdGVyTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFUYXJnZXRGaWx0ZXJMYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmlsdGVyTWF0Y2hNb2RlOiBzdHJpbmcgPSBcImNvbnRhaW5zXCI7XG5cbiAgICBASW5wdXQoKSBicmVha3BvaW50OiBzdHJpbmcgPSBcIjk2MHB4XCI7XG5cbiAgICBAT3V0cHV0KCkgb25Nb3ZlVG9Tb3VyY2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTW92ZUFsbFRvU291cmNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbk1vdmVBbGxUb1RhcmdldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Nb3ZlVG9UYXJnZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU291cmNlUmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25UYXJnZXRSZW9yZGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblNvdXJjZVNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25UYXJnZXRTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU291cmNlRmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblRhcmdldEZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAVmlld0NoaWxkKCdzb3VyY2VsaXN0JykgbGlzdFZpZXdTb3VyY2VDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ3RhcmdldGxpc3QnKSBsaXN0Vmlld1RhcmdldENoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnc291cmNlRmlsdGVyJykgc291cmNlRmlsdGVyVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgndGFyZ2V0RmlsdGVyJykgdGFyZ2V0RmlsdGVyVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHB1YmxpYyB2aXNpYmxlT3B0aW9uc1NvdXJjZTogYW55W107XG5cbiAgICBwdWJsaWMgdmlzaWJsZU9wdGlvbnNUYXJnZXQ6IGFueVtdO1xuXG4gICAgc2VsZWN0ZWRJdGVtc1NvdXJjZTogYW55W10gPSBbXTtcblxuICAgIHNlbGVjdGVkSXRlbXNUYXJnZXQ6IGFueVtdID0gW107XG5cbiAgICByZW9yZGVyZWRMaXN0RWxlbWVudDogYW55O1xuXG4gICAgbW92ZWRVcDogYm9vbGVhbjtcblxuICAgIG1vdmVkRG93bjogYm9vbGVhbjtcblxuICAgIGl0ZW1Ub3VjaGVkOiBib29sZWFuO1xuXG4gICAgc3R5bGVFbGVtZW50OiBhbnk7XG5cbiAgICBpZDogc3RyaW5nID0gVW5pcXVlQ29tcG9uZW50SWQoKTtcblxuICAgIGZpbHRlclZhbHVlU291cmNlOiBzdHJpbmc7XG5cbiAgICBmaWx0ZXJWYWx1ZVRhcmdldDogc3RyaW5nO1xuXG4gICAgZnJvbUxpc3RUeXBlOiBudW1iZXI7XG5cbiAgICBlbXB0eU1lc3NhZ2VTb3VyY2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGVtcHR5TWVzc2FnZVRhcmdldFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcmVhZG9ubHkgU09VUkNFX0xJU1QgPSAtMTtcblxuICAgIHJlYWRvbmx5IFRBUkdFVF9MSVNUID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGZpbHRlclNlcnZpY2U6IEZpbHRlclNlcnZpY2UpIHt9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eW1lc3NhZ2Vzb3VyY2UnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZVNvdXJjZVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5bWVzc2FnZXRhcmdldCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlNZXNzYWdlVGFyZ2V0VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICBpZiAodGhpcy5tb3ZlZFVwfHx0aGlzLm1vdmVkRG93bikge1xuICAgICAgICAgICAgbGV0IGxpc3RJdGVtcyA9IERvbUhhbmRsZXIuZmluZCh0aGlzLnJlb3JkZXJlZExpc3RFbGVtZW50LCAnbGkucC1oaWdobGlnaHQnKTtcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubW92ZWRVcClcbiAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IGxpc3RJdGVtc1swXTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IGxpc3RJdGVtc1tsaXN0SXRlbXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIERvbUhhbmRsZXIuc2Nyb2xsSW5WaWV3KHRoaXMucmVvcmRlcmVkTGlzdEVsZW1lbnQsIGxpc3RJdGVtKTtcbiAgICAgICAgICAgIHRoaXMubW92ZWRVcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tb3ZlZERvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVvcmRlcmVkTGlzdEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW06IGFueSwgc2VsZWN0ZWRJdGVtczogYW55W10sIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhJblNlbGVjdGlvbihpdGVtLHNlbGVjdGVkSXRlbXMpO1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSAoaW5kZXggIT0gLTEpO1xuICAgICAgICBsZXQgbWV0YVNlbGVjdGlvbiA9IHRoaXMuaXRlbVRvdWNoZWQgPyBmYWxzZSA6IHRoaXMubWV0YUtleVNlbGVjdGlvbjtcblxuICAgICAgICBpZiAobWV0YVNlbGVjdGlvbikge1xuICAgICAgICAgICAgbGV0IG1ldGFLZXkgPSAoZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXkpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgbWV0YUtleSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZClcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2suZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIGl0ZW1zOiBzZWxlY3RlZEl0ZW1zfSk7XG5cbiAgICAgICAgdGhpcy5pdGVtVG91Y2hlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU291cmNlSXRlbURibENsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICB9XG5cbiAgICBvblRhcmdldEl0ZW1EYmxDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICB9XG5cbiAgICBvbkZpbHRlcihldmVudDogS2V5Ym9hcmRFdmVudCwgZGF0YTogYW55W10sIGxpc3RUeXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gKCg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS52YWx1ZS50cmltKCkgYXMgYW55KS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgICAgIGlmIChsaXN0VHlwZSA9PT0gdGhpcy5TT1VSQ0VfTElTVClcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWVTb3VyY2UgPSBxdWVyeTtcbiAgICAgICAgZWxzZSBpZiAobGlzdFR5cGUgPT09IHRoaXMuVEFSR0VUX0xJU1QpXG4gICAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlVGFyZ2V0ID0gcXVlcnk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZpbHRlcihkYXRhLCBsaXN0VHlwZSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKGRhdGE6IGFueVtdLCBsaXN0VHlwZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzZWFyY2hGaWVsZHMgPSB0aGlzLmZpbHRlckJ5LnNwbGl0KCcsJyk7XG5cbiAgICAgICAgaWYgKGxpc3RUeXBlID09PSB0aGlzLlNPVVJDRV9MSVNUKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVPcHRpb25zU291cmNlID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmZpbHRlcihkYXRhLCBzZWFyY2hGaWVsZHMsIHRoaXMuZmlsdGVyVmFsdWVTb3VyY2UsIHRoaXMuZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgICAgICAgICB0aGlzLm9uU291cmNlRmlsdGVyLmVtaXQoe3F1ZXJ5OiB0aGlzLmZpbHRlclZhbHVlU291cmNlLCB2YWx1ZTogdGhpcy52aXNpYmxlT3B0aW9uc1NvdXJjZX0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxpc3RUeXBlID09PSB0aGlzLlRBUkdFVF9MSVNUKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVPcHRpb25zVGFyZ2V0ID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmZpbHRlcihkYXRhLCBzZWFyY2hGaWVsZHMsIHRoaXMuZmlsdGVyVmFsdWVUYXJnZXQsIHRoaXMuZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgICAgICAgICB0aGlzLm9uVGFyZ2V0RmlsdGVyLmVtaXQoe3F1ZXJ5OiB0aGlzLmZpbHRlclZhbHVlVGFyZ2V0LCB2YWx1ZTogdGhpcy52aXNpYmxlT3B0aW9uc1RhcmdldH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNJdGVtVmlzaWJsZShpdGVtOiBhbnksIGxpc3RUeXBlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGxpc3RUeXBlID09IHRoaXMuU09VUkNFX0xJU1QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Zpc2libGVJbkxpc3QodGhpcy52aXNpYmxlT3B0aW9uc1NvdXJjZSwgaXRlbSwgdGhpcy5maWx0ZXJWYWx1ZVNvdXJjZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZUluTGlzdCh0aGlzLnZpc2libGVPcHRpb25zVGFyZ2V0LCBpdGVtLCB0aGlzLmZpbHRlclZhbHVlVGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpc1Zpc2libGVJbkxpc3QoZGF0YTogYW55W10sIGl0ZW06IGFueSwgZmlsdGVyVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZmlsdGVyVmFsdWUgJiYgZmlsdGVyVmFsdWUudHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PSBkYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtVG91Y2hFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1Ub3VjaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNvcnRCeUluZGV4SW5MaXN0KGl0ZW1zOiBhbnlbXSwgbGlzdDogYW55KSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5zb3J0KChpdGVtMSwgaXRlbTIpID0+XG4gICAgICAgICAgICBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QoaXRlbTEsIGxpc3QpIC0gT2JqZWN0VXRpbHMuZmluZEluZGV4SW5MaXN0KGl0ZW0yLCBsaXN0KSk7XG4gICAgfVxuXG4gICAgbW92ZVVwKGxpc3RFbGVtZW50LCBsaXN0LCBzZWxlY3RlZEl0ZW1zLCBjYWxsYmFjaywgbGlzdFR5cGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMgJiYgc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMgPSB0aGlzLnNvcnRCeUluZGV4SW5MaXN0KHNlbGVjdGVkSXRlbXMsIGxpc3QpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdChzZWxlY3RlZEl0ZW0sIGxpc3QpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUluZGV4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVkSXRlbSA9IGxpc3Rbc2VsZWN0ZWRJdGVtSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGxpc3Rbc2VsZWN0ZWRJdGVtSW5kZXgtMV07XG4gICAgICAgICAgICAgICAgICAgIGxpc3Rbc2VsZWN0ZWRJdGVtSW5kZXgtMV0gPSBtb3ZlZEl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGxpc3Rbc2VsZWN0ZWRJdGVtSW5kZXhdID0gdGVtcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2Ryb3AgJiYgKCh0aGlzLmZpbHRlclZhbHVlU291cmNlICYmIGxpc3RUeXBlID09PSB0aGlzLlNPVVJDRV9MSVNUKSB8fCAodGhpcy5maWx0ZXJWYWx1ZVRhcmdldCAmJiBsaXN0VHlwZSA9PT0gdGhpcy5UQVJHRVRfTElTVCkpKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKGxpc3QsIGxpc3RUeXBlKTtcblxuICAgICAgICAgICAgdGhpcy5tb3ZlZFVwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVvcmRlcmVkTGlzdEVsZW1lbnQgPSBsaXN0RWxlbWVudDtcbiAgICAgICAgICAgIGNhbGxiYWNrLmVtaXQoe2l0ZW1zOiBzZWxlY3RlZEl0ZW1zfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlVG9wKGxpc3RFbGVtZW50LCBsaXN0LCBzZWxlY3RlZEl0ZW1zLCBjYWxsYmFjaywgbGlzdFR5cGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMgJiYgc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMgPSB0aGlzLnNvcnRCeUluZGV4SW5MaXN0KHNlbGVjdGVkSXRlbXMsIGxpc3QpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdChzZWxlY3RlZEl0ZW0sIGxpc3QpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUluZGV4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVkSXRlbSA9IGxpc3Quc3BsaWNlKHNlbGVjdGVkSXRlbUluZGV4LDEpWzBdO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnVuc2hpZnQobW92ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2Ryb3AgJiYgKCh0aGlzLmZpbHRlclZhbHVlU291cmNlICYmIGxpc3RUeXBlID09PSB0aGlzLlNPVVJDRV9MSVNUKSB8fCAodGhpcy5maWx0ZXJWYWx1ZVRhcmdldCAmJiBsaXN0VHlwZSA9PT0gdGhpcy5UQVJHRVRfTElTVCkpKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKGxpc3QsIGxpc3RUeXBlKTtcblxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIGNhbGxiYWNrLmVtaXQoe2l0ZW1zOiBzZWxlY3RlZEl0ZW1zfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlRG93bihsaXN0RWxlbWVudCwgbGlzdCwgc2VsZWN0ZWRJdGVtcywgY2FsbGJhY2ssIGxpc3RUeXBlKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zICYmIHNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zID0gdGhpcy5zb3J0QnlJbmRleEluTGlzdChzZWxlY3RlZEl0ZW1zLCBsaXN0KTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdChzZWxlY3RlZEl0ZW0sIGxpc3QpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUluZGV4ICE9IChsaXN0Lmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlZEl0ZW0gPSBsaXN0W3NlbGVjdGVkSXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBsaXN0W3NlbGVjdGVkSXRlbUluZGV4KzFdO1xuICAgICAgICAgICAgICAgICAgICBsaXN0W3NlbGVjdGVkSXRlbUluZGV4KzFdID0gbW92ZWRJdGVtO1xuICAgICAgICAgICAgICAgICAgICBsaXN0W3NlbGVjdGVkSXRlbUluZGV4XSA9IHRlbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdkcm9wICYmICgodGhpcy5maWx0ZXJWYWx1ZVNvdXJjZSAmJiBsaXN0VHlwZSA9PT0gdGhpcy5TT1VSQ0VfTElTVCkgfHwgKHRoaXMuZmlsdGVyVmFsdWVUYXJnZXQgJiYgbGlzdFR5cGUgPT09IHRoaXMuVEFSR0VUX0xJU1QpKSlcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcihsaXN0LCBsaXN0VHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXMubW92ZWREb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVvcmRlcmVkTGlzdEVsZW1lbnQgPSBsaXN0RWxlbWVudDtcbiAgICAgICAgICAgIGNhbGxiYWNrLmVtaXQoe2l0ZW1zOiBzZWxlY3RlZEl0ZW1zfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tKGxpc3RFbGVtZW50LCBsaXN0LCBzZWxlY3RlZEl0ZW1zLCBjYWxsYmFjaywgbGlzdFR5cGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMgJiYgc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMgPSB0aGlzLnNvcnRCeUluZGV4SW5MaXN0KHNlbGVjdGVkSXRlbXMsIGxpc3QpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gT2JqZWN0VXRpbHMuZmluZEluZGV4SW5MaXN0KHNlbGVjdGVkSXRlbSwgbGlzdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtSW5kZXggIT0gKGxpc3QubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVkSXRlbSA9IGxpc3Quc3BsaWNlKHNlbGVjdGVkSXRlbUluZGV4LDEpWzBdO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobW92ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2Ryb3AgJiYgKCh0aGlzLmZpbHRlclZhbHVlU291cmNlICYmIGxpc3RUeXBlID09PSB0aGlzLlNPVVJDRV9MSVNUKSB8fCAodGhpcy5maWx0ZXJWYWx1ZVRhcmdldCAmJiBsaXN0VHlwZSA9PT0gdGhpcy5UQVJHRVRfTElTVCkpKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKGxpc3QsIGxpc3RUeXBlKTtcblxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuc2Nyb2xsVG9wID0gbGlzdEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgY2FsbGJhY2suZW1pdCh7aXRlbXM6IHNlbGVjdGVkSXRlbXN9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtc1NvdXJjZSAmJiB0aGlzLnNlbGVjdGVkSXRlbXNTb3VyY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEl0ZW1zU291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtc1NvdXJjZVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0VXRpbHMuZmluZEluZGV4SW5MaXN0KHNlbGVjdGVkSXRlbSwgdGhpcy50YXJnZXQpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnB1c2godGhpcy5zb3VyY2Uuc3BsaWNlKE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdChzZWxlY3RlZEl0ZW0sIHRoaXMuc291cmNlKSwxKVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vbk1vdmVUb1RhcmdldC5lbWl0KHtcbiAgICAgICAgICAgICAgICBpdGVtczogdGhpcy5zZWxlY3RlZEl0ZW1zU291cmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc1NvdXJjZSA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZVRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKHRoaXMudGFyZ2V0LCB0aGlzLlRBUkdFVF9MSVNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVBbGxSaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICBsZXQgbW92ZWRJdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0l0ZW1WaXNpYmxlKHRoaXMuc291cmNlW2ldLCB0aGlzLlNPVVJDRV9MSVNUKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlZEl0ZW0gPSB0aGlzLnNvdXJjZS5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnB1c2gocmVtb3ZlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlZEl0ZW1zLnB1c2gocmVtb3ZlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9uTW92ZUFsbFRvVGFyZ2V0LmVtaXQoe1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zU291cmNlID0gW107XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIodGhpcy50YXJnZXQsIHRoaXMuVEFSR0VUX0xJU1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXNUYXJnZXQgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zVGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRJdGVtc1RhcmdldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXNUYXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdChzZWxlY3RlZEl0ZW0sIHRoaXMuc291cmNlKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKHRoaXMudGFyZ2V0LnNwbGljZShPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3Qoc2VsZWN0ZWRJdGVtLCB0aGlzLnRhcmdldCksMSlbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25Nb3ZlVG9Tb3VyY2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuc2VsZWN0ZWRJdGVtc1RhcmdldFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc1RhcmdldCA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZVNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKHRoaXMuc291cmNlLCB0aGlzLlNPVVJDRV9MSVNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVBbGxMZWZ0KCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGxldCBtb3ZlZEl0ZW1zID0gW107XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRhcmdldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSXRlbVZpc2libGUodGhpcy50YXJnZXRbaV0sIHRoaXMuVEFSR0VUX0xJU1QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmVkSXRlbSA9IHRoaXMudGFyZ2V0LnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UucHVzaChyZW1vdmVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVkSXRlbXMucHVzaChyZW1vdmVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub25Nb3ZlQWxsVG9Tb3VyY2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgaXRlbXM6IG1vdmVkSXRlbXNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNUYXJnZXQgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcih0aGlzLnNvdXJjZSwgdGhpcy5TT1VSQ0VfTElTVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKGl0ZW06IGFueSwgc2VsZWN0ZWRJdGVtczogYW55W10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWRJdGVtcykgIT0gLTE7XG4gICAgfVxuXG4gICAgZmluZEluZGV4SW5TZWxlY3Rpb24oaXRlbTogYW55LCBzZWxlY3RlZEl0ZW1zOiBhbnlbXSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QoaXRlbSwgc2VsZWN0ZWRJdGVtcyk7XG4gICAgfVxuXG4gICAgb25Ecm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4sIGxpc3RUeXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGlzVHJhbnNmZXIgPSBldmVudC5wcmV2aW91c0NvbnRhaW5lciAhPT0gZXZlbnQuY29udGFpbmVyO1xuICAgICAgICBsZXQgZHJvcEluZGV4ZXMgPSB0aGlzLmdldERyb3BJbmRleGVzKGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCwgbGlzdFR5cGUsIGlzVHJhbnNmZXIsIGV2ZW50Lml0ZW0uZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBpZiAobGlzdFR5cGUgPT09IHRoaXMuU09VUkNFX0xJU1QpIHtcbiAgICAgICAgICAgIGlmIChpc1RyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSwgZXZlbnQuY29udGFpbmVyLmRhdGEsIGRyb3BJbmRleGVzLnByZXZpb3VzSW5kZXgsIGRyb3BJbmRleGVzLmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZU9wdGlvbnNUYXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZU9wdGlvbnNUYXJnZXQuc3BsaWNlKGV2ZW50LnByZXZpb3VzSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMub25Nb3ZlVG9Tb3VyY2UuZW1pdCh7aXRlbXM6IGV2ZW50Lml0ZW0uZGF0YX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBkcm9wSW5kZXhlcy5wcmV2aW91c0luZGV4LCBkcm9wSW5kZXhlcy5jdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Tb3VyY2VSZW9yZGVyLmVtaXQoe2l0ZW1zOiBldmVudC5pdGVtLmRhdGF9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcih0aGlzLnNvdXJjZSwgdGhpcy5TT1VSQ0VfTElTVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBkcm9wSW5kZXhlcy5wcmV2aW91c0luZGV4LCBkcm9wSW5kZXhlcy5jdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVPcHRpb25zU291cmNlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVPcHRpb25zU291cmNlLnNwbGljZShldmVudC5wcmV2aW91c0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW92ZVRvVGFyZ2V0LmVtaXQoe2l0ZW1zOiBldmVudC5pdGVtLmRhdGF9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZHJvcEluZGV4ZXMucHJldmlvdXNJbmRleCwgZHJvcEluZGV4ZXMuY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFyZ2V0UmVvcmRlci5lbWl0KHtpdGVtczogZXZlbnQuaXRlbS5kYXRhfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIodGhpcy50YXJnZXQsIHRoaXMuVEFSR0VUX0xJU1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RHJvcEluZGV4ZXMoZnJvbUluZGV4LCB0b0luZGV4LCBkcm9wcGVkTGlzdCwgaXNUcmFuc2ZlciwgZGF0YSkge1xuICAgICAgICBsZXQgcHJldmlvdXNJbmRleCwgY3VycmVudEluZGV4O1xuXG4gICAgICAgIGlmIChkcm9wcGVkTGlzdCA9PT0gdGhpcy5TT1VSQ0VfTElTVCkge1xuICAgICAgICAgICAgcHJldmlvdXNJbmRleCA9IGlzVHJhbnNmZXIgPyB0aGlzLmZpbHRlclZhbHVlVGFyZ2V0ID8gT2JqZWN0VXRpbHMuZmluZEluZGV4SW5MaXN0KGRhdGEsIHRoaXMudGFyZ2V0KSA6IGZyb21JbmRleCA6IHRoaXMuZmlsdGVyVmFsdWVTb3VyY2UgPyBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QoZGF0YSwgdGhpcy5zb3VyY2UpIDogZnJvbUluZGV4O1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gdGhpcy5maWx0ZXJWYWx1ZVNvdXJjZSA/IHRoaXMuZmluZEZpbHRlcmVkQ3VycmVudEluZGV4KHRoaXMudmlzaWJsZU9wdGlvbnNTb3VyY2UsIHRvSW5kZXgsIHRoaXMuc291cmNlKSA6IHRvSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaXNUcmFuc2ZlciA/IHRoaXMuZmlsdGVyVmFsdWVTb3VyY2UgPyBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QoZGF0YSwgdGhpcy5zb3VyY2UpIDogZnJvbUluZGV4IDogdGhpcy5maWx0ZXJWYWx1ZVRhcmdldCA/IE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdChkYXRhLCB0aGlzLnRhcmdldCkgOiBmcm9tSW5kZXg7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmZpbHRlclZhbHVlVGFyZ2V0ID8gdGhpcy5maW5kRmlsdGVyZWRDdXJyZW50SW5kZXgodGhpcy52aXNpYmxlT3B0aW9uc1RhcmdldCwgdG9JbmRleCwgdGhpcy50YXJnZXQpIDogdG9JbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7cHJldmlvdXNJbmRleCwgY3VycmVudEluZGV4fTtcbiAgICB9XG5cbiAgICBmaW5kRmlsdGVyZWRDdXJyZW50SW5kZXgodmlzaWJsZU9wdGlvbnMsIGluZGV4LCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh2aXNpYmxlT3B0aW9ucy5sZW5ndGggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBsZXQgdG9JbmRleCA9IE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdCh2aXNpYmxlT3B0aW9uc1tpbmRleC0xXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0b0luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QodmlzaWJsZU9wdGlvbnNbaW5kZXhdLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0RmlsdGVyKCkge1xuICAgICAgICB0aGlzLnZpc2libGVPcHRpb25zU291cmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZVNvdXJjZSA9IG51bGw7XG4gICAgICAgIHRoaXMudmlzaWJsZU9wdGlvbnNUYXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbHRlclZhbHVlVGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+IHRoaXMuc291cmNlRmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpLnZhbHVlID0gJyc7XG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD4gdGhpcy50YXJnZXRGaWx0ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBvbkl0ZW1LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpdGVtOiBhbnksIHNlbGVjdGVkSXRlbXM6IGFueVtdLCBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gPEhUTUxMSUVsZW1lbnQ+IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAvL2Rvd25cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgdmFyIG5leHRJdGVtID0gdGhpcy5maW5kTmV4dEl0ZW0obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy91cFxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB2YXIgcHJldkl0ZW0gPSB0aGlzLmZpbmRQcmV2SXRlbShsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2VudGVyXG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIHNlbGVjdGVkSXRlbXMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kTmV4dEl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgbmV4dEl0ZW0gPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAobmV4dEl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gIURvbUhhbmRsZXIuaGFzQ2xhc3MobmV4dEl0ZW0sICdwLXBpY2tsaXN0LWl0ZW0nKSB8fCBEb21IYW5kbGVyLmlzSGlkZGVuKG5leHRJdGVtKSA/IHRoaXMuZmluZE5leHRJdGVtKG5leHRJdGVtKSA6IG5leHRJdGVtO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaW5kUHJldkl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgcHJldkl0ZW0gPSBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHByZXZJdGVtKVxuICAgICAgICAgICAgcmV0dXJuICFEb21IYW5kbGVyLmhhc0NsYXNzKHByZXZJdGVtLCAncC1waWNrbGlzdC1pdGVtJykgfHwgRG9tSGFuZGxlci5pc0hpZGRlbihwcmV2SXRlbSkgPyB0aGlzLmZpbmRQcmV2SXRlbShwcmV2SXRlbSkgOiBwcmV2SXRlbTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlU3R5bGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUodGhpcy5pZCwgJycpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuc3R5bGVFbGVtZW50KTtcblxuICAgICAgICAgICAgbGV0IGlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhpcy5icmVha3BvaW50fSkge1xuICAgICAgICAgICAgICAgIC5wLXBpY2tsaXN0WyR7dGhpcy5pZH1dIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAucC1waWNrbGlzdFske3RoaXMuaWR9XSAucC1waWNrbGlzdC1idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGVudC1wYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAucC1waWNrbGlzdFske3RoaXMuaWR9XSAucC1waWNrbGlzdC1idXR0b25zIC5wLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW5saW5lLXNwYWNpbmcpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5wLXBpY2tsaXN0WyR7dGhpcy5pZH1dIC5wLXBpY2tsaXN0LWJ1dHRvbnMgLnAtYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnAtcGlja2xpc3RbJHt0aGlzLmlkfV0gLnBpLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxcXGU5MzBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5wLXBpY2tsaXN0WyR7dGhpcy5pZH1dIC5waS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXFxcZTkyY1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnAtcGlja2xpc3RbJHt0aGlzLmlkfV0gLnBpLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXFxcZTkzM1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnAtcGlja2xpc3RbJHt0aGlzLmlkfV0gLnBpLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxcXGU5MmZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3lTdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGVFbGVtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHRoaXMuc3R5bGVFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVFbGVtZW50ID0gbnVsbDtgYFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveVN0eWxlKCk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsQnV0dG9uTW9kdWxlLFNoYXJlZE1vZHVsZSxSaXBwbGVNb2R1bGUsRHJhZ0Ryb3BNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQaWNrTGlzdCxTaGFyZWRNb2R1bGUsRHJhZ0Ryb3BNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1BpY2tMaXN0XVxufSlcbmV4cG9ydCBjbGFzcyBQaWNrTGlzdE1vZHVsZSB7IH1cbiJdfQ==