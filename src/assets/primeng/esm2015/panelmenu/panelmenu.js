import { NgModule, Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';

function PanelMenuSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} }
const _c0 = function (a0, a1) { return { "pi-angle-right": a0, "pi-angle-down": a1 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c1 = function (a0) { return { "p-disabled": a0 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵngcc0.ɵɵreference(5);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c1, child_r1.disabled));
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", !ctx_r4.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c2 = function () { return { exact: false }; };
function PanelMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵngcc0.ɵɵreference(5);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(20, _c2))("ngClass", ɵngcc0.ɵɵpureFunction1(21, _c1, child_r1.disabled))("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("tabindex", !ctx_r5.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-panelMenuSub", 20);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("item", child_r1)("expanded", child_r1.expanded)("transitionOptions", ctx_r6.transitionOptions);
} }
function PanelMenuSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_Template, 6, 13, "a", 6);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_Template, 6, 23, "a", 7);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template, 1, 3, "p-panelMenuSub", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("p-hidden", child_r1.visible === false);
    ɵngcc0.ɵɵproperty("ngClass", child_r1.styleClass)("ngStyle", child_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function PanelMenuSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PanelMenuSub_ng_template_1_li_0_Template, 1, 0, "li", 2);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_Template, 4, 7, "li", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
const _c3 = function (a1) { return { "p-submenu-list": true, "p-panelmenu-root-submenu": a1 }; };
const _c4 = function (a0) { return { transitionParams: a0, height: "*" }; };
const _c5 = function (a1) { return { value: "visible", params: a1 }; };
const _c6 = function (a0) { return { transitionParams: a0, height: "0" }; };
const _c7 = function (a1) { return { value: "hidden", params: a1 }; };
const _c8 = function (a0, a1) { return { "pi-chevron-right": a0, "pi-chevron-down": a1 }; };
function PanelMenu_ng_container_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const item_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_3_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_3_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵngcc0.ɵɵreference(5);
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵattribute("href", item_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", item_r1.disabled ? null : "0")("id", item_r1.id)("target", item_r1.target)("title", item_r1.title)("aria-expanded", item_r1.expanded)("id", item_r1.id + "_header")("aria-controls", item_r1.id + "_content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenu_ng_container_1_a_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 16);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_4_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const item_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_4_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_4_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_4_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_ng_template_4_Template, 1, 1, "ng-template", null, 17, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵngcc0.ɵɵreference(5);
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(18, _c2))("fragment", item_r1.fragment)("queryParamsHandling", item_r1.queryParamsHandling)("preserveFragment", item_r1.preserveFragment)("skipLocationChange", item_r1.skipLocationChange)("replaceUrl", item_r1.replaceUrl)("state", item_r1.state);
    ɵngcc0.ɵɵattribute("target", item_r1.target)("title", item_r1.title)("id", item_r1.id)("tabindex", item_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenu_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_1_div_5_Template_div_animation_rootItem_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onToggleDone(); });
    ɵngcc0.ɵɵelementStart(1, "div", 19);
    ɵngcc0.ɵɵelement(2, "p-panelMenuSub", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@rootItem", item_r1.expanded ? ɵngcc0.ɵɵpureFunction1(9, _c5, ɵngcc0.ɵɵpureFunction1(7, _c4, ctx_r6.animating ? ctx_r6.transitionOptions : "0ms")) : ɵngcc0.ɵɵpureFunction1(13, _c7, ɵngcc0.ɵɵpureFunction1(11, _c6, ctx_r6.transitionOptions)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("id", item_r1.id + "_content")("aria-labelledby", item_r1.id + "_header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", item_r1)("expanded", true)("transitionOptions", ctx_r6.transitionOptions)("root", true);
} }
const _c9 = function (a0) { return { "p-hidden": a0 }; };
const _c10 = function (a1, a2) { return { "p-component p-panelmenu-header": true, "p-highlight": a1, "p-disabled": a2 }; };
function PanelMenu_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_Template, 6, 12, "a", 4);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_Template, 6, 19, "a", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, PanelMenu_ng_container_1_div_5_Template, 3, 15, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c9, item_r1.visible === false));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(item_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c10, item_r1.expanded, item_r1.disabled))("ngStyle", item_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
} }
export class BasePanelMenuItem {
    constructor(ref) {
        this.ref = ref;
    }
    handleClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        item.expanded = !item.expanded;
        this.ref.detectChanges();
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }
}
export class PanelMenuSub extends BasePanelMenuItem {
    constructor(ref) {
        super(ref);
    }
}
PanelMenuSub.ɵfac = function PanelMenuSub_Factory(t) { return new (t || PanelMenuSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenuSub, selectors: [["p-panelMenuSub"]], inputs: { item: "item", expanded: "expanded", transitionOptions: "transitionOptions", root: "root" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 13, consts: [["role", "tree", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 4, "ngIf"], ["class", "p-menuitem", 3, "ngClass", "p-hidden", "ngStyle", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator"], [1, "p-menuitem", 3, "ngClass", "ngStyle"], ["class", "p-menuitem-link", "role", "treeitem", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-menuitem-link", "role", "treeitem", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "item", "expanded", "transitionOptions", 4, "ngIf"], ["role", "treeitem", 1, "p-menuitem-link", 3, "ngClass", "click"], ["class", "p-panelmenu-icon pi pi-fw", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", "pi-fw", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], ["role", "treeitem", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "item", "expanded", "transitionOptions"]], template: function PanelMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c3, ctx.root))("@submenu", ctx.expanded ? ɵngcc0.ɵɵpureFunction1(7, _c5, ɵngcc0.ɵɵpureFunction1(5, _c4, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(11, _c7, ɵngcc0.ɵɵpureFunction1(9, _c6, ctx.transitionOptions)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], encapsulation: 2, data: { animation: [
            trigger('submenu', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] } });
PanelMenuSub.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PanelMenuSub.propDecorators = {
    item: [{ type: Input }],
    expanded: [{ type: Input }],
    transitionOptions: [{ type: Input }],
    root: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuSub, [{
        type: Component,
        args: [{
                selector: 'p-panelMenuSub',
                template: `
        <ul [ngClass]="{'p-submenu-list': true, 'p-panelmenu-root-submenu': root}" [@submenu]="expanded ? {value: 'visible', params: {transitionParams: transitionOptions, height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}" role="tree">
            <ng-template ngFor let-child [ngForOf]="item.items">
                <li *ngIf="child.separator" class="p-menu-separator" role="separator">
                <li *ngIf="!child.separator" class="p-menuitem" [ngClass]="child.styleClass" [class.p-hidden]="child.visible === false" [ngStyle]="child.style">
                    <a *ngIf="!child.routerLink" [attr.href]="child.url" class="p-menuitem-link" [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'" [attr.id]="child.id"
                        [ngClass]="{'p-disabled':child.disabled}" role="treeitem" [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event,child)" [attr.target]="child.target" [attr.title]="child.title">
                        <span class="p-panelmenu-icon pi pi-fw" [ngClass]="{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}" *ngIf="child.items"></span>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{child.label}}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [queryParams]="child.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link" 
                        [ngClass]="{'p-disabled':child.disabled}" [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'" [attr.id]="child.id" role="treeitem" [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event,child)" [attr.target]="child.target" [attr.title]="child.title"
                        [fragment]="child.fragment" [queryParamsHandling]="child.queryParamsHandling" [preserveFragment]="child.preserveFragment" [skipLocationChange]="child.skipLocationChange" [replaceUrl]="child.replaceUrl" [state]="child.state">
                        <span class="p-panelmenu-icon pi pi-fw" [ngClass]="{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}" *ngIf="child.items"></span>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{child.label}}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                    </a>
                    <p-panelMenuSub [item]="child" [expanded]="child.expanded" [transitionOptions]="transitionOptions" *ngIf="child.items"></p-panelMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
                animations: [
                    trigger('submenu', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { item: [{
            type: Input
        }], expanded: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], root: [{
            type: Input
        }] }); })();
export class PanelMenu extends BasePanelMenuItem {
    constructor(ref) {
        super(ref);
        this.multiple = true;
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    }
    collapseAll() {
        for (let item of this.model) {
            if (item.expanded) {
                item.expanded = false;
            }
        }
    }
    handleClick(event, item) {
        if (!this.multiple) {
            for (let modelItem of this.model) {
                if (item !== modelItem && modelItem.expanded) {
                    modelItem.expanded = false;
                }
            }
        }
        this.animating = true;
        super.handleClick(event, item);
    }
    onToggleDone() {
        this.animating = false;
    }
}
PanelMenu.ɵfac = function PanelMenu_Factory(t) { return new (t || PanelMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenu, selectors: [["p-panelMenu"]], inputs: { multiple: "multiple", transitionOptions: "transitionOptions", model: "model", style: "style", styleClass: "styleClass" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[3, "ngStyle", "ngClass"], [4, "ngFor", "ngForOf"], [1, "p-panelmenu-panel", 3, "ngClass"], [3, "ngClass", "ngStyle"], ["class", "p-panelmenu-header-link", 3, "click", 4, "ngIf"], ["class", "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["class", "p-toggleable-content", 4, "ngIf"], [1, "p-panelmenu-header-link", 3, "click"], ["class", "p-panelmenu-icon pi", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [1, "p-toggleable-content"], ["role", "region", 1, "p-panelmenu-content"], [3, "item", "expanded", "transitionOptions", "root"]], template: function PanelMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_Template, 6, 13, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], styles: [".p-panelmenu .p-panelmenu-header-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"], encapsulation: 2, data: { animation: [
            trigger('rootItem', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] }, changeDetection: 0 });
PanelMenu.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PanelMenu.propDecorators = {
    model: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    multiple: [{ type: Input }],
    transitionOptions: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenu, [{
        type: Component,
        args: [{
                selector: 'p-panelMenu',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-panelmenu p-component'">
            <ng-container *ngFor="let item of model;let f=first;let l=last;">
                <div class="p-panelmenu-panel" [ngClass]="{'p-hidden': item.visible === false}">
                    <div [ngClass]="{'p-component p-panelmenu-header':true, 'p-highlight':item.expanded,'p-disabled':item.disabled}" [class]="item.styleClass" [ngStyle]="item.style">
                        <a *ngIf="!item.routerLink" [attr.href]="item.url" (click)="handleClick($event,item)" [attr.tabindex]="item.disabled ? null : '0'" [attr.id]="item.id"
                           [attr.target]="item.target" [attr.title]="item.title" class="p-panelmenu-header-link" [attr.aria-expanded]="item.expanded" [attr.id]="item.id + '_header'" [attr.aria-controls]="item.id +'_content'">
                            <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}"></span>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{item.label}}</span>
                            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </a>
                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}"
                           (click)="handleClick($event,item)" [attr.target]="item.target" [attr.title]="item.title" class="p-panelmenu-header-link" [attr.id]="item.id" [attr.tabindex]="item.disabled ? null : '0'"
                           [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state">
                            <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}"></span>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{item.label}}</span>
                            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </a>
                    </div>
                    <div *ngIf="item.items" class="p-toggleable-content" [@rootItem]="item.expanded ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}"  (@rootItem.done)="onToggleDone()">
                        <div class="p-panelmenu-content" role="region" [attr.id]="item.id +'_content' " [attr.aria-labelledby]="item.id +'_header'">
                            <p-panelMenuSub [item]="item" [expanded]="true" [transitionOptions]="transitionOptions" [root]="true"></p-panelMenuSub>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
                animations: [
                    trigger('rootItem', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-panelmenu .p-panelmenu-header-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { multiple: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], model: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class PanelMenuModule {
}
PanelMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PanelMenuModule });
PanelMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PanelMenuModule_Factory(t) { return new (t || PanelMenuModule)(); }, imports: [[CommonModule, RouterModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PanelMenuModule, { declarations: function () { return [PanelMenu, PanelMenuSub]; }, imports: function () { return [CommonModule, RouterModule]; }, exports: function () { return [PanelMenu, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                exports: [PanelMenu, RouterModule],
                declarations: [PanelMenu, PanelMenuSub]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWxtZW51LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFuZWxtZW51L3BhbmVsbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLE1BQU0sT0FBTyxpQkFBaUI7QUFDOUIsSUFDSSxZQUFvQixHQUFzQjtBQUFJLFFBQTFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsSUFBRSxDQUFDO0FBQ2xELElBQ0ksV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJO0FBQzNCLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLFlBQVksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25DLFlBQVksT0FBTztBQUNuQixTQUFT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TyxlQUFlO0FBQUc7MkNBTDlCLFFBQVEsU0FBQztHQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLENBQUMsa0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBQyxZQUFZLENBQUMsa0JBQ2pDLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBQyxZQUFZLENBQUMsY0FDekM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsQ2hhbmdlRGV0ZWN0b3JSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHJpZ2dlcixzdGF0ZSxzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIEJhc2VQYW5lbE1lbnVJdGVtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICAgICAgXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGl0ZW0uZXhwYW5kZWQgPSAhaXRlbS5leHBhbmRlZDtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFpdGVtLnVybCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoaXRlbS5jb21tYW5kKSB7XG4gICAgICAgICAgICBpdGVtLmNvbW1hbmQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtcGFuZWxNZW51U3ViJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dWwgW25nQ2xhc3NdPVwieydwLXN1Ym1lbnUtbGlzdCc6IHRydWUsICdwLXBhbmVsbWVudS1yb290LXN1Ym1lbnUnOiByb290fVwiIFtAc3VibWVudV09XCJleHBhbmRlZCA/IHt2YWx1ZTogJ3Zpc2libGUnLCBwYXJhbXM6IHt0cmFuc2l0aW9uUGFyYW1zOiB0cmFuc2l0aW9uT3B0aW9ucywgaGVpZ2h0OiAnKid9fSA6IHt2YWx1ZTogJ2hpZGRlbicsIHBhcmFtczoge3RyYW5zaXRpb25QYXJhbXM6IHRyYW5zaXRpb25PcHRpb25zLCBoZWlnaHQ6ICcwJ319XCIgcm9sZT1cInRyZWVcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtY2hpbGQgW25nRm9yT2ZdPVwiaXRlbS5pdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImNoaWxkLnNlcGFyYXRvclwiIGNsYXNzPVwicC1tZW51LXNlcGFyYXRvclwiIHJvbGU9XCJzZXBhcmF0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCIhY2hpbGQuc2VwYXJhdG9yXCIgY2xhc3M9XCJwLW1lbnVpdGVtXCIgW25nQ2xhc3NdPVwiY2hpbGQuc3R5bGVDbGFzc1wiIFtjbGFzcy5wLWhpZGRlbl09XCJjaGlsZC52aXNpYmxlID09PSBmYWxzZVwiIFtuZ1N0eWxlXT1cImNoaWxkLnN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiIWNoaWxkLnJvdXRlckxpbmtcIiBbYXR0ci5ocmVmXT1cImNoaWxkLnVybFwiIGNsYXNzPVwicC1tZW51aXRlbS1saW5rXCIgW2F0dHIudGFiaW5kZXhdPVwiIWl0ZW0uZXhwYW5kZWQgPyBudWxsIDogY2hpbGQuZGlzYWJsZWQgPyBudWxsIDogJzAnXCIgW2F0dHIuaWRdPVwiY2hpbGQuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWRpc2FibGVkJzpjaGlsZC5kaXNhYmxlZH1cIiByb2xlPVwidHJlZWl0ZW1cIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImNoaWxkLmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQsY2hpbGQpXCIgW2F0dHIudGFyZ2V0XT1cImNoaWxkLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cImNoaWxkLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtcGFuZWxtZW51LWljb24gcGkgcGktZndcIiBbbmdDbGFzc109XCJ7J3BpLWFuZ2xlLXJpZ2h0JzohY2hpbGQuZXhwYW5kZWQsJ3BpLWFuZ2xlLWRvd24nOmNoaWxkLmV4cGFuZGVkfVwiICpuZ0lmPVwiY2hpbGQuaXRlbXNcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0taWNvblwiIFtuZ0NsYXNzXT1cImNoaWxkLmljb25cIiAqbmdJZj1cImNoaWxkLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiY2hpbGQuZXNjYXBlICE9PSBmYWxzZTsgZWxzZSBodG1sTGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiY2hpbGQubGFiZWxcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImNoaWxkLnJvdXRlckxpbmtcIiBbcm91dGVyTGlua109XCJjaGlsZC5yb3V0ZXJMaW5rXCIgW3F1ZXJ5UGFyYW1zXT1cImNoaWxkLnF1ZXJ5UGFyYW1zXCIgW3JvdXRlckxpbmtBY3RpdmVdPVwiJ3AtbWVudWl0ZW0tbGluay1hY3RpdmUnXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cImNoaWxkLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zfHx7ZXhhY3Q6ZmFsc2V9XCIgY2xhc3M9XCJwLW1lbnVpdGVtLWxpbmtcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1kaXNhYmxlZCc6Y2hpbGQuZGlzYWJsZWR9XCIgW2F0dHIudGFiaW5kZXhdPVwiIWl0ZW0uZXhwYW5kZWQgPyBudWxsIDogY2hpbGQuZGlzYWJsZWQgPyBudWxsIDogJzAnXCIgW2F0dHIuaWRdPVwiY2hpbGQuaWRcIiByb2xlPVwidHJlZWl0ZW1cIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImNoaWxkLmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQsY2hpbGQpXCIgW2F0dHIudGFyZ2V0XT1cImNoaWxkLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cImNoaWxkLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmcmFnbWVudF09XCJjaGlsZC5mcmFnbWVudFwiIFtxdWVyeVBhcmFtc0hhbmRsaW5nXT1cImNoaWxkLnF1ZXJ5UGFyYW1zSGFuZGxpbmdcIiBbcHJlc2VydmVGcmFnbWVudF09XCJjaGlsZC5wcmVzZXJ2ZUZyYWdtZW50XCIgW3NraXBMb2NhdGlvbkNoYW5nZV09XCJjaGlsZC5za2lwTG9jYXRpb25DaGFuZ2VcIiBbcmVwbGFjZVVybF09XCJjaGlsZC5yZXBsYWNlVXJsXCIgW3N0YXRlXT1cImNoaWxkLnN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtcGFuZWxtZW51LWljb24gcGkgcGktZndcIiBbbmdDbGFzc109XCJ7J3BpLWFuZ2xlLXJpZ2h0JzohY2hpbGQuZXhwYW5kZWQsJ3BpLWFuZ2xlLWRvd24nOmNoaWxkLmV4cGFuZGVkfVwiICpuZ0lmPVwiY2hpbGQuaXRlbXNcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0taWNvblwiIFtuZ0NsYXNzXT1cImNoaWxkLmljb25cIiAqbmdJZj1cImNoaWxkLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiY2hpbGQuZXNjYXBlICE9PSBmYWxzZTsgZWxzZSBodG1sUm91dGVMYWJlbFwiPnt7Y2hpbGQubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaHRtbFJvdXRlTGFiZWw+PHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImNoaWxkLmxhYmVsXCI+PC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHAtcGFuZWxNZW51U3ViIFtpdGVtXT1cImNoaWxkXCIgW2V4cGFuZGVkXT1cImNoaWxkLmV4cGFuZGVkXCIgW3RyYW5zaXRpb25PcHRpb25zXT1cInRyYW5zaXRpb25PcHRpb25zXCIgKm5nSWY9XCJjaGlsZC5pdGVtc1wiPjwvcC1wYW5lbE1lbnVTdWI+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3N1Ym1lbnUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnKidcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPD0+IGhpZGRlbicsIFtzdHlsZSh7b3ZlcmZsb3c6ICdoaWRkZW4nfSksIGFuaW1hdGUoJ3t7dHJhbnNpdGlvblBhcmFtc319JyldKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIGFuaW1hdGUoMCkpXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsTWVudVN1YiBleHRlbmRzIEJhc2VQYW5lbE1lbnVJdGVtIHtcbiAgICBcbiAgICBASW5wdXQoKSBpdGVtOiBNZW51SXRlbTtcbiAgICBcbiAgICBASW5wdXQoKSBleHBhbmRlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByb290OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZWYpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXBhbmVsTWVudScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwiJ3AtcGFuZWxtZW51IHAtY29tcG9uZW50J1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtb2RlbDtsZXQgZj1maXJzdDtsZXQgbD1sYXN0O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBhbmVsbWVudS1wYW5lbFwiIFtuZ0NsYXNzXT1cInsncC1oaWRkZW4nOiBpdGVtLnZpc2libGUgPT09IGZhbHNlfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncC1jb21wb25lbnQgcC1wYW5lbG1lbnUtaGVhZGVyJzp0cnVlLCAncC1oaWdobGlnaHQnOml0ZW0uZXhwYW5kZWQsJ3AtZGlzYWJsZWQnOml0ZW0uZGlzYWJsZWR9XCIgW2NsYXNzXT1cIml0ZW0uc3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cIml0ZW0uc3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiIWl0ZW0ucm91dGVyTGlua1wiIFthdHRyLmhyZWZdPVwiaXRlbS51cmxcIiAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50LGl0ZW0pXCIgW2F0dHIudGFiaW5kZXhdPVwiaXRlbS5kaXNhYmxlZCA/IG51bGwgOiAnMCdcIiBbYXR0ci5pZF09XCJpdGVtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnRhcmdldF09XCJpdGVtLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cIml0ZW0udGl0bGVcIiBjbGFzcz1cInAtcGFuZWxtZW51LWhlYWRlci1saW5rXCIgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJpdGVtLmV4cGFuZGVkXCIgW2F0dHIuaWRdPVwiaXRlbS5pZCArICdfaGVhZGVyJ1wiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiaXRlbS5pZCArJ19jb250ZW50J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5pdGVtc1wiIGNsYXNzPVwicC1wYW5lbG1lbnUtaWNvbiBwaVwiIFtuZ0NsYXNzXT1cInsncGktY2hldnJvbi1yaWdodCc6IWl0ZW0uZXhwYW5kZWQsJ3BpLWNoZXZyb24tZG93bic6aXRlbS5leHBhbmRlZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiBbbmdDbGFzc109XCJpdGVtLmljb25cIiAqbmdJZj1cIml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiaXRlbS5lc2NhcGUgIT09IGZhbHNlOyBlbHNlIGh0bWxMYWJlbFwiPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaHRtbExhYmVsPjxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS10ZXh0XCIgW2lubmVySFRNTF09XCJpdGVtLmxhYmVsXCI+PC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIml0ZW0ucm91dGVyTGlua1wiIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVyTGlua1wiIFtxdWVyeVBhcmFtc109XCJpdGVtLnF1ZXJ5UGFyYW1zXCIgW3JvdXRlckxpbmtBY3RpdmVdPVwiJ3AtbWVudWl0ZW0tbGluay1hY3RpdmUnXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIml0ZW0ucm91dGVyTGlua0FjdGl2ZU9wdGlvbnN8fHtleGFjdDpmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudCxpdGVtKVwiIFthdHRyLnRhcmdldF09XCJpdGVtLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cIml0ZW0udGl0bGVcIiBjbGFzcz1cInAtcGFuZWxtZW51LWhlYWRlci1saW5rXCIgW2F0dHIuaWRdPVwiaXRlbS5pZFwiIFthdHRyLnRhYmluZGV4XT1cIml0ZW0uZGlzYWJsZWQgPyBudWxsIDogJzAnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmcmFnbWVudF09XCJpdGVtLmZyYWdtZW50XCIgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPVwiaXRlbS5xdWVyeVBhcmFtc0hhbmRsaW5nXCIgW3ByZXNlcnZlRnJhZ21lbnRdPVwiaXRlbS5wcmVzZXJ2ZUZyYWdtZW50XCIgW3NraXBMb2NhdGlvbkNoYW5nZV09XCJpdGVtLnNraXBMb2NhdGlvbkNoYW5nZVwiIFtyZXBsYWNlVXJsXT1cIml0ZW0ucmVwbGFjZVVybFwiIFtzdGF0ZV09XCJpdGVtLnN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpdGVtLml0ZW1zXCIgY2xhc3M9XCJwLXBhbmVsbWVudS1pY29uIHBpXCIgW25nQ2xhc3NdPVwieydwaS1jaGV2cm9uLXJpZ2h0JzohaXRlbS5leHBhbmRlZCwncGktY2hldnJvbi1kb3duJzppdGVtLmV4cGFuZGVkfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0taWNvblwiIFtuZ0NsYXNzXT1cIml0ZW0uaWNvblwiICpuZ0lmPVwiaXRlbS5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS10ZXh0XCIgKm5nSWY9XCJpdGVtLmVzY2FwZSAhPT0gZmFsc2U7IGVsc2UgaHRtbFJvdXRlTGFiZWxcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxSb3V0ZUxhYmVsPjxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS10ZXh0XCIgW2lubmVySFRNTF09XCJpdGVtLmxhYmVsXCI+PC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5pdGVtc1wiIGNsYXNzPVwicC10b2dnbGVhYmxlLWNvbnRlbnRcIiBbQHJvb3RJdGVtXT1cIml0ZW0uZXhwYW5kZWQgPyB7dmFsdWU6ICd2aXNpYmxlJywgcGFyYW1zOiB7dHJhbnNpdGlvblBhcmFtczogYW5pbWF0aW5nID8gdHJhbnNpdGlvbk9wdGlvbnMgOiAnMG1zJywgaGVpZ2h0OiAnKid9fSA6IHt2YWx1ZTogJ2hpZGRlbicsIHBhcmFtczoge3RyYW5zaXRpb25QYXJhbXM6IHRyYW5zaXRpb25PcHRpb25zLCBoZWlnaHQ6ICcwJ319XCIgIChAcm9vdEl0ZW0uZG9uZSk9XCJvblRvZ2dsZURvbmUoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcGFuZWxtZW51LWNvbnRlbnRcIiByb2xlPVwicmVnaW9uXCIgW2F0dHIuaWRdPVwiaXRlbS5pZCArJ19jb250ZW50JyBcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiaXRlbS5pZCArJ19oZWFkZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtcGFuZWxNZW51U3ViIFtpdGVtXT1cIml0ZW1cIiBbZXhwYW5kZWRdPVwidHJ1ZVwiIFt0cmFuc2l0aW9uT3B0aW9uc109XCJ0cmFuc2l0aW9uT3B0aW9uc1wiIFtyb290XT1cInRydWVcIj48L3AtcGFuZWxNZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdyb290SXRlbScsIFtcbiAgICAgICAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcqJ1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA8PT4gaGlkZGVuJywgW3N0eWxlKHtvdmVyZmxvdzogJ2hpZGRlbid9KSwgYW5pbWF0ZSgne3t0cmFuc2l0aW9uUGFyYW1zfX0nKV0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgYW5pbWF0ZSgwKSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9wYW5lbG1lbnUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxNZW51IGV4dGVuZHMgQmFzZVBhbmVsTWVudUl0ZW0ge1xuICAgIFxuICAgIEBJbnB1dCgpIG1vZGVsOiBNZW51SXRlbVtdO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnNDAwbXMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpJztcbiAgICBcbiAgICBwdWJsaWMgYW5pbWF0aW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZWYpO1xuICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICBjb2xsYXBzZUFsbCgpIHtcbiAgICBcdGZvcihsZXQgaXRlbSBvZiB0aGlzLm1vZGVsKSB7XG4gICAgXHRcdGlmIChpdGVtLmV4cGFuZGVkKSB7XG4gICAgXHRcdFx0aXRlbS5leHBhbmRlZCA9IGZhbHNlO1xuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQsIGl0ZW0pIHtcbiAgICBcdGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgZm9yKGxldCBtb2RlbEl0ZW0gb2YgdGhpcy5tb2RlbCkge1xuICAgICAgICBcdFx0aWYgKGl0ZW0gIT09IG1vZGVsSXRlbSAmJiBtb2RlbEl0ZW0uZXhwYW5kZWQpIHtcbiAgICAgICAgXHRcdFx0bW9kZWxJdGVtLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fVxuICAgIFx0fVxuICAgICAgICBcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICBzdXBlci5oYW5kbGVDbGljayhldmVudCwgaXRlbSk7XG4gICAgfVxuICAgIFxuICAgIG9uVG9nZ2xlRG9uZSgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFJvdXRlck1vZHVsZV0sXG4gICAgZXhwb3J0czogW1BhbmVsTWVudSxSb3V0ZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1BhbmVsTWVudSxQYW5lbE1lbnVTdWJdXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsTWVudU1vZHVsZSB7IH1cbiJdfQ==