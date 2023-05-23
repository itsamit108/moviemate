import React from 'react';
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (currElem) => {
    const { id, type, title, synopsis } = currElem.jawSummary;
    const truncatedTitle = title.length > 18 ? title.substring(0, 18) + "..." : title;
    const truncatedSynopsis = synopsis.length > 66 ? synopsis.substring(0, 66) + "..." : synopsis;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={currElem.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
                </div>
                <div className={styles.card_data}>
                    <h2>{truncatedTitle}</h2>
                    <p>
                        {truncatedSynopsis}
                    </p>
                    <Link href={`/movie/${id}`}>
                        <button className={styles.exploreButton}>
                            Discover More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
