/**
 * The test should test if two files that both contain `declare const Polymer: any;` can be build.
 */

declare const Polymer: any;

class PolygramOther extends Polymer.Element {
    static get is() {
        return 'polygram-other';
    }

    static get properties() {
        return {
            term: String
        };
    }
}

window.customElements.define(PolygramOther.is, PolygramOther);
