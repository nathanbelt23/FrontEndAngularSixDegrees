import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChildren, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { UniqueComponentId } from 'primeng/utils';
import { DomHandler } from 'primeng/dom';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

const _c0 = ["mask"];
const _c1 = function (a1) { return { "p-galleria-mask p-component-overlay": true, "p-galleria-visible": a1 }; };
const _c2 = function (a0) { return { "zIndex": a0 }; };
function Galleria_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3, 4);
    ɵngcc0.ɵɵelementStart(2, "p-galleriaContent", 5);
    ɵngcc0.ɵɵlistener("maskHide", function Galleria_div_0_div_1_Template_p_galleriaContent_maskHide_2_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.onMaskHide(); })("activeItemChange", function Galleria_div_0_div_1_Template_p_galleriaContent_activeItemChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onActiveItemChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r3.maskClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c1, ctx_r3.visible))("ngStyle", ɵngcc0.ɵɵpureFunction1(9, _c2, ctx_r3.zIndex));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("ngStyle", ctx_r3.containerStyle);
} }
function Galleria_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, Galleria_div_0_div_1_Template, 3, 11, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
} }
function Galleria_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-galleriaContent", 6);
    ɵngcc0.ɵɵlistener("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onActiveItemChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex);
} }
function GalleriaContent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵlistener("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.maskHide.emit(); });
    ɵngcc0.ɵɵelement(1, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} }
function GalleriaContent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("templates", ctx_r2.galleria.templates);
} }
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-galleriaThumbnails", 12);
    ɵngcc0.ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onActiveIndexChange($event); })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.stopSlideShow(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.galleria.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
} }
function GalleriaContent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("templates", ctx_r4.galleria.templates);
} }
const _c3 = function (a1, a2, a3) { return { "p-galleria p-component": true, "p-galleria-fullscreen": a1, "p-galleria-indicator-onitem": a2, "p-galleria-item-nav-onhover": a3 }; };
const _c4 = function () { return {}; };
function GalleriaContent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);
    ɵngcc0.ɵɵtemplate(2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "p-galleriaItem", 5);
    ɵngcc0.ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onActiveIndexChange($event); })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.startSlideShow(); })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.stopSlideShow(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.galleriaClass());
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(20, _c3, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : ɵngcc0.ɵɵpureFunction0(24, _c4));
    ɵngcc0.ɵɵattribute("id", ctx_r0.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.fullScreen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.showThumbnails);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
} }
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
} }
const _c5 = function (a1) { return { "p-galleria-item-prev p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.navBackward($event); });
    ɵngcc0.ɵɵelement(1, "span", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c5, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
} }
const _c6 = function (a1) { return { "p-galleria-item-next p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.navForward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c6, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
} }
function GalleriaItem_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
} }
function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "button", 16);
} }
const _c7 = function (a1) { return { "p-galleria-indicator": true, "p-highlight": a1 }; };
function GalleriaItem_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 13);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const index_r10 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onIndicatorClick(index_r10); })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const index_r10 = ctx.index; const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onIndicatorMouseEnter(index_r10); })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const index_r10 = ctx.index; const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onIndicatorKeyDown(index_r10); });
    ɵngcc0.ɵɵtemplate(1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);
    ɵngcc0.ɵɵelement(2, "p-galleriaItemSlot", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r10 = ctx.index;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c7, ctx_r8.isIndicatorItemActive(index_r10)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.indicatorFacet);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("index", index_r10)("templates", ctx_r8.templates);
} }
function GalleriaItem_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 11);
    ɵngcc0.ɵɵtemplate(1, GalleriaItem_ul_6_li_1_Template, 3, 6, "li", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.value);
} }
const _c8 = ["itemsContainer"];
const _c9 = function (a1) { return { "p-galleria-thumbnail-prev p-link": true, "p-disabled": a1 }; };
const _c10 = function (a1, a2) { return { "p-galleria-thumbnail-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
function GalleriaThumbnails_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.navBackward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c9, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c10, !ctx_r0.isVertical, ctx_r0.isVertical));
} }
const _c11 = function (a1, a2, a3, a4) { return { "p-galleria-thumbnail-item": true, "p-galleria-thumbnail-item-current": a1, "p-galleria-thumbnail-item-active": a2, "p-galleria-thumbnail-item-start": a3, "p-galleria-thumbnail-item-end": a4 }; };
function GalleriaThumbnails_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const index_r7 = ctx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onItemClick(index_r7); })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const index_r7 = ctx.index; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemClick(index_r7); });
    ɵngcc0.ɵɵelement(2, "p-galleriaItemSlot", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c11, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r2.getTabIndex(index_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", item_r6)("templates", ctx_r2.templates);
} }
const _c12 = function (a1) { return { "p-galleria-thumbnail-next p-link": true, "p-disabled": a1 }; };
const _c13 = function (a1, a2) { return { "p-galleria-thumbnail-next-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
function GalleriaThumbnails_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.navForward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c13, !ctx_r3.isVertical, ctx_r3.isVertical));
} }
const _c14 = function (a0) { return { "height": a0 }; };
export class Galleria {
    constructor(element, cd) {
        this.element = element;
        this.cd = cd;
        this.fullScreen = false;
        this.numVisible = 3;
        this.showItemNavigators = false;
        this.showThumbnailNavigators = true;
        this.showItemNavigatorsOnHover = false;
        this.changeItemOnIndicatorHover = false;
        this.circular = false;
        this.autoPlay = false;
        this.transitionInterval = 4000;
        this.showThumbnails = true;
        this.thumbnailsPosition = "bottom";
        this.verticalThumbnailViewPortHeight = "300px";
        this.showIndicators = false;
        this.showIndicatorsOnItem = false;
        this.indicatorsPosition = "bottom";
        this.baseZIndex = 0;
        this.activeIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this._visible = false;
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    get visible() {
        return this._visible;
    }
    ;
    set visible(visible) {
        this._visible = visible;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerFacet = item.template;
                    break;
                case 'footer':
                    this.footerFacet = item.template;
                    break;
                case 'indicator':
                    this.indicatorFacet = item.template;
                    break;
                case 'caption':
                    this.captionFacet = item.template;
                    break;
            }
        });
    }
    ngOnChanges(simpleChanges) {
        if (this.fullScreen && simpleChanges.visible) {
            if (simpleChanges.visible.currentValue) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');
                this.zIndex = String(this.baseZIndex + ++DomHandler.zindex);
            }
            else {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        }
    }
    onMaskHide() {
        this.visible = false;
        this.visibleChange.emit(false);
    }
    onActiveItemChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeIndexChange.emit(index);
        }
    }
    ngOnDestroy() {
        if (this.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }
}
Galleria.ɵfac = function Galleria_Factory(t) { return new (t || Galleria)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Galleria.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Galleria, selectors: [["p-galleria"]], contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Galleria_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mask = _t.first);
    } }, inputs: { fullScreen: "fullScreen", numVisible: "numVisible", showItemNavigators: "showItemNavigators", showThumbnailNavigators: "showThumbnailNavigators", showItemNavigatorsOnHover: "showItemNavigatorsOnHover", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", circular: "circular", autoPlay: "autoPlay", transitionInterval: "transitionInterval", showThumbnails: "showThumbnails", thumbnailsPosition: "thumbnailsPosition", verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight", showIndicators: "showIndicators", showIndicatorsOnItem: "showIndicatorsOnItem", indicatorsPosition: "indicatorsPosition", baseZIndex: "baseZIndex", activeIndex: "activeIndex", visible: "visible", id: "id", value: "value", responsiveOptions: "responsiveOptions", maskClass: "maskClass", containerClass: "containerClass", containerStyle: "containerStyle" }, outputs: { activeIndexChange: "activeIndexChange", visibleChange: "visibleChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["mask", ""], [3, "value", "activeIndex", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "activeItemChange"]], template: function Galleria_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Galleria_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Galleria_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, GalleriaContent]; }, styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
Galleria.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Galleria.propDecorators = {
    activeIndex: [{ type: Input }],
    fullScreen: [{ type: Input }],
    id: [{ type: Input }],
    value: [{ type: Input }],
    numVisible: [{ type: Input }],
    responsiveOptions: [{ type: Input }],
    showItemNavigators: [{ type: Input }],
    showThumbnailNavigators: [{ type: Input }],
    showItemNavigatorsOnHover: [{ type: Input }],
    changeItemOnIndicatorHover: [{ type: Input }],
    circular: [{ type: Input }],
    autoPlay: [{ type: Input }],
    transitionInterval: [{ type: Input }],
    showThumbnails: [{ type: Input }],
    thumbnailsPosition: [{ type: Input }],
    verticalThumbnailViewPortHeight: [{ type: Input }],
    showIndicators: [{ type: Input }],
    showIndicatorsOnItem: [{ type: Input }],
    indicatorsPosition: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    maskClass: [{ type: Input }],
    containerClass: [{ type: Input }],
    containerStyle: [{ type: Input }],
    mask: [{ type: ViewChild, args: ['mask', { static: false },] }],
    visible: [{ type: Input }],
    activeIndexChange: [{ type: Output }],
    visibleChange: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Galleria, [{
        type: Component,
        args: [{
                selector: 'p-galleria',
                template: `
        <div *ngIf="fullScreen;else windowed">
            <div *ngIf="visible" #mask [ngClass]="{'p-galleria-mask p-component-overlay':true, 'p-galleria-visible': this.visible}" [class]="maskClass" [ngStyle]="{'zIndex':zIndex}">
                <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (maskHide)="onMaskHide()" (activeItemChange)="onActiveItemChange($event)" [ngStyle]="containerStyle"></p-galleriaContent>
            </div>
        </div>

        <ng-template #windowed>
            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>
        </ng-template>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { fullScreen: [{
            type: Input
        }], numVisible: [{
            type: Input
        }], showItemNavigators: [{
            type: Input
        }], showThumbnailNavigators: [{
            type: Input
        }], showItemNavigatorsOnHover: [{
            type: Input
        }], changeItemOnIndicatorHover: [{
            type: Input
        }], circular: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], transitionInterval: [{
            type: Input
        }], showThumbnails: [{
            type: Input
        }], thumbnailsPosition: [{
            type: Input
        }], verticalThumbnailViewPortHeight: [{
            type: Input
        }], showIndicators: [{
            type: Input
        }], showIndicatorsOnItem: [{
            type: Input
        }], indicatorsPosition: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], activeIndexChange: [{
            type: Output
        }], visibleChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], visible: [{
            type: Input
        }], id: [{
            type: Input
        }], value: [{
            type: Input
        }], responsiveOptions: [{
            type: Input
        }], maskClass: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], containerStyle: [{
            type: Input
        }], mask: [{
            type: ViewChild,
            args: ['mask', { static: false }]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class GalleriaContent {
    constructor(galleria, cd) {
        this.galleria = galleria;
        this.cd = cd;
        this.value = [];
        this.maskHide = new EventEmitter();
        this.activeItemChange = new EventEmitter();
        this.id = this.galleria.id || UniqueComponentId();
        this.slideShowActicve = false;
        this._activeIndex = 0;
        this.slideShowActive = true;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    galleriaClass() {
        const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
        const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
        return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
    }
    startSlideShow() {
        this.interval = setInterval(() => {
            let activeIndex = (this.galleria.circular && (this.value.length - 1) === this.activeIndex) ? 0 : (this.activeIndex + 1);
            this.onActiveIndexChange(activeIndex);
            this.activeIndex = activeIndex;
        }, this.galleria.transitionInterval);
        this.slideShowActive = true;
    }
    stopSlideShow() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.slideShowActive = false;
    }
    getPositionClass(preClassName, position) {
        const positions = ['top', 'left', 'bottom', 'right'];
        const pos = positions.find(item => item === position);
        return pos ? `${preClassName}-${pos}` : '';
    }
    isVertical() {
        return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
    }
    onActiveIndexChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeItemChange.emit(this.activeIndex);
        }
    }
}
GalleriaContent.ɵfac = function GalleriaContent_Factory(t) { return new (t || GalleriaContent)(ɵngcc0.ɵɵdirectiveInject(Galleria), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
GalleriaContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaContent, selectors: [["p-galleriaContent"]], inputs: { value: "value", activeIndex: "activeIndex" }, outputs: { maskHide: "maskHide", activeItemChange: "activeItemChange" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]], template: function GalleriaContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, GalleriaItem, ɵngcc2.Ripple, GalleriaItemSlot, GalleriaThumbnails]; }, encapsulation: 2, changeDetection: 0 });
GalleriaContent.ctorParameters = () => [
    { type: Galleria },
    { type: ChangeDetectorRef }
];
GalleriaContent.propDecorators = {
    activeIndex: [{ type: Input }],
    value: [{ type: Input }],
    maskHide: [{ type: Output }],
    activeItemChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaContent, [{
        type: Component,
        args: [{
                selector: 'p-galleriaContent',
                template: `
        <div [attr.id]="id" *ngIf="value && value.length > 0" [ngClass]="{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen, 
            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}"
            [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}" [class]="galleriaClass()">
            <button *ngIf="galleria.fullScreen" type="button" class="p-galleria-close p-link" (click)="maskHide.emit()" pRipple>
                <span class="p-galleria-close-icon pi pi-times"></span>
            </button>
            <div *ngIf="galleria.templates && galleria.headerFacet" class="p-galleria-header">
                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
            <div class="p-galleria-content">
                <p-galleriaItem [value]="value" [activeIndex]="activeIndex" [circular]="galleria.circular" [templates]="galleria.templates" (onActiveIndexChange)="onActiveIndexChange($event)" 
                    [showIndicators]="galleria.showIndicators" [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover" [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet" [showItemNavigators]="galleria.showItemNavigators" [autoPlay]="galleria.autoPlay" [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()" (stopSlideShow)="stopSlideShow()"></p-galleriaItem>

                <p-galleriaThumbnails *ngIf="galleria.showThumbnails" [containerId]="id" [value]="value" (onActiveIndexChange)="onActiveIndexChange($event)" [activeIndex]="activeIndex" [templates]="galleria.templates"
                    [numVisible]="galleria.numVisible" [responsiveOptions]="galleria.responsiveOptions" [circular]="galleria.circular"
                    [isVertical]="isVertical()" [contentHeight]="galleria.verticalThumbnailViewPortHeight" [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive" (stopSlideShow)="stopSlideShow()"></p-galleriaThumbnails>
            </div>
            <div *ngIf="galleria.templates && galleria.footerFacet" class="p-galleria-footer">
                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: Galleria }, { type: ɵngcc0.ChangeDetectorRef }]; }, { value: [{
            type: Input
        }], maskHide: [{
            type: Output
        }], activeItemChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }] }); })();
