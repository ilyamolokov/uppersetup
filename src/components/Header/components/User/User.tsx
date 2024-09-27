import UserIcon from "../../icons/UserIcon";
import styles from "./User.module.css";

const User = () => {
  return (
    <div className={styles.userWrapper}>
      <UserIcon className={styles.userIcon} />
      <span className={styles.userName}>Your Name</span>
    </div>
  );
};

export default User;
