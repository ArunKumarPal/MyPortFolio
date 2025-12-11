// ExperienceTimeline.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// ------------------ Styled Components ------------------

const Section = styled.section`
  padding: 5rem 2rem;
  min-height: 85vh;
  background: linear-gradient(135deg, #f3f7fb 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
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

const CompanyBtn = styled.button`
  padding: 0.65rem 1rem;
  border-radius: 999px;
  border: none;
  background: ${(p) => (p.$active ? "linear-gradient(90deg,#1457c6,#764ba2)" : "rgba(255,255,255,0.35)")};
  color: ${(p) => (p.$active ? "#fff" : "#16324a")};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid rgba(255,255,255,0.6);
  &:hover { transform: translateY(-4px); }
`;

const TimelineTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
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
  h3 { margin:0; font-size:1.3rem; font-weight:800; color:#102235; }
  h4 { margin:0.1rem 0; font-size:1.05rem; color:#1457c6; font-weight:700; }
  p.meta { margin:0; color:#334e6a; font-size:0.95rem; }
`;

const BulletList = styled.ul`
  margin: 1rem 0 0 1.2rem;
  li { margin-bottom: 0.6rem; color:#1b2b3a; line-height:1.6; }
`;

const ProjectBlock = styled.div`
  margin-top: 0.5rem;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);

  h5 { color:#1457c6; margin:0 0 0.2rem 0; }
  ul { padding-left:1.1rem; li { margin-bottom:0.3rem; } }
`;

const Controls = styled.div`
  display:flex;
  justify-content:center;
  gap:0.6rem;
  margin-top:1rem;
`;

const NavBtn = styled.button`
  padding:0.6rem 0.9rem;
  border-radius:8px;
  border:1px solid rgba(0,0,0,0.06);
  background:#fff;
  cursor:pointer;
`;

// ------------------ Experience Data ------------------
const EXPERIENCE = [
  {
    company: "Precisely Software & Data",
    role: "Senior Software Engineer I",
    location: "Noida, IN",
    period: "Oct 2021 – Present",
    bullets: [
      "Developed scalable APIs with performance optimization, OAuth2/JWT security, and robust error handling.",
      "Improved API response times by ~30% using multithreading, Redis caching, and optimized DB queries.",
      "Designed cloud deployments on AWS/GCP/Azure with API Gateway auth, rate limits, logging, DDoS protection.",
      "Mentored developers on Java best practices, patterns, and microservices architecture.",
      "Reduced production issues by ~40% using strict code reviews and SOLID principles.",
      "Integrated JUnit5, TestNG, Gatling into CI/CD for automated test/benchmark pipelines.",
      "Enabled full observability using Datadog, cutting incident response time.",
      "Optimized Kubernetes resources, reducing cloud cost by ~25%."
    ],
    projects: [
      {
        title: "AI-Powered Documentation Assistant",
        bullets: [
          "Built production AI chatbot using AWS Bedrock with RAG pipeline (FAISS) for intelligent documentation search.",
          "Optimized performance through async processing, Redis caching, and WebSocket streaming for real-time responses.",
          "Implemented multi-stage validation with confidence scoring to prevent hallucinations and ensure accuracy."
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
          "Architected Elasticsearch-based RESTful API for geographic places and POI search with geospatial capabilities.",
          "Built advanced Query DSL with BoolQuery, GeoDistanceQuery, and MoreLikeThis for complex search scenarios.",
          "Designed ETL pipeline using Logstash for ingesting large-scale location data with hierarchical category matching."
        ]
      }
    ]
  },
  {
    company: "Trangile Software Solutions",
    role: "Software Engineer",
    location: "Noida, IN",
    period: "Feb 2020 – Aug 2021",
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
];

// ------------------ Component ------------------

export default function ExperienceTimeline() {
  const [index, setIndex] = useState(0); // start with Present (Precisely)
  const [paused, setPaused] = useState(false);
  const autoRef = useRef(null);

  const length = EXPERIENCE.length;

  // Auto slide every 6s
  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 6000);
    return () => clearInterval(autoRef.current);
  }, [paused, length]);

  const next = () => { setPaused(true); setIndex((i) => (i + 1) % length); };
  const prev = () => { setPaused(true); setIndex((i) => (i - 1 + length) % length); };

  const current = EXPERIENCE[index];

  return (
    <Section id="experience">
      <Container>
        <Heading>Experience</Heading>

        {/* Company Tabs */}
        <TopNav>
          {EXPERIENCE.map((e, i) => (
            <CompanyBtn
              key={i}
              $active={i === index}
              onClick={() => { setIndex(i); setPaused(true); }}
            >
              {e.company}
            </CompanyBtn>
          ))}
        </TopNav>

        {/* Timeline Slider */}
        <TimelineTrack>
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
        </TimelineTrack>
      </Container>
    </Section>
  );
}
