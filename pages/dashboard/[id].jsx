import Head from "next/head"
import styles from "./dashBoard.module.scss"

//libraries
import { useEffect, useState, useMemo } from "react"

//componets
import FiltersSection from "../../Components/FiltersSection/FiltersSection"
import TableComponent from "../../Components/TableComponent/TableComponent"
import BookingTimeComponent from "../../Components/BookingTimeComponent/BookingTimeComponent"

const DashBoard = () => {
  const [dateCalendar, setDateCalendar] = useState([])
  const [firstFilter, setFirstFilter] = useState([])
  const [secondFilter, setSecondFilter] = useState([])
  const [thirdFilter, setThirdFilter] = useState([])

  const [queryData, setQueryData] = useState({
    dateRange: [],
    first: [],
    second: [],
    third: [],
  })

  //call API redux service
  // const { data, isError, isLoading, isSuccess } = useGetDataQuery(
  //   "pdWesjqkpBEe7oVL6SGb"
  // )

  // //leads
  // const leads = ({ data, isError, isLoading, isSuccess } = useGetDataQuery(
  //   "leads?location=pdWesjqkpBEe7oVL6SGb"
  // ))

  const sendData = () => {
    queryData.dateRange = dateCalendar
    queryData.first = firstFilter
    queryData.second = secondFilter
    queryData.third = thirdFilter
  }

  useEffect(() => {
    sendData()
  }, [dateCalendar, firstFilter, secondFilter, thirdFilter])

  console.log("queryData", queryData)

  return (
    <>
      <Head>
        <title>DashBoard | Dentalprenr</title>
        <meta name="description" content="DashBoard Dental" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <section className={styles.main__section}>
          <div className={styles.main__section__filters}>
            <FiltersSection
              setCalendar={setDateCalendar}
              setFirst={setFirstFilter}
              setSecond={setSecondFilter}
              setThird={setThirdFilter}
            />
          </div>
        </section>

        {/* <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>New Leads</h2>
          </div>
          <div className={styles.main__section_cards}>
            {dataB !== undefined &&
              dataB[0].newLeads.map((item, i) => {
                return <CardInfo key={i + 3 * Math.random()} data={item} />
              })}
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Response Time</h2>
          </div>
          <div className={styles.main__section_cards}>
            {dataB !== undefined &&
              dataB[1].responseTime.map((item, i) => {
                return <CardInfo key={i + 5 * Math.random()} data={item} />
              })}
          </div>
        </section> */}

        <BookingTimeComponent />

        <section className={styles.main__section}>
          <div className={styles.main__section__table}>
            <TableComponent />
          </div>
        </section>
      </div>
    </>
  )
}

export default DashBoard
