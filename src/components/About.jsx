import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #1c1c1c;
  margin-bottom: 2rem;

  span {
    color: #1457c6;
  }

  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
`;

const TabNav = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const TabBtn = styled.button`
  padding: 0.7rem 1.3rem;
  border-radius: 999px;
  border: none;
  background: ${(p) => (p.$active ? "linear-gradient(90deg,#1457c6,#764ba2)" : "rgba(255,255,255,0.6)")};
  color: ${(p) => (p.$active ? "#fff" : "#16324a")};
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${(p) => (p.$active ? "transparent" : "rgba(20, 87, 198, 0.2)")};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(20, 87, 198, 0.2);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Card = styled(motion.div)`
  width: 100%;
  max-width: 950px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2.5rem;
  border-left: 6px solid #1457c6;
  box-shadow: 0 16px 40px rgba(12, 38, 73, 0.1);

  @media (max-width: 900px) {
    padding: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #1457c6;
  margin: 0 0 1.5rem 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const NavBtn = styled.button`
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(20, 87, 198, 0.3);
  background: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1457c6;
    color: #fff;
    transform: scale(1.1);
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const BulletItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  text-align: left;

  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #1457c6;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const HighlightBox = styled.div`
  background: rgba(20, 87, 198, 0.08);
  border-left: 4px solid #1457c6;
  padding: 1.2rem 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(20, 87, 198, 0.2);

  .number {
    font-size: 2rem;
    font-weight: 800;
    color: #1457c6;
    display: block;
  }

  .label {
    font-size: 0.95rem;
    color: #666;
    margin-top: 0.3rem;
  }
