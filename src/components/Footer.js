// src/components/Footer.js
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-bold">Quick Links</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold">Location</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/location/new-york"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  New York
                </Link>
              </li>
              <li>
                <Link
                  href="/location/los-angeles"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link
                  href="/location/chicago"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  Chicago
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold">Follow Us</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/people/My-Driving-Schools/61565216012253/"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/my-driving-schools/"
                  className="opacity-80 hover:opacity-100 transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} My Driving Schools | All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
