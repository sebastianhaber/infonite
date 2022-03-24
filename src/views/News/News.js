import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../../components/utils/Loader';
import HeroSlider from '../../components/HeroSlider';
import { Wrapper } from '../../styles/GlobalStyles';
import { Item, NewsWrapper } from './News.styles';
import { Heading } from '../../components/utils/Heading'

export default function News({ news }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <title>infonite. | Najświeższe informacje z gry</title>
                <meta name="description" content="Aktualne newsy ze świata Fortnite!" />
            </Helmet>
            <HeroSlider />
            <Wrapper>
                <NewsWrapper>
                    <Heading>
                        <h1>News</h1>
                    </Heading>
                    {news.length === 0 ? (
                        <Loader />
                    ) : (
                        <div className="news-container">
                            {
                                news.map((item, index) => (
                                    <Item key={index}>
                                        <img src={item.image} alt={item.date} loading='lazy' />
                                        <div className="content">
                                            <div className="title">{ item.title }</div>
                                            <div className="description">{ item.body }</div>
                                        </div>
                                    </Item>
                                ))
                            }
                        </div>
                    )}
                </NewsWrapper>
            </Wrapper>
        </div>
    )
}