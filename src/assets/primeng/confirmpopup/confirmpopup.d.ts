import { ElementRef, ChangeDetectorRef, OnDestroy, Renderer2 } from '@angular/core';
import { Confirmation, ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AnimationEvent } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
export declare class ConfirmPopup implements OnDestroy {
    el: ElementRef;
    private confirmationService;
    renderer: Renderer2;
    private cd;
    config: PrimeNGConfig;
    key: string;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    autoZIndex: boolean;
    baseZIndex: number;
    style: any;
    styleClass: string;
    container: HTMLDivElement;
    subscription: Subscription;
    confirmation: Confirmation;
    _visible: boolean;
    documentClickListener: any;
    documentResizeListener: any;
    scrollHandler: any;
    get visible(): any;
    set visible(value: any);
    constructor(el: ElementRef, confirmationService: ConfirmationService, renderer: Renderer2, cd: ChangeDetectorRef, config: PrimeNGConfig);
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    align(): void;
    hide(): void;
    accept(): void;
    reject(): void;
    bindListeners(): void;
    unbindListeners(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    onWindowResize(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    unsubscribeConfirmationSubscriptions(): void;
    onContainerDestroy(): void;
    restoreAppend(): void;
    get acceptButtonLabel(): string;
    get rejectButtonLabel(): string;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfirmPopup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConfirmPopup, "p-confirmPopup", never, { "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "visible": "visible"; "key": "key"; "style": "style"; "styleClass": "styleClass"; }, {}, never, never>;
}
export declare class ConfirmPopupModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ConfirmPopupModule, [typeof ConfirmPopup], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.ButtonModule], [typeof ConfirmPopup]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ConfirmPopupModule>;
}

//# sourceMappingURL=confirmpopup.d.ts.map