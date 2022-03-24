import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <StyledFooter>
            <p className='copyright'>&copy; Copyright Infonite. Wszelkie prawa zastrzeżone.</p>
            <p>Infonite to aplikacja, która nie jest w żaden sposób wspierana przez Epic Games.</p>
            <p>Epic Games, Fortnite i wszystkie powiązane właściwości są znakami towarowymi lub zastrzeżonymi znakami towarowymi firmy Epic Games, Inc.</p>
        </StyledFooter>
    )
}
const StyledFooter = styled.footer`
    min-height: 10vh;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    padding: 2rem;
    padding-bottom: 6rem;
    text-align: center;
    font-size: clamp(12px, 0.75vw, 2vw);
    div{
        max-width: 1920px;
        margin: 0 auto;
    }
    .copyright{
        margin-bottom: 1rem;
        font-size: 1vw;
    }
`;