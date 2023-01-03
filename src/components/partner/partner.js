import "./partner.css";
import Section from "../../common/section";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import club from "../../img/svg/club.jpeg";
import curtis from "../../img/svg/curtis.png";
import prisms from "../../img/svg/prisms.png";





const Partner = () => {
    return (
        <div className="partner">
            <Section
                className="o-contentBlocks__container o-contentBlocks__container--noBorder"
                title="Voices From Partners"
                description="The Demeng Foundation is very proud of what we have accomplished with our partners around the world. Their voices inspire our organization work harder for our mission."
            />
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>

                    <div className="myCarousel">
                        <img src={prisms} alt="prisms" />
                        <p>
                            Thank you for your support and endorsement of PRISMS. Your generous contribution has made the operation of our school possible, and leads us to look forward to a prosperous future! Donors like you offer hope and encouragement to our school community. On behalf of PRISMS, we would like to express our heartfelt gratitude!
                        </p>

                    </div>

                </div>

                <div>
                    <div className="myCarousel">
                        <img src={curtis} alt="curtis" />

                        <p>
                            On behalf of all of us at Curtis, I want to express my gratitude for generous pledge from the Demeng Charity Trust to establish two endowed student fellowships at Curtis.

                        </p>
                    </div>
                </div>

                <div>
                    <div className="myCarousel">
                        <img src={club} alt="launchX club" />

                        <p>
                            Thank you for your donation to LaunchX Club, you are the reason that we can support students from eight countries in Asia Pacific region to learn entrepreneurship and build startups along with different themes each year!
                        </p>
                    </div>
                </div>

                <div>
                    <div className="myCarousel">
                        <h3>Student H.</h3>
                        <p>
                            I am currently in my fourth year at Curtis (time flies!) and I start college in the fall of 2023.

                            I feel so thankful to be studying at such a prestigious school along with so many musicians and friends I look up to. I want to sincerely thank you for your support and involvement with Curtis.

                        </p>
                    </div>
                </div>

                <div>
                    <div className="myCarousel">
                        <h3>Student T.</h3>
                        <p>
                            I’d like to take this opportunity to express my sincere thanks to you for the timely donation you rendered me for my best way studying at this great school.

                            Over the years, with your generous support, I have been studying for a bachelor’s degree on the cello. I am honored to have been elected as the assistant principal cellist of Curtis Symphony Orchestra. All these are inseparable from your selfless assistance.

                            Again please accept my heartfelt gratitude and all good wishes for you and your family!


                        </p>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}

export default Partner;