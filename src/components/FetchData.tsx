import { useState, useEffect } from "react";

const FetchData = () => {
    const [items, setItems] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setLoading(false);
                console.log(data);
            });
    }, []);

    return (
        <>
            <section>
                {loading ? (
                    <p className="animate-bounce">Loading...</p>
                ) : (
                    items.map(item => <p key={item.name.common}>{item.name.common}</p>)
                )}
            </section>
        </>
    );
};

export default FetchData;
