import "./subscription.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsBy } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsNc } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsNd } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contact from "../../components/ContactForm";







const SubFooter = () => {

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: "smooth",
		});
	};


	return (
		<footer className="g-footer" id="subscribe" >

			<section className="g-footer__highlights g-row">
				<div className="g-footer__highlight">
					<h2>Voices</h2>
					<p>Read the latest from our staff, grantees, and partners about how we’re working around the world to
						build vibrant and inclusive programs for promising students.</p>
				</div>

				<div className="g-footer__highlight">
					<Contact />

				</div>
			</section>

			<section className="g-footer__sitemap site-row">
				<div className="g-footer__sitemap__col">
					<ul className="g-footer__sitemap__list footer-no-list">
						<li><div className="g-footer__sitemap__title" onClick={() => scrollTo("who")}>Who
							We Are</div></li>
						<li><div >Our History</div></li>
						<li><div >Leadership</div></li>
						<li><div >Global Board</div></li>
						<li><div >Financials</div></li>
						<li><div >Policies</div></li>
						<li><div >Programs</div></li>
						<li><div >Offices and
							Foundations</div></li>
					</ul>
				</div>

				<div className="g-footer__sitemap__col">
					<ul className="g-footer__sitemap__list footer-no-list">
						<li><div className="g-footer__sitemap__title" onClick={() => scrollTo("how")}>How
							We Work</div></li>
						<li><div >How We Fund</div></li>
						<li><div >Grants and Fellowships</div></li>
						<li><div >Awarded Grants</div></li>
					</ul>

					<ul className="g-footer__sitemap__list footer-no-list">
						<li><div className="g-footer__sitemap__title" onClick={() => scrollTo("what")}>What
							We Do</div></li>
						<li><div >Where We Work</div></li>
						<li><div >Themes</div></li>
					</ul>
				</div>

				<div className="g-footer__sitemap__col g-footer__sitemap__col--mobileBorder">
					<ul className="g-footer__sitemap__list footer-no-list">
						<li><div >Events</div></li>
						<li><div >Newsroom</div></li>
						<li><div >Publications</div></li>
						<li><div >Employment</div></li>
						<li><div >Contact Us</div></li>
					</ul>
				</div>

				<div className="g-footer__sitemap__col g-footer__sitemap__col--policy">
					<div className="g-footer__ccIcons">
						<FontAwesomeIcon icon={faCreativeCommons} />
						<FontAwesomeIcon icon={faCreativeCommonsBy} />
						<FontAwesomeIcon icon={faCreativeCommonsNc} />
						<FontAwesomeIcon icon={faCreativeCommonsNd} />

					</div>

					<span>
						© 2022 Demeng Foundation, rights reserved.
					</span>
				</div>
			</section>
			<section className="g-footer__legal legal-row">
				<div className="g-footer__social">
					<a href="https://www.facebook.com/demengfoundation" aria-label="Visit our Facebook page">
						<FontAwesomeIcon icon={faFacebook} />

					</a>
					<a href="https://twitter.com/demengfoundation" aria-label="Visit our Twitter page">
						<FontAwesomeIcon icon={faTwitter} />

					</a>
					<a href="https://www.youtube.com/c/demengfoundation" aria-label="Visit our Youtube page">
						<FontAwesomeIcon icon={faYoutube} />

					</a>
					<a href="https://instagram.com/demengfoundation" aria-label="Visit our Instagram page">
						<FontAwesomeIcon icon={faInstagram} />

					</a>
					<a href="https://www.linkedin.com/company/demengfoundation"
						aria-label="Visit our LinkedIn page">
						<FontAwesomeIcon icon={faLinkedin} />

					</a>
				</div>
				<div className="g-footer__legalLinks" data-behavior="cookieNotice">
					<div href="https://www.demengfoundation.org/policies/terms-and-conditions">Terms and Conditions</div>
					<div href="https://www.demengfoundation.org/policies/privacy">Privacy</div>
					<div href="https://www.demengfoundation.org/policies/accessibility">Accessibility</div>
				</div>


			</section>
		</footer>
	)
}

export default SubFooter;