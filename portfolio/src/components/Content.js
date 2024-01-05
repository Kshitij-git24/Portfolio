import "../components/Content.scss";
import Navbar from "./Navbar";
export const Content = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Home</section>
      <section>Projects</section>
      <section>Tech and Skills</section>
      <section>Contact</section>
    </div>
  );
};
