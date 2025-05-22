import { r as registerInstance, h } from './index-SlpDPpky.js';

const tommyzkiButtonCss = ":host{display:inline-block}.btn{padding:0.5rem 1rem;font-weight:600;border:none;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all 0.2s}.btn--sm{font-size:0.75rem;padding:0.25rem 0.5rem}.btn--md{font-size:1rem}.btn--lg{font-size:1.25rem;padding:0.75rem 1.25rem}.btn--primary{background:#3eb9c9;color:#fff}.btn--secondary{background:#e2e8f0;color:#1a202c}.btn--danger{background:#e53e3e;color:#fff}.btn--outline{background:transparent;border:1px solid #3eb9c9;color:#3eb9c9}.btn--ghost{background:transparent;color:#3eb9c9}.btn--link{background:none;color:#3eb9c9;text-decoration:underline;padding:0}.btn--full{width:100%}.btn--rounded{border-radius:9999px}.btn--loading{pointer-events:none;opacity:0.7}.spinner{width:1rem;height:1rem;border:2px solid white;border-top-color:transparent;border-radius:50%;animation:spin 0.5s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}";

const TommyzkiButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    variant = 'primary';
    size = 'md';
    disabled = false;
    loading = false;
    fullwidth = false;
    rounded = false;
    label = 'this is button';
    render() {
        const classList = [
            'btn',
            `btn--${this.variant}`,
            `btn--${this.size}`,
            this.fullwidth ? 'btn--full' : '',
            this.rounded ? 'btn--rounded' : '',
            this.loading ? 'btn--loading' : '',
        ].join(' ');
        return (h("button", { key: 'f3ad07f2d60be599ba1141f6b453907350c78d68', class: classList, disabled: this.disabled || this.loading }, this.loading ? h("span", { class: "spinner" }) : h("slot", null), " ", this.label));
    }
};
TommyzkiButton.style = tommyzkiButtonCss;

export { TommyzkiButton as tommyzki_button };
//# sourceMappingURL=tommyzki-button.entry.esm.js.map

//# sourceMappingURL=tommyzki-button.entry.js.map