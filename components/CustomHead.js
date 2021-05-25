import Head from "next/head";

function CustomHead({title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default CustomHead
