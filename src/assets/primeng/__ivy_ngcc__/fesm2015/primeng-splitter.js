import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, Output, ContentChildren, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { PrimeTemplate, SharedModule } from 'primeng/api';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["container"];
function Splitter_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Splitter_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("mousedown", function Splitter_ng_template_2_div_2_Template_div_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const i_r3 = ɵngcc0.ɵɵnextContext().index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onGutterMouseDown($event, i_r3); })("touchstart", function Splitter_ng_template_2_div_2_Template_div_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const i_r3 = ɵngcc0.ɵɵnextContext().index; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onGutterTouchStart($event, i_r3); });
    ɵngcc0.ɵɵelement(1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r5.gutterStyle());
} }
function Splitter_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, Splitter_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, Splitter_ng_template_2_div_2_Template, 2, 1, "div", 5);
} if (rf & 2) {
    const panel_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.panelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.panelContainerClass());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", panel_r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", i_r3 !== ctx_r1.panels.length - 1);
} }
class Splitter {
    constructor(cd, el) {
        this.cd = cd;
        this.el = el;
        this.stateStorage = "session";
        this.stateKey = null;
        this.layout = "horizontal";
        this.gutterSize = 4;
        this.panelSizes = [];
        this.minSizes = [];
        this.onResizeEnd = new EventEmitter();
        this.nested = false;
        this.panels = [];
        this.dragging = false;
        this.mouseMoveListener = null;
        this.mouseUpListener = null;
        this.touchMoveListener = null;
        this.touchEndListener = null;
        this.size = null;
        this.gutterElement = null;
        this.startPos = null;
        this.prevPanelElement = null;
        this.nextPanelElement = null;
        this.nextPanelSize = null;
        this.prevPanelSize = null;
        this._panelSizes = null;
        this.prevPanelIndex = null;
    }
    ngOnInit() {
        this.nested = this.isNested();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'panel':
                    this.panels.push(item.template);
                    break;
                default:
                    this.panels.push(item.template);
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.panels && this.panels.length) {
            let initialized = false;
            if (this.isStateful()) {
                initialized = this.restoreState();
            }
            if (!initialized) {
                let children = [...this.el.nativeElement.children[0].children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
                let _panelSizes = [];
                this.panels.map((panel, i) => {
                    let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
                    let panelSize = panelInitialSize || (100 / this.panels.length);
                    _panelSizes[i] = panelSize;
                    children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                });
                this._panelSizes = _panelSizes;
            }
        }
    }
    onResizeStart(event, index) {
        this.gutterElement = event.currentTarget;
        this.size = this.horizontal() ? DomHandler.getWidth(this.containerViewChild.nativeElement) : DomHandler.getHeight(this.containerViewChild.nativeElement);
        this.dragging = true;
        this.startPos = this.horizontal() ? (event.pageX || event.changedTouches[0].pageX) : (event.pageY || event.changedTouches[0].pageY);
        this.prevPanelElement = this.gutterElement.previousElementSibling;
        this.nextPanelElement = this.gutterElement.nextElementSibling;
        this.prevPanelSize = 100 * (this.horizontal() ? DomHandler.getOuterWidth(this.prevPanelElement, true) : DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
        this.nextPanelSize = 100 * (this.horizontal() ? DomHandler.getOuterWidth(this.nextPanelElement, true) : DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
        this.prevPanelIndex = index;
        DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing');
        DomHandler.addClass(this.containerViewChild.nativeElement, 'p-splitter-resizing');
    }
    onResize(event) {
        let newPos;
        if (this.horizontal())
            newPos = ((event.pageX || event.changedTouches[0].pageX) * 100 / this.size) - (this.startPos * 100 / this.size);
        else
            newPos = ((event.pageY || event.changedTouches[0].pageY) * 100 / this.size) - (this.startPos * 100 / this.size);
        let newPrevPanelSize = this.prevPanelSize + newPos;
        let newNextPanelSize = this.nextPanelSize - newPos;
        if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
            this.prevPanelElement.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
            this.nextPanelElement.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
            this._panelSizes[this.prevPanelIndex] = newPrevPanelSize;
            this._panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
        }
    }
    resizeEnd(event) {
        if (this.isStateful()) {
            this.saveState();
        }
        this.onResizeEnd.emit({ originalEvent: event, sizes: this._panelSizes });
        DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing');
        DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-splitter-resizing');
        this.clear();
    }
    onGutterMouseDown(event, index) {
        this.onResizeStart(event, index);
        this.bindMouseListeners();
    }
    onGutterTouchStart(event, index) {
        if (event.cancelable) {
            this.onResizeStart(event, index);
            this.bindTouchListeners();
            event.preventDefault();
        }
    }
    onGutterTouchEnd(event) {
        this.resizeEnd(event);
        this.unbindTouchListeners();
        if (event.cancelable)
            event.preventDefault();
    }
    validateResize(newPrevPanelSize, newNextPanelSize) {
        if (this.minSizes.length >= 1 && this.minSizes[0] && this.minSizes[0] > newPrevPanelSize) {
            return false;
        }
        if (this.minSizes.length > 1 && this.minSizes[1] && this.minSizes[1] > newNextPanelSize) {
            return false;
        }
        return true;
    }
    bindMouseListeners() {
        if (!this.mouseMoveListener) {
            this.mouseMoveListener = event => this.onResize(event);
            document.addEventListener('mousemove', this.mouseMoveListener);
        }
        if (!this.mouseUpListener) {
            this.mouseUpListener = event => {
                this.resizeEnd(event);
                this.unbindMouseListeners();
            };
            document.addEventListener('mouseup', this.mouseUpListener);
        }
    }
    bindTouchListeners() {
        if (!this.touchMoveListener) {
            this.touchMoveListener = event => this.onResize(event);
            document.addEventListener('touchmove', this.touchMoveListener);
        }
        if (!this.touchEndListener) {
            this.touchEndListener = event => {
                this.resizeEnd(event);
                this.unbindTouchListeners();
            };
            document.addEventListener('touchend', this.touchEndListener);
        }
    }
    unbindMouseListeners() {
        if (this.mouseMoveListener) {
            document.removeEventListener('mousemove', this.mouseMoveListener);
            this.mouseMoveListener = null;
        }
        if (this.mouseUpListener) {
            document.removeEventListener('mouseup', this.mouseUpListener);
            this.mouseUpListener = null;
        }
    }
    unbindTouchListeners() {
        if (this.touchMoveListener) {
            document.removeEventListener('touchmove', this.touchMoveListener);
            this.touchMoveListener = null;
        }
        if (this.touchEndListener) {
            document.removeEventListener('touchend', this.touchEndListener);
            this.touchEndListener = null;
        }
    }
    clear() {
        this.dragging = false;
        this.size = null;
        this.startPos = null;
        this.prevPanelElement = null;
        this.nextPanelElement = null;
        this.prevPanelSize = null;
        this.nextPanelSize = null;
        this.gutterElement = null;
        this.prevPanelIndex = null;
    }
    isNested() {
        if (this.el.nativeElement) {
            let parent = this.el.nativeElement.parentElement;
            while (parent && !DomHandler.hasClass(parent, 'p-splitter')) {
                parent = parent.parentElement;
            }
            return parent !== null;
        }
        else {
            return false;
        }
    }
    isStateful() {
        return this.stateKey != null;
    }
    getStorage() {
        switch (this.stateStorage) {
            case 'local':
                return window.localStorage;
            case 'session':
                return window.sessionStorage;
            default:
                throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
    }
    saveState() {
        this.getStorage().setItem(this.stateKey, JSON.stringify(this._panelSizes));
    }
    restoreState() {
        const storage = this.getStorage();
        const stateString = storage.getItem(this.stateKey);
        if (stateString) {
            this._panelSizes = JSON.parse(stateString);
            let children = [...this.containerViewChild.nativeElement.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
            children.forEach((child, i) => {
                child.style.flexBasis = 'calc(' + this._panelSizes[i] + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
            });
            return true;
        }
        return false;
    }
    containerClass() {
        return {
            'p-splitter p-component': true,
            'p-splitter-horizontal': this.layout === "horizontal",
            'p-splitter-vertical': this.layout === "vertical"
        };
    }
    panelContainerClass() {
        return {
            'p-splitter-panel': true,
            'p-splitter-panel-nested': true
        };
    }
    gutterStyle() {
        if (this.horizontal())
            return { width: this.gutterSize + 'px' };
        else
            return { height: this.gutterSize + 'px' };
    }
    horizontal() {
        return this.layout === 'horizontal';
    }
}
Splitter.ɵfac = function Splitter_Factory(t) { return new (t || Splitter)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Splitter.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Splitter, selectors: [["p-splitter"]], contentQueries: function Splitter_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Splitter_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, hostVars: 2, hostBindings: function Splitter_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-splitter-panel-nested", ctx.nested);
    } }, inputs: { stateStorage: "stateStorage", stateKey: "stateKey", layout: "layout", gutterSize: "gutterSize", panelSizes: "panelSizes", minSizes: "minSizes", styleClass: "styleClass", panelStyleClass: "panelStyleClass", style: "style" }, outputs: { onResizeEnd: "onResizeEnd" }, decls: 3, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["ngFor", "", 3, "ngForOf"], [3, "ngClass"], [4, "ngTemplateOutlet"], ["class", "p-splitter-gutter", 3, "ngStyle", "mousedown", "touchstart", 4, "ngIf"], [1, "p-splitter-gutter", 3, "ngStyle", "mousedown", "touchstart"], [1, "p-splitter-gutter-handle"]], template: function Splitter_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, Splitter_ng_template_2_Template, 3, 5, "ng-template", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.panels);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], styles: [".p-splitter{display:flex;flex-wrap:nowrap}.p-splitter-vertical{flex-direction:column}.p-splitter-panel{flex-grow:1}.p-splitter-panel-nested{display:flex}.p-splitter-panel p-splitter{flex-grow:1}.p-splitter-panel .p-splitter{border:0;flex-grow:1}.p-splitter-gutter{align-items:center;cursor:col-resize;display:flex;flex-grow:0;flex-shrink:0;justify-content:center}.p-splitter-horizontal.p-splitter-resizing{-ms-user-select:none;-webkit-user-select:none;cursor:col-resize;user-select:none}.p-splitter-horizontal>.p-splitter-gutter>.p-splitter-gutter-handle{height:24px;width:100%}.p-splitter-horizontal>.p-splitter-gutter{cursor:col-resize}.p-splitter-vertical.p-splitter-resizing{-ms-user-select:none;-webkit-user-select:none;cursor:row-resize;user-select:none}.p-splitter-vertical>.p-splitter-gutter{cursor:row-resize}.p-splitter-vertical>.p-splitter-gutter>.p-splitter-gutter-handle{height:100%;width:24px}"], encapsulation: 2, changeDetection: 0 });
