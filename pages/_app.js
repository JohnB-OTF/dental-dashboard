// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react"

//component
import Layout from "../Components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Layout>
  )
}

export default MyApp
