import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, ViewContainerRef, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, forwardRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from 'primeng/tooltip';

function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabPanel_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
} }
function TabPanel_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("hidden", !ctx_r0.selected);
    ɵngcc0.ɵɵattribute("id", ctx_r0.id)("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.id + "-label");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
} }
const _c0 = ["*"];
const _c1 = ["navbar"];
const _c2 = ["inkbar"];
function TabView_ng_template_3_li_0_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.leftIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabView_ng_template_3_li_0_ng_container_2_span_1_Template, 1, 1, "span", 13);
    ɵngcc0.ɵɵelementStart(2, "span", 14);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_ng_container_2_span_4_Template, 1, 1, "span", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.leftIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(tab_r3.header);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabView_ng_template_3_li_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 18);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.close($event, tab_r3); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
function TabView_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵelementStart(1, "a", 9);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.open($event, tab_r3); })("keydown.enter", function TabView_ng_template_3_li_0_Template_a_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.open($event, tab_r3); });
    ɵngcc0.ɵɵtemplate(2, TabView_ng_template_3_li_0_ng_container_2_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_li_0_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_span_4_Template, 1, 0, "span", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(tab_r3.headerStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c3, tab_r3.selected, tab_r3.disabled))("ngStyle", tab_r3.headerStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTooltip", tab_r3.tooltip)("tooltipPosition", tab_r3.tooltipPosition)("positionStyle", tab_r3.tooltipPositionStyle)("tooltipStyleClass", tab_r3.tooltipStyleClass);
    ɵngcc0.ɵɵattribute("id", tab_r3.id + "-label")("aria-selected", tab_r3.selected)("aria-controls", tab_r3.id)("aria-selected", tab_r3.selected)("tabindex", tab_r3.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.closable);
} }
function TabView_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabView_ng_template_3_li_0_Template, 5, 19, "li", 7);
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.closed);
} }
let idx = 0;
export class TabPanel {
    constructor(tabView, viewContainer, cd) {
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.cache = true;
        this.tooltipPosition = 'top';
        this.tooltipPositionStyle = 'absolute';
        this.id = `p-tabpanel-${idx++}`;
        this.tabView = tabView;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        if (!this.loaded) {
            this.cd.detectChanges();
        }
        if (val)
            this.loaded = true;
    }
    get disabled() {
        return this._disabled;
    }
    ;
    set disabled(disabled) {
        this._disabled = disabled;
        this.tabView.cd.markForCheck();
    }
    get header() {
        return this._header;
    }
    set header(header) {
        this._header = header;
        this.tabView.cd.markForCheck();
    }
    get leftIcon() {
        return this._leftIcon;
    }
    set leftIcon(leftIcon) {
        this._leftIcon = leftIcon;
        this.tabView.cd.markForCheck();
    }
    get rightIcon() {
        return this._rightIcon;
    }
    set rightIcon(rightIcon) {
        this._rightIcon = rightIcon;
        this.tabView.cd.markForCheck();
    }
    ngOnDestroy() {
        this.view = null;
    }
}
TabPanel.ɵfac = function TabPanel_Factory(t) { return new (t || TabPanel)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => TabView)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabPanel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabPanel, selectors: [["p-tabPanel"]], contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { cache: "cache", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", selected: "selected", disabled: "disabled", header: "header", leftIcon: "leftIcon", rightIcon: "rightIcon", closable: "closable", headerStyle: "headerStyle", headerStyleClass: "headerStyleClass", tooltip: "tooltip", tooltipStyleClass: "tooltipStyleClass" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]], template: function TabPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TabPanel_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
TabPanel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => TabView),] }] },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
TabPanel.propDecorators = {
    closable: [{ type: Input }],
    headerStyle: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    cache: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    header: [{ type: Input }],
    leftIcon: [{ type: Input }],
    rightIcon: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabPanel, [{
        type: Component,
        args: [{
                selector: 'p-tabPanel',
                template: `
        <div [attr.id]="id" class="p-tabview-panel" [hidden]="!selected"
            role="tabpanel" [attr.aria-hidden]="!selected" [attr.aria-labelledby]="id + '-label'" *ngIf="!closed">
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </ng-container>
        </div>
    `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => TabView)]
            }] }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { cache: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipPositionStyle: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], header: [{
            type: Input
        }], leftIcon: [{
            type: Input
        }], rightIcon: [{
            type: Input
        }], closable: [{
            type: Input
        }], headerStyle: [{
            type: Input
        }], headerStyleClass: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class TabView {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.orientation = 'top';
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.activeIndexChange = new EventEmitter();
    }
    ngAfterContentInit() {
        this.initTabs();
        this.tabPanels.changes.subscribe(_ => {
            this.initTabs();
        });
    }
    ngAfterViewChecked() {
        if (this.tabChanged) {
            this.updateInkBar();
            this.tabChanged = false;
        }
    }
    initTabs() {
        this.tabs = this.tabPanels.toArray();
        let selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
            this.tabChanged = true;
        }
        this.cd.markForCheck();
    }
    open(event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            let selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            this.tabChanged = true;
            tab.selected = true;
            let selectedTabIndex = this.findTabIndex(tab);
            this.preventActiveIndexPropagation = true;
            this.activeIndexChange.emit(selectedTabIndex);
            this.onChange.emit({ originalEvent: event, index: selectedTabIndex });
        }
        if (event) {
            event.preventDefault();
        }
    }
    close(event, tab) {
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: () => {
                    this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    }
    closeTab(tab) {
        if (tab.disabled) {
            return;
        }
        if (tab.selected) {
            this.tabChanged = true;
            tab.selected = false;
            for (let i = 0; i < this.tabs.length; i++) {
                let tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    }
    findSelectedTab() {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    }
    findTabIndex(tab) {
        let index = -1;
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    get activeIndex() {
        return this._activeIndex;
    }
    set activeIndex(val) {
        this._activeIndex = val;
        if (this.preventActiveIndexPropagation) {
            this.preventActiveIndexPropagation = false;
            return;
        }
        if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
            this.findSelectedTab().selected = false;
            this.tabs[this._activeIndex].selected = true;
            this.tabChanged = true;
        }
    }
    updateInkBar() {
        let tabHeader = DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
        this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
    }
}
TabView.ɵfac = function TabView_Factory(t) { return new (t || TabView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabView, selectors: [["p-tabView"]], contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabPanel, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabPanels = _t);
    } }, viewQuery: function TabView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inkbar = _t.first);
    } }, inputs: { orientation: "orientation", activeIndex: "activeIndex", style: "style", styleClass: "styleClass", controlClose: "controlClose" }, outputs: { onChange: "onChange", onClose: "onClose", activeIndexChange: "activeIndexChange" }, ngContentSelectors: _c0, decls: 8, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["role", "tablist", 1, "p-tabview-nav"], ["navbar", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-tabview-ink-bar"], ["inkbar", ""], [1, "p-tabview-panels"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "click", "keydown.enter"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tabview-close pi pi-times", 3, "click", 4, "ngIf"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-close", "pi", "pi-times", 3, "click"]], template: function TabView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1, 2);
        ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_Template, 1, 1, "ng-template", 3);
        ɵngcc0.ɵɵelement(4, "li", 4, 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-tabview p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc3.Tooltip, ɵngcc1.NgTemplateOutlet], styles: [".p-tabview-nav{display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"], encapsulation: 2, changeDetection: 0 });
