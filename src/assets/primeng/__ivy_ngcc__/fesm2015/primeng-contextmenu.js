import { EventEmitter, Component, ViewEncapsulation, Inject, forwardRef, Input, Output, ViewChild, ChangeDetectionStrategy, ElementRef, Renderer2, ChangeDetectorRef, NgZone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { ContextMenuService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from '@angular/router';
import * as ɵngcc4 from 'primeng/api';

const _c0 = ["sublist"];
const _c1 = ["menuitem"];
const _c2 = function (a0) { return { "p-hidden": a0 }; };
function ContextMenuSub_ng_template_2_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 5, 6);
} if (rf & 2) {
    const child_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c2, child_r2.visible === false));
} }
function ContextMenuSub_ng_template_2_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} if (rf & 2) {
    const child_r2 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r2.icon);
} }
function ContextMenuSub_ng_template_2_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 17);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r2 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r2.label);
} }
function ContextMenuSub_ng_template_2_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} if (rf & 2) {
    const child_r2 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r2.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function ContextMenuSub_ng_template_2_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 19);
} }
const _c3 = function (a1) { return { "p-menuitem-link": true, "p-disabled": a1 }; };
function ContextMenuSub_ng_template_2_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 11);
    ɵngcc0.ɵɵlistener("click", function ContextMenuSub_ng_template_2_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); ɵngcc0.ɵɵnextContext(); const _r8 = ɵngcc0.ɵɵreference(1); const ctx_r22 = ɵngcc0.ɵɵnextContext(); const child_r2 = ctx_r22.$implicit; const index_r3 = ctx_r22.index; const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onItemClick($event, child_r2, _r8, ctx_r20.getKey(index_r3)); });
    ɵngcc0.ɵɵtemplate(1, ContextMenuSub_ng_template_2_li_1_a_2_span_1_Template, 1, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(2, ContextMenuSub_ng_template_2_li_1_a_2_span_2_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(3, ContextMenuSub_ng_template_2_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 14, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, ContextMenuSub_ng_template_2_li_1_a_2_span_5_Template, 1, 0, "span", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r14 = ɵngcc0.ɵɵreference(4);
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    const child_r2 = ctx_r23.$implicit;
    const index_r3 = ctx_r23.index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c3, child_r2.disabled));
    ɵngcc0.ɵɵattribute("href", child_r2.url ? child_r2.url : null, ɵngcc0.ɵɵsanitizeUrl)("target", child_r2.target)("title", child_r2.title)("id", child_r2.id)("tabindex", child_r2.disabled ? null : "0")("aria-haspopup", ctx_r9.item.items != null)("aria-expanded", ctx_r9.isActive(ctx_r9.getKey(index_r3)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.escape !== false)("ngIfElse", _r14);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.items);
} }
function ContextMenuSub_ng_template_2_li_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} if (rf & 2) {
    const child_r2 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r2.icon);
} }
function ContextMenuSub_ng_template_2_li_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 17);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r2 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r2.label);
} }
function ContextMenuSub_ng_template_2_li_1_a_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} if (rf & 2) {
    const child_r2 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r2.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function ContextMenuSub_ng_template_2_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 19);
} }
const _c4 = function () { return { exact: false }; };
function ContextMenuSub_ng_template_2_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 20);
    ɵngcc0.ɵɵlistener("click", function ContextMenuSub_ng_template_2_li_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); ɵngcc0.ɵɵnextContext(); const _r8 = ɵngcc0.ɵɵreference(1); const ctx_r34 = ɵngcc0.ɵɵnextContext(); const child_r2 = ctx_r34.$implicit; const index_r3 = ctx_r34.index; const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onItemClick($event, child_r2, _r8, ctx_r32.getKey(index_r3)); });
    ɵngcc0.ɵɵtemplate(1, ContextMenuSub_ng_template_2_li_1_a_3_span_1_Template, 1, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(2, ContextMenuSub_ng_template_2_li_1_a_3_span_2_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(3, ContextMenuSub_ng_template_2_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 21, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, ContextMenuSub_ng_template_2_li_1_a_3_span_5_Template, 1, 0, "span", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r26 = ɵngcc0.ɵɵreference(4);
    const child_r2 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("routerLink", child_r2.routerLink)("queryParams", child_r2.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r2.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(19, _c4))("ngClass", ɵngcc0.ɵɵpureFunction1(20, _c3, child_r2.disabled))("fragment", child_r2.fragment)("queryParamsHandling", child_r2.queryParamsHandling)("preserveFragment", child_r2.preserveFragment)("skipLocationChange", child_r2.skipLocationChange)("replaceUrl", child_r2.replaceUrl)("state", child_r2.state);
    ɵngcc0.ɵɵattribute("target", child_r2.target)("title", child_r2.title)("id", child_r2.id)("tabindex", child_r2.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.escape !== false)("ngIfElse", _r26);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.items);
} }
function ContextMenuSub_ng_template_2_li_1_p_contextMenuSub_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-contextMenuSub", 22);
    ɵngcc0.ɵɵlistener("leafClick", function ContextMenuSub_ng_template_2_li_1_p_contextMenuSub_4_Template_p_contextMenuSub_leafClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(3); return ctx_r36.onLeafClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵngcc0.ɵɵnextContext(2);
    const index_r3 = ctx_r38.index;
    const child_r2 = ctx_r38.$implicit;
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("parentItemKey", ctx_r11.getKey(index_r3))("item", child_r2);
} }
const _c5 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function ContextMenuSub_ng_template_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 7, 6);
    ɵngcc0.ɵɵlistener("mouseenter", function ContextMenuSub_ng_template_2_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r41 = ɵngcc0.ɵɵnextContext(); const child_r2 = ctx_r41.$implicit; const index_r3 = ctx_r41.index; const ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.onItemMouseEnter($event, child_r2, ctx_r39.getKey(index_r3)); })("mouseleave", function ContextMenuSub_ng_template_2_li_1_Template_li_mouseleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); const child_r2 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r42 = ɵngcc0.ɵɵnextContext(); return ctx_r42.onItemMouseLeave($event, child_r2); });
    ɵngcc0.ɵɵtemplate(2, ContextMenuSub_ng_template_2_li_1_a_2_Template, 6, 14, "a", 8);
    ɵngcc0.ɵɵtemplate(3, ContextMenuSub_ng_template_2_li_1_a_3_Template, 6, 22, "a", 9);
    ɵngcc0.ɵɵtemplate(4, ContextMenuSub_ng_template_2_li_1_p_contextMenuSub_4_Template, 1, 2, "p-contextMenuSub", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r44 = ɵngcc0.ɵɵnextContext();
    const child_r2 = ctx_r44.$implicit;
    const index_r3 = ctx_r44.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(child_r2.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c5, ctx_r5.isActive(ctx_r5.getKey(index_r3)), child_r2.visible === false))("ngStyle", child_r2.style);
    ɵngcc0.ɵɵattribute("data-ik", ctx_r5.getKey(index_r3));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !child_r2.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r2.items);
} }
function ContextMenuSub_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ContextMenuSub_ng_template_2_li_0_Template, 2, 3, "li", 3);
    ɵngcc0.ɵɵtemplate(1, ContextMenuSub_ng_template_2_li_1_Template, 5, 11, "li", 4);
} if (rf & 2) {
    const child_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r2.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r2.separator);
} }
const _c6 = function (a0) { return { "p-submenu-list": a0 }; };
const _c7 = ["container"];
class ContextMenuSub {
    constructor(contextMenu) {
        this.leafClick = new EventEmitter();
        this.contextMenu = contextMenu;
    }
    ngOnInit() {
        this.activeItemKeyChangeSubscription = this.contextMenu.contextMenuService.activeItemKeyChange$.pipe(takeUntil(this.contextMenu.ngDestroy$)).subscribe((activeItemKey) => {
            this.activeItemKey = activeItemKey;
            if (this.isActive(this.parentItemKey) && DomHandler.hasClass(this.sublistViewChild.nativeElement, 'p-submenu-list-active')) {
                this.contextMenu.positionSubmenu(this.sublistViewChild.nativeElement);
            }
            this.contextMenu.cd.markForCheck();
        });
    }
    onItemMouseEnter(event, item, key) {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        if (item.disabled) {
            return;
        }
        if (item.items) {
            let childSublist = DomHandler.findSingle(event.currentTarget, '.p-submenu-list');
            DomHandler.addClass(childSublist, 'p-submenu-list-active');
        }
        this.contextMenu.contextMenuService.changeKey(key);
    }
    onItemMouseLeave(event, item) {
        if (item.disabled) {
            return;
        }
        if (this.contextMenu.el.nativeElement.contains(event.toElement)) {
            if (item.items) {
                this.contextMenu.removeActiveFromSubLists(event.currentTarget);
            }
            if (!this.root) {
                this.contextMenu.contextMenuService.changeKey(this.parentItemKey);
            }
        }
    }
    onItemClick(event, item, menuitem, key) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url && !item.routerLink) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        if (item.items) {
            let childSublist = DomHandler.findSingle(menuitem, '.p-submenu-list');
            if (childSublist) {
                if (this.isActive(key) && DomHandler.hasClass(childSublist, 'p-submenu-list-active')) {
                    this.contextMenu.removeActiveFromSubLists(menuitem);
                }
                else {
                    DomHandler.addClass(childSublist, 'p-submenu-list-active');
                }
                this.contextMenu.contextMenuService.changeKey(key);
            }
        }
        if (!item.items) {
            this.onLeafClick();
        }
    }
    onLeafClick() {
        if (this.root) {
            this.contextMenu.hide();
        }
        this.leafClick.emit();
    }
    getKey(index) {
        return this.root ? String(index) : this.parentItemKey + '_' + index;
    }
    isActive(key) {
        return (this.activeItemKey && (this.activeItemKey.startsWith(key + '_') || this.activeItemKey === key));
    }
}
ContextMenuSub.ɵfac = function ContextMenuSub_Factory(t) { return new (t || ContextMenuSub)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => ContextMenu))); };
ContextMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContextMenuSub, selectors: [["p-contextMenuSub"]], viewQuery: function ContextMenuSub_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sublistViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menuitemViewChild = _t.first);
    } }, inputs: { item: "item", root: "root", parentItemKey: "parentItemKey" }, outputs: { leafClick: "leafClick" }, decls: 3, vars: 4, consts: [[3, "ngClass"], ["sublist", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["role", "none", 3, "ngClass", "ngStyle", "class", "mouseenter", "mouseleave", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator", 3, "ngClass"], ["menuitem", ""], ["role", "none", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], ["pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "parentItemKey", "item", "leafClick", 4, "ngIf"], ["pRipple", "", 3, "ngClass", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-submenu-icon pi pi-angle-right", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-submenu-icon", "pi", "pi-angle-right"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "parentItemKey", "item", "leafClick"]], template: function ContextMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0, 1);
        ɵngcc0.ɵɵtemplate(2, ContextMenuSub_ng_template_2_Template, 2, 2, "ng-template", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c6, !ctx.root));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.root ? ctx.item : ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc2.Ripple, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive, ContextMenuSub], encapsulation: 2 });
