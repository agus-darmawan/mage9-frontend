import Head from "next/head";

const defaultMeta = {
  title: "Multimedia and Game Event 9",
  siteName: "Multimedia and Game Event 9",
  description:
    "MAGE (Multimedia and Game Event) adalah Wadah bagi generasi muda dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games, Robotics), dan Workshop.",
  url: "https://mage-its.id",
  type: "website",
  robots: "follow, index",
  image: "/og.png",
};

export default function Seo(props:any) {
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots"content={meta.robots}/>
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <link 
        rel="apple-touch-icon" 
        sizes="57x57" 
        href="/favicon/apple-icon-57x57.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="60x60" 
        href="/favicon/apple-icon-60x60.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="72x72" 
        href="/favicon/apple-icon-72x72.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="76x76" 
        href="/favicon/apple-icon-76x76.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="114x114" 
        href="/favicon/apple-icon-114x114.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="120x120" 
        href="/favicon/apple-icon-120x120.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="144x144" 
        href="/favicon/apple-icon-144x144.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="152x152" 
        href="/favicon/apple-icon-152x152.png"
      />
      <link 
        rel="apple-touch-icon" 
        sizes="180x180" 
        href="/favicon/apple-icon-180x180.png"
      />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="192x192"  
        href="/favicon/android-icon-192x192.png"
      />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="32x32" 
        href="/favicon/favicon-32x32.png"
      />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="96x96" 
        href="/favicon/favicon-96x96.png"
      />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="16x16" 
        href="/favicon/favicon-16x16.png"
      />
      <link 
        rel="manifest" 
        href="/favicon/manifest.json"
      />
      <meta 
        name="msapplication-TileColor" 
        content="#ffffff"
      />
      <meta 
        name="msapplication-TileImage" 
        content="/favicon/ms-icon-144x144.png"
      />
      <meta 
        name="theme-color" 
        content="#ffffff"
      />
    </Head>
  );
}