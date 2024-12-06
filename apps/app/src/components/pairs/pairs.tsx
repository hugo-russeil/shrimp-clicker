import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Pairs: React.FC<{}> = () => {
    const pairs: { [key: string]: string } = {
        "coeur.jpg": "courantsmarins.jpg",
        "photosynthese.png": "poumons.jpg",
        "poumons.jpg": "photosynthese.png",
        "courantsmarins.jpg": "coeur.jpg",
    };

    const [selected, setSelected] = useState<string | null>(null);
    const [valid, setValid] = useState<string[]>([]);
    const [highlighted, setHighlighted] = useState<string[]>([]);

    const isValid = (src: string) => valid.includes(src);

    const getImgClassName = (src: string) => {
        return isValid(src) ? "w-50 rounded-lg grayscale" : "w-50 rounded-lg";
    };

    const handleClick = (element: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = element.currentTarget as HTMLButtonElement;
        const img = button.querySelector("img")?.getAttribute("src");
        const xSrcAns = button.querySelector("img")?.getAttribute("x-src-ans");



        if (!img || !xSrcAns) return;

        if (selected) {
            if (xSrcAns === selected) {
                setSelected(null);
                setValid([...(valid || []), img, xSrcAns]);
                setHighlighted(highlighted.filter(item => item !== selected));
            } else {
                setSelected(null);
                setHighlighted(highlighted.filter(item => item !== selected));
            }
        } else {
            setSelected(img);
            setHighlighted([...highlighted, img]);
        }
    };

    return (
        <div className="flex place-content-center flex-col items-center">
            {valid.length === Object.keys(pairs).length && 
            <h1 className="text-4xl">Bravo, vous avez réussi !</h1>}
            <Grid textAlign={'center'} color={'black'} className="grid gap-y-4 gap-x-20 grid-cols-2">
                {Object.keys(pairs).map((i) => (
                    <button
                        key={`${i}`}
                        name={`public/pairs/${i}`}
                        className={`flex place-content-center p-10 bg-white rounded-xl ${highlighted.includes(`public/pairs/${i}`) ? 'ring-4 ring-green-500' : ''}`}
                        onClick={(e) => handleClick(e)}
                    >
                        <img
                            src={`public/pairs/${i}`}
                            alt="image"
                            x-src-ans={`public/pairs/${pairs[i]}`}
                            className={getImgClassName(`public/pairs/${i}`) + ' w-[200px] '}
                        />
                    </button>
                ))}
            </Grid>
        </div>
    );
};