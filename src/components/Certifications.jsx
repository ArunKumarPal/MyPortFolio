import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCertificate, FaTrophy, FaMedal } from "react-icons/fa";

// ================= Styled Components =================

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
  max-width: 1200px;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 800;
  color: #12233b;
`;

const SubHeading = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #334e6a;
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
  border: none;
  background: ${(p) =>
    p.$active ? "linear-gradient(90deg,#1457c6,#764ba2)" : "rgba(255,255,255,0.5)"};
  color: ${(p) => (p.$active ? "#fff" : "#16324a")};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(20, 87, 198, 0.2);
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
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1.5rem;
  border-left: 5px solid #1457c6;
  box-shadow: 0 10px 30px rgba(12, 38, 73, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(12, 38, 73, 0.15);
    border-left-color: #764ba2;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
    color: #1457c6;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #102235;
  margin: 0;
`;

const CardIssuer = styled.p`
  font-size: 0.95rem;
  color: #1457c6;
  font-weight: 600;
  margin: 0.5rem 0;
`;

const CardDate = styled.p`
  font-size: 0.9rem;
  color: #334e6a;
  margin: 0.3rem 0;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
  margin-top: 0.8rem;
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
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
  color: #1457c6;
  font-size: 0.9rem;
  font-weight: 600;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #334e6a;
  font-size: 1.1rem;
`;

// ================= Component =================

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("awards");

  // You can add your certificate/award images in the src/pick folder
  // and import them here, then add to the data below
  const certifications = {
    awards: [
      {
        id: 1,
        title: "Spot Award",
        issuer: "Precisely Software & Data",
        date: "2024",
        description: "Recognized for exceptional performance and immediate impact on critical project delivery.",
        image: null, // Add: import spotAward from "../pick/spot-award.jpg"
        icon: <FaTrophy />
      },
      {
        id: 2,
        title: "Stellar Award",
        issuer: "Precisely Software & Data",
        date: "2023",
        description: "Awarded for outstanding contribution to system architecture and performance optimization.",
        image: null, // Add: import stellarAward from "../pick/stellar-award.jpg"
        icon: <FaMedal />
      },
      {
        id: 3,
        title: "Best Performer Award",
        issuer: "Precisely Software & Data",
        date: "2022",
        description: "Recognized as best performer for consistent delivery excellence and technical leadership.",
        image: null, // Add: import bestPerformer from "../pick/best-performer.jpg"
        icon: <FaAward />
      }
    ],
    certifications: [
      {
        id: 4,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        description: "Certified in designing distributed systems on AWS with high availability and fault tolerance.",
        image: null, // Add your certificate image
        icon: <FaCertificate />
      },
      {
        id: 5,
        title: "Java Spring Boot Microservices",
        issuer: "Udemy / Coursera",
        date: "2022",
        description: "Completed comprehensive training on building scalable microservices with Spring Boot.",
        image: null, // Add your certificate image
        icon: <FaCertificate />
      },
      {
        id: 6,
        title: "Temporal Workflow Orchestration",
        issuer: "Temporal Technologies",
        date: "2023",
        description: "Certified in building fault-tolerant distributed applications using Temporal workflows.",
        image: null, // Add your certificate image
        icon: <FaCertificate />
      }
    ]
  };

  const currentItems = certifications[activeTab] || [];

  return (
    <Section id="certifications">
      <Container>
        <Heading>Certifications & Achievements</Heading>
        <SubHeading>
          Awards, recognitions, and professional certifications
        </SubHeading>

        <TabNav>
          <TabBtn
            $active={activeTab === "awards"}
            onClick={() => setActiveTab("awards")}
          >
            <FaTrophy />
            Awards & Recognition
          </TabBtn>
          <TabBtn
            $active={activeTab === "certifications"}
            onClick={() => setActiveTab("certifications")}
          >
            <FaCertificate />
            Certifications & Courses
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
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
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
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <PlaceholderText>Certificate Image</PlaceholderText>
                    )}
                  </ImagePreview>
                </Card>
              ))
            ) : (
              <EmptyState>No items to display</EmptyState>
            )}
          </Grid>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
