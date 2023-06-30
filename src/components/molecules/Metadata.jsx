import Head from 'next/head'

function Metadata ({metadata}) {
    return (
        <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Front-end, Back-end, ui design, JavaScript, ReactJS, AWS, Cloud Computing, SEO, Marketing" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta name="application-name" content={"Darlley Brito - " + metadata.title} />
        <meta name="apple-mobile-web-app-title" content={metadata.description} />
        <meta http-equiv="content-language" content="pt-br" />
        <meta name="author" content="Darlley Brasil de Brito Furtado" />
        <meta name="copyright" content="Darlley Brasil de Brito Furtado" />
        <meta name="creator" content="Darlley Brito Dev" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.darlleydev.com.br/" />
        <meta property="og:title" content="Darlley Brito - Portfólio" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content="Darlley Brito - Portfólio" />
        <meta property="og:image" itemprop="image" content={metadata.image} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Darlley Brasil de Brito Furtado" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:secure_url" content="https://avatars.githubusercontent.com/u/37590954?v=4" />

        <meta name="twitter:creator" content="@darlleybbf" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Darlley Brito - Portfólio" />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:site" content="https://www.darlleydev.com.br/" />
        <meta name="twitter:image" content={metadata.image} />

        <link rel="icon" type="image/x-icon" href="/assets/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" href="assets/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="assets/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />

        <meta name="theme-color" content="#61dafb" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      </Head>
    )
}

export default Metadata