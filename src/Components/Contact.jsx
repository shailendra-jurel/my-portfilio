import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram,
  Calendar,
  MessageSquare,
  CheckCircle,
  XCircle 
} from 'lucide-react';
// import { Alert, AlertDescription } from "@/components/ui/alert";


// Internal Alert Component
const CustomAlert = ({ status, message }) => {
  const bgColor = status === 'success' ? 'bg-green-500/20' : 'bg-red-500/20';
  const textColor = status === 'success' ? 'text-green-400' : 'text-red-400';
  const borderColor = status === 'success' ? 'border-green-500/50' : 'border-red-500/50';
  const Icon = status === 'success' ? CheckCircle : XCircle;

  return (
    <div className={`mb-6 p-4 rounded-lg border ${bgColor} ${textColor} ${borderColor} flex items-center gap-2`}>
      <Icon className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    availability: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID, 
        import.meta.env.VITE_YOUR_TEMPLATE_ID, 
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          preferredContact: 'email',
          availability: ''
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shailendrajurel001@gmail.com",
      link: "mailto:shailendrajurel001@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 6398846710",
      link: "tel:+916398846710"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bangalore, India",
      link: "https://goo.gl/maps/yourLocation"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/shailendra-jurel",
      color: "hover:bg-gray-800"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/shailendra-jurel/",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      link: "https://x.com/Shailendra36532",
      color: "hover:bg-blue-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      link: "https://www.instagram.com/t3cheshwar/",
      color: "hover:bg-pink-600"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient-x">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <CustomAlert 
                status="success" 
                message="Message sent successfully! I'll get back to you soon."
              />
            )}

            {submitStatus === 'error' && (
              <CustomAlert 
                status="error" 
                message={errorMessage || "Failed to send message. Please try again later."}
              />
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  >
                    <option value="email">Prefer Email</option>
                    <option value="phone">Prefer Phone Call</option>
                    <option value="video">Prefer Video Call</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="Your Availability"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 
                ${isSubmitting ? 'bg-gray-600' : 'bg-gradient-to-r from-cyan-500 to-purple-500'} 
                hover:from-cyan-600 hover:to-purple-600 transition-all duration-300`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-400 text-center mt-4">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

            </form>
          </div>

           {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">{info.label}</h4>
                    <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h4 className="text-xl font-semibold mb-4 text-white">Connect on Social Media</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.074464647739!2d77.66224421145068!3d12.838464587412558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d6ab07d151b%3A0xc0af49ccfc84871a!2sScaler%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1717675664085!5m2!1sen!2sin"
                className="w-full h-64"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;