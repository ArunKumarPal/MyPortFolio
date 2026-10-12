import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 6rem 3rem;
  background: var(--section-grad-a);
  min-height: 100vh;

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3.5rem;
  color: var(--text-primary);

  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2.5rem;
`;

const CategoryCard = styled(motion.div)`
  background: var(--bg-card);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 2.2rem;
  box-shadow: 0 15px 45px var(--shadow-card);
  border: 1px solid var(--border-glass);
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.4rem;

  h3 {
    font-size: 1.7rem;
    font-weight: 700;
    color: var(--accent);
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.4rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillChip = styled(motion.div)`
  background: var(--bg-card-alt);
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 50px;
  font-size: 1.05rem;
  color: var(--text-body);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-glass);
  box-shadow: 0 4px 16px var(--shadow-card);
  cursor: default;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 22px var(--shadow-card-hover);
  }
`;

const SkillIcon = styled.div`
  font-size: 1.2rem;
`;

export default function Skills() {
  return (
    <Section id="skills">
      <Wrapper>
        <Heading>
          Technical <span>Skills</span>
        </Heading>

        <CategoriesGrid>

          <CategoryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CategoryHeader>
              <CategoryIcon>🧩</CategoryIcon>
              <h3>Languages</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillChip><SkillIcon>☕</SkillIcon>Java 8-21</SkillChip>
              <SkillChip><SkillIcon>🐍</SkillIcon>Python</SkillChip>
              <SkillChip><SkillIcon>🟦</SkillIcon>SQL</SkillChip>
              <SkillChip><SkillIcon>🐹</SkillIcon>Go</SkillChip>
              <SkillChip><SkillIcon>💛</SkillIcon>JavaScript</SkillChip>
              <SkillChip><SkillIcon>🅰️</SkillIcon>Angular</SkillChip>
              <SkillChip><SkillIcon>🧩</SkillIcon>ExtJS / jQuery</SkillChip>
            </SkillsList>
          </CategoryCard>

          <CategoryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CategoryHeader>
              <CategoryIcon>⚙️</CategoryIcon>
              <h3>Backend Frameworks</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillChip><SkillIcon>🌱</SkillIcon>Spring Boot</SkillChip>
              <SkillChip><SkillIcon>🔥</SkillIcon>Micronaut</SkillChip>
              <SkillChip><SkillIcon>☁️</SkillIcon>Spring Cloud</SkillChip>
              <SkillChip><SkillIcon>🛢️</SkillIcon>Hibernate / JPA</SkillChip>
              <SkillChip><SkillIcon>⚡</SkillIcon>Reactive</SkillChip>
              <SkillChip><SkillIcon>🔗</SkillIcon>Microservices</SkillChip>
              <SkillChip><SkillIcon>🔐</SkillIcon>OAuth2 / JWT</SkillChip>
              <SkillChip><SkillIcon>🧵</SkillIcon>Multithreading</SkillChip>
            </SkillsList>
          </CategoryCard>

          <CategoryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CategoryHeader>
              <CategoryIcon>☁️</CategoryIcon>
              <h3>Cloud & DevOps</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillChip><SkillIcon>🟧</SkillIcon>AWS</SkillChip>
              <SkillChip><SkillIcon>�</SkillIcon>Docker</SkillChip>
              <SkillChip><SkillIcon>☸️</SkillIcon>Kubernetes</SkillChip>
              <SkillChip><SkillIcon>🛠️</SkillIcon>Jenkins</SkillChip>
              <SkillChip><SkillIcon>🦊</SkillIcon>GitLab CI</SkillChip>
              <SkillChip><SkillIcon>🐙</SkillIcon>GitHub Actions</SkillChip>
              <SkillChip><SkillIcon>🔍</SkillIcon>SonarQube</SkillChip>
              <SkillChip><SkillIcon>📡</SkillIcon>Datadog</SkillChip>
              <SkillChip><SkillIcon>☁️</SkillIcon>CloudWatch</SkillChip>
              <SkillChip><SkillIcon>⚡</SkillIcon>Power Automate</SkillChip>
            </SkillsList>
          </CategoryCard>

          <CategoryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CategoryHeader>
              <CategoryIcon>🛢️</CategoryIcon>
              <h3>Databases</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillChip><SkillIcon>🐘</SkillIcon>PostgreSQL</SkillChip>
              <SkillChip><SkillIcon>🐬</SkillIcon>MySQL</SkillChip>
              <SkillChip><SkillIcon>🟠</SkillIcon>Oracle</SkillChip>
              <SkillChip><SkillIcon>🍃</SkillIcon>MongoDB</SkillChip>
              <SkillChip><SkillIcon>🟥</SkillIcon>Redis</SkillChip>
            </SkillsList>
          </CategoryCard>

          <CategoryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CategoryHeader>
              <CategoryIcon>🤖</CategoryIcon>
              <h3>AI & LLM</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillChip><SkillIcon>🧠</SkillIcon>AWS Bedrock</SkillChip>
              <SkillChip><SkillIcon>📚</SkillIcon>RAG</SkillChip>
              <SkillChip><SkillIcon>🔍</SkillIcon>FAISS</SkillChip>
              <SkillChip><SkillIcon>🧬</SkillIcon>Titan Embeddings</SkillChip>
              <SkillChip><SkillIcon>🔌</SkillIcon>MCP Servers</SkillChip>
              <SkillChip><SkillIcon>🤖</SkillIcon>Agentic AI</SkillChip>
              <SkillChip><SkillIcon>✍️</SkillIcon>Prompt Engineering</SkillChip>
              <SkillChip><SkillIcon>👨‍💻</SkillIcon>GitHub Copilot</SkillChip>
              <SkillChip><SkillIcon>💬</SkillIcon>Claude AI</SkillChip>
              <SkillChip><SkillIcon>🔎</SkillIcon>Elasticsearch</SkillChip>
              <SkillChip><SkillIcon>🌐</SkillIcon>WebSocket</SkillChip>
            </SkillsList>
          </CategoryCard>

          <CategoryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CategoryHeader>
              <CategoryIcon>🔧</CategoryIcon>
              <h3>Data, Testing & Observability</h3>
            </CategoryHeader>
            <SkillsList>
              <SkillChip><SkillIcon>📡</SkillIcon>Kafka</SkillChip>
              <SkillChip><SkillIcon>⏱️</SkillIcon>Temporal</SkillChip>
              <SkillChip><SkillIcon>⚡</SkillIcon>Apache Spark</SkillChip>
              <SkillChip><SkillIcon>🔄</SkillIcon>Apache Airflow</SkillChip>
              <SkillChip><SkillIcon>🐘</SkillIcon>Hadoop</SkillChip>
              <SkillChip><SkillIcon>🧱</SkillIcon>Databricks</SkillChip>
              <SkillChip><SkillIcon>🧪</SkillIcon>JUnit 5</SkillChip>
              <SkillChip><SkillIcon>🧰</SkillIcon>Mockito</SkillChip>
              <SkillChip><SkillIcon>📊</SkillIcon>Gatling</SkillChip>
              <SkillChip><SkillIcon>🛡️</SkillIcon>Resilience4j</SkillChip>
              <SkillChip><SkillIcon>🔭</SkillIcon>OpenTelemetry</SkillChip>
              <SkillChip><SkillIcon>📈</SkillIcon>Prometheus</SkillChip>
              <SkillChip><SkillIcon>📘</SkillIcon>Swagger</SkillChip>
              <SkillChip><SkillIcon>🩺</SkillIcon>JVM Tuning</SkillChip>
            </SkillsList>
          </CategoryCard>

        </CategoriesGrid>
      </Wrapper>
    </Section>
  )
}
