//styles
import styles from "./cardInfo.module.scss"

const CardInfo = ({ title, value, percent }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <span>{value}</span>

      {Number(percent) > 0 ? (
        <small className={styles.container__green}>{percent}%</small>
      ) : (
        <small className={styles.container__red}>{percent}%</small>
      )}
    </div>
  )
}

export default CardInfo
