import { useState } from "react";

const PricingModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `Booking: ${selectedPlan.name}`,
          message: `${formData.message}\n\nPlan: ${selectedPlan.name} - ${selectedPlan.price}`,
          email: formData.email,
          name: formData.name,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-darkCardTheme p-4 rounded-lg w-full max-w-md relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-darkFontHeading dark:text-lightFontText">
              Book: {selectedPlan.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Price: {selectedPlan.price}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional notes"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
              >
                {isSubmitting ? "Sending..." : "Book Now"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-darkFontHeading dark:text-lightFontText">
              Thank you!
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Your booking request has been sent. I will contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-btnDarkTheme text-white rounded-lg font-bold hover:bg-yellow-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingModal;
