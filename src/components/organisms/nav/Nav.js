import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { StyledNav } from './Nav.styles';

export default function Nav() {
    return (
        <StyledNav>
            <ul className="nav-links">
                <li title="Strona główna">
                    <Link to="/">
                        <Icon icon="akar-icons:home" />
                        <span className="nav-hint">News</span>
                    </Link></li>
                <li title="Sklep">
                    <Link to="/sklep">
                        <Icon icon="akar-icons:shopping-bag" />
                        <span className="nav-hint">Sklep</span>
                    </Link>
                </li>
                <li title="Nowe rzedmioty">
                    <Link to="/przedmioty">
                        <Icon icon="akar-icons:double-sword" />
                        <span className="nav-hint">Nowe przedmioty</span>
                    </Link>
                </li>
                <li title="Statystyki">
                    <Link to="/statystyki">
                        <Icon icon="akar-icons:align-bottom" />
                        <span className="nav-hint">Staty</span>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    )
}
