import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaBuilding } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  max-width: none;
  padding: 5rem 2rem;
  min-height: 85vh;
  background: var(--section-grad-b);

  @media (max-width: 850px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.6rem);
  text-align: center;
  margin-bottom: 0.6rem;
  font-weight: 800;
  color: var(--text-primary);

  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SubText = styled.p`
  text-align: center;
  color: var(--text-secondary);
  margin: 0 auto 2rem;
  max-width: 680px;
  line-height: 1.6;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.2rem;
`;

const FilterBtn = styled.button`
  padding: 0.6rem 1.15rem;
  border-radius: 999px;
  border: 1px solid ${p => (p.$active ? "transparent" : "var(--border-accent)")};
  background: ${p => (p.$active ? "var(--accent-gradient)" : "var(--bg-card)")};
  color: ${p => (p.$active ? "#fff" : "var(--text-primary)")};
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s ease;

  .count {
    margin-left: 0.45rem;
    font-size: 0.75rem;
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px var(--shadow-card);
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.6rem;
  align-items: start;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.article)`
  position: relative;
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: 18px;
  padding: 1.5rem 1.5rem 1.2rem;
  box-shadow: 0 12px 32px var(--shadow-card);
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background: var(--accent-gradient);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px var(--shadow-card-hover);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  margin-bottom: 0.8rem;
`;

const Icon = styled.div`
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  background: var(--highlight-bg);
  border: 1px solid var(--border-accent);
`;

const TitleBlock = styled.div`
  h3 {
    margin: 0;
    font-size: 1.12rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1.35;
  }
  p {
    margin: 0.25rem 0 0;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--accent);
  }
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.7rem;
  color: var(--accent);
  background: var(--highlight-bg);
  border: 1px solid var(--border-accent);
`;

const Desc = styled.p`
  margin: 0 0 0.9rem;
  color: var(--text-body);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Metrics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.9rem;
`;

const Metric = styled.div`
  padding: 0.35rem 0.7rem;
  border-radius: 10px;
  background: var(--stat-card-bg);
  border: 1px solid var(--stat-card-border);
  font-size: 0.78rem;
  color: var(--text-secondary);

  strong {
    color: var(--accent);
    margin-right: 0.25rem;
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 0.9rem;
`;

const Chip = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-card-alt);
  border: 1px solid var(--border-accent);
`;

const Details = styled(motion.div)`
  overflow: hidden;

  ul {
    margin: 0 0 1rem;
    padding-left: 1.1rem;
  }
  li {
    margin-bottom: 0.55rem;
    color: var(--text-body);
    line-height: 1.55;
    font-size: 0.9rem;
  }
  li strong {
    color: var(--text-primary);
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

const ToggleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border-accent);
  background: transparent;
  color: var(--accent);
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    transition: transform 0.25s ease;
    transform: rotate(${p => (p.$open ? "180deg" : "0deg")});
  }

  &:hover {
    background: var(--highlight-bg);
  }
`;

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: var(--accent-gradient);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-card-hover);
  }
