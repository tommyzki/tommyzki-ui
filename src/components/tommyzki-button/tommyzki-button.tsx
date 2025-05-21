import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tommyzki-button',
  styleUrl: 'tommyzki-button.css',
  shadow: true,
})
export class TommyzkiButton {
  @Prop() label: string = 'Click Me';

  render() {
    return (
      <button class="btn">{this.label}</button>
    );
  }
}
