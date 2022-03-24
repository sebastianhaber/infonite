import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFound() {
    return (
        <Wrapper>
            <Helmet>
                <title>infonite. | 404</title>
                <meta name="description" content="Strona nie została odnaleziona." />
                <meta name='robots' content='noindex' />
            </Helmet>
            <div>
                <p className="code">404</p>
                <p>Twoja Lama Cię źle zaprowadziła...</p>
                <p>Wróć na <Link to='/' className='default'>stronę główną</Link></p>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 44px);
    display: grid;
    place-items: center;
    padding: 2rem;
    p{
        text-align: center;
        &.code{
            font-weight: bold;
            font-size: 2rem;
        }
    }
`;
