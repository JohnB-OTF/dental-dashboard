// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react"
import store from "../store/store"
import { Provider } from "react-redux"
//component
import Layout from "../Components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextUIProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
    </Layout>
  )
}

export default MyApp
