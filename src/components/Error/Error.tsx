import ErrorIcon from './icons/ErrorIcon'

import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={styles.errorWrapper}>
      <ErrorIcon />
      <span>Sorry, something went wrong</span>
    </div>
  )
}

export default Error
