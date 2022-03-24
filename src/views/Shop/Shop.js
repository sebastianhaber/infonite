import React, { useEffect, useState } from 'react';
import Modal from '../../components/organisms/Modal/Modal';
import Template from '../../components/organisms/pageTemplate/Template';
import Section from '../../components/molecules/Section';
import Loader from '../../components/utils/Loader';
import SimpleBar from 'simplebar-react'
import { Helmet } from 'react-helmet';
import { Item } from '../../styles/GlobalStyles';

export default function Shop({data}) {
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
    const returnItems = (items, isLegendary) => {
        return items.map(item => (
                <Item className={(isLegendary ? 'legendary ' : '') +
                    item.items[0].rarity.backendValue.split(':')[2] +
                    (item.items.length > 2 ? " bundle-offer" : "") +
                    (item.regularPrice - item.finalPrice > 0 ? " sale" : '')}
                    key={item.offerId}
                onClick={() => openModal(item)}>
                    <img src={item.items[0].images.icon} alt={ item.items[0].name } loading='lazy'/>
                    <div className="meta">
                        {
                            item.bundle !== null ? (
                                <>
                                    <p className="title">{ item.bundle.name }</p>
                                    <p className="desc">{ item.bundle.info }</p>
                                </>
                            ) : (
                                <>
                                    <p className="title">{ item.items[0].name }</p>
                                    <p className="desc">{ item.items[0].description }</p>
                                </>
                            )
                        }
                    </div>
                </Item>
        ))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {isModalOpen && (
                <Modal
                    onClose={() => closeModal()}
                    item={modalItem}
                />
            )}
            <Helmet>
                <title>infonite. | Sklep</title>
                <meta name="description" content="Aktualny sklep w Fortnite!" />
                <meta name="keywords" content="fortnite sklep, sklep, gra, nowy sklep, aktualny sklep fortnite" />
            </Helmet>
            <Template
                title="Sklep"
                description="Aktualne przedmioty w sklepie."
                className="shop">
                {data.featured && (
                    <Section title="Wyróżnione" highlight={true}>
                        <SimpleBar forceVisible='x' className="items">
                            {data.featured.length === 0 ? <Loader /> : (
                                returnItems(data.featured)
                            )}
                        </SimpleBar>
                    </Section>
                )}
                {data.daily && (
                    <Section title="Oferty dnia">
                        <SimpleBar forceVisible='x' className="items">
                                {data.daily.length === 0 ? <Loader /> : (
                                    returnItems(data.daily)
                                )}
                        </SimpleBar>
                    </Section>
                )}
                {data.superOffers && (
                    <Section title="Specjalne oferty">
                        <SimpleBar forceVisible='x' className="items">
                            {data.superOffers.length === 0 ? <Loader /> : (
                                returnItems(data.superOffers, true)
                        )}
                        </SimpleBar>
                    </Section>
                )}
            </Template>
        </>
    )
}