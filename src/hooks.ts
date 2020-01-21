import * as React from 'react';

/*
  A simple hook to tell when a component is on screen.

  Original Source: https://usehooks.com/useOnScreen/
*/
export const useOnScreen = (ref, rootMargin = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = React.useState(false);
  const [hasIntersected, setHasIntersected] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);

        // Save whether the component has ever entered the viewport.
        if (!hasIntersected && entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return [isIntersecting, hasIntersected];
}
