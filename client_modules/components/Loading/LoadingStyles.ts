
import styled from 'styled-components';

// palette
import { primary, white } from '../../styled_components/palette';

export const Spinner = styled.div`
    
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid ${white};
    border-radius: 50%;
    border-top-color: ${primary};
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
    }

`;