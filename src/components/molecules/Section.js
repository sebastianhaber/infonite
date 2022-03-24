import styled from "styled-components"

export default function Section({children, title, className, highlight}) {
    return (
        <StyledSection className={(highlight && "highlight ") + className}>
            <div className="top">
                <p className="title">{ title }</p>
                <p className="small">Kliknij w przedmiot, by dowiedzieć się więcej.</p>
            </div>
            {children}
        </StyledSection>
    )
}
const StyledSection = styled.section`
    position: relative;
    padding: 2rem;
    margin: 1rem 0;
    &.highlight{
        background-color: ${({theme}) => theme.colors.highlight};
    }
    .top{
        font-size: 14px;
    }
    .title{
        font-size: 1.5rem;
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
        padding: .5rem;
    }
`;