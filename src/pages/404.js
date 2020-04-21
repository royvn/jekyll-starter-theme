import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFound extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="404, pagina niet gevonden" />
				<ToolkitHeadline title="Pagina niet gevonden" subtitle="Probeer het nog een keer." />
			</Layout>
		);
	}
}

export default NotFound;