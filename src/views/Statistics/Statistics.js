import React, { useEffect, useState } from "react";
import StatisticsSection from "../../components/StatisticsSection";
import Loader from '../../components/utils/Loader'
import { StyledStatistics } from "./Statistics.styles";
import { Wrapper } from '../../styles/GlobalStyles';

export default function Statistics({setUser, user}) {
    const [nickname, setNickname] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getStatistics = async () => {
        setError(false);
        setLoading(true);
        await fetch(
            "https://fortnite-api.com/v2/stats/br/v2?name="
            + nickname
            + "&language=pl", {
                headers: {
                    Authorization: process.env.REACT_APP_FORTNITE_API_TOKEN
                }
            })
            .then(data => data.json())
            .then(data => {
                setUser(data.data)
            })
            .catch(error => {
                setError(`Konto nie istnieje. (${error.status})`)
            })
        setLoading(false)
    }
    const showStatistics = () => {
        if (!user || (Object.keys(user).length === 0)) return null;

        return (
            <div id="statistics">
                <div className="statistics__informations">
                    <div className="nickname">{user.account.name}</div>

                    {/* battlepass / KARNET BOJOWY */}
                    <section id="battlepass">
                        <p>Poziom:
                            <span className="blue">{ user.battlePass.level }</span>
                        </p>
                        <span>Do następnego poziomu: { 100 - user.battlePass.progress }%</span>
                        <div id="progress">
                            <span style={{
                                width: user.battlePass.progress + '%'
                            }}></span>
                        </div>
                    </section>
                </div>
                <StatisticsSection
                    title="Ogólne"
                    data={user.stats.all.overall}
                    className="overall" />
                <StatisticsSection
                    title="Solo"
                    data={user.stats.all.solo}
                    className="solo" />
                <StatisticsSection
                    title="Duo"
                    data={user.stats.all.duo}
                    className="duo" />
                <StatisticsSection
                    title="Oddziały"
                    data={user.stats.all.squad}
                    className="squad" />
            </div>
        )
    }
    const handleChange = (target) => {
        setNickname(target.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getStatistics();
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <StyledStatistics>
            <Wrapper>
            <center><h3>Sprawdź statystyki dowolnego gracza w Fortnite!</h3></center>
            <form
                method="post"
                id="search"
                onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="input-nickname"
                        placeholder="Wpisz wyszukiwany nick..."
                        value={nickname}
                        onChange={ handleChange } />
                    <button className="form-button" disabled={isLoading}>Sprawdź</button>
                    {/* <input
                        type="submit"
                        value="Sprawdź"
                        className="form-button"
                        disabled={isLoading && true}
                    /> */}
                </div>
            </form>
            {isLoading && <Loader /> }
            { error !== false ? (
                <p style={{textAlign: 'center'}}>{error}</p>
            ) : (
                showStatistics()
            )}
            </Wrapper>
        </StyledStatistics>
    )
}