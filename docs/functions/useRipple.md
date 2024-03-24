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
useRipple({ elementRef: buttonRef, rippleStyle: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } });
```

## Source

[src/use-ripple.ts:25](https://github.com/dirheimerb/react-ripple-hook/blob/0024be9/src/use-ripple.ts#L25)
