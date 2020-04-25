import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ToolkitHeadline from '../components/ToolkitHeadline';

class NotFound extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="404, pagina niet gevonden" />
				<div className="page-content content">
					<ToolkitHeadline title="Pagina niet gevonden" subtitle="Probeer het nog een keer." />
				</div>
			</Layout>
		);
	}
}

export default NotFound;