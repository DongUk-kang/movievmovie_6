import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loading from "../../Components/Loading";
import styled from "styled-components";

const Cotainer = styled.div`
  padding: 0px 10px;
`

const TvPresenter = ({ontheair, popular, topRated, loading}) => {
    return (
        loading ? (
            <Loading />
        ) : (
            <Cotainer>
                {ontheair && ontheair.length > 0 && (
                    <Section title={"On The Air"}>
                        {ontheair.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                rating={item.vote_average}
                                year={item.first_air_date}
                                poster={item.poster_path}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"Popular"}>
                        {popular.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                rating={item.vote_average}
                                year={item.first_air_date}
                                poster={item.poster_path}
                            />
                        ))}
                    </Section>
                )}
                {topRated && topRated.length > 0 && (
                    <Section title={"Top Rated"}>
                        {topRated.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                rating={item.vote_average}
                                year={item.first_air_date}
                                poster={item.poster_path}
                            />
                        ))}
                    </Section>
                )}
            </Cotainer>
            )

    );
};

TvPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    ontheair: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array
};

export default TvPresenter;
