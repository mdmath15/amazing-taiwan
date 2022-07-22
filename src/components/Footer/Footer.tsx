/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

import * as S from "./Footer.styles";

export function Footer() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.SocialContainer>
          <Image
            src="/Logo-footer.svg"
            alt="Amazing Taiwan"
            width={160}
            height={60}
          />
          <div>
            <Link href="/">
              <a>
                <FacebookLogo size={28} weight="fill" color="white" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <InstagramLogo size={28} weight="fill" color="white" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <TwitterLogo size={28} weight="fill" color="white" />
              </a>
            </Link>
          </div>
        </S.SocialContainer>

        <S.ContentContainer>
          <h2>Menu</h2>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Destination</a>
            </Link>
            <Link href="/">
              <a>Reviews</a>
            </Link>
            <Link href="/">
              <a>Community</a>
            </Link>
          </div>
        </S.ContentContainer>

        <S.ContentContainer>
          <h2>Company</h2>
          <div>
            <Link href="/">
              <a>Terms and Conditions </a>
            </Link>
            <Link href="/">
              <a>Privacy</a>
            </Link>
            <Link href="/">
              <a>Policy Careers</a>
            </Link>
          </div>
        </S.ContentContainer>

        <S.ContentContainer>
          <h2>Support</h2>
          <div>
            <Link href="/">
              <a>Contact Us </a>
            </Link>
            <Link href="/">
              <a>FAQ/Help </a>
            </Link>
            <Link href="/">
              <a>Resources </a>
            </Link>
          </div>
        </S.ContentContainer>

        <S.ContentContainer>
          <h2>Contact Us</h2>
          <div>
            <Link href="/">
              <a>0912345678 </a>
            </Link>
            <Link href="/">
              <a>support@amazingtaiwan.com </a>
            </Link>
          </div>
        </S.ContentContainer>
        <hr />
        <p>Developed by Matheus Ribeiro</p>
      </S.Wrapper>
    </S.Container>
  );
}
