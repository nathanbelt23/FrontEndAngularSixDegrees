import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, ContentChildren, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from 'primeng/utils';
import { Header, Footer, PrimeTemplate, SharedModule, FilterService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/paginator';

function DataView_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵelement(2, "i");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap("p-dataview-loading-icon pi-spin " + ctx_r0.loadingIcon);
} }
function DataView_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DataView_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, DataView_div_2_ng_container_2_Template, 1, 0, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
} }
function DataView_p_paginator_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 14);
    ɵngcc0.ɵɵlistener("onPageChange", function DataView_p_paginator_3_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.paginate($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r2.rows)("first", ctx_r2.first)("totalRecords", ctx_r2.totalRecords)("pageLinkSize", ctx_r2.pageLinks)("alwaysShow", ctx_r2.alwaysShowPaginator)("rowsPerPageOptions", ctx_r2.rowsPerPageOptions)("dropdownAppendTo", ctx_r2.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r2.paginatorDropdownScrollHeight)("templateLeft", ctx_r2.paginatorLeftTemplate)("templateRight", ctx_r2.paginatorRightTemplate)("currentPageReportTemplate", ctx_r2.currentPageReportTemplate)("showFirstLastIcon", ctx_r2.showFirstLastIcon)("dropdownItemTemplate", ctx_r2.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r2.showCurrentPageReport)("showJumpToPageDropdown", ctx_r2.showJumpToPageDropdown)("showPageLinks", ctx_r2.showPageLinks);
} }
function DataView_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, rowIndex: a1 }; };
function DataView_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataView_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    const rowData_r10 = ctx.$implicit;
    const rowIndex_r11 = ctx.index;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, rowData_r10, rowIndex_r11));
} }
function DataView_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 17);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.emptyMessage);
} }
function DataView_p_paginator_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 18);
    ɵngcc0.ɵɵlistener("onPageChange", function DataView_p_paginator_9_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.paginate($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r5.rows)("first", ctx_r5.first)("totalRecords", ctx_r5.totalRecords)("pageLinkSize", ctx_r5.pageLinks)("alwaysShow", ctx_r5.alwaysShowPaginator)("rowsPerPageOptions", ctx_r5.rowsPerPageOptions)("dropdownAppendTo", ctx_r5.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r5.paginatorDropdownScrollHeight)("templateLeft", ctx_r5.paginatorLeftTemplate)("templateRight", ctx_r5.paginatorRightTemplate)("currentPageReportTemplate", ctx_r5.currentPageReportTemplate)("showFirstLastIcon", ctx_r5.showFirstLastIcon)("dropdownItemTemplate", ctx_r5.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r5.showCurrentPageReport)("showJumpToPageDropdown", ctx_r5.showJumpToPageDropdown)("showPageLinks", ctx_r5.showPageLinks);
} }
function DataView_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DataView_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, DataView_div_10_ng_container_2_Template, 1, 0, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
const _c1 = [[["p-header"]], [["p-footer"]]];
const _c2 = function (a1, a2) { return { "p-dataview p-component": true, "p-dataview-list": a1, "p-dataview-grid": a2 }; };
const _c3 = ["p-header", "p-footer"];
const _c4 = function (a0) { return { "p-highlight": a0 }; };
export class DataView {
    constructor(el, cd, filterService) {
        this.el = el;
        this.cd = cd;
        this.filterService = filterService;
        this.pageLinks = 5;
        this.paginatorPosition = 'bottom';
        this.alwaysShowPaginator = true;
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.showFirstLastIcon = true;
        this.showPageLinks = true;
        this.emptyMessage = 'No records found';
        this.onLazyLoad = new EventEmitter();
        this.trackBy = (index, item) => item;
        this.loadingIcon = 'pi pi-spinner';
        this.first = 0;
        this.onPage = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onChangeLayout = new EventEmitter();
        this._layout = 'list';
    }
    get layout() {
        return this._layout;
    }
    set layout(layout) {
        this._layout = layout;
        if (this.initialized) {
            this.changeLayout(layout);
        }
    }
    ngOnInit() {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges.value) {
            this._value = simpleChanges.value.currentValue;
            this.updateTotalRecords();
            if (!this.lazy && this.hasFilter()) {
                this.filter(this.filterValue);
            }
        }
        if (simpleChanges.sortField || simpleChanges.sortOrder) {
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                this.sort();
            }
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'listItem':
                    this.listItemTemplate = item.template;
                    break;
                case 'gridItem':
                    this.gridItemTemplate = item.template;
                    break;
                case 'paginatorleft':
                    this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    this.paginatorRightTemplate = item.template;
                    break;
                case 'paginatordropdownitem':
                    this.paginatorDropdownItemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
            }
        });
        this.updateItemTemplate();
    }
    updateItemTemplate() {
        switch (this.layout) {
            case 'list':
                this.itemTemplate = this.listItemTemplate;
                break;
            case 'grid':
                this.itemTemplate = this.gridItemTemplate;
                break;
        }
    }
    changeLayout(layout) {
        this._layout = layout;
        this.onChangeLayout.emit({
            layout: this.layout
        });
        this.updateItemTemplate();
        this.cd.markForCheck();
    }
    updateTotalRecords() {
        this.totalRecords = this.lazy ? this.totalRecords : (this._value ? this._value.length : 0);
    }
    paginate(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    }
    sort() {
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else if (this.value) {
            this.value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, this.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, this.sortField);
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2);
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return (this.sortOrder * result);
            });
            if (this.hasFilter()) {
                this.filter(this.filterValue);
            }
        }
        this.onSort.emit({
            sortField: this.sortField,
            sortOrder: this.sortOrder
        });
    }
    isEmpty() {
        let data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    }
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder
        };
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    filter(filter, filterMatchMode = "contains") {
        this.filterValue = filter;
        if (this.value && this.value.length) {
            let searchFields = this.filterBy.split(',');
            this.filteredValue = this.filterService.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
            if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
            }
            if (this.paginator) {
                this.first = 0;
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }
            this.cd.markForCheck();
        }
    }
    hasFilter() {
        return this.filterValue && this.filterValue.trim().length > 0;
    }
}
DataView.ɵfac = function DataView_Factory(t) { return new (t || DataView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FilterService)); };
DataView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataView, selectors: [["p-dataView"]], contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.header = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { pageLinks: "pageLinks", paginatorPosition: "paginatorPosition", alwaysShowPaginator: "alwaysShowPaginator", paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", showFirstLastIcon: "showFirstLastIcon", showPageLinks: "showPageLinks", emptyMessage: "emptyMessage", trackBy: "trackBy", loadingIcon: "loadingIcon", first: "first", layout: "layout", totalRecords: "totalRecords", rows: "rows", paginator: "paginator", rowsPerPageOptions: "rowsPerPageOptions", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", showJumpToPageDropdown: "showJumpToPageDropdown", lazy: "lazy", style: "style", styleClass: "styleClass", filterBy: "filterBy", filterLocale: "filterLocale", loading: "loading", sortField: "sortField", sortOrder: "sortOrder", value: "value" }, outputs: { onLazyLoad: "onLazyLoad", onPage: "onPage", onSort: "onSort", onChangeLayout: "onChangeLayout" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 11, vars: 19, consts: [[3, "ngClass", "ngStyle"], ["class", "p-dataview-loading", 4, "ngIf"], ["class", "p-dataview-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], [1, "p-dataview-content"], [1, "p-grid", "p-nogutter"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["class", "p-col", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-dataview-footer", 4, "ngIf"], [1, "p-dataview-loading"], [1, "p-dataview-loading-overlay", "p-component-overlay"], [1, "p-dataview-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-col"], [1, "p-dataview-emptymessage"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-dataview-footer"]], template: function DataView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DataView_div_1_Template, 3, 2, "div", 1);
        ɵngcc0.ɵɵtemplate(2, DataView_div_2_Template, 3, 1, "div", 2);
        ɵngcc0.ɵɵtemplate(3, DataView_p_paginator_3_Template, 1, 16, "p-paginator", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵtemplate(6, DataView_ng_template_6_Template, 1, 5, "ng-template", 6);
        ɵngcc0.ɵɵpipe(7, "slice");
        ɵngcc0.ɵɵtemplate(8, DataView_div_8_Template, 3, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, DataView_p_paginator_9_Template, 1, 16, "p-paginator", 8);
        ɵngcc0.ɵɵtemplate(10, DataView_div_10_Template, 3, 1, "div", 9);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c2, ctx.layout === "list", ctx.layout === "grid"))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.paginator ? ɵngcc0.ɵɵpipeBind3(7, 12, ctx.filteredValue || ctx.value, ctx.lazy ? 0 : ctx.first, (ctx.lazy ? 0 : ctx.first) + ctx.rows) : ctx.filteredValue || ctx.value)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isEmpty());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footer || ctx.footerTemplate);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc3.Paginator], pipes: [ɵngcc2.SlicePipe], styles: [".p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{align-items:center;display:flex;justify-content:center;position:absolute;z-index:2}"], encapsulation: 2, changeDetection: 0 });
