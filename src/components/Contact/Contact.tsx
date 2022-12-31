import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";

// Replace with your EmailJS account's sender email, template ID, and user ID
const SENDER_EMAIL = "your-email@example.com";
const TEMPLATE_ID = "template_0jxieew";
const USER_ID = "yaXBT1fCWtR1RiCSu";

init("yaXBT1fCWtR1RiCSu", "7fkMM_4DKDWTVRhO4DmmU"); // Initialize EmailJS with your API key

interface FormData {
  name: string;
  email: string;
  question: string;
}

async function sendForm(formData: FormData) {
  try {
    await emailjs.send(
      "outlook", // Use the 'outlook' service
      TEMPLATE_ID,
      formData,
      USER_ID
    );
  } catch (e) {
    throw new Error(`Failed to send form: ${e.message}`);
  }
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    question: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await sendForm(formData);
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        question: "",
      });
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        disabled={submitting}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={submitting}
        required
      />
      <label htmlFor="question">Question:</label>
      <textarea
        name="question"
        value={formData.question}
        onChange={handleFieldChange}
        disabled={submitting}
        required
      />
      <button type="submit" disabled={submitting}>
        {" "}
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
