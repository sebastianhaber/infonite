import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 3;
    #overlay{
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
        animation: showIn .2s ease;
        transition: opacity .2s ease;
        &.hide {
            opacity: 0;
            pointer-events: none;
        }
    }
    .modal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        width: 70%;
        min-width: 300px;
        max-width: 1440px;
        min-height: 500px;
        max-height: 90vh;
        padding: 1rem;
        border-radius: .5rem;
        box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
        background-color: ${({theme}) => theme.colors.white};
        animation: slideUp .4s ${({ theme }) => theme.transitions.cubic};
        transition: width .4s ${({ theme }) => theme.transitions.cubic};
        &.hide {
            animation: slideDown .4s ${({theme}) => theme.transitions.cubic};
        }
        #quit-btn{
            position: fixed;
            top: 1rem;
            right: 1rem;
            font-size: 2rem;
            display: grid;
            place-items: center;
            cursor: pointer;
            background-color: ${({theme}) => theme.colors.white};
            border-radius: .5rem;
        }
        @media screen and (max-width: 1000px) {
            width: 90%;
        }
    }
.modal{
    &__top {
        text-align: center;
        margin: 0 3rem;
    }
    &__title{
        font-size: 24px;
    }
    &__content{
        display: flex;
        justify-content: space-around;
        align-content: center;
        margin-top: 2rem;
    }
    &__content-info{
        width: 50%;
        padding: 1rem 0;
        ul{
            list-style: none;
        }
        li{
            position: relative;
            width: max-content;
            max-width: 100%;
            cursor: pointer;
            .type{
                color: #999;
            }
            &:hover > .info{
                opacity: 1;
                pointer-events: all;
            }
        }
        .bundle{
            font-size: 24px;
        }
        .bundleItem{
            font-weight: 600;
        }
    }
    &__price{
        margin-bottom: 1rem;
        font-size: 24px;
    }
    &__main-info{
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }
    &__set{
        margin: 2rem 0;
    }
    img#first-item-image{
        width: 100%;
        max-width: 300px;
        border-radius: .5rem;
        object-fit: cover;
        object-position: center;
        margin: 0 auto;
    }
    @media screen and (max-width: 768px) {
        &__content{
            flex-direction: column-reverse;
        }
        &__content-info{
            width: 100%;
            text-align: center;
            li{
                margin: .5rem auto;
            }
            .bundle{
                font-size: 20px;
            }
        }
    }
}
.final-price{
    color: ${({theme}) => theme.colors.blue};
    font-weight: bold;
}
.uncommon-border,
.Uncommon-border {
    border-top: 4px solid ${({theme}) => theme.colors.green};
    border-bottom: 4px solid ${({theme}) => theme.colors.green};
}

.rare-border,
.Rare-border {
    border-top: 4px solid ${({theme}) => theme.colors.blue};
    border-bottom: 4px solid ${({theme}) => theme.colors.blue};
}

.epic-border,
.Epic-border {
    border-top: 4px solid ${({theme}) => theme.colors.purple};
    border-bottom: 4px solid ${({theme}) => theme.colors.purple};
}

.legendary-border,
.Legendary-border{
    border-top: 4px solid ${({theme}) => theme.colors.gold};
    border-bottom: 4px solid ${({theme}) => theme.colors.gold};
}

// ON HOVER DISPLAY BLOCK WITH VALUES
.info {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 50%;
    left: 40%;
    transform: translate(-40%, -50%);
    z-index: 1;
    width: 300px;
    height: 90%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: .5rem;
    border-radius: .75rem;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px rgba(0,0,0,.3);
    text-align: center;
    transition: opacity .2s ${({theme}) => theme.transitions.cubic};
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
    img{
        width: 100%;
        border-radius: .5rem;
        margin-top: 1rem;
    }
    @media screen and (max-width: 768px){
        min-height: 50%;
        height: unset;
        max-height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.modalhoverinfo {
    &__item-name{
        font-weight: bold;
    }
}
img.background-emote{
    background-color: #999;
}
`;