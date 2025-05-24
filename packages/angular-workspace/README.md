# Angular

Angular supports web components fairly well, but to enhance the developer experience, the Angular bindings wrap Tommyzki Web Components as Angular components. This provides benefits such as full type support, Angular forms compatibility, and event handling with Angular's syntax.

## Tommyzki UI components for Angular

These are Tommyzki Web Components specifically built for Angular.

## Setup

Install the package:

```bash
npm install @tommyzki/ui-angular
```

Import the module into your `AppModule`:

```ts
import { TommyzkiUiAngularModule } from '@tommyzki/ui-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TommyzkiUiAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage

Use the components as you would with standard Angular components:

```html
<tommyzki-button>Click me</tommyzki-button>
```
