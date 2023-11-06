import styles from "./container.module.css"

export const ContainerBox = ({ greeting }) => {
  return (
    <div className={styles.text} > { greeting } </div>
  )
}