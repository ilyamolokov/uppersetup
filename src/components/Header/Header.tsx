import Logo from './components/Logo/Logo'
import SearchInput from './components/SearchInput/SearchInput'
import User from './components/User/User'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Logo />
      <SearchInput />
      <User />
    </header>
  )
}

export default Header
