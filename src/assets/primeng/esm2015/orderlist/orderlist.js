import { NgModule, Component, ElementRef, Input, Output, ContentChildren, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SharedModule, PrimeTemplate, FilterService } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { RippleModule } from 'primeng/ripple';
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/button';
import * as ɵngcc4 from 'primeng/ripple';
import * as ɵngcc5 from '@angular/cdk/drag-drop';

const _c0 = ["listelement"];
function OrderList_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.header);
} }
function OrderList_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelementStart(1, "div", 15);
    ɵngcc0.ɵɵelementStart(2, "input", 16);
    ɵngcc0.ɵɵlistener("keyup", function OrderList_div_8_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onFilterKeyup($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "span", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r1.filterPlaceholder)("aria-label", ctx_r1.ariaFilterLabel);
} }
function OrderList_ng_template_11_li_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { "p-highlight": a0 }; };
const _c2 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function OrderList_ng_template_11_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 19);
    ɵngcc0.ɵɵlistener("click", function OrderList_ng_template_11_li_0_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(); const item_r6 = ctx_r13.$implicit; const i_r7 = ctx_r13.index; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onItemClick($event, item_r6, i_r7); })("touchend", function OrderList_ng_template_11_li_0_Template_li_touchend_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onItemTouchEnd(); })("keydown", function OrderList_ng_template_11_li_0_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r16 = ɵngcc0.ɵɵnextContext(); const item_r6 = ctx_r16.$implicit; const i_r7 = ctx_r16.index; const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onItemKeydown($event, item_r6, i_r7); });
    ɵngcc0.ɵɵtemplate(1, OrderList_ng_template_11_li_0_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext();
    const item_r6 = ctx_r17.$implicit;
    const i_r7 = ctx_r17.index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c1, ctx_r9.isSelected(item_r6)))("cdkDragData", item_r6)("cdkDragDisabled", !ctx_r9.dragdrop);
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r9.isSelected(item_r6));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r9.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(8, _c2, item_r6, i_r7));
} }
function OrderList_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, OrderList_ng_template_11_li_0_Template, 2, 11, "li", 18);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.isItemVisible(item_r6));
} }
const _c3 = function (a1, a2) { return { "p-orderlist p-component": true, "p-orderlist-controls-left": a1, "p-orderlist-controls-right": a2 }; };
export class OrderList {
    constructor(el, cd, filterService) {
        this.el = el;
        this.cd = cd;
        this.filterService = filterService;
        this.metaKeySelection = true;
        this.dragdrop = false;
        this.controlsPosition = 'left';
        this.filterMatchMode = "contains";
        this.breakpoint = "960px";
        this.selectionChange = new EventEmitter();
        this.trackBy = (index, item) => item;
        this.onReorder = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onFilterEvent = new EventEmitter();
        this.id = UniqueComponentId();
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
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
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewChecked() {
        if (this.movedUp || this.movedDown) {
            let listItems = DomHandler.find(this.listViewChild.nativeElement, 'li.p-highlight');
            let listItem;
            if (listItems.length > 0) {
                if (this.movedUp)
                    listItem = listItems[0];
                else
                    listItem = listItems[listItems.length - 1];
                DomHandler.scrollInView(this.listViewChild.nativeElement, listItem);
            }
            this.movedUp = false;
            this.movedDown = false;
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        if (this.filterValue) {
            this.filter();
        }
    }
    onItemClick(event, item, index) {
        this.itemTouched = false;
        let selectedIndex = ObjectUtils.findIndexInList(item, this.selection);
        let selected = (selectedIndex != -1);
        let metaSelection = this.itemTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey || event.shiftKey);
            if (selected && metaKey) {
                this._selection = this._selection.filter((val, index) => index !== selectedIndex);
            }
            else {
                this._selection = (metaKey) ? this._selection ? [...this._selection] : [] : [];
                ObjectUtils.insertIntoOrderedArray(item, index, this._selection, this.value);
            }
        }
        else {
            if (selected) {
                this._selection = this._selection.filter((val, index) => index !== selectedIndex);
            }
            else {
                this._selection = this._selection ? [...this._selection] : [];
                ObjectUtils.insertIntoOrderedArray(item, index, this._selection, this.value);
            }
        }
        //binding
        this.selectionChange.emit(this._selection);
        //event
        this.onSelectionChange.emit({ originalEvent: event, value: this._selection });
    }
    onFilterKeyup(event) {
        this.filterValue = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
        this.filter();
        this.onFilterEvent.emit({
            originalEvent: event,
            value: this.visibleOptions
        });
    }
    filter() {
        let searchFields = this.filterBy.split(',');
        this.visibleOptions = this.filterService.filter(this.value, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
    }
    isItemVisible(item) {
        if (this.filterValue && this.filterValue.trim().length) {
            for (let i = 0; i < this.visibleOptions.length; i++) {
                if (item == this.visibleOptions[i]) {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
    onItemTouchEnd() {
        this.itemTouched = true;
    }
    isSelected(item) {
        return ObjectUtils.findIndexInList(item, this.selection) != -1;
    }
    moveUp() {
        if (this.selection) {
            for (let i = 0; i < this.selection.length; i++) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex - 1];
                    this.value[selectedItemIndex - 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            if (this.dragdrop && this.filterValue)
                this.filter();
            this.movedUp = true;
            this.onReorder.emit(this.selection);
        }
    }
    moveTop() {
        if (this.selection) {
            for (let i = this.selection.length - 1; i >= 0; i--) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.unshift(movedItem);
                }
                else {
                    break;
                }
            }
            if (this.dragdrop && this.filterValue)
                this.filter();
            this.onReorder.emit(this.selection);
            this.listViewChild.nativeElement.scrollTop = 0;
        }
    }
    moveDown() {
        if (this.selection) {
            for (let i = this.selection.length - 1; i >= 0; i--) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex + 1];
                    this.value[selectedItemIndex + 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            if (this.dragdrop && this.filterValue)
                this.filter();
            this.movedDown = true;
            this.onReorder.emit(this.selection);
        }
    }
    moveBottom() {
        if (this.selection) {
            for (let i = 0; i < this.selection.length; i++) {
                let selectedItem = this.selection[i];
                let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.push(movedItem);
                }
                else {
                    break;
                }
            }
            if (this.dragdrop && this.filterValue)
                this.filter();
            this.onReorder.emit(this.selection);
            this.listViewChild.nativeElement.scrollTop = this.listViewChild.nativeElement.scrollHeight;
        }
    }
    onDrop(event) {
        let previousIndex = event.previousIndex;
        let currentIndex = event.currentIndex;
        if (previousIndex !== currentIndex) {
            if (this.visibleOptions) {
                if (this.filterValue) {
                    previousIndex = ObjectUtils.findIndexInList(event.item.data, this.value);
                    currentIndex = ObjectUtils.findIndexInList(this.visibleOptions[currentIndex], this.value);
                }
                moveItemInArray(this.visibleOptions, event.previousIndex, event.currentIndex);
            }
            moveItemInArray(this.value, previousIndex, currentIndex);
            this.onReorder.emit([event.item.data]);
        }
    }
    onItemKeydown(event, item, index) {
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
                this.onItemClick(event, item, index);
                event.preventDefault();
                break;
        }
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return !DomHandler.hasClass(nextItem, 'p-orderlist-item') || DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return !DomHandler.hasClass(prevItem, 'p-orderlist-item') || DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
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
                    .p-orderlist[${this.id}] {
                        flex-direction: column;
                    }

                    .p-orderlist[${this.id}] .p-orderlist-controls {
                        padding: var(--content-padding);
                        flex-direction: row;
                    }

                    .p-orderlist[${this.id}] .p-orderlist-controls .p-button {
                        margin-right: var(--inline-spacing);
                        margin-bottom: 0;
                    }

                    .p-orderlist[${this.id}] .p-orderlist-controls .p-button:last-child {
                        margin-right: 0;
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
OrderList.ɵfac = function OrderList_Factory(t) { return new (t || OrderList)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FilterService)); };
OrderList.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OrderList, selectors: [["p-orderList"]], contentQueries: function OrderList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function OrderList_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
    } }, inputs: { metaKeySelection: "metaKeySelection", dragdrop: "dragdrop", controlsPosition: "controlsPosition", filterMatchMode: "filterMatchMode", breakpoint: "breakpoint", trackBy: "trackBy", selection: "selection", value: "value", header: "header", style: "style", styleClass: "styleClass", listStyle: "listStyle", responsive: "responsive", filterBy: "filterBy", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", ariaFilterLabel: "ariaFilterLabel" }, outputs: { selectionChange: "selectionChange", onReorder: "onReorder", onSelectionChange: "onSelectionChange", onFilterEvent: "onFilterEvent" }, decls: 12, vars: 12, consts: [[3, "ngClass", "ngStyle"], [1, "p-orderlist-controls"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-up", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-up", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-down", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-down", 3, "click"], [1, "p-orderlist-list-container"], ["class", "p-orderlist-header", 4, "ngIf"], ["class", "p-orderlist-filter-container", 4, "ngIf"], ["cdkDropList", "", 1, "p-orderlist-list", 3, "ngStyle", "cdkDropListDropped"], ["listelement", ""], ["ngFor", "", 3, "ngForTrackBy", "ngForOf"], [1, "p-orderlist-header"], [1, "p-orderlist-title"], [1, "p-orderlist-filter-container"], [1, "p-orderlist-filter"], ["type", "text", "role", "textbox", 1, "p-orderlist-filter-input", "p-inputtext", "p-component", 3, "keyup"], [1, "p-orderlist-filter-icon", "pi", "pi-search"], ["class", "p-orderlist-item", "tabindex", "0", "cdkDrag", "", "pRipple", "", "role", "option", 3, "ngClass", "cdkDragData", "cdkDragDisabled", "click", "touchend", "keydown", 4, "ngIf"], ["tabindex", "0", "cdkDrag", "", "pRipple", "", "role", "option", 1, "p-orderlist-item", 3, "ngClass", "cdkDragData", "cdkDragDisabled", "click", "touchend", "keydown"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function OrderList_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2);
        ɵngcc0.ɵɵlistener("click", function OrderList_Template_button_click_2_listener() { return ctx.moveUp(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 3);
        ɵngcc0.ɵɵlistener("click", function OrderList_Template_button_click_3_listener() { return ctx.moveTop(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵlistener("click", function OrderList_Template_button_click_4_listener() { return ctx.moveDown(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 5);
        ɵngcc0.ɵɵlistener("click", function OrderList_Template_button_click_5_listener() { return ctx.moveBottom(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵtemplate(7, OrderList_div_7_Template, 3, 1, "div", 7);
        ɵngcc0.ɵɵtemplate(8, OrderList_div_8_Template, 4, 2, "div", 8);
        ɵngcc0.ɵɵelementStart(9, "ul", 9, 10);
        ɵngcc0.ɵɵlistener("cdkDropListDropped", function OrderList_Template_ul_cdkDropListDropped_9_listener($event) { return ctx.onDrop($event); });
        ɵngcc0.ɵɵtemplate(11, OrderList_ng_template_11_Template, 1, 1, "ng-template", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c3, ctx.controlsPosition === "left", ctx.controlsPosition === "right"))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.listStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForTrackBy", ctx.trackBy)("ngForOf", ctx.value);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc3.ButtonDirective, ɵngcc4.Ripple, ɵngcc2.NgIf, ɵngcc5.CdkDropList, ɵngcc2.NgForOf, ɵngcc5.CdkDrag, ɵngcc2.NgTemplateOutlet], styles: [".p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;min-height:12rem;overflow:auto;padding:0}.p-orderlist-item{cursor:pointer;display:block;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-button,.p-orderlist.p-state-disabled .p-orderlist-item{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"], encapsulation: 2, changeDetection: 0 });
OrderList.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FilterService }
];
OrderList.propDecorators = {
    header: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    listStyle: [{ type: Input }],
    responsive: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    filterLocale: [{ type: Input }],
    metaKeySelection: [{ type: Input }],
    dragdrop: [{ type: Input }],
    controlsPosition: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    breakpoint: [{ type: Input }],
    selectionChange: [{ type: Output }],
    trackBy: [{ type: Input }],
    onReorder: [{ type: Output }],
    onSelectionChange: [{ type: Output }],
    onFilterEvent: [{ type: Output }],
    listViewChild: [{ type: ViewChild, args: ['listelement',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    selection: [{ type: Input }],
    value: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrderList, [{
        type: Component,
        args: [{
                selector: 'p-orderList',
                template: `
        <div [ngClass]="{'p-orderlist p-component': true, 'p-orderlist-controls-left': controlsPosition === 'left',
                    'p-orderlist-controls-right': controlsPosition === 'right'}" [ngStyle]="style" [class]="styleClass">
            <div class="p-orderlist-controls">
                <button type="button" pButton pRipple icon="pi pi-angle-up" (click)="moveUp()"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-up" (click)="moveTop()"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-down" (click)="moveDown()"></button>
                <button type="button" pButton pRipple icon="pi pi-angle-double-down" (click)="moveBottom()"></button>
            </div>
            <div class="p-orderlist-list-container">
                <div class="p-orderlist-header" *ngIf="header">
                    <div class="p-orderlist-title">{{header}}</div>
                </div>
                <div class="p-orderlist-filter-container" *ngIf="filterBy">
                    <div class="p-orderlist-filter">
                        <input type="text" role="textbox" (keyup)="onFilterKeyup($event)" class="p-orderlist-filter-input p-inputtext p-component" [attr.placeholder]="filterPlaceholder" [attr.aria-label]="ariaFilterLabel">
                        <span class="p-orderlist-filter-icon pi pi-search"></span>
                    </div>
                </div>
                <ul #listelement cdkDropList (cdkDropListDropped)="onDrop($event)" class="p-orderlist-list" [ngStyle]="listStyle">
                    <ng-template ngFor [ngForTrackBy]="trackBy" let-item [ngForOf]="value" let-i="index" let-l="last">
                        <li class="p-orderlist-item" tabindex="0" [ngClass]="{'p-highlight':isSelected(item)}" cdkDrag pRipple [cdkDragData]="item" [cdkDragDisabled]="!dragdrop"
                            (click)="onItemClick($event,item,i)" (touchend)="onItemTouchEnd()" (keydown)="onItemKeydown($event,item,i)"
                             *ngIf="isItemVisible(item)" role="option" [attr.aria-selected]="isSelected(item)">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                        </li>
                    </ng-template>
                </ul>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;min-height:12rem;overflow:auto;padding:0}.p-orderlist-item{cursor:pointer;display:block;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-button,.p-orderlist.p-state-disabled .p-orderlist-item{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FilterService }]; }, { metaKeySelection: [{
            type: Input
        }], dragdrop: [{
            type: Input
        }], controlsPosition: [{
            type: Input
        }], filterMatchMode: [{
            type: Input
        }], breakpoint: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], trackBy: [{
            type: Input
        }], onReorder: [{
            type: Output
        }], onSelectionChange: [{
            type: Output
        }], onFilterEvent: [{
            type: Output
        }], selection: [{
            type: Input
        }], value: [{
            type: Input
        }], header: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], listStyle: [{
            type: Input
        }], responsive: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], listViewChild: [{
            type: ViewChild,
            args: ['listelement']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class OrderListModule {
}
OrderListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OrderListModule });
OrderListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function OrderListModule_Factory(t) { return new (t || OrderListModule)(); }, imports: [[CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule], SharedModule, DragDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OrderListModule, { declarations: function () { return [OrderList]; }, imports: function () { return [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule]; }, exports: function () { return [OrderList, SharedModule, DragDropModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrderListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule],
                exports: [OrderList, SharedModule, DragDropModule],
                declarations: [OrderList]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJsaXN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJsaXN0L29yZGVybGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQW1DLEtBQUssRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUF1QixZQUFZLEVBQUMsU0FBUyxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RPLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFjLGNBQWMsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDcEYsTUFBTSxPQUFPLFNBQVM7QUFBRyxJQWdFckIsWUFBbUIsRUFBYyxFQUFTLEVBQXFCLEVBQVMsYUFBNEI7QUFBSSxRQUFyRixPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBQVEsa0JBQWEsR0FBYixhQUFhLENBQWU7QUFBQyxRQTlDNUYscUJBQWdCLEdBQVksSUFBSSxDQUFDO0FBQzlDLFFBQ2EsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUN2QyxRQUNhLHFCQUFnQixHQUFXLE1BQU0sQ0FBQztBQUMvQyxRQUdhLG9CQUFlLEdBQVcsVUFBVSxDQUFDO0FBQ2xELFFBQ2EsZUFBVSxHQUFXLE9BQU8sQ0FBQztBQUMxQyxRQUNjLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDdEUsUUFDYSxZQUFPLEdBQWEsQ0FBQyxLQUFhLEVBQUUsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDcEUsUUFDYyxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDaEUsUUFDYyxzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN4RSxRQUNjLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDcEUsUUFpQkksT0FBRSxHQUFXLGlCQUFpQixFQUFFLENBQUM7QUFDckMsSUFPMkcsQ0FBQztBQUM1RyxJQUNJLElBQUksU0FBUztBQUFLLFFBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQy9CLElBQUksQ0FBQztBQUNMLElBQ0ksSUFBYSxTQUFTLENBQUMsR0FBUztBQUNwQyxRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQzlCLElBQUksQ0FBQztBQUNMLElBQ0ksUUFBUTtBQUNaLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzdCLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQy9CLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLGtCQUFrQjtBQUN0QixRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7QUFDeEMsWUFBWSxRQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNuQyxnQkFBZ0IsS0FBSyxNQUFNO0FBQzNCLG9CQUFvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEQsb0JBQWdCLE1BQU07QUFDdEIsZ0JBQ2dCO0FBQ2hCLG9CQUFvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEQsb0JBQWdCLE1BQU07QUFDdEIsYUFBYTtBQUNiLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxJQUFJLENBQUM7QUFDTCxJQUNJLGtCQUFrQjtBQUN0QixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzFDLFlBQVksSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hHLFlBQVksSUFBSSxRQUFRLENBQUM7QUFDekIsWUFDWSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxPQUFPO0FBQ2hDLG9CQUFvQixRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDO0FBQ0Esb0JBQW9CLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvRCxnQkFDZ0IsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwRixhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNqQyxZQUFZLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ25DLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLElBQUksS0FBSztBQUFLLFFBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLElBQUksQ0FBQztBQUNMLElBQ0ksSUFBYSxLQUFLLENBQUMsR0FBUztBQUNoQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQzFCLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzlCLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFCLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFDbEMsUUFBUSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUNqQyxRQUFRLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5RSxRQUFRLElBQUksUUFBUSxHQUFHLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsUUFBUSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUM3RSxRQUNRLElBQUksYUFBYSxFQUFFO0FBQzNCLFlBQVksSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFFLEtBQUssQ0FBQyxPQUFPLElBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pFLFlBQ1ksSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO0FBQ3JDLGdCQUFnQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxDQUFDO0FBQ2xHLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsZ0JBQWdCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDL0YsZ0JBQWdCLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdGLGFBQWE7QUFDYixTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxRQUFRLEVBQUU7QUFDMUIsZ0JBQWdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLENBQUM7QUFDbEcsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixnQkFBZ0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDOUUsZ0JBQWdCLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdGLGFBQWE7QUFDYixTQUFTO0FBQ1QsUUFDUSxTQUFTO0FBQ2pCLFFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELFFBQ1EsT0FBTztBQUNmLFFBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0FBQ25GLElBQUksQ0FBQztBQUNMLElBQ0ksYUFBYSxDQUFDLEtBQUs7QUFDdkIsUUFBUSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxRixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QixRQUNRLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0FBQ2hDLFlBQVksYUFBYSxFQUFFLEtBQUs7QUFDaEMsWUFBWSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWM7QUFDdEMsU0FBUyxDQUFDLENBQUM7QUFDWCxJQUFJLENBQUM7QUFDTCxJQUNJLE1BQU07QUFDVixRQUFRLElBQUksWUFBWSxHQUFhLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlELFFBQVEsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdJLElBQUksQ0FBQztBQUNMLElBQ0ksYUFBYSxDQUFDLElBQVM7QUFBSSxRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDaEUsWUFBWSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakUsZ0JBQWdCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDcEQsb0JBQW9CLE9BQU8sSUFBSSxDQUFDO0FBQ2hDLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLE9BQU8sSUFBSSxDQUFDO0FBQ3hCLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLGNBQWM7QUFDbEIsUUFBUSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUNoQyxJQUFJLENBQUM7QUFDTCxJQUNJLFVBQVUsQ0FBQyxJQUFTO0FBQ3hCLFFBQVEsT0FBTyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkUsSUFBSSxDQUFDO0FBQ0wsSUFDSSxNQUFNO0FBQ1YsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDNUIsWUFBWSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUQsZ0JBQWdCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsZ0JBQWdCLElBQUksaUJBQWlCLEdBQVcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RHLGdCQUNnQixJQUFJLGlCQUFpQixJQUFJLENBQUMsRUFBRTtBQUM1QyxvQkFBb0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2xFLG9CQUFvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELG9CQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUNoRSxvQkFBb0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN6RCxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG9CQUFvQixNQUFNO0FBQzFCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsWUFDWSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVc7QUFDakQsZ0JBQWdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QixZQUNZLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLE9BQU87QUFDWCxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUM1QixZQUFZLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakUsZ0JBQWdCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsZ0JBQWdCLElBQUksaUJBQWlCLEdBQVcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RHLGdCQUNnQixJQUFJLGlCQUFpQixJQUFJLENBQUMsRUFBRTtBQUM1QyxvQkFBb0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsb0JBQW9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsb0JBQW9CLE1BQU07QUFDMUIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixZQUNZLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVztBQUNqRCxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLFlBQ1ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUMzRCxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0wsSUFDSSxRQUFRO0FBQ1osUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDNUIsWUFBWSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pFLGdCQUFnQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdCQUFnQixJQUFJLGlCQUFpQixHQUFXLFdBQVcsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RyxnQkFDZ0IsSUFBSSxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLG9CQUFvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDbEUsb0JBQW9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0Qsb0JBQW9CLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ2hFLG9CQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3pELGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsb0JBQW9CLE1BQU07QUFDMUIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixZQUNZLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVztBQUNqRCxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLFlBQ1ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDbEMsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksVUFBVTtBQUNkLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzVCLFlBQVksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVELGdCQUFnQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdCQUFnQixJQUFJLGlCQUFpQixHQUFXLFdBQVcsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RyxnQkFDZ0IsSUFBSSxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLG9CQUFvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RSxvQkFBb0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0MsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixvQkFBb0IsTUFBTTtBQUMxQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFlBQ1ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXO0FBQ2pELGdCQUFnQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsWUFDWSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsWUFBWSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ3ZHLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLE1BQU0sQ0FBQyxLQUE0QjtBQUN2QyxRQUFRLElBQUksYUFBYSxHQUFJLEtBQUssQ0FBQyxhQUFhLENBQUM7QUFDakQsUUFBUSxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO0FBQzlDLFFBQ1EsSUFBSSxhQUFhLEtBQUssWUFBWSxFQUFFO0FBQzVDLFlBQ1ksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQ3JDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDdEMsb0JBQW9CLGFBQWEsR0FBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5RixvQkFBb0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUcsaUJBQWlCO0FBQ2pCLGdCQUNnQixlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM5RixhQUFhO0FBQ2IsWUFDWSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDckUsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuRCxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0wsSUFDSSxhQUFhLENBQUMsS0FBb0IsRUFBRSxJQUFJLEVBQUUsS0FBYTtBQUMzRCxRQUFRLElBQUksUUFBUSxHQUFtQixLQUFLLENBQUMsYUFBYSxDQUFDO0FBQzNELFFBQ1EsUUFBTyxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQzVCLFlBQVksTUFBTTtBQUNsQixZQUFZLEtBQUssRUFBRTtBQUNuQixnQkFBZ0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRCxnQkFBZ0IsSUFBSSxRQUFRLEVBQUU7QUFDOUIsb0JBQW9CLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQyxpQkFBaUI7QUFDakIsZ0JBQ2dCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QyxnQkFBWSxNQUFNO0FBQ2xCLFlBQ1ksSUFBSTtBQUNoQixZQUFZLEtBQUssRUFBRTtBQUNuQixnQkFBZ0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRCxnQkFBZ0IsSUFBSSxRQUFRLEVBQUU7QUFDOUIsb0JBQW9CLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQyxpQkFBaUI7QUFDakIsZ0JBQ2dCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QyxnQkFBWSxNQUFNO0FBQ2xCLFlBQ1ksT0FBTztBQUNuQixZQUFZLEtBQUssRUFBRTtBQUNuQixnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JELGdCQUFnQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkMsZ0JBQVksTUFBTTtBQUNsQixTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0wsSUFDSSxZQUFZLENBQUMsSUFBSTtBQUNyQixRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztBQUMvQyxRQUNRLElBQUksUUFBUTtBQUNwQixZQUFZLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNoSjtBQUNBLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsSUFBSSxDQUFDO0FBQ0wsSUFDSSxZQUFZLENBQUMsSUFBSTtBQUNyQixRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztBQUNuRCxRQUNRLElBQUksUUFBUTtBQUNwQixZQUFZLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNoSjtBQUNBLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDeEIsSUFBSSxDQUFDO0FBQ0wsSUFDSSxXQUFXO0FBQ2YsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNoQyxZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN4RSxZQUFZLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUNoRCxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6RCxZQUNZLElBQUksU0FBUyxHQUFHO0FBQzVCLGdEQUFnRCxJQUFJLENBQUMsVUFBVTtBQUMvRCxtQ0FBbUMsSUFBSSxDQUFDLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLElBQUksQ0FBQyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLElBQUksQ0FBQyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLElBQUksQ0FBQyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsQ0FBQztBQUNkLFlBQ1ksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ3BELFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLFlBQVk7QUFDaEIsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDL0IsWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekQsWUFBWSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUFDLFlBQUQsRUFBRSxDQUFBO0FBQ3ZDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLFdBQVc7QUFDZixRQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLENBQUM7QUFDTDtxQ0F2YkMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxhQUFhLGtCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OzhvREE4QlQsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7O3VGQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aXlDQUNJO0FBQUM7QUFBbUMsWUE5Q2QsVUFBVTtBQUFJLFlBQXFKLGlCQUFpQjtBQUFJLFlBR2hMLGFBQWE7QUFBRztBQUFHO0FBQ3pDLHFCQTRDUixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyx3QkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxnQ0FFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLCtCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssK0JBRVYsS0FBSztBQUFLLDhCQUVWLEtBQUs7QUFBSyw4QkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLDhCQUVWLE1BQU07QUFBSyxzQkFFWCxLQUFLO0FBQUssd0JBRVYsTUFBTTtBQUFLLGdDQUVYLE1BQU07QUFBSyw0QkFFWCxNQUFNO0FBQUssNEJBRVgsU0FBUyxTQUFDLGFBQWE7QUFBTyx3QkFFOUIsZUFBZSxTQUFDLGFBQWE7QUFBTyx3QkE0QnBDLEtBQUs7QUFBSyxvQkE4Q1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBcVNoQixNQUFNLE9BQU8sZUFBZTtBQUFHOzJDQUw5QixRQUFRLFNBQUM7R0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsY0FBYyxDQUFDLGtCQUM3RSxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLGNBQWMsQ0FBQyxrQkFDaEQsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQzVCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsQWZ0ZXJWaWV3Q2hlY2tlZCxBZnRlckNvbnRlbnRJbml0LElucHV0LE91dHB1dCxDb250ZW50Q2hpbGRyZW4sUXVlcnlMaXN0LFRlbXBsYXRlUmVmLEV2ZW50RW1pdHRlcixWaWV3Q2hpbGQsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQge1NoYXJlZE1vZHVsZSxQcmltZVRlbXBsYXRlLEZpbHRlclNlcnZpY2V9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtPYmplY3RVdGlscywgVW5pcXVlQ29tcG9uZW50SWR9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIERyYWdEcm9wTW9kdWxlLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atb3JkZXJMaXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncC1vcmRlcmxpc3QgcC1jb21wb25lbnQnOiB0cnVlLCAncC1vcmRlcmxpc3QtY29udHJvbHMtbGVmdCc6IGNvbnRyb2xzUG9zaXRpb24gPT09ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3Atb3JkZXJsaXN0LWNvbnRyb2xzLXJpZ2h0JzogY29udHJvbHNQb3NpdGlvbiA9PT0gJ3JpZ2h0J31cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1vcmRlcmxpc3QtY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIHBSaXBwbGUgaWNvbj1cInBpIHBpLWFuZ2xlLXVwXCIgKGNsaWNrKT1cIm1vdmVVcCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIGljb249XCJwaSBwaS1hbmdsZS1kb3VibGUtdXBcIiAoY2xpY2spPVwibW92ZVRvcCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIGljb249XCJwaSBwaS1hbmdsZS1kb3duXCIgKGNsaWNrKT1cIm1vdmVEb3duKClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIHBSaXBwbGUgaWNvbj1cInBpIHBpLWFuZ2xlLWRvdWJsZS1kb3duXCIgKGNsaWNrKT1cIm1vdmVCb3R0b20oKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1vcmRlcmxpc3QtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1vcmRlcmxpc3QtaGVhZGVyXCIgKm5nSWY9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtb3JkZXJsaXN0LXRpdGxlXCI+e3toZWFkZXJ9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW9yZGVybGlzdC1maWx0ZXItY29udGFpbmVyXCIgKm5nSWY9XCJmaWx0ZXJCeVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1vcmRlcmxpc3QtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByb2xlPVwidGV4dGJveFwiIChrZXl1cCk9XCJvbkZpbHRlcktleXVwKCRldmVudClcIiBjbGFzcz1cInAtb3JkZXJsaXN0LWZpbHRlci1pbnB1dCBwLWlucHV0dGV4dCBwLWNvbXBvbmVudFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cImZpbHRlclBsYWNlaG9sZGVyXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhRmlsdGVyTGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1vcmRlcmxpc3QtZmlsdGVyLWljb24gcGkgcGktc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgI2xpc3RlbGVtZW50IGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwib25Ecm9wKCRldmVudClcIiBjbGFzcz1cInAtb3JkZXJsaXN0LWxpc3RcIiBbbmdTdHlsZV09XCJsaXN0U3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeVwiIGxldC1pdGVtIFtuZ0Zvck9mXT1cInZhbHVlXCIgbGV0LWk9XCJpbmRleFwiIGxldC1sPVwibGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicC1vcmRlcmxpc3QtaXRlbVwiIHRhYmluZGV4PVwiMFwiIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOmlzU2VsZWN0ZWQoaXRlbSl9XCIgY2RrRHJhZyBwUmlwcGxlIFtjZGtEcmFnRGF0YV09XCJpdGVtXCIgW2Nka0RyYWdEaXNhYmxlZF09XCIhZHJhZ2Ryb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsaXRlbSxpKVwiICh0b3VjaGVuZCk9XCJvbkl0ZW1Ub3VjaEVuZCgpXCIgKGtleWRvd24pPVwib25JdGVtS2V5ZG93bigkZXZlbnQsaXRlbSxpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNJdGVtVmlzaWJsZShpdGVtKVwiIHJvbGU9XCJvcHRpb25cIiBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cImlzU2VsZWN0ZWQoaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtLCBpbmRleDogaX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3JkZXJsaXN0LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyTGlzdCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBsaXN0U3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmU6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJCeTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmlsdGVyUGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGZpbHRlckxvY2FsZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgbWV0YUtleVNlbGVjdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkcmFnZHJvcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgY29udHJvbHNQb3NpdGlvbjogc3RyaW5nID0gJ2xlZnQnO1xuXG4gICAgQElucHV0KCkgYXJpYUZpbHRlckxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJNYXRjaE1vZGU6IHN0cmluZyA9IFwiY29udGFpbnNcIjtcblxuICAgIEBJbnB1dCgpIGJyZWFrcG9pbnQ6IHN0cmluZyA9IFwiOTYwcHhcIjtcblxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgdHJhY2tCeTogRnVuY3Rpb24gPSAoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSA9PiBpdGVtO1xuXG4gICAgQE91dHB1dCgpIG9uUmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uRmlsdGVyRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQFZpZXdDaGlsZCgnbGlzdGVsZW1lbnQnKSBsaXN0Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIF9zZWxlY3Rpb246IGFueVtdO1xuXG4gICAgbW92ZWRVcDogYm9vbGVhbjtcblxuICAgIG1vdmVkRG93bjogYm9vbGVhbjtcblxuICAgIGl0ZW1Ub3VjaGVkOiBib29sZWFuO1xuXG4gICAgc3R5bGVFbGVtZW50OiBhbnk7XG5cbiAgICBpZDogc3RyaW5nID0gVW5pcXVlQ29tcG9uZW50SWQoKTtcblxuICAgIHB1YmxpYyBmaWx0ZXJWYWx1ZTogc3RyaW5nO1xuXG4gICAgcHVibGljIHZpc2libGVPcHRpb25zOiBhbnlbXTtcblxuICAgIHB1YmxpYyBfdmFsdWU6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgZmlsdGVyU2VydmljZTogRmlsdGVyU2VydmljZSkge31cblxuICAgIGdldCBzZWxlY3Rpb24oKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBzZWxlY3Rpb24odmFsOmFueVtdKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHZhbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2l2ZSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdHlsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVkVXB8fHRoaXMubW92ZWREb3duKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW1zID0gRG9tSGFuZGxlci5maW5kKHRoaXMubGlzdFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAnbGkucC1oaWdobGlnaHQnKTtcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbTtcblxuICAgICAgICAgICAgaWYgKGxpc3RJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZWRVcClcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0gPSBsaXN0SXRlbXNbMF07XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IGxpc3RJdGVtc1tsaXN0SXRlbXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnNjcm9sbEluVmlldyh0aGlzLmxpc3RWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgbGlzdEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlZFVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1vdmVkRG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWw6YW55W10pIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHRoaXMuaXRlbVRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNlbGVjdGVkSW5kZXggPSBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QoaXRlbSwgdGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSAoc2VsZWN0ZWRJbmRleCAhPSAtMSk7XG4gICAgICAgIGxldCBtZXRhU2VsZWN0aW9uID0gdGhpcy5pdGVtVG91Y2hlZCA/IGZhbHNlIDogdGhpcy5tZXRhS2V5U2VsZWN0aW9uO1xuXG4gICAgICAgIGlmIChtZXRhU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgbWV0YUtleSA9IChldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleSk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdGhpcy5fc2VsZWN0aW9uLmZpbHRlcigodmFsLCBpbmRleCkgPT4gaW5kZXggIT09IHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gKG1ldGFLZXkpID8gdGhpcy5fc2VsZWN0aW9uID8gWy4uLnRoaXMuX3NlbGVjdGlvbl0gOiBbXSA6IFtdO1xuICAgICAgICAgICAgICAgIE9iamVjdFV0aWxzLmluc2VydEludG9PcmRlcmVkQXJyYXkoaXRlbSwgaW5kZXgsIHRoaXMuX3NlbGVjdGlvbiwgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLl9zZWxlY3Rpb24uZmlsdGVyKCh2YWwsIGluZGV4KSA9PiBpbmRleCAhPT0gc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLl9zZWxlY3Rpb24gPyBbLi4udGhpcy5fc2VsZWN0aW9uXSA6IFtdO1xuICAgICAgICAgICAgICAgIE9iamVjdFV0aWxzLmluc2VydEludG9PcmRlcmVkQXJyYXkoaXRlbSwgaW5kZXgsIHRoaXMuX3NlbGVjdGlvbiwgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2JpbmRpbmdcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3Rpb24pO1xuXG4gICAgICAgIC8vZXZlbnRcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbkNoYW5nZS5lbWl0KHtvcmlnaW5hbEV2ZW50OmV2ZW50LCB2YWx1ZTogdGhpcy5fc2VsZWN0aW9ufSk7XG4gICAgfVxuXG4gICAgb25GaWx0ZXJLZXl1cChldmVudCkge1xuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgICAgIHRoaXMuZmlsdGVyKCk7XG5cbiAgICAgICAgdGhpcy5vbkZpbHRlckV2ZW50LmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52aXNpYmxlT3B0aW9uc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoKSB7XG4gICAgICAgIGxldCBzZWFyY2hGaWVsZHM6IHN0cmluZ1tdID0gdGhpcy5maWx0ZXJCeS5zcGxpdCgnLCcpO1xuICAgICAgICB0aGlzLnZpc2libGVPcHRpb25zID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmZpbHRlcih0aGlzLnZhbHVlLCBzZWFyY2hGaWVsZHMsIHRoaXMuZmlsdGVyVmFsdWUsIHRoaXMuZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSk7XG4gICAgfVxuXG4gICAgaXNJdGVtVmlzaWJsZShpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUgJiYgdGhpcy5maWx0ZXJWYWx1ZS50cmltKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmlzaWJsZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PSB0aGlzLnZpc2libGVPcHRpb25zW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtVG91Y2hFbmQoKSB7XG4gICAgICAgIHRoaXMuaXRlbVRvdWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoaXRlbTogYW55KSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QoaXRlbSwgdGhpcy5zZWxlY3Rpb24pICE9IC0xO1xuICAgIH1cblxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gT2JqZWN0VXRpbHMuZmluZEluZGV4SW5MaXN0KHNlbGVjdGVkSXRlbSwgdGhpcy52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtSW5kZXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZWRJdGVtID0gdGhpcy52YWx1ZVtzZWxlY3RlZEl0ZW1JbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gdGhpcy52YWx1ZVtzZWxlY3RlZEl0ZW1JbmRleC0xXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtzZWxlY3RlZEl0ZW1JbmRleC0xXSA9IG1vdmVkSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtzZWxlY3RlZEl0ZW1JbmRleF0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZHJvcCAmJiB0aGlzLmZpbHRlclZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMubW92ZWRVcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uUmVvcmRlci5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVUb3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VsZWN0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyID0gT2JqZWN0VXRpbHMuZmluZEluZGV4SW5MaXN0KHNlbGVjdGVkSXRlbSwgdGhpcy52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtSW5kZXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZWRJdGVtID0gdGhpcy52YWx1ZS5zcGxpY2Uoc2VsZWN0ZWRJdGVtSW5kZXgsMSlbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUudW5zaGlmdChtb3ZlZEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZHJvcCAmJiB0aGlzLmZpbHRlclZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25SZW9yZGVyLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5saXN0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNlbGVjdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IE9iamVjdFV0aWxzLmZpbmRJbmRleEluTGlzdChzZWxlY3RlZEl0ZW0sIHRoaXMudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUluZGV4ICE9ICh0aGlzLnZhbHVlLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlZEl0ZW0gPSB0aGlzLnZhbHVlW3NlbGVjdGVkSXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB0aGlzLnZhbHVlW3NlbGVjdGVkSXRlbUluZGV4KzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlW3NlbGVjdGVkSXRlbUluZGV4KzFdID0gbW92ZWRJdGVtO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlW3NlbGVjdGVkSXRlbUluZGV4XSA9IHRlbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdkcm9wICYmIHRoaXMuZmlsdGVyVmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5tb3ZlZERvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vblJlb3JkZXIuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3Qoc2VsZWN0ZWRJdGVtLCB0aGlzLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1JbmRleCAhPSAodGhpcy52YWx1ZS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZWRJdGVtID0gdGhpcy52YWx1ZS5zcGxpY2Uoc2VsZWN0ZWRJdGVtSW5kZXgsMSlbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUucHVzaChtb3ZlZEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZHJvcCAmJiB0aGlzLmZpbHRlclZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25SZW9yZGVyLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5saXN0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5saXN0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ecm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICAgICAgbGV0IHByZXZpb3VzSW5kZXggPSAgZXZlbnQucHJldmlvdXNJbmRleDtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGV2ZW50LmN1cnJlbnRJbmRleDtcblxuICAgICAgICBpZiAocHJldmlvdXNJbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNJbmRleCA9ICBPYmplY3RVdGlscy5maW5kSW5kZXhJbkxpc3QoZXZlbnQuaXRlbS5kYXRhLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gT2JqZWN0VXRpbHMuZmluZEluZGV4SW5MaXN0KHRoaXMudmlzaWJsZU9wdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMudmlzaWJsZU9wdGlvbnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLnZhbHVlLCBwcmV2aW91c0luZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5vblJlb3JkZXIuZW1pdChbZXZlbnQuaXRlbS5kYXRhXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpdGVtLCBpbmRleDogTnVtYmVyKSB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IDxIVE1MTElFbGVtZW50PiBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgLy9kb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHZhciBuZXh0SXRlbSA9IHRoaXMuZmluZE5leHRJdGVtKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdmFyIHByZXZJdGVtID0gdGhpcy5maW5kUHJldkl0ZW0obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2SXRlbS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9lbnRlclxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uSXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZE5leHRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IG5leHRJdGVtID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKG5leHRJdGVtKVxuICAgICAgICAgICAgcmV0dXJuICFEb21IYW5kbGVyLmhhc0NsYXNzKG5leHRJdGVtLCAncC1vcmRlcmxpc3QtaXRlbScpIHx8IERvbUhhbmRsZXIuaXNIaWRkZW4obmV4dEl0ZW0pID8gdGhpcy5maW5kTmV4dEl0ZW0obmV4dEl0ZW0pIDogbmV4dEl0ZW07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbmRQcmV2SXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBwcmV2SXRlbSA9IGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAocHJldkl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gIURvbUhhbmRsZXIuaGFzQ2xhc3MocHJldkl0ZW0sICdwLW9yZGVybGlzdC1pdGVtJykgfHwgRG9tSGFuZGxlci5pc0hpZGRlbihwcmV2SXRlbSkgPyB0aGlzLmZpbmRQcmV2SXRlbShwcmV2SXRlbSkgOiBwcmV2SXRlbTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlU3R5bGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUodGhpcy5pZCwgJycpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuc3R5bGVFbGVtZW50KTtcblxuICAgICAgICAgICAgbGV0IGlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuYnJlYWtwb2ludH0pIHtcbiAgICAgICAgICAgICAgICAgICAgLnAtb3JkZXJsaXN0WyR7dGhpcy5pZH1dIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucC1vcmRlcmxpc3RbJHt0aGlzLmlkfV0gLnAtb3JkZXJsaXN0LWNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnAtb3JkZXJsaXN0WyR7dGhpcy5pZH1dIC5wLW9yZGVybGlzdC1jb250cm9scyAucC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pbmxpbmUtc3BhY2luZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnAtb3JkZXJsaXN0WyR7dGhpcy5pZH1dIC5wLW9yZGVybGlzdC1jb250cm9scyAucC1idXR0b246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnN0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95U3R5bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlRWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCh0aGlzLnN0eWxlRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlRWxlbWVudCA9IG51bGw7YGBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lTdHlsZSgpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLEJ1dHRvbk1vZHVsZSxTaGFyZWRNb2R1bGUsUmlwcGxlTW9kdWxlLERyYWdEcm9wTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbT3JkZXJMaXN0LFNoYXJlZE1vZHVsZSxEcmFnRHJvcE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbT3JkZXJMaXN0XVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckxpc3RNb2R1bGUgeyB9XG4iXX0=