import Section from "../../common/section";
import "../HowWeWork/how.css";
import "./who.css";
import meng0 from "../../img/svg/meng0.jpg";
import meng1 from "../../img/svg/meng1.jpg";



const Who = () => {
    return (
        <div>
            <Section
                className="o-contentBlocks__container o-contentBlocks__container--noBorder"
                title="Who We Are"
                description="The Demeng Foundation, founded by Qian Meng, is one of the fast growing non-profit organizations of working for oversea education, global collabration, and promising students. We provide significant amount of scholarships every year through a network of national and regional foundations and offices, funding a vast array of individuals who excels in different areas."
            />


            <div className="o-contentBlocks__full">
                <div data-behavior="staff" data-base-url="/who-we-are" className="leadership">
                    <h3 className="o-contentLayout__sidebarTitle o-contentLayout__sidebarTitle--keyline">Leadership</h3>

                    <section className="m-cardsList  m-cardsList--mainLeadership ">
                        <ul className="m-cardsList__list no-list" data-load-more-list="">

                            <li className="m-cardsList__item">
                                <div className="a-profileCard"
                                    aria-label="Qian Meng">

                                    <div className="a-profileCard__body">
                                        


                                        <p className="a-profileCard__description">
                                        </p>
                                        <p>Ms.Qian Meng launched her philanthropic work in China for decades. Since then she has
                                            given financial supports to fund the Demeng Foundation, which helps the promising students around the world.</p>
                                            <p className="a-profileCard__description">Some of her amazing works:</p> 
                                            <p className="a-profileCard__description">
                                        Sponsored the first MIT LaunchX Asian Competition in 2018;</p>
                                        <p className="a-profileCard__description">Sponsored the MIT LaunchX Global Competition in 2019 (Thailand);</p>
                                        
                                        <p className="a-profileCard__description">Sponsored 2022 S.-T. Yau High School Science Award (North America);</p>
                                        <p className="a-profileCard__description">Donated to MIT, Princeton International School of Mathematics and Science, Tsinghua University, Peking University, Guangdong University of Foreign Studies, Guangdong Jiaying University and others.

                                        </p>
                                    </div>
                                    <figure className="a-profileCard__image">
                                        <div className="p-title">
                                        <h3>QIAN MENG</h3>
                                        <span className="a-profileCard__subtitle">Founder</span>
                                        </div>
                                        <img
                                            src={meng0}
                                            alt="George Soros sitting at a desk"
                                            title=""
                                        />
                                    </figure>

                                </div>
                            </li>
                            <div className="solid-line"></div>
                            <li className="m-cardsList__item">
                                <div className="a-profileCard"
                                    aria-label="Qian Meng">

                                    <div className="a-profileCard__body">
                                        


                                        
                                        <p>Sally devoted herself to many programs of the Demeng foundation with great passion and leadship. </p>
                                            <p className="a-profileCard__description">Some of her achievements:</p> 
                                            <p className="a-profileCard__description">
                                            Spearheaded and led the creation of <a href="http://www.ypractice.org" target="_blank" rel="noreferrer" style={{fontWeight: "700", color: "var(--darkblue)"}}>YPractice.org</a>, an online music sharing platform for students;
                                        </p>
                                            <p className="a-profileCard__description">
                                            Designed music lesson plans;</p>
                                        <p className="a-profileCard__description">Mentored 9 to 12 year old students to explore their music talents and hone instrument skills;</p>
                                        <p className="a-profileCard__description">Coordinated with students and parents to apply for Demeng scholarships;</p>
                                        <p className="a-profileCard__description">Trained students from the underrepresented community music and instruments;</p>
                                        <p className="a-profileCard__description">Communicated with students and parents regarding the music portfolio; </p>
                                        <p className="a-profileCard__description">Recruited talents in music into the Demeng Foundation.</p>



                                    </div>
                                    <figure className="a-profileCard__image">
                                        <div className="p-title">
                                        <h3>SALLY YIRAN DENG</h3>
                                        <span className="a-profileCard__subtitle"></span>
                                        </div>
                                        <img
                                            src={meng1}
                                            alt="George Soros sitting at a desk"
                                            title=""
                                        />
                                    </figure>

                                </div>
                            </li>

                        </ul>
                    </section>
                </div>
            </div>

        </div>

    )
}

export default Who;


/*

*/