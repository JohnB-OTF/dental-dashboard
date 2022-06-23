//libraries
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Calendar = ({ setCalendar }) => {
  const [dateRange, setDateRange] = useState([new Date()])
  const [startDate, endDate] = dateRange

  useEffect(() => {
    setCalendar(dateRange)
  }, [dateRange, setCalendar])

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update)
      }}
      isClearable={true}
    />
  )
}

export default Calendar
