import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Section = styled.section`
  width: 100%;
  min-height: 85vh;
  padding: 5rem 2rem;
  background: var(--section-grad-a);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    padding: 3rem 1.5rem;
  }
`;

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

const Card = styled(motion.div)`
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 1.8rem;
  border-left: 6px solid var(--accent);
  box-shadow: 0 16px 40px var(--shadow-card);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px var(--shadow-card-hover);
  }

  @media (max-width: 850px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);

  @media (max-width: 850px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.4rem;
`;

const Label = styled.label`
  font-size: 1rem;
  display: block;
  margin-bottom: 0.4rem;
  color: var(--text-secondary);
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  border: 2px solid var(--border-input);
  outline: none;
  background: var(--bg-input);
  color: var(--text-body);
  font-size: 1rem;
  transition: border-color 0.3s ease, background 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: var(--accent);
    background: var(--bg-card-alt);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  border: 2px solid var(--border-input);
  outline: none;
  background: var(--bg-input);
  color: var(--text-body);
  min-height: 150px;
  font-size: 1rem;
  transition: border-color 0.3s ease, background 0.3s ease;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    border-color: var(--accent);
    background: var(--bg-card-alt);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitBtn = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  background: var(--accent-gradient);
  color: #fff;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px var(--shadow-card-hover);
  }
`;

const StatusMsg = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${p => p.$error ? "#ef4444" : "var(--accent)"};
`;

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
  background: var(--bg-card-alt);
  border-radius: 12px;
  color: var(--text-body);
  text-decoration: none;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  border: 2px solid transparent;

  svg {
    font-size: 1.8rem;
    color: var(--accent);
  }

  &:hover {
    background: var(--highlight-bg);
    border-color: var(--accent);
    transform: translateX(6px);
    text-decoration: none;
    color: var(--text-body);
  }
`;

export default function Contact() {
  const formRef = useRef()
  const [statusMessage, setStatusMessage] = useState("")
  const [isError, setIsError] = useState(false)

  const sendEmail = e => {
    e.preventDefault()
    setStatusMessage("")
    setIsError(false)

    emailjs
      .sendForm(
        "service_2v1x1xd",
        "template_9neew4g",
        formRef.current,
        "GbF0Fx3caQSZKgA_m"
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!")
          setIsError(false)
          e.target.reset()
        },
        error => {
          console.error(error)
          setStatusMessage("Something went wrong. Please try again.")
          setIsError(true)
        }
      )
  }

  return (
    <Section id="contact">
      <Wrapper>

        <Card
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Get In Touch</Title>

          <form ref={formRef} onSubmit={sendEmail}>
            <FormGroup>
              <Label>Your Name</Label>
              <Input type="text" name="name" placeholder="Enter your name" required />
            </FormGroup>

            <FormGroup>
              <Label>Your Email</Label>
              <Input type="email" name="email" placeholder="Enter your email" required />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea name="message" placeholder="Write your message..." required />
            </FormGroup>

            <SubmitBtn type="submit">Send Message</SubmitBtn>

            {statusMessage && (
              <StatusMsg $error={isError}>{statusMessage}</StatusMsg>
            )}
          </form>
        </Card>

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

            <ContactItem href="tel:+917409632835">
              <FaPhone /> +91 7409632835
            </ContactItem>

            <ContactItem href="https://github.com/ArunKumarPal" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub Profile
            </ContactItem>

            <ContactItem href="https://www.linkedin.com/in/arunpal692" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn Profile
            </ContactItem>
          </ContactList>
        </Card>

      </Wrapper>
    </Section>
  )
}
