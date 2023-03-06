import "./how.css";
import Section from "../../common/section";
import { useEffect, useState, useRef } from 'react';

const Circle = (props) => {
    return (
        <div
            style={{ transform: `rotate(${props.s}deg) translate(${props.a}px) rotate(${-props.s}deg)`, width: `${props.n}px`, height: `${props.n}px`, marginLeft: `-${props.n / 2}px`, marginTop: `-${props.n / 2}px` }}>
        </div>
    )
}


const How = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [activeValue, setActiveValue] = useState([]);
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width);
        });
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    /*useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);*/

    const handleMouseOver = (value) => {
        setIsHovering(true);
        switch (value) {
            case "0":
                setActiveValue(["0", "1"]);
                break;
            case "1":
                setActiveValue(["0", "1", "2"]);
                break;
            case "2":
                setActiveValue(["1", "2", "3", "4"]);
                break;
            case "3":
                setActiveValue(["2", "3"]);
                break;
            case "4":
                setActiveValue(["2", "4", "5"]);
                break;
            case "5":
                setActiveValue(["4", "5"]);
                break;
            default:
                break;
        }
    };

    const handleMouseOut = () => {

        setIsHovering(false);
        setActiveValue([]);
    };

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    return (
        <div className="how">

            <section
                id="scholarship"
                className={isHovering ? 'm-orgInfoGraph is-hovered' : 'm-orgInfoGraph'}
                data-behavior="orgInfoGraph">
                <h2 className="m-orgInfoGraph__title">Demeng Foundation Scholarship</h2>

                <div className="m-orgInfoGraph__wrapper">

                    <div className="m-orgInfoGraph__connections">
                        <div className="m-orgInfoGraph__connection m-orgInfoGraph__connection--foundations"
                            data-connection-id="foundationsField foundationsBoard">
                            <div className="m-orgInfoGraph__arrow"></div>
                        </div>

                        <div className="m-orgInfoGraph__connection m-orgInfoGraph__connection--foundation-global"
                            data-connection-id="foundationsBoard global">
                            <div className="m-orgInfoGraph__arrow m-orgInfoGraph__arrow--horizontal"></div>
                            <div className="m-orgInfoGraph__arrow m-orgInfoGraph__arrow--vertical m-orgInfoGraph__arrow--bottom">
                            </div>
                        </div>

                        <div className="m-orgInfoGraph__connection m-orgInfoGraph__connection--global-council"
                            data-connection-id="global council">
                            <div className="m-orgInfoGraph__arrow"></div>
                        </div>

                        <div className="m-orgInfoGraph__connection m-orgInfoGraph__connection--programs-global"
                            data-connection-id="global programsBoard">
                            <div className="m-orgInfoGraph__arrow m-orgInfoGraph__arrow--horizontal"></div>
                            <div className="m-orgInfoGraph__arrow m-orgInfoGraph__arrow--vertical m-orgInfoGraph__arrow--top">
                            </div>
                        </div>

                        <div className="m-orgInfoGraph__connection m-orgInfoGraph__connection--programs"
                            data-connection-id="programsField programsBoard">
                            <div className="m-orgInfoGraph__arrow"></div>
                        </div>
                    </div>

                    <div className="m-orgInfoGraph__fields">
                        <div
                            className={activeValue.includes("0") ? 'm-orgInfoGraph__foundations m-orgInfoGraph__hoverElement is-active' : 'm-orgInfoGraph__foundations m-orgInfoGraph__hoverElement'}
                            onMouseOver={() => handleMouseOver("0")}
                            onMouseOut={handleMouseOut}
                            value="0"
                            data-infograph-id="foundationsField" data-infograph-connections="[&quot;foundationsBoard&quot;]">

                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"><span
                                className="m-orgInfoGraph__label m-orgInfoGraph__label--dark">Applicants</span></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>
                            <div className="m-orgInfoGraph__field"></div>

                        </div>

                        <div data-infograph-id="programsField"
                            className={activeValue.includes("5") ? 'm-orgInfoGraph__programs m-orgInfoGraph__hoverElement is-active' : 'm-orgInfoGraph__programs m-orgInfoGraph__hoverElement'}
                            onMouseOver={() => handleMouseOver("5")}
                            onMouseOut={handleMouseOut}
                            value="5"
                            data-infograph-connections="[&quot;programsBoard&quot;]">

                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"><span
                                className="m-orgInfoGraph__label">Scholarship Awarded</span></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>
                            <div className="m-orgInfoGraph__field m-orgInfoGraph__field--outline"></div>

                        </div>

                    </div>

                    <div
                        data-infograph-id="foundationsBoard"
                        data-infograph-connections="[&quot;foundationsField&quot;, &quot;global&quot;]"
                        className={activeValue.includes("0") ? 'm-orgInfoGraph__boards m-orgInfoGraph__boards--foundations m-orgInfoGraph__hoverElement is-active' : 'm-orgInfoGraph__boards m-orgInfoGraph__boards--foundations m-orgInfoGraph__hoverElement'}
                        onMouseOver={() => handleMouseOver("0")}
                        onMouseOut={handleMouseOut}
                        value="1">

                        <span className="m-orgInfoGraph__label">Initial Application and Screening</span>
                        <div className="m-orgInfoGraph__boards__wrapper" data-infograph-board-circles="24">
                            {numbers.map(e => {
                                return (
                                    <Circle
                                        key={e}
                                        t={width}
                                        n={Math.round(0.1 * width)}
                                        i={24}
                                        o={15}
                                        s={e * 15}
                                        a={(width - Math.round(0.1 * width)) / 2}
                                    />
                                )
                            })}
                        </div>

                    </div>

                    <div
                        data-infograph-id="programsBoard"
                        data-infograph-connections="[&quot;programsField&quot;, &quot;global&quot;]"
                        className={activeValue.includes("4") ? 'm-orgInfoGraph__boards m-orgInfoGraph__boards--programs m-orgInfoGraph__hoverElement is-active' : 'm-orgInfoGraph__boards m-orgInfoGraph__boards--programs m-orgInfoGraph__hoverElement'}
                        onMouseOver={() => handleMouseOver("4")}
                        onMouseOut={handleMouseOut}
                        value="4">

                        <span className="m-orgInfoGraph__label">Foundation Board</span>
                        <div className="m-orgInfoGraph__boards__wrapper" data-infograph-board-circles="24" ref={ref}>
                            {numbers.map(e => {
                                return (
                                    <Circle
                                        key={e}
                                        t={width}
                                        n={Math.round(0.1 * width)}
                                        i={24}
                                        o={15}
                                        s={e * 15}
                                        a={(width - Math.round(0.1 * width)) / 2}
                                    />
                                )
                            })}
                        </div>

                    </div>

                    <div
                        data-infograph-id="council" data-infograph-connections="[&quot;global&quot;]"
                        className={activeValue.includes("3") ? 'm-orgInfoGraph__boards m-orgInfoGraph__boards--council m-orgInfoGraph__hoverElement is-active' : 'm-orgInfoGraph__boards m-orgInfoGraph__boards--council m-orgInfoGraph__hoverElement'}
                        onMouseOver={() => handleMouseOver("3")}
                        onMouseOut={handleMouseOut}
                        value="3">

                        <span className="m-orgInfoGraph__label">Transcripts, Resume, Awards, and Essay</span>
                        <div className="m-orgInfoGraph__boards__wrapper" data-infograph-board-circles="24">
                            {numbers.map(e => {
                                return (
                                    <Circle
                                        key={e}
                                        t={width}
                                        n={Math.round(0.1 * width)}
                                        i={24}
                                        o={15}
                                        s={e * 15}
                                        a={(width - Math.round(0.1 * width)) / 2}
                                    />
                                )
                            })}
                        </div>

                    </div>

                    <div
                        data-infograph-board-global="" data-infograph-id="global"
                        data-infograph-connections="[&quot;foundationsBoard&quot;, &quot;programsBoard&quot;, &quot;council&quot;]"
                        style={{ boxShadow: `rgb(252, 161, 49) 0px 0px 0px ${Math.round(width * 0.1)}px inset` }}
                        className={activeValue.includes("2") ? 'm-orgInfoGraph__boards m-orgInfoGraph__boards--global m-orgInfoGraph__hoverElement is-active' : 'm-orgInfoGraph__boards m-orgInfoGraph__boards--global m-orgInfoGraph__hoverElement'}
                        onMouseOver={() => handleMouseOver("2")}
                        onMouseOut={handleMouseOut}
                        value="2">

                        <span className="m-orgInfoGraph__label">Interviews</span>

                    </div>

                </div>
                <Section
                    className="section-black-bg"
                    title="Eligibility"
                    description="In order to be eligible for a Demeng Foundation scholarship, one must be a current high school or home-school senior planning to graduate from a school or program during the academic year in which application is made. Additionally, students must meet any one of the the followings: 
                        1. GPA scores 3.9+; 
                        2. Toefl scores 110+, or SAT scores 1500+, or ACT scors 34+;
                        3. Admitted to the International Olympic Competition training camp such as IMO, IPHO, ICHO, or finalist of ISEF, or qualifying AIME of AMC, or finalist of S. -T Yau High School Science Award, or medal winner of USACO;
                        4. Writting award winner of New York Times, John Locke Essay Competition, Scholastic Art and Writing Awards, or Marshall Society;
                        5. Admission offer from top summer colleges such as ROSS, RSI, SSP, SSHI."
                />

            </section>

            <Section
                className="o-contentBlocks__container o-contentBlocks__container--noBorder"
                title="How We Work"
                description="Every year, the Demeng Foundations give a great amount of scholarships to students who promote our values—through a unique network that is guided by local voices and global expertise."
            />
            <div className="row">
                <div className="a-factSlider a-factSlider--slider">
                    <div className="a-factSlider__slider">
                        <div className="a-factSlider__info">
                            <span className="a-factSlider__title">$2.1M</span>
                            <span className="a-factSlider__desc">Total Funding</span>
                        </div>

                    </div>
                </div>
                <div className="a-factSlider a-factSlider--slider">
                    <div className="a-factSlider__slider">
                        <div className="a-factSlider__info">
                            <span className="a-factSlider__title">$1.4M</span>
                            <span className="a-factSlider__desc">Total expenditures</span>
                        </div>

                    </div>
                </div>
                <div className="a-factSlider a-factSlider--slider">
                    <div className="a-factSlider__slider">
                        <div className="a-factSlider__info">
                            <span className="a-factSlider__title">$500K</span>
                            <span className="a-factSlider__desc">Total Scholarships Awarded</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default How;

