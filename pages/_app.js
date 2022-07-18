// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react"
import { Provider } from "react-redux"

//store
import { store } from "../store/store"

//component
import Layout from "../Components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Layout>
    </Provider>
  )
}

export default MyApp
