/**
 * The test should test if two files that both contain `declare const Polymer: any;` can be build.
 * TODO implement automated test case
 */

declare const Polymer: any;

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

    public bar(term) {
        const amount: number = 1;
        /* tslint:disable */
        console.log(term.repeat(amount));
        /* tslint:enable */
    }

    @readonly
    public foo() {
        // This works, but prepends a polyfill to the output
        return 'just testing a decorator';
    }
}

window.customElements.define(PolygramDetails.is, PolygramDetails);
