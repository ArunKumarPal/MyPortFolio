import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// =========================
// Styled Components
// =========================

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url("https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1920")
    center/cover no-repeat;
  filter: brightness(${(p) => (p.$dim ? 0.45 : 0.6)});
  transition: filter 0.8s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(20, 87, 198, 0.75),
      rgba(118, 75, 162, 0.55)
    );
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

// =========================
// Left Side Text Section
// =========================

const Greeting = styled.p`
  font-size: 1.4rem;
  color: #e6e6e6;
  margin-bottom: 0.4rem;
`;

const Name = styled.h1`
  font-size: 4.2rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.15;

  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 0.4rem;
  margin-bottom: 1.5rem;
  color: #eaeaea;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #f6f6f6;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    margin: 0 auto 2rem auto;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const PrimaryBtn = styled.a`
  padding: 1rem 2rem;
  background: #fff;
  color: #1457c6;
  border-radius: 40px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background: #1457c6;
    color: #fff;
  }
`;

const OutlineBtn = styled(PrimaryBtn)`
  background: transparent;
  color: #fff;
  border: 2px solid #fff;

  &:hover {
    background: #fff;
    color: #1457c6;
  }
`;

// =========================
// Right Side Photo Section
// =========================

const PhotoWrapper = styled(motion.div)`
  width: ${(p) => (p.$shrink ? "300px" : "420px")};
  height: ${(p) => (p.$shrink ? "380px" : "520px")};
  margin: 0 auto;
  position: relative;
  transition: 0.8s ease;

  @media (max-width: 900px) {
    width: ${(p) => (p.$shrink ? "240px" : "340px")};
    height: ${(p) => (p.$shrink ? "300px" : "420px")};
  }
`;

const BlobFrame = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50% 45% 55% 45% / 45% 55% 45% 55%;
  background: linear-gradient(135deg, #1457c6, #764ba2);
  animation: rotateBlob 14s linear infinite;
  padding: 10px;

  @keyframes rotateBlob {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const InnerFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding: 14px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  border: 4px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.45);
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 2.2rem;
  opacity: ${(p) => (p.$hide ? 0 : 1)};
  transition: 0.4s ease;
  cursor: pointer;
`;

// =========================
// Component Logic
// =========================

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 200);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <HeroContainer id="home">
      <Background $dim={scrolled} />

      <Content>
        {/* LEFT SIDE INTRO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <Name>Arun Pal</Name>
          <Title>Senior Java Backend Engineer</Title>

          <Description>
            Senior Backend Engineer with 7+ years building scalable, secure, and
            high-performance systems using Java, Spring Boot, Micronaut, and
            Microservices. Skilled in Cloud, Big Data, and Kubernetes with a
            strong focus on performance, reliability, and system design.
          </Description>

          <ButtonRow>
            <PrimaryBtn href="#contact">Contact Me</PrimaryBtn>
            <OutlineBtn href="/ArunPal-Resume.pdf" download>
              Download Resume
            </OutlineBtn>
          </ButtonRow>
        </motion.div>

        {/* RIGHT SIDE PHOTO */}
        <PhotoWrapper
          $shrink={scrolled}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <BlobFrame />
          <InnerFrame>
            <Photo
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
              alt="Arun Pal - Backend Engineer"
            />
          </InnerFrame>
        </PhotoWrapper>
      </Content>

      <ScrollDown $hide={scrolled} onClick={scrollToNext}>
        ↓
      </ScrollDown>
    </HeroContainer>
  );
}
