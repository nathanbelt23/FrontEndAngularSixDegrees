import { NgModule, Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
import * as ɵngcc3 from 'primeng/menu';

const _c0 = ["container"];
const _c1 = ["defaultbtn"];
const _c2 = ["menu"];
export class SplitButton {
    constructor() {
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
    }
    onDefaultButtonClick(event) {
        this.onClick.emit(event);
    }
    onDropdownButtonClick(event) {
        this.onDropdownClick.emit(event);
        this.menu.toggle({ currentTarget: this.containerViewChild.nativeElement, relativeAlign: this.appendTo == null });
    }
}
SplitButton.ɵfac = function SplitButton_Factory(t) { return new (t || SplitButton)(); };
SplitButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SplitButton, selectors: [["p-splitButton"]], viewQuery: function SplitButton_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.buttonViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menu = _t.first);
    } }, inputs: { iconPos: "iconPos", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", model: "model", icon: "icon", label: "label", style: "style", styleClass: "styleClass", menuStyle: "menuStyle", menuStyleClass: "menuStyleClass", disabled: "disabled", tabindex: "tabindex", appendTo: "appendTo", dir: "dir" }, outputs: { onClick: "onClick", onDropdownClick: "onDropdownClick" }, decls: 7, vars: 18, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["type", "button", "pButton", "", 1, "p-splitbutton-defaultbutton", 3, "icon", "iconPos", "label", "disabled", "click"], ["defaultbtn", ""], ["type", "button", "pButton", "", "icon", "pi pi-chevron-down", 1, "p-splitbutton-menubutton", 3, "disabled", "click"], [3, "popup", "model", "styleClass", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["menu", ""]], template: function SplitButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2, 3);
        ɵngcc0.ɵɵlistener("click", function SplitButton_Template_button_click_2_listener($event) { return ctx.onDefaultButtonClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵlistener("click", function SplitButton_Template_button_click_4_listener($event) { return ctx.onDropdownButtonClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "p-menu", 5, 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-splitbutton p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("icon", ctx.icon)("iconPos", ctx.iconPos)("label", ctx.label)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("tabindex", ctx.tabindex);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMap(ctx.menuStyle);
        ɵngcc0.ɵɵproperty("popup", true)("model", ctx.model)("styleClass", ctx.menuStyleClass)("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.ButtonDirective, ɵngcc3.Menu], styles: [".p-splitbutton{display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton{border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;flex:1 1 auto}.p-splitbutton-menubutton{align-items:center;border-bottom-left-radius:0;border-top-left-radius:0;display:flex;justify-content:center}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:flex}"], encapsulation: 2, changeDetection: 0 });
SplitButton.propDecorators = {
    model: [{ type: Input }],
    icon: [{ type: Input }],
    iconPos: [{ type: Input }],
    label: [{ type: Input }],
    onClick: [{ type: Output }],
    onDropdownClick: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    menuStyle: [{ type: Input }],
    menuStyleClass: [{ type: Input }],
    disabled: [{ type: Input }],
    tabindex: [{ type: Input }],
    appendTo: [{ type: Input }],
    dir: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    buttonViewChild: [{ type: ViewChild, args: ['defaultbtn',] }],
    menu: [{ type: ViewChild, args: ['menu',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplitButton, [{
        type: Component,
        args: [{
                selector: 'p-splitButton',
                template: `
        <div #container [ngClass]="'p-splitbutton p-component'" [ngStyle]="style" [class]="styleClass">
            <button #defaultbtn class="p-splitbutton-defaultbutton" type="button" pButton [icon]="icon" [iconPos]="iconPos" [label]="label" (click)="onDefaultButtonClick($event)" [disabled]="disabled" [attr.tabindex]="tabindex"></button>
            <button type="button" pButton class="p-splitbutton-menubutton" icon="pi pi-chevron-down" (click)="onDropdownButtonClick($event)" [disabled]="disabled"></button>
            <p-menu #menu [popup]="true" [model]="model" [style]="menuStyle" [styleClass]="menuStyleClass" [appendTo]="appendTo"
                    [showTransitionOptions]="showTransitionOptions" [hideTransitionOptions]="hideTransitionOptions"></p-menu>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-splitbutton{display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton{border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;flex:1 1 auto}.p-splitbutton-menubutton{align-items:center;border-bottom-left-radius:0;border-top-left-radius:0;display:flex;justify-content:center}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:flex}"]
            }]
    }], function () { return []; }, { iconPos: [{
            type: Input
        }], onClick: [{
            type: Output
        }], onDropdownClick: [{
            type: Output
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], model: [{
            type: Input
        }], icon: [{
            type: Input
        }], label: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], menuStyle: [{
            type: Input
        }], menuStyleClass: [{
            type: Input
        }], disabled: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], dir: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], buttonViewChild: [{
            type: ViewChild,
            args: ['defaultbtn']
        }], menu: [{
            type: ViewChild,
            args: ['menu']
        }] }); })();
export class SplitButtonModule {
}
SplitButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SplitButtonModule });
SplitButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SplitButtonModule_Factory(t) { return new (t || SplitButtonModule)(); }, imports: [[CommonModule, ButtonModule, MenuModule], ButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SplitButtonModule, { declarations: function () { return [SplitButton]; }, imports: function () { return [CommonModule, ButtonModule, MenuModule]; }, exports: function () { return [SplitButton, ButtonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplitButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule, MenuModule],
                exports: [SplitButton, ButtonModule],
                declarations: [SplitButton]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXRidXR0b24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zcGxpdGJ1dHRvbi9zcGxpdGJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBWSxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFPLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7QUFnQjlDLE1BQU0sT0FBTyxXQUFXO0FBQ3hCLElBZkE7QUFDRyxRQW1CVSxZQUFPLEdBQVcsTUFBTSxDQUFDO0FBQ3RDLFFBR2MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzlELFFBQ2Msb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN0RSxRQWlCYSwwQkFBcUIsR0FBVyxpQ0FBaUMsQ0FBQztBQUMvRSxRQUNhLDBCQUFxQixHQUFXLFlBQVksQ0FBQztBQUMxRCxJQWdCQSxDQUFDO0FBQ0QsSUFWSSxvQkFBb0IsQ0FBQyxLQUFZO0FBQ3JDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsSUFBSSxDQUFDO0FBQ0wsSUFDSSxxQkFBcUIsQ0FBQyxLQUFZO0FBQ3RDLFFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBQyxDQUFDLENBQUM7QUFDdkgsSUFBSSxDQUFDO0FBQ0w7dUNBOURDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUU7V0FBZSxrQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7b1BBT1Qsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtiQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3doQkFDSTtBQUFDO0FBRUcsb0JBQUosS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHNCQUVWLE1BQU07QUFBSyw4QkFFWCxNQUFNO0FBQUssb0JBRVgsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyx3QkFFVixLQUFLO0FBQUssNkJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLGtCQUVWLEtBQUs7QUFBSyxvQ0FFVixLQUFLO0FBQUssb0NBRVYsS0FBSztBQUFLLGlDQUVWLFNBQVMsU0FBQyxXQUFXO0FBQU8sOEJBRTVCLFNBQVMsU0FBQyxZQUFZO0FBQU8sbUJBRTdCLFNBQVMsU0FBQyxNQUFNO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFrQjdCLE1BQU0sT0FBTyxpQkFBaUI7QUFBRzs2Q0FMaEMsUUFBUSxTQUFDO0NBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxVQUFVLENBQUMsa0JBQy9DLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBQyxZQUFZLENBQUMsa0JBQ25DLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUM5Qjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxFbGVtZW50UmVmLElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsVmlld0NoaWxkLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7TWVudU1vZHVsZSwgTWVudX0gZnJvbSAncHJpbWVuZy9tZW51JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXNwbGl0QnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNjb250YWluZXIgW25nQ2xhc3NdPVwiJ3Atc3BsaXRidXR0b24gcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAjZGVmYXVsdGJ0biBjbGFzcz1cInAtc3BsaXRidXR0b24tZGVmYXVsdGJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIFtpY29uXT1cImljb25cIiBbaWNvblBvc109XCJpY29uUG9zXCIgW2xhYmVsXT1cImxhYmVsXCIgKGNsaWNrKT1cIm9uRGVmYXVsdEJ1dHRvbkNsaWNrKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBjbGFzcz1cInAtc3BsaXRidXR0b24tbWVudWJ1dHRvblwiIGljb249XCJwaSBwaS1jaGV2cm9uLWRvd25cIiAoY2xpY2spPVwib25Ecm9wZG93bkJ1dHRvbkNsaWNrKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxwLW1lbnUgI21lbnUgW3BvcHVwXT1cInRydWVcIiBbbW9kZWxdPVwibW9kZWxcIiBbc3R5bGVdPVwibWVudVN0eWxlXCIgW3N0eWxlQ2xhc3NdPVwibWVudVN0eWxlQ2xhc3NcIiBbYXBwZW5kVG9dPVwiYXBwZW5kVG9cIlxuICAgICAgICAgICAgICAgICAgICBbc2hvd1RyYW5zaXRpb25PcHRpb25zXT1cInNob3dUcmFuc2l0aW9uT3B0aW9uc1wiIFtoaWRlVHJhbnNpdGlvbk9wdGlvbnNdPVwiaGlkZVRyYW5zaXRpb25PcHRpb25zXCI+PC9wLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9zcGxpdGJ1dHRvbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdEJ1dHRvbiB7XG5cbiAgICBASW5wdXQoKSBtb2RlbDogTWVudUl0ZW1bXTtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGljb25Qb3M6IHN0cmluZyA9ICdsZWZ0JztcbiAgICAgICAgXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgICBcbiAgICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uRHJvcGRvd25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgICBcbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgbWVudVN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgbWVudVN0eWxlQ2xhc3M6IHN0cmluZztcbiAgICBcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG4gICAgXG4gICAgQElucHV0KCkgYXBwZW5kVG86IGFueTtcbiAgICBcbiAgICBASW5wdXQoKSBkaXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xMnMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xuXG4gICAgQElucHV0KCkgaGlkZVRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnLjFzIGxpbmVhcic7XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG4gICAgXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdGJ0bicpIGJ1dHRvblZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ21lbnUnKSBtZW51OiBNZW51O1xuXG4gICAgb25EZWZhdWx0QnV0dG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgICAgICAgXG4gICAgb25Ecm9wZG93bkJ1dHRvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm9uRHJvcGRvd25DbGljay5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5tZW51LnRvZ2dsZSh7Y3VycmVudFRhcmdldDogdGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgcmVsYXRpdmVBbGlnbjogdGhpcy5hcHBlbmRUbyA9PSBudWxsfSk7XG4gICAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxCdXR0b25Nb2R1bGUsTWVudU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1NwbGl0QnV0dG9uLEJ1dHRvbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbU3BsaXRCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0QnV0dG9uTW9kdWxlIHsgfVxuIl19