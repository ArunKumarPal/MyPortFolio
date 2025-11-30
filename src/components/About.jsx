import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// =========================
// Styled Components
// =========================

const Section = styled.section`
  padding: 6rem 3rem;
  background: #f7f9fc;
  min-height: 85vh;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 2rem;

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
  margin-bottom: 1.5rem;
  text-align: left;
`;

// =========================
// About Component
// =========================

export default function About() {
  return (
    <Section id="about">
      <Wrapper>
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
            I'm a Senior Software Engineer I with 7+ years of experience specializing in 
            building enterprise-grade backend systems, microservices architectures, and 
            distributed applications. Currently at Precisely Software & Data, I architect 
            and develop scalable APIs that process millions of requests while maintaining 
            optimal performance and reliability.
          </Paragraph>

          <Paragraph>
            My expertise spans the entire backend ecosystem - from designing fault-tolerant 
            workflows with Temporal, implementing secure API gateways with JWT authentication 
            and rate limiting, to orchestrating large-scale data processing pipelines with 
            Kafka and Redis. I've reduced production issues by 40% through rigorous code 
            reviews and improved API response times by 30% using intelligent caching and 
            optimization strategies.
          </Paragraph>

          <Paragraph>
            I'm passionate about cloud-native technologies, having deployed and optimized 
            systems on AWS, GCP, and Azure. Whether it's building OpenAPI test frameworks, 
            processing bulk CSV files with intelligent chunking, or mentoring teams on 
            SOLID principles and microservices patterns - I thrive on solving complex 
            technical challenges that deliver real business value.
          </Paragraph>

          <Paragraph>
            Beyond coding, I believe in writing clean, maintainable code, comprehensive 
            documentation, and building systems that scale gracefully. My open-source 
            projects reflect my commitment to quality engineering and continuous learning.
          </Paragraph>
        </motion.div>
      </Wrapper>
    </Section>
  );
}
