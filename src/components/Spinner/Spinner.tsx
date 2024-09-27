import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="50"
      height="50"
      style={{
        shapeRendering: 'auto',
        display: 'block',
        background: 'rgb(255, 255, 255)',
      }}
      className={styles.spinner}
    >
      <g data-idx="1">
        <circle
          strokeDasharray="164.93361431346415 56.97787143782138"
          r="35"
          strokeWidth="10"
          stroke="#6627ff"
          fill="none"
          cy="50"
          cx="50"
          data-idx="2"
          transform="matrix(-0.844327982581733,-0.5358267050357426,0.5358267050357426,-0.844327982581733,65.42506387729952,119.00773438087379)"
        ></circle>
        <g data-idx="4"></g>
      </g>
    </svg>
  )
}
export default Spinner
