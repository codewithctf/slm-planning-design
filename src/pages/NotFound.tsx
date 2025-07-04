import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Not Found | SLM Planning & Design</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Sorry, the page you are looking for does not exist at SLM Planning & Design."
        />
        <meta
          property="og:title"
          content="Not Found | SLM Planning & Design"
        />
        <meta
          property="og:description"
          content="Sorry, the page you are looking for does not exist at SLM Planning & Design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Assets/slm-logo.png" />
        <meta property="og:url" content="https://slmplanning.com/404" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Not Found | SLM Planning & Design"
        />
        <meta
          name="twitter:description"
          content="Sorry, the page you are looking for does not exist at SLM Planning & Design."
        />
        <meta name="twitter:image" content="/Assets/slm-logo.png" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
