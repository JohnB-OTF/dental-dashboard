//styles
import styles from "./bookingTime.module.scss"

//libraries
import { useEffect, useState } from "react"

//components
import CardInfo from "../../Components/CardInfo/CardInfo"

//services
import { useGetDataQuery } from "../../services/dentalApi"

const BookingTimeComponent = () => {
  const [dataBooking, setDataBooking] = useState()
  const [getData, setGetData] = useState()

  const { data, isError, isLoading, isSuccess } = useGetDataQuery(
    "pdWesjqkpBEe7oVL6SGb"
  )

  useEffect(() => {
    if (isSuccess) {
      setDataBooking(data)
    }
  }, [data, isSuccess])

  useEffect(() => {
    if (dataBooking) {
      setGetData({
        title: "Booked",
        value: dataBooking.data.length,
        percent: 120,
      })
    }
  }, [dataBooking])

  console.log("Booking", dataBooking)
  console.log("getData", getData)

  return (
    <>
      <section className={styles.main__section}>
        <div className={styles.main__section_titles}>
          <h2>Booking Time</h2>
        </div>
        <div className={styles.main__section_cards}>
          {getData ? <CardInfo data={getData} /> : null}

          <CardInfo />
          <CardInfo />
        </div>
      </section>
      <section className={styles.main__section}>
        <div className={styles.main__section_titles}>
          <h2>Dentalprenr Marketing</h2>
        </div>
      </section>
    </>
  )
}

export default BookingTimeComponent
