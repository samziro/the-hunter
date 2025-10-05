import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Optional SEO: import { HelmetProvider } from "react-helmet-async";
import "./index.css";

// Lazy load App to reduce initial bundle size
const App = lazy(() => import("./App.jsx"));

// Basic fallback (can be a spinner or skeleton loader)
function LoadingFallback() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen text-lg text-gray-700">
      <p className="h-12 w-12 rounded-full animate-spin border-4  border-btnDarkTheme"></p>
      <p>Loading please wait ...</p>
    </div>
  );
}

// Simple error boundary to avoid blank screen on crashes
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("❌ App crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen text-red-600 text-xl">
          Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <HelmetProvider> */}
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      </ErrorBoundary>
      {/* </HelmetProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
