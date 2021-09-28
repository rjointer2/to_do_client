
import styled from "styled-components";

// palette
import { primary, white } from "./palette";

// icons
import { RiTodoLine } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import { RiChat1Line } from 'react-icons/ri';
import { GrStatusGoodSmall } from 'react-icons/gr'

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

export const UnlikedHeart = styled(AiOutlineHeart)`

`;

export const LikedHeart = styled(AiFillHeart)`
    animation-name: liked;
    animation-duration: 1s;
    @keyframes liked {
        from {
            color: black
        }

        to {
            color: red
        }
    }
    color: red;
    transition: 0.3s ease-in-out;
`;

export const CommentBubble = styled(RiChat1Line)``;

export const StatusDot = styled(GrStatusGoodSmall)``;



export const AvatarCircle = styled.img`
    border-radius: 50%;
    background-color: ${white};
    border: 2px solid ${primary};
    height: 50px;
    width: 50px;
`;

