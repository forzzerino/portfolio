import "../App.css";

export default function Design() {
  return (
    <div className="design">
      <div className="tableheader">
        <h3>Design skills</h3>
        <a
          href="https://www.linkedin.com/in/cnztrk/details/skills/"
          className="underline"
        >
          more
        </a>
      </div>
      <div className="table-list ">
        {" "}
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe After Effects</li>
          <li>Adobe Premiere Pro</li>
          <li>Adobe InDesign</li>
          <li>Figma</li>
          <li>Blender / Cinema 4D</li>
        </ul>
        <ul>
          <li>UI Design</li>
          <li>UX Design</li>
        </ul>
      </div>
    </div>
  );
}
