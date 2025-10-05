import React, { useState } from "react";
import trainer from "../assets/trainer.jpg";
import logo from "../assets/logo.png";

const Subscription = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    region: "",
    password: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // clear errors before validation

    // Basic validation
    if (!formData.agreeToTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // Submit form data (e.g., API call)
    console.log("Submitting subscription:", formData);
    // TODO: Replace with real backend logic
  };

  return (
    <div className="pt-10 min-h-dvh bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step indicator */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex items-center justify-center space-x-8 text-sm">
            {["Register", "Pay", "Complete"].map((step, i) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    i === 0
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`ml-2 font-medium ${
                    i === 0
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* IMAGE SECTION */}
          <div className="order-1 md:order-2 relative">
            <img
              alt="Fitness Transformation"
              className="w-full shadow-2xl rounded-lg object-cover object-top"
              src={trainer}
            />
            <div className="absolute top-6 left-6">
              <img alt="Fit Hunter Logo" className="h-16 w-auto" src={logo} />
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="order-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 shadow-xl p-8 rounded-lg">
            <div className="mb-8 text-gray-700 dark:text-gray-300">
              <p>
                At Fit Hunter, fitness is not just a destination — it’s a journey of transformation.
                I combine expert guidance, empathetic coaching, and motivational support to ensure
                you stay consistent and empowered every step of the way.
              </p>
              <p className="mt-4">
                <strong>Remember:</strong> Results do not happen unless you start — so let’s get
                started today!
              </p>
            </div>

            {/* Plan Details */}
            <div className="mb-8">
              <h6 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Selected Plan
              </h6>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <i className="ri-vip-crown-line text-yellow-600 dark:text-yellow-400 text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900 dark:text-white">
                      Ultimate Transformation Workout &amp; Meal Plan
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Recurring Payment
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                      USD 39.00 <span className="text-sm font-normal">/ month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Enter Registration Details
            </h5>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                <p className="text-red-800 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" id="firstName" value={formData.firstName} onChange={handleChange} />
                <Input label="Last Name" id="lastName" value={formData.lastName} onChange={handleChange} />
              </div>

              <Input label="Email Address" id="email" value={formData.email} onChange={handleChange} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Country" id="country" value={formData.country} onChange={handleChange} />
                <Input label="Region" id="region" value={formData.region} onChange={handleChange} />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-yellow-200 dark:border-yellow-700 rounded-lg bg-white dark:bg-yellow-900/20 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    <i className={`ri-${showPassword ? "eye-off-line" : "eye-line"} text-lg`}></i>
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <label htmlFor="agreeToTerms" className="ml-3 text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-yellow-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-yellow-600 hover:underline">
                    Legal Disclaimer
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-colors"
              >
                Enroll Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔧 Reusable Input Component
const Input = ({ label, id, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required
      placeholder={label}
      className="w-full px-4 py-3 border border-yellow-200 dark:border-yellow-700 rounded-lg bg-white dark:bg-yellow-900/20 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 text-sm"
    />
  </div>
);

export default Subscription;
