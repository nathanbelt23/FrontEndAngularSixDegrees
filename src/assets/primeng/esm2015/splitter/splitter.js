import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ContentChildren, ElementRef, ChangeDetectorRef, ViewChild, Output, EventEmitter } from '@angular/core';
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
export class Splitter {
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
export class SplitterModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXR0ZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFhLFVBQVUsRUFBRSxpQkFBaUIsRUFBZSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCMUQsTUFBTSxPQUFPLFFBQVE7QUFDckIsSUF5REksWUFBbUIsRUFBcUIsRUFBVSxFQUFjO0FBQUksUUFBakQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQWxEeEQsaUJBQVksR0FBVyxTQUFTLENBQUM7QUFDOUMsUUFDYSxhQUFRLEdBQVcsSUFBSSxDQUFDO0FBQ3JDLFFBQ2EsV0FBTSxHQUFXLFlBQVksQ0FBQztBQUMzQyxRQUNhLGVBQVUsR0FBVyxDQUFDLENBQUM7QUFDcEMsUUFDYSxlQUFVLEdBQWEsRUFBRSxDQUFDO0FBQ3ZDLFFBQ2EsYUFBUSxHQUFhLEVBQUUsQ0FBQztBQUNyQyxRQUNjLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbEUsUUFLSSxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFFBQ0ksV0FBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixRQUNJLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDckIsUUFDSSxzQkFBaUIsR0FBRyxJ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUErU3JELE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxrQkFDakMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzNCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21IYW5kbGVyIH0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHsgUHJpbWVUZW1wbGF0ZSwgU2hhcmVkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc3BsaXR0ZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1wYW5lbCBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwicGFuZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJwYW5lbENvbnRhaW5lckNsYXNzKClcIiBbY2xhc3NdPVwicGFuZWxTdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwYW5lbFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXNwbGl0dGVyLWd1dHRlclwiICpuZ0lmPVwiaSAhPT0gKHBhbmVscy5sZW5ndGggLSAxKVwiIFtuZ1N0eWxlXT1cImd1dHRlclN0eWxlKClcIiBcbiAgICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJvbkd1dHRlck1vdXNlRG93bigkZXZlbnQsIGkpXCIgKHRvdWNoc3RhcnQpPVwib25HdXR0ZXJUb3VjaFN0YXJ0KCRldmVudCwgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtc3BsaXR0ZXItZ3V0dGVyLWhhbmRsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHN0eWxlVXJsczogWycuL3NwbGl0dGVyLmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLXNwbGl0dGVyLXBhbmVsLW5lc3RlZF0nOiAnbmVzdGVkJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXIge1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3RhdGVTdG9yYWdlOiBzdHJpbmcgPSBcInNlc3Npb25cIjtcblxuICAgIEBJbnB1dCgpIHN0YXRlS2V5OiBzdHJpbmcgPSBudWxsO1xuXG4gICAgQElucHV0KCkgbGF5b3V0OiBzdHJpbmcgPSBcImhvcml6b250YWxcIjtcblxuICAgIEBJbnB1dCgpIGd1dHRlclNpemU6IG51bWJlciA9IDQ7XG5cbiAgICBASW5wdXQoKSBwYW5lbFNpemVzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgQElucHV0KCkgbWluU2l6ZXM6IG51bWJlcltdID0gW107XG5cbiAgICBAT3V0cHV0KCkgb25SZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIFxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250YWluZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBuZXN0ZWQgPSBmYWxzZTtcblxuICAgIHBhbmVscyA9IFtdO1xuXG4gICAgZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIG1vdXNlTW92ZUxpc3RlbmVyID0gbnVsbDtcblxuICAgIG1vdXNlVXBMaXN0ZW5lciA9IG51bGw7XG5cbiAgICB0b3VjaE1vdmVMaXN0ZW5lciA9IG51bGw7XG5cbiAgICB0b3VjaEVuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIHNpemUgPSBudWxsO1xuXG4gICAgZ3V0dGVyRWxlbWVudCA9IG51bGw7XG5cbiAgICBzdGFydFBvcyA9IG51bGw7XG5cbiAgICBwcmV2UGFuZWxFbGVtZW50ID0gbnVsbDtcblxuICAgIG5leHRQYW5lbEVsZW1lbnQgPSBudWxsO1xuXG4gICAgbmV4dFBhbmVsU2l6ZSA9IG51bGw7XG5cbiAgICBwcmV2UGFuZWxTaXplID0gbnVsbDtcblxuICAgIF9wYW5lbFNpemVzID0gbnVsbDtcblxuICAgIHByZXZQYW5lbEluZGV4ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmVzdGVkID0gdGhpcy5pc05lc3RlZCgpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncGFuZWwnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVscy5wdXNoKGl0ZW0udGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVscy5wdXNoKGl0ZW0udGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFuZWxzICYmIHRoaXMucGFuZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0YXRlZnVsKCkpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplZCA9IHRoaXMucmVzdG9yZVN0YXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBbLi4udGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuXS5maWx0ZXIoY2hpbGQgPT4gRG9tSGFuZGxlci5oYXNDbGFzcyhjaGlsZCwgJ3Atc3BsaXR0ZXItcGFuZWwnKSk7XG4gICAgICAgICAgICAgICAgbGV0IF9wYW5lbFNpemVzID0gW107XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbHMubWFwKChwYW5lbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFuZWxJbml0aWFsU2l6ZSA9IHRoaXMucGFuZWxTaXplcy5sZW5ndGggLTEgPj0gaSA/IHRoaXMucGFuZWxTaXplc1tpXTogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhbmVsU2l6ZSA9IHBhbmVsSW5pdGlhbFNpemUgfHwgKDEwMCAvIHRoaXMucGFuZWxzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIF9wYW5lbFNpemVzW2ldID0gcGFuZWxTaXplO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5zdHlsZS5mbGV4QmFzaXMgPSAnY2FsYygnICsgcGFuZWxTaXplICsgJyUgLSAnICsgKCh0aGlzLnBhbmVscy5sZW5ndGggLSAxKSAqIHRoaXMuZ3V0dGVyU2l6ZSkgKyAncHgpJztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3BhbmVsU2l6ZXMgPSBfcGFuZWxTaXplcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVzaXplU3RhcnQoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuZ3V0dGVyRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuaG9yaXpvbnRhbCgpID8gRG9tSGFuZGxlci5nZXRXaWR0aCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSA6IERvbUhhbmRsZXIuZ2V0SGVpZ2h0KHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IHRoaXMuaG9yaXpvbnRhbCgpID8gKGV2ZW50LnBhZ2VYIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYKSA6IChldmVudC5wYWdlWSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSk7XG4gICAgICAgIHRoaXMucHJldlBhbmVsRWxlbWVudCA9IHRoaXMuZ3V0dGVyRWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICB0aGlzLm5leHRQYW5lbEVsZW1lbnQgPSB0aGlzLmd1dHRlckVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB0aGlzLnByZXZQYW5lbFNpemUgPSAxMDAgKiAodGhpcy5ob3Jpem9udGFsKCkgPyBEb21IYW5kbGVyLmdldE91dGVyV2lkdGgodGhpcy5wcmV2UGFuZWxFbGVtZW50LCB0cnVlKTogRG9tSGFuZGxlci5nZXRPdXRlckhlaWdodCh0aGlzLnByZXZQYW5lbEVsZW1lbnQsIHRydWUpKSAvIHRoaXMuc2l6ZTtcbiAgICAgICAgdGhpcy5uZXh0UGFuZWxTaXplID0gMTAwICogKHRoaXMuaG9yaXpvbnRhbCgpID8gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHRoaXMubmV4dFBhbmVsRWxlbWVudCwgdHJ1ZSk6IERvbUhhbmRsZXIuZ2V0T3V0ZXJIZWlnaHQodGhpcy5uZXh0UGFuZWxFbGVtZW50LCB0cnVlKSkgLyB0aGlzLnNpemU7XG4gICAgICAgIHRoaXMucHJldlBhbmVsSW5kZXggPSBpbmRleDtcbiAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmd1dHRlckVsZW1lbnQsICdwLXNwbGl0dGVyLWd1dHRlci1yZXNpemluZycpO1xuICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLXNwbGl0dGVyLXJlc2l6aW5nJyk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbCgpKVxuICAgICAgICAgICAgbmV3UG9zID0gKChldmVudC5wYWdlWCB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCkgICogMTAwIC8gdGhpcy5zaXplKSAtICh0aGlzLnN0YXJ0UG9zICogMTAwIC8gdGhpcy5zaXplKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbmV3UG9zID0gKChldmVudC5wYWdlWSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSkgICogMTAwIC8gdGhpcy5zaXplKSAtICh0aGlzLnN0YXJ0UG9zICogMTAwIC8gdGhpcy5zaXplKTtcblxuICAgICAgICBsZXQgbmV3UHJldlBhbmVsU2l6ZSA9IHRoaXMucHJldlBhbmVsU2l6ZSArIG5ld1BvcztcbiAgICAgICAgbGV0IG5ld05leHRQYW5lbFNpemUgPSB0aGlzLm5leHRQYW5lbFNpemUgLSBuZXdQb3M7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVJlc2l6ZShuZXdQcmV2UGFuZWxTaXplLCBuZXdOZXh0UGFuZWxTaXplKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2UGFuZWxFbGVtZW50LnN0eWxlLmZsZXhCYXNpcyA9ICdjYWxjKCcgKyBuZXdQcmV2UGFuZWxTaXplICsgJyUgLSAnICsgKCh0aGlzLnBhbmVscy5sZW5ndGggLSAxKSAqIHRoaXMuZ3V0dGVyU2l6ZSkgKyAncHgpJztcbiAgICAgICAgICAgIHRoaXMubmV4dFBhbmVsRWxlbWVudC5zdHlsZS5mbGV4QmFzaXMgPSAnY2FsYygnICsgbmV3TmV4dFBhbmVsU2l6ZSArICclIC0gJyArICgodGhpcy5wYW5lbHMubGVuZ3RoIC0gMSkgKiB0aGlzLmd1dHRlclNpemUpICsgJ3B4KSc7XG4gICAgICAgICAgICB0aGlzLl9wYW5lbFNpemVzW3RoaXMucHJldlBhbmVsSW5kZXhdID0gbmV3UHJldlBhbmVsU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuX3BhbmVsU2l6ZXNbdGhpcy5wcmV2UGFuZWxJbmRleCArIDFdID0gbmV3TmV4dFBhbmVsU2l6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUVuZChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXRlZnVsKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMub25SZXNpemVFbmQuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIHNpemVzOiB0aGlzLl9wYW5lbFNpemVzfSlcbiAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLmd1dHRlckVsZW1lbnQsICdwLXNwbGl0dGVyLWd1dHRlci1yZXNpemluZycpO1xuICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICdwLXNwbGl0dGVyLXJlc2l6aW5nJyk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBvbkd1dHRlck1vdXNlRG93bihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5vblJlc2l6ZVN0YXJ0KGV2ZW50LCBpbmRleCk7XG4gICAgICAgIHRoaXMuYmluZE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgb25HdXR0ZXJUb3VjaFN0YXJ0KGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAoZXZlbnQuY2FuY2VsYWJsZSl7XG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplU3RhcnQoZXZlbnQsIGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuYmluZFRvdWNoTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkd1dHRlclRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVzaXplRW5kKGV2ZW50KTtcbiAgICAgICAgdGhpcy51bmJpbmRUb3VjaExpc3RlbmVycygpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGV2ZW50LmNhbmNlbGFibGUpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlUmVzaXplKG5ld1ByZXZQYW5lbFNpemUsIG5ld05leHRQYW5lbFNpemUpIHtcbiAgICAgICAgaWYgKHRoaXMubWluU2l6ZXMubGVuZ3RoID49IDEgJiYgdGhpcy5taW5TaXplc1swXSAmJiB0aGlzLm1pblNpemVzWzBdID4gbmV3UHJldlBhbmVsU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWluU2l6ZXMubGVuZ3RoID4gMSAmJiB0aGlzLm1pblNpemVzWzFdICYmIHRoaXMubWluU2l6ZXNbMV0gPiBuZXdOZXh0UGFuZWxTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBiaW5kTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lciA9IGV2ZW50ID0+IHRoaXMub25SZXNpemUoZXZlbnQpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5tb3VzZVVwTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VVcExpc3RlbmVyID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFRvdWNoTGlzdGVuZXJzKCkge1xuICAgICAgICBpZiAoIXRoaXMudG91Y2hNb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlTGlzdGVuZXIgPSBldmVudCA9PiB0aGlzLm9uUmVzaXplKGV2ZW50KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy50b3VjaE1vdmVMaXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMudG91Y2hFbmRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy50b3VjaEVuZExpc3RlbmVyID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRNb3VzZUxpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tb3VzZVVwTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRUb3VjaExpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hNb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMudG91Y2hNb3ZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50b3VjaEVuZExpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLnRvdWNoRW5kTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaXplID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldlBhbmVsRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFBhbmVsRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldlBhbmVsU2l6ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFBhbmVsU2l6ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3V0dGVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldlBhbmVsSW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIGlzTmVzdGVkKCkge1xuICAgICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICYmICFEb21IYW5kbGVyLmhhc0NsYXNzKHBhcmVudCwgJ3Atc3BsaXR0ZXInKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50ICE9PSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlzU3RhdGVmdWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlS2V5ICE9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0U3RvcmFnZSgpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuc3RhdGVTdG9yYWdlKSB7XG4gICAgICAgICAgICBjYXNlICdsb2NhbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Nlc3Npb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2U7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMuc3RhdGVTdG9yYWdlICsgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgdGhlIHN0YXRlIHN0b3JhZ2UsIHN1cHBvcnRlZCB2YWx1ZXMgYXJlIFwibG9jYWxcIiBhbmQgXCJzZXNzaW9uXCIuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgpLnNldEl0ZW0odGhpcy5zdGF0ZUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGFuZWxTaXplcykpO1xuICAgIH1cblxuICAgIHJlc3RvcmVTdGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBzdGF0ZVN0cmluZyA9IHN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0YXRlS2V5KTtcblxuICAgICAgICBpZiAoc3RhdGVTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhbmVsU2l6ZXMgPSBKU09OLnBhcnNlKHN0YXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IFsuLi50aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuXS5maWx0ZXIoY2hpbGQgPT4gRG9tSGFuZGxlci5oYXNDbGFzcyhjaGlsZCwgJ3Atc3BsaXR0ZXItcGFuZWwnKSk7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLmZsZXhCYXNpcyA9ICdjYWxjKCcgKyB0aGlzLl9wYW5lbFNpemVzW2ldICsgJyUgLSAnICsgKCh0aGlzLnBhbmVscy5sZW5ndGggLSAxKSAqIHRoaXMuZ3V0dGVyU2l6ZSkgKyAncHgpJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLXNwbGl0dGVyIHAtY29tcG9uZW50JzogdHJ1ZSxcbiAgICAgICAgICAgICdwLXNwbGl0dGVyLWhvcml6b250YWwnOiB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAncC1zcGxpdHRlci12ZXJ0aWNhbCc6IHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYW5lbENvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3Atc3BsaXR0ZXItcGFuZWwnOiB0cnVlLFxuICAgICAgICAgICAgJ3Atc3BsaXR0ZXItcGFuZWwtbmVzdGVkJzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGd1dHRlclN0eWxlKCkge1xuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsKCkpXG4gICAgICAgICAgICByZXR1cm4ge3dpZHRoOiB0aGlzLmd1dHRlclNpemUgKyAncHgnfTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHtoZWlnaHQ6IHRoaXMuZ3V0dGVyU2l6ZSArICdweCd9O1xuICAgIH1cblxuICAgIGhvcml6b250YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU3BsaXR0ZXIsIFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbU3BsaXR0ZXJdXG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0dGVyTW9kdWxlIHsgfVxuIl19