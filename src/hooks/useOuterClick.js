import { useEffect } from 'react';

const useOuterClick = (elementRef, setElementVisibility) => {
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
        function handleClick(e: any) {
            if (elementRef && elementRef.current) {
                const ref: any = elementRef.current;
                if (!ref.contains(e.target)) {
                    setElementVisibility(false);
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useOuterClick;
