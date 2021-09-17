

import styled from "styled-components";

// palette
import { primary } from "./palette";


export const InlineText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;

export const CenterText = styled("p")`
    text-align: center;
`;

export const Text = styled.p`
    padding: 10px 0;
`;

export const TextUL = styled.ul`
    & p {
        margin-right: 2px;
        display: inline;
    }
`;

export const SubjectText = styled.p`
    font-size: 14px;
    color: ${primary};
`;

export const SmallText = styled.p`
    font-size: 10px;
`;

export const MediumText = styled.p`
    font-size: 14px;
`;

