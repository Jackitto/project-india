import { Header } from '@/components/Header'

export function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}