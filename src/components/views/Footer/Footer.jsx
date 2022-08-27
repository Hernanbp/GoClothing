
export const Footer = () => {

    return (
        <footer>

            <section className="data">
                <div>

                    <div>
                        <img src="../../../img/logo.png" alt="coral_logo" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div>
                            <img src="./img/social-icons/twitter.png" alt="link_facebook" />
                            <img src="../../../img/social-icons/twitter.png" alt="link_twitter" />
                            <img src="../../../img/social-icons/linkedin.png" alt="link_linkedin" />
                            <img src="../../../img/social-icons/dribbble.png" alt="link_dribbble" />
                        </div>
                    </div>

                    <div className="catalog">
                        <h4>CATALOG</h4>
                        <label>Necklaces</label>
                        <label>hoodies</label>
                        <label>Jewelry Box</label>
                        <label>t-shirt</label>
                        <label>jacket</label>
                    </div>

                    <div className="about-us">
                        <h4>ABOUT US</h4>
                        <label>Our Producers</label>
                        <label>Sitemap</label>
                        <label>FAQ</label>
                        <label>About Us</label>
                        <label>Terms & Conditions</label>
                    </div>

                    <div className="customer-services">
                        <h4>CUSTOMER SERVICES</h4>
                        <label>Contact Us</label>
                        <label>Track Your Order</label>
                        <label>Product Care & Repair</label>
                        <label>Book an Appointment</label>
                        <label>Shipping & Returns</label>
                    </div>

                </div>
            </section>

            <section className="more">
                <div>
                    <label>© 2022 Coral , Inc.</label>
                    <img src="../../../img/icons_payment 1.png" alt="icons_payment" />
                    <div>
                        <label>Scroll to top</label>
                        <img src="../../../img/Arrow_top.png" alt="arrow_top" />
                    </div>
                </div>
            </section>
        </footer>
    )
}
