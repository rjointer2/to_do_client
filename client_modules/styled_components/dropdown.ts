

import styled from 'styled-components';
import { Props } from '../types';
import { gray } from './palette';

// Palette

export const BaseDropDown = styled.aside<Props>`
    padding: 15px;
    position: fixed;
    z-index: 999;
    width: 100%;
    background: ${gray};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%' )};
`;