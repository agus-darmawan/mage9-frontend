import Head from 'next/head'
import { useRouter } from 'next/router'

const defaultMeta = {
  title: 'Home',
  siteName: 'MAGE 9 ITS',
  description:
    'MAGE ( Multimedia dan Game Event ) adalah suatu serangkaian acara yang diadakan oleh Departemen Teknik Komputer Fakultas dari FTEIC Institut Teknologi Sepuluh Nopember Surabaya yang meliputi perlombaan-perlombaan serta workshop. MAGE juga adalah media untuk pelajar dan akademisi dalam mengeksplor kreativitas, inovasi, dan kemampuan di berbagai bidang IT.',
  url: 'https://mage-ce.id',
  image: 'https://mage-ce.id/seo/og-image.png',
  type: 'website',
  robots: 'follow, index',
  googlebot: 'follow, index',
}

type SeoProps = {
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

const Seo = (props: SeoProps) => {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mage_its' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Agus Darmawan'
          />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#000000' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-150x150.png'
      />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#000000' />
    </Head>
  )
}

type Favicons = {
  rel: string
  color?: string
  href: string
  sizes?: string
  type?: string
}

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-96x96.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon-precomposed',
    sizes: '192x192',
    href: '/favicon/apple-precomposed.png',
    type: 'image/png',
  },
  {
    rel: 'apple-icon',
    sizes: '192x192',
    href: '/favicon/apple-icon.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '36x36',
    href: '/favicon/android-icon-36x36.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '48x48',
    href: '/favicon/android-icon-48x48.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '72x72',
    href: '/favicon/android-icon-72x72.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '96x96',
    href: '/favicon/android-icon-96x96.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '144x144',
    href: '/favicon/android-icon-144x144.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '16x16',
    href: '/favicon/favicon.ico',
    type: 'image/x-icon',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#000000',
  },
  {
    rel: 'ms-icon',
    sizes: '70x70',
    href: '/favicon/ms-icon-70x70.png',
    type: 'image/png',
  },
  {
    rel: 'ms-icon',
    sizes: '144x144',
    href: '/favicon/ms-icon-144x144.png',
    type: 'image/png',
  },
  {
    rel: 'ms-icon',
    sizes: '150x150',
    href: '/favicon/ms-icon-150x150.png',
    type: 'image/png',
  },
  {
    rel: 'ms-icon',
    sizes: '310x310',
    href: '/favicon/ms-icon-310x310.png',
    type: 'image/png',
  },
  {
    rel: 'shortcut icon',
    href: '/favicon/favicon.ico',
    type: 'image/x-icon',
  },
]

export default Seo
