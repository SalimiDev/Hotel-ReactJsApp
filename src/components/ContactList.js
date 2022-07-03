import React from 'react';
//Icons
import { LocationOnOutlined, CallOutlined, EmailOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const ContactList = ({ hovercolor, IconColor, hoverweight, font }) => {
    return (
        <>
            <ContactIlist
                className='contact_list'
                hovercolor={hovercolor}
                IconColor={IconColor}
                hoverweight={hoverweight}
                font={font}>
                <li>
                    <span>
                        <LocationOnOutlined />
                    </span>
                    <a href='https://goo.gl/maps/bYu6v3ebxxNPn4aH9'>Banafshe Street,Tehran,Iran</a>
                </li>
                <li>
                    <span>
                        <CallOutlined />
                    </span>
                    <a href='tel:+989370938781'>98-937-093-8781</a>
                </li>
                <li>
                    <span>
                        <EmailOutlined />
                    </span>
                    <a href='mailto:Salimi.devop@gmail.com'>Email</a>
                </li>
            </ContactIlist>
        </>
    );
};

export default ContactList;

//Styles
const ContactIlist = styled.ul`
    margin-top: 25px;
    list-style: none;
    & li {
        display: flex;
        & span {
            color: ${props => props.IconColor};
            margin-right: 10px;
        }

        & a {
            font-size: ${props => props.font};
            text-decoration: none;
            color: inherit;

            &:hover {
                text-decoration: underline;
                color: ${props => props.hovercolor};
                font-weight: ${props => props.hoverweight};
            }
        }
    }
`;
