import './styles.css'


export const Footer = () => {

    return (
        <footer>

            <section className="data">
                <div>

                    <div className='social'>
                        <img src="../assets/logo.png" alt="coral_logo" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div>
                            <img src="../assets/social-icons/facebook.png" alt="link_facebook" />
                            <img src="../assets/social-icons/twitter.png" alt="link_twitter" />
                            <img src="../assets/social-icons/linkedin.png" alt="link_linkedin" />
                            <img src="../assets/social-icons/dribbble.png" alt="link_dribbble" />
                        </div>
                    </div>

                    <div className="catalog">
                        <h4>CATALOG</h4>
                        <ul>
                            <li>Necklaces</li>
                            <li>hoodies</li>
                            <li>Jewelry Box</li>
                            <li>t-shirt</li>
                            <li>jacket</li>
                        </ul>
                    </div>

                    <div className="about-us">
                        <h4>ABOUT US</h4>
                        <ul>
                            <li>Our Producers</li>
                            <li>Sitemap</li>
                            <li>FAQ</li>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className="customer-services">
                        <h4>CUSTOMER SERVICES</h4>
                        <ul>
                            <li>Contact Us</li>
                            <li>Track Your Order</li>
                            <li>Product Care & Repair</li>
                            <li>Book an Appointment</li>
                            <li>Shipping & Returns</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="disclaimer">
                <div>
                    <label>© 2022 Coral , Inc.</label>
                    <img src="../assets/icons_payment 1.png" alt="icons_payment" />
                    <a className='top' href='#header'>
                        <span>Scroll to top</span>
                        <img src="../assets/Arrow_top.png" alt="arrow_top" />
                    </a>
                </div>
            </section>
        </footer>
    )
}
