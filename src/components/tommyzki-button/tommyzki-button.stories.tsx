import { h } from '@stencil/core';

export default {
  title: 'Components/Button',
  component: 'tommyzki-button',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullwidth: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
};

const Template = (args) => (
  <tommyzki-button {...args}>{args.label}</tommyzki-button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  label: 'Secondary Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  label: 'Danger Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'md',
  label: 'Outline Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'md',
  label: 'Ghost Button',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  size: 'md',
  label: 'Link Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'md',
  disabled: true,
  label: 'Disabled',
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  size: 'md',
  loading: true,
  label: 'Loading...',
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  variant: 'primary',
  size: 'md',
  fullwidth: true,
  label: 'Full Width',
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: 'primary',
  size: 'md',
  rounded: true,
  label: 'Rounded',
};
