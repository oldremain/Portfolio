import React, { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { CustomInput } from "@/components/customInput/CustomInput";
import { CustomTextArea } from "@/components/customTextArea/CustomTextArea";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Button } from "@/components/Button";
import { S } from "./EmailForm_Styles";

export const EmailForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await emailjs.send(
        "service_u3fkhzr",
        "template_6s8p50m",
        {
          name,
          email,
          title,
          message,
        }
      );
      if (response.status === 200) {
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    emailjs.init({
      publicKey: "ZGbfh6LxnwNshKiag",
    });
  }, []);

  return (
    <S.Form onSubmit={onSubmit}>
      <FlexWrapper $gap={16}>
        <CustomInput
          value={name}
          label="Name"
          placeholder="Type your name"
          disabled={isLoading}
          required
          onChange={setName}
        />
        <CustomInput
          value={email}
          label="Email"
          placeholder="Type your email"
          disabled={isLoading}
          required
          onChange={setEmail}
        />
      </FlexWrapper>
      <CustomInput
        value={title}
        label="Title"
        placeholder="Type title"
        disabled={isLoading}
        required
        onChange={setTitle}
      />
      <CustomTextArea
        value={message}
        label="Message"
        placeholder="Type your message"
        disabled={isLoading}
        required
        onChange={setMessage}
      />
      <Button type="submit" disabled={isLoading}>
        Send
      </Button>
    </S.Form>
  );
};
