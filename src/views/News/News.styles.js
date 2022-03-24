import styled from "styled-components";

export const NewsWrapper = styled.div`
    position: relative;
    min-height: 50vh;
    .news-container {
        display: flex;
        flex-direction: column;
        padding: 0 2rem 5rem;
    }
`;
export const Item = styled.div`
    display: flex;
    margin: 1rem 0;
    img {
        width: 300px;
        border-radius: .5rem;
        object-fit: cover;
    }

    .content {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        padding: 1rem;

        .title {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
    @media screen and (max-width: 650px) {
        flex-direction: column;
        img {
            width: 100%;
        }
        .content {
            transform: translateY(-50px);
            margin: 0;
            text-align: center;
            background-color: ${({theme}) => theme.colors.white};
        }
    }
`;