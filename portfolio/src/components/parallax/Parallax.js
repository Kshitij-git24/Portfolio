import "./Parallax.scss";
export const Parallax = ({ type }) => {
  return (
    <div className="parallax">
      <h1>
        {type === "projects"
          ? "Projects that I worked on"
          : "Technologies I am familiar with"}
      </h1>
    </div>
  );
};
