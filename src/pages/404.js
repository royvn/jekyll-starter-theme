import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFound extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="404, pagina niet gevonden" />
				<div className="page-content content">
					<p>
						Pagina niet gevonden. Probeer het nog een keer.
					</p>
				</div>
			</Layout>
		);
	}
}

export default NotFound;