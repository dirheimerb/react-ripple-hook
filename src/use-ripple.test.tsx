import { render, fireEvent } from '@testing-library/react';
import React, { useRef, CSSProperties } from 'react';
import { useRipple } from './use-ripple'; // Adjust the import path as necessary

interface TestComponentProps {
    rippleStyle: CSSProperties;
}

beforeAll(() => {
  // Mock the animate function
  window.Element.prototype.animate = jest.fn();
});

// A mock component to use the hook
const TestComponent = ({ rippleStyle }: TestComponentProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useRipple({ elementRef: ref, rippleStyle });
    return (
        <div ref={ref} style={{ width: 100, height: 100, position: 'relative' }}>
            Click me
        </div>
    );
}

describe('useRipple', () => {
    it('should create a ripple effect on click', () => {
        const { container } = render(<TestComponent rippleStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />);
        const div = container.querySelector('div');
        if (!div) throw new Error('Element not found');
        fireEvent.click(div);
        const ripple = div.querySelector('.ripple');
        expect(ripple).not.toBeNull();
    });
});