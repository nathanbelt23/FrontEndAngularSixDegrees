import { ElementRef, EventEmitter, AfterViewInit, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgModel, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class InputTextarea implements OnInit, AfterViewInit, OnDestroy {
    el: ElementRef;
    ngModel: NgModel;
    control: NgControl;
    private cd;
    autoResize: boolean;
    onResize: EventEmitter<any>;
    filled: boolean;
    cachedScrollHeight: number;
    ngModelSubscription: Subscription;
    ngControlSubscription: Subscription;
    constructor(el: ElementRef, ngModel: NgModel, control: NgControl, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onInput(e: any): void;
    updateFilledState(): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    resize(event?: Event): void;
    updateState(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputTextarea, [null, { optional: true; }, { optional: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<InputTextarea, "[pInputTextarea]", never, { "autoResize": "autoResize"; }, { "onResize": "onResize"; }, never>;
}
export declare class InputTextareaModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<InputTextareaModule, [typeof InputTextarea], [typeof ɵngcc1.CommonModule], [typeof InputTextarea]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<InputTextareaModule>;
}

//# sourceMappingURL=inputtextarea.d.ts.map