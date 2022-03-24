import React, { useEffect, useState } from 'react';
import MainTemplate from '../../components/organisms/pageTemplate/Template';
import Section from '../../components/molecules/Section';
import ItemModal from '../../components/organisms/Modal/ItemModal';
import Loader from '../../components/utils/Loader';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Item } from '../../styles/GlobalStyles';

export default function Items({ items }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    const closeModal = () => {
        document.getElementById("modal").classList.add("hide");
        document.getElementById("overlay").classList.add("hide");
        document.querySelector("body").classList.remove("overflow");
        setTimeout(() => {
            setModalOpen(false);
            setModalItem(null);
        }, 200);
    }
    const openModal = (item) => {
        setModalItem(item);
        setModalOpen(true);
        document.querySelector("body").classList.add("overflow");
    }
    const returnItems = (array, isLegendary) => {
        return array.map((item, index) => (
            <Item className={(isLegendary ? 'legendary ' : '') +
                item.rarity.backendValue.substring(13).toLowerCase() +
                (item.regularPrice - item.finalPrice > 0 ? " sale" : '')}
                key={index}
                onClick={() => openModal(item)}>
                <img src={item.images.icon} alt={ item.name } loading='lazy'/>
                <div className="meta">
                    <p className="title">{ item.name }</p>
                    <p className="desc">{ item.description }</p>
                </div>
            </Item>
        ))
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainTemplate
            title="Nadchodzące przedmioty"
            description="Przedmioty, które zostaną dodane do gry."
            className="przedmioty">
            <Helmet>
                <title>infonite. | Nadchodzące przedmioty</title>
                <meta name="description" content="Dodane przedmioty, które nie są jeszcze dostępne w grze Fortnite" />
                <meta name="keywords" content="fortnite nadchodzące przedmioty, nowości fortnite" />
            </Helmet>
                {isModalOpen && (
                    <ItemModal
                        onClose={() => closeModal()}
                        item={modalItem}
                    />
                )}
                <Section
                    title="Nowe przedmioty"
                    className="upcoming">
                    <StyledItems>
                        {items.length === 0 ? <Loader /> : (
                            returnItems(items)
                        )}
                    </StyledItems>
                </Section>
        </MainTemplate>
    )
}
const StyledItems = styled.div`
    overflow-x: unset;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;