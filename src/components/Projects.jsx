import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: #12233b;
`;

// GRID
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

// CARD
const Card = styled(motion.div)`
  background: rgba(255,255,255,0.26);
  backdrop-filter: blur(12px);
  padding: 1.8rem;
  border-radius: 18px;
  border-left: 6px solid #1457c6;
  box-shadow: 0 16px 40px rgba(12,38,73,0.08);
  transition: 0.4s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(12,38,73,0.15);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: #102235;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.68;
  color: #1b2b3a;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.2rem;
`;

const Badge = styled.span`
  background: linear-gradient(90deg, #1457c6, #764ba2);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  color: white;
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Btn = styled.a`
  flex: 1;
  background: linear-gradient(90deg, #1457c6, #764ba2);
  color: white;
  padding: 0.65rem 1rem;
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

export default function Projects() {
  const projects = [
    {
      name: "Personal Portfolio Website",
      desc: "A modern, animated portfolio featuring React, Styled Components, Framer Motion, and EmailJS with sections like About, Skills, Experience, Education, and Contact.",
      repo: "https://github.com/ArunKumarPal/Portfillio",
      demo: "#",
      tech: ["React", "Framer Motion", "Styled Components", "EmailJS"]
    },
    {
      name: "S3 Bulk File Processor",
      desc: "Bulk processing system that uploads, validates, and processes large files with AWS S3, Kafka, Spark, Redis, and Temporal workflows.",
      repo: "https://github.com/ArunKumarPal/S3-Bulk-File-Processor",
      demo: "#",
      tech: ["Java", "Spring Boot", "AWS S3", "Kafka", "Spark", "Redis", "Temporal"]
    },
    {
      name: "OpenAPI Specification Test Framework",
      desc: "A framework to test OpenAPI spec JSON/YAML with automated validation, schema checks, dynamic test generation, and CI/CD integration.",
      repo: "https://github.com/ArunKumarPal/OpenApiSpecificationTestFramework",
      demo: "#",
      tech: ["Java", "JUnit", "OpenAPI", "CI/CD"]
    },
    {
      name: "API Gateway",
      desc: "Custom API Gateway with token validation, rate limiting, request filtering, and YAML route support for microservice segmentation.",
      repo: "https://github.com/ArunKumarPal/API-Gateway",
      demo: "#",
      tech: ["Spring Boot", "Microservices", "Gateway Filters"]
    },
    {
      name: "OpenAPI Client Test Framework",
      desc: "Client generator and test executor that consumes Swagger JSON and auto-generates typed clients + test suites. Production-ready test automation.",
      repo: "https://github.com/ArunKumarPal/OpenApiClientTestFramework",
      demo: "#",
      tech: ["Java", "Swagger", "Client Generation", "Testing"]
    }
  ];

  return (
    <Section id="projects">
      <Wrapper>
        <Title>Projects</Title>

        <Grid>
          {projects.map((p,i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProjectTitle>{p.name}</ProjectTitle>
              <Description>{p.desc}</Description>

              <BadgeContainer>
                {p.tech.map((t,ind) => (
                  <Badge key={ind}>{t}</Badge>
                ))}
              </BadgeContainer>

              <Buttons>
                <Btn href={p.repo} target="_blank">
                  <FaGithub /> Code
                </Btn>
                <Btn href={p.demo} target="_blank">
                  <FaExternalLinkAlt /> Demo
                </Btn>
              </Buttons>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
}
