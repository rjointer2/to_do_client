

import styled from "styled-components";

// palette
import { secondary, hover_secondary, white } from "./palette";
import { Props } from "../types";


export const FormContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    min-height: 500px;
`;


export const Form = styled.form`
    position: relative;
    width: 300px;
    height: 500%;
    padding: 50px 30px 0;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;


export const FormHeader = styled.h1`
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled("label")<Props>`
    display: block;
    width: 100%;
    margin: 25px auto 0;
    text-align: center;
    font-size: 12px;
    
    text-transform: uppercase;
`;

/* color: ${({ lightText }) => ( lightText ? white : 'black' )}; */

export const FormInput = styled.input`
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    text-align: center;
    background-color: inherit;

    & ::placeholder {
        font-size: 14px;
    }

    & :focus {
        color: ${hover_secondary};
    }
`;

export const FormTextArea = styled.textarea`
    display: block;
    width: 100%;
    margin-top: 5px;
    height: 100px;
    padding-bottom: 5px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    text-align: left;
    background-color: inherit;
    resize: none;

    & ::placeholder {
        font-size: 14px;
    }

    & :focus {
        color: ${hover_secondary};
    }
`;

export const Select = styled.select`
  width: 40%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  @media screen and (max-width: 400px) {
    width: 50%;
  }

  @media screen and (min-width: 410px) {
    width: 40%;
  }

`;


export const TextArea = styled.textarea`
    outline: none;
    border: none;
    border-bottom: 1px black solid;
    margin-bottom: 5px;

    &::placeholder {
        color: ${secondary}
    }
`; 

export const FormButton = styled.button`
    background: ${secondary};
    padding: 16px 0;
    margin: 16px 0;
    border: none;
    border-radius: 4px;
    font-size: 20px;

    &:hover {
        color: ${hover_secondary}
    }
`;

export const FormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    margin: 40px 0 40px;

    & :nth-child(odd) {
        font-size: 20px;
    }
`;

export const FormLink = styled.a`
    padding: 2px;
    text-decoration: none;

    &:hover {
        color: ${hover_secondary}
    }
`;