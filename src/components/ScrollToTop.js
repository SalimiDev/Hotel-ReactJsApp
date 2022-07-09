import { useState } from 'react';
import styled from 'styled-components';
import { ArrowUpward } from '@mui/icons-material';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 20) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 20) {
            setShowScroll(false);
        }
    };
    window.addEventListener('scroll', checkScrollTop);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container onClick={scrollTop}>
            <div className={showScroll ? 'showArrowTop' : 'hideArrow'}>
                <span>
                    <ArrowUpward sx={{ fontSize: 30 }} />
                </span>
            </div>
        </Container>
    );
};

export default ScrollToTop;

//Styles
const Container = styled.div`
    .showArrowTop {
        position: fixed;
        width: 60px;
        height: 60px;
        right: 40px;
        bottom: 60px;
        display: grid;
        place-content: center;
        justify-content: center;
        color: #fff;
        background-color: #e7c130;
        z-index: 9999;
        transition: all 0.3s ease;
        border-radius: 3%;
        cursor: pointer;

        &:hover {
            transform: translateY(-8px);
        }

        .hideArrow {
            display: none;
        }
    }
`;