ContextMenuSub.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => ContextMenu),] }] }
];
ContextMenuSub.propDecorators = {
    item: [{ type: Input }],
    root: [{ type: Input }],
    parentItemKey: [{ type: Input }],
    leafClick: [{ type: Output }],
    sublistViewChild: [{ type: ViewChild, args: ['sublist',] }],
    menuitemViewChild: [{ type: ViewChild, args: ['menuitem',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenuSub, [{
        type: Component,
        args: [{
                selector: 'p-contextMenuSub',
                template: `
        <ul #sublist [ngClass]="{'p-submenu-list':!root}">
            <ng-template ngFor let-child let-index="index" [ngForOf]="(root ? item : item.items)">
                <li *ngIf="child.separator" #menuitem class="p-menu-separator" [ngClass]="{'p-hidden': child.visible === false}" role="separator">
                <li *ngIf="!child.separator" #menuitem [ngClass]="{'p-menuitem':true,'p-menuitem-active': isActive(getKey(index)),'p-hidden': child.visible === false}" [ngStyle]="child.style" [class]="child.styleClass"
                    (mouseenter)="onItemMouseEnter($event,child,getKey(index))" (mouseleave)="onItemMouseLeave($event,child)" role="none" [attr.data-ik]="getKey(index)">
                    <a *ngIf="!child.routerLink" [attr.href]="child.url ? child.url : null" [attr.target]="child.target" [attr.title]="child.title" [attr.id]="child.id" 
                        [attr.tabindex]="child.disabled ? null : '0'" (click)="onItemClick($event, child, menuitem, getKey(index))" [ngClass]="{'p-menuitem-link':true,'p-disabled':child.disabled}" pRipple
                        [attr.aria-haspopup]="item.items != null" [attr.aria-expanded]="isActive(getKey(index))">
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{child.label}}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-submenu-icon pi pi-angle-right" *ngIf="child.items"></span>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [queryParams]="child.queryParams" [routerLinkActive]="'p-menuitem-link-active'" role="menuitem"
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" [attr.target]="child.target" [attr.title]="child.title" [attr.id]="child.id" [attr.tabindex]="child.disabled ? null : '0'"
                        (click)="onItemClick($event, child, menuitem, getKey(index))" [ngClass]="{'p-menuitem-link':true,'p-disabled':child.disabled}"
                         pRipple [fragment]="child.fragment" [queryParamsHandling]="child.queryParamsHandling" [preserveFragment]="child.preserveFragment" [skipLocationChange]="child.skipLocationChange" [replaceUrl]="child.replaceUrl" [state]="child.state">
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{child.label}}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-submenu-icon pi pi-angle-right" *ngIf="child.items"></span>
                    </a>
                    <p-contextMenuSub [parentItemKey]="getKey(index)" [item]="child" *ngIf="child.items" (leafClick)="onLeafClick()"></p-contextMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => ContextMenu)]
            }] }]; }, { leafClick: [{
            type: Output
        }], item: [{
            type: Input
        }], root: [{
            type: Input
        }], parentItemKey: [{
            type: Input
        }], sublistViewChild: [{
            type: ViewChild,
            args: ['sublist']
        }], menuitemViewChild: [{
            type: ViewChild,
            args: ['menuitem']
        }] }); })();
class ContextMenu {
    constructor(el, renderer, cd, zone, contextMenuService) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.contextMenuService = contextMenuService;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.triggerEvent = 'contextmenu';
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.ngDestroy$ = new Subject();
    }
    ngAfterViewInit() {
        if (this.global) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.triggerEventListener = this.renderer.listen(documentTarget, this.triggerEvent, (event) => {
                this.show(event);
                event.preventDefault();
            });
        }
        else if (this.target) {
            this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, (event) => {
                this.show(event);
                event.preventDefault();
                event.stopPropagation();
            });
        }
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.containerViewChild.nativeElement);
            else
                DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
        }
    }
    show(event) {
        this.clearActiveItem();
        this.position(event);
        this.moveOnTop();
        this.containerViewChild.nativeElement.style.display = 'block';
        DomHandler.fadeIn(this.containerViewChild.nativeElement, 250);
        this.bindGlobalListeners();
        if (event) {
            event.preventDefault();
        }
        this.onShow.emit();
    }
    hide() {
        this.containerViewChild.nativeElement.style.display = 'none';
        this.unbindGlobalListeners();
        this.onHide.emit();
    }
    moveOnTop() {
        if (this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
        }
    }
    toggle(event) {
        if (this.containerViewChild.nativeElement.offsetParent)
            this.hide();
        else
            this.show(event);
    }
    position(event) {
        if (event) {
            let left = event.pageX + 1;
            let top = event.pageY + 1;
            let width = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.containerViewChild.nativeElement);
            let height = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.containerViewChild.nativeElement);
            let viewport = DomHandler.getViewport();
            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }
            //flip
            if (top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }
            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }
            //fit
            if (top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }
            this.containerViewChild.nativeElement.style.left = left + 'px';
            this.containerViewChild.nativeElement.style.top = top + 'px';
        }
    }
    positionSubmenu(sublist) {
        let parentMenuItem = sublist.parentElement.parentElement;
        let viewport = DomHandler.getViewport();
        let sublistWidth = sublist.offsetParent ? sublist.offsetWidth : DomHandler.getHiddenElementOuterWidth(sublist);
        let sublistHeight = sublist.offsetHeight ? sublist.offsetHeight : DomHandler.getHiddenElementOuterHeight(sublist);
        let itemOuterWidth = DomHandler.getOuterWidth(parentMenuItem.children[0]);
        let itemOuterHeight = DomHandler.getOuterHeight(parentMenuItem.children[0]);
        let containerOffset = DomHandler.getOffset(parentMenuItem.parentElement);
        sublist.style.zIndex = ++DomHandler.zindex;
        if ((parseInt(containerOffset.top) + itemOuterHeight + sublistHeight) > (viewport.height - DomHandler.calculateScrollbarHeight())) {
            sublist.style.removeProperty('top');
            sublist.style.bottom = '0px';
        }
        else {
            sublist.style.removeProperty('bottom');
            sublist.style.top = '0px';
        }
        if ((parseInt(containerOffset.left) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
            sublist.style.left = -sublistWidth + 'px';
        }
        else {
            sublist.style.left = itemOuterWidth + 'px';
        }
    }
    isItemMatched(menuitem) {
        return DomHandler.hasClass(menuitem, 'p-menuitem') && !DomHandler.hasClass(menuitem.children[0], 'p-disabled');
    }
    findNextItem(menuitem, isRepeated) {
        let nextMenuitem = menuitem.nextElementSibling;
        if (nextMenuitem) {
            return this.isItemMatched(nextMenuitem) ? nextMenuitem : this.findNextItem(nextMenuitem, isRepeated);
        }
        else {
            let firstItem = menuitem.parentElement.children[0];
            return this.isItemMatched(firstItem) ? firstItem : (!isRepeated ? this.findNextItem(firstItem, true) : null);
        }
    }
    findPrevItem(menuitem, isRepeated) {
        let prevMenuitem = menuitem.previousElementSibling;
        if (prevMenuitem) {
            return this.isItemMatched(prevMenuitem) ? prevMenuitem : this.findPrevItem(prevMenuitem, isRepeated);
        }
        else {
            let lastItem = menuitem.parentElement.children[menuitem.parentElement.children.length - 1];
            return this.isItemMatched(lastItem) ? lastItem : (!isRepeated ? this.findPrevItem(lastItem, true) : null);
        }
    }
    getActiveItem() {
        let activeItemKey = this.contextMenuService.activeItemKey;
        return activeItemKey == null ? null : DomHandler.findSingle(this.containerViewChild.nativeElement, '.p-menuitem[data-ik="' + activeItemKey + '"]');
    }
    clearActiveItem() {
        if (this.contextMenuService.activeItemKey) {
            this.removeActiveFromSubLists(this.containerViewChild.nativeElement);
            this.contextMenuService.reset();
        }
    }
    removeActiveFromSubLists(el) {
        let sublists = DomHandler.find(el, '.p-submenu-list-active');
        for (let sublist of sublists) {
            DomHandler.removeClass(sublist, 'p-submenu-list-active');
        }
    }
    removeActiveFromSublist(menuitem) {
        if (menuitem) {
            let sublist = DomHandler.findSingle(menuitem, '.p-submenu-list');
            if (sublist && DomHandler.hasClass(menuitem, 'p-submenu-list-active')) {
                DomHandler.removeClass(menuitem, 'p-submenu-list-active');
            }
        }
    }
    bindGlobalListeners() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (this.containerViewChild.nativeElement.offsetParent && this.isOutsideClicked(event) && !event.ctrlKey && event.button !== 2) {
                    this.hide();
                }
            });
        }
        this.zone.runOutsideAngular(() => {
            if (!this.windowResizeListener) {
                this.windowResizeListener = this.onWindowResize.bind(this);
                window.addEventListener('resize', this.windowResizeListener);
            }
        });
        if (!this.documentKeydownListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentKeydownListener = this.renderer.listen(documentTarget, 'keydown', (event) => {
                let activeItem = this.getActiveItem();
                switch (event.key) {
                    case 'ArrowDown':
                        if (activeItem) {
                            this.removeActiveFromSublist(activeItem);
                            activeItem = this.findNextItem(activeItem);
                        }
                        else {
                            let firstItem = DomHandler.findSingle(this.containerViewChild.nativeElement, '.p-menuitem-link').parentElement;
                            activeItem = this.isItemMatched(firstItem) ? firstItem : this.findNextItem(firstItem);
                        }
                        if (activeItem) {
                            this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
                        }
                        event.preventDefault();
                        break;
                    case 'ArrowUp':
                        if (activeItem) {
                            this.removeActiveFromSublist(activeItem);
                            activeItem = this.findPrevItem(activeItem);
                        }
                        else {
                            let sublist = DomHandler.findSingle(this.containerViewChild.nativeElement, 'ul');
                            let lastItem = sublist.children[sublist.children.length - 1];
                            activeItem = this.isItemMatched(lastItem) ? lastItem : this.findPrevItem(lastItem);
                        }
                        if (activeItem) {
                            this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
                        }
                        event.preventDefault();
                        break;
                    case 'ArrowRight':
                        if (activeItem) {
                            let sublist = DomHandler.findSingle(activeItem, '.p-submenu-list');
                            if (sublist) {
                                DomHandler.addClass(sublist, 'p-submenu-list-active');
                                activeItem = DomHandler.findSingle(sublist, '.p-menuitem-link:not(.p-disabled)').parentElement;
                                if (activeItem) {
                                    this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
                                }
                            }
                        }
                        event.preventDefault();
                        break;
                    case 'ArrowLeft':
                        if (activeItem) {
                            let sublist = activeItem.parentElement;
                            if (sublist && DomHandler.hasClass(sublist, 'p-submenu-list-active')) {
                                DomHandler.removeClass(sublist, 'p-submenu-list-active');
                                activeItem = sublist.parentElement.parentElement;
                                if (activeItem) {
                                    this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
                                }
                            }
                        }
                        event.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        event.preventDefault();
                        break;
                    case 'Enter':
                        if (activeItem) {
                            this.handleItemClick(event, this.findModelItemFromKey(this.contextMenuService.activeItemKey), activeItem);
                        }
                        event.preventDefault();
                        break;
                    default:
                        break;
                }
            });
        }
    }
    findModelItemFromKey(key) {
        if (key == null || !this.model) {
            return null;
        }
        let indexes = key.split('_');
        return indexes.reduce((item, currentIndex) => {
            return item ? item.items[currentIndex] : this.model[currentIndex];
        }, null);
    }
    handleItemClick(event, item, menuitem) {
        if (!item || item.disabled) {
            return;
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        if (item.items) {
            let childSublist = DomHandler.findSingle(menuitem, '.p-submenu-list');
            if (childSublist) {
                if (DomHandler.hasClass(childSublist, 'p-submenu-list-active')) {
                    this.removeActiveFromSubLists(menuitem);
                }
                else {
                    DomHandler.addClass(childSublist, 'p-submenu-list-active');
                    this.positionSubmenu(childSublist);
                }
            }
        }
        if (!item.items) {
            this.hide();
        }
    }
    unbindGlobalListeners() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
        if (this.windowResizeListener) {
            window.removeEventListener('resize', this.windowResizeListener);
            this.windowResizeListener = null;
        }
        if (this.documentKeydownListener) {
            this.documentKeydownListener();
            this.documentKeydownListener = null;
        }
    }
    onWindowResize(event) {
        if (this.containerViewChild.nativeElement.offsetParent) {
            this.hide();
        }
    }
    isOutsideClicked(event) {
        return !(this.containerViewChild.nativeElement.isSameNode(event.target) || this.containerViewChild.nativeElement.contains(event.target));
    }
    ngOnDestroy() {
        this.unbindGlobalListeners();
        if (this.triggerEventListener) {
            this.triggerEventListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
        }
        this.ngDestroy$.next(true);
        this.ngDestroy$.complete();
    }
}
ContextMenu.ɵfac = function ContextMenu_Factory(t) { return new (t || ContextMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.ContextMenuService)); };
ContextMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContextMenu, selectors: [["p-contextMenu"]], viewQuery: function ContextMenu_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", triggerEvent: "triggerEvent", model: "model", global: "global", target: "target", style: "style", styleClass: "styleClass", appendTo: "appendTo" }, outputs: { onShow: "onShow", onHide: "onHide" }, decls: 3, vars: 6, consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "item", "root"]], template: function ContextMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelement(2, "p-contextMenuSub", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-contextmenu p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("item", ctx.model)("root", true);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ContextMenuSub], styles: [".p-contextmenu{display:none;position:absolute}.p-contextmenu ul{list-style:none;margin:0;padding:0}.p-contextmenu .p-submenu-list{display:none;min-width:100%;position:absolute;z-index:1}.p-contextmenu .p-menuitem-link{align-items:center;cursor:pointer;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-contextmenu .p-menuitem-active>p-contextmenusub>.p-submenu-list.p-submenu-list-active{display:block!important}"], encapsulation: 2, changeDetection: 0 });
ContextMenu.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ContextMenuService }
];
ContextMenu.propDecorators = {
    model: [{ type: Input }],
    global: [{ type: Input }],
    target: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    appendTo: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    triggerEvent: [{ type: Input }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenu, [{
        type: Component,
        args: [{
                selector: 'p-contextMenu',
                template: `
        <div #container [ngClass]="'p-contextmenu p-component'" [class]="styleClass" [ngStyle]="style">
            <p-contextMenuSub [item]="model" [root]="true"></p-contextMenuSub>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-contextmenu{display:none;position:absolute}.p-contextmenu ul{list-style:none;margin:0;padding:0}.p-contextmenu .p-submenu-list{display:none;min-width:100%;position:absolute;z-index:1}.p-contextmenu .p-menuitem-link{align-items:center;cursor:pointer;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-contextmenu .p-menuitem-active>p-contextmenusub>.p-submenu-list.p-submenu-list-active{display:block!important}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc4.ContextMenuService }]; }, { autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], triggerEvent: [{
            type: Input
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], model: [{
            type: Input
        }], global: [{
            type: Input
        }], target: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }] }); })();
class ContextMenuModule {
}
ContextMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ContextMenuModule });
ContextMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ContextMenuModule_Factory(t) { return new (t || ContextMenuModule)(); }, providers: [ContextMenuService], imports: [[CommonModule, RouterModule, RippleModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ContextMenuModule, { declarations: function () { return [ContextMenu, ContextMenuSub]; }, imports: function () { return [CommonModule, RouterModule, RippleModule]; }, exports: function () { return [ContextMenu, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, RippleModule],
                exports: [ContextMenu, RouterModule],
                declarations: [ContextMenu, ContextMenuSub],
                providers: [ContextMenuService]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ContextMenu, ContextMenuModule, ContextMenuSub };

//# sourceMappingURL=primeng-contextmenu.js.map