import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFound extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="404, pagina niet gevonden" />
				<h1>Pagina niet gevonden</h1>
				<p>
					Probeer het nog een keer. Of keer terug naar <Link to="/">home</Link>.
				</p>
			</Layout>
		);
	}
}

export default NotFound;