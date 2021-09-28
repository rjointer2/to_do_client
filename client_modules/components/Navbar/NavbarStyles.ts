
import styled from "styled-components";

// palette
import { hover_primary, hover_secondary, primary, white } from "../../styled_components/palette";


export const NavContainer = styled.nav`
    color: ${white};
    background: #3AAFA9;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    font-size: 20px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;



export const MobileIconNavBar = styled.div`
    display: none;
    

    @media screen and (max-width: 768px) {
        display: block;
        top: 0;
        right: 0;

        font-size: 1.8rem;
        cursor: pointer;
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    transform: translate(0%, 25%);

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    height: 80px;
`;

export const NavLinks = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
        color: ${hover_primary}
    }
`;


export const NavNotLinks = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
        color: ${hover_secondary}
    }
`;
