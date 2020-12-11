import React, { useState, useEffect } from "react";

const BASE_URL = 'https://nextar.flip.id'

export default (url) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    const refresh = _ => {
        setLoading(true);

        fetch(BASE_URL + url)
            .then(res => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
                setError(e);
            });
    }

    useEffect(() => {
        const abortController = new AbortController();

        // refresh for refresh control later
        refresh()

        return () => abortController.abort();

        // will render everytime there's url updated
        // in case if api require params filter or etc
    }, [url]);

    return { data, isLoading, error, refresh };
};

