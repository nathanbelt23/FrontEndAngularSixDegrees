import { NgModule, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';

function Breadcrumb_li_2_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r5.home.icon || "pi pi-home");
} }
function Breadcrumb_li_2_a_1_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.home.label);
} }
function Breadcrumb_li_2_a_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r9.home.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_li_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_1_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = ɵngcc0.ɵɵreference(3);
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.home.escape !== false)("ngIfElse", _r8);
} }
function Breadcrumb_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_li_2_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.itemClick($event, ctx_r10.home); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_1_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_1_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("href", ctx_r3.home.url ? ctx_r3.home.url : null, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵattribute("target", ctx_r3.home.target)("title", ctx_r3.home.title)("id", ctx_r3.home.id)("tabindex", ctx_r3.home.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.home.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.home.label);
} }
function Breadcrumb_li_2_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r12.home.icon || "pi pi-home");
} }
function Breadcrumb_li_2_a_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r14.home.label);
} }
function Breadcrumb_li_2_a_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r16.home.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_li_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_2_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 16, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r15 = ɵngcc0.ɵɵreference(3);
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r13.home.escape !== false)("ngIfElse", _r15);
} }
const _c0 = function () { return { exact: false }; };
function Breadcrumb_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_li_2_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.itemClick($event, ctx_r17.home); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_2_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_2_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("routerLink", ctx_r4.home.routerLink)("queryParams", ctx_r4.home.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r4.home.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(16, _c0))("fragment", ctx_r4.home.fragment)("queryParamsHandling", ctx_r4.home.queryParamsHandling)("preserveFragment", ctx_r4.home.preserveFragment)("skipLocationChange", ctx_r4.home.skipLocationChange)("replaceUrl", ctx_r4.home.replaceUrl)("state", ctx_r4.home.state);
    ɵngcc0.ɵɵattribute("target", ctx_r4.home.target)("title", ctx_r4.home.title)("id", ctx_r4.home.id)("tabindex", ctx_r4.home.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.home.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.home.label);
} }
const _c1 = function (a1) { return { "p-breadcrumb-home": true, "p-disabled": a1 }; };
function Breadcrumb_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_1_Template, 3, 7, "a", 5);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_2_Template, 3, 17, "a", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.home.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c1, ctx_r0.home.disabled))("ngStyle", ctx_r0.home.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.home.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.home.routerLink);
} }
function Breadcrumb_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 17);
} }
function Breadcrumb_ng_template_4_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r19.icon);
} }
function Breadcrumb_ng_template_4_a_1_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r19.label);
} }
function Breadcrumb_ng_template_4_a_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r19.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_ng_template_4_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 20, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r28 = ɵngcc0.ɵɵreference(3);
    const item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.escape !== false)("ngIfElse", _r28);
} }
function Breadcrumb_ng_template_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_ng_template_4_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); const item_r19 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.itemClick($event, item_r19); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_1_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵattribute("href", item_r19.url ? item_r19.url : null, ɵngcc0.ɵɵsanitizeUrl)("target", item_r19.target)("title", item_r19.title)("id", item_r19.id)("tabindex", item_r19.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.label);
} }
function Breadcrumb_ng_template_4_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r19.icon);
} }
function Breadcrumb_ng_template_4_a_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r19.label);
} }
function Breadcrumb_ng_template_4_a_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r19.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_ng_template_4_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 21, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r41 = ɵngcc0.ɵɵreference(3);
    const item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.escape !== false)("ngIfElse", _r41);
} }
function Breadcrumb_ng_template_4_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_ng_template_4_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r47); const item_r19 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r46 = ɵngcc0.ɵɵnextContext(); return ctx_r46.itemClick($event, item_r19); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_2_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r19.routerLink)("queryParams", item_r19.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r19.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(16, _c0))("fragment", item_r19.fragment)("queryParamsHandling", item_r19.queryParamsHandling)("preserveFragment", item_r19.preserveFragment)("skipLocationChange", item_r19.skipLocationChange)("replaceUrl", item_r19.replaceUrl)("state", item_r19.state);
    ɵngcc0.ɵɵattribute("target", item_r19.target)("title", item_r19.title)("id", item_r19.id)("tabindex", item_r19.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.label);
} }
function Breadcrumb_ng_template_4_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 17);
} }
const _c2 = function (a0) { return { "p-disabled": a0 }; };
function Breadcrumb_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_Template, 3, 7, "a", 18);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_2_Template, 3, 17, "a", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, Breadcrumb_ng_template_4_li_3_Template, 1, 0, "li", 2);
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const end_r20 = ctx.last;
    ɵngcc0.ɵɵclassMap(item_r19.styleClass);
    ɵngcc0.ɵɵproperty("ngStyle", item_r19.style)("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r19.disabled));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r19.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !end_r20);
} }
export class Breadcrumb {
    constructor() {
        this.onItemClick = new EventEmitter();
    }
    itemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.onItemClick.emit({
            originalEvent: event,
            item: item
        });
    }
    onHomeClick(event) {
        if (this.home) {
            this.itemClick(event, this.home);
        }
    }
}
Breadcrumb.ɵfac = function Breadcrumb_Factory(t) { return new (t || Breadcrumb)(); };
Breadcrumb.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Breadcrumb, selectors: [["p-breadcrumb"]], inputs: { model: "model", style: "style", styleClass: "styleClass", home: "home" }, outputs: { onItemClick: "onItemClick" }, decls: 5, vars: 7, consts: [[3, "ngStyle", "ngClass"], [3, "class", "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-breadcrumb-chevron pi pi-chevron-right", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [3, "ngClass", "ngStyle"], ["class", "p-menuitem-link", 3, "href", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "href", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlHomeLabel", ""], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlHomeRouteLabel", ""], [1, "p-breadcrumb-chevron", "pi", "pi-chevron-right"], ["class", "p-menuitem-link", 3, "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "click"], ["htmlLabel", ""], ["htmlRouteLabel", ""]], template: function Breadcrumb_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul");
        ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_Template, 3, 8, "li", 1);
        ɵngcc0.ɵɵtemplate(3, Breadcrumb_li_3_Template, 1, 0, "li", 2);
        ɵngcc0.ɵɵtemplate(4, Breadcrumb_ng_template_4_Template, 4, 9, "ng-template", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-breadcrumb p-component");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.home);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.model && ctx.home);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive], styles: [".p-breadcrumb ul{align-items:center;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none}"], encapsulation: 2, changeDetection: 0 });
Breadcrumb.propDecorators = {
    model: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    home: [{ type: Input }],
    onItemClick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Breadcrumb, [{
        type: Component,
        args: [{
                selector: 'p-breadcrumb',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-breadcrumb p-component'">
            <ul>
                <li [class]="home.styleClass" [ngClass]="{'p-breadcrumb-home': true, 'p-disabled':home.disabled}" [ngStyle]="home.style" *ngIf="home">
                    <a *ngIf="!home.routerLink" [href]="home.url ? home.url : null" class="p-menuitem-link" (click)="itemClick($event, home)" 
                        [attr.target]="home.target" [attr.title]="home.title" [attr.id]="home.id" [attr.tabindex]="home.disabled ? null : '0'">
                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon||'pi pi-home'"></span>
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeLabel" class="p-menuitem-text">{{home.label}}</span>
                            <ng-template #htmlHomeLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                    <a *ngIf="home.routerLink" [routerLink]="home.routerLink" [queryParams]="home.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="home.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link" (click)="itemClick($event, home)" 
                        [attr.target]="home.target" [attr.title]="home.title" [attr.id]="home.id" [attr.tabindex]="home.disabled ? null : '0'"
                        [fragment]="home.fragment" [queryParamsHandling]="home.queryParamsHandling" [preserveFragment]="home.preserveFragment" [skipLocationChange]="home.skipLocationChange" [replaceUrl]="home.replaceUrl" [state]="home.state">
                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon||'pi pi-home'"></span>
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" class="p-menuitem-text">{{home.label}}</span>
                            <ng-template #htmlHomeRouteLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                </li>
                <li class="p-breadcrumb-chevron pi pi-chevron-right" *ngIf="model&&home"></li>
                <ng-template ngFor let-item let-end="last" [ngForOf]="model">
                    <li [class]="item.styleClass" [ngStyle]="item.style" [ngClass]="{'p-disabled':item.disabled}">
                        <a *ngIf="!item.routerLink" [attr.href]="item.url ? item.url : null" class="p-menuitem-link" (click)="itemClick($event, item)" 
                            [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" [attr.tabindex]="item.disabled ? null : '0'">
                            <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon"></span>
                            <ng-container *ngIf="item.label">
                                <span *ngIf="item.escape !== false; else htmlLabel" class="p-menuitem-text">{{item.label}}</span>
                                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                            </ng-container>
                        </a>
                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'p-menuitem-link-active'"  [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link" (click)="itemClick($event, item)" 
                            [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" [attr.tabindex]="item.disabled ? null : '0'"
                            [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state">
                            <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon"></span>
                            <ng-container *ngIf="item.label">
                                <span *ngIf="item.escape !== false; else htmlRouteLabel" class="p-menuitem-text">{{item.label}}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                            </ng-container>
                        </a>
                    </li>
                    <li class="p-breadcrumb-chevron pi pi-chevron-right" *ngIf="!end"></li>
                </ng-template>
            </ul>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-breadcrumb ul{align-items:center;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none}"]
            }]
    }], function () { return []; }, { onItemClick: [{
            type: Output
        }], model: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], home: [{
            type: Input
        }] }); })();
export class BreadcrumbModule {
}
BreadcrumbModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[CommonModule, RouterModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: function () { return [Breadcrumb]; }, imports: function () { return [CommonModule, RouterModule]; }, exports: function () { return [Breadcrumb, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreadcrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                exports: [Breadcrumb, RouterModule],
                declarations: [Breadcrumb]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RDdDLE1BQU0sT0FBTyxVQUFVO0FBQ3ZCLElBdkRBO0FBQ0csUUErRFcsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNsRSxJQTZCQSxDQUFDO0FBQ0QsSUE3QkksU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFjO0FBQ25DLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLFlBQVksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25DLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUN2QixZQUFZLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQyxTQUFTO0FBQ1QsUUFDUSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFBRSxZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3pCLGdCQUFnQixhQUFhLEVBQUUsS0FBSztBQUNwQyxnQkFBZ0IsSUFBSSxFQUFFLElBQUk7QUFDMUIsYUFBYSxDQUFDLENBQUM7QUFDZixTQUFTO0FBQ1QsUUFDUSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUM5QixZQUFZLGFBQWEsRUFBRSxLQUFLO0FBQ2hDLFlBQVksSUFBSSxFQUFFLElBQUk7QUFDdEIsU0FBUyxDQUFDLENBQUM7QUFDWCxJQUFJLENBQUM7QUFDTCxJQUNJLFdBQVcsQ0FBQyxLQUFLO0FBQ3JCLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTDtzQ0E5RkMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRTtZQUFjLGtCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O3VZQW9EVDtBQUFDO0FBRUcsb0JBQUosS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLDBCQUVWLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFmVixrQkFDRixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDOUMsYUFBYSxFQUFFO09BQWlCLENBQUMsSUFBSTs7Z0VBRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFXZ0I7QUFxQ2pCLE1BQU0sT0FBTyxnQkFBZ0I7QUFBRzs0Q0FML0IsUUFBUSxTQUFDO0VBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLFlBQVksQ0FBQyxrQkFDcEMsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFDLFlBQVksQ0FBQyxrQkFDbEMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQzdCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWJyZWFkY3J1bWInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtuZ0NsYXNzXT1cIidwLWJyZWFkY3J1bWIgcC1jb21wb25lbnQnXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJob21lLnN0eWxlQ2xhc3NcIiBbbmdDbGFzc109XCJ7J3AtYnJlYWRjcnVtYi1ob21lJzogdHJ1ZSwgJ3AtZGlzYWJsZWQnOmhvbWUuZGlzYWJsZWR9XCIgW25nU3R5bGVdPVwiaG9tZS5zdHlsZVwiICpuZ0lmPVwiaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFob21lLnJvdXRlckxpbmtcIiBbaHJlZl09XCJob21lLnVybCA/IGhvbWUudXJsIDogbnVsbFwiIGNsYXNzPVwicC1tZW51aXRlbS1saW5rXCIgKGNsaWNrKT1cIml0ZW1DbGljaygkZXZlbnQsIGhvbWUpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50YXJnZXRdPVwiaG9tZS50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJob21lLnRpdGxlXCIgW2F0dHIuaWRdPVwiaG9tZS5pZFwiIFthdHRyLnRhYmluZGV4XT1cImhvbWUuZGlzYWJsZWQgPyBudWxsIDogJzAnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImhvbWUuaWNvblwiIGNsYXNzPVwicC1tZW51aXRlbS1pY29uXCIgW25nQ2xhc3NdPVwiaG9tZS5pY29ufHwncGkgcGktaG9tZSdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaG9tZS5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaG9tZS5lc2NhcGUgIT09IGZhbHNlOyBlbHNlIGh0bWxIb21lTGFiZWxcIiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiPnt7aG9tZS5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaHRtbEhvbWVMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaG9tZS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJob21lLnJvdXRlckxpbmtcIiBbcm91dGVyTGlua109XCJob21lLnJvdXRlckxpbmtcIiBbcXVlcnlQYXJhbXNdPVwiaG9tZS5xdWVyeVBhcmFtc1wiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIidwLW1lbnVpdGVtLWxpbmstYWN0aXZlJ1wiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJob21lLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zfHx7ZXhhY3Q6ZmFsc2V9XCIgY2xhc3M9XCJwLW1lbnVpdGVtLWxpbmtcIiAoY2xpY2spPVwiaXRlbUNsaWNrKCRldmVudCwgaG9tZSlcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnRhcmdldF09XCJob21lLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cImhvbWUudGl0bGVcIiBbYXR0ci5pZF09XCJob21lLmlkXCIgW2F0dHIudGFiaW5kZXhdPVwiaG9tZS5kaXNhYmxlZCA/IG51bGwgOiAnMCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2ZyYWdtZW50XT1cImhvbWUuZnJhZ21lbnRcIiBbcXVlcnlQYXJhbXNIYW5kbGluZ109XCJob21lLnF1ZXJ5UGFyYW1zSGFuZGxpbmdcIiBbcHJlc2VydmVGcmFnbWVudF09XCJob21lLnByZXNlcnZlRnJhZ21lbnRcIiBbc2tpcExvY2F0aW9uQ2hhbmdlXT1cImhvbWUuc2tpcExvY2F0aW9uQ2hhbmdlXCIgW3JlcGxhY2VVcmxdPVwiaG9tZS5yZXBsYWNlVXJsXCIgW3N0YXRlXT1cImhvbWUuc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaG9tZS5pY29uXCIgY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiBbbmdDbGFzc109XCJob21lLmljb258fCdwaSBwaS1ob21lJ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJob21lLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJob21lLmVzY2FwZSAhPT0gZmFsc2U7IGVsc2UgaHRtbEhvbWVSb3V0ZUxhYmVsXCIgY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIj57e2hvbWUubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxIb21lUm91dGVMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaG9tZS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtYnJlYWRjcnVtYi1jaGV2cm9uIHBpIHBpLWNoZXZyb24tcmlnaHRcIiAqbmdJZj1cIm1vZGVsJiZob21lXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gbGV0LWVuZD1cImxhc3RcIiBbbmdGb3JPZl09XCJtb2RlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cIml0ZW0uc3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cIml0ZW0uc3R5bGVcIiBbbmdDbGFzc109XCJ7J3AtZGlzYWJsZWQnOml0ZW0uZGlzYWJsZWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFpdGVtLnJvdXRlckxpbmtcIiBbYXR0ci5ocmVmXT1cIml0ZW0udXJsID8gaXRlbS51cmwgOiBudWxsXCIgY2xhc3M9XCJwLW1lbnVpdGVtLWxpbmtcIiAoY2xpY2spPVwiaXRlbUNsaWNrKCRldmVudCwgaXRlbSlcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50YXJnZXRdPVwiaXRlbS50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJpdGVtLnRpdGxlXCIgW2F0dHIuaWRdPVwiaXRlbS5pZFwiIFthdHRyLnRhYmluZGV4XT1cIml0ZW0uZGlzYWJsZWQgPyBudWxsIDogJzAnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpdGVtLmljb25cIiBjbGFzcz1cInAtbWVudWl0ZW0taWNvblwiIFtuZ0NsYXNzXT1cIml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0uZXNjYXBlICE9PSBmYWxzZTsgZWxzZSBodG1sTGFiZWxcIiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaXRlbS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJpdGVtLnJvdXRlckxpbmtcIiBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBbcXVlcnlQYXJhbXNdPVwiaXRlbS5xdWVyeVBhcmFtc1wiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIidwLW1lbnVpdGVtLWxpbmstYWN0aXZlJ1wiICBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwiaXRlbS5yb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc3x8e2V4YWN0OmZhbHNlfVwiIGNsYXNzPVwicC1tZW51aXRlbS1saW5rXCIgKGNsaWNrKT1cIml0ZW1DbGljaygkZXZlbnQsIGl0ZW0pXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFyZ2V0XT1cIml0ZW0udGFyZ2V0XCIgW2F0dHIudGl0bGVdPVwiaXRlbS50aXRsZVwiIFthdHRyLmlkXT1cIml0ZW0uaWRcIiBbYXR0ci50YWJpbmRleF09XCJpdGVtLmRpc2FibGVkID8gbnVsbCA6ICcwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZyYWdtZW50XT1cIml0ZW0uZnJhZ21lbnRcIiBbcXVlcnlQYXJhbXNIYW5kbGluZ109XCJpdGVtLnF1ZXJ5UGFyYW1zSGFuZGxpbmdcIiBbcHJlc2VydmVGcmFnbWVudF09XCJpdGVtLnByZXNlcnZlRnJhZ21lbnRcIiBbc2tpcExvY2F0aW9uQ2hhbmdlXT1cIml0ZW0uc2tpcExvY2F0aW9uQ2hhbmdlXCIgW3JlcGxhY2VVcmxdPVwiaXRlbS5yZXBsYWNlVXJsXCIgW3N0YXRlXT1cIml0ZW0uc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0uaWNvblwiIGNsYXNzPVwicC1tZW51aXRlbS1pY29uXCIgW25nQ2xhc3NdPVwiaXRlbS5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5lc2NhcGUgIT09IGZhbHNlOyBlbHNlIGh0bWxSb3V0ZUxhYmVsXCIgY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNodG1sUm91dGVMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaXRlbS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLWJyZWFkY3J1bWItY2hldnJvbiBwaSBwaS1jaGV2cm9uLXJpZ2h0XCIgKm5nSWY9XCIhZW5kXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iIHtcblxuICAgIEBJbnB1dCgpIG1vZGVsOiBNZW51SXRlbVtdO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgICBcbiAgICBASW5wdXQoKSBob21lOiBNZW51SXRlbTtcblxuICAgIEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIFxuICAgIGl0ZW1DbGljayhldmVudCwgaXRlbTogTWVudUl0ZW0pwqB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWl0ZW0udXJsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoaXRlbS5jb21tYW5kKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtLmNvbW1hbmQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkl0ZW1DbGljay5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgb25Ib21lQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtQ2xpY2soZXZlbnQsIHRoaXMuaG9tZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSb3V0ZXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtCcmVhZGNydW1iLFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQnJlYWRjcnVtYl1cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYk1vZHVsZSB7IH1cbiJdfQ==