import Head from 'next/head'
import LogoHeading from "../templates/LogoHeading";
import Heading from "../templates/Heading";
import Usp from "../templates/Usp";
import {createClient} from 'contentful';
import Footer from "../atom/Footer";


export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCES_KEY,
    })

    const res = await client.getEntries({
        content_type: 'typemaster'
    })
    return {
        props: {
            usps: res.items
        }
    }
}

export default function About(props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;900&display=swap"
                      rel="stylesheet"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/favicon-32x32.png"/>
                <title>Frontend Mentor | Typemaster pre-launch landing page</title>
            </Head>
            <LogoHeading/>
            <Heading/>
            <Usp usps={props.usps}/>
            <Footer/>
        </>
    )
};

