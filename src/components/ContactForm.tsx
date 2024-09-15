import React, { useState, FormEvent } from 'react';

interface ContactFormState {
  to: string;
  subject: string;
  text: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    to: 'guibio24@proton.me',
    subject: '',
    text: '',
    message: ''
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: formState.to,
          subject: formState.subject,
          text: formState.text
        }),
      });

      const data = await response.json();
      setFormState(prevState => ({ ...prevState, message: data.message }));
    } catch (error) {
      setFormState(prevState => ({ ...prevState, message: 'Error sending email' }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="flex flex-col mb-4">
        <label htmlFor="subject" className="mb-2 text-sm font-semibold text-gray-300">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formState.subject}
          onChange={handleChange}
          required
          className="bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="text" className="mb-2 text-sm font-semibold text-gray-300">Message</label>
        <textarea
          name="text"
          id="text"
          placeholder="Write your message here..."
          value={formState.text}
          onChange={handleChange}
          required
          rows={4}
          className="bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300 w-full"
      >
        Send Message
      </button>
      {formState.message && <p className="mt-4 text-white">{formState.message}</p>}
    </form>
  );
};

export default ContactForm;
