# UiAppButton

A versatile button component with support for multiple variants, sizes, icons, and automatic link detection.

## Usage

```vue
<UiAppButton variant="primary" size="md">
  Click Me
</UiAppButton>
```

## Props

| Prop           | Type                                                                                   | Default     | Description                                                                  |
| -------------- | -------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| `variant`      | `'primary' \| 'secondary' \| 'outline' \| 'error' \| 'warning' \| 'info' \| 'success'` | `'primary'` | The visual style variant of the button.                                      |
| `size`         | `'sm' \| 'md' \| 'lg'`                                                                 | `'md'`      | The size of the button.                                                      |
| `to`           | `RouteLocationRaw`                                                                     | -           | The target route for NuxtLink. If provided, renders as `NuxtLink`.           |
| `href`         | `string`                                                                               | -           | The target URL for an anchor tag. If provided (and no `to`), renders as `a`. |
| `disabled`     | `boolean`                                                                              | `false`     | Whether the button is disabled.                                              |
| `loading`      | `boolean`                                                                              | `false`     | Whether the button shows a loading state.                                    |
| `block`        | `boolean`                                                                              | `false`     | Whether the button spans the full width of its container.                    |
| `iconPosition` | `'left' \| 'right'`                                                                    | `'right'`   | Position of the icon relative to the text.                                   |

## Slots

| Slot      | Props | Description                      |
| --------- | ----- | -------------------------------- |
| `default` | -     | The label content of the button. |
| `icon`    | -     | Content for the icon slot.       |

## Examples

### Variants

```vue
<UiAppButton variant="primary">Primary</UiAppButton>
<UiAppButton variant="secondary">Secondary</UiAppButton>
<UiAppButton variant="outline">Outline</UiAppButton>
```

### With Icon

```vue
<UiAppButton>
  Next Page
  <template #icon>
    <ArrowRightIcon />
  </template>
</UiAppButton>
```
