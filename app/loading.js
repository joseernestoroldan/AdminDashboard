import styles from './home.module.css'
import Loader from './ui/loader/loader'

const Loading = () => {
  return (
    <div className={styles.loadercontainer}><Loader/></div>
  )
}

export default Loading