# UiBackgroundGradientAnimation

Animated background with floating blobs and gradient effects.

## Usage

```vue
<UiBackgroundGradientAnimation
  gradient-background-start="rgb(8, 37, 54)"
  gradient-background-end="rgb(13, 51, 72)"
/>
```

## Props

| Prop                    | Type    | Default           | Description                                     |
| ----------------------- | ------- | ----------------- | ----------------------------------------------- |
| gradientBackgroundStart | string  | 'rgb(8, 37, 54)'  | Start color of the background gradient          |
| gradientBackgroundEnd   | string  | 'rgb(13, 51, 72)' | End color of the background gradient            |
| firstColor              | string  | '19, 153, 250'    | Color of the first blob (RGB values)            |
| secondColor             | string  | '253, 71, 246'    | Color of the second blob (RGB values)           |
| thirdColor              | string  | '100, 180, 255'   | Color of the third blob (RGB values)            |
| fourthColor             | string  | '253, 71, 246'    | Color of the fourth blob (RGB values)           |
| fifthColor              | string  | '19, 153, 250'    | Color of the fifth blob (RGB values)            |
| pointerColor            | string  | '253, 71, 246'    | Color of the interactive pointer blob           |
| size                    | string  | '80%'             | Size of the blobs relative to container         |
| blendingValue           | string  | 'hard-light'      | CSS mix-blend-mode for blobs                    |
| interactive             | boolean | true              | Whether the background reacts to mouse movement |
| containerClass          | string  | -                 | Classes for the container element               |
| class                   | string  | -                 | Classes for the content wrapper                 |

## Slots

| Slot    | Props | Description                                     |
| ------- | ----- | ----------------------------------------------- |
| default | -     | Content to be displayed on top of the animation |

## Examples

### Basic

```vue
<UiBackgroundGradientAnimation />
```

### Custom Colors

```vue
<UiBackgroundGradientAnimation
  gradient-background-start="#000000"
  gradient-background-end="#1a1a1a"
  first-color="255, 0, 0"
/>
```
