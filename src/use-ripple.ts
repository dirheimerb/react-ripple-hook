'use client';
import { CSSProperties, useEffect, useState } from 'react';

export interface UseRippleEffectProps {
    /**
     * @description The reference to the element that will have the ripple effect
     * @type {React.RefObject<HTMLElement>}
     */
    elementRef: React.RefObject<HTMLElement>;
    /**
     * @description The CSS properties for the ripple effect
     * @type {CSSProperties}
     */
    rippleStyle?: CSSProperties;
}
/**
 * @description This hook creates a ripple effect on the element that is clicked
 * @param {UseRippleEffectProps} elementRef
 * @pram {CSSProperties} rippleStyle
 * @returns {void}
 * @example
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * useRipple({ elementRef: buttonRef, rippleStyle: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } });
 */
export function useRipple({
    elementRef,
    rippleStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
}: UseRippleEffectProps): void {
    const [rippleStyles] = useState<CSSProperties>(rippleStyle);

    useEffect(() => {
        const elem = elementRef.current;

        const rippleEffect = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const rect = target.getBoundingClientRect();
            // Calculate the maximum distance from the click point to the corners of the element
            const maxDistCorner = Math.max(
                Math.hypot(event.clientX - rect.left, event.clientY - rect.top),
                Math.hypot(rect.right - event.clientX, event.clientY - rect.top),
                Math.hypot(event.clientX - rect.left, rect.bottom - event.clientY),
                Math.hypot(rect.right - event.clientX, rect.bottom - event.clientY),
            );
            const radius = maxDistCorner; // Use the distance to the furthest corner as the radius
            const element = document.createElement('div');
            element.classList.add('ripple');
            element.style.backgroundColor = rippleStyles.backgroundColor!;
            element.style.borderRadius = '50%';
            element.style.pointerEvents = 'none';
            element.style.position = 'absolute';
            // Adjust position to start from the event click, but ensure it's centered by offsetting by the radius
            element.style.left = `${event.clientX - rect.left - radius}px`;
            element.style.top = `${event.clientY - rect.top - radius}px`;
            element.style.width = element.style.height = `${radius * 2}px`;
            // Append the ripple element to the target, not the body, to respect the element's overflow
            target.appendChild(element);
            element.animate(
                [
                    { transform: 'scale(0)', opacity: 1 },
                    { transform: 'scale(1.5)', opacity: 0 },
                ],
                { duration: 500, easing: 'linear' },
            );
            setTimeout(() => {
                element.remove();
            }, 500);
        };
        elem?.addEventListener('click', rippleEffect);
        return () => {
            elem?.removeEventListener('click', rippleEffect);
        };
    }, [elementRef, rippleStyles.backgroundColor]);
}
