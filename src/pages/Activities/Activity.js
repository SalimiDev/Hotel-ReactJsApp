import React from 'react';
import '../../styles/utils/_components.scss';
import styled from 'styled-components';

const Activity = ({ data }) => {
    const { title, image, description } = data;

    return (
        <ActivityCard className='activiy-card'>
            <div className='blogImg'>
                <a href='/#'>
                    <img src={image} alt={title} />
                </a>
            </div>
            <div className='text'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <button className='btn btn-orange btn-sm weight-700'>
                <a href='/#'>VIEW MORE ></a>
            </button>
        </ActivityCard>
    );
};

export default Activity;

/*************************/
//Styles
/*************************/
const ActivityCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    row-gap: 20px;
    margin: 20px 0;

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (min-width: 992px) {
        width: 33.3333333%;
    }

    & .blogImg {
        img {
            width: 100%;

            @media (min-width: 992px) {
                width: 300px;
                height: 179px;
            }
            @media (min-width: 1200px) {
                width: 377px;
                height: 225px;
            }
        }
    }

    & h3 {
        font-size: 18px;
        text-transform: uppercase;
    }
    & .text {
        p {
            margin-bottom: 0;
        }
    }
    & button {
        width: fit-content;
    }
`;
