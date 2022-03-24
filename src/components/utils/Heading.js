import styled from "styled-components";

export const Heading = styled.div`
    margin: 1rem 0;
    padding: .5rem 2rem;
    h1{
        font-size: 2rem;
    }
    @media screen and (max-width: 768px) {
        padding: .5rem;
        font-size: 14px;
        h1{
            font-size: 1.5rem;
        }
    }
`;