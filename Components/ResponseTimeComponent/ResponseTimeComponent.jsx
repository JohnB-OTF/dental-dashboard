//styles
import styles from "./bookingTime.module.scss"

//libraries
import { useEffect, useState } from "react"
import { Loading } from "@nextui-org/react"

//hooks
import useSecondsToString from "../../hooks/useSecondsToString"

//services
import { useGetResponseTimeQuery } from "../../services/dentalApi"

//components
import CardInfo from "../CardInfo/CardInfo"

const BookingTimeComponent = () => {
  const [pathname, setPathname] = useState(undefined)
  const [dataResponseTime, setDataResponseTime] = useState()
  const [responseTime, setResponseTime] = useState()
  const [ResponseTimePorcent, setResponseTimePorcent] = useState(0)
  const [avgTime, setAvgTime] = useState()
  const [getBooked, setGetBooked] = useState()
  const [getBookedSameDay, setGetBookedSameDay] = useState()
  const [getAvgTimeBooking, setGetAvgTimeBooking] = useState()

  //get pathname
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname)
    }
  }, [pathname])

  //Response time end-point
  const { data, isError, isLoading, isSuccess } = useGetResponseTimeQuery(
    pathname !== undefined && pathname.split("/")[2]
  )

  //filter response elements
  const filterResponse = (dataResponseTime) => {
    const elements = dataResponseTime.data.filter((item) => {
      return (
        item.inbounds[0] !== undefined && item.inbounds[0].messages.in5min === 1
      )
    })
    setResponseTime(elements.length)
  }

  //porcent response time
  const porcentResponseTime = (responseTime, dataResponseTime) => {
    if (responseTime !== undefined && dataResponseTime !== undefined) {
      const porcent = (responseTime / dataResponseTime.data.length) * 100
      setResponseTimePorcent(Number(porcent.toFixed()))
    }
  }

  //avg time
  const getAvgTime = (dataResponseTime) => {
    setAvgTime(sessionStorage.getItem("followup_time"))
  }

  //get booked elements
  useEffect(() => {
    if (data === undefined) return
    if (isSuccess) {
      setDataResponseTime(data)
    }
  }, [data, isSuccess])

  //get filter - porcent
  useEffect(() => {
    if (dataResponseTime === undefined && responseTime === undefined) return
    filterResponse(dataResponseTime)
    porcentResponseTime(responseTime, dataResponseTime)
    getAvgTime(dataResponseTime)
  }, [dataResponseTime, responseTime])

  //inyect data to card info
  useEffect(() => {
    if (dataResponseTime === undefined) return
    setGetBooked({
      title: "5 Min Response",
      value: responseTime,
      percent: 120,
      isPorcent: false,
    })
    setGetBookedSameDay({
      title: "In 5 Mins %",
      value: ResponseTimePorcent,
      percent: -45,
      isPorcent: true,
    })
    setGetAvgTimeBooking({
      title: "Avg. Response Time",
      value: avgTime,
      percent: -45,
      isPorcent: false,
    })
  }, [dataResponseTime, ResponseTimePorcent, avgTime, responseTime])

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
              <h2>Response Time</h2>
            </div>
            <div className={styles.main__section_cards}>
              {getBooked !== undefined ? (
                <CardInfo data={getBooked} />
              ) : (
                <div className={styles.main__section_cards_loader}>
                  <Loading />
                </div>
              )}
              {getBookedSameDay !== undefined ? (
                <CardInfo data={getBookedSameDay} />
              ) : (
                <div className={styles.main__section_cards_loader}>
                  <Loading />
                </div>
              )}
              {getAvgTimeBooking !== undefined ? (
                <CardInfo data={getAvgTimeBooking} />
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

export default BookingTimeComponent
