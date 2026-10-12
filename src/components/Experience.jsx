import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Section = styled.section`
  padding: 5rem 2rem;
  min-height: 85vh;
  background: var(--section-grad-b);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.6rem);
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 800;
  color: var(--text-primary);

  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const TopNav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.4rem;
`;

const CompanyBtn = styled.button`
  padding: 0.65rem 1rem;
  border-radius: 999px;
  border: 1px solid ${p => p.$active ? "transparent" : "var(--border-accent)"};
  background: ${p => p.$active ? "var(--accent-gradient)" : "var(--bg-card)"};
  color: ${p => p.$active ? "#fff" : "var(--text-primary)"};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px var(--shadow-card);
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
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1.8rem;
  border-left: 6px solid var(--accent);
  box-shadow: 0 16px 40px var(--shadow-card);
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
  h3 { margin: 0; font-size: 1.3rem; font-weight: 800; color: var(--text-primary); }
  h4 { margin: 0.1rem 0; font-size: 1.05rem; color: var(--accent); font-weight: 700; }
  p.meta { margin: 0; color: var(--text-secondary); font-size: 0.95rem; }
`;

const BulletList = styled.ul`
  margin: 1rem 0 0 1.2rem;
  li { margin-bottom: 0.6rem; color: var(--text-body); line-height: 1.6; }
`;

const ProjectBlock = styled.div`
  margin-top: 0.5rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-accent);
  background: var(--highlight-bg);

  h5 { color: var(--accent); margin: 0 0 0.4rem 0; font-size: 0.95rem; }
  ul { padding-left: 1.1rem; li { margin-bottom: 0.3rem; color: var(--text-body); } }
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
  border: 1px solid var(--border-accent);
  background: var(--bg-card-alt);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--accent-gradient);
    color: #fff;
    border-color: transparent;
  }
`;

