import "../components/Content.scss";
import Navbar from "./Navbar";
import Home from "./Home/Home";
export const Content = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="Projects">Projects</section>
      <section id="Tech">Tech and Skills</section>
      <section id="Contact">Contact</section>
    </div>
  );
};
