import { Helmet } from "react-helmet-async";

/**
 * SEO component to place on every page of the website.
 * 
 * @param {*} param0 
 * @returns 
 */
const SEOBlock = ({data}) => {
    return(
        <Helmet>
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
            <link rel="canonical" href={data.canonHREF} />
        </Helmet>
);
}

export default SEOBlock;