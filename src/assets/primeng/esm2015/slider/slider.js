import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef, Renderer2, NgZone, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["sliderHandle"];
const _c1 = ["sliderHandleStart"];
const _c2 = ["sliderHandleEnd"];
const _c3 = function (a0, a1) { return { "left": a0, width: a1 }; };
function Slider_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(1, _c3, ctx_r0.handleValues[0] + "%", ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"));
} }
const _c4 = function (a0, a1) { return { "bottom": a0, height: a1 }; };
function Slider_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(1, _c4, ctx_r1.handleValues[0] + "%", ctx_r1.handleValues[1] - ctx_r1.handleValues[0] + "%"));
} }
const _c5 = function (a0) { return { "height": a0 }; };
function Slider_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c5, ctx_r2.handleValue + "%"));
} }
const _c6 = function (a0) { return { "width": a0 }; };
function Slider_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c6, ctx_r3.handleValue + "%"));
} }
const _c7 = function (a0, a1) { return { "left": a0, "bottom": a1 }; };
function Slider_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 5, 6);
    ɵngcc0.ɵɵlistener("keydown", function Slider_span_5_Template_span_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onHandleKeydown($event); })("mousedown", function Slider_span_5_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onMouseDown($event); })("touchstart", function Slider_span_5_Template_span_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onTouchStart($event); })("touchmove", function Slider_span_5_Template_span_touchmove_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onTouchMove($event); })("touchend", function Slider_span_5_Template_span_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onTouchEnd($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transition", ctx_r4.dragging ? "none" : null);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(8, _c7, ctx_r4.orientation == "horizontal" ? ctx_r4.handleValue + "%" : null, ctx_r4.orientation == "vertical" ? ctx_r4.handleValue + "%" : null));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r4.disabled ? null : ctx_r4.tabindex)("aria-valuemin", ctx_r4.min)("aria-valuenow", ctx_r4.value)("aria-valuemax", ctx_r4.max)("aria-labelledby", ctx_r4.ariaLabelledBy);
} }
const _c8 = function (a0) { return { "p-slider-handle-active": a0 }; };
function Slider_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 7, 8);
    ɵngcc0.ɵɵlistener("keydown", function Slider_span_6_Template_span_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onHandleKeydown($event, 0); })("mousedown", function Slider_span_6_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onMouseDown($event, 0); })("touchstart", function Slider_span_6_Template_span_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onTouchStart($event, 0); })("touchmove", function Slider_span_6_Template_span_touchmove_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onTouchMove($event, 0); })("touchend", function Slider_span_6_Template_span_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onTouchEnd($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transition", ctx_r5.dragging ? "none" : null);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(9, _c7, ctx_r5.rangeStartLeft, ctx_r5.rangeStartBottom))("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c8, ctx_r5.handleIndex == 0));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r5.disabled ? null : ctx_r5.tabindex)("aria-valuemin", ctx_r5.min)("aria-valuenow", ctx_r5.value ? ctx_r5.value[0] : null)("aria-valuemax", ctx_r5.max)("aria-labelledby", ctx_r5.ariaLabelledBy);
} }
function Slider_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 7, 9);
    ɵngcc0.ɵɵlistener("keydown", function Slider_span_7_Template_span_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onHandleKeydown($event, 1); })("mousedown", function Slider_span_7_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onMouseDown($event, 1); })("touchstart", function Slider_span_7_Template_span_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onTouchStart($event, 1); })("touchmove", function Slider_span_7_Template_span_touchmove_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onTouchMove($event, 1); })("touchend", function Slider_span_7_Template_span_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onTouchEnd($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transition", ctx_r6.dragging ? "none" : null);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(9, _c7, ctx_r6.rangeEndLeft, ctx_r6.rangeEndBottom))("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c8, ctx_r6.handleIndex == 1));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r6.disabled ? null : ctx_r6.tabindex)("aria-valuemin", ctx_r6.min)("aria-valuenow", ctx_r6.value ? ctx_r6.value[1] : null)("aria-valuemax", ctx_r6.max)("aria-labelledby", ctx_r6.ariaLabelledBy);
} }
const _c9 = function (a1, a2, a3, a4) { return { "p-slider p-component": true, "p-disabled": a1, "p-slider-horizontal": a2, "p-slider-vertical": a3, "p-slider-animate": a4 }; };
export const SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Slider),
    multi: true
};
export class Slider {
    constructor(el, renderer, ngZone, cd) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cd = cd;
        this.min = 0;
        this.max = 100;
        this.orientation = 'horizontal';
        this.tabindex = 0;
        this.onChange = new EventEmitter();
        this.onSlideEnd = new EventEmitter();
        this.handleValues = [];
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.handleIndex = 0;
    }
    onMouseDown(event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = true;
        this.updateDomData();
        this.sliderHandleClick = true;
        if (this.range && this.handleValues && this.handleValues[0] === this.max) {
            this.handleIndex = 0;
        }
        else {
            this.handleIndex = index;
        }
        this.bindDragListeners();
        event.target.focus();
        event.preventDefault();
        if (this.animate) {
            DomHandler.removeClass(this.el.nativeElement.children[0], 'p-slider-animate');
        }
    }
    onTouchStart(event, index) {
        if (this.disabled) {
            return;
        }
        var touchobj = event.changedTouches[0];
        this.startHandleValue = (this.range) ? this.handleValues[index] : this.handleValue;
        this.dragging = true;
        if (this.range && this.handleValues && this.handleValues[0] === this.max) {
            this.handleIndex = 0;
        }
        else {
            this.handleIndex = index;
        }
        if (this.orientation === 'horizontal') {
            this.startx = parseInt(touchobj.clientX, 10);
            this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        }
        else {
            this.starty = parseInt(touchobj.clientY, 10);
            this.barHeight = this.el.nativeElement.children[0].offsetHeight;
        }
        if (this.animate) {
            DomHandler.removeClass(this.el.nativeElement.children[0], 'p-slider-animate');
        }
        event.preventDefault();
    }
    onTouchMove(event, index) {
        if (this.disabled) {
            return;
        }
        var touchobj = event.changedTouches[0], handleValue = 0;
        if (this.orientation === 'horizontal') {
            handleValue = Math.floor(((parseInt(touchobj.clientX, 10) - this.startx) * 100) / (this.barWidth)) + this.startHandleValue;
        }
        else {
            handleValue = Math.floor(((this.starty - parseInt(touchobj.clientY, 10)) * 100) / (this.barHeight)) + this.startHandleValue;
        }
        this.setValueFromHandle(event, handleValue);
        event.preventDefault();
    }
    onTouchEnd(event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = false;
        if (this.range)
            this.onSlideEnd.emit({ originalEvent: event, values: this.values });
        else
            this.onSlideEnd.emit({ originalEvent: event, value: this.value });
        if (this.animate) {
            DomHandler.addClass(this.el.nativeElement.children[0], 'p-slider-animate');
        }
        event.preventDefault();
    }
    onBarClick(event) {
        if (this.disabled) {
            return;
        }
        if (!this.sliderHandleClick) {
            this.updateDomData();
            this.handleChange(event);
        }
        this.sliderHandleClick = false;
    }
    onHandleKeydown(event, handleIndex) {
        if (this.disabled) {
            return;
        }
        if (event.which == 38 || event.which == 39) {
            this.spin(event, 1, handleIndex);
        }
        else if (event.which == 37 || event.which == 40) {
            this.spin(event, -1, handleIndex);
        }
    }
    spin(event, dir, handleIndex) {
        let step = (this.step || 1) * dir;
        if (this.range) {
            this.handleIndex = handleIndex;
            this.updateValue(this.values[this.handleIndex] + step);
            this.updateHandleValue();
        }
        else {
            this.updateValue(this.value + step);
            this.updateHandleValue();
        }
        event.preventDefault();
    }
    handleChange(event) {
        let handleValue = this.calculateHandleValue(event);
        this.setValueFromHandle(event, handleValue);
    }
    bindDragListeners() {
        this.ngZone.runOutsideAngular(() => {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            if (!this.dragListener) {
                this.dragListener = this.renderer.listen(documentTarget, 'mousemove', (event) => {
                    if (this.dragging) {
                        this.ngZone.run(() => {
                            this.handleChange(event);
                        });
                    }
                });
            }
            if (!this.mouseupListener) {
                this.mouseupListener = this.renderer.listen(documentTarget, 'mouseup', (event) => {
                    if (this.dragging) {
                        this.dragging = false;
                        this.ngZone.run(() => {
                            if (this.range)
                                this.onSlideEnd.emit({ originalEvent: event, values: this.values });
                            else
                                this.onSlideEnd.emit({ originalEvent: event, value: this.value });
                            if (this.animate) {
                                DomHandler.addClass(this.el.nativeElement.children[0], 'p-slider-animate');
                            }
                        });
                    }
                });
            }
        });
    }
    unbindDragListeners() {
        if (this.dragListener) {
            this.dragListener();
        }
        if (this.mouseupListener) {
            this.mouseupListener();
        }
    }
    setValueFromHandle(event, handleValue) {
        this.sliderHandleClick = false;
        let newValue = this.getValueFromHandle(handleValue);
        if (this.range) {
            if (this.step) {
                this.handleStepChange(newValue, this.values[this.handleIndex]);
            }
            else {
                this.handleValues[this.handleIndex] = handleValue;
                this.updateValue(newValue, event);
            }
        }
        else {
            if (this.step) {
                this.handleStepChange(newValue, this.value);
            }
            else {
                this.handleValue = handleValue;
                this.updateValue(newValue, event);
            }
        }
        this.cd.markForCheck();
    }
    handleStepChange(newValue, oldValue) {
        let diff = (newValue - oldValue);
        let val = oldValue;
        if (diff < 0) {
            val = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
        }
        else if (diff > 0) {
            val = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
        }
        this.updateValue(val);
        this.updateHandleValue();
    }
    writeValue(value) {
        if (this.range)
            this.values = value || [0, 0];
        else
            this.value = value || 0;
        this.updateHandleValue();
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    get rangeStartLeft() {
        return this.isVertical() ? 'auto' : this.handleValues[0] + '%';
    }
    get rangeStartBottom() {
        return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
    }
    get rangeEndLeft() {
        return this.isVertical() ? 'auto' : this.handleValues[1] + '%';
    }
    get rangeEndBottom() {
        return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
    }
    isVertical() {
        return this.orientation === 'vertical';
    }
    updateDomData() {
        let rect = this.el.nativeElement.children[0].getBoundingClientRect();
        this.initX = rect.left + DomHandler.getWindowScrollLeft();
        this.initY = rect.top + DomHandler.getWindowScrollTop();
        this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    }
    calculateHandleValue(event) {
        if (this.orientation === 'horizontal')
            return ((event.pageX - this.initX) * 100) / (this.barWidth);
        else
            return (((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight);
    }
    updateHandleValue() {
        if (this.range) {
            this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
            this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
        }
        else {
            if (this.value < this.min)
                this.handleValue = 0;
            else if (this.value > this.max)
                this.handleValue = 100;
            else
                this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
        }
    }
    updateValue(val, event) {
        if (this.range) {
            let value = val;
            if (this.handleIndex == 0) {
                if (value < this.min) {
                    value = this.min;
                    this.handleValues[0] = 0;
                }
                else if (value > this.values[1]) {
                    value = this.values[1];
                    this.handleValues[0] = this.handleValues[1];
                }
                this.sliderHandleStart.nativeElement.focus();
            }
            else {
                if (value > this.max) {
                    value = this.max;
                    this.handleValues[1] = 100;
                }
                else if (value < this.values[0]) {
                    value = this.values[0];
                    this.handleValues[1] = this.handleValues[0];
                }
                this.sliderHandleEnd.nativeElement.focus();
            }
            this.values[this.handleIndex] = this.getNormalizedValue(value);
            this.values = this.values.slice();
            this.onModelChange(this.values);
            this.onChange.emit({ event: event, values: this.values });
        }
        else {
            if (val < this.min) {
                val = this.min;
                this.handleValue = 0;
            }
            else if (val > this.max) {
                val = this.max;
                this.handleValue = 100;
            }
            this.value = this.getNormalizedValue(val);
            this.onModelChange(this.value);
            this.onChange.emit({ event: event, value: this.value });
            this.sliderHandle.nativeElement.focus();
        }
    }
    getValueFromHandle(handleValue) {
        return (this.max - this.min) * (handleValue / 100) + this.min;
    }
    getDecimalsCount(value) {
        if (value && Math.floor(value) !== value)
            return value.toString().split(".")[1].length || 0;
        return 0;
    }
    getNormalizedValue(val) {
        let decimalsCount = this.getDecimalsCount(this.step);
        if (decimalsCount > 0) {
            return +val.toFixed(decimalsCount);
        }
        else {
            return Math.floor(val);
        }
    }
    ngOnDestroy() {
        this.unbindDragListeners();
    }
}
Slider.ɵfac = function Slider_Factory(t) { return new (t || Slider)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Slider.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Slider, selectors: [["p-slider"]], viewQuery: function Slider_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sliderHandle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sliderHandleStart = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sliderHandleEnd = _t.first);
    } }, inputs: { min: "min", max: "max", orientation: "orientation", tabindex: "tabindex", disabled: "disabled", animate: "animate", step: "step", range: "range", style: "style", styleClass: "styleClass", ariaLabelledBy: "ariaLabelledBy" }, outputs: { onChange: "onChange", onSlideEnd: "onSlideEnd" }, features: [ɵngcc0.ɵɵProvidersFeature([SLIDER_VALUE_ACCESSOR])], decls: 8, vars: 16, consts: [[3, "ngStyle", "ngClass", "click"], ["class", "p-slider-range", 3, "ngStyle", 4, "ngIf"], ["class", "p-slider-handle", 3, "transition", "ngStyle", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["class", "p-slider-handle", 3, "transition", "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], [1, "p-slider-range", 3, "ngStyle"], [1, "p-slider-handle", 3, "ngStyle", "keydown", "mousedown", "touchstart", "touchmove", "touchend"], ["sliderHandle", ""], [1, "p-slider-handle", 3, "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend"], ["sliderHandleStart", ""], ["sliderHandleEnd", ""]], template: function Slider_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function Slider_Template_div_click_0_listener($event) { return ctx.onBarClick($event); });
        ɵngcc0.ɵɵtemplate(1, Slider_span_1_Template, 1, 4, "span", 1);
        ɵngcc0.ɵɵtemplate(2, Slider_span_2_Template, 1, 4, "span", 1);
        ɵngcc0.ɵɵtemplate(3, Slider_span_3_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(4, Slider_span_4_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(5, Slider_span_5_Template, 2, 11, "span", 2);
        ɵngcc0.ɵɵtemplate(6, Slider_span_6_Template, 2, 14, "span", 3);
        ɵngcc0.ɵɵtemplate(7, Slider_span_7_Template, 2, 14, "span", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction4(11, _c9, ctx.disabled, ctx.orientation == "horizontal", ctx.orientation == "vertical", ctx.animate));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range && ctx.orientation == "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range && ctx.orientation == "vertical");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.range && ctx.orientation == "vertical");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.range && ctx.orientation == "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.range);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-slider{position:relative}.p-slider .p-slider-handle{cursor:grab;touch-action:none}.p-slider-range,.p-slider .p-slider-handle{display:block;position:absolute}.p-slider-horizontal .p-slider-range{height:100%;left:0;top:0}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
Slider.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
Slider.propDecorators = {
    animate: [{ type: Input }],
    disabled: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    orientation: [{ type: Input }],
    step: [{ type: Input }],
    range: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    tabindex: [{ type: Input }],
    onChange: [{ type: Output }],
    onSlideEnd: [{ type: Output }],
    sliderHandle: [{ type: ViewChild, args: ["sliderHandle",] }],
    sliderHandleStart: [{ type: ViewChild, args: ["sliderHandleStart",] }],
    sliderHandleEnd: [{ type: ViewChild, args: ["sliderHandleEnd",] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Slider, [{
        type: Component,
        args: [{
                selector: 'p-slider',
                template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{'p-slider p-component':true,'p-disabled':disabled,
            'p-slider-horizontal':orientation == 'horizontal','p-slider-vertical':orientation == 'vertical','p-slider-animate':animate}"
            (click)="onBarClick($event)">
            <span *ngIf="range && orientation == 'horizontal'" class="p-slider-range" [ngStyle]="{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}"></span>
            <span *ngIf="range && orientation == 'vertical'" class="p-slider-range" [ngStyle]="{'bottom':handleValues[0] + '%',height: (handleValues[1] - handleValues[0] + '%')}"></span>
            <span *ngIf="!range && orientation=='vertical'" class="p-slider-range" [ngStyle]="{'height': handleValue + '%'}"></span>
            <span *ngIf="!range && orientation=='horizontal'" class="p-slider-range" [ngStyle]="{'width': handleValue + '%'}"></span>
            <span #sliderHandle *ngIf="!range" [attr.tabindex]="disabled ? null : tabindex" (keydown)="onHandleKeydown($event)" class="p-slider-handle" (mousedown)="onMouseDown($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)"
                [style.transition]="dragging ? 'none': null" [ngStyle]="{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}"
                [attr.aria-valuemin]="min" [attr.aria-valuenow]="value" [attr.aria-valuemax]="max" [attr.aria-labelledby]="ariaLabelledBy"></span>
            <span #sliderHandleStart *ngIf="range" [attr.tabindex]="disabled ? null : tabindex" (keydown)="onHandleKeydown($event,0)" (mousedown)="onMouseDown($event,0)" (touchstart)="onTouchStart($event,0)" (touchmove)="onTouchMove($event,0)" (touchend)="onTouchEnd($event)" [style.transition]="dragging ? 'none': null" class="p-slider-handle" 
                [ngStyle]="{'left': rangeStartLeft, 'bottom': rangeStartBottom}" [ngClass]="{'p-slider-handle-active':handleIndex==0}"
                [attr.aria-valuemin]="min" [attr.aria-valuenow]="value ? value[0] : null" [attr.aria-valuemax]="max" [attr.aria-labelledby]="ariaLabelledBy"></span>
            <span #sliderHandleEnd *ngIf="range" [attr.tabindex]="disabled ? null : tabindex" (keydown)="onHandleKeydown($event,1)" (mousedown)="onMouseDown($event,1)" (touchstart)="onTouchStart($event,1)" (touchmove)="onTouchMove($event,1)" (touchend)="onTouchEnd($event)" [style.transition]="dragging ? 'none': null" class="p-slider-handle" 
                [ngStyle]="{'left': rangeEndLeft, 'bottom': rangeEndBottom}" [ngClass]="{'p-slider-handle-active':handleIndex==1}"
                [attr.aria-valuemin]="min" [attr.aria-valuenow]="value ? value[1] : null" [attr.aria-valuemax]="max" [attr.aria-labelledby]="ariaLabelledBy"></span>
        </div>
    `,
                providers: [SLIDER_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-slider{position:relative}.p-slider .p-slider-handle{cursor:grab;touch-action:none}.p-slider-range,.p-slider .p-slider-handle{display:block;position:absolute}.p-slider-horizontal .p-slider-range{height:100%;left:0;top:0}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { min: [{
            type: Input
        }], max: [{
            type: Input
        }], orientation: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onSlideEnd: [{
            type: Output
        }], disabled: [{
            type: Input
        }], animate: [{
            type: Input
        }], step: [{
            type: Input
        }], range: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], sliderHandle: [{
            type: ViewChild,
            args: ["sliderHandle"]
        }], sliderHandleStart: [{
            type: ViewChild,
            args: ["sliderHandleStart"]
        }], sliderHandleEnd: [{
            type: ViewChild,
            args: ["sliderHandleEnd"]
        }] }); })();
export class SliderModule {
}
SliderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SliderModule });
SliderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SliderModule_Factory(t) { return new (t || SliderModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SliderModule, { declarations: function () { return [Slider]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Slider]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SliderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Slider],
                declarations: [Slider]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWEsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdNLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQVE7QUFDMUMsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDdkMsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQTRCRixNQUFNLE9BQU8sTUFBTTtBQUFHLElBc0VsQixZQUFtQixFQUFjLEVBQVMsUUFBbUIsRUFBVSxNQUFjLEVBQVMsRUFBcUI7QUFBSSxRQUFwRyxPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBaEUzRyxRQUFHLEdBQVcsQ0FBQyxDQUFDO0FBQzdCLFFBQ2EsUUFBRyxHQUFXLEdBQUcsQ0FBQztB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LE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUNqQixZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FDekI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgUmVuZGVyZXIyLE5nWm9uZSxDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RvbUhhbmRsZXJ9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBTTElERVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdDbGFzc109XCJ7J3Atc2xpZGVyIHAtY29tcG9uZW50Jzp0cnVlLCdwLWRpc2FibGVkJzpkaXNhYmxlZCxcbiAgICAgICAgICAgICdwLXNsaWRlci1ob3Jpem9udGFsJzpvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcsJ3Atc2xpZGVyLXZlcnRpY2FsJzpvcmllbnRhdGlvbiA9PSAndmVydGljYWwnLCdwLXNsaWRlci1hbmltYXRlJzphbmltYXRlfVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25CYXJDbGljaygkZXZlbnQpXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJhbmdlICYmIG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJ1wiIGNsYXNzPVwicC1zbGlkZXItcmFuZ2VcIiBbbmdTdHlsZV09XCJ7J2xlZnQnOmhhbmRsZVZhbHVlc1swXSArICclJyx3aWR0aDogKGhhbmRsZVZhbHVlc1sxXSAtIGhhbmRsZVZhbHVlc1swXSArICclJyl9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyYW5nZSAmJiBvcmllbnRhdGlvbiA9PSAndmVydGljYWwnXCIgY2xhc3M9XCJwLXNsaWRlci1yYW5nZVwiIFtuZ1N0eWxlXT1cInsnYm90dG9tJzpoYW5kbGVWYWx1ZXNbMF0gKyAnJScsaGVpZ2h0OiAoaGFuZGxlVmFsdWVzWzFdIC0gaGFuZGxlVmFsdWVzWzBdICsgJyUnKX1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFyYW5nZSAmJiBvcmllbnRhdGlvbj09J3ZlcnRpY2FsJ1wiIGNsYXNzPVwicC1zbGlkZXItcmFuZ2VcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGhhbmRsZVZhbHVlICsgJyUnfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIXJhbmdlICYmIG9yaWVudGF0aW9uPT0naG9yaXpvbnRhbCdcIiBjbGFzcz1cInAtc2xpZGVyLXJhbmdlXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IGhhbmRsZVZhbHVlICsgJyUnfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICNzbGlkZXJIYW5kbGUgKm5nSWY9XCIhcmFuZ2VcIiBbYXR0ci50YWJpbmRleF09XCJkaXNhYmxlZCA/IG51bGwgOiB0YWJpbmRleFwiIChrZXlkb3duKT1cIm9uSGFuZGxlS2V5ZG93bigkZXZlbnQpXCIgY2xhc3M9XCJwLXNsaWRlci1oYW5kbGVcIiAobW91c2Vkb3duKT1cIm9uTW91c2VEb3duKCRldmVudClcIiAodG91Y2hzdGFydCk9XCJvblRvdWNoU3RhcnQoJGV2ZW50KVwiICh0b3VjaG1vdmUpPVwib25Ub3VjaE1vdmUoJGV2ZW50KVwiICh0b3VjaGVuZCk9XCJvblRvdWNoRW5kKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS50cmFuc2l0aW9uXT1cImRyYWdnaW5nID8gJ25vbmUnOiBudWxsXCIgW25nU3R5bGVdPVwieydsZWZ0Jzogb3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnID8gaGFuZGxlVmFsdWUgKyAnJScgOiBudWxsLCdib3R0b20nOiBvcmllbnRhdGlvbiA9PSAndmVydGljYWwnID8gaGFuZGxlVmFsdWUgKyAnJScgOiBudWxsfVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW1pbl09XCJtaW5cIiBbYXR0ci5hcmlhLXZhbHVlbm93XT1cInZhbHVlXCIgW2F0dHIuYXJpYS12YWx1ZW1heF09XCJtYXhcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAjc2xpZGVySGFuZGxlU3RhcnQgKm5nSWY9XCJyYW5nZVwiIFthdHRyLnRhYmluZGV4XT1cImRpc2FibGVkID8gbnVsbCA6IHRhYmluZGV4XCIgKGtleWRvd24pPVwib25IYW5kbGVLZXlkb3duKCRldmVudCwwKVwiIChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJGV2ZW50LDApXCIgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KCRldmVudCwwKVwiICh0b3VjaG1vdmUpPVwib25Ub3VjaE1vdmUoJGV2ZW50LDApXCIgKHRvdWNoZW5kKT1cIm9uVG91Y2hFbmQoJGV2ZW50KVwiIFtzdHlsZS50cmFuc2l0aW9uXT1cImRyYWdnaW5nID8gJ25vbmUnOiBudWxsXCIgY2xhc3M9XCJwLXNsaWRlci1oYW5kbGVcIiBcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2xlZnQnOiByYW5nZVN0YXJ0TGVmdCwgJ2JvdHRvbSc6IHJhbmdlU3RhcnRCb3R0b219XCIgW25nQ2xhc3NdPVwieydwLXNsaWRlci1oYW5kbGUtYWN0aXZlJzpoYW5kbGVJbmRleD09MH1cIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWVtaW5dPVwibWluXCIgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJ2YWx1ZSA/IHZhbHVlWzBdIDogbnVsbFwiIFthdHRyLmFyaWEtdmFsdWVtYXhdPVwibWF4XCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gI3NsaWRlckhhbmRsZUVuZCAqbmdJZj1cInJhbmdlXCIgW2F0dHIudGFiaW5kZXhdPVwiZGlzYWJsZWQgPyBudWxsIDogdGFiaW5kZXhcIiAoa2V5ZG93bik9XCJvbkhhbmRsZUtleWRvd24oJGV2ZW50LDEpXCIgKG1vdXNlZG93bik9XCJvbk1vdXNlRG93bigkZXZlbnQsMSlcIiAodG91Y2hzdGFydCk9XCJvblRvdWNoU3RhcnQoJGV2ZW50LDEpXCIgKHRvdWNobW92ZSk9XCJvblRvdWNoTW92ZSgkZXZlbnQsMSlcIiAodG91Y2hlbmQpPVwib25Ub3VjaEVuZCgkZXZlbnQpXCIgW3N0eWxlLnRyYW5zaXRpb25dPVwiZHJhZ2dpbmcgPyAnbm9uZSc6IG51bGxcIiBjbGFzcz1cInAtc2xpZGVyLWhhbmRsZVwiIFxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnbGVmdCc6IHJhbmdlRW5kTGVmdCwgJ2JvdHRvbSc6IHJhbmdlRW5kQm90dG9tfVwiIFtuZ0NsYXNzXT1cInsncC1zbGlkZXItaGFuZGxlLWFjdGl2ZSc6aGFuZGxlSW5kZXg9PTF9XCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVlbWluXT1cIm1pblwiIFthdHRyLmFyaWEtdmFsdWVub3ddPVwidmFsdWUgPyB2YWx1ZVsxXSA6IG51bGxcIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtTTElERVJfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2xpZGVyLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlciBpbXBsZW1lbnRzIE9uRGVzdHJveSxDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBhbmltYXRlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBtaW46IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDEwMDtcblxuICAgIEBJbnB1dCgpIG9yaWVudGF0aW9uOiBzdHJpbmcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSByYW5nZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvblNsaWRlRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAVmlld0NoaWxkKFwic2xpZGVySGFuZGxlXCIpIHNsaWRlckhhbmRsZTogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoXCJzbGlkZXJIYW5kbGVTdGFydFwiKSBzbGlkZXJIYW5kbGVTdGFydDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoXCJzbGlkZXJIYW5kbGVFbmRcIikgc2xpZGVySGFuZGxlRW5kOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gICAgXG4gICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XG4gICAgXG4gICAgcHVibGljIGhhbmRsZVZhbHVlOiBudW1iZXI7XG4gICAgXG4gICAgcHVibGljIGhhbmRsZVZhbHVlczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgXG4gICAgcHVibGljIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gICAgXG4gICAgcHVibGljIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIHB1YmxpYyBkcmFnZ2luZzogYm9vbGVhbjtcbiAgICBcbiAgICBwdWJsaWMgZHJhZ0xpc3RlbmVyOiBhbnk7XG4gICAgXG4gICAgcHVibGljIG1vdXNldXBMaXN0ZW5lcjogYW55O1xuICAgICAgICBcbiAgICBwdWJsaWMgaW5pdFg6IG51bWJlcjtcbiAgICBcbiAgICBwdWJsaWMgaW5pdFk6IG51bWJlcjtcbiAgICBcbiAgICBwdWJsaWMgYmFyV2lkdGg6IG51bWJlcjtcbiAgICBcbiAgICBwdWJsaWMgYmFySGVpZ2h0OiBudW1iZXI7XG4gICAgXG4gICAgcHVibGljIHNsaWRlckhhbmRsZUNsaWNrOiBib29sZWFuO1xuICAgIFxuICAgIHB1YmxpYyBoYW5kbGVJbmRleDogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBzdGFydEhhbmRsZVZhbHVlOiBhbnk7XG5cbiAgICBwdWJsaWMgc3RhcnR4OiBudW1iZXI7XG5cbiAgICBwdWJsaWMgc3RhcnR5OiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICBcbiAgICBvbk1vdXNlRG93bihldmVudCwgaW5kZXg/Om51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVEb21EYXRhKCk7XG4gICAgICAgIHRoaXMuc2xpZGVySGFuZGxlQ2xpY2sgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLmhhbmRsZVZhbHVlcyAmJiB0aGlzLmhhbmRsZVZhbHVlc1swXSA9PT0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRHJhZ0xpc3RlbmVycygpO1xuICAgICAgICBldmVudC50YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5hbmltYXRlKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgJ3Atc2xpZGVyLWFuaW1hdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChldmVudCwgaW5kZXg/Om51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvdWNob2JqID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHRoaXMuc3RhcnRIYW5kbGVWYWx1ZSA9ICh0aGlzLnJhbmdlKSA/IHRoaXMuaGFuZGxlVmFsdWVzW2luZGV4XSA6IHRoaXMuaGFuZGxlVmFsdWU7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLmhhbmRsZVZhbHVlcyAmJiB0aGlzLmhhbmRsZVZhbHVlc1swXSA9PT0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5zdGFydHggPSBwYXJzZUludCh0b3VjaG9iai5jbGllbnRYLCAxMCk7XG4gICAgICAgICAgICB0aGlzLmJhcldpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydHkgPSBwYXJzZUludCh0b3VjaG9iai5jbGllbnRZLCAxMCk7XG4gICAgICAgICAgICB0aGlzLmJhckhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmltYXRlKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgJ3Atc2xpZGVyLWFuaW1hdGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQsIGluZGV4PzpudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHRvdWNob2JqID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0sXG4gICAgICAgIGhhbmRsZVZhbHVlID0gMDtcblxuICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBoYW5kbGVWYWx1ZSA9IE1hdGguZmxvb3IoKChwYXJzZUludCh0b3VjaG9iai5jbGllbnRYLCAxMCkgLSB0aGlzLnN0YXJ0eCkgKiAxMDApIC8gKHRoaXMuYmFyV2lkdGgpKSArIHRoaXMuc3RhcnRIYW5kbGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZVZhbHVlID0gTWF0aC5mbG9vcigoKHRoaXMuc3RhcnR5IC0gcGFyc2VJbnQodG91Y2hvYmouY2xpZW50WSwgMTApKSAqIDEwMCkgLyAodGhpcy5iYXJIZWlnaHQpKSAgKyB0aGlzLnN0YXJ0SGFuZGxlVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFZhbHVlRnJvbUhhbmRsZShldmVudCwgaGFuZGxlVmFsdWUpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChldmVudCwgaW5kZXg/Om51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucmFuZ2UpXG4gICAgICAgICAgICB0aGlzLm9uU2xpZGVFbmQuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlczogdGhpcy52YWx1ZXN9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5vblNsaWRlRW5kLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZX0pO1xuXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAncC1zbGlkZXItYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBcbiAgICBvbkJhckNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5zbGlkZXJIYW5kbGVDbGljaykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEb21EYXRhKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZShldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2xpZGVySGFuZGxlQ2xpY2sgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkhhbmRsZUtleWRvd24oZXZlbnQsIGhhbmRsZUluZGV4PzpudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT0gMzggfHwgZXZlbnQud2hpY2ggPT0gMzkpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbihldmVudCwgMSwgaGFuZGxlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LndoaWNoID09IDM3IHx8IGV2ZW50LndoaWNoID09IDQwKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW4oZXZlbnQsIC0xLCBoYW5kbGVJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3BpbihldmVudCwgZGlyOiBudW1iZXIsIGhhbmRsZUluZGV4PzpudW1iZXIpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSAodGhpcy5zdGVwIHx8IDEpICogZGlyO1xuXG4gICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUluZGV4ID0gaGFuZGxlSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWVzW3RoaXMuaGFuZGxlSW5kZXhdICsgc3RlcCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZVZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUgKyBzdGVwKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGFuZGxlVmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBsZXQgaGFuZGxlVmFsdWUgPSB0aGlzLmNhbGN1bGF0ZUhhbmRsZVZhbHVlKGV2ZW50KTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUZyb21IYW5kbGUoZXZlbnQsIGhhbmRsZVZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgYmluZERyYWdMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50VGFyZ2V0OiBhbnkgPSB0aGlzLmVsID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAnZG9jdW1lbnQnO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0xpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudFRhcmdldCwgJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZShldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubW91c2V1cExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZXVwTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudFRhcmdldCwgJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmFuZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TbGlkZUVuZC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWVzOiB0aGlzLnZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNsaWRlRW5kLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgJ3Atc2xpZGVyLWFuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdW5iaW5kRHJhZ0xpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5tb3VzZXVwTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2V1cExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWYWx1ZUZyb21IYW5kbGUoZXZlbnQ6IEV2ZW50LCBoYW5kbGVWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2xpZGVySGFuZGxlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21IYW5kbGUoaGFuZGxlVmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwQ2hhbmdlKG5ld1ZhbHVlLCB0aGlzLnZhbHVlc1t0aGlzLmhhbmRsZUluZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlc1t0aGlzLmhhbmRsZUluZGV4XSA9IGhhbmRsZVZhbHVlOyAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG5ld1ZhbHVlLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5zdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwQ2hhbmdlKG5ld1ZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlID0gaGFuZGxlVmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShuZXdWYWx1ZSwgZXZlbnQpO1xuICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlU3RlcENoYW5nZShuZXdWYWx1ZTogbnVtYmVyLCBvbGRWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkaWZmID0gKG5ld1ZhbHVlIC0gb2xkVmFsdWUpO1xuICAgICAgICBsZXQgdmFsID0gb2xkVmFsdWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgIHZhbCA9IG9sZFZhbHVlICsgTWF0aC5jZWlsKG5ld1ZhbHVlIC8gdGhpcy5zdGVwIC0gb2xkVmFsdWUgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICB2YWwgPSBvbGRWYWx1ZSArIE1hdGguZmxvb3IobmV3VmFsdWUgLyB0aGlzLnN0ZXAgLSBvbGRWYWx1ZSAvIHRoaXMuc3RlcCkgKiB0aGlzLnN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsKTtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVWYWx1ZSgpO1xuICAgIH1cbiAgICBcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJhbmdlKVxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXx8WzAsMF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZXx8MDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlVmFsdWUoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG4gICAgXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHJhbmdlU3RhcnRMZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZlcnRpY2FsKCkgPyAnYXV0bycgOiB0aGlzLmhhbmRsZVZhbHVlc1swXSArICclJztcbiAgICB9XG4gICAgXG4gICAgZ2V0IHJhbmdlU3RhcnRCb3R0b20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmVydGljYWwoKSA/IHRoaXMuaGFuZGxlVmFsdWVzWzBdICsgJyUnIDogJ2F1dG8nO1xuICAgIH1cbiAgICBcbiAgICBnZXQgcmFuZ2VFbmRMZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZlcnRpY2FsKCkgPyAnYXV0bycgOiB0aGlzLmhhbmRsZVZhbHVlc1sxXSArICclJztcbiAgICB9XG4gICAgXG4gICAgZ2V0IHJhbmdlRW5kQm90dG9tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZlcnRpY2FsKCkgPyB0aGlzLmhhbmRsZVZhbHVlc1sxXSArICclJyA6ICdhdXRvJztcbiAgICB9XG4gICAgXG4gICAgaXNWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZURvbURhdGEoKTogdm9pZCB7XG4gICAgICAgIGxldCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmluaXRYID0gcmVjdC5sZWZ0ICsgRG9tSGFuZGxlci5nZXRXaW5kb3dTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHRoaXMuaW5pdFkgPSByZWN0LnRvcCArIERvbUhhbmRsZXIuZ2V0V2luZG93U2Nyb2xsVG9wKCk7XG4gICAgICAgIHRoaXMuYmFyV2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuYmFySGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgXG4gICAgY2FsY3VsYXRlSGFuZGxlVmFsdWUoZXZlbnQpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgcmV0dXJuICgoZXZlbnQucGFnZVggLSB0aGlzLmluaXRYKSAqIDEwMCkgLyAodGhpcy5iYXJXaWR0aCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybigoKHRoaXMuaW5pdFkgKyB0aGlzLmJhckhlaWdodCkgLSBldmVudC5wYWdlWSkgKiAxMDApIC8gKHRoaXMuYmFySGVpZ2h0KTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlSGFuZGxlVmFsdWUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlc1swXSA9ICh0aGlzLnZhbHVlc1swXSA8IHRoaXMubWluID8gMCA6IHRoaXMudmFsdWVzWzBdIC0gdGhpcy5taW4pICogMTAwIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZXNbMV0gPSAodGhpcy52YWx1ZXNbMV0gPiB0aGlzLm1heCA/IDEwMCA6IHRoaXMudmFsdWVzWzFdIC0gdGhpcy5taW4pICogMTAwIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPCB0aGlzLm1pbilcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlID0gMDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgPiB0aGlzLm1heClcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlID0gMTAwO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmFsdWUgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAqIDEwMCAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1cGRhdGVWYWx1ZSh2YWw6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZXNbMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IHRoaXMudmFsdWVzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmFsdWVzWzBdID0gdGhpcy5oYW5kbGVWYWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJIYW5kbGVTdGFydC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMubWF4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlc1sxXSA9IDEwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCB0aGlzLnZhbHVlc1swXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlc1sxXSA9IHRoaXMuaGFuZGxlVmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVySGFuZGxlRW5kLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbdGhpcy5oYW5kbGVJbmRleF0gPSB0aGlzLmdldE5vcm1hbGl6ZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzLnNsaWNlKCk7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtldmVudDogZXZlbnQsIHZhbHVlczogdGhpcy52YWx1ZXN9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWwgPCB0aGlzLm1pbikge1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMubWluO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmFsdWUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLm1heDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZhbHVlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5nZXROb3JtYWxpemVkVmFsdWUodmFsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtldmVudDogZXZlbnQsIHZhbHVlOiB0aGlzLnZhbHVlfSk7XG4gICAgICAgICAgICB0aGlzLnNsaWRlckhhbmRsZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgICAgICBcbiAgICBnZXRWYWx1ZUZyb21IYW5kbGUoaGFuZGxlVmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAoaGFuZGxlVmFsdWUgLyAxMDApICsgdGhpcy5taW47XG4gICAgfVxuXHRcblx0Z2V0RGVjaW1hbHNDb3VudCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRpZiAodmFsdWUgJiYgTWF0aC5mbG9vcih2YWx1ZSkgIT09IHZhbHVlKVxuXHRcdFx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB8fCAwO1xuXHRcdHJldHVybiAwO1xuXHR9XG5cdFxuXHRnZXROb3JtYWxpemVkVmFsdWUodmFsOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGxldCBkZWNpbWFsc0NvdW50ID0gdGhpcy5nZXREZWNpbWFsc0NvdW50KHRoaXMuc3RlcCk7XG5cdFx0aWYgKGRlY2ltYWxzQ291bnQgPiAwKSB7XG5cdFx0XHRyZXR1cm4gK3ZhbC50b0ZpeGVkKGRlY2ltYWxzQ291bnQpO1xuXHRcdH0gXG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuXHRcdH1cblx0fVxuICAgIFxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZERyYWdMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1NsaWRlcl0sXG4gICAgZGVjbGFyYXRpb25zOiBbU2xpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJNb2R1bGUgeyB9XG4iXX0=