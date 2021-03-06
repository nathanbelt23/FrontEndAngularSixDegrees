import { NgModule, Directive, ElementRef, TemplateRef, ViewContainerRef, Renderer2, EventEmitter, Output, ContentChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
export class DeferredLoader {
    constructor(el, renderer, viewContainer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.onLoad = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.shouldLoad()) {
            this.load();
        }
        if (!this.isLoaded()) {
            this.documentScrollListener = this.renderer.listen('window', 'scroll', () => {
                if (this.shouldLoad()) {
                    this.load();
                    this.documentScrollListener();
                    this.documentScrollListener = null;
                }
            });
        }
    }
    shouldLoad() {
        if (this.isLoaded()) {
            return false;
        }
        else {
            let rect = this.el.nativeElement.getBoundingClientRect();
            let docElement = document.documentElement;
            let winHeight = docElement.clientHeight;
            return (winHeight >= rect.top);
        }
    }
    load() {
        this.view = this.viewContainer.createEmbeddedView(this.template);
        this.onLoad.emit();
        this.cd.detectChanges();
    }
    isLoaded() {
        return this.view != null;
    }
    ngOnDestroy() {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    }
}
DeferredLoader.ɵfac = function DeferredLoader_Factory(t) { return new (t || DeferredLoader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DeferredLoader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DeferredLoader, selectors: [["", "pDefer", ""]], contentQueries: function DeferredLoader_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, outputs: { onLoad: "onLoad" } });
DeferredLoader.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
DeferredLoader.propDecorators = {
    onLoad: [{ type: Output }],
    template: [{ type: ContentChild, args: [TemplateRef,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeferredLoader, [{
        type: Directive,
        args: [{
                selector: '[pDefer]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onLoad: [{
            type: Output
        }], template: [{
            type: ContentChild,
            args: [TemplateRef]
        }] }); })();
export class DeferModule {
}
DeferModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DeferModule });
DeferModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DeferModule_Factory(t) { return new (t || DeferModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DeferModule, { declarations: function () { return [DeferredLoader]; }, imports: function () { return [CommonModule]; }, exports: function () { return [DeferredLoader]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeferModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [DeferredLoader],
                declarations: [DeferredLoader]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9kZWZlci9kZWZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQXlCLFdBQVcsRUFDakUsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQVUxQixZQUFtQixFQUFjLEVBQVMsUUFBbUIsRUFBUyxhQUErQixFQUFVLEVBQXFCO0FBQUksUUFBckgsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQVEsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQVEsa0JBQWEsR0FBYixhQUFhLENBQWtCO0FBQUMsUUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBUjNILFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3RCxJQU8ySSxDQUFDO0FBQzVJLElBQ0ksZUFBZTtBQUNuQixRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQy9CLFlBQVksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLFNBQVM7QUFDVCxRQUNRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDOUIsWUFBWSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7QUFDeEYsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQ3ZDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEMsb0JBQW9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ2xELG9CQUFvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3ZELGlCQUFpQjtBQUNqQixZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2YsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksVUFBVTtBQUFLLFFBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDN0IsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNyRSxZQUFZLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDdEQsWUFBWSxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO0FBQ3BELFlBQ1ksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksSUFBSTtBQUFLLFFBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsUUFBUSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ2hDLElBQUksQ0FBQztBQUNMLElBQ0ksUUFBUTtBQUNaLFFBQVEsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUNqQyxJQUFJLENBQUM7QUFDTCxJQUNJLFdBQVc7QUFDZixRQUFRLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQ1EsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7QUFDekMsWUFBWSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUMxQyxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0w7MENBN0RDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUUsVUFBVSxjQUN2Qjs7Ozs7OzBDQUNJO0FBQUM7QUFBd0MsWUFQbkIsVUFBVTtBQUFJLFlBQ2hCLFNBQVM7QUFBSSxZQUE5QixnQkFBZ0I7QUFBSSxZQUF5QyxpQkFBaUI7QUFBRztBQUFHO0FBQzVFLHFCQU9YLE1BQU07QUFBSyx1QkFFWCxZQUFZLFNBQUMsV0FBVztBQUFNOzs7Ozs7Ozs7OztvQkFBRTtBQTZEckMsTUFBTSxPQUFPLFdBQVc7QUFBRzt1Q0FMMUIsUUFBUSxTQUFDO09BQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUNqQzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLERpcmVjdGl2ZSxFbGVtZW50UmVmLEFmdGVyVmlld0luaXQsT25EZXN0cm95LFRlbXBsYXRlUmVmLEVtYmVkZGVkVmlld1JlZixcbiAgICAgICAgVmlld0NvbnRhaW5lclJlZixSZW5kZXJlcjIsRXZlbnRFbWl0dGVyLE91dHB1dCxDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twRGVmZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWZlcnJlZExvYWRlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsT25EZXN0cm95IHtcbiAgICAgICAgXG4gICAgQE91dHB1dCgpIG9uTG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgICAgIFxuICAgIGRvY3VtZW50U2Nyb2xsTGlzdGVuZXI6IEZ1bmN0aW9uO1xuICAgIFxuICAgIHZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICAgICAgICAgICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTG9hZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZExvYWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2hvdWxkTG9hZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCB3aW5IZWlnaHQgPSBkb2NFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuICh3aW5IZWlnaHQgPj0gcmVjdC50b3ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxvYWQoKTogdm9pZCB7IFxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUpO1xuICAgICAgICB0aGlzLm9uTG9hZC5lbWl0KCk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICBcbiAgICBpc0xvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldyAhPSBudWxsO1xuICAgIH1cbiAgICAgICAgICAgIFxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RlZmVycmVkTG9hZGVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEZWZlcnJlZExvYWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgRGVmZXJNb2R1bGUgeyB9Il19