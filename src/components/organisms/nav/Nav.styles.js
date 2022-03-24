import styled from "styled-components";

export const StyledNav = styled.nav`
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    min-width: 300px;
    max-width: 500px;
    width: 100%;
    min-height: 60px;
    max-height: 90px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    color: #666;
    border-radius: .5rem;
    .nav-links{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        min-height: 60px;
        padding: 1rem 0;
        li{
            width: 100%;
        }
        a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;
            transition: color .2s ease;
            &:hover{
                color: ${({theme}) => theme.colors.black};
            }
        }
        .nav-hint{
            font-size: 14px;
        }
        .iconify{
            font-size: 1.3rem;
        }
    }
    @media screen and (max-width: 500px) {
        left: unset;
        bottom: 0;
        border-radius: .5rem .5rem 0 0;
        transform: unset;
    }
`;