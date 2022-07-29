/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button";
import * as S from "./Header.styles";

export function Header() {
  const [headerSticky, setHeaderSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 92) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.Container headerSticky={headerSticky} active={menuOpen}>
      <div>
        <Image
          src={
            headerSticky ? "/images/logo-footer.svg" : "/images/logo-header.svg"
          }
          alt="Amazing Taiwan"
          width={146}
          height={56}
          style={{ cursor: "pointer" }}
        />
        <S.NavContainer headerSticky={headerSticky} active={menuOpen}>
          <S.Menu
            onClick={() => setMenuOpen(!menuOpen)}
            active={menuOpen}
            headerSticky={headerSticky}
            data-testid="open-menu"
          >
            <span />
            <span />
            <span />
          </S.Menu>

          <ul
            role="menu"
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(false))}
          >
            <li>
              <Link href="/#home" scroll={false}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/#destinations" scroll={false}>
                <a>Explore</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Button
                type="button"
                background={headerSticky || menuOpen ? "blue" : "orange"}
                color="white"
              >
                Sign In
              </Button>
            </li>
          </ul>
        </S.NavContainer>
      </div>
    </S.Container>
  );
}
