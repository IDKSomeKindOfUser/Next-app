import styles from './Rating.module.css';
import cn from "classnames";
import { RatingProps } from "@/components/Rating/Rating.props";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Rating({ isEditable = false, rating, setRating, ...props }: RatingProps) {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <Image
                    key={i}
                    src="/star.svg"
                    alt="icon star"
                    width={20}
                    height={20}
                    className={cn(styles.star, { [styles.filled]: i < currentRating })}
                />
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
        </div>
    );
}