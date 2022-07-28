//styles
import styles from "./bookingTime.module.scss"

//libraries
import { useEffect, useState } from "react"
import { Loading } from "@nextui-org/react"

//hooks
import useSecondsToString from "../../hooks/useSecondsToString"

//services
import { useGetBookingQuery } from "../../services/dentalApi"

//components
import CardInfo from "../../Components/CardInfo/CardInfo"

const BookingTimeComponent = () => {
  const [pathname, setPathname] = useState(undefined)
  const [dataBooking, setDataBooking] = useState()
  const [sameDayBooked, setSameDayBooked] = useState()
  const [porcentSameDay, setPorcentSameDay] = useState(0)
  const [totalDurationBooked, setTotalDurationBooked] = useState()
  const [getBooked, setGetBooked] = useState()
  const [getBookedSameDay, setGetBookedSameDay] = useState()
  const [getAvgTimeBooking, setGetAvgTimeBooking] = useState()

  //get pathname
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname)
      console.log("pathname", pathname)
    }
  }, [pathname])

  //booking end-point
  const { data, isError, isLoading, isSuccess } = useGetBookingQuery(
    pathname !== undefined && pathname.split("/")[2]
  )

  //convert seconds to string
  const timeAvg = useSecondsToString(totalDurationBooked)

  //filter sameday elements
  const filterSameDayBooked = (dataBooking) => {
    const elements = dataBooking.data.filter((item) => {
      return item.samedaybooking === 1
    })
    setSameDayBooked(elements.length)
  }

  //porcent sameday booked
  const porcentSameDayBooked = (sameDayBooked, dataBooking) => {
    if (sameDayBooked !== undefined && dataBooking !== undefined) {
      const porcent = (sameDayBooked / dataBooking.data.length) * 100
      setPorcentSameDay(Number(porcent.toFixed()))
    }
  }

  //avg time
  const avgTime = (dataBooking) => {
    if (dataBooking === undefined) return
    let sum = 0
    for (let i = 0; i < dataBooking.data.length; i++) {
      sum = dataBooking.data[i].bookduration + sum
    }
    setTotalDurationBooked(sum / dataBooking.data.length)
  }

  //get booked elements
  useEffect(() => {
    if (data === undefined) return
    if (isSuccess) {
      setDataBooking(data)
    }
  }, [data, isSuccess])

  //get filter - porcent
  useEffect(() => {
    if (dataBooking === undefined && sameDayBooked === undefined) return
    filterSameDayBooked(dataBooking)
    porcentSameDayBooked(sameDayBooked, dataBooking)
    avgTime(dataBooking)
  }, [dataBooking, sameDayBooked])

  //inyect data to card info
  useEffect(() => {
    if (dataBooking === undefined) return
    setGetBooked({
      title: "Booked",
      value: dataBooking.data.length,
      percent: 120,
      isPorcent: false,
    })
    setGetBookedSameDay({
      title: "Same Day Booked %",
      value: porcentSameDay,
      percent: -45,
      isPorcent: true,
    })
    setGetAvgTimeBooking({
      title: "Avg Time to Booking",
      value: timeAvg,
      percent: -45,
      isPorcent: false,
    })
  }, [dataBooking, porcentSameDay, timeAvg])

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
              <h2>Booking Time</h2>
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
          <section className={styles.main__section}>
            <div className={styles.main__section_titles}>
              <h2>Dentalprenr Marketing</h2>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default BookingTimeComponent