export class GalleriaItemSlot {
    get item() {
        return this._item;
    }
    ;
    set item(item) {
        this._item = item;
        if (this.templates) {
            this.templates.forEach((item) => {
                if (item.getType() === this.type) {
                    switch (this.type) {
                        case 'item':
                        case 'caption':
                        case 'thumbnail':
                            this.context = { $implicit: this.item };
                            this.contentTemplate = item.template;
                            break;
                    }
                }
            });
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            if (item.getType() === this.type) {
                switch (this.type) {
                    case 'item':
                    case 'caption':
                    case 'thumbnail':
                        this.context = { $implicit: this.item };
                        this.contentTemplate = item.template;
                        break;
                    case 'indicator':
                        this.context = { $implicit: this.index };
                        this.contentTemplate = item.template;
                        break;
                    default:
                        this.context = {};
                        this.contentTemplate = item.template;
                        break;
                }
            }
        });
    }
}
GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) { return new (t || GalleriaItemSlot)(); };
GalleriaItemSlot.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaItemSlot, selectors: [["p-galleriaItemSlot"]], inputs: { item: "item", templates: "templates", index: "index", type: "type" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GalleriaItemSlot_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
GalleriaItemSlot.propDecorators = {
    templates: [{ type: Input }],
    index: [{ type: Input }],
    item: [{ type: Input }],
    type: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaItemSlot, [{
        type: Component,
        args: [{
                selector: 'p-galleriaItemSlot',
                template: `
        <ng-container *ngIf="contentTemplate">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { item: [{
            type: Input
        }], templates: [{
            type: Input
        }], index: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
export class GalleriaItem {
    constructor() {
        this.circular = false;
        this.showItemNavigators = false;
        this.showIndicators = true;
        this.slideShowActive = true;
        this.changeItemOnIndicatorHover = true;
        this.autoPlay = false;
        this.startSlideShow = new EventEmitter();
        this.stopSlideShow = new EventEmitter();
        this.onActiveIndexChange = new EventEmitter();
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
        this.activeItem = this.value[this._activeIndex];
    }
    ngOnInit() {
        if (this.autoPlay) {
            this.startSlideShow.emit();
        }
    }
    next() {
        let nextItemIndex = this.activeIndex + 1;
        let activeIndex = this.circular && this.value.length - 1 === this.activeIndex
            ? 0
            : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    prev() {
        let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
        let activeIndex = this.circular && this.activeIndex === 0
            ? this.value.length - 1
            : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    navForward(e) {
        this.stopTheSlideShow();
        this.next();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        this.prev();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    onIndicatorClick(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    onIndicatorMouseEnter(index) {
        if (this.changeItemOnIndicatorHover) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
        }
    }
    onIndicatorKeyDown(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    isNavForwardDisabled() {
        return !this.circular && this.activeIndex === (this.value.length - 1);
    }
    isNavBackwardDisabled() {
        return !this.circular && this.activeIndex === 0;
    }
    isIndicatorItemActive(index) {
        return this.activeIndex === index;
    }
}
GalleriaItem.ɵfac = function GalleriaItem_Factory(t) { return new (t || GalleriaItem)(); };
GalleriaItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaItem, selectors: [["p-galleriaItem"]], inputs: { circular: "circular", showItemNavigators: "showItemNavigators", showIndicators: "showIndicators", slideShowActive: "slideShowActive", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", autoPlay: "autoPlay", activeIndex: "activeIndex", value: "value", templates: "templates", indicatorFacet: "indicatorFacet", captionFacet: "captionFacet" }, outputs: { startSlideShow: "startSlideShow", stopSlideShow: "stopSlideShow", onActiveIndexChange: "onActiveIndexChange" }, decls: 7, vars: 6, consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-galleria-item-prev-icon", "pi", "pi-chevron-left"], [1, "p-galleria-item-next-icon", "pi", "pi-chevron-right"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]], template: function GalleriaItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, GalleriaItem_button_2_Template, 2, 4, "button", 2);
        ɵngcc0.ɵɵelement(3, "p-galleriaItemSlot", 3);
        ɵngcc0.ɵɵtemplate(4, GalleriaItem_button_4_Template, 2, 4, "button", 2);
        ɵngcc0.ɵɵtemplate(5, GalleriaItem_div_5_Template, 2, 2, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, GalleriaItem_ul_6_Template, 2, 1, "ul", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showItemNavigators);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("item", ctx.activeItem)("templates", ctx.templates);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showItemNavigators);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.captionFacet);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showIndicators);
    } }, directives: [ɵngcc1.NgIf, GalleriaItemSlot, ɵngcc2.Ripple, ɵngcc1.NgClass, ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
GalleriaItem.propDecorators = {
    circular: [{ type: Input }],
    value: [{ type: Input }],
    showItemNavigators: [{ type: Input }],
    showIndicators: [{ type: Input }],
    slideShowActive: [{ type: Input }],
    changeItemOnIndicatorHover: [{ type: Input }],
    autoPlay: [{ type: Input }],
    templates: [{ type: Input }],
    indicatorFacet: [{ type: Input }],
    captionFacet: [{ type: Input }],
    startSlideShow: [{ type: Output }],
    stopSlideShow: [{ type: Output }],
    onActiveIndexChange: [{ type: Output }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaItem, [{
        type: Component,
        args: [{
                selector: 'p-galleriaItem',
                template: `
        <div class="p-galleria-item-wrapper">
            <div class="p-galleria-item-container">
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span class="p-galleria-item-prev-icon pi pi-chevron-left"></span>
                </button>
                <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" class="p-galleria-item"></p-galleriaItemSlot>
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)"  [disabled]="isNavForwardDisabled()" pRipple>
                    <span class="p-galleria-item-next-icon pi pi-chevron-right"></span>
                </button>
                <div class="p-galleria-caption" *ngIf="captionFacet">
                    <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>
                </div>
            </div>
            <ul *ngIf="showIndicators" class="p-galleria-indicators p-reset">
                <li *ngFor="let item of value; let index = index;" tabindex="0"
                    (click)="onIndicatorClick(index)" (mouseenter)="onIndicatorMouseEnter(index)" (keydown.enter)="onIndicatorKeyDown(index)"
                    [ngClass]="{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}">
                    <button type="button" tabIndex="-1" class="p-link" *ngIf="!indicatorFacet">
                    </button>
                    <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>
                </li>
            </ul>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { circular: [{
            type: Input
        }], showItemNavigators: [{
            type: Input
        }], showIndicators: [{
            type: Input
        }], slideShowActive: [{
            type: Input
        }], changeItemOnIndicatorHover: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], startSlideShow: [{
            type: Output
        }], stopSlideShow: [{
            type: Output
        }], onActiveIndexChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], value: [{
            type: Input
        }], templates: [{
            type: Input
        }], indicatorFacet: [{
            type: Input
        }], captionFacet: [{
            type: Input
        }] }); })();
