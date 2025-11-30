import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// SECTION
const Section = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  min-height: 85vh;
  background: linear-gradient(135deg, #ffffff 0%, #f3f7fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 800;
  color: #12233b;
`;

const TopNav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.4rem;
`;

const ProjectBtn = styled.button`
  padding: 0.65rem 1rem;
  border-radius: 999px;
  border: none;
  background: ${(p) => (p.$active ? "linear-gradient(90deg,#1457c6,#764ba2)" : "rgba(255,255,255,0.35)")};
  color: ${(p) => (p.$active ? "#fff" : "#16324a")};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid rgba(255,255,255,0.6);
  font-size: 0.85rem;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
`;

const Card = styled(motion.div)`
  width: 100%;
  max-width: 920px;
  background: rgba(255,255,255,0.26);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1.8rem;
  border-left: 6px solid #1457c6;
  box-shadow: 0 16px 40px rgba(12, 38, 73, 0.08);
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
    color: #102235;
  }
  p.category {
    margin: 0.3rem 0;
    color: #1457c6;
    font-size: 0.95rem;
    font-weight: 600;
  }
`;

const Description = styled.p`
  line-height: 1.68;
  color: #1b2b3a;
  font-size: 1rem;
  margin: 1rem 0;
`;

const FeatureList = styled.ul`
  margin: 1rem 0;
  padding-left: 1.2rem;
  li {
    margin-bottom: 0.6rem;
    color: #1b2b3a;
    line-height: 1.6;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 1.2rem 0;
`;

const Badge = styled.span`
  background: linear-gradient(90deg, #1457c6, #764ba2);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  color: white;
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Btn = styled.a`
  flex: 1;
  background: linear-gradient(90deg, #1457c6, #764ba2);
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(20, 87, 198, 0.3);
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1rem;
`;

const NavBtn = styled.button`
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export default function Projects() {
  const projects = [
    {
      name: "Personal Portfolio Website",
      shortName: "Portfolio",
      category: "Frontend • React • Live Demo",
      desc: "A modern, responsive portfolio showcasing professional experience, skills, and projects with smooth animations and interactive UI components.",
      features: [
        "Built with React, Styled Components, and Framer Motion for fluid animations",
        "Integrated EmailJS for contact form functionality without backend",
        "Fully responsive design optimized for all devices and screen sizes",
        "Deployed on Vercel with continuous deployment from GitHub"
      ],
      repo: "https://github.com/ArunKumarPal/MyPortFolio",
      demo: "https://arunpal.vercel.app/",
      tech: ["React", "Vite", "Styled Components", "Framer Motion", "EmailJS", "Vercel"]
    },
    {
      name: "Temporal Manager API",
      shortName: "Job Manager",
      category: "Backend • Microservices • Job Processing",
      desc: "Enterprise-grade job processing system managing CSV file uploads, processing, and result retrieval with Temporal workflow orchestration for reliable execution.",
      features: [
        "Secure S3 file management with pre-signed URLs for uploads and downloads",
        "Asynchronous job processing with real-time status tracking and monitoring",
        "Workspace-level concurrency control with configurable parallel execution limits",
        "Automatic job scheduling and queue management when capacity limits reached",
        "Built with Micronaut framework and Temporal for fault-tolerant workflows"
      ],
      repo: "https://github.com/ArunKumarPal/Temoral-Manager-API",
      demo: "#",
      tech: ["Java 21", "Micronaut", "Temporal", "AWS S3", "Redis", "Prometheus", "OpenTelemetry"]
    },
    {
      name: "Temporal Worker - Bulk CSV Processor",
      shortName: "CSV Processor",
      category: "Backend • Distributed Systems • Data Processing",
      desc: "Highly scalable worker application for processing massive CSV files using Temporal workflows with intelligent chunking and parallel processing capabilities.",
      features: [
        "Efficient chunked reading from S3 with parallel processing using configurable worker threads",
        "Line-safe chunk splitting ensuring no overlap or missing data during processing",
        "Batch Kafka publishing with configurable batch sizes and Redis state management",
        "S3 multipart upload support for large output files with automatic retry mechanisms",
        "Optional CASS report generation with detailed processing statistics and metrics"
      ],
      repo: "https://github.com/ArunKumarPal/Temparal-Worker",
      demo: "#",
      tech: ["Java 21", "Micronaut", "Temporal", "Kafka", "Redis", "AWS S3", "Docker"]
    },
    {
      name: "Spring Cloud API Gateway",
      shortName: "API Gateway",
      category: "Backend • Microservices • Security",
      desc: "Production-ready API Gateway serving as single entry point for microservices, providing routing, JWT security, rate limiting, and observability features.",
      features: [
        "Dynamic YAML-based route management with hot-reload support and multi-tenant JWT validation",
        "Redis-backed distributed rate limiting with IP-based and user-based strategies",
        "Circuit breaking and resilience patterns with Resilience4j integration",
        "OpenTelemetry distributed tracing with Prometheus metrics and health checks",
        "OAuth 2.0 Resource Server with JWK Set integration and automatic key rotation"
      ],
      repo: "https://github.com/ArunKumarPal/API-Gateway",
      demo: "#",
      tech: ["Java 21", "Spring Boot", "Spring Cloud Gateway", "Redis", "OAuth2", "Prometheus"]
    },
    {
      name: "OpenAPI Client Test Framework",
      shortName: "OpenAPI Client Testing",
      category: "Testing • Automation • DevOps",
      desc: "Dynamic test framework that generates, compiles, and loads client code at runtime from any Swagger/OpenAPI specification for comprehensive API testing.",
      features: [
        "Automatically generates client code from OpenAPI/Swagger specs without manual intervention",
        "Runtime compilation and dynamic class loading using Java reflection for flexible testing",
        "Support for multiple authentication methods: Bearer Token, API Key, and Basic Auth",
        "Extensible test patterns for GET, POST, PUT, DELETE, and complex nested objects",
        "CI/CD ready with Jenkins, GitHub Actions, and GitLab CI integration examples"
      ],
      repo: "https://github.com/ArunKumarPal/openapi-client-test",
      demo: "#",
      tech: ["Java 21", "JUnit 5", "Swagger Codegen", "OkHttp", "Jackson", "Maven"]
    },
    {
      name: "S3 Bulk File Processor",
      shortName: "File Processor",
      category: "Backend • Data Processing • AWS",
      desc: "Micronaut-based application for processing large files in Amazon S3 with parallel chunk processing and multipart upload capabilities.",
      features: [
        "Memory-efficient chunked reading from S3 using range requests without loading full file",
        "Parallel processing of chunks with configurable worker threads for maximum throughput",
        "Line-safe splitting ensuring no data loss or overlap between chunks",
        "S3 multipart upload support for files larger than 5MB with automatic part management",
        "Extensible processing hooks for custom transformations, validations, and enrichment"
      ],
      repo: "https://github.com/ArunKumarPal/S3-Bulk-File-Processor",
      demo: "#",
      tech: ["Java 21", "Micronaut", "AWS S3", "Maven", "AWS SDK"]
    },
    {
      name: "OpenAPI Specification Test Framework",
      shortName: "Spec Validator",
      category: "Testing • Quality Assurance • API Validation",
      desc: "Comprehensive validation framework ensuring OpenAPI specifications are complete, consistent, and production-ready with automated testing.",
      features: [
        "Validates all required fields: descriptions, examples, schemas, and security definitions",
        "Ensures examples comply with their respective schemas using JSON Schema validation",
        "Checks for proper formatting and prevents invalid substrings in documentation",
        "Validates security schemes and ensures protected paths have appropriate security applied",
        "CI/CD integration ready for automated specification validation in build pipelines"
      ],
      repo: "https://github.com/ArunKumarPal/OpenApiSpecificationTestFramework",
      demo: "#",
      tech: ["Java 21", "JUnit 5", "OpenAPI", "Maven", "JSON Schema"]
    }
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef(null);
  const length = projects.length;

  // Auto slide every 7 seconds
  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 7000);
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

  const current = projects[index];

  return (
    <Section id="projects">
      <Container>
        <Heading>Projects</Heading>

        {/* Project Navigation Tabs */}
        <TopNav>
          {projects.map((p, i) => (
            <ProjectBtn
              key={i}
              $active={i === index}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
            >
              {p.shortName}
            </ProjectBtn>
          ))}
        </TopNav>

        {/* Project Slider */}
        <CardWrap>
          <AnimatePresence mode="wait">
            <Card
              key={current.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CardHeader>
                <h3>{current.name}</h3>
                <p className="category">{current.category}</p>
              </CardHeader>

              <Description>{current.desc}</Description>

              <FeatureList>
                {current.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </FeatureList>

              <BadgeContainer>
                {current.tech.map((t, ind) => (
                  <Badge key={ind}>{t}</Badge>
                ))}
              </BadgeContainer>

              <Buttons>
                <Btn href={current.repo} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </Btn>
                {current.demo !== "#" && (
                  <Btn href={current.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </Btn>
                )}
              </Buttons>

              <Controls>
                <NavBtn onClick={prev}>◀</NavBtn>
                <NavBtn onClick={next}>▶</NavBtn>
              </Controls>
            </Card>
          </AnimatePresence>
        </CardWrap>
      </Container>
    </Section>
  );
}
