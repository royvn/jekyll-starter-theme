import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFound extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="404: Not found" />
				<h1>Pagina niet gevonden</h1>
				<p>De URL bestaat niet... Niet sip zijn, wil je terug naar <Link to="/">Home</Link>?</p>
			</Layout>
		);
	}
}

export default NotFound;