export class GalleriaThumbnails {
    constructor(cd) {
        this.cd = cd;
        this.isVertical = false;
        this.slideShowActive = false;
        this.circular = false;
        this.contentHeight = "300px";
        this.showThumbnailNavigators = true;
        this.onActiveIndexChange = new EventEmitter();
        this.stopSlideShow = new EventEmitter();
        this.startPos = null;
        this.thumbnailsStyle = null;
        this.sortedResponsiveOptions = null;
        this.totalShiftedItems = 0;
        this.page = 0;
        this._numVisible = 0;
        this.d_numVisible = 0;
        this._oldNumVisible = 0;
        this._activeIndex = 0;
        this._oldactiveIndex = 0;
    }
    get numVisible() {
        return this._numVisible;
    }
    ;
    set numVisible(numVisible) {
        this._numVisible = numVisible;
        this._oldNumVisible = this.d_numVisible;
        this.d_numVisible = numVisible;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._oldactiveIndex = this._activeIndex;
        this._activeIndex = activeIndex;
    }
    ngOnInit() {
        this.createStyle();
        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
    }
    ngAfterContentChecked() {
        let totalShiftedItems = this.totalShiftedItems;
        if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
            if (this._activeIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
            }
            else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex() + 1;
            }
            else {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex();
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
            if (this.itemsContainer && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            }
            if (this._oldactiveIndex !== this._activeIndex) {
                DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
            }
            this._oldactiveIndex = this._activeIndex;
            this._oldNumVisible = this.d_numVisible;
        }
    }
    ngAfterViewInit() {
        this.calculatePosition();
    }
    createStyle() {
        if (!this.thumbnailsStyle) {
            this.thumbnailsStyle = document.createElement('style');
            this.thumbnailsStyle.type = 'text/css';
            document.body.appendChild(this.thumbnailsStyle);
        }
        let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${(100 / this.d_numVisible)}%
            }
        `;
        if (this.responsiveOptions) {
            this.sortedResponsiveOptions = [...this.responsiveOptions];
            this.sortedResponsiveOptions.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return -1 * result;
            });
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${(100 / res.numVisible)}%
                        }
                    }
                `;
            }
        }
        this.thumbnailsStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
        if (this.itemsContainer && this.sortedResponsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this._numVisible
            };
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }
            if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                this.d_numVisible = matchedResponsiveData.numVisible;
                this.cd.markForCheck();
            }
        }
    }
    getTabIndex(index) {
        return this.isItemActive(index) ? 0 : null;
    }
    navForward(e) {
        this.stopTheSlideShow();
        let nextItemIndex = this._activeIndex + 1;
        if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.circular)) {
            this.step(-1);
        }
        let activeIndex = this.circular && (this.value.length - 1) === this._activeIndex ? 0 : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
        let diff = prevItemIndex + this.totalShiftedItems;
        if ((this.d_numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) !== 0 || this.circular)) {
            this.step(1);
        }
        let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onItemClick(index) {
        this.stopTheSlideShow();
        let selectedItemIndex = index;
        if (selectedItemIndex !== this._activeIndex) {
            const diff = selectedItemIndex + this.totalShiftedItems;
            let dir = 0;
            if (selectedItemIndex < this._activeIndex) {
                dir = (this.d_numVisible - diff - 1) - this.getMedianItemIndex();
                if (dir > 0 && (-1 * this.totalShiftedItems) !== 0) {
                    this.step(dir);
                }
            }
            else {
                dir = this.getMedianItemIndex() - diff;
                if (dir < 0 && (-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1) {
                    this.step(dir);
                }
            }
            this.activeIndex = selectedItemIndex;
            this.onActiveIndexChange.emit(this.activeIndex);
        }
    }
    step(dir) {
        let totalShiftedItems = this.totalShiftedItems + dir;
        if (dir < 0 && (-1 * totalShiftedItems) + this.d_numVisible > (this.value.length - 1)) {
            totalShiftedItems = this.d_numVisible - this.value.length;
        }
        else if (dir > 0 && totalShiftedItems > 0) {
            totalShiftedItems = 0;
        }
        if (this.circular) {
            if (dir < 0 && this.value.length - 1 === this._activeIndex) {
                totalShiftedItems = 0;
            }
            else if (dir > 0 && this._activeIndex === 0) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
        }
        if (this.itemsContainer) {
            DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    changePageOnTouch(e, diff) {
        if (diff < 0) { // left
            this.navForward(e);
        }
        else { // right
            this.navBackward(e);
        }
    }
    getTotalPageNumber() {
        return this.value.length > this.d_numVisible ? (this.value.length - this.d_numVisible) + 1 : 0;
    }
    getMedianItemIndex() {
        let index = Math.floor(this.d_numVisible / 2);
        return (this.d_numVisible % 2) ? index : index - 1;
    }
    onTransitionEnd() {
        if (this.itemsContainer && this.itemsContainer.nativeElement) {
            DomHandler.addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transition = '';
        }
    }
    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        if (this.isVertical) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }
    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }
    isNavBackwardDisabled() {
        return (!this.circular && this._activeIndex === 0) || (this.value.length <= this.d_numVisible);
    }
    isNavForwardDisabled() {
        return (!this.circular && this._activeIndex === (this.value.length - 1)) || (this.value.length <= this.d_numVisible);
    }
    firstItemAciveIndex() {
        return this.totalShiftedItems * -1;
    }
    lastItemActiveIndex() {
        return this.firstItemAciveIndex() + this.d_numVisible - 1;
    }
    isItemActive(index) {
        return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = () => {
                this.calculatePosition();
            };
            window.addEventListener('resize', this.documentResizeListener);
        }
    }
    unbindDocumentListeners() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    ngOnDestroy() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }
        if (this.thumbnailsStyle) {
            this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
        }
    }
}
GalleriaThumbnails.ɵfac = function GalleriaThumbnails_Factory(t) { return new (t || GalleriaThumbnails)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
GalleriaThumbnails.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaThumbnails, selectors: [["p-galleriaThumbnails"]], viewQuery: function GalleriaThumbnails_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemsContainer = _t.first);
    } }, inputs: { isVertical: "isVertical", slideShowActive: "slideShowActive", circular: "circular", contentHeight: "contentHeight", showThumbnailNavigators: "showThumbnailNavigators", numVisible: "numVisible", activeIndex: "activeIndex", containerId: "containerId", value: "value", responsiveOptions: "responsiveOptions", templates: "templates" }, outputs: { onActiveIndexChange: "onActiveIndexChange", stopSlideShow: "stopSlideShow" }, decls: 8, vars: 6, consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove", "touchend"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"]], template: function GalleriaThumbnails_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, GalleriaThumbnails_button_2_Template, 2, 8, "button", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
        ɵngcc0.ɵɵlistener("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() { return ctx.onTransitionEnd(); })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) { return ctx.onTouchStart($event); })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) { return ctx.onTouchMove($event); })("touchend", function GalleriaThumbnails_Template_div_touchend_4_listener($event) { return ctx.onTouchEnd($event); });
        ɵngcc0.ɵɵtemplate(6, GalleriaThumbnails_div_6_Template, 3, 9, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, GalleriaThumbnails_button_7_Template, 2, 8, "button", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c14, ctx.isVertical ? ctx.contentHeight : ""));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc2.Ripple, ɵngcc1.NgClass, GalleriaItemSlot], encapsulation: 2, changeDetection: 0 });
