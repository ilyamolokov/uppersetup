import { useMovies } from '../../../../context/MovieContext'

import styles from './PageButton.module.css'

interface PageButtonProps {
  label: number | string
  onClick: () => void
}

const PageButton = (props: PageButtonProps) => {
  const { label, onClick } = props
  const { currentPage } = useMovies()

  return (
    <button
      className={`${styles.pageButton} ${
        currentPage === label && styles.active
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default PageButton
