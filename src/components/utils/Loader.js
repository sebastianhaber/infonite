import { Icon } from '@iconify/react';
import styled, { keyframes } from 'styled-components';

export default function Loader() {
    return (
        <StyledLoader>
            <Icon icon="akar-icons:arrow-clockwise" />
        </StyledLoader>
    )
}
const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;
const StyledLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 2rem;
    svg{
        animation: ${rotate} 1s linear infinite;
    }
`;