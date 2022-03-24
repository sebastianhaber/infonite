import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Footer() {
    return (
        <StyledFooter>
            <p className='copyright'>Oparte na licencji <a href='https://github.com/sebastianhaber/infonite' rel='noreferrer' target='_blank' className="bold blue">MIT</a></p>
            <div className="small">
                <p>Infonite to aplikacja, która nie jest w żaden sposób wspierana przez Epic Games.</p>
                <p>Epic Games, Fortnite i wszystkie powiązane właściwości są znakami towarowymi lub zastrzeżonymi znakami towarowymi firmy Epic Games, Inc.</p>
            </div>
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
    div{
        max-width: 1920px;
        margin: 0 auto;
    }
    .copyright{
        margin-bottom: 1rem;
    }
`;