import "../App.css";

export default function Experience() {
  return (
    <div className="experiences">
      <div className="tableheader">
        <h3>Experience</h3>
        <a
          href="https://www.linkedin.com/in/cnztrk/details/experience/"
          className="underline"
          target="_blank"
        >
          more
        </a>
      </div>
      <div className="exp-list">
        <ul>
          {" "}
          <li className="experience">
            <h4>Software Engineer Intern</h4>
            <div className="exp-header">
              <h5>i2i Systems</h5>
              <span>July 2025 - Still</span>
            </div>
          </li>
          <li className="experience">
            <h4>Backend developer</h4>
            <div className="exp-header">
              <h5>Banü Dijital Dönüşüm ve Yazılım Ofisi Koordinatörlüğü</h5>
              <span>Nov 2024 - Still</span>
            </div>
          </li>
          <li className="experience">
            {" "}
            <h4>Co-Founder</h4>
            <div className="exp-header">
              <h5>Banü Teknoloji Topluluğu</h5>
              <span>Aug 2024 - Still</span>
            </div>
          </li>
          <li className="experience">
            <h4>Full Stack Developer Intern</h4>
            <div className="exp-header">
              <h5>OGZA Teknoloji AŞ</h5>

              <span>July 2024 - Aug 2024</span>
            </div>
          </li>{" "}
          <li className="experience">
            <h4>Graphic Designer</h4>
            <div className="exp-header">
              {" "}
              <h5>Freelance</h5>
              <span>Jan 2015 - Still</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
