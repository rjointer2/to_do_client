

import styled from "styled-components";

// palette
import { primary } from "../../styled_components/palette";


export const SettingsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const SettingsItems = styled.a`
    text-decoration: none;
    color: ${primary};
    padding-bottom: 30px;
    padding-top: 10px;
    font-size: 15px;
`;