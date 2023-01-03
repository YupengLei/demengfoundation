import "./subheader.css";
import { SvgIcon } from "../../common/SvgIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../../img/svg/demeng.svg";

import { useState } from "react";
import { Col, Drawer } from "antd";

import {
    Menu,
    CustomNavLinkSmall,
    Label,
    Outline,
    Span,
} from "./styles";




const SubHeader = () => {

    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
        setVisibility(false);
    };

    const MenuItem = () => {

        return (
            <>
                <CustomNavLinkSmall onClick={() => scrollTo("how")}>
                    <Span>HOW WE WORK</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo("what")}>
                    <Span>WHAT WE DO</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo("who")}>
                    <Span>WHO WE ARE</Span>
                </CustomNavLinkSmall>

            </>
        );
    };

    

    /*const searchStyleClose = {
        visibility: "hidden",
        opacity: "0"
    }

    const searchStyleOpen = {
        visibility: "visible",
        opacity: "1",
    }*/


    return (
        <div id="a17" className="pageClass--home pageClass--dark">
            <header className="g-header has-transition" data-behavior="stickyNav">
                <div className="g-megaNav__overlay" data-meganav-toggle=""></div>
                <div className="g-header__wrapper">

                    <div className="g-header__container">


                        <a href="https://www.demengfoundation.org/" className="g-header__logo" aria-label="Back to the homepage">
                            <span className="visually-hidden">Demeng Foundation</span>
                            <SvgIcon width="100%" height="100%" src={logo} />
                        </a>



                        <nav className="g-header__nav" style={{display: visible ? "none" : "block"}} >

                            <div className="g-header__nav__link "
                                data-mainnav-link="" data-nav-item="how-we-work" onClick={() => scrollTo("how")}>How We Work</div>
                            <div className="g-header__nav__link "
                                data-mainnav-link="" data-nav-item="what-we-do" onClick={() => scrollTo("what")}>What We Do</div>
                            <div className="g-header__nav__link "
                                data-mainnav-link="" data-nav-item="who-we-are" onClick={() => scrollTo("who")}>Who We Are</div>
                            <button className="g-header__nav__link g-header__nav__link--btn g-header__nav__link--search"
                                data-search-toggle="" aria-label="Open Search Bar" >
                                <span className="visually-hidden">search</span>
                                <figure className="g-header__navIcon" aria-hidden="true"><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></figure>

                            </button>
                            <button className="g-header__nav__link g-header__nav__link--btn g-header__nav__link--megaNavToggle"
                                data-meganav-toggle="" aria-label="Open Main Navigation" onClick={showDrawer}>
                                <span className="visually-hidden">open navigation</span>
                                <figure className="g-header__navIcon" aria-hidden="true"><i><FontAwesomeIcon icon={faBars} /></i></figure>
                            </button>


                        </nav>

                       
                        <Drawer closable={false} open={visible} onClose={onClose} style={{zIndex: "10000"}}>
                                
                            <Col style={{ marginBottom: "2.5rem" }}>
                                
                                <Label onClick={onClose} >
                                    <Col span={12}  >
                                        <Menu >MENU</Menu>
                                    </Col>
                                    <Col span={12}>
                                        <Outline />
                                    </Col>
                                </Label>
                            </Col>
                            <MenuItem />
                        </Drawer>

                    </div>
                </div>





            </header>
        </div>
    )
}

export default SubHeader;


/*
onClick={props.showSearch}
style={!props.visibleSearch ? searchStyleClose : searchStyleOpen}



 <div className="g-header__search" >
                            <div className="g-header__search__container">
                                <form action="" >
                                    <input className="a-input g-header__search__input" placeholder="Search" aria-label="Search input" name="q"
                                        data-search-input="" autoComplete="off" id="search" />
                                    <button className="g-header__search__submit" aria-label="Submit search" disabled={true}>
                                        <span className="visually-hidden" >submit</span>
                                        <figure className="g-header__navIcon" aria-hidden="true" ><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></figure>

                                    </button>
                                    <button className="g-header__search__close" type="button" data-meganav-toggle=""
                                        aria-label="Close search and navigation" >
                                        <span className="visually-hidden">close navigation</span>
                                        <figure className="g-header__navIcon" aria-hidden="true"><i><FontAwesomeIcon icon={faXmark} /></i></figure>
                                    </button>
                                </form>


                            </div>
                        </div>
*/