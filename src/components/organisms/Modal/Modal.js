import React from 'react';
import ModalHoverInfo from '../../ModalHoverInfo';
import { StyledModal } from './Modal.styles';
import { Icon } from '@iconify/react';
import SimpleBar from 'simplebar-react'

export default function Modal({ onClose, item }) {
    let regularPrice = item.regularPrice;
    let finalPrice = item.finalPrice;
    let firstItem = item.items[0];
    const rarity = firstItem.rarity.backendValue.split(':')[2];

    return (
        <StyledModal>
            <div id="overlay" onClick={onClose}></div>
            <SimpleBar
                forceVisible='y'
                id="modal"
                className={`modal ` + rarity + `-border`}>
                <div id="quit-btn" onClick={onClose} title="Wyjdź">
                    <Icon icon="akar-icons:cross" />
                </div>

                <div className="modal__top">
                    <div className="modal__title"><b>{firstItem.name}</b> ({ firstItem.type.displayValue })</div>
                    <div className="modal__desc">{firstItem.description}</div>
                </div>

                <div className="modal__content">
                    <img src={firstItem.images.featured} alt={firstItem.name} className={rarity}
                    id="first-item-image"/>
                    <div className="modal__content-info">
                        <div className="modal__price">
                            <span className="bold">Cena: </span>
                            <span>
                            {
                                (regularPrice !== finalPrice ? (
                                    <>
                                        <strike>{regularPrice}</strike>
                                        <span className="final-price"> { finalPrice } V</span>
                                    </>
                                ) : (
                                    <span className="final-price"> { finalPrice } V</span>
                                ))
                            }
                            </span>
                        </div>
                        
                        <div className="modal__introduction">
                            {firstItem.introduction.text}
                        </div>

                        {
                            firstItem.set !== null && (
                                <div className="modal__set"><b>Set:</b> <span className="blue">{ firstItem.set.value }</span></div>
                            )
                        }

                    {
                        item.items.length > 1 && (
                            <>
                                <p className="blue bundle"><b>Dodatkowo otrzymujesz:</b></p>
                                <ul className="bundle-items">
                                    {item.items.slice(1).map(bundleItem => (
                                        <li key={`${bundleItem.name}.${bundleItem.type.displayValue}`}>
                                            <span className="bundleItem">{bundleItem.name}</span>
                                            <span className="type"> ({bundleItem.type.displayValue})</span>
                                            <ModalHoverInfo item={bundleItem} />
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )
                    }
                    </div>
                </div>
            </SimpleBar>
        </StyledModal>  
    );
}