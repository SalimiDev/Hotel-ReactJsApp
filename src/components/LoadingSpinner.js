import { useEffect } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

const LoadingSpinner = ({ loader }) => {
    const { preLoader, setPreLoader } = loader;
    const LOADER_TIME = 3000;

    useEffect(() => {
        setTimeout(() => {
            setPreLoader(false);
        }, LOADER_TIME);
    }, []);

    const spinnerStyle: CSSProperties = {
        display: 'block',
        loading: preLoader,
        margin: '0 auto',
        borderColor: '#344a71',
    };

    return (
        <div style={{ display: 'grid', placeContent: 'center', height: '100vh' }}>
            <BounceLoader cssOverride={spinnerStyle} color='#344a71' size={75} />
        </div>
    );
};

export default LoadingSpinner;