`;

// =========================
// About Component
// =========================

// Data for different pages
const aboutPages = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <Paragraph>
          I'm a <strong>Senior Software Engineer I</strong> with <strong>7+ years of professional experience</strong> in 
          designing and building enterprise-grade backend systems, microservices architectures, and distributed applications. 
          Currently at <strong>Precisely Software & Data</strong>, I architect scalable APIs that power mission-critical 
          data solutions, processing millions of requests daily while maintaining optimal performance and reliability.
        </Paragraph>

        <HighlightBox>
          <StatGrid>
            <StatCard>
              <span className="number">7+</span>
              <span className="label">Years Experience</span>
            </StatCard>
            <StatCard>
              <span className="number">40%</span>
              <span className="label">Reduced Production Issues</span>
            </StatCard>
            <StatCard>
              <span className="number">30%</span>
              <span className="label">Improved API Performance</span>
            </StatCard>
            <StatCard>
              <span className="number">25%</span>
              <span className="label">Cloud Cost Optimization</span>
            </StatCard>
          </StatGrid>
        </HighlightBox>
      </>
    )
  },
  {
    id: "expertise",
    title: "Core Expertise",
    content: (
      <>
        <SubHeading>🎯 Technical Specializations</SubHeading>
        <BulletList>
          <BulletItem>
            <strong>Backend Architecture:</strong> Designed and implemented microservices using Spring Boot, Micronaut, 
            Spring Cloud with fault-tolerant patterns, circuit breakers, and distributed tracing
          </BulletItem>
          <BulletItem>
            <strong>API Development:</strong> Built RESTful APIs with OAuth2/JWT authentication, rate limiting, 
            comprehensive error handling, and OpenAPI documentation serving millions of requests
          </BulletItem>
          <BulletItem>
            <strong>Cloud Native Solutions:</strong> Deployed and optimized systems across AWS, GCP, and Azure with 
            containerization (Docker/Kubernetes), infrastructure as code (Terraform), and CI/CD automation
          </BulletItem>
          <BulletItem>
            <strong>Distributed Systems:</strong> Architected event-driven workflows using Temporal, Kafka, Redis, 
            and async processing patterns for high-throughput data pipelines
          </BulletItem>
          <BulletItem>
            <strong>Performance Engineering:</strong> Optimized API response times by 30% through intelligent caching, 
            multithreading, database query optimization, and resource management
          </BulletItem>
        </BulletList>
      </>
    )
  },
  {
    id: "highlights",
    title: "Achievements",
    content: (
      <>
        <SubHeading>💼 Professional Highlights</SubHeading>
        <BulletList>
          <BulletItem>
            Led development of <strong>API Gateway</strong> with centralized access control, token validation, 
            IP-based rate limiting, and YAML-based routing for enterprise clients
          </BulletItem>
          <BulletItem>
            Built <strong>Bulk File Processing System</strong> handling S3 → Kafka → Spark → S3 pipeline with 
            Temporal orchestration, automatic retries, and Redis-based status tracking
          </BulletItem>
          <BulletItem>
            Developed geocoding, autocomplete, and verification APIs for <strong>Developer Portal</strong> using 
            Java, Go, and microservices architecture
          </BulletItem>
          <BulletItem>
            Reduced production incidents by <strong>40%</strong> through rigorous code reviews, adherence to 
            SOLID principles, and comprehensive testing strategies
          </BulletItem>
          <BulletItem>
            Achieved <strong>25% cloud cost reduction</strong> by optimizing Kubernetes resource allocation, 
            implementing auto-scaling, and rightsizing workloads
          </BulletItem>
          <BulletItem>
            Mentored development teams on Java best practices, design patterns, microservices architecture, 
            and modern development workflows
          </BulletItem>
        </BulletList>
      </>
    )
  },
  {
    id: "skills",
    title: "Tech Stack",
    content: (
      <>
        <SubHeading>🔧 Technical Proficiency</SubHeading>
        <BulletList>
          <BulletItem>
            <strong>Languages:</strong> Java (Expert), Python, SQL, Go
          </BulletItem>
          <BulletItem>
            <strong>Frameworks:</strong> Spring Boot, Micronaut, Spring Cloud, Hibernate/JPA, Reactive Programming
          </BulletItem>
          <BulletItem>
            <strong>Databases:</strong> PostgreSQL, MySQL, Oracle, MongoDB, Redis (caching & pub-sub)
          </BulletItem>
          <BulletItem>
            <strong>Cloud & DevOps:</strong> AWS, Azure, GCP, Docker, Kubernetes, Terraform, Jenkins, CI/CD, Datadog
          </BulletItem>
          <BulletItem>
            <strong>Messaging & Tools:</strong> Kafka, Azure Event Hub, Temporal Workflows, JUnit5, Mockito, Gatling, SonarQube
          </BulletItem>
        </BulletList>

        <SubHeading style={{ marginTop: "2rem" }}>🏆 Recognition & Certifications</SubHeading>
        <BulletList>
          <BulletItem>
            <strong>4x Award Winner</strong> at Precisely Software & Data: 2× Spot Awards, 2× Stellar Performer Awards, 
            1× Team Award for exceptional technical contributions and leadership
          </BulletItem>
          <BulletItem>
            <strong>Certified Professional:</strong> AWS Cloud, Docker, Python, Spring Boot Microservices, 
            Jenkins CI/CD, and Android Development
          </BulletItem>
        </BulletList>
      </>
    )
  },
  {
    id: "philosophy",
    title: "Philosophy",
    content: (
      <>
        <SubHeading>🚀 What Drives Me</SubHeading>
        <Paragraph>
          I'm passionate about building systems that scale gracefully under pressure and deliver real business value. 
          Whether it's architecting fault-tolerant distributed systems, optimizing database queries for millisecond response times, 
          or mentoring teams on clean code principles - I thrive on solving complex technical challenges with elegant solutions.
        </Paragraph>

        <Paragraph>
          Beyond writing production-grade code, I believe in comprehensive documentation, thorough testing, and building 
          maintainable systems that teams can confidently iterate on. My open-source projects and technical contributions 
          reflect my commitment to quality engineering, continuous learning, and sharing knowledge with the developer community.
        </Paragraph>

        <HighlightBox style={{ marginTop: "2rem" }}>
          <Paragraph style={{ margin: 0, textAlign: "center", fontSize: "1.2rem", color: "#1457c6", fontWeight: "600" }}>
            "Clean code, scalable systems, and continuous innovation - that's my engineering philosophy."
          </Paragraph>
        </HighlightBox>
      </>
    )
  }
];

export default function About() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef(null);

  const length = aboutPages.length;

  // Auto slide every 8 seconds
  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 8000);
    return () => clearInterval(autoRef.current);
  }, [paused, length]);

  const next = () => {
    setPaused(true);
    setIndex((i) => (i + 1) % length);
  };

  const prev = () => {
    setPaused(true);
    setIndex((i) => (i - 1 + length) % length);
  };

  const currentPage = aboutPages[index];

  return (
    <Section id="about">
      <Container>
        <Heading>
          About <span>Me</span>
        </Heading>

        {/* Tab Navigation */}
        <TabNav>
          {aboutPages.map((page, i) => (
            <TabBtn
              key={page.id}
              $active={i === index}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
            >
              {page.title}
            </TabBtn>
          ))}
        </TabNav>

        {/* Content Slider */}
        <ContentWrapper>
          <AnimatePresence mode="wait">
            <Card
              key={currentPage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {currentPage.content}

              <Controls>
                <NavBtn onClick={prev}>◀</NavBtn>
                <NavBtn onClick={next}>▶</NavBtn>
              </Controls>
            </Card>
          </AnimatePresence>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
