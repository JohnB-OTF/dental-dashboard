//styles
import styles from "./cardInfo.module.scss"

//libraries
import React, { useState, useEffect } from "react"

const CardInfo = ({ data }) => {
  const [info, setInfo] = useState(data !== undefined && data)

  //refresh data
  useEffect(() => {
    if (data) {
      setInfo(data)
    }
  }, [data])

  console.log("info", info.value)

  return (
    <div className={styles.container}>
      <h3>{info.title !== undefined ? info.title : "No data"}</h3>
      {info !== undefined && info.isPorcent ? (
        <span>
          {info.value !== undefined && info.value !== NaN && info.value !== null
            ? `${info.value}%`
            : "No data"}
        </span>
      ) : (
        <span>
          {info.value !== undefined && info.value !== "NaN:NaN:NaN"
            ? info.value
            : "No data"}
        </span>
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
