import "../App.css";

export default function Software() {
  return (
    <div className="software">
      <div className="tableheader">
        <h3>Software skills</h3>
        <a
          href="https://www.linkedin.com/in/cnztrk/details/skills/"
          className="underline"
        >
          more
        </a>
      </div>
      <div className="table-list  ">
        <ul>
          <li>HTML & CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Vue.js</li>
          <li>TailwindCSS</li>
        </ul>
        <ul>
          <li>Version Control</li>
          <li>Pixel-Perfect Implementation</li>
          <li>Frontend Development</li>
          <li>Project Management</li>
        </ul>
      </div>
    </div>
  );
}
