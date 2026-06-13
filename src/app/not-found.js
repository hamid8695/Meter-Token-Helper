import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="back-link">
        {/* <FaArrowLeftLong /> Back to Home */}
      </Link>
    </div>
  );
};

export default NotFoundPage;
