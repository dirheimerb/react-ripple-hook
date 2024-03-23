**react-ripple-hook** • [Readme](../README.md) \| [API](../globals.md)

---

[react-ripple-hook](../README.md) / useRipple

# Function: useRipple()

> **useRipple**(`elementRef`): `void`

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

[src/use-ripple.ts:17](https://github.com/dirheimerb/react-ripple-hook/blob/50231d3/src/use-ripple.ts#L17)
