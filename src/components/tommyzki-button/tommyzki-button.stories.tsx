import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TommyzkiButton } from './tommyzki-button';

// Component metadata
const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Button',
    disabled: false,
    loading: false,
    fullwidth: false,
    rounded: false,
  },
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
    label: { control: 'text' },
  },
} satisfies Meta<TommyzkiButton>;

export default meta;

// Shared render function
const Template = ({
  variant,
  size,
  label,
  disabled,
  loading,
  fullwidth,
  rounded,
}: any) => html`
  <tommyzki-button
    variant=${variant}
    size=${size}
    ?disabled=${disabled}
    ?loading=${loading}
    ?fullwidth=${fullwidth}
    ?rounded=${rounded}
  >
    ${label}
  </tommyzki-button>
`;

export const Primary: StoryObj = {
  render: Template,
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: StoryObj = {
  render: Template,
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Danger: StoryObj = {
  render: Template,
  args: {
    variant: 'danger',
    label: 'Danger Button',
  },
};

export const Outline: StoryObj = {
  render: Template,
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const Ghost: StoryObj = {
  render: Template,
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
};

export const Link: StoryObj = {
  render: Template,
  args: {
    variant: 'link',
    label: 'Link Button',
  },
};

export const Disabled: StoryObj = {
  render: Template,
  args: {
    disabled: true,
    label: 'Disabled',
  },
};

export const Loading: StoryObj = {
  render: Template,
  args: {
    loading: true,
    label: 'Loading...',
  },
};

export const Fullwidth: StoryObj = {
  render: Template,
  args: {
    fullwidth: true,
    label: 'Full Width',
  },
};

export const Rounded: StoryObj = {
  render: Template,
  args: {
    rounded: true,
    label: 'Rounded',
  },
};
