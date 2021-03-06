(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/codehighlighter', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.codehighlighter = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 'use strict';

    var CodeHighlighter = /** @class */ (function () {
        function CodeHighlighter(el) {
            this.el = el;
        }
        CodeHighlighter.prototype.ngAfterViewInit = function () {
            if (window['Prism']) {
                window['Prism'].highlightElement(this.el.nativeElement);
            }
        };
CodeHighlighter.ɵfac = function CodeHighlighter_Factory(t) { return new (t || CodeHighlighter)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CodeHighlighter.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CodeHighlighter, selectors: [["", "pCode", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CodeHighlighter, [{
        type: core.Directive,
        args: [{
                selector: '[pCode]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
        return CodeHighlighter;
    }());
    CodeHighlighter.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    var CodeHighlighterModule = /** @class */ (function () {
        function CodeHighlighterModule() {
        }
CodeHighlighterModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CodeHighlighterModule });
CodeHighlighterModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CodeHighlighterModule_Factory(t) { return new (t || CodeHighlighterModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CodeHighlighterModule, { declarations: [CodeHighlighter], imports: [ɵngcc1.CommonModule], exports: [CodeHighlighter] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CodeHighlighterModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [CodeHighlighter],
                declarations: [CodeHighlighter]
            }]
    }], function () { return []; }, null); })();
        return CodeHighlighterModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CodeHighlighter = CodeHighlighter;
    exports.CodeHighlighterModule = CodeHighlighterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-codehighlighter.umd.js.map