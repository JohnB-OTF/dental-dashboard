//styles
import styles from "./cardInfo.module.scss"

//libraries
import React, { useState, useEffect } from "react"

const CardInfo = ({ data }) => {
  const [info, setInfo] = useState(data !== undefined && data)

  //reffesh data
  useEffect(() => {
    if (data) {
      setInfo(data)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <h3>{info.title !== undefined ? info.title : "No data"}</h3>
      {data !== undefined && data.isPorcent ? (
        <span>{info.value !== undefined ? `${info.value}%` : "No data"}</span>
      ) : (
        <span>{info.value !== undefined ? info.value : "No data"}</span>
      )}

      {Number(info.percent) > 0 ? (
        <small className={styles.container__green}>{info.percent} %</small>
      ) : (
        <small className={styles.container__red}>{info.percent} %</small>
      )}
    </div>
  )
}

export default React.memo(CardInfo)
