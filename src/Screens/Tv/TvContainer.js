import React, {useState, useEffect} from 'react';
import { tvAPI } from "../../api";
import TvPresenter from "./TvPresenter";


const TvContainer = () => {
    const [tvs, setTvs] = useState({
        ontheair: [],
        popular: [],
        topRated: [],
        ontheairError: null,
        popularError: null,
        topRatedError: null,
    })

    const getdata = async () => {
        const [ontheair, ontheairError] = await tvAPI.ontheair()
        const [popular, popularError] = await tvAPI.popular()
        const [topRated, topRatedError] = await tvAPI.toprated()
        setTvs({
            ontheair,
            popular,
            topRated,
            ontheairError,
            popularError,
            topRatedError,
        })
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <TvPresenter
            {...tvs}
        />
    );
};

export default TvContainer;
