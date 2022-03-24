import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border-radius: 0;
    }
    html, body{
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.black};
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        letter-spacing: -.022rem;
        line-height: 1.5;
        min-width: 300px;
        user-select: none;
        scroll-behavior: smooth;
        &.overflow{
            overflow-y: hidden;
        }
        .uncommon,
        .Uncommon {
            background: linear-gradient(135deg, #0BA712 0%, #0B4312 100%);
        }
        .rare,
        .Rare{
            background: linear-gradient(135deg, #06f 0%, #00a 100%);
        }
        .epic,
        .Epic {
            background: linear-gradient(135deg, #8800F2 0%, #3f0042 100%);
        }
        .legendary,
        .Legendary{
            background: linear-gradient(135deg, #f2c600 0%, #f28900 100%);
        }
        .icon,
        .Icon {
            background: linear-gradient(135deg, #666 0%, #222 100%);
        }
        main{
            min-height: 100vh;
        }
    }
    input, button, textarea{
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        border: 0;
        border-radius: 0;
        outline: none;
        appearance: none;
    }
    a{
        text-decoration: none;
        color: inherit;
        &.default{
            color: ${({theme}) => theme.colors.blue};
            font-weight: bold;
        }
    }
    img{
        display: block;
    }
    .items{
        width: 100%;
        white-space: nowrap;
    }
    .blue{
        color: ${({theme}) => theme.colors.blue};
    }
    .bold {
        font-weight: bold;
    }
    .small {
        font-size: 14px;
    }
`;
export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 1rem auto 3rem;
`;
export const Center = styled.div`
    width: 100%;
    height: calc(100vh - 44px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Item = styled.div`
    display: inline-block;
    position: relative;
    width: 300px;
    height: 400px;
    border-radius: .5rem;
    margin: 1.5rem 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
    }
    .meta{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        padding: 1rem;
        background-color: rgba(255,255,255,.9);
        white-space: pre-wrap;
    }
    .title{
        font-weight: bold;
        font-size: 1.5rem;
    }
    .desc{
        font-size: 14px;
    }
    &.bundle-offer{
        position: relative;
        overflow: hidden;
        background: radial-gradient(ellipse farthest-corner at left top, #FF5F6D 0%,#FFC371 50%, #FF5F6D 100%);
        background-size: 600% 100%;
        animation: animatedBackground 2s ${({theme}) => theme.transitions.cubic} infinite alternate both;
        &::before{
            content: "Zestaw";
            position: absolute;
            top: -2rem;
            left: -3rem;
            transform: rotate(-45deg);
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            width: 7rem;
            height: 5rem;
            background-color: ${({theme}) => theme.colors.black};
            color: ${({theme}) => theme.colors.white};
            text-align: center;
            font-weight: bold;
        }
    }
    &.sale {
        position: relative;
        overflow: hidden;

        &::after {
            content: "Sale";
            position: absolute;
            top: -2rem;
            right: -3rem;
            transform: rotate(45deg);
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            width: 7rem;
            height: 5rem;
            background-color: ${({theme}) => theme.colors.black};
            color: ${({theme}) => theme.colors.white};
            text-align: center;
            font-weight: bold;
        }
    }
`;