**react-ripple-hook** • [Readme](../README.md) \| [API](../globals.md)

***

[react-ripple-hook](../README.md) / default

# Function: default()

> **default**(`elementRef`): `void`

## Parameters

• **elementRef**: [`UseRippleEffectProps`](../interfaces/UseRippleEffectProps.md)

## Returns

`void`

## Description

This hook creates a ripple effect on the element that is clicked

## Pram

rippleStyle

## Example

```ts
const buttonRef = useRef<HTMLButtonElement>(null);
useRipple({ elementRef: buttonRef });
```

## Source

[src/use-ripple.ts:17](https://github.com/dirheimerb/react-ripple-hook/blob/6e4675e/src/use-ripple.ts#L17)
