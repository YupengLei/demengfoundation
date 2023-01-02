import "./intro.css";

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
                                backgroundImage: `url(${process.env.PUBLIC_URL + "/img/svg/seats.jpg"})`,
                                title: "A family fleeing the Donetsk region waits for a train to Lviv in Slavyansk, Ukraine, on May 4, 2022. Photo credit: © Iva Zimova/Panos/Redux"
                            }}>
                            <picture>
                                <source
                                    srcSet={process.env.PUBLIC_URL + "/img/svg/seats2.jpg"}
                                    media="(max-width: 989px)" />
                                <img src={process.env.PUBLIC_URL + "/img/svg/seats.jpg"} alt="A family waiting on a train platform" />
                            </picture>
                        </div>

                    </section>
                </div>
            </div>
        </main>
    )
}

export default Intro;