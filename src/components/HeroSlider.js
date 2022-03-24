import Image from '../assets/vlad-gorshkov-G1jbCAqp5sk-unsplash.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HeroSlider() {
    return (
        <Hero>
            <img src={Image} alt="Fortnite image1"/>
            <div className="content">
                <div className="hero-text">Chcesz się dowiedzieć co jest w sklepie?</div>
                <Link to="/sklep" className="hero-button">Przejdź do sklepu</Link>
            </div>
        </Hero>
    );
}
const Hero = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    padding: 0 2rem;
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
    }
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
    .content{
        position: relative;
        z-index: 1;
        text-align: center;
    }
    .hero-text{
        font-size: 2.5rem;
        font-weight: bold;
        @media screen and (max-width: 768px) {
            font-size: 2rem;
        }
    }
    a.hero-button{
        display: inline-block;
        padding: .5rem 2.5rem;
        border-radius: 0.75rem;
        background-color: ${({theme}) => theme.colors.blue};
        color: ${({theme}) => theme.colors.white};
        font-weight: bold;
        margin: 1rem 0;
        transition: background-color .2s ease;
        &:hover{
            background-color: ${({theme}) => theme.colors.blueDarker};
        }
    }
`;