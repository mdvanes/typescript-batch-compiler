/**
 * The test should test if two files that both contain `declare const Polymer: any;` can be build.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
class PolygramDetails extends Polymer.Element {
    static get is() {
        return 'polygram-details';
    }
    static get properties() {
        return {
            term: String
        };
    }
    bar(term) {
        const amount = 1;
        /* tslint:disable */
        console.log(term.repeat(amount));
        /* tslint:enable */
    }
    foo() {
        // This works, but prepends a polyfill to the output
        return 'just testing a decorator';
    }
}
__decorate([
    readonly
], PolygramDetails.prototype, "foo", null);
window.customElements.define(PolygramDetails.is, PolygramDetails);
//# sourceMappingURL=example1.js.map