`;

const CATEGORIES = ["All", "AI & Agentic", "Backend", "Data", "Automation", "Testing"];

const PROJECTS = [
  {
    name: "AI-Powered Documentation Assistant",
    icon: "🧠",
    category: "AI & Agentic",
    subtitle: "AWS Bedrock • RAG • LLM • Production",
    official: true,
    desc: "Production RAG chatbot on AWS Bedrock delivering context-aware answers over product documentation with streaming responses.",
    metrics: [["100+", "concurrent users"], ["99.5%", "uptime"], ["95%", "accuracy"], ["60%", "cost cut"]],
    details: [
      ["RAG Pipeline", "Semantic search using FAISS, document chunking, and AWS Bedrock Titan embeddings."],
      ["Scale & Accuracy", "Async/await, semaphore-based concurrency control, and WebSocket streaming for 100+ concurrent users."],
      ["Cost Optimization", "Cut AI infrastructure costs by 60% via Redis caching, input deduplication, and tiered model selection."],
      ["Reliability", "LLM-based confidence scoring, hallucination detection, source citation, circuit breaker, exponential backoff, graceful degradation, and CloudWatch monitoring with distributed tracing."]
    ],
    tech: ["Python", "AWS Bedrock", "FAISS", "Titan Embeddings", "Redis", "WebSocket", "CloudWatch"]
  },
  {
    name: "MCP Tool Suite",
    icon: "🛠️",
    category: "AI & Agentic",
    subtitle: "Geocoding • API Gateway • Service Provisioning",
    official: true,
    desc: "Python MCP servers that let AI agents call geocoding APIs, change live API Gateway routes, and provision regional services end-to-end.",
    metrics: [["3", "MCP servers"], ["0", "manual deploys"]],
    details: [
      ["Geocoding MCP", "Exposes geocoding APIs as MCP tools so AI agents autonomously select the right tool, construct requests, and return structured address results."],
      ["API Gateway Route Manager MCP", "Lets agents add API Gateway routes and enable Ingress endpoints directly — live infrastructure changes with no code checkout or manual deployment."],
      ["Service Provisioning MCP", "Automates multi-region setup (e.g. US, AUS): creates repositories, configures data upload pipelines, and provisions region-specific geocoding services."]
    ],
    tech: ["Python", "MCP", "AWS", "Agentic AI", "Kubernetes Ingress"]
  },
  {
    name: "AI Service Bootstrapper",
    icon: "🚀",
    category: "AI & Agentic",
    subtitle: "Design Doc → Production-Ready Service",
    official: true,
    desc: "Agentic workflow that turns a technical design document into a fully scaffolded, gateway-exposed service with PRs and Jira tickets.",
    metrics: [["2–3 days", "→ under 1 hour"]],
    details: [
      ["Design-Doc Parsing", "Reads a SolDef design document and extracts service name, tech stack, request/response schemas, and infra needs (Redis, database)."],
      ["Automated Delivery", "Creates the GitLab project with generated APIs, DB connections, and deployment files; exposes APIs via API Gateway and raises PRs."],
      ["Ticketing & Reliability Docs", "Raises Jira tickets (including platform-team infra tickets) and drafts SLI/SLO documents with PRs."]
    ],
    tech: ["LLM", "Agentic AI", "GitLab", "Jira", "API Gateway"]
  },
  {
    name: "Spring Cloud API Gateway",
    icon: "🛡️",
    category: "Backend",
    subtitle: "Microservices • Security • Observability",
    official: false,
    desc: "Production-ready gateway acting as the single entry point for microservices with routing, security, rate limiting, and tracing.",
    metrics: [["Hot-reload", "routing"], ["Multi-tenant", "JWT"]],
    details: [
      ["Routing", "Dynamic YAML-based routes with hot-reload support."],
      ["Security", "Multi-tenant JWT validation, OAuth 2.0 Resource Server with JWK Set and automatic key rotation."],
      ["Rate Limiting", "Redis-backed IP- and user-based distributed rate limiting."],
      ["Resilience & Observability", "Resilience4j circuit breaking, OpenTelemetry tracing, and Prometheus metrics."]
    ],
    tech: ["Java 21", "Spring Cloud Gateway", "Redis", "OAuth2", "Resilience4j", "OpenTelemetry", "Prometheus"],
    repo: "https://github.com/ArunKumarPal/API-Gateway"
  },
  {
    name: "Bulk File Processing Platform",
    icon: "📦",
    category: "Data",
    subtitle: "AWS S3 • Kafka • Spark • Temporal",
    official: true,
    desc: "Asynchronous large-file processing platform with chunked processing, fault-tolerant workflow retries, and secure exports.",
    metrics: [["Chunked", "processing"], ["Auto", "retries"]],
    details: [
      ["Pipeline", "S3 → Kafka → Spark → S3 with Temporal Workflow orchestration and Redis status tracking."],
      ["Throughput", "Chunk-based processing and S3 multipart uploads for very large files."],
      ["Reliability", "Fault-tolerant workflow retries and secure pre-signed URL CSV exports."]
    ],
    tech: ["Java", "AWS S3", "Kafka", "Apache Spark", "Temporal", "Redis"]
  },
  {
    name: "Temporal Manager API",
    icon: "⏱️",
    category: "Backend",
    subtitle: "Microservices • Job Orchestration",
    official: false,
    desc: "Job manager for CSV upload, processing, and result retrieval with Temporal workflow orchestration.",
    details: [
      ["S3 Files", "Secure pre-signed URLs for uploads and downloads."],
      ["Job Tracking", "Asynchronous processing with real-time status tracking."],
      ["Concurrency", "Workspace-level concurrency limits with automatic queuing when capacity is reached."]
    ],
    tech: ["Java 21", "Micronaut", "Temporal", "AWS S3", "Redis", "OpenTelemetry"],
    repo: "https://github.com/ArunKumarPal/Temoral-Manager-API"
  },
  {
    name: "Temporal Worker — Bulk CSV Processor",
    icon: "⚙️",
    category: "Data",
    subtitle: "Distributed Systems • Data Processing",
    official: false,
    desc: "Scalable worker processing massive CSV files with intelligent chunking, parallelism, and batch Kafka publishing.",
    details: [
      ["Parallel Reads", "Chunked S3 reads processed by configurable worker threads."],
      ["Data Safety", "Line-safe chunk splitting with no overlap or missing data."],
      ["Output", "Batch Kafka publishing, Redis state, S3 multipart uploads, optional CASS reports."]
    ],
    tech: ["Java 21", "Micronaut", "Temporal", "Kafka", "Redis", "AWS S3", "Docker"],
    repo: "https://github.com/ArunKumarPal/Temparal-Worker"
  },
  {
    name: "S3 CSV Chunk Processor",
    icon: "📄",
    category: "Data",
    subtitle: "AWS S3 • High Performance I/O",
    official: false,
    desc: "High-performance reader for large S3 files using range requests and non-overlapping chunks with full multi-byte support.",
    metrics: [["0", "data loss"]],
    details: [
      ["Memory Efficient", "Range-request reads without loading the full file."],
      ["Correctness", "Non-overlapping, line-safe chunks with full multi-byte character support."],
      ["Extensible", "Hooks for custom transformations, validation, and enrichment; multipart output upload."]
    ],
    tech: ["Java 21", "Micronaut", "AWS S3", "AWS SDK"],
    repo: "https://github.com/ArunKumarPal/S3-Bulk-File-Processor"
  },
  {
    name: "DIS Data Quality Pipeline",
    icon: "🧹",
    category: "Data",
    subtitle: "Spark Streaming • Databricks",
    official: true,
    desc: "Streaming data-quality pipelines with grouping and geocoding operators that automate corrections and reduce manual effort.",
    details: [
      ["Grouping Operator", "Classifies similar data columns to improve data quality."],
      ["Geocoding Operator", "Enriches addresses with location points for standardization."],
      ["Visualization APIs", "Spring Boot + RxJava APIs to visualize pipeline steps integrated with Databricks."]
    ],
    tech: ["Spark Streaming", "Databricks", "Spring Boot", "RxJava"]
  },
  {
    name: "Runtime Data Pipeline",
    icon: "🔄",
    category: "Automation",
    subtitle: "CI/CD • AWS S3 • Addressing API",
    official: true,
    desc: "Excel-driven CI/CD pipeline that uploads datasets to S3 and triggers automated data refresh for the Addressing API — no code changes needed.",
    details: [
      ["Config-Driven", "Excel sheet defines datasets; pipeline uploads to S3 automatically."],
      ["Zero-Code Refresh", "Triggers downstream refresh workflows for the Addressing API."]
    ],
    tech: ["CI/CD", "AWS S3", "GitLab", "Python"]
  },
  {
    name: "Power Automate Workflow Suite",
    icon: "🤖",
    category: "Automation",
    subtitle: "Power Automate • MS Teams • CI/CD",
    official: true,
    desc: "Team productivity automations surfacing capacity risks and pipeline status directly in Microsoft Teams.",
    details: [
      ["Leave Notifications", "Same-day and next-day leave alerts to the team channel for daily capacity visibility."],
      ["Sprint Overflow Analyzer", "Cross-references leave schedules with public holidays to flag sprint capacity risk before sprint start."],
      ["CI/CD Pipeline Notifier", "Posts adapter run status, failure alerts, and PR summaries with direct links for one-click review."]
    ],
    tech: ["Power Automate", "MS Teams", "CI/CD", "GitHub Actions", "Linear"]
  },
  {
    name: "GeoPlaces API",
    icon: "📍",
    category: "Backend",
    subtitle: "Elasticsearch • Geospatial Search",
    official: true,
    desc: "RESTful API for places and POI search with advanced Elasticsearch geospatial capabilities over large-scale location data.",
    metrics: [["<500ms", "queries"]],
    details: [
      ["Query DSL", "BoolQuery, DisMaxQuery, FunctionScoreQuery, GeoDistanceQuery, MoreLikeThis, and custom scoring."],
      ["Geospatial", "Geo-point indexing, haversine distance, polygon and bounding-box search."],
      ["Ingestion", "Logstash ETL for millions of POI records from multiple vendors."],
      ["Search UX", "SIC-code category matching, autocomplete, and fuzzy matching."]
    ],
    tech: ["Java 21", "Elasticsearch", "Spring Boot", "Logstash", "AWS"]
  },
  {
    name: "Swagger / OpenAPI Spec Validator",
    icon: "✅",
    category: "Testing",
    subtitle: "API Quality • Automation",
    official: false,
    desc: "Automated framework validating Swagger schemas, examples, and security definitions for production-ready API specs.",
    details: [
      ["Completeness", "Validates descriptions, examples, schemas, and security definitions."],
      ["Consistency", "Ensures examples comply with JSON Schema; protected paths have security applied."],
      ["CI Ready", "Runs in build pipelines for automated spec validation."]
    ],
    tech: ["Java 21", "JUnit 5", "OpenAPI", "JSON Schema"],
    repo: "https://github.com/ArunKumarPal/OpenApiSpecificationTestFramework"
  },
  {
    name: "OpenAPI Client Test Framework",
    icon: "🧪",
    category: "Testing",
    subtitle: "Generated Clients • Runtime Compilation",
    official: false,
    desc: "Generates, compiles, and loads client code at runtime from any OpenAPI spec to test generated clients end-to-end.",
    details: [
      ["Codegen", "Generates clients from OpenAPI/Swagger specs automatically."],
      ["Runtime Loading", "Compiles and loads classes dynamically via reflection."],
      ["Auth Support", "Bearer token, API key, and Basic auth; CI examples for Jenkins, GitHub Actions, GitLab."]
    ],
    tech: ["Java 21", "JUnit 5", "Swagger Codegen", "OkHttp", "Jackson"],
    repo: "https://github.com/ArunKumarPal/openapi-client-test"
  },
  {
    name: "Personal Portfolio Website",
    icon: "🌐",
    category: "Automation",
    subtitle: "React • Vite • Vercel",
    official: false,
    desc: "This site — responsive portfolio with dark mode, animations, and a serverless contact form.",
    details: [
      ["Stack", "React, Styled Components, Framer Motion, EmailJS."],
      ["Delivery", "Continuous deployment to Vercel from GitHub."]
    ],
    tech: ["React", "Vite", "Styled Components", "Framer Motion", "Vercel"],
    repo: "https://github.com/ArunKumarPal/MyPortFolio",
    demo: "https://arunpal.vercel.app/"
  }
];

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
    >
      <CardTop>
        <Icon aria-hidden="true">{project.icon}</Icon>
        <TitleBlock>
          <h3>{project.name}</h3>
          <p>{project.subtitle}</p>
        </TitleBlock>
      </CardTop>

      {project.official && <Tag><FaBuilding /> Professional · Precisely</Tag>}

      <Desc>{project.desc}</Desc>

      {project.metrics && (
        <Metrics>
          {project.metrics.map(([value, label]) => (
            <Metric key={label}><strong>{value}</strong>{label}</Metric>
          ))}
        </Metrics>
      )}

      <Chips>
        {project.tech.map(t => <Chip key={t}>{t}</Chip>)}
      </Chips>

      <AnimatePresence initial={false}>
        {open && (
          <Details
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {project.details.map(([title, text]) => (
                <li key={title}><strong>{title}:</strong> {text}</li>
              ))}
            </ul>
          </Details>
        )}
      </AnimatePresence>

      <Footer>
        <ToggleBtn $open={open} onClick={() => setOpen(o => !o)} aria-expanded={open}>
          {open ? "Hide details" : "View details"} <FaChevronDown />
        </ToggleBtn>
        {project.repo && (
          <LinkBtn href={project.repo} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Code
          </LinkBtn>
        )}
        {project.demo && (
          <LinkBtn href={project.demo} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live
          </LinkBtn>
        )}
      </Footer>
    </Card>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const countFor = c => (c === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === c).length);

  return (
    <Section id="projects">
      <Container>
        <Heading>Key <span>Projects</span></Heading>
        <SubText>
          Production systems, agentic AI tooling, and open-source work. Professional projects are
          proprietary, so source links are available only for personal repositories.
        </SubText>

        <FilterBar>
          {CATEGORIES.map(c => (
            <FilterBtn key={c} $active={filter === c} onClick={() => setFilter(c)}>
              {c}<span className="count">{countFor(c)}</span>
            </FilterBtn>
          ))}
        </FilterBar>

        <Grid layout>
          <AnimatePresence>
            {visible.map(p => <ProjectCard key={p.name} project={p} />)}
          </AnimatePresence>
        </Grid>
      </Container>
    </Section>
  );
}
