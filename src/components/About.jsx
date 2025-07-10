import { Link } from "react-router";
import "../App.css";
import Socials from "./Socials";
export default function About() {
  return (
    <div className="about">
      <p>
        <span className="emoji">👋</span>, I'm Can.
      </p>
      <p>
        <span className="emoji">⚡</span>4th year Software Engineering Student.{" "}
        <br /> <span className="emoji">💎</span> Willing to mix motion-design
        experience with coding.
      </p>
      <ul className="socials text-nowrap">
        <Socials />
        <span className="mx-2">|</span>
        <Link to="/cv" className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 42 42"
          >
            <path
              fill="currentColor"
              d="M15.3 20.1c0 3.1 2.6 5.7 5.7 5.7s5.7-2.6 5.7-5.7s-2.6-5.7-5.7-5.7s-5.7 2.6-5.7 5.7zm8.1 12.3C30.1 30.9 40.5 22 40.5 22s-7.7-12-18-13.3c-.6-.1-2.6-.1-3-.1c-10 1-18 13.7-18 13.7s8.7 8.6 17 9.9c.9.4 3.9.4 4.9.2zM11.1 20.7c0-5.2 4.4-9.4 9.9-9.4s9.9 4.2 9.9 9.4S26.5 30 21 30s-9.9-4.2-9.9-9.3z"
            />
          </svg>
          <p>View Resume</p>
        </Link>
      </ul>
    </div>
  );
}
