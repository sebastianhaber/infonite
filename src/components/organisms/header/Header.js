import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader } from './Header.styles'

export default function Header() {
    return (
        <StyledHeader>
            <Link to="/">infonite.</Link>
        </StyledHeader>
    )
}
