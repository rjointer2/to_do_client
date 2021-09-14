

import styled from 'styled-components';
import { primary } from '../../../styled_components/palette';

export const NavDropDownWrapper = styled.div`
    color: 000;
`;

export const NavDropDownLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: 000;
    text-decoration: none;
    padding-top: 30px;

    &:hover {
        color: ${primary};
        transition: 0.2s ease-in-out;
    }

`;

export const NavDropDownMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 1rem;


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
    }
`;