//styles
import styles from "./cardInfo.module.scss"

//libraries
import { useState } from "react"

const CardInfo = ({ key, data }) => {
  const [info, setInfo] = useState(data !== undefined && data)

  console.log(info)

  return (
    <div key={key} className={styles.container}>
      <h3>{info.title}</h3>
      <span>{info.value}</span>

      {Number(info.percent) > 0 ? (
        <small className={styles.container__green}>{info.percent} %</small>
      ) : (
        <small className={styles.container__red}>{info.percent} %</small>
      )}
    </div>
  )
}

export default CardInfo
