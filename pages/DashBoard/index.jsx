import Head from "next/head"
import styles from "./dashBoard.module.scss"

//libraries
import { useEffect, useState } from "react"

//componets
import CardInfo from "../../Components/CardInfo/CardInfo"
import FiltersSection from "../../Components/FiltersSection/FiltersSection"
import TableComponent from "../../Components/TableComponent/TableComponent"

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

  //dinamic data
  const dataBoard = [
    {
      newLeads: [
        {
          title: "Leads",
          value: "10",
          percent: "-6.00",
        },
        {
          title: "Connected",
          value: "80",
          percent: "4.5",
        },
        {
          title: "Connected %",
          value: "50%",
          percent: "-6.00",
        },
      ],
    },
    {
      responseTime: [
        {
          title: "5 Min Response",
          value: "59",
          percent: "7",
        },
        {
          title: "5 Min Response %",
          value: "59",
          percent: "6.3",
        },
        {
          title: "Avg. Response Time",
          value: "03:12:11",
          percent: "-11",
        },
      ],
    },
    {
      bookingTime: [
        {
          title: "Same Day Booking",
          value: "27",
          percent: "-1.2",
        },
        {
          title: "Same Day Booking %",
          value: "38%",
          percent: "2.4",
        },
        {
          title: "avg. Time to Booking",
          value: "17:14:12",
          percent: "4.6",
        },
      ],
    },
  ]

  //make  function objet data
  const sendData = () => {
    queryData.dateRange = dateCalendar
    queryData.first = firstFilter
    queryData.second = secondFilter
    queryData.third = thirdFilter
  }

  useEffect(() => {
    sendData()
  }, [dateCalendar, firstFilter, secondFilter, thirdFilter])

  console.log("datos para enviar", queryData)

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

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>New Leads</h2>
          </div>
          <div className={styles.main__section_cards}>
            {dataBoard[0].newLeads.map((item, i) => {
              return <CardInfo key={i + 3 * Math.random()} data={item} />
            })}
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Response Time</h2>
          </div>
          <div className={styles.main__section_cards}>
            {dataBoard[1].responseTime.map((item, i) => {
              return <CardInfo key={i + 5 * Math.random()} data={item} />
            })}
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Booking Time</h2>
          </div>
          <div className={styles.main__section_cards}>
            {dataBoard[2].bookingTime.map((item, i) => {
              return <CardInfo key={i + 8 * Math.random()} data={item} />
            })}
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Dentalprenr Marketing</h2>
          </div>

          <div className={styles.main__section__table}>
            <TableComponent />
          </div>
        </section>
      </div>
    </>
  )
}

export default DashBoard
