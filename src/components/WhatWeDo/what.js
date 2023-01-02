import "./what.css";
import Section from "../../common/section";
import Where from "./where";
import img2018 from "../../img/svg/2018.jpg";
import img2019 from "../../img/svg/2019.jpg";
import img2020 from "../../img/svg/2020.jpg";
import img2021 from "../../img/svg/2021.jpg";
import img2022 from "../../img/svg/2022.jpg";



const What = () => {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
        //setVisibility(false);
    };

    return (
        <div className="how">
            <Section
                className="o-contentBlocks__container o-contentBlocks__container--noBorder"
                title="What We Do"
                description="The people of Demeng Foundation are active in more than decades around the world. Our national and regional programs give a great amount of scholarships every year towards building inclusive and vibrant leaderships. Our vision is a call for change—change in the way we educate promising students, and in the ways we work together—changes now more pressing than ever amid the challenges of the COVID-19 pandemic."
            />
            <div className="o-contentBlocks__container" id="light_border">
                <div className="o-contentBlocks__sidebar">
                    <h2 className="o-contentLayout__sidebarTitle" id="light_weight">Activities</h2>
                </div>

                <div className="o-contentBlocks__body ">
                    <div className="m-textBlock  ">

                        <p>
                            Qian Meng, the founder of the Demeng Foundation, began her philanthropic work in
                            2000s, funding scholarships for highschool and university students in China to study abroad. Today, her Foundation funding groups and projects have more and more
                            impact around the world every year.&nbsp;
                        </p>

                    </div>
                </div>

                <div className="o-contentBlocks__body ">
                    <section className="m-timelineShowcase  m-timelineShowcase--interactive ">
                        <div className="m-timelineShowcase__holder">

                            <div
                                className="a-timelinePreview">
                                <div className="a-timelinePreview__body">
                                    <h3 className="a-timelinePreview__title">
                                        <span>Starting to build the Demeng foundation</span>
                                    </h3>
                                </div>
                                <span className="a-timelinePreview__date">2018</span>
                                <figure className="a-timelinePreview__image">
                                    <img src={img2018} alt="2018" />                
                                </figure>
                            </div>
                            <div
                                className="a-timelinePreview">
                                <div className="a-timelinePreview__body">
                                    <h3 className="a-timelinePreview__title">
                                        <span>Awarding scholarships to the promising students</span>
                                    </h3>
                                </div>
                                <span className="a-timelinePreview__date">2019</span>
                                <figure className="a-timelinePreview__image">
                                    <img
                                        src={img2019}
                                        alt="2019"
                                    />
                                </figure>
                            </div>
                            <div
                                className="a-timelinePreview">
                                <div className="a-timelinePreview__body">
                                    <h3 className="a-timelinePreview__title">
                                        <span>Funding the families who suffers the pandemic</span>
                                    </h3>
                                </div>
                                <span className="a-timelinePreview__date">2020</span>
                                <figure className="a-timelinePreview__image">
                                    <img src={img2020}
                                    alt="2020"
                                    />
                                </figure>
                            </div>
                            <div
                                className="a-timelinePreview">
                                <div className="a-timelinePreview__body">
                                    <h3 className="a-timelinePreview__title">
                                        <span>Teaming up with national and global NPOs</span>
                                    </h3>
                                </div>
                                <span className="a-timelinePreview__date">2021</span>
                                <figure className="a-timelinePreview__image">
                                    <img src={img2021}
                                    alt="2021"
                                    />
                                </figure>
                            </div>
                            <div
                                className="a-timelinePreview">
                                <div className="a-timelinePreview__body">
                                    <h3 className="a-timelinePreview__title">
                                        <span>Recruiting talents to expand our organization</span>
                                    </h3>
                                </div>
                                <span className="a-timelinePreview__date">2022</span>
                                <figure className="a-timelinePreview__image">
                                    <img
                                        src={img2022}
                                        alt="2022"
                                    />
                                </figure>
                            </div>

                        </div>

                        <div
                            className="a-link--readmore" onClick={() => scrollTo("subscribe")}><i>Let us hear your voice</i></div>
                    </section>
                </div>
            </div>
            <Where />
        </div>
    )
}

export default What;