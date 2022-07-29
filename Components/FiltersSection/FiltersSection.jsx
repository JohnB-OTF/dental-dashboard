//styles
import styles from "./filtersSection.module.scss"

//libraries
import { useState, useMemo, useEffect } from "react"
import { Dropdown } from "@nextui-org/react"
import { useSelector, useDispatch } from "react-redux"

//slices
import { dentalprenr, other } from "../../slices/marketingFilterSlice"

//components
import Calendar from "../Calendar/Calendar"

const FiltersSection = ({ setCalendar, setFirst, setSecond, setThird }) => {
  const marketingFilter = useSelector((state) => state.marketing.value)
  const dispatch = useDispatch()

  const [selected, setSelected] = useState(new Set([marketingFilter]))
  const [selected2, setSelected2] = useState(new Set(["Time of Day"]))
  const [selected3, setSelected3] = useState(new Set(["Week Type"]))

  const selectedValue = useMemo(
    () => Array.from(selected).join(" ,").replaceAll("_", " "),
    [selected]
  )

  const selectedValue2 = useMemo(
    () => Array.from(selected2).join(", ").replaceAll("_", " "),
    [selected2]
  )

  const selectedValue3 = useMemo(
    () => Array.from(selected3).join(", ").replaceAll("_", " "),
    [selected3]
  )

  //update state when selected changes
  useEffect(() => {
    setFirst(selectedValue)
    setSecond(selectedValue2)
    setThird(selectedValue3)
  }, [selectedValue, selectedValue2, selectedValue3])

  return (
    <section className={styles.container}>
      <div className={styles.container__calendar}>
        <Calendar setCalendar={setCalendar} />
      </div>

      <Dropdown>
        <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Multiple selection actions"
          color="primary"
          disallowEmptySelection
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Dropdown.Item key="Dental_marketing">Dental marketing</Dropdown.Item>
          <Dropdown.Item key="Other_Marketing">Other Marketing</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
          {selectedValue2}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Multiple selection actions"
          color="primary"
          disallowEmptySelection
          selectionMode="multiple"
          selectedKeys={selected2}
          onSelectionChange={setSelected2}
        >
          <Dropdown.Item key="business_hours">Business Hours</Dropdown.Item>
          <Dropdown.Item key="after_hours">After Hours</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
          {selectedValue3}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Multiple selection actions"
          color="primary"
          disallowEmptySelection
          selectionMode="multiple"
          selectedKeys={selected3}
          onSelectionChange={setSelected3}
        >
          <Dropdown.Item key="weekdays">Weekdays</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}

export default FiltersSection
