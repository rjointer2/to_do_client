import styled from "styled-components";

// icons
import { FaTimes } from "react-icons/fa";
import { primary, secondary, tertiary, white } from "./palette";

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const BtnLink = styled.button`
    border-radius: 50px;
    background: ${secondary};
    white-space: nowrap;
    padding: 16px 64px;
    color: 000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 15px;
    background: ${primary};
    margin-bottom: 20px;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: 000;
        color: ${white};
    }

`;

export const CloseButton = styled(FaTimes)`
    color: ${white};

    &.active {
        transition: all 0.2s ease-in-out;
        color: ${tertiary}
    }
`;


export const SubmitButton = styled.button`
    font-size: 14px;
    border: none;
    background: none;
    padding: 4px;
    background: ${secondary};
    color: ${white};
`;


export const SubmitBtn = styled.button`
    border-radius: 4px;
    box-shadow: 0 0 0 1px ${white};
    padding: 10px;
    outline: none;
`;
