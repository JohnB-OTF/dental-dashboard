import Head from "next/head"
import Image from "next/image"
import styles from "./dashBoard.module.scss"

//componets
import CardInfo from "../../Components/CardInfo/CardInfo"

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
          <div className={styles.main__section_titles}>
            <h2>New Leads</h2>
          </div>
          <div className={styles.main__section_cards}>
            <CardInfo title="Leads" value="100" percent="-6.00" />
            <CardInfo title="Connected" value="80" percent="4.5" />
            <CardInfo title="Leads" value="100" percent="-6.00" />
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Response Time</h2>
          </div>
          <div className={styles.main__section_cards}>
            <CardInfo title="Leads" value="100" percent="-6.00" />
            <CardInfo title="Leads" value="100" percent="-6.00" />
            <CardInfo title="Leads" value="100" percent="-6.00" />
          </div>
        </section>

        <section className={styles.main__section}>
          <div className={styles.main__section_titles}>
            <h2>Booking Time</h2>
          </div>
          <div className={styles.main__section_cards}>
            <CardInfo title="Leads" value="100" percent="-6.00" />
            <CardInfo title="Leads" value="100" percent="-6.00" />
            <CardInfo title="Leads" value="100" percent="-6.00" />
          </div>
        </section>
      </main>
    </>
  )
}

export default DashBoard
