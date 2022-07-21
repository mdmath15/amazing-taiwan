/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button";
import * as S from "./Header.styles";

export function Header() {
  const [headerSticky, setHeaderSticky] = useState(false);

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
    <S.Container headerSticky={headerSticky}>
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
        <S.NavContainer headerSticky={headerSticky}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Explore</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
          </ul>
          <Button
            type="button"
            background={headerSticky ? "blue" : "orange"}
            color="white"
          >
            Sign In
          </Button>
        </S.NavContainer>
      </div>
    </S.Container>
  );
}
