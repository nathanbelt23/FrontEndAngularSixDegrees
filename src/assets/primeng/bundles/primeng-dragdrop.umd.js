(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom')) :
    typeof define === 'function' && define.amd ? define('primeng/dragdrop', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', 'primeng/dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.dragdrop = {}), global.ng.core, global.ng.common, global.primeng.dom));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, dom) { 'use strict';

    var Draggable = /** @class */ (function () {
        function Draggable(el, zone) {
            this.el = el;
            this.zone = zone;
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
        }
        Object.defineProperty(Draggable.prototype, "pDraggableDisabled", {
            get: function () {
                return this._pDraggableDisabled;
            },
            set: function (_pDraggableDisabled) {
                this._pDraggableDisabled = _pDraggableDisabled;
                if (this._pDraggableDisabled) {
                    this.unbindMouseListeners();
                }
                else {
                    this.el.nativeElement.draggable = true;
                    this.bindMouseListeners();
                }
            },
            enumerable: false,
            configurable: true
        });
        Draggable.prototype.ngAfterViewInit = function () {
            if (!this.pDraggableDisabled) {
                this.el.nativeElement.draggable = true;
                this.bindMouseListeners();
            }
        };
        Draggable.prototype.bindDragListener = function () {
            var _this = this;
            if (!this.dragListener) {
                this.zone.runOutsideAngular(function () {
                    _this.dragListener = _this.drag.bind(_this);
                    _this.el.nativeElement.addEventListener('drag', _this.dragListener);
                });
            }
        };
        Draggable.prototype.unbindDragListener = function () {
            var _this = this;
            if (this.dragListener) {
                this.zone.runOutsideAngular(function () {
                    _this.el.nativeElement.removeEventListener('drag', _this.dragListener);
                    _this.dragListener = null;
                });
            }
        };
        Draggable.prototype.bindMouseListeners = function () {
            var _this = this;
            if (!this.mouseDownListener && !this.mouseUpListener) {
                this.zone.runOutsideAngular(function () {
                    _this.mouseDownListener = _this.mousedown.bind(_this);
                    _this.mouseUpListener = _this.mouseup.bind(_this);
                    _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
                    _this.el.nativeElement.addEventListener('mouseup', _this.mouseUpListener);
                });
            }
        };
        Draggable.prototype.unbindMouseListeners = function () {
            var _this = this;
            if (this.mouseDownListener && this.mouseUpListener) {
                this.zone.runOutsideAngular(function () {
                    _this.el.nativeElement.removeEventListener('mousedown', _this.mouseDownListener);
                    _this.el.nativeElement.removeEventListener('mouseup', _this.mouseUpListener);
                    _this.mouseDownListener = null;
                    _this.mouseUpListener = null;
                });
            }
        };
        Draggable.prototype.drag = function (event) {
            this.onDrag.emit(event);
        };
        Draggable.prototype.dragStart = function (event) {
            if (this.allowDrag() && !this.pDraggableDisabled) {
                if (this.dragEffect) {
                    event.dataTransfer.effectAllowed = this.dragEffect;
                }
                event.dataTransfer.setData('text', this.scope);
                this.onDragStart.emit(event);
                this.bindDragListener();
            }
            else {
                event.preventDefault();
            }
        };
        Draggable.prototype.dragEnd = function (event) {
            this.onDragEnd.emit(event);
            this.unbindDragListener();
        };
        Draggable.prototype.mousedown = function (event) {
            this.handle = event.target;
        };
        Draggable.prototype.mouseup = function (event) {
            this.handle = null;
        };
        Draggable.prototype.allowDrag = function () {
            if (this.dragHandle && this.handle)
                return dom.DomHandler.matches(this.handle, this.dragHandle);
            else
                return true;
        };
        Draggable.prototype.ngOnDestroy = function () {
            this.unbindDragListener();
            this.unbindMouseListeners();
        };
Draggable.ɵfac = function Draggable_Factory(t) { return new (t || Draggable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
Draggable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Draggable, selectors: [["", "pDraggable", ""]], hostBindings: function Draggable_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("dragstart", function Draggable_dragstart_HostBindingHandler($event) { return ctx.dragStart($event); })("dragend", function Draggable_dragend_HostBindingHandler($event) { return ctx.dragEnd($event); });
    } }, inputs: { pDraggableDisabled: "pDraggableDisabled", scope: ["pDraggable", "scope"], dragEffect: "dragEffect", dragHandle: "dragHandle" }, outputs: { onDragStart: "onDragStart", onDragEnd: "onDragEnd", onDrag: "onDrag" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Draggable, [{
        type: core.Directive,
        args: [{
                selector: '[pDraggable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDragStart: [{
            type: core.Output
        }], onDragEnd: [{
            type: core.Output
        }], onDrag: [{
            type: core.Output
        }], pDraggableDisabled: [{
            type: core.Input
        }], dragStart: [{
            type: core.HostListener,
            args: ['dragstart', ['$event']]
        }], dragEnd: [{
            type: core.HostListener,
            args: ['dragend', ['$event']]
        }], scope: [{
            type: core.Input,
            args: ['pDraggable']
        }], dragEffect: [{
            type: core.Input
        }], dragHandle: [{
            type: core.Input
        }] }); })();
        return Draggable;
    }());
    Draggable.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    Draggable.propDecorators = {
        scope: [{ type: core.Input, args: ['pDraggable',] }],
        dragEffect: [{ type: core.Input }],
        dragHandle: [{ type: core.Input }],
        onDragStart: [{ type: core.Output }],
        onDragEnd: [{ type: core.Output }],
        onDrag: [{ type: core.Output }],
        pDraggableDisabled: [{ type: core.Input }],
        dragStart: [{ type: core.HostListener, args: ['dragstart', ['$event'],] }],
        dragEnd: [{ type: core.HostListener, args: ['dragend', ['$event'],] }]
    };
    var Droppable = /** @class */ (function () {
        function Droppable(el, zone) {
            this.el = el;
            this.zone = zone;
            this.onDragEnter = new core.EventEmitter();
            this.onDragLeave = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
        }
        Droppable.prototype.ngAfterViewInit = function () {
            if (!this.pDroppableDisabled) {
                this.bindDragOverListener();
            }
        };
        Droppable.prototype.bindDragOverListener = function () {
            var _this = this;
            if (!this.dragOverListener) {
                this.zone.runOutsideAngular(function () {
                    _this.dragOverListener = _this.dragOver.bind(_this);
                    _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
                });
            }
        };
        Droppable.prototype.unbindDragOverListener = function () {
            var _this = this;
            if (this.dragOverListener) {
                this.zone.runOutsideAngular(function () {
                    _this.el.nativeElement.removeEventListener('dragover', _this.dragOverListener);
                    _this.dragOverListener = null;
                });
            }
        };
        Droppable.prototype.dragOver = function (event) {
            event.preventDefault();
        };
        Droppable.prototype.drop = function (event) {
            if (this.allowDrop(event)) {
                dom.DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
                event.preventDefault();
                this.onDrop.emit(event);
            }
        };
        Droppable.prototype.dragEnter = function (event) {
            event.preventDefault();
            if (this.dropEffect) {
                event.dataTransfer.dropEffect = this.dropEffect;
            }
            dom.DomHandler.addClass(this.el.nativeElement, 'p-draggable-enter');
            this.onDragEnter.emit(event);
        };
        Droppable.prototype.dragLeave = function (event) {
            event.preventDefault();
            dom.DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
            this.onDragLeave.emit(event);
        };
        Droppable.prototype.allowDrop = function (event) {
            var dragScope = event.dataTransfer.getData('text');
            if (typeof (this.scope) == "string" && dragScope == this.scope) {
                return true;
            }
            else if (this.scope instanceof Array) {
                for (var j = 0; j < this.scope.length; j++) {
                    if (dragScope == this.scope[j]) {
                        return true;
                    }
                }
            }
            return false;
        };
        Droppable.prototype.ngOnDestroy = function () {
            this.unbindDragOverListener();
        };
Droppable.ɵfac = function Droppable_Factory(t) { return new (t || Droppable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
Droppable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Droppable, selectors: [["", "pDroppable", ""]], hostBindings: function Droppable_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function Droppable_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragenter", function Droppable_dragenter_HostBindingHandler($event) { return ctx.dragEnter($event); })("dragleave", function Droppable_dragleave_HostBindingHandler($event) { return ctx.dragLeave($event); });
    } }, inputs: { scope: ["pDroppable", "scope"], pDroppableDisabled: "pDroppableDisabled", dropEffect: "dropEffect" }, outputs: { onDragEnter: "onDragEnter", onDragLeave: "onDragLeave", onDrop: "onDrop" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Droppable, [{
        type: core.Directive,
        args: [{
                selector: '[pDroppable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDragEnter: [{
            type: core.Output
        }], onDragLeave: [{
            type: core.Output
        }], onDrop: [{
            type: core.Output
        }], drop: [{
            type: core.HostListener,
            args: ['drop', ['$event']]
        }], dragEnter: [{
            type: core.HostListener,
            args: ['dragenter', ['$event']]
        }], dragLeave: [{
            type: core.HostListener,
            args: ['dragleave', ['$event']]
        }], scope: [{
            type: core.Input,
            args: ['pDroppable']
        }], pDroppableDisabled: [{
            type: core.Input
        }], dropEffect: [{
            type: core.Input
        }] }); })();
        return Droppable;
    }());
    Droppable.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    Droppable.propDecorators = {
        scope: [{ type: core.Input, args: ['pDroppable',] }],
        pDroppableDisabled: [{ type: core.Input }],
        dropEffect: [{ type: core.Input }],
        onDragEnter: [{ type: core.Output }],
        onDragLeave: [{ type: core.Output }],
        onDrop: [{ type: core.Output }],
        drop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
        dragEnter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
        dragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
    };
    var DragDropModule = /** @class */ (function () {
        function DragDropModule() {
        }
DragDropModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DragDropModule });
DragDropModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DragDropModule_Factory(t) { return new (t || DragDropModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DragDropModule, { declarations: [Draggable, Droppable], imports: [ɵngcc1.CommonModule], exports: [Draggable, Droppable] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragDropModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Draggable, Droppable],
                declarations: [Draggable, Droppable]
            }]
    }], function () { return []; }, null); })();
        return DragDropModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DragDropModule = DragDropModule;
    exports.Draggable = Draggable;
    exports.Droppable = Droppable;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-dragdrop.umd.js.map