import { Component, Input, ElementRef, ViewChild, ContentChildren, NgModule, NgZone, EventEmitter, Output, ContentChild, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PrimeTemplate, SharedModule, Header, Footer } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { UniqueComponentId } from 'primeng/utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

const _c0 = ["itemsContainer"];
function Carousel_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Carousel_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Carousel_div_1_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
function Carousel_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a1, a2, a3) { return { "p-carousel-item p-carousel-item-cloned": true, "p-carousel-item-active": a1, "p-carousel-item-start": a2, "p-carousel-item-end": a3 }; };
const _c2 = function (a0) { return { $implicit: a0 }; };
function Carousel_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c1, ctx_r2.totalShiftedItems * (0 - 1) === ctx_r2.value.length, 0 === index_r9, ctx_r2.clonedItemsForStarting.length - 1 === index_r9));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r8));
} }
function Carousel_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function (a1, a2, a3) { return { "p-carousel-item": true, "p-carousel-item-active": a1, "p-carousel-item-start": a2, "p-carousel-item-end": a3 }; };
function Carousel_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, Carousel_div_10_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c3, ctx_r3.firstIndex() <= index_r12 && ctx_r3.lastIndex() >= index_r12, ctx_r3.firstIndex() === index_r12, ctx_r3.lastIndex() === index_r12));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r11));
} }
function Carousel_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Carousel_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, Carousel_div_11_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const index_r15 = ctx.index;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c1, ctx_r4.totalShiftedItems * (0 - 1) === ctx_r4.numVisible, 0 === index_r15, ctx_r4.clonedItemsForFinishing.length - 1 === index_r15));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r14));
} }
const _c4 = function (a1) { return { "p-carousel-indicator": true, "p-highlight": a1 }; };
function Carousel_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 2);
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵlistener("click", function Carousel_li_15_Template_button_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const i_r18 = ctx.index; const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onDotClick($event, i_r18); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c4, ctx_r5._page === i_r18));
} }
function Carousel_div_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Carousel_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Carousel_div_16_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
const _c5 = [[["p-header"]], [["p-footer"]]];
const _c6 = function (a1, a2) { return { "p-carousel p-component": true, "p-carousel-vertical": a1, "p-carousel-horizontal": a2 }; };
const _c7 = function (a1) { return { "p-carousel-prev p-link": true, "p-disabled": a1 }; };
const _c8 = function (a1, a2) { return { "p-carousel-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
const _c9 = function (a0) { return { "height": a0 }; };
const _c10 = function (a1) { return { "p-carousel-next p-link": true, "p-disabled": a1 }; };
const _c11 = function (a1, a2) { return { "p-carousel-prev-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
const _c12 = ["p-header", "p-footer"];
export class Carousel {
    constructor(el, zone, cd) {
        this.el = el;
        this.zone = zone;
        this.cd = cd;
        this.orientation = "horizontal";
        this.verticalViewPortHeight = "300px";
        this.contentClass = "";
        this.indicatorsContentClass = "";
        this.circular = false;
        this.autoplayInterval = 0;
        this.onPage = new EventEmitter();
        this._numVisible = 1;
        this._numScroll = 1;
        this._oldNumScroll = 0;
        this.prevState = {
            numScroll: 0,
            numVisible: 0,
            value: []
        };
        this.defaultNumScroll = 1;
        this.defaultNumVisible = 1;
        this._page = 0;
        this.isRemainingItemsAdded = false;
        this.remainingItems = 0;
        this.swipeThreshold = 20;
        this.totalShiftedItems = this.page * this.numScroll * -1;
    }
    get page() {
        return this._page;
    }
    set page(val) {
        if (this.isCreated && val !== this._page) {
            if (this.autoplayInterval) {
                this.stopAutoplay();
                this.allowAutoplay = false;
            }
            if (val > this._page && val <= (this.totalDots() - 1)) {
                this.step(-1, val);
            }
            else if (val < this._page) {
                this.step(1, val);
            }
        }
        this._page = val;
    }
    get numVisible() {
        return this._numVisible;
    }
    set numVisible(val) {
        this._numVisible = val;
    }
    get numScroll() {
        return this._numVisible;
    }
    set numScroll(val) {
        this._numScroll = val;
    }
    get value() {
        return this._value;
    }
    ;
    set value(val) {
        this._value = val;
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            if (this.circular && this._value) {
                this.setCloneItems();
            }
        }
        if (this.isCreated) {
            if (simpleChange.numVisible) {
                if (this.responsiveOptions) {
                    this.defaultNumVisible = this.numVisible;
                }
                if (this.isCircular()) {
                    this.setCloneItems();
                }
                this.createStyle();
                this.calculatePosition();
            }
            if (simpleChange.numScroll) {
                if (this.responsiveOptions) {
                    this.defaultNumScroll = this.numScroll;
                }
            }
        }
    }
    ngAfterContentInit() {
        this.id = UniqueComponentId();
        this.allowAutoplay = !!this.autoplayInterval;
        if (this.circular) {
            this.setCloneItems();
        }
        if (this.responsiveOptions) {
            this.defaultNumScroll = this._numScroll;
            this.defaultNumVisible = this._numVisible;
        }
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterContentChecked() {
        const isCircular = this.isCircular();
        let totalShiftedItems = this.totalShiftedItems;
        if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
            if (this.autoplayInterval) {
                this.stopAutoplay();
            }
            this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
            let page = this._page;
            if (this.totalDots() !== 0 && page >= this.totalDots()) {
                page = this.totalDots() - 1;
                this._page = page;
                this.onPage.emit({
                    page: this.page
                });
            }
            totalShiftedItems = (page * this._numScroll) * -1;
            if (isCircular) {
                totalShiftedItems -= this._numVisible;
            }
            if (page === (this.totalDots() - 1) && this.remainingItems > 0) {
                totalShiftedItems += (-1 * this.remainingItems) + this._numScroll;
                this.isRemainingItemsAdded = true;
            }
            else {
                this.isRemainingItemsAdded = false;
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
            this._oldNumScroll = this._numScroll;
            this.prevState.numScroll = this._numScroll;
            this.prevState.numVisible = this._numVisible;
            this.prevState.value = [...this._value];
            if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            }
            this.isCreated = true;
            if (this.autoplayInterval && this.isAutoplay()) {
                this.startAutoplay();
            }
        }
        if (isCircular) {
            if (this.page === 0) {
                totalShiftedItems = -1 * this._numVisible;
            }
            else if (totalShiftedItems === 0) {
                totalShiftedItems = -1 * this.value.length;
                if (this.remainingItems > 0) {
                    this.isRemainingItemsAdded = true;
                }
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
        }
    }
    createStyle() {
        if (!this.carouselStyle) {
            this.carouselStyle = document.createElement('style');
            this.carouselStyle.type = 'text/css';
            document.body.appendChild(this.carouselStyle);
        }
        let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${(100 / this.numVisible)}%
			}
        `;
        if (this.responsiveOptions) {
            this.responsiveOptions.sort((data1, data2) => {
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
            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];
                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${(100 / res.numVisible)}%
                        }
                    }
                `;
            }
        }
        this.carouselStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
        if (this.responsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this.defaultNumVisible,
                numScroll: this.defaultNumScroll
            };
            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];
                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }
            if (this._numScroll !== matchedResponsiveData.numScroll) {
                let page = this._page;
                page = Math.floor((page * this._numScroll) / matchedResponsiveData.numScroll);
                let totalShiftedItems = (matchedResponsiveData.numScroll * this.page) * -1;
                if (this.isCircular()) {
                    totalShiftedItems -= matchedResponsiveData.numVisible;
                }
                this.totalShiftedItems = totalShiftedItems;
                this._numScroll = matchedResponsiveData.numScroll;
                this._page = page;
                this.onPage.emit({
                    page: this.page
                });
            }
            if (this._numVisible !== matchedResponsiveData.numVisible) {
                this._numVisible = matchedResponsiveData.numVisible;
                this.setCloneItems();
            }
            this.cd.markForCheck();
        }
    }
    setCloneItems() {
        this.clonedItemsForStarting = [];
        this.clonedItemsForFinishing = [];
        if (this.isCircular()) {
            this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
            this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
        }
    }
    firstIndex() {
        return this.isCircular() ? (-1 * (this.totalShiftedItems + this.numVisible)) : (this.totalShiftedItems * -1);
    }
    lastIndex() {
        return this.firstIndex() + this.numVisible - 1;
    }
    totalDots() {
        return this.value ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
    }
    totalDotsArray() {
        const totalDots = this.totalDots();
        return totalDots <= 0 ? [] : Array(totalDots).fill(0);
    }
    isVertical() {
        return this.orientation === 'vertical';
    }
    isCircular() {
        return this.circular && this.value && this.value.length >= this.numVisible;
    }
    isAutoplay() {
        return this.autoplayInterval && this.allowAutoplay;
    }
    isForwardNavDisabled() {
        return this.isEmpty() || (this._page >= (this.totalDots() - 1) && !this.isCircular());
    }
    isBackwardNavDisabled() {
        return this.isEmpty() || (this._page <= 0 && !this.isCircular());
    }
    isEmpty() {
        return !this.value || this.value.length === 0;
    }
    navForward(e, index) {
        if (this.isCircular() || this._page < (this.totalDots() - 1)) {
            this.step(-1, index);
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e, index) {
        if (this.isCircular() || this._page !== 0) {
            this.step(1, index);
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    onDotClick(e, index) {
        let page = this._page;
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (index > page) {
            this.navForward(e, index);
        }
        else if (index < page) {
            this.navBackward(e, index);
        }
    }
    step(dir, page) {
        let totalShiftedItems = this.totalShiftedItems;
        const isCircular = this.isCircular();
        if (page != null) {
            totalShiftedItems = (this._numScroll * page) * -1;
            if (isCircular) {
                totalShiftedItems -= this._numVisible;
            }
            this.isRemainingItemsAdded = false;
        }
        else {
            totalShiftedItems += (this._numScroll * dir);
            if (this.isRemainingItemsAdded) {
                totalShiftedItems += this.remainingItems - (this._numScroll * dir);
                this.isRemainingItemsAdded = false;
            }
            let originalShiftedItems = isCircular ? (totalShiftedItems + this._numVisible) : totalShiftedItems;
            page = Math.abs(Math.floor((originalShiftedItems / this._numScroll)));
        }
        if (isCircular && this.page === (this.totalDots() - 1) && dir === -1) {
            totalShiftedItems = -1 * (this.value.length + this._numVisible);
            page = 0;
        }
        else if (isCircular && this.page === 0 && dir === 1) {
            totalShiftedItems = 0;
            page = (this.totalDots() - 1);
        }
        else if (page === (this.totalDots() - 1) && this.remainingItems > 0) {
            totalShiftedItems += ((this.remainingItems * -1) - (this._numScroll * dir));
            this.isRemainingItemsAdded = true;
        }
        if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
        this._page = page;
        this.onPage.emit({
            page: this.page
        });
    }
    startAutoplay() {
        this.interval = setInterval(() => {
            if (this.totalDots() > 0) {
                if (this.page === (this.totalDots() - 1)) {
                    this.step(-1, 0);
                }
                else {
                    this.step(-1, this.page + 1);
                }
            }
        }, this.autoplayInterval);
    }
    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    onTransitionEnd() {
        if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transition = '';
            if ((this.page === 0 || this.page === (this.totalDots() - 1)) && this.isCircular()) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            }
        }
    }
    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }
    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        if (this.isVertical()) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }
    changePageOnTouch(e, diff) {
        if (Math.abs(diff) > this.swipeThreshold) {
            if (diff < 0) {
                this.navForward(e);
            }
            else {
                this.navBackward(e);
            }
        }
    }
    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = (e) => {
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
        if (this.autoplayInterval) {
            this.stopAutoplay();
        }
    }
}
Carousel.ɵfac = function Carousel_Factory(t) { return new (t || Carousel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Carousel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Carousel, selectors: [["p-carousel"]], contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Carousel_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemsContainer = _t.first);
    } }, inputs: { orientation: "orientation", verticalViewPortHeight: "verticalViewPortHeight", contentClass: "contentClass", indicatorsContentClass: "indicatorsContentClass", circular: "circular", autoplayInterval: "autoplayInterval", page: "page", numVisible: "numVisible", numScroll: "numScroll", value: "value", responsiveOptions: "responsiveOptions", style: "style", styleClass: "styleClass" }, outputs: { onPage: "onPage" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c12, decls: 17, vars: 39, consts: [[3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-carousel-items-content", 3, "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend", "touchend", "touchstart", "touchmove"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "p-link", 3, "click"], [1, "p-carousel-footer"]], template: function Carousel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c5);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Carousel_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵlistener("click", function Carousel_Template_button_click_4_listener($event) { return ctx.navBackward($event); });
        ɵngcc0.ɵɵelement(5, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6, 7);
        ɵngcc0.ɵɵlistener("transitionend", function Carousel_Template_div_transitionend_7_listener() { return ctx.onTransitionEnd(); })("touchend", function Carousel_Template_div_touchend_7_listener($event) { return ctx.onTouchEnd($event); })("touchstart", function Carousel_Template_div_touchstart_7_listener($event) { return ctx.onTouchStart($event); })("touchmove", function Carousel_Template_div_touchmove_7_listener($event) { return ctx.onTouchMove($event); });
        ɵngcc0.ɵɵtemplate(9, Carousel_div_9_Template, 2, 9, "div", 8);
        ɵngcc0.ɵɵtemplate(10, Carousel_div_10_Template, 2, 9, "div", 8);
        ɵngcc0.ɵɵtemplate(11, Carousel_div_11_Template, 2, 9, "div", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "button", 4);
        ɵngcc0.ɵɵlistener("click", function Carousel_Template_button_click_12_listener($event) { return ctx.navForward($event); });
        ɵngcc0.ɵɵelement(13, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "ul", 2);
        ɵngcc0.ɵɵtemplate(15, Carousel_li_15_Template, 2, 3, "li", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(16, Carousel_div_16_Template, 3, 1, "div", 9);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(24, _c6, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
        ɵngcc0.ɵɵattribute("id", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.contentClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-carousel-content");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(27, _c7, ctx.isBackwardNavDisabled()))("disabled", ctx.isBackwardNavDisabled());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(29, _c8, !ctx.isVertical(), ctx.isVertical()));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(32, _c9, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.clonedItemsForStarting);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.clonedItemsForFinishing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(34, _c10, ctx.isForwardNavDisabled()))("disabled", ctx.isForwardNavDisabled());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(36, _c11, !ctx.isVertical(), ctx.isVertical()));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.indicatorsContentClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-carousel-indicators p-reset");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.totalDotsArray());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], styles: [".p-carousel,.p-carousel-content{display:flex;flex-direction:column}.p-carousel-content{overflow:auto}.p-carousel-next,.p-carousel-prev{-ms-grid-row-align:center;align-items:center;align-self:center;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-indicators,.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{flex-wrap:wrap;justify-content:center}.p-carousel-indicator>button{align-items:center;display:flex;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
Carousel.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
Carousel.propDecorators = {
    page: [{ type: Input }],
    numVisible: [{ type: Input }],
    numScroll: [{ type: Input }],
    responsiveOptions: [{ type: Input }],
    orientation: [{ type: Input }],
    verticalViewPortHeight: [{ type: Input }],
    contentClass: [{ type: Input }],
    indicatorsContentClass: [{ type: Input }],
    value: [{ type: Input }],
    circular: [{ type: Input }],
    autoplayInterval: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    onPage: [{ type: Output }],
    itemsContainer: [{ type: ViewChild, args: ['itemsContainer',] }],
    headerFacet: [{ type: ContentChild, args: [Header,] }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Carousel, [{
        type: Component,
        args: [{
                selector: 'p-carousel',
                template: `
		<div [attr.id]="id" [ngClass]="{'p-carousel p-component':true, 'p-carousel-vertical': isVertical(), 'p-carousel-horizontal': !isVertical()}" [ngStyle]="style" [class]="styleClass">
			<div class="p-carousel-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
			</div>
			<div [class]="contentClass" [ngClass]="'p-carousel-content'">
				<div class="p-carousel-container">
					<button type="button" [ngClass]="{'p-carousel-prev p-link':true, 'p-disabled': isBackwardNavDisabled()}" [disabled]="isBackwardNavDisabled()" (click)="navBackward($event)" pRipple>
						<span [ngClass]="{'p-carousel-prev-icon pi': true, 'pi-chevron-left': !isVertical(), 'pi-chevron-up': isVertical()}"></span>
					</button>
					<div class="p-carousel-items-content" [ngStyle]="{'height': isVertical() ? verticalViewPortHeight : 'auto'}">
						<div #itemsContainer class="p-carousel-items-container" (transitionend)="onTransitionEnd()" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)">
                            <div *ngFor="let item of clonedItemsForStarting; let index = index" [ngClass]= "{'p-carousel-item p-carousel-item-cloned': true,
                                'p-carousel-item-active': (totalShiftedItems * -1) === (value.length),
							    'p-carousel-item-start': 0 === index,
							    'p-carousel-item-end': (clonedItemsForStarting.length - 1) === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
                            <div *ngFor="let item of value; let index = index" [ngClass]= "{'p-carousel-item': true,
                                'p-carousel-item-active': (firstIndex() <= index && lastIndex() >= index),
							    'p-carousel-item-start': firstIndex() === index,
							    'p-carousel-item-end': lastIndex() === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
                            <div *ngFor="let item of clonedItemsForFinishing; let index = index" [ngClass]= "{'p-carousel-item p-carousel-item-cloned': true,
                                'p-carousel-item-active': ((totalShiftedItems *-1) === numVisible),
							    'p-carousel-item-start': 0 === index,
							    'p-carousel-item-end': (clonedItemsForFinishing.length - 1) === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
						</div>
					</div>
					<button type="button" [ngClass]="{'p-carousel-next p-link': true, 'p-disabled': isForwardNavDisabled()}" [disabled]="isForwardNavDisabled()" (click)="navForward($event)" pRipple>
						<span [ngClass]="{'p-carousel-prev-icon pi': true, 'pi-chevron-right': !isVertical(), 'pi-chevron-down': isVertical()}"></span>
					</button>
				</div>
				<ul [ngClass]="'p-carousel-indicators p-reset'" [class]="indicatorsContentClass">
					<li *ngFor="let totalDot of totalDotsArray(); let i = index" [ngClass]="{'p-carousel-indicator':true,'p-highlight': _page === i}">
						<button type="button" class="p-link" (click)="onDotClick($event, i)"></button>
					</li>
				</ul>
			</div>
			<div class="p-carousel-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
			</div>
		</div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-carousel,.p-carousel-content{display:flex;flex-direction:column}.p-carousel-content{overflow:auto}.p-carousel-next,.p-carousel-prev{-ms-grid-row-align:center;align-items:center;align-self:center;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-indicators,.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{flex-wrap:wrap;justify-content:center}.p-carousel-indicator>button{align-items:center;display:flex;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: Input
        }], verticalViewPortHeight: [{
            type: Input
        }], contentClass: [{
            type: Input
        }], indicatorsContentClass: [{
            type: Input
        }], circular: [{
            type: Input
        }], autoplayInterval: [{
            type: Input
        }], onPage: [{
            type: Output
        }], page: [{
            type: Input
        }], numVisible: [{
            type: Input
        }], numScroll: [{
            type: Input
        }], value: [{
            type: Input
        }], responsiveOptions: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], itemsContainer: [{
            type: ViewChild,
            args: ['itemsContainer']
        }], headerFacet: [{
            type: ContentChild,
            args: [Header]
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class CarouselModule {
}
CarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CarouselModule });
CarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], CommonModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CarouselModule, { declarations: function () { return [Carousel]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [CommonModule, Carousel, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [CommonModule, Carousel, SharedModule],
                declarations: [Carousel]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQyxlQUFlLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdlEsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RGxELE1BQU0sT0FBTyxRQUFRO0FBQUcsSUFrSXZCLFlBQW1CLEVBQWMsRUFBUyxJQUFZLEVBQVMsRUFBcUI7QUFBSSxRQUFyRSxPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxTQUFJLEdBQUosSUFBSSxDQUFRO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBM0Y1RSxnQkFBVyxHQUFHLFlBQVksQ0FBQztBQUNyQyxRQUNVLDJCQUFzQixHQUFHLE9BQU8sQ0FBQztBQUMzQyxRQUNVLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0FBQ3BDLFFBQ1UsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO0FBQzlDLFFBUVUsYUFBUSxHQUFXLEtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBK2hCdkMsTUFBTSxPQUFPLGNBQWM7QUFBRzswQ0FMN0IsUUFBUSxTQUFDO0lBQ1QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsa0JBQ25ELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLGtCQUMvQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDeEI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIE5nTW9kdWxlLCBOZ1pvbmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaW1lVGVtcGxhdGUsIFNoYXJlZE1vZHVsZSwgSGVhZGVyLCBGb290ZXIgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7ICBcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBVbmlxdWVDb21wb25lbnRJZCB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwLWNhcm91c2VsJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFthdHRyLmlkXT1cImlkXCIgW25nQ2xhc3NdPVwieydwLWNhcm91c2VsIHAtY29tcG9uZW50Jzp0cnVlLCAncC1jYXJvdXNlbC12ZXJ0aWNhbCc6IGlzVmVydGljYWwoKSwgJ3AtY2Fyb3VzZWwtaG9yaXpvbnRhbCc6ICFpc1ZlcnRpY2FsKCl9XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInAtY2Fyb3VzZWwtaGVhZGVyXCIgKm5nSWY9XCJoZWFkZXJGYWNldCB8fCBoZWFkZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IFtjbGFzc109XCJjb250ZW50Q2xhc3NcIiBbbmdDbGFzc109XCIncC1jYXJvdXNlbC1jb250ZW50J1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicC1jYXJvdXNlbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7J3AtY2Fyb3VzZWwtcHJldiBwLWxpbmsnOnRydWUsICdwLWRpc2FibGVkJzogaXNCYWNrd2FyZE5hdkRpc2FibGVkKCl9XCIgW2Rpc2FibGVkXT1cImlzQmFja3dhcmROYXZEaXNhYmxlZCgpXCIgKGNsaWNrKT1cIm5hdkJhY2t3YXJkKCRldmVudClcIiBwUmlwcGxlPlxuXHRcdFx0XHRcdFx0PHNwYW4gW25nQ2xhc3NdPVwieydwLWNhcm91c2VsLXByZXYtaWNvbiBwaSc6IHRydWUsICdwaS1jaGV2cm9uLWxlZnQnOiAhaXNWZXJ0aWNhbCgpLCAncGktY2hldnJvbi11cCc6IGlzVmVydGljYWwoKX1cIj48L3NwYW4+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInAtY2Fyb3VzZWwtaXRlbXMtY29udGVudFwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaXNWZXJ0aWNhbCgpID8gdmVydGljYWxWaWV3UG9ydEhlaWdodCA6ICdhdXRvJ31cIj5cblx0XHRcdFx0XHRcdDxkaXYgI2l0ZW1zQ29udGFpbmVyIGNsYXNzPVwicC1jYXJvdXNlbC1pdGVtcy1jb250YWluZXJcIiAodHJhbnNpdGlvbmVuZCk9XCJvblRyYW5zaXRpb25FbmQoKVwiICh0b3VjaGVuZCk9XCJvblRvdWNoRW5kKCRldmVudClcIiAodG91Y2hzdGFydCk9XCJvblRvdWNoU3RhcnQoJGV2ZW50KVwiICh0b3VjaG1vdmUpPVwib25Ub3VjaE1vdmUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2xvbmVkSXRlbXNGb3JTdGFydGluZzsgbGV0IGluZGV4ID0gaW5kZXhcIiBbbmdDbGFzc109IFwieydwLWNhcm91c2VsLWl0ZW0gcC1jYXJvdXNlbC1pdGVtLWNsb25lZCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWNhcm91c2VsLWl0ZW0tYWN0aXZlJzogKHRvdGFsU2hpZnRlZEl0ZW1zICogLTEpID09PSAodmFsdWUubGVuZ3RoKSxcblx0XHRcdFx0XHRcdFx0ICAgICdwLWNhcm91c2VsLWl0ZW0tc3RhcnQnOiAwID09PSBpbmRleCxcblx0XHRcdFx0XHRcdFx0ICAgICdwLWNhcm91c2VsLWl0ZW0tZW5kJzogKGNsb25lZEl0ZW1zRm9yU3RhcnRpbmcubGVuZ3RoIC0gMSkgPT09IGluZGV4fVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW19XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdmFsdWU7IGxldCBpbmRleCA9IGluZGV4XCIgW25nQ2xhc3NdPSBcInsncC1jYXJvdXNlbC1pdGVtJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3AtY2Fyb3VzZWwtaXRlbS1hY3RpdmUnOiAoZmlyc3RJbmRleCgpIDw9IGluZGV4ICYmIGxhc3RJbmRleCgpID49IGluZGV4KSxcblx0XHRcdFx0XHRcdFx0ICAgICdwLWNhcm91c2VsLWl0ZW0tc3RhcnQnOiBmaXJzdEluZGV4KCkgPT09IGluZGV4LFxuXHRcdFx0XHRcdFx0XHQgICAgJ3AtY2Fyb3VzZWwtaXRlbS1lbmQnOiBsYXN0SW5kZXgoKSA9PT0gaW5kZXh9XCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogaXRlbX1cIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjbG9uZWRJdGVtc0ZvckZpbmlzaGluZzsgbGV0IGluZGV4ID0gaW5kZXhcIiBbbmdDbGFzc109IFwieydwLWNhcm91c2VsLWl0ZW0gcC1jYXJvdXNlbC1pdGVtLWNsb25lZCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWNhcm91c2VsLWl0ZW0tYWN0aXZlJzogKCh0b3RhbFNoaWZ0ZWRJdGVtcyAqLTEpID09PSBudW1WaXNpYmxlKSxcblx0XHRcdFx0XHRcdFx0ICAgICdwLWNhcm91c2VsLWl0ZW0tc3RhcnQnOiAwID09PSBpbmRleCxcblx0XHRcdFx0XHRcdFx0ICAgICdwLWNhcm91c2VsLWl0ZW0tZW5kJzogKGNsb25lZEl0ZW1zRm9yRmluaXNoaW5nLmxlbmd0aCAtIDEpID09PSBpbmRleH1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtfVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cInsncC1jYXJvdXNlbC1uZXh0IHAtbGluayc6IHRydWUsICdwLWRpc2FibGVkJzogaXNGb3J3YXJkTmF2RGlzYWJsZWQoKX1cIiBbZGlzYWJsZWRdPVwiaXNGb3J3YXJkTmF2RGlzYWJsZWQoKVwiIChjbGljayk9XCJuYXZGb3J3YXJkKCRldmVudClcIiBwUmlwcGxlPlxuXHRcdFx0XHRcdFx0PHNwYW4gW25nQ2xhc3NdPVwieydwLWNhcm91c2VsLXByZXYtaWNvbiBwaSc6IHRydWUsICdwaS1jaGV2cm9uLXJpZ2h0JzogIWlzVmVydGljYWwoKSwgJ3BpLWNoZXZyb24tZG93bic6IGlzVmVydGljYWwoKX1cIj48L3NwYW4+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dWwgW25nQ2xhc3NdPVwiJ3AtY2Fyb3VzZWwtaW5kaWNhdG9ycyBwLXJlc2V0J1wiIFtjbGFzc109XCJpbmRpY2F0b3JzQ29udGVudENsYXNzXCI+XG5cdFx0XHRcdFx0PGxpICpuZ0Zvcj1cImxldCB0b3RhbERvdCBvZiB0b3RhbERvdHNBcnJheSgpOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwieydwLWNhcm91c2VsLWluZGljYXRvcic6dHJ1ZSwncC1oaWdobGlnaHQnOiBfcGFnZSA9PT0gaX1cIj5cblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicC1saW5rXCIgKGNsaWNrKT1cIm9uRG90Q2xpY2soJGV2ZW50LCBpKVwiPjwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwLWNhcm91c2VsLWZvb3RlclwiICpuZ0lmPVwiZm9vdGVyRmFjZXQgfHwgZm9vdGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG5cdEBJbnB1dCgpIGdldCBwYWdlKCk6bnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fcGFnZTtcblx0fVxuXHRzZXQgcGFnZSh2YWw6bnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMuaXNDcmVhdGVkICYmIHZhbCAhPT0gdGhpcy5fcGFnZSkge1xuXHRcdFx0aWYgKHRoaXMuYXV0b3BsYXlJbnRlcnZhbCkge1xuXHRcdFx0XHR0aGlzLnN0b3BBdXRvcGxheSgpO1xuXHRcdFx0XHR0aGlzLmFsbG93QXV0b3BsYXkgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhbCA+IHRoaXMuX3BhZ2UgJiYgdmFsIDw9ICh0aGlzLnRvdGFsRG90cygpIC0gMSkpIHtcblx0XHRcdFx0dGhpcy5zdGVwKC0xLCB2YWwpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAodmFsIDwgdGhpcy5fcGFnZSApIHtcblx0XHRcdFx0dGhpcy5zdGVwKDEsIHZhbCk7XG5cdFx0XHR9XG5cdFx0fSBcblxuXHRcdHRoaXMuX3BhZ2UgPSB2YWw7XG5cdH1cblx0XHRcblx0QElucHV0KCkgZ2V0IG51bVZpc2libGUoKTpudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9udW1WaXNpYmxlO1xuXHR9XG5cdHNldCBudW1WaXNpYmxlKHZhbDpudW1iZXIpIHtcblx0XHR0aGlzLl9udW1WaXNpYmxlID0gdmFsO1xuXHR9XG5cdFx0XG5cdEBJbnB1dCgpIGdldCBudW1TY3JvbGwoKTpudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9udW1WaXNpYmxlO1xuXHR9XG5cdHNldCBudW1TY3JvbGwodmFsOm51bWJlcikge1xuXHRcdHRoaXMuX251bVNjcm9sbCA9IHZhbDtcblx0fVxuXHRcblx0QElucHV0KCkgcmVzcG9uc2l2ZU9wdGlvbnM6IGFueVtdO1xuXHRcblx0QElucHV0KCkgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblx0XG5cdEBJbnB1dCgpIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQgPSBcIjMwMHB4XCI7XG5cdFxuXHRASW5wdXQoKSBjb250ZW50Q2xhc3M6IFN0cmluZyA9IFwiXCI7XG5cblx0QElucHV0KCkgaW5kaWNhdG9yc0NvbnRlbnRDbGFzczogU3RyaW5nID0gXCJcIjtcblxuXHRASW5wdXQoKSBnZXQgdmFsdWUoKSA6YW55W10ge1xuXHRcdHJldHVybiB0aGlzLl92YWx1ZTtcblx0fTtcblx0c2V0IHZhbHVlKHZhbCkge1xuXHRcdHRoaXMuX3ZhbHVlID0gdmFsO1xuXHR9XG5cdFxuXHRASW5wdXQoKSBjaXJjdWxhcjpib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KCkgYXV0b3BsYXlJbnRlcnZhbDpudW1iZXIgPSAwO1xuXG5cdEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cblx0QElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXHRcbiAgICBAT3V0cHV0KCkgb25QYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAVmlld0NoaWxkKCdpdGVtc0NvbnRhaW5lcicpIGl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG5cdEBDb250ZW50Q2hpbGQoSGVhZGVyKSBoZWFkZXJGYWNldDtcblxuICAgIEBDb250ZW50Q2hpbGQoRm9vdGVyKSBmb290ZXJGYWNldDtcblxuXHRAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cblx0X251bVZpc2libGU6IG51bWJlciA9IDE7XG5cblx0X251bVNjcm9sbDogbnVtYmVyID0gMTtcblxuXHRfb2xkTnVtU2Nyb2xsOiBudW1iZXIgPSAwO1xuXG5cdHByZXZTdGF0ZTogYW55ID0ge1xuXHRcdG51bVNjcm9sbDowLFxuXHRcdG51bVZpc2libGU6MCxcblx0XHR2YWx1ZTogW11cblx0fTtcblxuXHRkZWZhdWx0TnVtU2Nyb2xsOm51bWJlciA9IDE7XG5cblx0ZGVmYXVsdE51bVZpc2libGU6bnVtYmVyID0gMTtcblxuXHRfcGFnZTogbnVtYmVyID0gMDtcblxuXHRfdmFsdWU6IGFueVtdO1xuXG5cdGNhcm91c2VsU3R5bGU6YW55O1xuXG5cdGlkOnN0cmluZztcblxuXHR0b3RhbFNoaWZ0ZWRJdGVtcztcblxuXHRpc1JlbWFpbmluZ0l0ZW1zQWRkZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG5cdGFuaW1hdGlvblRpbWVvdXQ6YW55O1xuXG5cdHRyYW5zbGF0ZVRpbWVvdXQ6YW55O1xuXG5cdHJlbWFpbmluZ0l0ZW1zOiBudW1iZXIgPSAwO1xuXG5cdF9pdGVtczogYW55W107XG5cblx0c3RhcnRQb3M6IGFueTtcblxuXHRkb2N1bWVudFJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cblx0Y2xvbmVkSXRlbXNGb3JTdGFydGluZzogYW55W107XG5cblx0Y2xvbmVkSXRlbXNGb3JGaW5pc2hpbmc6IGFueVtdO1xuXG5cdGFsbG93QXV0b3BsYXk6IGJvb2xlYW47XG5cblx0aW50ZXJ2YWw6IGFueTtcblxuXHRpc0NyZWF0ZWQ6IGJvb2xlYW47XG5cblx0c3dpcGVUaHJlc2hvbGQ6IG51bWJlciA9IDIwO1xuXG4gICAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIFxuICAgIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Y29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IFxuXHRcdHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLnBhZ2UgKiB0aGlzLm51bVNjcm9sbCAqIC0xOyBcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChzaW1wbGVDaGFuZ2UudmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLmNpcmN1bGFyICYmIHRoaXMuX3ZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuc2V0Q2xvbmVJdGVtcygpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQ3JlYXRlZCkge1xuXHRcdFx0XG5cdFx0XHRpZiAoc2ltcGxlQ2hhbmdlLm51bVZpc2libGUpIHtcblx0XHRcdFx0aWYgKHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmRlZmF1bHROdW1WaXNpYmxlID0gdGhpcy5udW1WaXNpYmxlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuaXNDaXJjdWxhcigpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRDbG9uZUl0ZW1zKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNyZWF0ZVN0eWxlKCk7XG5cdFx0XHRcdHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNpbXBsZUNoYW5nZS5udW1TY3JvbGwpIHtcblx0XHRcdFx0aWYgKHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmRlZmF1bHROdW1TY3JvbGwgPSB0aGlzLm51bVNjcm9sbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLmlkID0gVW5pcXVlQ29tcG9uZW50SWQoKTtcblx0XHR0aGlzLmFsbG93QXV0b3BsYXkgPSAhIXRoaXMuYXV0b3BsYXlJbnRlcnZhbDtcblxuXHRcdGlmICh0aGlzLmNpcmN1bGFyKSB7XG5cdFx0XHR0aGlzLnNldENsb25lSXRlbXMoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5yZXNwb25zaXZlT3B0aW9ucykge1xuXHRcdFx0dGhpcy5kZWZhdWx0TnVtU2Nyb2xsID0gdGhpcy5fbnVtU2Nyb2xsO1xuXHRcdFx0dGhpcy5kZWZhdWx0TnVtVmlzaWJsZSA9IHRoaXMuX251bVZpc2libGU7XG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVTdHlsZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuXHRcdGlmICh0aGlzLnJlc3BvbnNpdmVPcHRpb25zKSB7XG5cdFx0XHR0aGlzLmJpbmREb2N1bWVudExpc3RlbmVycygpO1xuXHRcdH1cblxuXHRcdHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcblx0XHRcdFx0Y2FzZSAnaXRlbSc6XG5cdFx0XHRcdFx0dGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblx0XHRjb25zdCBpc0NpcmN1bGFyID0gdGhpcy5pc0NpcmN1bGFyKCk7XG5cdFx0bGV0IHRvdGFsU2hpZnRlZEl0ZW1zID0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcztcblx0XHRcblx0XHRpZiAodGhpcy52YWx1ZSAmJiB0aGlzLml0ZW1zQ29udGFpbmVyICYmICh0aGlzLnByZXZTdGF0ZS5udW1TY3JvbGwgIT09IHRoaXMuX251bVNjcm9sbCB8fCB0aGlzLnByZXZTdGF0ZS5udW1WaXNpYmxlICE9PSB0aGlzLl9udW1WaXNpYmxlIHx8IHRoaXMucHJldlN0YXRlLnZhbHVlLmxlbmd0aCAhPT0gdGhpcy52YWx1ZS5sZW5ndGgpKSB7XG5cdFx0XHRpZiAodGhpcy5hdXRvcGxheUludGVydmFsKSB7XG5cdFx0XHRcdHRoaXMuc3RvcEF1dG9wbGF5KCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMucmVtYWluaW5nSXRlbXMgPSAodGhpcy52YWx1ZS5sZW5ndGggLSB0aGlzLl9udW1WaXNpYmxlKSAlIHRoaXMuX251bVNjcm9sbDtcblxuXHRcdFx0bGV0IHBhZ2UgPSB0aGlzLl9wYWdlO1xuXHRcdFx0aWYgKHRoaXMudG90YWxEb3RzKCkgIT09IDAgJiYgcGFnZSA+PSB0aGlzLnRvdGFsRG90cygpKSB7XG4gICAgICAgICAgICAgICAgcGFnZSA9IHRoaXMudG90YWxEb3RzKCkgLSAxO1xuXHRcdFx0XHR0aGlzLl9wYWdlID0gcGFnZTtcblx0XHRcdFx0dGhpcy5vblBhZ2UuZW1pdCh7XG5cdFx0XHRcdFx0cGFnZTogdGhpcy5wYWdlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0b3RhbFNoaWZ0ZWRJdGVtcyA9IChwYWdlICogdGhpcy5fbnVtU2Nyb2xsKSAqIC0xO1xuICAgICAgICAgICAgaWYgKGlzQ2lyY3VsYXIpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyAtPSB0aGlzLl9udW1WaXNpYmxlO1xuICAgICAgICAgICAgfVxuXG5cdFx0XHRpZiAocGFnZSA9PT0gKHRoaXMudG90YWxEb3RzKCkgLSAxKSAmJiB0aGlzLnJlbWFpbmluZ0l0ZW1zID4gMCkge1xuXHRcdFx0XHR0b3RhbFNoaWZ0ZWRJdGVtcyArPSAoLTEgKiB0aGlzLnJlbWFpbmluZ0l0ZW1zKSArIHRoaXMuX251bVNjcm9sbDtcblx0XHRcdFx0dGhpcy5pc1JlbWFpbmluZ0l0ZW1zQWRkZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0b3RhbFNoaWZ0ZWRJdGVtcyAhPT0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0b3RhbFNoaWZ0ZWRJdGVtcztcbiAgICAgICAgICAgIH1cblxuXHRcdFx0dGhpcy5fb2xkTnVtU2Nyb2xsID0gdGhpcy5fbnVtU2Nyb2xsO1xuXHRcdFx0dGhpcy5wcmV2U3RhdGUubnVtU2Nyb2xsID0gdGhpcy5fbnVtU2Nyb2xsO1xuXHRcdFx0dGhpcy5wcmV2U3RhdGUubnVtVmlzaWJsZSA9IHRoaXMuX251bVZpc2libGU7XG5cdFx0XHR0aGlzLnByZXZTdGF0ZS52YWx1ZSA9IFsuLi50aGlzLl92YWx1ZV07XG5cblx0XHRcdGlmICh0aGlzLnRvdGFsRG90cygpID4gMCAgJiYgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmlzVmVydGljYWwoKSA/IGB0cmFuc2xhdGUzZCgwLCAke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5fbnVtVmlzaWJsZSl9JSwgMClgIDogYHRyYW5zbGF0ZTNkKCR7dG90YWxTaGlmdGVkSXRlbXMgKiAoMTAwLyB0aGlzLl9udW1WaXNpYmxlKX0lLCAwLCAwKWA7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMuaXNDcmVhdGVkID0gdHJ1ZTtcblxuXHRcdFx0aWYgKHRoaXMuYXV0b3BsYXlJbnRlcnZhbCAmJiB0aGlzLmlzQXV0b3BsYXkoKSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNDaXJjdWxhcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gLTEgKiB0aGlzLl9udW1WaXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG90YWxTaGlmdGVkSXRlbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IC0xICogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b3RhbFNoaWZ0ZWRJdGVtcyAhPT0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcykge1xuXHRcdFx0XHR0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zID0gdG90YWxTaGlmdGVkSXRlbXM7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlU3R5bGUoKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2Fyb3VzZWxTdHlsZSkge1xuXHRcdFx0XHR0aGlzLmNhcm91c2VsU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdFx0XHR0aGlzLmNhcm91c2VsU3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbFN0eWxlKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICMke3RoaXMuaWR9IC5wLWNhcm91c2VsLWl0ZW0ge1xuXHRcdFx0XHRmbGV4OiAxIDAgJHsgKDEwMC8gdGhpcy5udW1WaXNpYmxlKSB9JVxuXHRcdFx0fVxuICAgICAgICBgO1xuXG5cdFx0XHRpZiAodGhpcy5yZXNwb25zaXZlT3B0aW9ucykge1xuXHRcdFx0XHR0aGlzLnJlc3BvbnNpdmVPcHRpb25zLnNvcnQoKGRhdGExLCBkYXRhMikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlMSA9IGRhdGExLmJyZWFrcG9pbnQ7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUyID0gZGF0YTIuYnJlYWtwb2ludDtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblxuXHRcdFx0XHRcdGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbClcblx0XHRcdFx0XHRcdHJlc3VsdCA9IC0xO1xuXHRcdFx0XHRcdGVsc2UgaWYgKHZhbHVlMSAhPSBudWxsICYmIHZhbHVlMiA9PSBudWxsKVxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gMTtcblx0XHRcdFx0XHRlbHNlIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgPT0gbnVsbClcblx0XHRcdFx0XHRcdHJlc3VsdCA9IDA7XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSB2YWx1ZTEubG9jYWxlQ29tcGFyZSh2YWx1ZTIsIHVuZGVmaW5lZCwgeyBudW1lcmljOiB0cnVlIH0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJlc3VsdCA9ICh2YWx1ZTEgPCB2YWx1ZTIpID8gLTEgOiAodmFsdWUxID4gdmFsdWUyKSA/IDEgOiAwO1xuXG5cdFx0XHRcdFx0cmV0dXJuIC0xICogcmVzdWx0O1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgcmVzID0gdGhpcy5yZXNwb25zaXZlT3B0aW9uc1tpXTtcblxuXHRcdFx0XHRcdGlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7cmVzLmJyZWFrcG9pbnR9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjJHt0aGlzLmlkfSAucC1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgJHsgKDEwMC8gcmVzLm51bVZpc2libGUpIH0lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jYXJvdXNlbFN0eWxlLmlubmVySFRNTCA9IGlubmVySFRNTDtcblx0XHR9XG5cblx0Y2FsY3VsYXRlUG9zaXRpb24oKSB7XG5cdFx0aWYgKHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcblx0XHRcdGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0bGV0IG1hdGNoZWRSZXNwb25zaXZlRGF0YSA9IHtcblx0XHRcdFx0bnVtVmlzaWJsZTogdGhpcy5kZWZhdWx0TnVtVmlzaWJsZSxcblx0XHRcdFx0bnVtU2Nyb2xsOiB0aGlzLmRlZmF1bHROdW1TY3JvbGxcblx0XHRcdH07XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXNwb25zaXZlT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgcmVzID0gdGhpcy5yZXNwb25zaXZlT3B0aW9uc1tpXTtcblxuXHRcdFx0XHRpZiAocGFyc2VJbnQocmVzLmJyZWFrcG9pbnQsIDEwKSA+PSB3aW5kb3dXaWR0aCkge1xuXHRcdFx0XHRcdG1hdGNoZWRSZXNwb25zaXZlRGF0YSA9IHJlcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fbnVtU2Nyb2xsICE9PSBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtU2Nyb2xsKSB7XG5cdFx0XHRcdGxldCBwYWdlID0gdGhpcy5fcGFnZTtcblx0XHRcdFx0cGFnZSA9IE1hdGguZmxvb3IoKHBhZ2UgKiB0aGlzLl9udW1TY3JvbGwpIC8gbWF0Y2hlZFJlc3BvbnNpdmVEYXRhLm51bVNjcm9sbCk7XG5cblx0XHRcdFx0bGV0IHRvdGFsU2hpZnRlZEl0ZW1zID0gKG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1TY3JvbGwgKiB0aGlzLnBhZ2UpICogLTE7XG5cblx0XHRcdFx0aWYgKHRoaXMuaXNDaXJjdWxhcigpKSB7XG5cdFx0XHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgLT0gbWF0Y2hlZFJlc3BvbnNpdmVEYXRhLm51bVZpc2libGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zID0gdG90YWxTaGlmdGVkSXRlbXM7XG5cdFx0XHRcdHRoaXMuX251bVNjcm9sbCA9IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1TY3JvbGw7XG5cblx0XHRcdFx0dGhpcy5fcGFnZSA9IHBhZ2U7XG5cdFx0XHRcdHRoaXMub25QYWdlLmVtaXQoe1xuXHRcdFx0XHRcdHBhZ2U6IHRoaXMucGFnZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX251bVZpc2libGUgIT09IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1WaXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMuX251bVZpc2libGUgPSBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtVmlzaWJsZTtcblx0XHRcdFx0dGhpcy5zZXRDbG9uZUl0ZW1zKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG5cdFxuXHRzZXRDbG9uZUl0ZW1zKCkge1xuXHRcdHRoaXMuY2xvbmVkSXRlbXNGb3JTdGFydGluZyA9IFtdO1xuXHRcdHRoaXMuY2xvbmVkSXRlbXNGb3JGaW5pc2hpbmcgPSBbXTtcblx0XHRpZiAodGhpcy5pc0NpcmN1bGFyKCkpIHtcblx0XHRcdHRoaXMuY2xvbmVkSXRlbXNGb3JTdGFydGluZy5wdXNoKC4uLnRoaXMudmFsdWUuc2xpY2UoLTEgKiB0aGlzLl9udW1WaXNpYmxlKSk7XG5cdFx0XHR0aGlzLmNsb25lZEl0ZW1zRm9yRmluaXNoaW5nLnB1c2goLi4udGhpcy52YWx1ZS5zbGljZSgwLCB0aGlzLl9udW1WaXNpYmxlKSk7XG5cdFx0fVxuXHR9XG5cblx0Zmlyc3RJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pc0NpcmN1bGFyKCkgPyAoLTEgKiAodGhpcy50b3RhbFNoaWZ0ZWRJdGVtcyArIHRoaXMubnVtVmlzaWJsZSkpIDogKHRoaXMudG90YWxTaGlmdGVkSXRlbXMgKiAtMSk7XG5cdH1cblxuXHRsYXN0SW5kZXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmlyc3RJbmRleCgpICsgdGhpcy5udW1WaXNpYmxlIC0gMTtcblx0fVxuXG5cdHRvdGFsRG90cygpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZSA/IE1hdGguY2VpbCgodGhpcy52YWx1ZS5sZW5ndGggLSB0aGlzLl9udW1WaXNpYmxlKSAvIHRoaXMuX251bVNjcm9sbCkgKyAxIDogMDtcblx0fVxuXG5cdHRvdGFsRG90c0FycmF5KCkge1xuXHRcdGNvbnN0IHRvdGFsRG90cyA9IHRoaXMudG90YWxEb3RzKCk7XG5cdFx0cmV0dXJuIHRvdGFsRG90cyA8PSAwID8gW10gOiBBcnJheSh0b3RhbERvdHMpLmZpbGwoMCk7XG5cdH1cblxuXHRpc1ZlcnRpY2FsKCkge1xuXHRcdHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuXHR9XG5cblx0aXNDaXJjdWxhcigpIHtcblx0XHRyZXR1cm4gdGhpcy5jaXJjdWxhciAmJiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID49IHRoaXMubnVtVmlzaWJsZTtcblx0fVxuXG5cdGlzQXV0b3BsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXV0b3BsYXlJbnRlcnZhbCAmJiB0aGlzLmFsbG93QXV0b3BsYXk7XG5cdH1cblxuXHRpc0ZvcndhcmROYXZEaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pc0VtcHR5KCkgfHwgKHRoaXMuX3BhZ2UgPj0gKHRoaXMudG90YWxEb3RzKCkgLSAxKSAmJiAhdGhpcy5pc0NpcmN1bGFyKCkpO1xuXHR9XG5cblx0aXNCYWNrd2FyZE5hdkRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmlzRW1wdHkoKSB8fCAodGhpcy5fcGFnZSA8PSAwICAmJiAhdGhpcy5pc0NpcmN1bGFyKCkpO1xuXHR9XG5cblx0aXNFbXB0eSgpIHtcblx0XHRyZXR1cm4gIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPT09IDA7XG5cdH1cblxuXHRuYXZGb3J3YXJkKGUsaW5kZXg/KSB7XG5cdFx0aWYgKHRoaXMuaXNDaXJjdWxhcigpIHx8IHRoaXMuX3BhZ2UgPCAodGhpcy50b3RhbERvdHMoKSAtIDEpKSB7XG5cdFx0XHR0aGlzLnN0ZXAoLTEsIGluZGV4KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hdXRvcGxheUludGVydmFsKSB7XG5cdFx0XHR0aGlzLnN0b3BBdXRvcGxheSgpO1xuXHRcdFx0dGhpcy5hbGxvd0F1dG9wbGF5ID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGUgJiYgZS5jYW5jZWxhYmxlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9XG5cblx0bmF2QmFja3dhcmQoZSxpbmRleD8pIHtcblx0XHRpZiAodGhpcy5pc0NpcmN1bGFyKCkgfHwgdGhpcy5fcGFnZSAhPT0gMCkge1xuXHRcdFx0dGhpcy5zdGVwKDEsIGluZGV4KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hdXRvcGxheUludGVydmFsKSB7XG5cdFx0XHR0aGlzLnN0b3BBdXRvcGxheSgpO1xuXHRcdFx0dGhpcy5hbGxvd0F1dG9wbGF5ID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdGlmIChlICYmIGUuY2FuY2VsYWJsZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fVxuXG5cdG9uRG90Q2xpY2soZSwgaW5kZXgpIHtcblx0XHRsZXQgcGFnZSA9IHRoaXMuX3BhZ2U7XG5cblx0XHRpZiAodGhpcy5hdXRvcGxheUludGVydmFsKSB7XG5cdFx0XHR0aGlzLnN0b3BBdXRvcGxheSgpO1xuXHRcdFx0dGhpcy5hbGxvd0F1dG9wbGF5ID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdGlmIChpbmRleCA+IHBhZ2UpIHtcblx0XHRcdHRoaXMubmF2Rm9yd2FyZChlLCBpbmRleCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGluZGV4IDwgcGFnZSkge1xuXHRcdFx0dGhpcy5uYXZCYWNrd2FyZChlLCBpbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0c3RlcChkaXIsIHBhZ2UpIHtcblx0XHRsZXQgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zO1xuXHRcdGNvbnN0IGlzQ2lyY3VsYXIgPSB0aGlzLmlzQ2lyY3VsYXIoKTtcblxuXHRcdGlmIChwYWdlICE9IG51bGwpIHtcblx0XHRcdHRvdGFsU2hpZnRlZEl0ZW1zID0gKHRoaXMuX251bVNjcm9sbCAqIHBhZ2UpICogLTE7XG5cblx0XHRcdGlmIChpc0NpcmN1bGFyKSB7XG5cdFx0XHRcdHRvdGFsU2hpZnRlZEl0ZW1zIC09IHRoaXMuX251bVZpc2libGU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgKz0gKHRoaXMuX251bVNjcm9sbCAqIGRpcik7XG5cdFx0XHRpZiAodGhpcy5pc1JlbWFpbmluZ0l0ZW1zQWRkZWQpIHtcblx0XHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgKz0gdGhpcy5yZW1haW5pbmdJdGVtcyAtICh0aGlzLl9udW1TY3JvbGwgKiBkaXIpO1xuXHRcdFx0XHR0aGlzLmlzUmVtYWluaW5nSXRlbXNBZGRlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb3JpZ2luYWxTaGlmdGVkSXRlbXMgPSBpc0NpcmN1bGFyID8gKHRvdGFsU2hpZnRlZEl0ZW1zICsgdGhpcy5fbnVtVmlzaWJsZSkgOiB0b3RhbFNoaWZ0ZWRJdGVtcztcblx0XHRcdHBhZ2UgPSBNYXRoLmFicyhNYXRoLmZsb29yKChvcmlnaW5hbFNoaWZ0ZWRJdGVtcyAvIHRoaXMuX251bVNjcm9sbCkpKTtcblx0XHR9XG5cblx0XHRpZiAoaXNDaXJjdWxhciAmJiB0aGlzLnBhZ2UgPT09ICh0aGlzLnRvdGFsRG90cygpIC0gMSkgJiYgZGlyID09PSAtMSkge1xuXHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgPSAtMSAqICh0aGlzLnZhbHVlLmxlbmd0aCArIHRoaXMuX251bVZpc2libGUpO1xuXHRcdFx0cGFnZSA9IDA7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGlzQ2lyY3VsYXIgJiYgdGhpcy5wYWdlID09PSAwICYmIGRpciA9PT0gMSkge1xuXHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgPSAwO1xuXHRcdFx0cGFnZSA9ICh0aGlzLnRvdGFsRG90cygpIC0gMSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHBhZ2UgPT09ICh0aGlzLnRvdGFsRG90cygpIC0gMSkgJiYgdGhpcy5yZW1haW5pbmdJdGVtcyA+IDApIHtcblx0XHRcdHRvdGFsU2hpZnRlZEl0ZW1zICs9ICgodGhpcy5yZW1haW5pbmdJdGVtcyAqIC0xKSAtICh0aGlzLl9udW1TY3JvbGwgKiBkaXIpKTtcblx0XHRcdHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pdGVtc0NvbnRhaW5lcikge1xuXHRcdFx0dGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gYHRyYW5zbGF0ZTNkKDAsICR7dG90YWxTaGlmdGVkSXRlbXMgKiAoMTAwLyB0aGlzLl9udW1WaXNpYmxlKX0lLCAwKWAgOiBgdHJhbnNsYXRlM2QoJHt0b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuX251bVZpc2libGUpfSUsIDAsIDApYDtcblx0XHRcdHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSA1MDBtcyBlYXNlIDBzJztcblx0XHR9XG5cblx0XHR0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zID0gdG90YWxTaGlmdGVkSXRlbXM7XG5cdFx0dGhpcy5fcGFnZSA9IHBhZ2U7XG5cdFx0dGhpcy5vblBhZ2UuZW1pdCh7XG5cdFx0XHRwYWdlOiB0aGlzLnBhZ2Vcblx0XHR9KTtcblx0fVxuXG5cdHN0YXJ0QXV0b3BsYXkoKSB7XG5cdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLnRvdGFsRG90cygpID4gMCkge1xuXHRcdFx0XHRpZiAodGhpcy5wYWdlID09PSAodGhpcy50b3RhbERvdHMoKSAtIDEpKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGVwKC0xLCAwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnN0ZXAoLTEsIHRoaXMucGFnZSArIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSwgXG5cdFx0dGhpcy5hdXRvcGxheUludGVydmFsKTtcblx0fVxuXG5cdHN0b3BBdXRvcGxheSgpIHtcblx0XHRpZiAodGhpcy5pbnRlcnZhbCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcblx0XHR9XG5cdH1cblxuXHRvblRyYW5zaXRpb25FbmQoKSB7XG5cdFx0aWYgKHRoaXMuaXRlbXNDb250YWluZXIpIHtcblx0XHRcdHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cblx0XHRcdGlmICgodGhpcy5wYWdlID09PSAwIHx8IHRoaXMucGFnZSA9PT0gKHRoaXMudG90YWxEb3RzKCkgLSAxKSkgJiYgdGhpcy5pc0NpcmN1bGFyKCkpIHtcblx0XHRcdFx0dGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy50b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuX251bVZpc2libGUpfSUsIDApYCA6IGB0cmFuc2xhdGUzZCgke3RoaXMudG90YWxTaGlmdGVkSXRlbXMgKiAoMTAwLyB0aGlzLl9udW1WaXNpYmxlKX0lLCAwLCAwKWA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25Ub3VjaFN0YXJ0KGUpIHtcblx0XHRsZXQgdG91Y2hvYmogPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0dGhpcy5zdGFydFBvcyA9IHtcblx0XHRcdHg6IHRvdWNob2JqLnBhZ2VYLFxuXHRcdFx0eTogdG91Y2hvYmoucGFnZVlcblx0XHR9O1xuXHR9XG5cblx0b25Ub3VjaE1vdmUoZSkge1xuXHRcdGlmIChlLmNhbmNlbGFibGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH1cblx0b25Ub3VjaEVuZChlKSB7XG5cdFx0bGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdGlmICh0aGlzLmlzVmVydGljYWwoKSkge1xuXHRcdFx0dGhpcy5jaGFuZ2VQYWdlT25Ub3VjaChlLCAodG91Y2hvYmoucGFnZVkgLSB0aGlzLnN0YXJ0UG9zLnkpKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmNoYW5nZVBhZ2VPblRvdWNoKGUsICh0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhcnRQb3MueCkpO1xuXHRcdH1cblx0fVxuXG5cdGNoYW5nZVBhZ2VPblRvdWNoKGUsIGRpZmYpIHtcblx0XHRpZiAoTWF0aC5hYnMoZGlmZikgPiB0aGlzLnN3aXBlVGhyZXNob2xkKSB7XG5cdFx0XHRpZiAoZGlmZiA8IDApIHtcblx0XHRcdFx0dGhpcy5uYXZGb3J3YXJkKGUpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMubmF2QmFja3dhcmQoZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRiaW5kRG9jdW1lbnRMaXN0ZW5lcnMoKSB7XG5cdFx0aWYgKCF0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpIHtcblx0XHRcdHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IChlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKTtcblx0XHRcdH07XG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpO1xuXHRcdH1cblx0fVxuXG5cdHVuYmluZERvY3VtZW50TGlzdGVuZXJzKCkge1xuXHRcdGlmICh0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpO1xuXHRcdFx0dGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5yZXNwb25zaXZlT3B0aW9ucykge1xuXHRcdFx0dGhpcy51bmJpbmREb2N1bWVudExpc3RlbmVycygpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5hdXRvcGxheUludGVydmFsKSB7XG5cdFx0XHR0aGlzLnN0b3BBdXRvcGxheSgpO1xuXHRcdH1cbiAgICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBSaXBwbGVNb2R1bGVdLFxuXHRleHBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDYXJvdXNlbCwgU2hhcmVkTW9kdWxlXSxcblx0ZGVjbGFyYXRpb25zOiBbQ2Fyb3VzZWxdXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsTW9kdWxlIHsgfVxuIl19