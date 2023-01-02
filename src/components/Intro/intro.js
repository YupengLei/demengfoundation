import "./intro.css";
import seats from "../../img/svg/seats.jpg";
import seats2 from "../../img/svg/seats2.jpg";

const Intro = () => {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
        //setVisibility(false);
    };
    return (
        <main id="main">
            <div data-pjax-wrapper="pjax" aria-live="polite">
                <div data-pjax-container="pjax" data-namespace="homepage" data-active-nav="home">
                    <section className="m-hero">
                        <div className="m-hero__body">
                            <h1 className="m-hero__title">The Demeng Foundation works to build vibrant and inclusive future for promising students.</h1>
                            <div className="a-link--readmore" onClick={() => scrollTo("how")}><i>Learn more about
                                how we work</i></div>

                        </div>

                        <div className="m-hero__image"
                            style={{
                                backgroundImage: `url(${seats})`,
                                
                            }}>
                            <picture>
                                <source
                                    srcSet={seats2}
                                    media="(max-width: 989px)" />
                                <img src={seats} alt="seats" />
                            </picture>
                        </div>

                    </section>
                </div>
            </div>
        </main>
    )
}

export default Intro;