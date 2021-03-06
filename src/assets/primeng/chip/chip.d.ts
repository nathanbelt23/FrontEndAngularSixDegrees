import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class Chip {
    label: string;
    icon: string;
    image: string;
    style: any;
    styleClass: string;
    removable: boolean;
    removeIcon: string;
    onRemove: EventEmitter<any>;
    visible: boolean;
    containerClass(): {
        'p-chip p-component': boolean;
        'p-chip-image': boolean;
    };
    close(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Chip, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Chip, "p-chip", never, { "removeIcon": "removeIcon"; "label": "label"; "icon": "icon"; "image": "image"; "style": "style"; "styleClass": "styleClass"; "removable": "removable"; }, { "onRemove": "onRemove"; }, never, ["*"]>;
}
export declare class ChipModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ChipModule, [typeof Chip], [typeof ɵngcc1.CommonModule], [typeof Chip]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ChipModule>;
}

//# sourceMappingURL=chip.d.ts.map