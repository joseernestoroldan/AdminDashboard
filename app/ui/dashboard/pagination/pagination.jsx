"use client";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import styles from "./pagination.module.css";
import { useRouter, useSearchParams, usePathname } from "next/navigation";


const Pagination = ({ count }) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEMS_PER_PAGE = 10;

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
      replace(`${pathName}?${params}`)
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        <MdArrowLeft className={styles.arrow}/>
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        <MdArrowRight className={styles.arrow}/>
      </button>
    </div>
  );
};
export default Pagination;
