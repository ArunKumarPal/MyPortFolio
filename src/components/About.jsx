import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// =========================
// Styled Components
// =========================

const Section = styled.section`
  padding: 6rem 3rem;
  background: #f7f9fc;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 1.5rem;

  span {
    color: #1457c6;
  }

  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.2rem;
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutPhoto = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 300px;
    height: 360px;
  }
`;

// =========================
// About Component
// =========================

export default function About() {
  return (
    <Section id="about">
      <Wrapper>
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading>
            About <span>Me</span>
          </Heading>

          <Paragraph>
            I’m a Senior Backend Engineer with 7+ years of experience designing,
            building, and optimizing scalable, high-performance systems. I specialize
            in Java, Spring Boot, Micronaut, Microservices, and cloud-native
            architectures on Docker & Kubernetes.
          </Paragraph>

          <Paragraph>
            My work spans distributed system design, API gateway engineering, large-scale
            data processing, workflow orchestration, and performance optimization across
            AWS and GCP. I enjoy solving complex backend problems and crafting systems
            that scale reliably.
          </Paragraph>

          <Paragraph>
            Beyond engineering, I focus on writing maintainable code, improving platform
            reliability, and delivering long-term architectural value.
          </Paragraph>
        </motion.div>

        {/* RIGHT IMAGE */}
        <ImageWrapper
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <AboutPhoto
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=700&h=880&fit=crop"
            alt="About Me"
          />
        </ImageWrapper>

      </Wrapper>
    </Section>
  );
}
