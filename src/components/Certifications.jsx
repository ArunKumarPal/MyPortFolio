import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCertificate, FaTrophy, FaMedal } from "react-icons/fa";

import spotAwardNov2023 from "../pick/awards/spot-Nov-2023.jpg";
import spotAwardJune2022 from "../pick/awards/spot-Jun-2022.jpg";
import stellarJan2023 from "../pick/awards/steller-Jan-2023.jpg";
import stellarJan2022 from "../pick/awards/steller-Jan-2022.jpg";
import teamAwardQ1_2024 from "../pick/awards/team-Q1-2024.jpg";

import awsCert from "../pick/certificates/aws.png";
import awsCloudCert from "../pick/certificates/AWS_CLOUD.png";
import pythonCert from "../pick/certificates/python.png";
import regexCert from "../pick/certificates/regex.jpg";
import springBootCert from "../pick/certificates/springboot.png";
import jenkinsCert from "../pick/certificates/jenkins.jpg";
import dockerCert from "../pick/certificates/docker.png";
import androidCert from "../pick/certificates/andriod.jpg";

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
  margin-bottom: 1rem;
  font-weight: 800;
  color: var(--text-primary);

  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SubHeading = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
`;

const TabNav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const TabBtn = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  border: 1px solid ${p => p.$active ? "transparent" : "var(--border-accent)"};
  background: ${p => p.$active ? "var(--accent-gradient)" : "var(--bg-card)"};
  color: ${p => p.$active ? "#fff" : "var(--text-primary)"};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px var(--shadow-card);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled(motion.div)`
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1.5rem;
  border-left: 5px solid var(--accent);
  box-shadow: 0 10px 30px var(--shadow-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-left-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px var(--shadow-card-hover);
    border-left-color: var(--accent-2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
    color: var(--accent);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
`;

const CardIssuer = styled.p`
  font-size: 0.95rem;
  color: var(--accent);
  font-weight: 600;
  margin: 0.5rem 0;
`;

const CardDate = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0.3rem 0;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-body);
  line-height: 1.6;
  margin-top: 0.8rem;
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background: var(--cert-image-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const PlaceholderText = styled.span`
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
`;

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("awards")

  const certifications = {
    awards: [
      {
        id: 1,
        title: "Spot Award",
        issuer: "Precisely Software & Data",
        date: "November 2023",
        description: "Recognized for exceptional performance and immediate impact on critical project delivery and technical excellence.",
        image: spotAwardNov2023,
        icon: <FaTrophy />
      },
      {
        id: 2,
        title: "Spot Award",
        issuer: "Precisely Software & Data",
        date: "June 2022",
        description: "Awarded for outstanding contribution and going above and beyond in delivering high-quality solutions under tight deadlines.",
        image: spotAwardJune2022,
        icon: <FaTrophy />
      },
      {
        id: 3,
        title: "Stellar Performer Award",
        issuer: "Precisely Software & Data",
        date: "January 2023",
        description: "Recognized as Stellar Performer for outstanding contribution to system architecture, performance optimization, and technical leadership.",
        image: stellarJan2023,
        icon: <FaMedal />
      },
      {
        id: 4,
        title: "Stellar Performer Award",
        issuer: "Precisely Software & Data",
        date: "January 2022",
        description: "Awarded Stellar Performer for exceptional technical expertise, consistent delivery excellence, and mentoring team members.",
        image: stellarJan2022,
        icon: <FaMedal />
      },
      {
        id: 5,
        title: "Team Award",
        issuer: "Precisely Software & Data",
        date: "Q1 2024",
        description: "Team recognition for outstanding collaboration, innovation, and successful delivery of major project milestones.",
        image: teamAwardQ1_2024,
        icon: <FaAward />
      }
    ],
    certifications: [
      {
        id: 6,
        title: "AWS SimuLearn: Cloud Practitioner",
        issuer: "AWS Training & Certification",
        date: "December 2025",
        description: "Completed AWS SimuLearn Cloud Practitioner training with hands-on labs covering AWS core services, cloud architecture, security, and best practices.",
        image: awsCloudCert,
        icon: <FaCertificate />
      },
      {
        id: 7,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Udemy",
        date: "2023",
        description: "Comprehensive AWS Cloud fundamentals covering core services, architecture, security, pricing models, and cloud migration strategies.",
        image: awsCert,
        icon: <FaCertificate />
      },
      {
        id: 8,
        title: "Python Programming Masterclass",
        issuer: "Udemy",
        date: "2022",
        description: "Complete Python course covering advanced programming concepts, data structures, OOP, and real-world applications.",
        image: pythonCert,
        icon: <FaCertificate />
      },
      {
        id: 9,
        title: "Regular Expressions (Regex) Mastery",
        issuer: "Udemy",
        date: "2022",
        description: "Advanced regex patterns and techniques for text processing, validation, data extraction, and string manipulation.",
        image: regexCert,
        icon: <FaCertificate />
      },
      {
        id: 10,
        title: "Spring Boot Microservices",
        issuer: "Udemy",
        date: "2023",
        description: "Building scalable microservices with Spring Boot, Spring Cloud, REST APIs, distributed systems architecture, and cloud deployment.",
        image: springBootCert,
        icon: <FaCertificate />
      },
      {
        id: 11,
        title: "Jenkins CI/CD Pipeline",
        issuer: "Udemy",
        date: "2023",
        description: "Continuous integration and deployment automation with Jenkins, pipelines, build automation, and DevOps best practices.",
        image: jenkinsCert,
        icon: <FaCertificate />
      },
      {
        id: 12,
        title: "Docker Certified Associate",
        issuer: "KodeKloud",
        date: "2022",
        description: "Container orchestration, Docker architecture, image management, networking, volumes, and containerization best practices.",
        image: dockerCert,
        icon: <FaCertificate />
      },
      {
        id: 13,
        title: "Android App Development",
        issuer: "AndroJava - Class Time Training",
        date: "2021",
        description: "Mobile app development with Android SDK, Java, UI/UX design, activities, fragments, and application lifecycle management.",
        image: androidCert,
        icon: <FaCertificate />
      }
    ]
  }

  const currentItems = certifications[activeTab] || []

  return (
    <Section id="certifications">
      <Container>
        <Heading>Certifications & <span>Achievements</span></Heading>
        <SubHeading>Awards, recognitions, and professional certifications</SubHeading>

        <TabNav>
          <TabBtn $active={activeTab === "awards"} onClick={() => setActiveTab("awards")}>
            <FaTrophy /> Awards & Recognition
          </TabBtn>
          <TabBtn $active={activeTab === "certifications"} onClick={() => setActiveTab("certifications")}>
            <FaCertificate /> Certifications & Courses
          </TabBtn>
        </TabNav>

        <AnimatePresence mode="wait">
          <Grid
            as={motion.div}
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentItems.map((item, index) => (
              <Card
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardHeader>
                  {item.icon}
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardIssuer>{item.issuer}</CardIssuer>
                <CardDate>{item.date}</CardDate>
                <CardDescription>{item.description}</CardDescription>
                <ImagePreview>
                  {item.image
                    ? <img src={item.image} alt={item.title} />
                    : <PlaceholderText>Certificate Image</PlaceholderText>
                  }
                </ImagePreview>
              </Card>
            ))}
          </Grid>
        </AnimatePresence>
      </Container>
    </Section>
  )
}