TabView.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TabView.propDecorators = {
    orientation: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    controlClose: [{ type: Input }],
    navbar: [{ type: ViewChild, args: ['navbar',] }],
    inkbar: [{ type: ViewChild, args: ['inkbar',] }],
    tabPanels: [{ type: ContentChildren, args: [TabPanel,] }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    activeIndexChange: [{ type: Output }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabView, [{
        type: Component,
        args: [{
                selector: 'p-tabView',
                template: `
        <div [ngClass]="'p-tabview p-component'" [ngStyle]="style" [class]="styleClass">
            <ul #navbar class="p-tabview-nav" role="tablist">
                <ng-template ngFor let-tab [ngForOf]="tabs">
                    <li role="presentation" [ngClass]="{'p-highlight': tab.selected, 'p-disabled': tab.disabled}" [ngStyle]="tab.headerStyle" [class]="tab.headerStyleClass" *ngIf="!tab.closed">
                        <a role="tab" class="p-tabview-nav-link" [attr.id]="tab.id + '-label'" [attr.aria-selected]="tab.selected" [attr.aria-controls]="tab.id" [pTooltip]="tab.tooltip" [tooltipPosition]="tab.tooltipPosition"
                            [attr.aria-selected]="tab.selected" [positionStyle]="tab.tooltipPositionStyle" [tooltipStyleClass]="tab.tooltipStyleClass"
                            (click)="open($event,tab)" (keydown.enter)="open($event,tab)" pRipple [attr.tabindex]="tab.disabled ? null : '0'">
                            <ng-container *ngIf="!tab.headerTemplate">
                                <span class="p-tabview-left-icon" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon"></span>
                                <span class="p-tabview-title">{{tab.header}}</span>
                                <span class="p-tabview-right-icon" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon"></span>
                            </ng-container>
                            <ng-container *ngTemplateOutlet="tab.headerTemplate"></ng-container>
                            <span *ngIf="tab.closable" class="p-tabview-close pi pi-times" (click)="close($event,tab)"></span>
                        </a>
                    </li>
                </ng-template>
                <li #inkbar class="p-tabview-ink-bar"></li>
            </ul>
            <div class="p-tabview-panels">
                <ng-content></ng-content>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-tabview-nav{display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onClose: [{
            type: Output
        }], activeIndexChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], controlClose: [{
            type: Input
        }], navbar: [{
            type: ViewChild,
            args: ['navbar']
        }], inkbar: [{
            type: ViewChild,
            args: ['inkbar']
        }], tabPanels: [{
            type: ContentChildren,
            args: [TabPanel]
        }] }); })();
export class TabViewModule {
}
TabViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabViewModule });
TabViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabViewModule_Factory(t) { return new (t || TabViewModule)(); }, imports: [[CommonModule, SharedModule, TooltipModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabViewModule, { declarations: function () { return [TabView, TabPanel]; }, imports: function () { return [CommonModule, SharedModule, TooltipModule, RippleModule]; }, exports: function () { return [TabView, TabPanel, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabViewModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, TooltipModule, RippleModule],
                exports: [TabView, TabPanel, SharedModule],
                declarations: [TabView, TabPanel]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFidmlldy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3RhYnZpZXcvdGFidmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQVcsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQ2pFLGVBQWUsRUFBdUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFvQixVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25OLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7QUFjcEIsTUFBTSxPQUFPLFFBQVE7QUFBRyxJQTRDcEIsWUFBK0MsT0FBTyxFQUFTLGFBQStCLEVBQVMsRUFBcUI7QUFDaEksUUFEbUUsa0JBQWEsR0FBYixhQUFhLENBQWtCO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBcENwSCxVQUFLLEdBQVksSUFBSSxDQUFDO0FBQ25DLFFBR2Esb0JBQWUsR0FBVyxLQUFLLENBQUM7QUFDN0MsUUFDYSx5QkFBb0IsR0FBVyxVQUFVLENBQUM7QUFDdkQsUUFxQkksT0FBRSxHQUFX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V0FBVyxrQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OzhtQ0F3QlQsa0JBQ0YsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRTtjQUFpQixDQUFDLElBQUk7Ozs7Ozs7Ozs7O2tCQUV2Qzs7O3NsQkFDSTtBQUFDO0FBQWlDLFlBaExaLFVBQVU7QUFBSSxZQUNzQyxpQkFBaUI7QUFBRztBQUFHO0FBQTJCLDBCQWlMNUgsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLHFCQUVWLFNBQVMsU0FBQyxRQUFRO0FBQU8scUJBRXpCLFNBQVMsU0FBQyxRQUFRO0FBQU8sd0JBRXpCLGVBQWUsU0FBQyxRQUFRO0FBQU8sdUJBRS9CLE1BQU07QUFBSyxzQkFFWCxNQUFNO0FBQUssZ0NBRVgsTUFBTTtBQUFLLDBCQXVJWCxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBK0JoQixNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQUw1QixRQUFRLFNBQUM7S0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxZQUFZLENBQUMsa0JBQy9ELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsWUFBWSxDQUFDLGtCQUN4QyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLGNBQ25DOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsT25EZXN0cm95LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsQWZ0ZXJDb250ZW50SW5pdCxcbiAgICAgICAgQ29udGVudENoaWxkcmVuLFF1ZXJ5TGlzdCxUZW1wbGF0ZVJlZixFbWJlZGRlZFZpZXdSZWYsVmlld0NvbnRhaW5lclJlZixDaGFuZ2VEZXRlY3RvclJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgZm9yd2FyZFJlZiwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUb29sdGlwTW9kdWxlfSBmcm9tICdwcmltZW5nL3Rvb2x0aXAnO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7U2hhcmVkTW9kdWxlLFByaW1lVGVtcGxhdGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7QmxvY2thYmxlVUl9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuXG5sZXQgaWR4OiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdGFiUGFuZWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW2F0dHIuaWRdPVwiaWRcIiBjbGFzcz1cInAtdGFidmlldy1wYW5lbFwiIFtoaWRkZW5dPVwiIXNlbGVjdGVkXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiIFthdHRyLmFyaWEtaGlkZGVuXT1cIiFzZWxlY3RlZFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJpZCArICctbGFiZWwnXCIgKm5nSWY9XCIhY2xvc2VkXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFRlbXBsYXRlICYmIChjYWNoZSA/IGxvYWRlZCA6IHNlbGVjdGVkKVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhbmVsIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxPbkRlc3Ryb3kge1xuICAgIFxuICAgIEBJbnB1dCgpIGNsb3NhYmxlOiBib29sZWFuO1xuICAgIFxuICAgIEBJbnB1dCgpIGhlYWRlclN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgaGVhZGVyU3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGNhY2hlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHRvb2x0aXA6IGFueTtcbiAgICBcbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb246IHN0cmluZyA9ICd0b3AnO1xuXG4gICAgQElucHV0KCkgdG9vbHRpcFBvc2l0aW9uU3R5bGU6IHN0cmluZyA9ICdhYnNvbHV0ZSc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIFxuICAgIGNsb3NlZDogYm9vbGVhbjtcbiAgICBcbiAgICB2aWV3OiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgICBcbiAgICBfc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgXG4gICAgX2hlYWRlcjogc3RyaW5nO1xuXG4gICAgX2xlZnRJY29uOiBzdHJpbmc7XG5cbiAgICBfcmlnaHRJY29uOiBzdHJpbmc7XG4gICAgXG4gICAgbG9hZGVkOiBib29sZWFuO1xuICAgIFxuICAgIGlkOiBzdHJpbmcgPSBgcC10YWJwYW5lbC0ke2lkeCsrfWA7XG4gICAgXG4gICAgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICB0YWJWaWV3OiBUYWJWaWV3O1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRhYlZpZXcpKSB0YWJWaWV3LCBwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnRhYlZpZXcgPSB0YWJWaWV3IGFzIFRhYlZpZXc7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdGVkKHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbDtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5sb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbClcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9O1xuXG4gICAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMudGFiVmlldy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IGhlYWRlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVhZGVyO1xuICAgIH1cbiAgICBcbiAgICBzZXQgaGVhZGVyKGhlYWRlcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy50YWJWaWV3LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBsZWZ0SWNvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVmdEljb247XG4gICAgfVxuXG4gICAgc2V0IGxlZnRJY29uKGxlZnRJY29uIDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbGVmdEljb24gPSBsZWZ0SWNvbjtcbiAgICAgICAgdGhpcy50YWJWaWV3LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCByaWdodEljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JpZ2h0SWNvbjtcbiAgICB9XG5cbiAgICBzZXQgcmlnaHRJY29uKHJpZ2h0SWNvbiA6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3JpZ2h0SWNvbiA9IHJpZ2h0SWNvbjtcbiAgICAgICAgdGhpcy50YWJWaWV3LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10YWJWaWV3JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIidwLXRhYnZpZXcgcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPHVsICNuYXZiYXIgY2xhc3M9XCJwLXRhYnZpZXctbmF2XCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXRhYiBbbmdGb3JPZl09XCJ0YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCIgW25nQ2xhc3NdPVwieydwLWhpZ2hsaWdodCc6IHRhYi5zZWxlY3RlZCwgJ3AtZGlzYWJsZWQnOiB0YWIuZGlzYWJsZWR9XCIgW25nU3R5bGVdPVwidGFiLmhlYWRlclN0eWxlXCIgW2NsYXNzXT1cInRhYi5oZWFkZXJTdHlsZUNsYXNzXCIgKm5nSWY9XCIhdGFiLmNsb3NlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cInRhYlwiIGNsYXNzPVwicC10YWJ2aWV3LW5hdi1saW5rXCIgW2F0dHIuaWRdPVwidGFiLmlkICsgJy1sYWJlbCdcIiBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInRhYi5zZWxlY3RlZFwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwidGFiLmlkXCIgW3BUb29sdGlwXT1cInRhYi50b29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0YWIudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInRhYi5zZWxlY3RlZFwiIFtwb3NpdGlvblN0eWxlXT1cInRhYi50b29sdGlwUG9zaXRpb25TdHlsZVwiIFt0b29sdGlwU3R5bGVDbGFzc109XCJ0YWIudG9vbHRpcFN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuKCRldmVudCx0YWIpXCIgKGtleWRvd24uZW50ZXIpPVwib3BlbigkZXZlbnQsdGFiKVwiIHBSaXBwbGUgW2F0dHIudGFiaW5kZXhdPVwidGFiLmRpc2FibGVkID8gbnVsbCA6ICcwJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGFiLmhlYWRlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10YWJ2aWV3LWxlZnQtaWNvblwiIFtuZ0NsYXNzXT1cInRhYi5sZWZ0SWNvblwiICpuZ0lmPVwidGFiLmxlZnRJY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGFidmlldy10aXRsZVwiPnt7dGFiLmhlYWRlcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGFidmlldy1yaWdodC1pY29uXCIgW25nQ2xhc3NdPVwidGFiLnJpZ2h0SWNvblwiICpuZ0lmPVwidGFiLnJpZ2h0SWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGFiLmhlYWRlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0YWIuY2xvc2FibGVcIiBjbGFzcz1cInAtdGFidmlldy1jbG9zZSBwaSBwaS10aW1lc1wiIChjbGljayk9XCJjbG9zZSgkZXZlbnQsdGFiKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxsaSAjaW5rYmFyIGNsYXNzPVwicC10YWJ2aWV3LWluay1iYXJcIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRhYnZpZXctcGFuZWxzXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICBzdHlsZVVybHM6IFsnLi90YWJ2aWV3LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYlZpZXcgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LEFmdGVyVmlld0NoZWNrZWQsQmxvY2thYmxlVUkge1xuXG4gICAgQElucHV0KCkgb3JpZW50YXRpb246IHN0cmluZyA9ICd0b3AnO1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGNvbnRyb2xDbG9zZTogYm9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoJ25hdmJhcicpIG5hdmJhcjogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2lua2JhcicpIGlua2JhcjogRWxlbWVudFJlZjtcbiAgICBcbiAgICBAQ29udGVudENoaWxkcmVuKFRhYlBhbmVsKSB0YWJQYW5lbHM6IFF1ZXJ5TGlzdDxUYWJQYW5lbD47XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIGFjdGl2ZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcbiAgICBcbiAgICB0YWJzOiBUYWJQYW5lbFtdO1xuICAgIFxuICAgIF9hY3RpdmVJbmRleDogbnVtYmVyO1xuICAgIFxuICAgIHByZXZlbnRBY3RpdmVJbmRleFByb3BhZ2F0aW9uOiBib29sZWFuO1xuXG4gICAgdGFiQ2hhbmdlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICAgIFxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0VGFicygpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50YWJQYW5lbHMuY2hhbmdlcy5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRUYWJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFiQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbmtCYXIoKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGluaXRUYWJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhYnMgPSB0aGlzLnRhYlBhbmVscy50b0FycmF5KCk7XG4gICAgICAgIGxldCBzZWxlY3RlZFRhYjogVGFiUGFuZWwgPSB0aGlzLmZpbmRTZWxlY3RlZFRhYigpO1xuICAgICAgICBpZiAoIXNlbGVjdGVkVGFiICYmIHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9IG51bGwgJiYgdGhpcy50YWJzLmxlbmd0aCA+IHRoaXMuYWN0aXZlSW5kZXgpXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzW3RoaXMuYWN0aXZlSW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnRhYkNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG4gICAgb3BlbihldmVudDogRXZlbnQsIHRhYjogVGFiUGFuZWwpIHtcbiAgICAgICAgaWYgKHRhYi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCF0YWIuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFRhYjogVGFiUGFuZWwgPSB0aGlzLmZpbmRTZWxlY3RlZFRhYigpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGFiKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWIuc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRhYkNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGFiLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFRhYkluZGV4ID0gdGhpcy5maW5kVGFiSW5kZXgodGFiKTtcbiAgICAgICAgICAgIHRoaXMucHJldmVudEFjdGl2ZUluZGV4UHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleENoYW5nZS5lbWl0KHNlbGVjdGVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgaW5kZXg6IHNlbGVjdGVkVGFiSW5kZXh9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsb3NlKGV2ZW50OiBFdmVudCwgdGFiOiBUYWJQYW5lbCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5maW5kVGFiSW5kZXgodGFiKSxcbiAgICAgICAgICAgICAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVGFiKHRhYik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVGFiKHRhYik7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZmluZFRhYkluZGV4KHRhYilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgXG4gICAgY2xvc2VUYWIodGFiOiBUYWJQYW5lbCkge1xuICAgICAgICBpZiAodGFiLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhYi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50YWJDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhYi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0YWJQYW5lbCA9IHRoaXMudGFic1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhYlBhbmVsLmNsb3NlZCYmIXRhYi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJQYW5lbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGFiLmNsb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIGZpbmRTZWxlY3RlZFRhYigpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFic1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGZpbmRUYWJJbmRleCh0YWI6IFRhYlBhbmVsKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJzW2ldID09IHRhYikge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIFxuICAgIGdldEJsb2NrYWJsZUVsZW1lbnQoKTogSFRNTEVsZW1lbnTCoHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IGFjdGl2ZUluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVJbmRleDtcbiAgICB9XG5cbiAgICBzZXQgYWN0aXZlSW5kZXgodmFsOm51bWJlcikge1xuICAgICAgICB0aGlzLl9hY3RpdmVJbmRleCA9IHZhbDtcbiAgICAgICAgaWYgKHRoaXMucHJldmVudEFjdGl2ZUluZGV4UHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudEFjdGl2ZUluZGV4UHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhYnMgJiYgdGhpcy50YWJzLmxlbmd0aCAmJiB0aGlzLl9hY3RpdmVJbmRleCAhPSBudWxsICYmIHRoaXMudGFicy5sZW5ndGggPiB0aGlzLl9hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5maW5kU2VsZWN0ZWRUYWIoKS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50YWJzW3RoaXMuX2FjdGl2ZUluZGV4XS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRhYkNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlSW5rQmFyKCkge1xuICAgICAgICBsZXQgdGFiSGVhZGVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMubmF2YmFyLm5hdGl2ZUVsZW1lbnQsICdsaS5wLWhpZ2hsaWdodCcpO1xuICAgICAgICB0aGlzLmlua2Jhci5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gRG9tSGFuZGxlci5nZXRXaWR0aCh0YWJIZWFkZXIpICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbmtiYXIubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gIERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHRhYkhlYWRlcikubGVmdCAtIERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHRoaXMubmF2YmFyLm5hdGl2ZUVsZW1lbnQpLmxlZnQgKyAncHgnO1xuICAgIH1cbn1cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsU2hhcmVkTW9kdWxlLFRvb2x0aXBNb2R1bGUsUmlwcGxlTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVGFiVmlldyxUYWJQYW5lbCxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1RhYlZpZXcsVGFiUGFuZWxdXG59KVxuZXhwb3J0IGNsYXNzIFRhYlZpZXdNb2R1bGUgeyB9XG4iXX0=