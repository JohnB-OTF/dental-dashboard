//styles
import styles from "./header.module.scss"
import Logo from "../../../public/images/ghl_dentalprenr_logo.png"

//libraries
import Image from "next/image"

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="Logo Dentalprendr" />
      <span>Dashboard</span>
    </header>
  )
}

export default Header
