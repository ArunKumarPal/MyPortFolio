import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// =======================
// GLASSMORPHISM STYLES
// =======================

const Section = styled.section`
  padding: 6rem 3rem;
  background: linear-gradient(135deg, #eef2f7 0%, #ffffff 100%);
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
  color: #1d1d1d;

  span {
    color: #1457c6;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2.5rem;
`;

// Category Card
const CategoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 2.2rem;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

// Category Header
const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.4rem;

  h3 {
    font-size: 1.7rem;
    font-weight: 700;
    color: #1457c6;
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.4rem;
`;

// Skill Chips
const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillChip = styled(motion.div)`
  background: rgba(255, 255, 255, 0.25);
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 50px;
  font-size: 1.05rem;
  color: #1d1d1d;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.12);
  }
`;

const SkillIcon = styled.div`
  font-size: 1.2rem;
`;

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Skills() {
  return (
    <Section id="skills">
      <Wrapper>
        <Heading>
          Technical <span>Skills</span>
        </Heading>

        <CategoriesGrid>

          {/* LANGUAGES */}
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
              <SkillChip><SkillIcon>☕</SkillIcon>Java</SkillChip>
              <SkillChip><SkillIcon>🐍</SkillIcon>Python</SkillChip>
              <SkillChip><SkillIcon>🟦</SkillIcon>SQL</SkillChip>
              <SkillChip><SkillIcon>🐹</SkillIcon>Go</SkillChip>
            </SkillsList>
          </CategoryCard>

          {/* BACKEND */}
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
            </SkillsList>
          </CategoryCard>

          {/* CLOUD & DEVOPS */}
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
              <SkillChip><SkillIcon>🔵</SkillIcon>Azure</SkillChip>
              <SkillChip><SkillIcon>🟦</SkillIcon>GCP</SkillChip>
              <SkillChip><SkillIcon>🐳</SkillIcon>Docker</SkillChip>
              <SkillChip><SkillIcon>☸️</SkillIcon>Kubernetes</SkillChip>
              <SkillChip><SkillIcon>🛠️</SkillIcon>CI/CD</SkillChip>
              <SkillChip><SkillIcon>🔍</SkillIcon>SonarQube</SkillChip>
              <SkillChip><SkillIcon>📡</SkillIcon>Datadog</SkillChip>
            </SkillsList>
          </CategoryCard>

          {/* DATABASES */}
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

          {/* MESSAGING & TOOLS */}
          <CategoryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CategoryHeader>
              <CategoryIcon>🔧</CategoryIcon>
              <h3>Messaging & Tools</h3>
            </CategoryHeader>

            <SkillsList>
              <SkillChip><SkillIcon>📡</SkillIcon>Kafka</SkillChip>
              <SkillChip><SkillIcon>🔷</SkillIcon>Event Hub</SkillChip>
              <SkillChip><SkillIcon>🧪</SkillIcon>JUnit</SkillChip>
              <SkillChip><SkillIcon>🧰</SkillIcon>Mockito</SkillChip>
              <SkillChip><SkillIcon>📘</SkillIcon>Swagger</SkillChip>
              <SkillChip><SkillIcon>📦</SkillIcon>Terraform</SkillChip>
              <SkillChip><SkillIcon>🐧</SkillIcon>Linux</SkillChip>
              <SkillChip><SkillIcon>💡</SkillIcon>IntelliJ</SkillChip>
            </SkillsList>
          </CategoryCard>

        </CategoriesGrid>
      </Wrapper>
    </Section>
  );
}
