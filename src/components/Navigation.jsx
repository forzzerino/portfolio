import "../App.css";
import Socials from "../components/Socials";
import ThemePanel from "./ThemePanel";
export default function Navigation() {
  return (
    <div className="navigation">
      <Socials />
      <span className="mx-2">|</span>
      <ThemePanel />
    </div>
  );
}