DataView.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FilterService }
];
DataView.propDecorators = {
    paginator: [{ type: Input }],
    rows: [{ type: Input }],
    totalRecords: [{ type: Input }],
    pageLinks: [{ type: Input }],
    rowsPerPageOptions: [{ type: Input }],
    paginatorPosition: [{ type: Input }],
    alwaysShowPaginator: [{ type: Input }],
    paginatorDropdownAppendTo: [{ type: Input }],
    paginatorDropdownScrollHeight: [{ type: Input }],
    currentPageReportTemplate: [{ type: Input }],
    showCurrentPageReport: [{ type: Input }],
    showJumpToPageDropdown: [{ type: Input }],
    showFirstLastIcon: [{ type: Input }],
    showPageLinks: [{ type: Input }],
    lazy: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    onLazyLoad: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    trackBy: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterLocale: [{ type: Input }],
    loading: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    first: [{ type: Input }],
    sortField: [{ type: Input }],
    sortOrder: [{ type: Input }],
    value: [{ type: Input }],
    onPage: [{ type: Output }],
    onSort: [{ type: Output }],
    onChangeLayout: [{ type: Output }],
    header: [{ type: ContentChild, args: [Header,] }],
    footer: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    layout: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataView, [{
        type: Component,
        args: [{
                selector: 'p-dataView',
                template: `
        <div [ngClass]="{'p-dataview p-component': true, 'p-dataview-list': (layout === 'list'), 'p-dataview-grid': (layout === 'grid')}" [ngStyle]="style" [class]="styleClass">
            <div class="p-dataview-loading" *ngIf="loading">
                <div class="p-dataview-loading-overlay p-component-overlay">
                    <i [class]="'p-dataview-loading-icon pi-spin ' + loadingIcon"></i>
                </div>
            </div>
            <div class="p-dataview-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)" styleClass="p-paginator-top" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition =='both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight" [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate" [showFirstLastIcon]="showFirstLastIcon" [dropdownItemTemplate]="paginatorDropdownItemTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showPageLinks]="showPageLinks"></p-paginator>
            <div class="p-dataview-content">
                <div class="p-grid p-nogutter">
                    <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="paginator ? ((filteredValue||value) | slice:(lazy ? 0 : first):((lazy ? 0 : first) + rows)) : (filteredValue||value)" [ngForTrackBy]="trackBy">
                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: rowData, rowIndex: rowIndex}"></ng-container>
                    </ng-template>
                    <div *ngIf="isEmpty()" class="p-col">
                        <div class="p-dataview-emptymessage">{{emptyMessage}}</div>
                    </div>
                </div>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)" styleClass="p-paginator-bottom" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight" [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate" [showFirstLastIcon]="showFirstLastIcon" [dropdownItemTemplate]="paginatorDropdownItemTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showPageLinks]="showPageLinks"></p-paginator>
            <div class="p-dataview-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{align-items:center;display:flex;justify-content:center;position:absolute;z-index:2}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FilterService }]; }, { pageLinks: [{
            type: Input
        }], paginatorPosition: [{
            type: Input
        }], alwaysShowPaginator: [{
            type: Input
        }], paginatorDropdownScrollHeight: [{
            type: Input
        }], currentPageReportTemplate: [{
            type: Input
        }], showFirstLastIcon: [{
            type: Input
        }], showPageLinks: [{
            type: Input
        }], emptyMessage: [{
            type: Input
        }], onLazyLoad: [{
            type: Output
        }], trackBy: [{
            type: Input
        }], loadingIcon: [{
            type: Input
        }], first: [{
            type: Input
        }], onPage: [{
            type: Output
        }], onSort: [{
            type: Output
        }], onChangeLayout: [{
            type: Output
        }], layout: [{
            type: Input
        }], totalRecords: [{
            type: Input
        }], rows: [{
            type: Input
        }], paginator: [{
            type: Input
        }], rowsPerPageOptions: [{
            type: Input
        }], paginatorDropdownAppendTo: [{
            type: Input
        }], showCurrentPageReport: [{
            type: Input
        }], showJumpToPageDropdown: [{
            type: Input
        }], lazy: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], loading: [{
            type: Input
        }], sortField: [{
            type: Input
        }], sortOrder: [{
            type: Input
        }], value: [{
            type: Input
        }], header: [{
            type: ContentChild,
            args: [Header]
        }], footer: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class DataViewLayoutOptions {
    constructor(dv) {
        this.dv = dv;
    }
    changeLayout(event, layout) {
        this.dv.changeLayout(layout);
        event.preventDefault();
    }
}
DataViewLayoutOptions.ɵfac = function DataViewLayoutOptions_Factory(t) { return new (t || DataViewLayoutOptions)(ɵngcc0.ɵɵdirectiveInject(DataView)); };
DataViewLayoutOptions.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataViewLayoutOptions, selectors: [["p-dataViewLayoutOptions"]], inputs: { style: "style", styleClass: "styleClass" }, decls: 5, vars: 10, consts: [[3, "ngClass", "ngStyle"], ["type", "button", 1, "p-button", "p-button-icon-only", 3, "ngClass", "click", "keydown.enter"], [1, "pi", "pi-bars"], [1, "pi", "pi-th-large"]], template: function DataViewLayoutOptions_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function DataViewLayoutOptions_Template_button_click_1_listener($event) { return ctx.changeLayout($event, "list"); })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_1_listener($event) { return ctx.changeLayout($event, "list"); });
        ɵngcc0.ɵɵelement(2, "i", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 1);
        ɵngcc0.ɵɵlistener("click", function DataViewLayoutOptions_Template_button_click_3_listener($event) { return ctx.changeLayout($event, "grid"); })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_3_listener($event) { return ctx.changeLayout($event, "grid"); });
        ɵngcc0.ɵɵelement(4, "i", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-dataview-layout-options p-selectbutton p-buttonset")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c4, ctx.dv.layout === "list"));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c4, ctx.dv.layout === "grid"));
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle], encapsulation: 2 });
DataViewLayoutOptions.ctorParameters = () => [
    { type: DataView }
];
DataViewLayoutOptions.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataViewLayoutOptions, [{
        type: Component,
        args: [{
                selector: 'p-dataViewLayoutOptions',
                template: `
        <div [ngClass]="'p-dataview-layout-options p-selectbutton p-buttonset'" [ngStyle]="style" [class]="styleClass">
            <button type="button" class="p-button p-button-icon-only" [ngClass]="{'p-highlight': dv.layout === 'list'}" (click)="changeLayout($event, 'list')" (keydown.enter)="changeLayout($event, 'list')">
                <i class="pi pi-bars"></i>
            </button><button type="button" class="p-button p-button-icon-only" [ngClass]="{'p-highlight': dv.layout === 'grid'}" (click)="changeLayout($event, 'grid')" (keydown.enter)="changeLayout($event, 'grid')">
                <i class="pi pi-th-large"></i>
            </button>
        </div>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: DataView }]; }, { style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class DataViewModule {
}
DataViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DataViewModule });
DataViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DataViewModule_Factory(t) { return new (t || DataViewModule)(); }, imports: [[CommonModule, SharedModule, PaginatorModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DataViewModule, { declarations: function () { return [DataView, DataViewLayoutOptions]; }, imports: function () { return [CommonModule, SharedModule, PaginatorModule]; }, exports: function () { return [DataView, SharedModule, DataViewLayoutOptions]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataViewModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, PaginatorModule],
                exports: [DataView, SharedModule, DataViewLayoutOptions],
                declarations: [DataView, DataViewLayoutOptions]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXZpZXcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhdmlldy9kYXRhdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQXlCLEtBQUssRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQStDLHVCQUF1QixFQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RQLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ25GLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDbEQsTUFBTSxPQUFPLFFBQVE7QUFBRyxJQTRHcEIsWUFBbUIsRUFBYyxFQUFTLEVBQXFCLEVBQVMsYUFBNEI7QUFBSSxRQUFyRixPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBQVEsa0JBQWEsR0FBYixhQUFhLENBQWU7QUFBQyxRQXBHNUYsY0FBUyxHQUFXLENBQUMsQ0FBQztBQUNuQyxRQUdhLHNCQUFpQixHQUFXLFFBQVEsQ0FBQztBQUNsRCxRQUNhLHdCQUFtQixHQUFZLElBQUksQ0FBQztBQUNqRCxRQUdhLGtDQUE2QixHQUFXLE9BQU8sQ0FBQztBQUM3RCxRQUNhLDhCQUF5QixHQUFXLCtCQUErQixDQUFDO0FBQ2pGLFFBS2Es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aEIsTUFBTSxPQUFPLHFCQUFxQjtBQUFHLElBTWpDLFlBQW1CLEVBQVk7QUFBSSxRQUFoQixPQUFFLEdBQUYsRUFBRSxDQUFVO0FBQUMsSUFBRSxDQUFDO0FBQ3ZDLElBQ0ksWUFBWSxDQUFDLEtBQVksRUFBRSxNQUFjO0FBQzdDLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsUUFBUSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDL0IsSUFBSSxDQUFDO0FBQ0w7aURBekJDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUUseUJBQXlCLGtCQUNuQyxRQUFRLEVBQUU7Ozs7MkhBUVQsa0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDeEM7Ozs7Ozs7Ozs7Ozs7OzsyRUFDSTtBQUFDO0FBRVEsWUFJYSxRQUFRO0FBQUc7QUFFdEM7QUFBeUMsb0JBTnBDLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBY2hCLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsZUFBZSxDQUFDLGtCQUNwRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLHFCQUFxQixDQUFDLGtCQUN0RCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUMscUJBQXFCLENBQUM7R0FDakQ7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxFbGVtZW50UmVmLE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsQ29udGVudENoaWxkLENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsVGVtcGxhdGVSZWYsT25DaGFuZ2VzLFNpbXBsZUNoYW5nZXMsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtPYmplY3RVdGlsc30gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQge0hlYWRlcixGb290ZXIsUHJpbWVUZW1wbGF0ZSxTaGFyZWRNb2R1bGUsRmlsdGVyU2VydmljZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcGFnaW5hdG9yJztcbmltcG9ydCB7QmxvY2thYmxlVUl9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRhdGFWaWV3JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncC1kYXRhdmlldyBwLWNvbXBvbmVudCc6IHRydWUsICdwLWRhdGF2aWV3LWxpc3QnOiAobGF5b3V0ID09PSAnbGlzdCcpLCAncC1kYXRhdmlldy1ncmlkJzogKGxheW91dCA9PT0gJ2dyaWQnKX1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kYXRhdmlldy1sb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZGF0YXZpZXctbG9hZGluZy1vdmVybGF5IHAtY29tcG9uZW50LW92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgW2NsYXNzXT1cIidwLWRhdGF2aWV3LWxvYWRpbmctaWNvbiBwaS1zcGluICcgKyBsb2FkaW5nSWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZGF0YXZpZXctaGVhZGVyXCIgKm5nSWY9XCJoZWFkZXIgfHwgaGVhZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAtcGFnaW5hdG9yIFtyb3dzXT1cInJvd3NcIiBbZmlyc3RdPVwiZmlyc3RcIiBbdG90YWxSZWNvcmRzXT1cInRvdGFsUmVjb3Jkc1wiIFtwYWdlTGlua1NpemVdPVwicGFnZUxpbmtzXCIgW2Fsd2F5c1Nob3ddPVwiYWx3YXlzU2hvd1BhZ2luYXRvclwiXG4gICAgICAgICAgICAgICAgKG9uUGFnZUNoYW5nZSk9XCJwYWdpbmF0ZSgkZXZlbnQpXCIgc3R5bGVDbGFzcz1cInAtcGFnaW5hdG9yLXRvcFwiIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCIgKm5nSWY9XCJwYWdpbmF0b3IgJiYgKHBhZ2luYXRvclBvc2l0aW9uID09PSAndG9wJyB8fCBwYWdpbmF0b3JQb3NpdGlvbiA9PSdib3RoJylcIlxuICAgICAgICAgICAgICAgIFtkcm9wZG93bkFwcGVuZFRvXT1cInBhZ2luYXRvckRyb3Bkb3duQXBwZW5kVG9cIiBbZHJvcGRvd25TY3JvbGxIZWlnaHRdPVwicGFnaW5hdG9yRHJvcGRvd25TY3JvbGxIZWlnaHRcIiBbdGVtcGxhdGVMZWZ0XT1cInBhZ2luYXRvckxlZnRUZW1wbGF0ZVwiIFt0ZW1wbGF0ZVJpZ2h0XT1cInBhZ2luYXRvclJpZ2h0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXT1cImN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGVcIiBbc2hvd0ZpcnN0TGFzdEljb25dPVwic2hvd0ZpcnN0TGFzdEljb25cIiBbZHJvcGRvd25JdGVtVGVtcGxhdGVdPVwicGFnaW5hdG9yRHJvcGRvd25JdGVtVGVtcGxhdGVcIiBbc2hvd0N1cnJlbnRQYWdlUmVwb3J0XT1cInNob3dDdXJyZW50UGFnZVJlcG9ydFwiIFtzaG93SnVtcFRvUGFnZURyb3Bkb3duXT1cInNob3dKdW1wVG9QYWdlRHJvcGRvd25cIiBbc2hvd1BhZ2VMaW5rc109XCJzaG93UGFnZUxpbmtzXCI+PC9wLXBhZ2luYXRvcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1ncmlkIHAtbm9ndXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1yb3dEYXRhIGxldC1yb3dJbmRleD1cImluZGV4XCIgW25nRm9yT2ZdPVwicGFnaW5hdG9yID8gKChmaWx0ZXJlZFZhbHVlfHx2YWx1ZSkgfCBzbGljZToobGF6eSA/IDAgOiBmaXJzdCk6KChsYXp5ID8gMCA6IGZpcnN0KSArIHJvd3MpKSA6IChmaWx0ZXJlZFZhbHVlfHx2YWx1ZSlcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IHJvd0RhdGEsIHJvd0luZGV4OiByb3dJbmRleH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzRW1wdHkoKVwiIGNsYXNzPVwicC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF2aWV3LWVtcHR5bWVzc2FnZVwiPnt7ZW1wdHlNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwLXBhZ2luYXRvciBbcm93c109XCJyb3dzXCIgW2ZpcnN0XT1cImZpcnN0XCIgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbFJlY29yZHNcIiBbcGFnZUxpbmtTaXplXT1cInBhZ2VMaW5rc1wiIFthbHdheXNTaG93XT1cImFsd2F5c1Nob3dQYWdpbmF0b3JcIlxuICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwicGFnaW5hdGUoJGV2ZW50KVwiIHN0eWxlQ2xhc3M9XCJwLXBhZ2luYXRvci1ib3R0b21cIiBbcm93c1BlclBhZ2VPcHRpb25zXT1cInJvd3NQZXJQYWdlT3B0aW9uc1wiICpuZ0lmPVwicGFnaW5hdG9yICYmIChwYWdpbmF0b3JQb3NpdGlvbiA9PT0gJ2JvdHRvbScgfHwgcGFnaW5hdG9yUG9zaXRpb24gPT0nYm90aCcpXCJcbiAgICAgICAgICAgICAgICBbZHJvcGRvd25BcHBlbmRUb109XCJwYWdpbmF0b3JEcm9wZG93bkFwcGVuZFRvXCIgW2Ryb3Bkb3duU2Nyb2xsSGVpZ2h0XT1cInBhZ2luYXRvckRyb3Bkb3duU2Nyb2xsSGVpZ2h0XCIgW3RlbXBsYXRlTGVmdF09XCJwYWdpbmF0b3JMZWZ0VGVtcGxhdGVcIiBbdGVtcGxhdGVSaWdodF09XCJwYWdpbmF0b3JSaWdodFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZV09XCJjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXCIgW3Nob3dGaXJzdExhc3RJY29uXT1cInNob3dGaXJzdExhc3RJY29uXCIgW2Ryb3Bkb3duSXRlbVRlbXBsYXRlXT1cInBhZ2luYXRvckRyb3Bkb3duSXRlbVRlbXBsYXRlXCIgW3Nob3dDdXJyZW50UGFnZVJlcG9ydF09XCJzaG93Q3VycmVudFBhZ2VSZXBvcnRcIiBbc2hvd0p1bXBUb1BhZ2VEcm9wZG93bl09XCJzaG93SnVtcFRvUGFnZURyb3Bkb3duXCIgW3Nob3dQYWdlTGlua3NdPVwic2hvd1BhZ2VMaW5rc1wiPjwvcC1wYWdpbmF0b3I+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kYXRhdmlldy1mb290ZXJcIiAqbmdJZj1cImZvb3RlciB8fCBmb290ZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRhdmlldy5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVmlldyBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LEJsb2NrYWJsZVVJLE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBwYWdpbmF0b3I6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSByb3dzOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSB0b3RhbFJlY29yZHM6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHBhZ2VMaW5rczogbnVtYmVyID0gNTtcblxuICAgIEBJbnB1dCgpIHJvd3NQZXJQYWdlT3B0aW9uczogYW55W107XG5cbiAgICBASW5wdXQoKSBwYWdpbmF0b3JQb3NpdGlvbjogc3RyaW5nID0gJ2JvdHRvbSc7XG5cbiAgICBASW5wdXQoKSBhbHdheXNTaG93UGFnaW5hdG9yOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHBhZ2luYXRvckRyb3Bkb3duQXBwZW5kVG86IGFueTtcblxuICAgIEBJbnB1dCgpIHBhZ2luYXRvckRyb3Bkb3duU2Nyb2xsSGVpZ2h0OiBzdHJpbmcgPSAnMjAwcHgnO1xuXG4gICAgQElucHV0KCkgY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZTogc3RyaW5nID0gJ3tjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9JztcblxuICAgIEBJbnB1dCgpIHNob3dDdXJyZW50UGFnZVJlcG9ydDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHNob3dKdW1wVG9QYWdlRHJvcGRvd246IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBzaG93Rmlyc3RMYXN0SWNvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBzaG93UGFnZUxpbmtzOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGxhenk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBlbXB0eU1lc3NhZ2U6IHN0cmluZyA9ICdObyByZWNvcmRzIGZvdW5kJztcblxuICAgIEBPdXRwdXQoKSBvbkxhenlMb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0cmFja0J5OiBGdW5jdGlvbiA9IChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IGl0ZW07XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJCeTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmlsdGVyTG9jYWxlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgbG9hZGluZ0ljb246IHN0cmluZyA9ICdwaSBwaS1zcGlubmVyJztcblxuICAgIEBJbnB1dCgpIGZpcnN0OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgc29ydEZpZWxkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzb3J0T3JkZXI6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnlbXTtcblxuICAgIEBPdXRwdXQoKSBvblBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uU29ydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2VMYXlvdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQENvbnRlbnRDaGlsZChIZWFkZXIpIGhlYWRlcjtcblxuICAgIEBDb250ZW50Q2hpbGQoRm9vdGVyKSBmb290ZXI7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBfdmFsdWU6IGFueVtdO1xuXG4gICAgbGlzdEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGdyaWRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcGFnaW5hdG9yTGVmdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcGFnaW5hdG9yUmlnaHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHBhZ2luYXRvckRyb3Bkb3duSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZmlsdGVyZWRWYWx1ZTogYW55W107XG5cbiAgICBmaWx0ZXJWYWx1ZTogc3RyaW5nO1xuXG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgICBfbGF5b3V0OiBzdHJpbmcgPSAnbGlzdCc7XG5cbiAgICBASW5wdXQoKSBnZXQgbGF5b3V0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXQ7XG4gICAgfVxuXG4gICAgc2V0IGxheW91dChsYXlvdXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sYXlvdXQgPSBsYXlvdXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGF5b3V0KGxheW91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBmaWx0ZXJTZXJ2aWNlOiBGaWx0ZXJTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgIHRoaXMub25MYXp5TG9hZC5lbWl0KHRoaXMuY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2VzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHNpbXBsZUNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbFJlY29yZHMoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhenkgJiYgdGhpcy5oYXNGaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZXMuc29ydEZpZWxkIHx8IHNpbXBsZUNoYW5nZXMuc29ydE9yZGVyKSB7XG4gICAgICAgICAgICAvL2F2b2lkIHRyaWdnZXJpbmcgbGF6eSBsb2FkIHByaW9yIHRvIGxhenkgaW5pdGlhbGl6YXRpb24gYXQgb25Jbml0XG4gICAgICAgICAgICBpZiAoIXRoaXMubGF6eSB8fCB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3RJdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRJdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkSXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2luYXRvcmxlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvckxlZnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdwYWdpbmF0b3JyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yUmlnaHRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdwYWdpbmF0b3Jkcm9wZG93bml0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvckRyb3Bkb3duSXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZm9vdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbVRlbXBsYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSXRlbVRlbXBsYXRlKCkge1xuICAgICAgICBzd2l0Y2godGhpcy5sYXlvdXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gdGhpcy5saXN0SXRlbVRlbXBsYXRlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dyaWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gdGhpcy5ncmlkSXRlbVRlbXBsYXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VMYXlvdXQobGF5b3V0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbGF5b3V0ID0gbGF5b3V0O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTGF5b3V0LmVtaXQoe1xuICAgICAgICAgICAgbGF5b3V0OiB0aGlzLmxheW91dFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtVGVtcGxhdGUoKTtcblxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRvdGFsUmVjb3JkcygpIHtcbiAgICAgICAgdGhpcy50b3RhbFJlY29yZHMgPSB0aGlzLmxhenkgPyB0aGlzLnRvdGFsUmVjb3JkcyA6ICh0aGlzLl92YWx1ZSA/IHRoaXMuX3ZhbHVlLmxlbmd0aCA6IDApO1xuICAgIH1cblxuICAgIHBhZ2luYXRlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZmlyc3QgPSBldmVudC5maXJzdDtcbiAgICAgICAgdGhpcy5yb3dzID0gZXZlbnQucm93cztcblxuICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh0aGlzLmNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uUGFnZS5lbWl0KHtcbiAgICAgICAgICAgIGZpcnN0OiB0aGlzLmZpcnN0LFxuICAgICAgICAgICAgcm93czogdGhpcy5yb3dzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNvcnQoKSB7XG4gICAgICAgIHRoaXMuZmlyc3QgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgIHRoaXMub25MYXp5TG9hZC5lbWl0KHRoaXMuY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNvcnQoKGRhdGExLCBkYXRhMikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTEgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKGRhdGExLCB0aGlzLnNvcnRGaWVsZCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlMiA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEoZGF0YTIsIHRoaXMuc29ydEZpZWxkKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMik7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodmFsdWUxIDwgdmFsdWUyKSA/IC0xIDogKHZhbHVlMSA+IHZhbHVlMikgPyAxIDogMDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zb3J0T3JkZXIgKiByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uU29ydC5lbWl0KHtcbiAgICAgICAgICAgIHNvcnRGaWVsZDogdGhpcy5zb3J0RmllbGQsXG4gICAgICAgICAgICBzb3J0T3JkZXI6IHRoaXMuc29ydE9yZGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5maWx0ZXJlZFZhbHVlfHx0aGlzLnZhbHVlO1xuICAgICAgICByZXR1cm4gZGF0YSA9PSBudWxsIHx8IGRhdGEubGVuZ3RoID09IDA7XG4gICAgfVxuXG4gICAgY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3Q6IHRoaXMuZmlyc3QsXG4gICAgICAgICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICAgICAgICBzb3J0RmllbGQ6IHRoaXMuc29ydEZpZWxkLFxuICAgICAgICAgICAgc29ydE9yZGVyOiB0aGlzLnNvcnRPcmRlclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEJsb2NrYWJsZUVsZW1lbnQoKTogSFRNTEVsZW1lbnTCoHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoZmlsdGVyOiBzdHJpbmcsIGZpbHRlck1hdGNoTW9kZTpzdHJpbmcgPVwiY29udGFpbnNcIikge1xuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoRmllbGRzID0gdGhpcy5maWx0ZXJCeS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFZhbHVlID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmZpbHRlcih0aGlzLnZhbHVlLCBzZWFyY2hGaWVsZHMsIGZpbHRlciwgZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmVkVmFsdWUubGVuZ3RoID09PSB0aGlzLnZhbHVlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdpbmF0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHRoaXMuZmlsdGVyZWRWYWx1ZSA/IHRoaXMuZmlsdGVyZWRWYWx1ZS5sZW5ndGggOiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRmlsdGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZSAmJiB0aGlzLmZpbHRlclZhbHVlLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRhdGFWaWV3TGF5b3V0T3B0aW9ucycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1kYXRhdmlldy1sYXlvdXQtb3B0aW9ucyBwLXNlbGVjdGJ1dHRvbiBwLWJ1dHRvbnNldCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInAtYnV0dG9uIHAtYnV0dG9uLWljb24tb25seVwiIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOiBkdi5sYXlvdXQgPT09ICdsaXN0J31cIiAoY2xpY2spPVwiY2hhbmdlTGF5b3V0KCRldmVudCwgJ2xpc3QnKVwiIChrZXlkb3duLmVudGVyKT1cImNoYW5nZUxheW91dCgkZXZlbnQsICdsaXN0JylcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWJhcnNcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInAtYnV0dG9uIHAtYnV0dG9uLWljb24tb25seVwiIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOiBkdi5sYXlvdXQgPT09ICdncmlkJ31cIiAoY2xpY2spPVwiY2hhbmdlTGF5b3V0KCRldmVudCwgJ2dyaWQnKVwiIChrZXlkb3duLmVudGVyKT1cImNoYW5nZUxheW91dCgkZXZlbnQsICdncmlkJylcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLXRoLWxhcmdlXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVmlld0xheW91dE9wdGlvbnMgIHtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHY6IERhdGFWaWV3KSB7fVxuXG4gICAgY2hhbmdlTGF5b3V0KGV2ZW50OiBFdmVudCwgbGF5b3V0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kdi5jaGFuZ2VMYXlvdXQobGF5b3V0KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsU2hhcmVkTW9kdWxlLFBhZ2luYXRvck1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RhdGFWaWV3LFNoYXJlZE1vZHVsZSxEYXRhVmlld0xheW91dE9wdGlvbnNdLFxuICAgIGRlY2xhcmF0aW9uczogW0RhdGFWaWV3LERhdGFWaWV3TGF5b3V0T3B0aW9uc11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVZpZXdNb2R1bGUgeyB9XG4iXX0=