import { ElementRef, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class Tooltip implements AfterViewInit, OnDestroy {
    el: ElementRef;
    zone: NgZone;
    tooltipPosition: string;
    tooltipEvent: string;
    appendTo: any;
    positionStyle: string;
    tooltipStyleClass: string;
    tooltipZIndex: string;
    escape: boolean;
    showDelay: number;
    hideDelay: number;
    life: number;
    get disabled(): boolean;
    set disabled(val: boolean);
    _disabled: boolean;
    container: any;
    styleClass: string;
    tooltipText: any;
    showTimeout: any;
    hideTimeout: any;
    active: boolean;
    _text: string;
    mouseEnterListener: Function;
    mouseLeaveListener: Function;
    clickListener: Function;
    focusListener: Function;
    blurListener: Function;
    scrollHandler: any;
    resizeListener: any;
    constructor(el: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    onMouseEnter(e: Event): void;
    onMouseLeave(e: Event): void;
    onFocus(e: Event): void;
    onBlur(e: Event): void;
    onClick(e: Event): void;
    activate(): void;
    deactivate(): void;
    get text(): string;
    set text(text: string);
    create(): void;
    show(): void;
    hide(): void;
    updateText(): void;
    align(): void;
    getHostOffset(): {
        left: any;
        top: any;
    };
    alignRight(): void;
    alignLeft(): void;
    alignTop(): void;
    alignBottom(): void;
    preAlign(position: string): void;
    isOutOfBounds(): boolean;
    onWindowResize(e: Event): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    unbindEvents(): void;
    remove(): void;
    clearShowTimeout(): void;
    clearHideTimeout(): void;
    clearTimeouts(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Tooltip, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Tooltip, "[pTooltip]", never, { "tooltipPosition": "tooltipPosition"; "tooltipEvent": "tooltipEvent"; "appendTo": "appendTo"; "tooltipZIndex": "tooltipZIndex"; "escape": "escape"; "disabled": "tooltipDisabled"; "text": "pTooltip"; "positionStyle": "positionStyle"; "tooltipStyleClass": "tooltipStyleClass"; "showDelay": "showDelay"; "hideDelay": "hideDelay"; "life": "life"; }, {}, never>;
}
export declare class TooltipModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TooltipModule, [typeof Tooltip], [typeof ɵngcc1.CommonModule], [typeof Tooltip]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TooltipModule>;
}

//# sourceMappingURL=tooltip.d.ts.map