import { useState, useRef } from "react";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import styles from "./index.module.scss";

export default function Navbar({
  discoverRef,
  popularRef,
  upcomingRef,
  children,
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navRef = useRef(null);

  const scrolltoTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const scrollToSection = (ref) =>
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop - navRef.current.offsetHeight,
    });

  const handleMenuVisibility = () => setIsMenuVisible(!isMenuVisible);

  return (
    <nav ref={navRef} className={styles.Navbar}>
      <div className={styles.logo} onClick={scrolltoTop}>
        <svg
          stroke="currentColor"
          fill="#F8D210"
          strokeWidth="0"
          viewBox="0 1 16 16"
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
        >
          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
        </svg>
        <h3 className={styles.name}>StarCast</h3>
      </div>
      <div className={styles.menu} onClick={handleMenuVisibility}>
        <div className={styles.toggle}>
          {isMenuVisible ? <BiRightArrow /> : <BiDownArrow />}
        </div>
        {isMenuVisible && (
          <ul className={styles.anchor_list}>
            <li
              className={styles.anchor}
              onClick={() => scrollToSection(discoverRef)}
            >
              Discover
            </li>
            <li
              className={styles.anchor}
              onClick={() => scrollToSection(upcomingRef)}
            >
              Popular
            </li>
            <li
              className={styles.anchor}
              onClick={() => scrollToSection(popularRef)}
            >
              Upcoming
            </li>
          </ul>
        )}
      </div>
      {children}
    </nav>
  );
}
