"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdPublic,
  MdSearch,
  MdOutlineChat,
} from "react-icons/md";

const Navabar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className="icons">
          <MdOutlineChat />
          <MdNotifications />
          <MdPublic />
        </div>
      </div>
    </div>
  );
};

export default Navabar;
