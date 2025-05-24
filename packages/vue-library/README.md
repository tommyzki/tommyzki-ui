# Vue

Vue supports web components fairly well, but some caveats exist, especially when dealing with custom events and two-way binding. The Vue bindings wrap Tommyzki Web Components as Vue components to provide a seamless experience.

## Tommyzki UI components for Vue

These are Tommyzki Web Components specifically built for Vue.

## Setup

Install the package:

```bash
npm install @tommyzki/ui-vue
```

Register the components globally in your `main.ts` or locally in the component where you want to use them:

### Global registration

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { defineCustomElements } from '@tommyzki/ui-vue';

defineCustomElements();

const app = createApp(App);
app.mount('#app');
```

## Usage

Use the components like any other Vue component:

```vue
<template>
  <tommyzki-button>Click me</tommyzki-button>
</template>
```
