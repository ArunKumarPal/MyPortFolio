import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// SECTION CONTAINER
const Section = styled.section`
  width: 100%;
  min-height: 85vh;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f3f7fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    padding: 3rem 1.5rem;
  }
`;

// CONTENT WRAPPER
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// GLASS CARD
const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.26);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 1.8rem;
  border-left: 6px solid #1457c6;
  box-shadow: 0 16px 40px rgba(12, 38, 73, 0.08);
  transition: 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(12, 38, 73, 0.15);
  }

  @media (max-width: 850px) {
    padding: 1.5rem;
  }
`;

// TITLE
const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #12233b;

  @media (max-width: 850px) {
    font-size: 2rem;
    text-align: center;
  }
`;

// FORM ELEMENTS
const FormGroup = styled.div`
  margin-bottom: 1.4rem;
`;

const Label = styled.label`
  font-size: 1rem;
  display: block;
  margin-bottom: 0.4rem;
  color: #334e6a;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  border: 2px solid #e0e7f0;
  outline: none;
  background: rgba(255,255,255,0.8);
  color: #1b2b3a;
  font-size: 1rem;
  transition: 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #1457c6;
    background: #fff;
  }

  &::placeholder {
    color: #8794a8;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  border: 2px solid #e0e7f0;
  outline: none;
  background: rgba(255,255,255,0.8);
  color: #1b2b3a;
  min-height: 150px;
  font-size: 1rem;
  transition: 0.3s ease;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    border-color: #1457c6;
    background: #fff;
  }

  &::placeholder {
    color: #8794a8;
  }
`;

// BUTTON
const SubmitBtn = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(90deg, #1457c6, #764ba2);
  color: #fff;
  cursor: pointer;
  transition: 0.25s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(20, 87, 198, 0.3);
  }
`;

// CONTACT RIGHT SIDE
const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  padding: 1rem;
  background: rgba(255,255,255,0.6);
  border-radius: 12px;
  color: #1b2b3a;
  text-decoration: none;
  transition: 0.3s ease;
  border: 2px solid transparent;

  svg {
    font-size: 1.8rem;
    color: #1457c6;
  }

  &:hover {
    background: rgba(255,255,255,0.9);
    border-color: #1457c6;
    transform: translateX(6px);
  }
`;

export default function Contact() {
  const [status, setStatus] = useState("");
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("");
    setIsError(false);

    emailjs
      .sendForm(
        "service_2v1x1xd",
        "template_9neew4g",
        formRef.current,
        "GbF0Fx3caQSZKgA_m" 
      )
      .then(
        () => {
          setStatusMessage("Mail sent successfully!");
          setIsError(false);
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatusMessage("Something went wrong. Please try again.");
          setIsError(true);
        }
      );
  };

  return (
    <Section id="contact">
      <Wrapper>

        {/* LEFT SIDE — FORM */}
        <Card
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Get In Touch</Title>

          <form ref={formRef} onSubmit={sendEmail}>
            <FormGroup>
              <Label>Your Name</Label>
              <Input type="text" name="name" placeholder="Enter your name" id="name" required />
            </FormGroup>

            <FormGroup>
              <Label>Your Email</Label>
              <Input type="email" name="email" placeholder="Enter your email" id="email" required />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea name="message" placeholder="Write your message..." id="message" required />
            </FormGroup>

            <SubmitBtn type="submit">Send Message</SubmitBtn>

            {status && (
              <p style={{ marginTop: "1rem", color: "#1457c6", fontWeight: "600" }}>{status}</p>
            )}
          </form>
        </Card>

        {/* RIGHT SIDE – CONTACT INFO */}
        <Card
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title>Contact Information</Title>

          <ContactList>

            <ContactItem href="mailto:arunpal692@gmail.com">
              <FaEnvelope /> arunpal692@gmail.com
            </ContactItem>

            <ContactItem href="https://github.com/ArunKumarPal" target="_blank">
              <FaGithub /> GitHub Profile
            </ContactItem>

            <ContactItem href="https://www.linkedin.com/in/arunpal692" target="_blank">
              <FaLinkedin /> LinkedIn Profile
            </ContactItem>

            <ContactItem href="https://x.com" target="_blank">
              <FaTwitter /> X
            </ContactItem>

          </ContactList>
        </Card>

      </Wrapper>
    </Section>
  );
}
