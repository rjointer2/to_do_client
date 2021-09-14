
import styled from "styled-components";

// palette
import { primary, white } from "./palette";

// icons
import { RiTodoLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai'

// this will be a regular archor tag but it's wrapped with the next/link
export const LogoIcon = styled(RiTodoLine)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MenuIcon = styled(AiOutlineMenu)`

`;


export const AvatarCircle = styled.img`
    border-radius: 50%;
    background-color: ${white};
    border: 2px solid ${primary};
    height: 50px;
    width: 50px;
`;

