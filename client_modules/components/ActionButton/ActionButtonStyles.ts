

import styled from "styled-components";
import { BiPencil } from 'react-icons/bi'

// palette
import { primary, white } from "../../styled_components/palette";

import { Props } from "../../types";


export const ActionBtn = styled(BiPencil)<Props>`
    height: 60px;
    width: 60px;
    background-color: ${primary};
    border-radius: 50%;
    right: 10%;
    bottom: 10%;
    font-size: 50px;
    color: ${white};
    position: fixed;
    transition: .7s ease-in-out;
    padding: 10px;
`;
