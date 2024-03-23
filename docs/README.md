**react-ripple-hook** • Readme \| [API](globals.md)

***

# React Ripple Hook

## Overview
The `useRipple` hook adds a material design-inspired ripple effect to any React element. It dynamically appends a div that animates outward from the click point within the element, creating a visually appealing feedback for interactions. This effect is commonly seen in material design components, enhancing the user experience by providing immediate, tactile feedback on clickable elements.

## Installation
This hook is designed to be integrated into your React project. Ensure that you have React installed in your project before using `useRipple`.

## Usage
To use the `useRipple` hook, you need to pass a reference to the element you want the ripple effect applied to. Here's a step-by-step guide:

Step 1: Import the Hook
First, import the `useRipple` hook into your component file.

```jsx
import { useRipple } from 'react-ripple-hook';
```

Step 2: Create a Ref for Your Target Element
Use React's `useRef` hook to create a reference for the DOM element that will have the ripple effect.

```jsx  
const buttonRef = useRef<HTMLButtonElement>(null);
```

Step 3: Apply the `useRipple` Hook
Now, apply the useRipple hook in your component, passing the created ref as an argument.

```jsx

useRipple({ elementRef: buttonRef });
```

Step 4: Attach the Ref to Your Element
Finally, attach the created ref to your target element using the ref attribute.

```jsx
<button ref={buttonRef}>Click Me</button>
```

## Example

Below is a complete example of a functional component with a button that utilizes the useRipple hook.

```jsx
import React, { useRef } from 'react';
import { useRipple } from 'react-ripple-hook';

const RippleButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useRipple({ elementRef: buttonRef });

  return (
    <button ref={buttonRef}>Click Me</button>
  );
};

export default RippleButton;
```

## Customization

The default color of the ripple effect is a light black (rgba(0, 0, 0, 0.1)). You can customize the rippleStyles object within the useRipple hook if you wish to change the color or other styles.

## Note
This hook directly manipulates the DOM, which is generally against React's principles of working with the Virtual DOM. However, for effects like these that are purely cosmetic and do not affect the application state, this approach can be acceptable and performant.

## License
Specify your project's license here. Common licenses for open-source projects include MIT, GPL, and Apache 2.0.
