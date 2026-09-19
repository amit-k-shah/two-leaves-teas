import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft
} from "@fortawesome/free-solid-svg-icons";


import "./bestseller.css";

function Bestseller() {

    const [wordActive, setWordActive] = useState(false);
    const [headActive, setHeadActive] = useState(false);

    const wordRef = useRef(null);
    const headRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {

        const wordObserver = new IntersectionObserver(
            (entries) => {

                if (entries[0].isIntersecting) {
                    setWordActive(true);

                    wordObserver.unobserve(entries[0].target);
                }

            },
            {
                threshold: 0.4
            }
        );

        const headObserver = new IntersectionObserver(
            (entries) => {

                if (entries[0].isIntersecting) {
                    setHeadActive(true);

                    headObserver.unobserve(entries[0].target);
                }

            },
            {
                threshold: 0.4
            }
        );

        if (wordRef.current) {
            wordObserver.observe(wordRef.current);
        }

        if (headRef.current) {
            headObserver.observe(headRef.current);
        }

        return () => {
            wordObserver.disconnect();
            headObserver.disconnect();
        };

    }, []);

    return (
        <div className="bestSeller">
            <div className="arrows">
                 {currentIndex > 0 &&(
            <button className="arrowLeft"
            onClick={()=> setCurrentIndex(prev => prev -1)}>
            <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
        )}

        {currentIndex < 7 && (
            <button className="arrowRight"
            onClick={()=> setCurrentIndex(prev => prev +1)}>
                <FontAwesomeIcon icon={faChevronRight}/>

            </button>
        )}
            </div>

            {/* Down → Original Position */}
            <p
                ref={wordRef}
                className={`word ${wordActive ? "active" : ""}`}
            >
                A <i>great</i> cup starts with a careful <br />
                pluck - the top two leaves and a bud.
            </p>

            {/* Up → Original Position */}
            <h1
                ref={headRef}
                className={`head ${headActive ? "active" : ""}`}
            >
                BEST SELLER
            </h1>
            <div className="product">

                <div className="productTrack"
                 style={{
            transform: `translateX(-${currentIndex * 350}px)`
        }}>

                <div className="product1">

                    <div className="image">
                        <div className="productName">TEA SACHETS</div>
                        <div className="productRating">&#9733;4.72 (86)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>

                    <div className="text">
                        <h2>
                            Oraganic Tropical Green Tea
                        </h2>
                        <p className="para1">
                            From $11.95
                        </p>
                        <p className="para2">
                            Our Oragnic Tropical Green is a fruity and fun 
                            take on a classic green tea.
                        </p>
                    </div>

                </div>

                <div className="product2">
                    <div className="image2">
                        <div className="productName">MATCHA</div>
                        <div className="productRating">&#9733;4 (1)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Oraganic Ceremonial Matcha - 1 oz Tin
                        </h2>
                        <p className="para1">
                            From $23.95
                        </p>
                        <p className="para2">
                            Our Caremonial Matcha is organic and cermonial
                            grade - Japanese Matha
                        </p>

                    </div>
                </div>

                <div className="product3">
                    <div className="image3">
                        <div className="productName">NAKED SACHETS</div>
                        <div className="productRating">&#9733;5 (12)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Organic Papermint - 50 Naked Tea Sachets
                        </h2>
                        <p className="para1">
                            From $21.95
                        </p>
                        <p className="para2">
                            Our Organic Papermint tea is a made from
                            papermint grown in Washington State.
                        </p>

                    </div>
                </div>

                <div className="product4">
                    <div className="image4">
                        <div className="productName">NAKED SACHETS</div>
                        <div className="productRating">&#9733;4.57 (42)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Oraganic Earl Gray - 50 Naked Tea Sachets
                        </h2>
                        <p className="para1">
                            From $21.95
                        </p>
                        <p className="para2">
                            Earl Gray's distinctive aroma comes From
                            bergamot - a citrus fruit about the size of an
                            orange but yellow-green and slightly pear - shaped
                        </p>

                    </div>
                </div>

                <div className="product5">
                    <div className="image5">
                        <div className="productName">GIFTS & SAMPLERS</div>
                        <div className="productRating">&#9733;5 (2)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Herbal Tea Trio
                        </h2>
                        <p className="para1">
                            $33.30
                        </p>
                        <p className="para2">
                            A trio of smoothing herbal tea.
                        </p>

                    </div>
                </div>

                <div className="product6">
                    <div className="image6">
                        <div className="productName">GIFT & SAMPLER</div>
                        <div className="productRating">&#9733;4.85 (41)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Classic Bamboo Tea Chest
                        </h2>
                        <p className="para1">
                            $42.95
                        </p>
                        <p className="para2">
                            This 6 slot bamboo box offer a sampling of
                            eight Sachets each of six of our best selling teas.
                        </p>

                    </div>
                </div>

                <div className="product7">
                    <div className="image7">
                        <div className="productName">LATTE MIX</div>
                        <div className="productRating">&#9733;4.3 (23)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Nice Matcha Tea Latte Mix
                        </h2>
                        <p className="para1">
                            From $12.95
                        </p>
                        <p className="para2">
                            Our Nice Matcha is a lightly sweetend
                            powder mix meantfor making tea lattes simple.
                        </p>

                    </div>
                </div>

                <div className="product8">
                    <div className="image8">
                        <div className="productName">LATTE MIX</div>
                        <div className="productRating">&#9733;4.28 (18)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                           Nice Chai Tea Latte Mix
                        </h2>
                        <p className="para1">
                            From $12.95
                        </p>
                        <p className="para2">
                            Our Nice Chai is a not too sweet, not too
                            spicy, powdered latte mix meant for making tea lattes simple. 
                        </p>

                    </div>
                </div>

                <div className="product9">
                    <div className="image9">
                        <div className="productName">TEA SACHETS</div>
                        <div className="productRating">&#9733;4.79 (108)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Organic Mountain Hight Chai Tea 
                        </h2>
                        <p className="para1">
                            From $11.95
                        </p>
                        <p className="para2">
                            An ode to our Rocky Mountain roots, our
                            organic Mountain High Chai takes your
                            tastebuds down a spice - filled ski slope. 
                        </p>

                    </div>
                </div>

                <div className="product10">
                    <div className="image10">
                        <div className="productName">NAKED SACHETS</div>
                        <div className="productRating">&#9733;5 (6)</div>

                        <button className="cart">
                            + <br /> Add
                        </button>
                    </div>
                    <div className="text">
                        <h2>
                            Alpine Berry - 15 Naked Tea Sachets
                        </h2>
                        <p className="para1">
                            From $8.95
                        </p>
                        <p className="para2">
                            Our signature herbal blend, Alpine Berry is a 
                            caffeine-free, naturally sweet and tart tea.
                        </p>

                    </div>
                </div>
            </div>

            </div>
            
            <div className="switch">
                <button className={`firstSwitch ${currentIndex === 0 ? "active" : ""}`}
                    onClick={()=> setCurrentIndex(0)}
                >_____</button>
                <button className={`secondSwitch ${currentIndex === 2 ? "active": ""}`}
                    onClick={()=> setCurrentIndex(2)}
                >_____</button>
                <button className={`secondSwitch ${currentIndex === 4 ? "active": ""}`}
                    onClick={()=> setCurrentIndex(4)}
                >_____</button>
                <button className={`secondSwitch ${currentIndex === 6 ? "active": ""}`}
                    onClick={()=> setCurrentIndex(7.16)}
                >_____</button>
            </div>

            <button className="explore">
                Explore All Teas
            </button>

        </div>
    );
}

export default Bestseller;