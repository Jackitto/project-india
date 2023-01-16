import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { DefaultLayout } from '@/layouts/Default'

function Desktop() {
  return (
    <div className="max-sm:hidden">
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
    </div>
  )
}

function Mobile() {
  return (
    <div className="sm:hidden">
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Snap - Make Remote Work</title>
        <meta
          name="description"
          content="Get your team in sync, no matter your location"
        />
      </Head>
      <Desktop />
      <Mobile />
    </>
  )
}
