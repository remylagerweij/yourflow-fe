# UiArrowButton

An arrow button component designed for navigation controls, such as carousels or scroll indicators.

## Usage

```vue
<UiArrowButton direction="right" variant="glass" />
```

## Props

| Prop        | Type                                  | Default   | Description                                                                                           |
| ----------- | ------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'down'`  | The direction the arrow points.                                                                       |
| `size`      | `'sm' \| 'md' \| 'lg'`                | `'md'`    | The size of the button.                                                                               |
| `variant`   | `'ghost' \| 'glass'`                  | `'ghost'` | The visual style variant. 'ghost' is suitable for dark backgrounds, 'glass' for glassmorphic effects. |
| `ariaLabel` | `string`                              | -         | Accessible label for the button.                                                                      |

## Events

| Event   | Payload | Description                         |
| ------- | ------- | ----------------------------------- |
| `click` | -       | Emitted when the button is clicked. |

## Examples

### Directions

```vue
<UiArrowButton direction="left" />
<UiArrowButton direction="right" />
<UiArrowButton direction="up" />
<UiArrowButton direction="down" />
```

### Variants

```vue
<!-- Ghost Variant (Default) -->
<UiArrowButton variant="ghost" />

<!-- Glass Variant -->
<UiArrowButton variant="glass" />
```
