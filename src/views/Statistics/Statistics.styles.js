import styled from "styled-components";

export const StyledStatistics = styled.div`
    form#search {
        .form-group {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 2rem 0;
            min-height: 50px;
            padding: 1rem;
            #input-nickname{
                background-color: #eee;
                height: 50px;
                padding: 1rem;
                margin-right: 1rem;
                margin-bottom: 1rem;
                border: 2px solid transparent;
                border-radius: .5rem;
                transition: border-color .4s ${({theme}) => theme.transitions.cubic};
                &:focus{
                    border-color: ${({theme}) => theme.colors.blue};
                }
            }
        }
    }
    &__informations, section{
        padding: 2rem 1rem;
        h1{
            text-transform: uppercase;
        }
    }
    .nickname{
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }
    #battlepass{
        display: flex;
        flex-direction: column;
        margin: 1rem auto;
        text-align: center;
        max-width: 600px;
        p{
            display: block;
            font-size: 1.5rem;
            .blue{
                font-weight: bold;
                margin-left: 1rem;
            }
        }
    }
    #progress{
        display: block;
        width: 100%;
        height: 2rem;
        background-color: #ddd;
        text-align: center;
        border-radius: .5rem;
        overflow: hidden;
        margin-top: 1rem;
        span{
            display: block;
            height: 100%;
            background: linear-gradient(to bottom, #06f, #2121ff);
        }
    }
    .items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        list-style: none;
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem;
            flex: 1;
            min-width: 200px;
        }
        .items-top{
            width: 100%;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #999;
            li{
                flex: unset;
            }
        }

        .number {
            font-weight: bold;
            font-size: 2rem;
        }
    }
    .overall{
        background-color: ${({theme}) => theme.colors.black};
        color: ${({theme}) => theme.colors.white};
    }
    .duo, .squad{
        border-top: 3px solid ${({theme}) => theme.colors.black};
    }
    .wrapper{
        max-width: 1200px;
        margin: 0 auto;
    }
    .form-button {
        background-color: ${({theme}) => theme.colors.blue};
        font-weight: bold;
        color: ${({theme}) => theme.colors.white};
        padding: .5rem 2rem;
        border-radius: .5rem;
        cursor: pointer;
        height: 50px;

        &:disabled {
            cursor: not-allowed;
            background-color: #666;
        }
        &:hover:not(:disabled){
            background-color: ${({theme}) => theme.colors.blueDarker};
        }
        &:active:not(:disabled) {
            transform: scale(0.95);
        }
    }
    @media screen and (max-width: 768px){
        &__informations, section{
            padding: 1rem;
            h1{
                font-size: 1.5rem;
            }
        }
        .items-top{
            flex-direction: column;
        }
    }
`;