//styles
import styles from "./cardInfo.module.scss"

//libraries
import { useState } from "react"

const CardInfo = ({ data }) => {
  const [info, setInfo] = useState(data !== undefined && data)

  console.log("info", info)

  return (
    <div className={styles.container}>
      <h3>{info.title !== undefined ? info.title : "No data"}</h3>
      <span>{info.value !== undefined ? info.value : "No data"}</span>

      {Number(info.percent) > 0 ? (
        <small className={styles.container__green}>{info.percent} %</small>
      ) : (
        <small className={styles.container__red}>{info.percent} %</small>
      )}
    </div>
  )
}

export default CardInfo
