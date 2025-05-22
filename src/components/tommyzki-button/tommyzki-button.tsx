import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tommyzki-button',
  styleUrl: 'tommyzki-button.scss',
  shadow: true,
})
export class TommyzkiButton {
  @Prop() variant: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link' = 'primary';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() disabled = false;
  @Prop() loading = false;
  @Prop() fullwidth = false;
  @Prop() rounded = false;
  @Prop() label = 'this is button';

  render() {
    const classList = [
      'btn',
      `btn--${this.variant}`,
      `btn--${this.size}`,
      this.fullwidth ? 'btn--full' : '',
      this.rounded ? 'btn--rounded' : '',
      this.loading ? 'btn--loading' : '',
    ].join(' ');
    return (
      <button class={classList} disabled={this.disabled || this.loading}>
        {this.loading ? <span class="spinner" /> : <slot />} {this.label}
      </button>
    );
  }
}
