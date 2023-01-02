import Contact from "../../components/ContactForm";
import "./subscription.css";

const Subscription = () => {

	return (
		<section className="g-newsletterCta  news-row" id="subscribe">
			<div className="g-newsletterCta__col">
				<h2 className="g-newsletterCta__title">Subscribe to updates about Demeng Foundation</h2>
			</div>
			<div className="g-newsletterCta__col">
				<Contact />
			</div>


		</section>
	)
}

export default Subscription;

