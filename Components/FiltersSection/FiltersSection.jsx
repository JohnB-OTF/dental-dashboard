//styles
import styles from "./filtersSection.module.scss"

//libraries
import { useState, useMemo } from "react"
import { Dropdown } from "@nextui-org/react"

//components
import Calendar from "../Calendar/Calendar"

const FiltersSection = () => {
  const [selected, setSelected] = useState(new Set(["Default"]))
  const [selected2, setSelected2] = useState(new Set(["Default2"]))
  const [selected3, setSelected3] = useState(new Set(["Default3"]))

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
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

  console.log(selectedValue)
  console.log(selectedValue2)
  console.log(selectedValue3)

  return (
    <section className={styles.container}>
      <div className={styles.container__calendar}>
        <Calendar />
      </div>

      <Dropdown>
        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
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
          <Dropdown.Item key="data1">Data 1</Dropdown.Item>
          <Dropdown.Item key="data2">Data 2</Dropdown.Item>
          <Dropdown.Item key="data3">Data 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
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
          <Dropdown.Item key="data4">Data 4</Dropdown.Item>
          <Dropdown.Item key="data5">Data 5</Dropdown.Item>
          <Dropdown.Item key="data6">Data 6</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
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
          <Dropdown.Item key="data7">Data 7</Dropdown.Item>
          <Dropdown.Item key="data8">Data 8</Dropdown.Item>
          <Dropdown.Item key="data9">Data 9</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}

export default FiltersSection
