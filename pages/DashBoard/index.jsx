import Head from "next/head"
import styles from "./dashBoard.module.scss"

//componets
import CardInfo from "../../Components/CardInfo/CardInfo"
import Calendar from "../../Components/Calendar/Calendar"

const DashBoard = () => {
  return (
    <>
      <Head>
        <title>DashBoard</title>
        <meta name="description" content="DashBoard Dental" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.main__section}>
          <div className={styles.main__section__filters}>
            <Calendar />
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>New Leads</h2>
          </div>
          <div className={styles.main__section_cards}>
            <CardInfo title="Leads" value="100" percent="-6.00" />
            <CardInfo title="Connected" value="80" percent="4.5" />
            <CardInfo title="Connected %" value="50%" percent="-6.00" />
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Response Time</h2>
          </div>
          <div className={styles.main__section_cards}>
            <CardInfo title="5 Min Response" value="59" percent="7" />
            <CardInfo title="5 Min Response %" value="55%" percent="6.3" />
            <CardInfo
              title="Avg. Response Time"
              value="03:12:11"
              percent="-11"
            />
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Booking Time</h2>
          </div>
          <div className={styles.main__section_cards}>
            <CardInfo title="Same Day Booking" value="27" percent="-1.2" />
            <CardInfo title="Same Day Booking %" value="38%" percent="2.4" />
            <CardInfo
              title="avg. Time to Booking"
              value="17:14:12"
              percent="4.6"
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default DashBoard
