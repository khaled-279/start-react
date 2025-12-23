import man from "../../assets/man.svg";
import StarDivider from "../StarDivider/StarDivider";

export default function Home() {
  return (
    <section className="text-center p-5 home text-white">
        <img src={man} alt="b" className="imgHome" />
      <h1 className="text-uppercase m-2 fw-bolder ">start Framework</h1>
      <StarDivider/>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  )
}
