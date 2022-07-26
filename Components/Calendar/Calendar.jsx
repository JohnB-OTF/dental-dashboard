//libraries
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//hooks
import useGetFirstDayMonth from "../../hooks/useGetFirstDayMonth"

const Calendar = ({ setCalendar }) => {
  const [currentDate, setCurrentDate] = useState([
    useGetFirstDayMonth(),
    new Date(),
  ])
  const [startDate, endDate] = currentDate

  useEffect(() => {
    setCalendar(
      currentDate !== undefined &&
        currentDate !== null &&
        currentDate.map((date) => date !== null && date.toUTCString())
    )
  }, [currentDate, setCalendar])

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setCurrentDate(update)
      }}
      isClearable={true}
    />
  )
}

export default Calendar
