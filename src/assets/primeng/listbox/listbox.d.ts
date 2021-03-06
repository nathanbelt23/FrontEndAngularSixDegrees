import { ElementRef, EventEmitter, AfterContentInit, QueryList, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FilterService } from 'primeng/api';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/api';
import * as ɵngcc3 from 'primeng/ripple';
export declare const LISTBOX_VALUE_ACCESSOR: any;
export declare class Listbox implements AfterContentInit, ControlValueAccessor {
    el: ElementRef;
    cd: ChangeDetectorRef;
    filterService: FilterService;
    multiple: boolean;
    style: any;
    styleClass: string;
    listStyle: any;
    listStyleClass: string;
    readonly: boolean;
    disabled: boolean;
    checkbox: boolean;
    filter: boolean;
    filterMatchMode: string;
    filterLocale: string;
    metaKeySelection: boolean;
    dataKey: string;
    showToggleAll: boolean;
    optionLabel: string;
    optionValue: string;
    optionGroupChildren: string;
    optionGroupLabel: string;
    optionDisabled: string;
    ariaFilterLabel: string;
    filterPlaceHolder: string;
    group: boolean;
    onChange: EventEmitter<any>;
    onClick: EventEmitter<any>;
    onDblClick: EventEmitter<any>;
    headerCheckboxViewChild: ElementRef;
    headerFacet: any;
    footerFacet: any;
    templates: QueryList<any>;
    _options: any[];
    itemTemplate: TemplateRef<any>;
    groupTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    _filterValue: string;
    _filteredOptions: any[];
    filtered: boolean;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    optionTouched: boolean;
    focus: boolean;
    headerCheckboxFocus: boolean;
    constructor(el: ElementRef, cd: ChangeDetectorRef, filterService: FilterService);
    get options(): any[];
    set options(val: any[]);
    get filterValue(): string;
    set filterValue(val: string);
    ngAfterContentInit(): void;
    getOptionLabel(option: any): any;
    getOptionGroupChildren(optionGroup: any): any;
    getOptionGroupLabel(optionGroup: any): any;
    getOptionValue(option: any): any;
    isOptionDisabled(option: any): any;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onOptionClick(event: Event, option: any): void;
    onOptionTouchEnd(option: any): void;
    onOptionDoubleClick(event: Event, option: any): any;
    onOptionClickSingle(event: any, option: any): void;
    onOptionClickMultiple(event: any, option: any): void;
    onOptionClickCheckbox(event: any, option: any): void;
    removeOption(option: any): void;
    isSelected(option: any): boolean;
    get allChecked(): boolean;
    get optionsToRender(): any[];
    hasFilter(): boolean;
    onFilter(event: KeyboardEvent): void;
    activateFilter(): void;
    get toggleAllDisabled(): boolean;
    toggleAll(event: any): void;
    checkAll(): void;
    uncheckAll(): void;
    onOptionKeyDown(event: KeyboardEvent, option: any): void;
    findNextItem(item: any): any;
    findPrevItem(item: any): any;
    onHeaderCheckboxFocus(): void;
    onHeaderCheckboxBlur(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Listbox, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Listbox, "p-listbox", never, { "checkbox": "checkbox"; "filter": "filter"; "filterMatchMode": "filterMatchMode"; "metaKeySelection": "metaKeySelection"; "showToggleAll": "showToggleAll"; "optionGroupChildren": "optionGroupChildren"; "options": "options"; "filterValue": "filterValue"; "disabled": "disabled"; "multiple": "multiple"; "style": "style"; "styleClass": "styleClass"; "listStyle": "listStyle"; "listStyleClass": "listStyleClass"; "readonly": "readonly"; "filterLocale": "filterLocale"; "dataKey": "dataKey"; "optionLabel": "optionLabel"; "optionValue": "optionValue"; "optionGroupLabel": "optionGroupLabel"; "optionDisabled": "optionDisabled"; "ariaFilterLabel": "ariaFilterLabel"; "filterPlaceHolder": "filterPlaceHolder"; "group": "group"; }, { "onChange": "onChange"; "onClick": "onClick"; "onDblClick": "onDblClick"; }, ["headerFacet", "footerFacet", "templates"], ["p-header", "p-footer"]>;
}
export declare class ListboxModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ListboxModule, [typeof Listbox], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.SharedModule, typeof ɵngcc3.RippleModule], [typeof Listbox, typeof ɵngcc2.SharedModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ListboxModule>;
}

//# sourceMappingURL=listbox.d.ts.map