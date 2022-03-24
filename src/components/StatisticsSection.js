export default function StatisticsSection({ title, data, className }) {
    const round = (number) => {
        return Math.round(number * 100) / 100;
    }
    return (
        <section className={className}>
            <div className="wrapper">
                <h1>{title}</h1>
                <ul className="items">
                    <div className="items-top">
                        <li>
                            <span className="number">🏆 { data.wins }</span>
                            <span>Wygrane</span>
                        </li>
                        <li>
                            <span className="number">🔫 { data.kills }</span>
                            <span>Zabójstwa</span>
                        </li>
                        <li>
                            <span className="number">☠ { data.deaths }</span>
                            <span>Śmierci</span>
                        </li>
                    </div>
                    <li>
                        <span className="number">🥇 { round(data.winRate) }%</span>
                        <span>% Wygranych</span>
                    </li>
                    <li>
                        <span className="number">🔥 { round(data.kd) }</span>
                        <span>K/D</span>
                    </li>
                    <li title="Zabójstwa na mecz">
                        <span className="number">💥 { round(data.killsPerMatch) }</span>
                        <span>KPM</span>
                    </li>
                    <li>
                        <span className="number">🎮 { data.matches }</span>
                        <span>Mecze</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}