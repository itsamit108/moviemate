import React from 'react';
import styles from "@/app/styles/common.module.css";
import MovieCard from '../components/MovieCard';

const Page = async () => {
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '04dd6ec6cfmsh2d982845e6d6cb3p19410fjsn13bf6a0f7d5a',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const main_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Discover the World of Entertainment</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((currElem) => {
                                return <MovieCard key={currElem.id} {...currElem} />;
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
