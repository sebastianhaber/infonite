import React from 'react';
import { StyledModal } from './Modal.styles';
import SimpleBar from 'simplebar-react'
import { Icon } from '@iconify/react';

export default function ItemModal({ onClose, item }) {
    const date = ()=> {
        const arrDate = item.added.substring(0, 10).split('-');
        return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`
    }
    const rarity = item.rarity.backendValue.substring(13).toLowerCase();
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
                    <div className="modal__title"><b>{item.name}</b> ({ item.type.displayValue })</div>
                    <div className="modal__desc">{item.description}</div>
                </div>

                <div className="modal__content">
                    <img
                        src={
                            item.images.featured != null
                                ? item.images.featured
                                : item.images.icon
                        }
                        alt={item.name} className={
                        item.type.value === "emote" ? rarity : ""
                    }
                    id="first-item-image"/>
                    <div className="modal__content-info">
                        <div className="modal__main-info">
                            <p><span className="blue bold">Data dodania: </span> {date()}</p>
                            <p><span className="blue bold">Pierwszy raz w grze: </span> { item.reactive ? "Nie" : "Tak" }</p>
                        </div>

                        {
                            item.set !== null && (
                                <div className="modal__set">
                                    <b>Set: </b>
                                    <span className="blue">{item.set.value}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </SimpleBar>
        </StyledModal>  
    );
}