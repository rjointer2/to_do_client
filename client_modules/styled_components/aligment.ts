
import styled from "styled-components";
import { Props } from "../types";
import { primary, white } from "./palette";


export const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 10% 80%;
    padding-top: 10px;

    @media screen and (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const AppLayOutItems = styled.span`

    @media screen and (max-width: 700px) {
        /* hidden from the mobile settings and etc */
        & :nth-child(odd) {
            display: none;
        }

    }

`; 

export const Card_Master = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    justify-content: center;
`;

export const Card_Context = styled.div`
    border-radius: 4px;
    background: ${primary};
    color: ${white};
    box-shadow: 0 0 0 1px ${white};
    width: 70%;
    padding: 10px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

export const Card_Info_Top_Master = styled.div`
    display: flex;
    padding-bottom: 20px;
`;

export const Card_Info_Top_Item = styled.div`
    padding-right: 15px;
`;

export const Card_TextArea = styled.textarea<Props>`
    resize: none;
    height: ${({ height }) => height};
    background: none;
    border: none;
    font-size: 15px;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-color: Transparent;

    &::placeholder {
        color: white;
        font-size: 15px;
    }
`;

export const Forum_Assest_Header = styled.div`
    width: 100%;
    padding-bottom: 20px;
`;

export const Forum_Items = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Forum_Heading = styled.h1`
    font-weight: 700;
`;



