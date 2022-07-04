import React from 'react';
import styled from 'styled-components';
//Icons
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const SocialIcons = () => {

    return (
        <SocialList className='social_list'>
            <li>
                <a href='https://www.linkedin.com/in/mehdi-salimi-2050' target='blank'>
                    <span>
                        <FaLinkedinIn />
                    </span>
                </a>
            </li>
            <li>
                <a href='https://github.com/SalimiDev'>
                    <span>
                        <FaGithub />
                    </span>
                </a>
            </li>
            <li>
                <a href='/'>
                    <span>
                        <FaTwitter />
                    </span>
                </a>
            </li>
            <li>
                <a href='/'>
                    <span>
                        <FaInstagramSquare />
                    </span>
                </a>
            </li>
        </SocialList>
    );
};

export default SocialIcons;

//?Styles
const SocialList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 15px;
    list-style: none;

    & span {
        color: gray;
        font-size: 25px;
        transition: all 0.3s ease;

        &:hover {
            color: #e7c130;
        }
    }
`;