const EXPERIENCE = [
  {
    company: "Precisely Software & Data",
    role: "Senior Software Engineer",
    location: "Noida, IN",
    period: "Oct 2021 – Present",
    bullets: [
      "Architected Java-based RESTful microservices with OAuth2/JWT security, robust error handling, and seamless microservices integration, reducing integration defects by 25%.",
      "Engineered high-performance Java APIs using multi-threading, Redis caching, and optimized DB query patterns, improving average API response time by 30%.",
      "Owned deployment of cloud-native Java services on AWS and Kubernetes, designing API Gateway rate limiting, DDoS protection, and centralized logging to harden the security posture.",
      "Led code reviews across multiple modules, enforcing SOLID principles, clean-code, and performance standards that cut production incidents by 40%.",
      "Mentored junior engineers through structured code reviews, pair programming, and Agile best practices, improving delivery quality and onboarding speed.",
      "Built end-to-end observability with Datadog dashboards and alerting; integrated JUnit 5 and Gatling into CI/CD pipelines, improving deployment reliability and incident response.",
      "Adopted spec-driven, LLM-assisted development with GitHub Copilot and Claude AI to accelerate code generation and boilerplate delivery while enforcing quality through peer review.",
      "Drove engineering workflow automation via Linear and GitHub Actions integration (PR-to-issue linking, status sync) and automated MS Teams pipeline notifications."
    ],
    projects: [
      {
        title: "AI-Powered Documentation Assistant",
        bullets: [
          "Built production RAG chatbot on AWS Bedrock with FAISS semantic search, document chunking, and Titan embeddings.",
          "Supported 100+ concurrent users at 99.5% uptime and 95% answer accuracy using async/await, semaphore-based concurrency control, and WebSocket streaming.",
          "Cut AI infrastructure costs by 60% through Redis caching, input deduplication, and tiered model selection.",
          "Implemented confidence scoring, hallucination detection, source citation, circuit breaker, and CloudWatch monitoring."
        ]
      },
      {
        title: "MCP Tool Suite — Geocoding, API Gateway & Service Provisioning",
        bullets: [
          "Built Python MCP servers exposing geocoding APIs as tools so AI agents autonomously build requests and return structured address results.",
          "Enabled agents to add API Gateway routes and Ingress endpoints directly, with no code checkout or manual deployment.",
          "Automated multi-region (US, AUS) service provisioning: repositories, data upload pipelines, and region-specific geocoding services."
        ]
      },
      {
        title: "AI Service Bootstrapper",
        bullets: [
          "Parses SolDef design docs and generates a GitLab project with APIs, DB connections, and deployment files; exposes APIs via API Gateway and raises PRs.",
          "Raises Jira tickets and drafts SLI/SLO documents, cutting a 2–3 day service setup to under an hour."
        ]
      },
      {
        title: "Power Automate Workflow Suite",
        bullets: [
          "Automated leave notifications, sprint overflow analysis (leaves vs. public holidays), and CI/CD pipeline notifications with PR summaries in MS Teams."
        ]
      },
      {
        title: "API Gateway",
        bullets: [
          "Built gateway with token validation, IP rate limiting, YAML routes, and centralized access control."
        ]
      },
      {
        title: "Bulk File Processing",
        bullets: [
          "Built async S3 → Kafka → Spark → S3 pipeline with Temporal retries & Redis status tracking."
        ]
      },
      {
        title: "Runtime Data Pipeline & S3 CSV Chunk Processing",
        bullets: [
          "Implemented an Excel-driven CI/CD pipeline that uploads datasets to S3 and triggers automated Addressing API data refreshes without code changes.",
          "Engineered a high-performance S3 CSV reader using non-overlapping chunks with full multi-byte character support and zero data loss."
        ]
      },
      {
        title: "Swagger Validation Framework",
        bullets: [
          "Built an automated framework validating Swagger schemas, examples, and generated clients for production-ready API specifications."
        ]
      },
      {
        title: "Developer Portal",
        bullets: [
          "Built geocode, autocomplete, phone/email verification APIs using Micronaut, Spring Boot & Go."
        ]
      },
      {
        title: "DIS Data Quality",
        bullets: [
          "Developed grouping operators to classify similar data columns for improved data quality using Spark Streaming.",
          "Implemented address geocoding operator with location points for data standardization and quality enhancement.",
          "Built Spring Boot APIs with RxJava streams for UI visualization of pipeline steps integrated with Databricks."
        ]
      },
      {
        title: "GeoPlaces API - Location-Based Services",
        bullets: [
          "Architected enterprise-grade Elasticsearch-based RESTful API for geographic places and POI search with advanced geospatial capabilities.",
          "Built complex Query DSL with BoolQuery, DisMaxQuery, GeoDistanceQuery, MoreLikeThis, and custom scoring algorithms for relevance tuning.",
          "Implemented geo-point indexing, haversine distance calculations, polygon-based area search, and hierarchical category matching with SIC codes.",
          "Designed ETL pipeline using Logstash for ingesting large-scale POI data from multiple vendors with automated data transformation and validation.",
          "Achieved sub-500ms query response times through field source filtering, efficient pagination, and Elasticsearch index optimization strategies."
        ]
      }
    ]
  },
  {
    company: "Trangile Software Solutions",
    role: "Software Engineer",
    location: "Noida, IN",
    period: "Feb 2020 – Sep 2021",
    bullets: [
      "Designed backend modules using Java, Struts, Spring, Hibernate, and Oracle DB.",
      "Migrated legacy applications from OC4J to JBOSS EAP 7.1 with Java 8 upgrades.",
      "Built schedulers, web services, and UI enhancements for government client (DPW, Dubai).",
      "Created Technical Specification Documents and handled UAT/production releases."
    ],
    projects: [
      {
        title: "Smart Payment System",
        bullets: [
          "Integrated advance deposit & prepaid card payment modes into financial workflows using Spring, Hibernate, and ExtJs."
        ]
      },
      {
        title: "OC4J → JBOSS Migration",
        bullets: [
          "Migrated legacy Java applications from OC4J to JBOSS EAP 7.1 with SOAP web services and database integration."
        ]
      },
      {
        title: "PMS (Customs XML Integration)",
        bullets: [
          "Modified XML format and queries to send port management data to customs system using SOAP web services."
        ]
      },
      {
        title: "Major Damage Scheduler",
        bullets: [
          "Built Java scheduler with cron expressions to execute DB procedures and added UI fields for discount visibility."
        ]
      },
      {
        title: "RMAA Enhancement",
        bullets: [
          "Fixed bugs and implemented enhancements in existing application and web service methods using Spring Boot."
        ]
      }
    ]
  },
  {
    company: "Vinculum Software",
    role: "Associate Software Engineer",
    location: "Noida, IN",
    period: "Jul 2018 – Jan 2020",
    bullets: [
      "Built Java backend modules with Spring, Hibernate, MyBatis, and Oracle database.",
      "Developed UI features using ExtJs, jQuery, Ajax, and JavaScript for port management systems.",
      "Created schedulers, web services, and database integration for DPW Dubai client.",
      "Handled deployment, unit testing, and bug closure for production applications."
    ],
    projects: [
      {
        title: "Landing Certificate (LGP)",
        bullets: [
          "Built gate pass system for goods entry/exit with document grouping feature for multiple companies in single vehicle."
        ]
      },
      {
        title: "EOIL Billing Module",
        bullets: [
          "Created billing module for operation charges on tankers at berth using Java 8, Spring, and JBOSS EAP 7.0."
        ]
      },
      {
        title: "Agent Master Integration",
        bullets: [
          "Built web service to sync data from customs system and created schedulers for database-to-database data transfer using Spring Boot."
        ]
      }
    ]
  }
]

export default function ExperienceTimeline() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const autoRef = useRef(null)
  const length = EXPERIENCE.length

  useEffect(() => {
    if (paused) return
    autoRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % length)
    }, 6000)
    return () => clearInterval(autoRef.current)
  }, [paused, length])

  const next = () => { setPaused(true); setIndex(i => (i + 1) % length) }
  const prev = () => { setPaused(true); setIndex(i => (i - 1 + length) % length) }
  const current = EXPERIENCE[index]

  return (
    <Section id="experience">
      <Container>
        <Heading>Work <span>Experience</span></Heading>

        <TopNav>
          {EXPERIENCE.map((e, i) => (
            <CompanyBtn
              key={i}
              $active={i === index}
              onClick={() => { setIndex(i); setPaused(true) }}
            >
              {e.company}
            </CompanyBtn>
          ))}
        </TopNav>

        <CardWrap>
          <AnimatePresence mode="wait">
            <Card
              key={current.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CardHeader>
                <h3>{current.role}</h3>
                <h4>{current.company}</h4>
                <p className="meta">{current.location} • {current.period}</p>
              </CardHeader>

              <BulletList>
                {current.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </BulletList>

              {current.projects.map((p, i) => (
                <ProjectBlock key={i}>
                  <h5>{p.title}</h5>
                  <ul>
                    {p.bullets.map((x, j) => <li key={j}>{x}</li>)}
                  </ul>
                </ProjectBlock>
              ))}

              <Controls>
                <NavBtn onClick={prev}>◀</NavBtn>
                <NavBtn onClick={next}>▶</NavBtn>
              </Controls>
            </Card>
          </AnimatePresence>
        </CardWrap>
      </Container>
    </Section>
  )
}