Splitter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
Splitter.propDecorators = {
    styleClass: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    style: [{ type: Input }],
    stateStorage: [{ type: Input }],
    stateKey: [{ type: Input }],
    layout: [{ type: Input }],
    gutterSize: [{ type: Input }],
    panelSizes: [{ type: Input }],
    minSizes: [{ type: Input }],
    onResizeEnd: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    containerViewChild: [{ type: ViewChild, args: ['container', { static: false },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Splitter, [{
        type: Component,
        args: [{
                selector: 'p-splitter',
                template: `
        <div #container [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-template ngFor let-panel let-i="index" [ngForOf]="panels">
                <div [ngClass]="panelContainerClass()" [class]="panelStyleClass">
                    <ng-container *ngTemplateOutlet="panel"></ng-container>
                </div>
                <div class="p-splitter-gutter" *ngIf="i !== (panels.length - 1)" [ngStyle]="gutterStyle()" 
                    (mousedown)="onGutterMouseDown($event, i)" (touchstart)="onGutterTouchStart($event, i)">
                    <div class="p-splitter-gutter-handle"></div>
                </div>
            </ng-template>
        </div>
    `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.p-splitter-panel-nested]': 'nested'
                },
                styles: [".p-splitter{display:flex;flex-wrap:nowrap}.p-splitter-vertical{flex-direction:column}.p-splitter-panel{flex-grow:1}.p-splitter-panel-nested{display:flex}.p-splitter-panel p-splitter{flex-grow:1}.p-splitter-panel .p-splitter{border:0;flex-grow:1}.p-splitter-gutter{align-items:center;cursor:col-resize;display:flex;flex-grow:0;flex-shrink:0;justify-content:center}.p-splitter-horizontal.p-splitter-resizing{-ms-user-select:none;-webkit-user-select:none;cursor:col-resize;user-select:none}.p-splitter-horizontal>.p-splitter-gutter>.p-splitter-gutter-handle{height:24px;width:100%}.p-splitter-horizontal>.p-splitter-gutter{cursor:col-resize}.p-splitter-vertical.p-splitter-resizing{-ms-user-select:none;-webkit-user-select:none;cursor:row-resize;user-select:none}.p-splitter-vertical>.p-splitter-gutter{cursor:row-resize}.p-splitter-vertical>.p-splitter-gutter>.p-splitter-gutter-handle{height:100%;width:24px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { stateStorage: [{
            type: Input
        }], stateKey: [{
            type: Input
        }], layout: [{
            type: Input
        }], gutterSize: [{
            type: Input
        }], panelSizes: [{
            type: Input
        }], minSizes: [{
            type: Input
        }], onResizeEnd: [{
            type: Output
        }], styleClass: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container', { static: false }]
        }] }); })();
class SplitterModule {
}
SplitterModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SplitterModule });
SplitterModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SplitterModule_Factory(t) { return new (t || SplitterModule)(); }, imports: [[CommonModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SplitterModule, { declarations: function () { return [Splitter]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Splitter, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplitterModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Splitter, SharedModule],
                declarations: [Splitter]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Splitter, SplitterModule };

//# sourceMappingURL=primeng-splitter.js.map