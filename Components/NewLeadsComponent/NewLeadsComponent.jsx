//styles
import styles from "./newLeads.module.scss"

//libraries
import { useEffect, useState } from "react"
import { Loading } from "@nextui-org/react"

//services
import { useGetLeadsQuery } from "../../services/dentalApi"

//components
import CardInfo from "../CardInfo/CardInfo"

const NewLeadsComponent = () => {
  const [pathname, setPathname] = useState(undefined)
  const [dataLeads, setDataLeads] = useState()
  const [connects, setConnects] = useState()
  const [connectsPorcent, setConnectsPorcent] = useState(0)
  const [getLeads, setGetLeads] = useState()
  const [getConnects, setGetConnects] = useState()
  const [getConnectedPorcent, setGetConnectedPorcent] = useState()

  //get pathname
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname)
    }
  }, [pathname])

  //leads end-point
  const { data, isError, isLoading, isSuccess } = useGetLeadsQuery(
    pathname !== undefined && pathname.split("/")[2]
  )

  //filter connects elements
  const filterConnects = (dataLeads) => {
    const elements = dataLeads.data.filter((item) => {
      return item.replied === 1
    })
    setConnects(elements.length)
  }

  //porcent connects
  const porcentConnects = (connects, dataLeads) => {
    if (connects !== undefined && dataLeads !== undefined) {
      const porcent = (connects / dataLeads.data.length) * 100
      setConnectsPorcent(Number(porcent.toFixed()))
    }
  }

  //get leads elements
  useEffect(() => {
    if (data === undefined) return
    if (isSuccess) {
      setDataLeads(data)
    }
  }, [data, isSuccess])

  //get filter - porcent
  useEffect(() => {
    if (dataLeads === undefined && connects === undefined) return
    filterConnects(dataLeads)
    porcentConnects(connects, dataLeads)
  }, [dataLeads, connects])

  //inyect data to card info
  useEffect(() => {
    if (dataLeads === undefined) return
    setGetLeads({
      title: "Leads",
      value: dataLeads.data.length,
      percent: 120,
      isPorcent: false,
    })
    setGetConnects({
      title: "Connects",
      value: connects,
      percent: -45,
      isPorcent: false,
    })
    setGetConnectedPorcent({
      title: "Connected %",
      value: connectsPorcent,
      percent: -45,
      isPorcent: true,
    })
  }, [dataLeads, connects, connectsPorcent])

  return (
    <>
      {isLoading ? (
        <div className={styles.main__loader}>
          <Loading type="points" size="xl" color="white" />
        </div>
      ) : (
        <>
          <section className={styles.main__section}>
            <div className={styles.main__section_titles}>
              <h2>New Leads</h2>
            </div>
            <div className={styles.main__section_cards}>
              {getLeads !== undefined ? (
                <CardInfo data={getLeads} />
              ) : (
                <div className={styles.main__section_cards_loader}>
                  <Loading />
                </div>
              )}
              {getConnects !== undefined ? (
                <CardInfo data={getConnects} />
              ) : (
                <div className={styles.main__section_cards_loader}>
                  <Loading />
                </div>
              )}
              {getConnectedPorcent !== undefined ? (
                <CardInfo data={getConnectedPorcent} />
              ) : (
                <div className={styles.main__section_cards_loader}>
                  <Loading />
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default NewLeadsComponent
