import "../App.css";
export default function Work() {
  return (
    <div className="work">
      <div className="tableheader">
        <h3>Latest</h3>
        <a
          href="https://www.linkedin.com/in/cnztrk/details/experience/"
          className="underline"
          target="_blank"
        >
          more
        </a>
      </div>
      <div className="mt-6">
        <a href="https://forzzerino.github.io/lyriclab/" target="_blank">
          {" "}
          <img
            src="/src/assets/lyriclab.png"
            alt="lyriclab"
            className=" h-auto grow-0"
          />
        </a>
      </div>
    </div>
  );
}
