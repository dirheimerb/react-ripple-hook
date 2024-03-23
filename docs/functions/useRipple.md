**react-ripple-hook** • [Readme](../README.md) \| [API](../globals.md)

***

[react-ripple-hook](../README.md) / useRipple

# Function: useRipple()

> **useRipple**(`elementRef`): `void`

## Parameters

• **elementRef**: [`UseRippleEffectProps`](../interfaces/UseRippleEffectProps.md)

## Returns

`void`

## Description

This hook creates a ripple effect on the element that is clicked

## Example

```ts
const buttonRef = useRef<HTMLButtonElement>(null);
useRipple({ elementRef: buttonRef });
```

## Source

[src/use-ripple.ts:15](https://github.com/dirheimerb/react-ripple-hook/blob/c9dc1fb/src/use-ripple.ts#L15)