GalleriaThumbnails.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
GalleriaThumbnails.propDecorators = {
    containerId: [{ type: Input }],
    value: [{ type: Input }],
    isVertical: [{ type: Input }],
    slideShowActive: [{ type: Input }],
    circular: [{ type: Input }],
    responsiveOptions: [{ type: Input }],
    contentHeight: [{ type: Input }],
    showThumbnailNavigators: [{ type: Input }],
    templates: [{ type: Input }],
    onActiveIndexChange: [{ type: Output }],
    stopSlideShow: [{ type: Output }],
    itemsContainer: [{ type: ViewChild, args: ['itemsContainer',] }],
    numVisible: [{ type: Input }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaThumbnails, [{
        type: Component,
        args: [{
                selector: 'p-galleriaThumbnails',
                template: `
        <div class="p-galleria-thumbnail-wrapper">
            <div class="p-galleria-thumbnail-container">
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}"></span>
                </button>
                <div class="p-galleria-thumbnail-items-container" [ngStyle]="{'height': isVertical ? contentHeight : ''}">
                    <div #itemsContainer class="p-galleria-thumbnail-items" (transitionend)="onTransitionEnd()"
                        (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)">
                        <div *ngFor="let item of value; let index = index;" [ngClass]="{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),
                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }">
                            <div class="p-galleria-thumbnail-item-content" [attr.tabindex]="getTabIndex(index)" (click)="onItemClick(index)" (keydown.enter)="onItemClick(index)">
                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>
                            </div>
                        </div>
                    </div>
                </div>
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)" [disabled]="isNavForwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}"></span>
                </button>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { isVertical: [{
            type: Input
        }], slideShowActive: [{
            type: Input
        }], circular: [{
            type: Input
        }], contentHeight: [{
            type: Input
        }], showThumbnailNavigators: [{
            type: Input
        }], onActiveIndexChange: [{
            type: Output
        }], stopSlideShow: [{
            type: Output
        }], numVisible: [{
            type: Input
        }], activeIndex: [{
            type: Input
        }], containerId: [{
            type: Input
        }], value: [{
            type: Input
        }], responsiveOptions: [{
            type: Input
        }], templates: [{
            type: Input
        }], itemsContainer: [{
            type: ViewChild,
            args: ['itemsContainer']
        }] }); })();
export class GalleriaModule {
}
GalleriaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GalleriaModule });
GalleriaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GalleriaModule_Factory(t) { return new (t || GalleriaModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], CommonModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GalleriaModule, { declarations: function () { return [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule],
                declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyaWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJpYS9nYWxsZXJpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQVcsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBaUYsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3hSLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQjlDLE1BQU0sT0FBTyxRQUFRO0FBQUcsSUFxRnBCLFlBQW1CLE9BQW1CLEVBQVMsRUFBcUI7QUFBSSxRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFZO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBM0U1RCxlQUFVLEdBQVksS0FBSyxDQUFDO0FBQ3pDLFFBS2EsZUFBVSxHQUFXLENBQUMsQ0FBQztBQUNw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QkFBaUI7QUFBRztBQUFHO0FBQ25QLDBCQTRmQSxLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyw4QkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLGdDQUVWLEtBQUs7QUFBSyw0QkFFVixLQUFLO0FBQUssc0NBRVYsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSyxrQ0FFVixNQUFNO0FBQUssNEJBRVgsTUFBTTtBQUFLLDZCQUVYLFNBQVMsU0FBQyxnQkFBZ0I7QUFBTyx5QkFFakMsS0FBSztBQUFLLDBCQVVWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFtV2hCLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLGtCQUNuRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLGtCQUNwSDtBQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxjQUNoRzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsT25EZXN0cm95LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlLCBQcmltZVRlbXBsYXRlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgVW5pcXVlQ29tcG9uZW50SWQgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7ICBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWdhbGxlcmlhJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZnVsbFNjcmVlbjtlbHNlIHdpbmRvd2VkXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidmlzaWJsZVwiICNtYXNrIFtuZ0NsYXNzXT1cInsncC1nYWxsZXJpYS1tYXNrIHAtY29tcG9uZW50LW92ZXJsYXknOnRydWUsICdwLWdhbGxlcmlhLXZpc2libGUnOiB0aGlzLnZpc2libGV9XCIgW2NsYXNzXT1cIm1hc2tDbGFzc1wiIFtuZ1N0eWxlXT1cInsnekluZGV4Jzp6SW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgPHAtZ2FsbGVyaWFDb250ZW50IFt2YWx1ZV09XCJ2YWx1ZVwiIFthY3RpdmVJbmRleF09XCJhY3RpdmVJbmRleFwiIChtYXNrSGlkZSk9XCJvbk1hc2tIaWRlKClcIiAoYWN0aXZlSXRlbUNoYW5nZSk9XCJvbkFjdGl2ZUl0ZW1DaGFuZ2UoJGV2ZW50KVwiIFtuZ1N0eWxlXT1cImNvbnRhaW5lclN0eWxlXCI+PC9wLWdhbGxlcmlhQ29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3dpbmRvd2VkPlxuICAgICAgICAgICAgPHAtZ2FsbGVyaWFDb250ZW50IFt2YWx1ZV09XCJ2YWx1ZVwiIFthY3RpdmVJbmRleF09XCJhY3RpdmVJbmRleFwiIChhY3RpdmVJdGVtQ2hhbmdlKT1cIm9uQWN0aXZlSXRlbUNoYW5nZSgkZXZlbnQpXCI+PC9wLWdhbGxlcmlhQ29udGVudD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyaWEuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyaWEgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBnZXQgYWN0aXZlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUluZGV4O1xuICAgIH07XG5cbiAgICBzZXQgYWN0aXZlSW5kZXgoYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBmdWxsU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBpZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueVtdO1xuXG4gICAgQElucHV0KCkgbnVtVmlzaWJsZTogbnVtYmVyID0gMztcblxuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmVPcHRpb25zOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIHNob3dJdGVtTmF2aWdhdG9yczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgc2hvd1RodW1ibmFpbE5hdmlnYXRvcnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgc2hvd0l0ZW1OYXZpZ2F0b3JzT25Ib3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgY2hhbmdlSXRlbU9uSW5kaWNhdG9ySG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNpcmN1bGFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBhdXRvUGxheTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgdHJhbnNpdGlvbkludGVydmFsOiBudW1iZXIgPSA0MDAwO1xuXG4gICAgQElucHV0KCkgc2hvd1RodW1ibmFpbHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgdGh1bWJuYWlsc1Bvc2l0aW9uOiBzdHJpbmcgPSBcImJvdHRvbVwiO1xuXG4gICAgQElucHV0KCkgdmVydGljYWxUaHVtYm5haWxWaWV3UG9ydEhlaWdodDogc3RyaW5nID0gXCIzMDBweFwiO1xuXG4gICAgQElucHV0KCkgc2hvd0luZGljYXRvcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHNob3dJbmRpY2F0b3JzT25JdGVtOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBpbmRpY2F0b3JzUG9zaXRpb246IHN0cmluZyA9IFwiYm90dG9tXCI7XG5cbiAgICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgbWFza0NsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBjb250YWluZXJDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgY29udGFpbmVyU3R5bGU6IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoJ21hc2snLCB7c3RhdGljOiBmYWxzZX0pIG1hc2s6IEVsZW1lbnRSZWY7XG5cbiAgICBASW5wdXQoKSBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gICAgfTtcblxuICAgIHNldCB2aXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIGFjdGl2ZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcblx0QENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG5cbiAgICBfdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgX2FjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgaGVhZGVyRmFjZXQ6IGFueTtcblxuICAgIGZvb3RlckZhY2V0OiBhbnk7XG5cbiAgICBpbmRpY2F0b3JGYWNldDogYW55O1xuXG4gICAgY2FwdGlvbkZhY2V0OiBhbnk7XG5cbiAgICB6SW5kZXg6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJGYWNldCA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZm9vdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJGYWNldCA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5kaWNhdG9yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JGYWNldCA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FwdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdGlvbkZhY2V0ID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5mdWxsU2NyZWVuICYmIHNpbXBsZUNoYW5nZXMudmlzaWJsZSkge1xuICAgICAgICAgICAgaWYgKHNpbXBsZUNoYW5nZXMudmlzaWJsZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdwLW92ZXJmbG93LWhpZGRlbicpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKytEb21IYW5kbGVyLnppbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgb25NYXNrSGlkZSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBvbkFjdGl2ZUl0ZW1DaGFuZ2UoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1nYWxsZXJpYUNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW2F0dHIuaWRdPVwiaWRcIiAqbmdJZj1cInZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDBcIiBbbmdDbGFzc109XCJ7J3AtZ2FsbGVyaWEgcC1jb21wb25lbnQnOiB0cnVlLCAncC1nYWxsZXJpYS1mdWxsc2NyZWVuJzogdGhpcy5nYWxsZXJpYS5mdWxsU2NyZWVuLCBcbiAgICAgICAgICAgICdwLWdhbGxlcmlhLWluZGljYXRvci1vbml0ZW0nOiB0aGlzLmdhbGxlcmlhLnNob3dJbmRpY2F0b3JzT25JdGVtLCAncC1nYWxsZXJpYS1pdGVtLW5hdi1vbmhvdmVyJzogdGhpcy5nYWxsZXJpYS5zaG93SXRlbU5hdmlnYXRvcnNPbkhvdmVyICYmICF0aGlzLmdhbGxlcmlhLmZ1bGxTY3JlZW59XCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cIiFnYWxsZXJpYS5mdWxsU2NyZWVuID8gZ2FsbGVyaWEuY29udGFpbmVyU3R5bGUgOiB7fVwiIFtjbGFzc109XCJnYWxsZXJpYUNsYXNzKClcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJnYWxsZXJpYS5mdWxsU2NyZWVuXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicC1nYWxsZXJpYS1jbG9zZSBwLWxpbmtcIiAoY2xpY2spPVwibWFza0hpZGUuZW1pdCgpXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZ2FsbGVyaWEtY2xvc2UtaWNvbiBwaSBwaS10aW1lc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdhbGxlcmlhLnRlbXBsYXRlcyAmJiBnYWxsZXJpYS5oZWFkZXJGYWNldFwiIGNsYXNzPVwicC1nYWxsZXJpYS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1nYWxsZXJpYUl0ZW1TbG90IHR5cGU9XCJoZWFkZXJcIiBbdGVtcGxhdGVzXT1cImdhbGxlcmlhLnRlbXBsYXRlc1wiPjwvcC1nYWxsZXJpYUl0ZW1TbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1nYWxsZXJpYS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAtZ2FsbGVyaWFJdGVtIFt2YWx1ZV09XCJ2YWx1ZVwiIFthY3RpdmVJbmRleF09XCJhY3RpdmVJbmRleFwiIFtjaXJjdWxhcl09XCJnYWxsZXJpYS5jaXJjdWxhclwiIFt0ZW1wbGF0ZXNdPVwiZ2FsbGVyaWEudGVtcGxhdGVzXCIgKG9uQWN0aXZlSW5kZXhDaGFuZ2UpPVwib25BY3RpdmVJbmRleENoYW5nZSgkZXZlbnQpXCIgXG4gICAgICAgICAgICAgICAgICAgIFtzaG93SW5kaWNhdG9yc109XCJnYWxsZXJpYS5zaG93SW5kaWNhdG9yc1wiIFtjaGFuZ2VJdGVtT25JbmRpY2F0b3JIb3Zlcl09XCJnYWxsZXJpYS5jaGFuZ2VJdGVtT25JbmRpY2F0b3JIb3ZlclwiIFtpbmRpY2F0b3JGYWNldF09XCJnYWxsZXJpYS5pbmRpY2F0b3JGYWNldFwiXG4gICAgICAgICAgICAgICAgICAgIFtjYXB0aW9uRmFjZXRdPVwiZ2FsbGVyaWEuY2FwdGlvbkZhY2V0XCIgW3Nob3dJdGVtTmF2aWdhdG9yc109XCJnYWxsZXJpYS5zaG93SXRlbU5hdmlnYXRvcnNcIiBbYXV0b1BsYXldPVwiZ2FsbGVyaWEuYXV0b1BsYXlcIiBbc2xpZGVTaG93QWN0aXZlXT1cInNsaWRlU2hvd0FjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIChzdGFydFNsaWRlU2hvdyk9XCJzdGFydFNsaWRlU2hvdygpXCIgKHN0b3BTbGlkZVNob3cpPVwic3RvcFNsaWRlU2hvdygpXCI+PC9wLWdhbGxlcmlhSXRlbT5cblxuICAgICAgICAgICAgICAgIDxwLWdhbGxlcmlhVGh1bWJuYWlscyAqbmdJZj1cImdhbGxlcmlhLnNob3dUaHVtYm5haWxzXCIgW2NvbnRhaW5lcklkXT1cImlkXCIgW3ZhbHVlXT1cInZhbHVlXCIgKG9uQWN0aXZlSW5kZXhDaGFuZ2UpPVwib25BY3RpdmVJbmRleENoYW5nZSgkZXZlbnQpXCIgW2FjdGl2ZUluZGV4XT1cImFjdGl2ZUluZGV4XCIgW3RlbXBsYXRlc109XCJnYWxsZXJpYS50ZW1wbGF0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbbnVtVmlzaWJsZV09XCJnYWxsZXJpYS5udW1WaXNpYmxlXCIgW3Jlc3BvbnNpdmVPcHRpb25zXT1cImdhbGxlcmlhLnJlc3BvbnNpdmVPcHRpb25zXCIgW2NpcmN1bGFyXT1cImdhbGxlcmlhLmNpcmN1bGFyXCJcbiAgICAgICAgICAgICAgICAgICAgW2lzVmVydGljYWxdPVwiaXNWZXJ0aWNhbCgpXCIgW2NvbnRlbnRIZWlnaHRdPVwiZ2FsbGVyaWEudmVydGljYWxUaHVtYm5haWxWaWV3UG9ydEhlaWdodFwiIFtzaG93VGh1bWJuYWlsTmF2aWdhdG9yc109XCJnYWxsZXJpYS5zaG93VGh1bWJuYWlsTmF2aWdhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgIFtzbGlkZVNob3dBY3RpdmVdPVwic2xpZGVTaG93QWN0aXZlXCIgKHN0b3BTbGlkZVNob3cpPVwic3RvcFNsaWRlU2hvdygpXCI+PC9wLWdhbGxlcmlhVGh1bWJuYWlscz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdhbGxlcmlhLnRlbXBsYXRlcyAmJiBnYWxsZXJpYS5mb290ZXJGYWNldFwiIGNsYXNzPVwicC1nYWxsZXJpYS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1nYWxsZXJpYUl0ZW1TbG90IHR5cGU9XCJmb290ZXJcIiBbdGVtcGxhdGVzXT1cImdhbGxlcmlhLnRlbXBsYXRlc1wiPjwvcC1nYWxsZXJpYUl0ZW1TbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJpYUNvbnRlbnQge1xuXG4gICAgQElucHV0KCkgZ2V0IGFjdGl2ZUluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVJbmRleDtcbiAgICB9O1xuXG4gICAgc2V0IGFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSB2YWx1ZTogYW55W10gPSBbXTtcblxuICAgIEBPdXRwdXQoKSBtYXNrSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgYWN0aXZlSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBpZDogc3RyaW5nID0gdGhpcy5nYWxsZXJpYS5pZCB8fCBVbmlxdWVDb21wb25lbnRJZCgpO1xuXG4gICAgc2xpZGVTaG93QWN0aWN2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgX2FjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgc2xpZGVTaG93QWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGludGVydmFsOiBhbnk7XG5cbiAgICBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2FsbGVyaWE6IEdhbGxlcmlhLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIGdhbGxlcmlhQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbHNQb3NDbGFzcyA9IHRoaXMuZ2FsbGVyaWEuc2hvd1RodW1ibmFpbHMgJiYgdGhpcy5nZXRQb3NpdGlvbkNsYXNzKCdwLWdhbGxlcmlhLXRodW1ibmFpbHMnLCB0aGlzLmdhbGxlcmlhLnRodW1ibmFpbHNQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGluZGljYXRvclBvc0NsYXNzID0gdGhpcy5nYWxsZXJpYS5zaG93SW5kaWNhdG9ycyAmJiB0aGlzLmdldFBvc2l0aW9uQ2xhc3MoJ3AtZ2FsbGVyaWEtaW5kaWNhdG9ycycsIHRoaXMuZ2FsbGVyaWEuaW5kaWNhdG9yc1Bvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMuZ2FsbGVyaWEuY29udGFpbmVyQ2xhc3MgPyB0aGlzLmdhbGxlcmlhLmNvbnRhaW5lckNsYXNzICsgXCIgXCIgOiAnJykgKyAodGh1bWJuYWlsc1Bvc0NsYXNzID8gdGh1bWJuYWlsc1Bvc0NsYXNzICsgXCIgXCIgOiAnJykgKyAoaW5kaWNhdG9yUG9zQ2xhc3MgPyBpbmRpY2F0b3JQb3NDbGFzcyArIFwiIFwiIDogJycpO1xuICAgIH1cblxuICAgIHN0YXJ0U2xpZGVTaG93KCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gKHRoaXMuZ2FsbGVyaWEuY2lyY3VsYXIgJiYgKHRoaXMudmFsdWUubGVuZ3RoIC0gMSkgPT09IHRoaXMuYWN0aXZlSW5kZXgpID8gMCA6ICh0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlSW5kZXhDaGFuZ2UoYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgICAgICB9LCB0aGlzLmdhbGxlcmlhLnRyYW5zaXRpb25JbnRlcnZhbCk7XG5cbiAgICAgICAgdGhpcy5zbGlkZVNob3dBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0b3BTbGlkZVNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zbGlkZVNob3dBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbkNsYXNzKHByZUNsYXNzTmFtZSwgcG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXTtcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb25zLmZpbmQoaXRlbSA9PiBpdGVtID09PSBwb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHBvcyA/IGAke3ByZUNsYXNzTmFtZX0tJHtwb3N9YCA6ICcnO1xuICAgIH1cblxuICAgIGlzVmVydGljYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbGxlcmlhLnRodW1ibmFpbHNQb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMuZ2FsbGVyaWEudGh1bWJuYWlsc1Bvc2l0aW9uID09PSAncmlnaHQnO1xuICAgIH1cblxuICAgIG9uQWN0aXZlSW5kZXhDaGFuZ2UoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1DaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWdhbGxlcmlhSXRlbVNsb3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50VGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGU7IGNvbnRleHQ6IGNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgYCxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcmlhSXRlbVNsb3Qge1xuICAgIEBJbnB1dCgpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgZ2V0IGl0ZW0oKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gICAgfTtcblxuICAgIHNldCBpdGVtKGl0ZW06YW55KSB7XG4gICAgICAgIHRoaXMuX2l0ZW0gPSBpdGVtO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZXRUeXBlKCkgPT09IHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NhcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGh1bWJuYWlsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSB7JGltcGxpY2l0OiB0aGlzLml0ZW19O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgICBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjb250ZXh0OmFueTtcblxuICAgIF9pdGVtOmFueTtcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0VHlwZSgpID09PSB0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGh1bWJuYWlsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IHskaW1wbGljaXQ6IHRoaXMuaXRlbX07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbmRpY2F0b3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0geyRpbXBsaWNpdDogdGhpcy5pbmRleH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZ2FsbGVyaWFJdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1nYWxsZXJpYS1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWdhbGxlcmlhLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dJdGVtTmF2aWdhdG9yc1wiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7J3AtZ2FsbGVyaWEtaXRlbS1wcmV2IHAtZ2FsbGVyaWEtaXRlbS1uYXYgcC1saW5rJzogdHJ1ZSwgJ3AtZGlzYWJsZWQnOiB0aGlzLmlzTmF2QmFja3dhcmREaXNhYmxlZCgpfVwiIChjbGljayk9XCJuYXZCYWNrd2FyZCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImlzTmF2QmFja3dhcmREaXNhYmxlZCgpXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWdhbGxlcmlhLWl0ZW0tcHJldi1pY29uIHBpIHBpLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cC1nYWxsZXJpYUl0ZW1TbG90IHR5cGU9XCJpdGVtXCIgW2l0ZW1dPVwiYWN0aXZlSXRlbVwiIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCIgY2xhc3M9XCJwLWdhbGxlcmlhLWl0ZW1cIj48L3AtZ2FsbGVyaWFJdGVtU2xvdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0l0ZW1OYXZpZ2F0b3JzXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cInsncC1nYWxsZXJpYS1pdGVtLW5leHQgcC1nYWxsZXJpYS1pdGVtLW5hdiBwLWxpbmsnOiB0cnVlLCdwLWRpc2FibGVkJzogdGhpcy5pc05hdkZvcndhcmREaXNhYmxlZCgpfVwiIChjbGljayk9XCJuYXZGb3J3YXJkKCRldmVudClcIiAgW2Rpc2FibGVkXT1cImlzTmF2Rm9yd2FyZERpc2FibGVkKClcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZ2FsbGVyaWEtaXRlbS1uZXh0LWljb24gcGkgcGktY2hldnJvbi1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1nYWxsZXJpYS1jYXB0aW9uXCIgKm5nSWY9XCJjYXB0aW9uRmFjZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtZ2FsbGVyaWFJdGVtU2xvdCB0eXBlPVwiY2FwdGlvblwiIFtpdGVtXT1cImFjdGl2ZUl0ZW1cIiBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPjwvcC1nYWxsZXJpYUl0ZW1TbG90PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgKm5nSWY9XCJzaG93SW5kaWNhdG9yc1wiIGNsYXNzPVwicC1nYWxsZXJpYS1pbmRpY2F0b3JzIHAtcmVzZXRcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdmFsdWU7IGxldCBpbmRleCA9IGluZGV4O1wiIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkluZGljYXRvckNsaWNrKGluZGV4KVwiIChtb3VzZWVudGVyKT1cIm9uSW5kaWNhdG9yTW91c2VFbnRlcihpbmRleClcIiAoa2V5ZG93bi5lbnRlcik9XCJvbkluZGljYXRvcktleURvd24oaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWdhbGxlcmlhLWluZGljYXRvcic6IHRydWUsJ3AtaGlnaGxpZ2h0JzogaXNJbmRpY2F0b3JJdGVtQWN0aXZlKGluZGV4KX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGFiSW5kZXg9XCItMVwiIGNsYXNzPVwicC1saW5rXCIgKm5nSWY9XCIhaW5kaWNhdG9yRmFjZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWdhbGxlcmlhSXRlbVNsb3QgdHlwZT1cImluZGljYXRvclwiIFtpbmRleF09XCJpbmRleFwiIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCI+PC9wLWdhbGxlcmlhSXRlbVNsb3Q+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJpYUl0ZW0gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgY2lyY3VsYXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIHNob3dJdGVtTmF2aWdhdG9yczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgc2hvd0luZGljYXRvcnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgc2xpZGVTaG93QWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGNoYW5nZUl0ZW1PbkluZGljYXRvckhvdmVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGF1dG9QbGF5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgQElucHV0KCkgaW5kaWNhdG9yRmFjZXQ6IGFueTtcblxuICAgIEBJbnB1dCgpIGNhcHRpb25GYWNldDogYW55O1xuXG4gICAgQE91dHB1dCgpIHN0YXJ0U2xpZGVTaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBzdG9wU2xpZGVTaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25BY3RpdmVJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBnZXQgYWN0aXZlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUluZGV4O1xuICAgIH07XG5cbiAgICBzZXQgYWN0aXZlSW5kZXgoYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy52YWx1ZVt0aGlzLl9hY3RpdmVJbmRleF07XG4gICAgfVxuXG4gICAgX2FjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgYWN0aXZlSXRlbTogYW55O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2xpZGVTaG93LmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGxldCBuZXh0SXRlbUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCArIDE7XG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IHRoaXMuY2lyY3VsYXIgJiYgdGhpcy52YWx1ZS5sZW5ndGggLSAxID09PSB0aGlzLmFjdGl2ZUluZGV4XG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IG5leHRJdGVtSW5kZXg7XG4gICAgICAgIHRoaXMub25BY3RpdmVJbmRleENoYW5nZS5lbWl0KGFjdGl2ZUluZGV4KTtcbiAgICB9XG5cbiAgICBwcmV2KCkge1xuICAgICAgICBsZXQgcHJldkl0ZW1JbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggIT09IDAgPyB0aGlzLmFjdGl2ZUluZGV4IC0gMSA6IDA7XG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IHRoaXMuY2lyY3VsYXIgJiYgdGhpcy5hY3RpdmVJbmRleCA9PT0gMFxuICAgICAgICAgICAgICAgID8gdGhpcy52YWx1ZS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgOiBwcmV2SXRlbUluZGV4XG4gICAgICAgIHRoaXMub25BY3RpdmVJbmRleENoYW5nZS5lbWl0KGFjdGl2ZUluZGV4KTtcbiAgICB9XG5cbiAgICBzdG9wVGhlU2xpZGVTaG93KCkge1xuICAgICAgICBpZiAodGhpcy5zbGlkZVNob3dBY3RpdmUgJiYgdGhpcy5zdG9wU2xpZGVTaG93KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTbGlkZVNob3cuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2Rm9yd2FyZChlKSB7XG4gICAgICAgIHRoaXMuc3RvcFRoZVNsaWRlU2hvdygpO1xuICAgICAgICB0aGlzLm5leHQoKTtcblxuICAgICAgICBpZiAoZSAmJiBlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdkJhY2t3YXJkKGUpIHtcbiAgICAgICAgdGhpcy5zdG9wVGhlU2xpZGVTaG93KCk7XG4gICAgICAgIHRoaXMucHJldigpO1xuXG4gICAgICAgIGlmIChlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JbmRpY2F0b3JDbGljayhpbmRleCkge1xuICAgICAgICB0aGlzLnN0b3BUaGVTbGlkZVNob3coKTtcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgIH1cblxuICAgIG9uSW5kaWNhdG9yTW91c2VFbnRlcihpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VJdGVtT25JbmRpY2F0b3JIb3Zlcikge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGhlU2xpZGVTaG93KCk7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkluZGljYXRvcktleURvd24oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zdG9wVGhlU2xpZGVTaG93KCk7XG4gICAgICAgIHRoaXMub25BY3RpdmVJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcbiAgICB9XG5cbiAgICBpc05hdkZvcndhcmREaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNpcmN1bGFyICYmIHRoaXMuYWN0aXZlSW5kZXggPT09ICh0aGlzLnZhbHVlLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGlzTmF2QmFja3dhcmREaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNpcmN1bGFyICYmIHRoaXMuYWN0aXZlSW5kZXggPT09IDA7XG4gICAgfVxuXG4gICAgaXNJbmRpY2F0b3JJdGVtQWN0aXZlKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUluZGV4ID09PSBpbmRleDtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1nYWxsZXJpYVRodW1ibmFpbHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWdhbGxlcmlhLXRodW1ibmFpbC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1nYWxsZXJpYS10aHVtYm5haWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dUaHVtYm5haWxOYXZpZ2F0b3JzXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cInsncC1nYWxsZXJpYS10aHVtYm5haWwtcHJldiBwLWxpbmsnOiB0cnVlLCAncC1kaXNhYmxlZCc6IHRoaXMuaXNOYXZCYWNrd2FyZERpc2FibGVkKCl9XCIgKGNsaWNrKT1cIm5hdkJhY2t3YXJkKCRldmVudClcIiBbZGlzYWJsZWRdPVwiaXNOYXZCYWNrd2FyZERpc2FibGVkKClcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3AtZ2FsbGVyaWEtdGh1bWJuYWlsLXByZXYtaWNvbiBwaSc6IHRydWUsICdwaS1jaGV2cm9uLWxlZnQnOiAhdGhpcy5pc1ZlcnRpY2FsLCAncGktY2hldnJvbi11cCc6IHRoaXMuaXNWZXJ0aWNhbH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW1zLWNvbnRhaW5lclwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaXNWZXJ0aWNhbCA/IGNvbnRlbnRIZWlnaHQgOiAnJ31cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAjaXRlbXNDb250YWluZXIgY2xhc3M9XCJwLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtc1wiICh0cmFuc2l0aW9uZW5kKT1cIm9uVHJhbnNpdGlvbkVuZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b3VjaHN0YXJ0KT1cIm9uVG91Y2hTdGFydCgkZXZlbnQpXCIgKHRvdWNobW92ZSk9XCJvblRvdWNoTW92ZSgkZXZlbnQpXCIgKHRvdWNoZW5kKT1cIm9uVG91Y2hFbmQoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2YWx1ZTsgbGV0IGluZGV4ID0gaW5kZXg7XCIgW25nQ2xhc3NdPVwieydwLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtJzogdHJ1ZSwgJ3AtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0tY3VycmVudCc6IGFjdGl2ZUluZGV4ID09PSBpbmRleCwgJ3AtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0tYWN0aXZlJzogaXNJdGVtQWN0aXZlKGluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1zdGFydCc6IGZpcnN0SXRlbUFjaXZlSW5kZXgoKSA9PT0gaW5kZXgsICdwLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtLWVuZCc6IGxhc3RJdGVtQWN0aXZlSW5kZXgoKSA9PT0gaW5kZXggfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtLWNvbnRlbnRcIiBbYXR0ci50YWJpbmRleF09XCJnZXRUYWJJbmRleChpbmRleClcIiAoY2xpY2spPVwib25JdGVtQ2xpY2soaW5kZXgpXCIgKGtleWRvd24uZW50ZXIpPVwib25JdGVtQ2xpY2soaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWdhbGxlcmlhSXRlbVNsb3QgdHlwZT1cInRodW1ibmFpbFwiIFtpdGVtXT1cIml0ZW1cIiBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPjwvcC1nYWxsZXJpYUl0ZW1TbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93VGh1bWJuYWlsTmF2aWdhdG9yc1wiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7J3AtZ2FsbGVyaWEtdGh1bWJuYWlsLW5leHQgcC1saW5rJzogdHJ1ZSwgJ3AtZGlzYWJsZWQnOiB0aGlzLmlzTmF2Rm9yd2FyZERpc2FibGVkKCl9XCIgKGNsaWNrKT1cIm5hdkZvcndhcmQoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJpc05hdkZvcndhcmREaXNhYmxlZCgpXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieydwLWdhbGxlcmlhLXRodW1ibmFpbC1uZXh0LWljb24gcGknOiB0cnVlLCAncGktY2hldnJvbi1yaWdodCc6ICF0aGlzLmlzVmVydGljYWwsICdwaS1jaGV2cm9uLWRvd24nOiB0aGlzLmlzVmVydGljYWx9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJpYVRodW1ibmFpbHMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb250YWluZXJJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueVtdO1xuXG4gICAgQElucHV0KCkgaXNWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgc2xpZGVTaG93QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjaXJjdWxhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZU9wdGlvbnM6IGFueVtdO1xuXG4gICAgQElucHV0KCkgY29udGVudEhlaWdodDogc3RyaW5nID0gXCIzMDBweFwiO1xuXG4gICAgQElucHV0KCkgc2hvd1RodW1ibmFpbE5hdmlnYXRvcnMgPSB0cnVlO1xuXG4gICAgQElucHV0KCkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIEBPdXRwdXQoKSBvbkFjdGl2ZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBzdG9wU2xpZGVTaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2l0ZW1zQ29udGFpbmVyJykgaXRlbXNDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBASW5wdXQoKSBnZXQgbnVtVmlzaWJsZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbnVtVmlzaWJsZTtcbiAgICB9O1xuXG4gICAgc2V0IG51bVZpc2libGUobnVtVmlzaWJsZSkge1xuICAgICAgICB0aGlzLl9udW1WaXNpYmxlID0gbnVtVmlzaWJsZTtcbiAgICAgICAgdGhpcy5fb2xkTnVtVmlzaWJsZSA9IHRoaXMuZF9udW1WaXNpYmxlO1xuICAgICAgICB0aGlzLmRfbnVtVmlzaWJsZSA9IG51bVZpc2libGU7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IGFjdGl2ZUluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVJbmRleDtcbiAgICB9O1xuXG4gICAgc2V0IGFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KSB7XG4gICAgICAgIHRoaXMuX29sZGFjdGl2ZUluZGV4ID0gdGhpcy5fYWN0aXZlSW5kZXg7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgfVxuICAgIFxuICAgIGluZGV4OiBudW1iZXI7XG5cbiAgICBzdGFydFBvcyA9IG51bGw7XG4gICAgXG4gICAgdGh1bWJuYWlsc1N0eWxlID0gbnVsbDtcblxuICAgIHNvcnRlZFJlc3BvbnNpdmVPcHRpb25zID0gbnVsbDtcblxuICAgIHRvdGFsU2hpZnRlZEl0ZW1zOiBudW1iZXIgPSAwO1xuXG4gICAgcGFnZTogbnVtYmVyID0gMDtcblxuICAgIGRvY3VtZW50UmVzaXplTGlzdGVuZXI6IGFueTtcblxuICAgIF9udW1WaXNpYmxlOm51bWJlciA9IDA7XG5cbiAgICBkX251bVZpc2libGU6IG51bWJlciA9IDA7XG5cbiAgICBfb2xkTnVtVmlzaWJsZTogbnVtYmVyID0gMDtcblxuICAgIF9hY3RpdmVJbmRleDogbnVtYmVyID0gMDtcbiAgICBcbiAgICBfb2xkYWN0aXZlSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZSgpO1xuXG5cdFx0aWYgKHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcblx0XHRcdHRoaXMuYmluZERvY3VtZW50TGlzdGVuZXJzKCk7XG5cdFx0fVxuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAgICAgbGV0IHRvdGFsU2hpZnRlZEl0ZW1zID0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcztcblxuICAgICAgICBpZiAoKHRoaXMuX29sZE51bVZpc2libGUgIT09IHRoaXMuZF9udW1WaXNpYmxlIHx8IHRoaXMuX29sZGFjdGl2ZUluZGV4ICE9PSB0aGlzLl9hY3RpdmVJbmRleCkgJiYgdGhpcy5pdGVtc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUluZGV4IDw9IHRoaXMuZ2V0TWVkaWFuSXRlbUluZGV4KCkpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIHRoaXMuZF9udW1WaXNpYmxlICsgdGhpcy5nZXRNZWRpYW5JdGVtSW5kZXgoKSA8IHRoaXMuX2FjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLmRfbnVtVmlzaWJsZSAtIHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSB0aGlzLmRfbnVtVmlzaWJsZSA8IHRoaXMuX2FjdGl2ZUluZGV4ICYmIHRoaXMuZF9udW1WaXNpYmxlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gKHRoaXMuX2FjdGl2ZUluZGV4ICogLTEpICsgdGhpcy5nZXRNZWRpYW5JdGVtSW5kZXgoKSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9ICh0aGlzLl9hY3RpdmVJbmRleCAqIC0xKSArIHRoaXMuZ2V0TWVkaWFuSXRlbUluZGV4KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b3RhbFNoaWZ0ZWRJdGVtcyAhPT0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0b3RhbFNoaWZ0ZWRJdGVtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNDb250YWluZXIgJiYgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuaXNWZXJ0aWNhbCA/IGB0cmFuc2xhdGUzZCgwLCAke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5kX251bVZpc2libGUpfSUsIDApYCA6IGB0cmFuc2xhdGUzZCgke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5kX251bVZpc2libGUpfSUsIDAsIDApYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX29sZGFjdGl2ZUluZGV4ICE9PSB0aGlzLl9hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAncC1pdGVtcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gNTAwbXMgZWFzZSAwcyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX29sZGFjdGl2ZUluZGV4ID0gdGhpcy5fYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9vbGROdW1WaXNpYmxlID0gdGhpcy5kX251bVZpc2libGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0eWxlKCkge1xuICAgICAgICBpZiAoIXRoaXMudGh1bWJuYWlsc1N0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50aHVtYm5haWxzU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICMke3RoaXMuY29udGFpbmVySWR9IC5wLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgJHsgKDEwMC8gdGhpcy5kX251bVZpc2libGUpIH0lXG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGVkUmVzcG9uc2l2ZU9wdGlvbnMgPSBbLi4udGhpcy5yZXNwb25zaXZlT3B0aW9uc107XG4gICAgICAgICAgICB0aGlzLnNvcnRlZFJlc3BvbnNpdmVPcHRpb25zLnNvcnQoKGRhdGExLCBkYXRhMikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlMSA9IGRhdGExLmJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUyID0gZGF0YTIuYnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMiwgdW5kZWZpbmVkLCB7IG51bWVyaWM6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodmFsdWUxIDwgdmFsdWUyKSA/IC0xIDogKHZhbHVlMSA+IHZhbHVlMikgPyAxIDogMDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAtMSAqIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydGVkUmVzcG9uc2l2ZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gdGhpcy5zb3J0ZWRSZXNwb25zaXZlT3B0aW9uc1tpXTtcblxuICAgICAgICAgICAgICAgIGlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7cmVzLmJyZWFrcG9pbnR9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjJHt0aGlzLmNvbnRhaW5lcklkfSAucC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAwICR7ICgxMDAvIHJlcy5udW1WaXNpYmxlKSB9JVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aHVtYm5haWxzU3R5bGUuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtc0NvbnRhaW5lciAmJiB0aGlzLnNvcnRlZFJlc3BvbnNpdmVPcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGxldCBtYXRjaGVkUmVzcG9uc2l2ZURhdGEgPSB7XG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogdGhpcy5fbnVtVmlzaWJsZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRlZFJlc3BvbnNpdmVPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMuc29ydGVkUmVzcG9uc2l2ZU9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocmVzLmJyZWFrcG9pbnQsIDEwKSA+PSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkUmVzcG9uc2l2ZURhdGEgPSByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kX251bVZpc2libGUgIT09IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1WaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kX251bVZpc2libGUgPSBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtVmlzaWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFiSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJdGVtQWN0aXZlKGluZGV4KSA/IDAgOiBudWxsO1xuICAgIH1cblxuICAgIG5hdkZvcndhcmQoZSkge1xuICAgICAgICB0aGlzLnN0b3BUaGVTbGlkZVNob3coKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW1JbmRleCA9IHRoaXMuX2FjdGl2ZUluZGV4ICsgMTtcbiAgICAgICAgaWYgKG5leHRJdGVtSW5kZXggKyB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zID4gdGhpcy5nZXRNZWRpYW5JdGVtSW5kZXgoKSAmJiAoKC0xICogdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcykgPCB0aGlzLmdldFRvdGFsUGFnZU51bWJlcigpIC0gMSB8fCB0aGlzLmNpcmN1bGFyKSkge1xuICAgICAgICAgICAgdGhpcy5zdGVwKC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IHRoaXMuY2lyY3VsYXIgJiYgKHRoaXMudmFsdWUubGVuZ3RoIC0gMSkgPT09IHRoaXMuX2FjdGl2ZUluZGV4ID8gMCA6IG5leHRJdGVtSW5kZXg7XG4gICAgICAgIHRoaXMub25BY3RpdmVJbmRleENoYW5nZS5lbWl0KGFjdGl2ZUluZGV4KTtcblxuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZCYWNrd2FyZChlKSB7XG4gICAgICAgIHRoaXMuc3RvcFRoZVNsaWRlU2hvdygpO1xuXG4gICAgICAgIGxldCBwcmV2SXRlbUluZGV4ID0gdGhpcy5fYWN0aXZlSW5kZXggIT09IDAgPyB0aGlzLl9hY3RpdmVJbmRleCAtIDEgOiAwO1xuICAgICAgICBsZXQgZGlmZiA9IHByZXZJdGVtSW5kZXggKyB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zO1xuICAgICAgICBpZiAoKHRoaXMuZF9udW1WaXNpYmxlIC0gZGlmZiAtIDEpID4gdGhpcy5nZXRNZWRpYW5JdGVtSW5kZXgoKSAmJiAoKC0xICogdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcykgIT09IDAgfHwgdGhpcy5jaXJjdWxhcikpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IHRoaXMuY2lyY3VsYXIgJiYgdGhpcy5fYWN0aXZlSW5kZXggPT09IDAgPyB0aGlzLnZhbHVlLmxlbmd0aCAtIDEgOiBwcmV2SXRlbUluZGV4O1xuICAgICAgICB0aGlzLm9uQWN0aXZlSW5kZXhDaGFuZ2UuZW1pdChhY3RpdmVJbmRleCk7XG5cbiAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zdG9wVGhlU2xpZGVTaG93KCk7XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW1JbmRleCAhPT0gdGhpcy5fYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBzZWxlY3RlZEl0ZW1JbmRleCArIHRoaXMudG90YWxTaGlmdGVkSXRlbXM7XG4gICAgICAgICAgICBsZXQgZGlyID0gMDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1JbmRleCA8IHRoaXMuX2FjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgZGlyID0gKHRoaXMuZF9udW1WaXNpYmxlIC0gZGlmZiAtIDEpIC0gdGhpcy5nZXRNZWRpYW5JdGVtSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyID4gMCAmJiAoLTEgKiB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAoZGlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXIgPSB0aGlzLmdldE1lZGlhbkl0ZW1JbmRleCgpIC0gZGlmZjtcbiAgICAgICAgICAgICAgICBpZiAoZGlyIDwgMCAmJiAoLTEgKiB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zKSA8IHRoaXMuZ2V0VG90YWxQYWdlTnVtYmVyKCkgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcChkaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHNlbGVjdGVkSXRlbUluZGV4O1xuICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5hY3RpdmVJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGVwKGRpcikge1xuICAgICAgICBsZXQgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zICsgZGlyO1xuXG4gICAgICAgIGlmIChkaXIgPCAwICYmICgtMSAqIHRvdGFsU2hpZnRlZEl0ZW1zKSArIHRoaXMuZF9udW1WaXNpYmxlID4gKHRoaXMudmFsdWUubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gdGhpcy5kX251bVZpc2libGUgLSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIgPiAwICYmIHRvdGFsU2hpZnRlZEl0ZW1zID4gMCkge1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2lyY3VsYXIpIHtcbiAgICAgICAgICAgIGlmIChkaXIgPCAwICYmIHRoaXMudmFsdWUubGVuZ3RoIC0gMSA9PT0gdGhpcy5fYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXIgPiAwICYmIHRoaXMuX2FjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLmRfbnVtVmlzaWJsZSAtIHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbXNDb250YWluZXIpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAncC1pdGVtcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmlzVmVydGljYWwgPyBgdHJhbnNsYXRlM2QoMCwgJHt0b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuZF9udW1WaXNpYmxlKX0lLCAwKWAgOiBgdHJhbnNsYXRlM2QoJHt0b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuZF9udW1WaXNpYmxlKX0lLCAwLCAwKWA7XG4gICAgICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gNTAwbXMgZWFzZSAwcyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zID0gdG90YWxTaGlmdGVkSXRlbXM7XG4gICAgfVxuXG4gICAgc3RvcFRoZVNsaWRlU2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVTaG93QWN0aXZlICYmIHRoaXMuc3RvcFNsaWRlU2hvdykge1xuICAgICAgICAgICAgdGhpcy5zdG9wU2xpZGVTaG93LmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVBhZ2VPblRvdWNoKGUsIGRpZmYpIHtcbiAgICAgICAgaWYgKGRpZmYgPCAwKSB7ICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICB0aGlzLm5hdkZvcndhcmQoZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7ICAgICAgICAgICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgdGhpcy5uYXZCYWNrd2FyZChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRUb3RhbFBhZ2VOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMuZF9udW1WaXNpYmxlID8gKHRoaXMudmFsdWUubGVuZ3RoIC0gdGhpcy5kX251bVZpc2libGUpICsgMSA6IDA7XG4gICAgfVxuXG4gICAgZ2V0TWVkaWFuSXRlbUluZGV4KCkge1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKHRoaXMuZF9udW1WaXNpYmxlIC8gMik7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLmRfbnVtVmlzaWJsZSAlIDIpID8gaW5kZXggOiBpbmRleCAtIDE7XG4gICAgfVxuXG4gICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtc0NvbnRhaW5lciAmJiB0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAncC1pdGVtcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblxuICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2VPblRvdWNoKGUsICh0b3VjaG9iai5wYWdlWSAtIHRoaXMuc3RhcnRQb3MueSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlT25Ub3VjaChlLCAodG91Y2hvYmoucGFnZVggLSB0aGlzLnN0YXJ0UG9zLngpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0ge1xuICAgICAgICAgICAgeDogdG91Y2hvYmoucGFnZVgsXG4gICAgICAgICAgICB5OiB0b3VjaG9iai5wYWdlWVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlzTmF2QmFja3dhcmREaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5jaXJjdWxhciAmJiB0aGlzLl9hY3RpdmVJbmRleCA9PT0gMCkgfHwgKHRoaXMudmFsdWUubGVuZ3RoIDw9IHRoaXMuZF9udW1WaXNpYmxlKTtcbiAgICB9XG5cbiAgICBpc05hdkZvcndhcmREaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5jaXJjdWxhciAmJiB0aGlzLl9hY3RpdmVJbmRleCA9PT0gKHRoaXMudmFsdWUubGVuZ3RoIC0gMSkpIHx8ICh0aGlzLnZhbHVlLmxlbmd0aCA8PSB0aGlzLmRfbnVtVmlzaWJsZSk7XG4gICAgfVxuXG4gICAgZmlyc3RJdGVtQWNpdmVJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxTaGlmdGVkSXRlbXMgKiAtMTtcbiAgICB9XG5cbiAgICBsYXN0SXRlbUFjdGl2ZUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdEl0ZW1BY2l2ZUluZGV4KCkgKyB0aGlzLmRfbnVtVmlzaWJsZSAtIDE7XG4gICAgfVxuXG4gICAgaXNJdGVtQWN0aXZlKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0SXRlbUFjaXZlSW5kZXgoKSA8PSBpbmRleCAmJiB0aGlzLmxhc3RJdGVtQWN0aXZlSW5kZXgoKSA+PSBpbmRleDtcbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYodGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcblx0XHRcdHRoaXMudW5iaW5kRG9jdW1lbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRodW1ibmFpbHNTdHlsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRodW1ibmFpbHNTdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIEdhbGxlcmlhLCBHYWxsZXJpYUNvbnRlbnQsIEdhbGxlcmlhSXRlbVNsb3QsIEdhbGxlcmlhSXRlbSwgR2FsbGVyaWFUaHVtYm5haWxzLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0dhbGxlcmlhLCBHYWxsZXJpYUNvbnRlbnQsIEdhbGxlcmlhSXRlbVNsb3QsIEdhbGxlcmlhSXRlbSwgR2FsbGVyaWFUaHVtYm5haWxzXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJpYU1vZHVsZSB7IH0iXX0=