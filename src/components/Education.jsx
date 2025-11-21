import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// ---------------- Styled Components ----------------

const Section = styled.section`
  padding: 5rem 2rem;
  min-height: 85vh;
  background: linear-gradient(135deg, #ffffff 0%, #f3f7fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: #12233b;
`;

const TimelineNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
`;

const NavBtn = styled.button`
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: ${(p) =>
    p.$active ? "linear-gradient(90deg,#1457c6,#764ba2)" : "rgba(255,255,255,0.5)"};
  border: none;
  color: ${(p) => (p.$active ? "#fff" : "#16324a")};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    transform: translateY(-3px);
  }
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  background: rgba(255,255,255,0.26);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 1.8rem;
  border-left: 6px solid #1457c6;
  box-shadow: 0 16px 40px rgba(12,38,73,0.08);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  color: #102235;
`;

const SubTitle = styled.h4`
  margin: 0.3rem 0;
  font-size: 1.1rem;
  color: #1457c6;
  font-weight: 700;
`;

const Meta = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #334e6a;
`;

const Paragraph = styled.p`
  margin-top: 1.2rem;
  line-height: 1.68;
  color: #1b2b3a;
  font-size: 1rem;
`;

const Controls = styled.div`
  display:flex;
  justify-content:center;
  gap:0.6rem;
  margin-top:1.6rem;
`;

const ArrowBtn = styled.button`
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.06);
  background: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #1457c6;
    color: #fff;
  }
`;


// ---------------- Education Data ----------------

const EDUCATION = [
  {
    id: 0,
    school: "Sunderdeep Engineering College",
    degree: "Bachelor of Technology (Computer Science Engineering)",
    university: "Dr. APJ Abdul Kalam Technical University",
    period: "2014 – 2018",
    score: "CGPA: 7.4",
    description: `
      Completed a comprehensive 4-year program in Computer Science Engineering focused on 
      software development, data structures, algorithms, operating systems, networking, and 
      distributed systems. Developed strong technical foundations in Java, databases, system 
      architecture, and scalable backend engineering. Actively participated in technical workshops, 
      coding sessions, and final-year projects, gaining hands-on experience in building reliable and 
      high-performance applications.
    `
  },
  {
    id: 1,
    school: "H.N.S. Inter College",
    degree: "Intermediate (PCM)",
    period: "Score: 85%",
    description: `
      Completed senior secondary education with Physics, Chemistry, and Mathematics, forming 
      the foundation for strong analytical and logical reasoning abilities. Developed an interest in 
      programming and problem-solving through mathematics and science.
    `
  },
  {
    id: 2,
    school: "H.N.S. Inter College",
    degree: "High School",
    period: "Score: 86%",
    description: `
      Completed high school education with excellent academic performance. Built a strong base in 
      mathematics, reasoning, and scientific concepts that later contributed to engineering and software 
      development learning.
    `
  }
];


// ---------------- Component ----------------

export default function Education() {
  const [index, setIndex] = useState(0);
  const length = EDUCATION.length;

  const next = () => setIndex((prev) => (prev + 1) % length);
  const prev = () => setIndex((prev) => (prev - 1 + length) % length);

  const current = EDUCATION[index];

  return (
    <Section id="education">
      <Container>
        <Heading>Education</Heading>

        <TimelineNav>
          {EDUCATION.map((edu, i) => (
            <NavBtn
              key={i}
              $active={i === index}
              onClick={() => setIndex(i)}
            >
              {edu.school}
            </NavBtn>
          ))}
        </TimelineNav>

        <CardWrap>
          <AnimatePresence mode="wait">
            <Card
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Title>{current.degree}</Title>
              <SubTitle>{current.school}</SubTitle>

              {current.university && (
                <Meta>Affiliated to {current.university}</Meta>
              )}

              <Meta>{current.period}</Meta>
              {current.score && <Meta>{current.score}</Meta>}

              <Paragraph>{current.description}</Paragraph>

              <Controls>
                <ArrowBtn onClick={prev}>◀</ArrowBtn>
                <ArrowBtn onClick={next}>▶</ArrowBtn>
              </Controls>
            </Card>
          </AnimatePresence>
        </CardWrap>
      </Container>
    </Section>
  );
}
