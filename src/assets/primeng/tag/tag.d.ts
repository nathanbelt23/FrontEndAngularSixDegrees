import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class Tag {
    styleClass: string;
    style: any;
    severity: string;
    value: string;
    icon: string;
    rounded: boolean;
    containerClass(): {
        'p-tag p-component': boolean;
        'p-tag-info': boolean;
        'p-tag-success': boolean;
        'p-tag-warning': boolean;
        'p-tag-danger': boolean;
        'p-tag-rounded': boolean;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Tag, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Tag, "p-tag", never, { "styleClass": "styleClass"; "style": "style"; "severity": "severity"; "value": "value"; "icon": "icon"; "rounded": "rounded"; }, {}, never, ["*"]>;
}
export declare class TagModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TagModule, [typeof Tag], [typeof ɵngcc1.CommonModule], [typeof Tag]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TagModule>;
}

//# sourceMappingURL=tag.d.ts.map