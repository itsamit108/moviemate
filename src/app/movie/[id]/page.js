import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
    try {
        const id = params.id;
        const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '04dd6ec6cfmsh2d982845e6d6cb3p19410fjsn13bf6a0f7d5a',
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };

        const res = await fetch(url, options);
        if (!res.ok) {
            if (res.status === 404) {
                throw new Error('Movie not found');
            }
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        const main_data = data[0].details;
        return (
            <div className={styles.container}>
                <h2 className={styles.movie_title}>
                    Netflix \ <span>{main_data.type}</span>
                </h2>
                <div className={styles.card_section}>
                    <div>
                        <img src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} style={{ borderRadius: '20px' }} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        const errorMessage = error.message === 'Movie not found' ? 'Sorry, the movie was not found.' : 'Sorry, an error occurred.';
        return (
            <center>
                <div className={styles.container}>
                    <h2 className={styles.movie_title}>{errorMessage}</h2>
                    <Link href="/">
                        <button className={styles.home_button}>Go to Home Page</button>
                    </Link>
                </div>
            </center>
        );
    }
};

export default page;
