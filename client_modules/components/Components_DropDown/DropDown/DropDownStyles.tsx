
import styled from 'styled-components';
import { Props } from '../../../styled_components/types';



export const DropDownContainer = styled("aside")<Props>`
    position: fixed;
    z-index: 999;
    width: 100%;
    background: green;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%' )};
`;