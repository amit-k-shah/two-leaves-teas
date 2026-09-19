import "./review.css"

function Reviews (){
    return(
        <section className="Reviews">

        <hr />

        <h1>
            REVIEWS
        </h1>

        <p className="title">
            Loved by tea people <i>everywhere.</i> <br />
            Here's what they're saying.
        </p>

        <div className="review-rapper">

            <div className="review-products">

                <div className="review1">
                    <div className="background">
                        <p className="text1">
                            “The right amount of spice.” 
                        </p>
                        <p className="author">
                            Angelina R.
                        </p>  

                        <div className="bottom1">
                            <div className="review-image1"></div>
                            <div className="review-product-name">
                                ORGANIC MOUNTAIN HIGH CHAI
                            </div>
                            <div className="shop">
                                <button className="Shop">Shop</button>
                            </div>
                        </div>   
                    </div>
                </div>


                  <div className="review2">
                    <div className="background">
                        <p className="text2">
                            “This drink is incredibly refreshing, especially when served over ice. It’s light, crisp, and instantly cooling.”
                        </p>
                        <p className="author">
                            Jacob K.
                        </p>  

                        <div className="bottom2">
                            <div className="review-image2"></div>
                            <div className="review-product-name">
                                ORGANIC MATCHA MINT
                            </div>
                            <div className="shop">
                                <button className="Shop">Shop</button>
                            </div>
                        </div>   
                    </div>
                </div>

                  <div className="review3">
                    <div className="background">
                        <p className="text3">
                            “One sip and you can feel the difference—clean energy, rich flavor, and all the good stuff your body loves. Literally liquid GOLD.”
                        </p>
                        <p className="author">
                            Harrison G.
                        </p>  

                        <div className="bottom3">
                            <div className="review-image3"></div>
                            <div className="review-product-name">
                                TWO ROOTS GOLDEN LATTE MIX
                            </div>
                            <div className="shop">
                                <button className="Shop">Shop</button>
                            </div>
                        </div>   
                    </div>
                </div>

                  <div className="review4">
                    <div className="background">
                        <p className="text4">
                           “Soo tasty and energizing.”
                        </p>
                        <p className="author">
                            Gracie M.
                        </p>  

                        <div className="bottom4">
                            <div className="review-image4"></div>
                            <div className="review-product-name">
                                ORGANIC TROPICAL GREEN TEA
                            </div>
                            <div className="shop">
                                <button className="Shop">Shop</button>
                            </div>
                        </div>   
                    </div>
                </div>

                  <div className="review5">
                    <div className="background">
                        <p className="text5">
                            “The perfect start to my day.”
                        </p>
                        <p className="author">
                            Jorge F.
                        </p>  

                        <div className="bottom5">
                            <div className="review-image5"></div>
                            <div className="review-product-name">
                                JASMINE PETAL
                            </div>
                            <div className="shop">
                                <button className="Shop">Shop</button>
                            </div>
                        </div>   
                    </div>
                </div>
        
            </div>

        </div>
        
        </section>
    );
}

export default Reviews;