import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useInView, animate } from "framer-motion";
import {
  FaServer, FaCloud, FaRobot, FaStream,
  FaMapMarkerAlt, FaBriefcase, FaBuilding, FaCode,
  FaCheckCircle, FaArrowRight
} from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  max-width: none;
  padding: 6rem 2rem;
  background: var(--bg-s2);

  @media (max-width: 900px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Eyebrow = styled.p`
  text-align: center;
  margin: 0 0 0.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  text-align: center;
  color: var(--text-primary);
  margin: 0 0 3rem;

  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Glass = styled(motion.div)`
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: 20px;
  box-shadow: 0 14px 36px var(--shadow-card);
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 1.8rem;
  margin-bottom: 3rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const Intro = styled(Glass)`
  padding: 2.2rem;
  border-left: 6px solid var(--accent);

  h3 {
    margin: 0 0 1rem;
    font-size: 1.45rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1.35;
  }

  p {
    margin: 0 0 1rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--text-body);
  }

  strong {
    color: var(--text-primary);
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const Facts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.4rem 0 1.6rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-size: 0.95rem;
    color: var(--text-body);
  }

  svg {
    flex-shrink: 0;
    color: var(--accent);
  }

  small {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
  }
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  background: var(--accent-gradient);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px var(--shadow-card-hover);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-content: start;
`;

const Stat = styled(Glass)`
  padding: 1.4rem 1.2rem;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .value {
    display: block;
    font-size: 2.1rem;
    font-weight: 800;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .label {
    display: block;
    margin-top: 0.3rem;
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.4;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 1.4rem;
  text-align: center;
`;

const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.4rem;
  margin-bottom: 3rem;
`;

const FocusCard = styled(Glass)`
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background: var(--accent-gradient);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 40px var(--shadow-card-hover);
  }

  h4 {
    margin: 0.9rem 0 0.5rem;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-primary);
  }

  p {
    margin: 0 0 1rem;
    font-size: 0.93rem;
    line-height: 1.6;
    color: var(--text-body);
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  color: #fff;
  background: var(--accent-gradient);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    padding: 3px 9px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--bg-card-alt);
    border: 1px solid var(--border-accent);
  }
`;

const Principles = styled(Glass)`
  padding: 1.8rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem 2rem;
  background: var(--highlight-bg);
  border: 1px solid var(--border-accent);

  > div {
    display: flex;
    gap: 0.7rem;
    align-items: flex-start;
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: var(--accent);
  }

  strong {
    display: block;
    color: var(--text-primary);
    font-size: 0.98rem;
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
`;

const FACTS = [
  { icon: <FaBriefcase />, label: "Role", value: "Senior Software Engineer" },
  { icon: <FaBuilding />, label: "Company", value: "Precisely Software & Data" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Ghaziabad, India" },
  { icon: <FaCode />, label: "Primary Stack", value: "Java · Spring Boot · AWS" }
];

const STATS = [
  { to: 8, suffix: "+", label: "Years building backend systems" },
  { to: 30, suffix: "%", label: "Faster API response times" },
  { to: 40, suffix: "%", label: "Fewer production incidents" },
  { to: 25, suffix: "%", label: "Fewer integration defects" },
  { to: 99.5, suffix: "%", decimals: 1, label: "Uptime on production RAG chatbot" },
  { to: 60, suffix: "%", label: "AI infrastructure cost cut" }
];

const FOCUS = [
  {
    icon: <FaServer />,
    title: "Backend & Microservices",
    text: "Secure, high-throughput Java APIs with OAuth2/JWT, multithreading, Redis caching, and tuned DB access.",
    tags: ["Java", "Spring Boot", "Micronaut", "REST", "JVM Tuning"]
  },
  {
    icon: <FaRobot />,
    title: "AI & Agentic Systems",
    text: "Production RAG on AWS Bedrock, Python MCP servers for AI agents, and design-doc-to-service automation.",
    tags: ["AWS Bedrock", "RAG", "FAISS", "MCP", "Claude AI"]
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    text: "Cloud-native services on AWS and Kubernetes with API Gateway hardening, CI/CD, and Datadog observability.",
    tags: ["AWS", "Kubernetes", "Docker", "GitHub Actions", "Datadog"]
  },
  {
    icon: <FaStream />,
    title: "Data & Distributed",
    text: "Fault-tolerant large-file and streaming pipelines with Kafka, Spark, Temporal, and Databricks.",
    tags: ["Kafka", "Spark", "Temporal", "Databricks", "S3"]
  }
];

const PRINCIPLES = [
  { title: "Clean, reviewable code", text: "SOLID principles and rigorous code reviews across modules." },
  { title: "Observability first", text: "Dashboards, tracing, and alerts before features go live." },
  { title: "AI as a force multiplier", text: "Spec-driven, LLM-assisted delivery with peer-reviewed quality." },
  { title: "Grow the team", text: "Mentoring through pairing, reviews, and Agile best practices." }
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }
};

function CountUp({ to, decimals = 0, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: setValue });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref} className="value">{value.toFixed(decimals)}{suffix}</span>;
}

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Eyebrow>Get to know me</Eyebrow>
        <Heading>About <span>Me</span></Heading>

        <TopGrid>
          <Intro {...fadeUp} transition={{ duration: 0.6 }}>
            <h3>I build Java backends that scale, and the AI tooling that helps teams ship them faster.</h3>
            <p>
              I'm a <strong>Senior Java Backend Engineer</strong> with <strong>8+ years</strong> of experience
              delivering scalable microservices and production AI systems. At <strong>Precisely</strong>, I design
              secure, high-performance APIs with Spring Boot and Micronaut, deployed on AWS and Kubernetes.
            </p>
            <p>
              Lately I've focused on <strong>agentic AI</strong>: a RAG documentation assistant on AWS Bedrock,
              Python <strong>MCP servers</strong> that let agents change live infrastructure, and a bootstrapper
              that turns a design doc into a production-ready service in under an hour.
            </p>

            <Facts>
              {FACTS.map(f => (
                <li key={f.label}>
                  {f.icon}
                  <div><small>{f.label}</small>{f.value}</div>
                </li>
              ))}
            </Facts>

            <CTA href="#contact">Let's work together <FaArrowRight /></CTA>
          </Intro>

          <StatsGrid>
            {STATS.map((s, i) => (
              <Stat key={s.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                <span className="label">{s.label}</span>
              </Stat>
            ))}
          </StatsGrid>
        </TopGrid>

        <SubHeading>What I Do</SubHeading>
        <FocusGrid>
          {FOCUS.map((f, i) => (
            <FocusCard key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <IconBox aria-hidden="true">{f.icon}</IconBox>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
              <Tags>{f.tags.map(t => <span key={t}>{t}</span>)}</Tags>
            </FocusCard>
          ))}
        </FocusGrid>

        <SubHeading>How I Work</SubHeading>
        <Principles {...fadeUp} transition={{ duration: 0.6 }}>
          {PRINCIPLES.map(p => (
            <div key={p.title}>
              <FaCheckCircle />
              <div>
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </div>
            </div>
          ))}
        </Principles>
      </Container>
    </Section>
  );
}
