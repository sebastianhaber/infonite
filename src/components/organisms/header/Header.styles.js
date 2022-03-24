import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    height: 44px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${({theme}) => theme.colors.gray};
`;