//libraries
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Calendar = ({ setCalendar }) => {
  const [currentDate, setCurrentDate] = useState([new Date()])
  const [startDate, endDate] = currentDate
  const [firstDay, setFirstDay] = useState()

  useEffect(() => {
    setCalendar(currentDate)
    // setFirstDay(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1))
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
