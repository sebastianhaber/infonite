export default function ModalHoverInfo({item}) {
    const rarity = item.rarity.backendValue.split(':')[2];
    return (
        <div className={`info modalhoverinfo ` +
            rarity +
            `-border`}>
            <p className="modalhoverinfo__item-name blue">{item.name}</p>
            <p className="small">{item.description}</p>
            <p className="small">{item.rarity.displayValue}</p>
            {item.set && (
                <div className="modalhoverinfo-set">
                    <b>Część setu:</b> <span className="blue">{item.set.value}</span>
                </div>
            )}
            <img src={item.images.icon} alt={item.name} className={rarity} />
        </div>
    );
}