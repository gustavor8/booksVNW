// style import
import s from "./home.module.scss";
// img imports
import balance from "../../assets/img/balance.png";
import community from "../../assets/img/community.png";
import reading from "../../assets/img/reading.png";
import transform from "../../assets/img/transform.png";

export default function Home() {
  return (
    <>
      <section className={s.imageInital}>
        <h2 className={s.textInitial}>
          VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO
        </h2>
      </section>
      <section className={s.whyDonate}>
        <h2 className={s.textWhyDonate}>Por que devo doar? </h2>
        <article className={s.reasonDonate}>
          <figure>
            <img src={community} alt="símbolos que representam pessoas" />
            <figcaption>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </figcaption>
          </figure>
        </article>
        <article className={s.reasonDonate}>
          <figure>
            <img src={reading} alt="Símbolo que representa leitura" />
            <figcaption>
              Estimula o hábito da leitura e o aprendizado contínuo.
            </figcaption>
          </figure>
        </article>
        <article className={s.reasonDonate}>
          <figure>
            <img src={transform} alt="símbolo de transformação" />
            <figcaption>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </figcaption>
          </figure>
        </article>
        <article className={s.reasonDonate}>
          <figure>
            <img src={balance} alt="Símbolo de uma balança" />
            <figcaption>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </figcaption>
          </figure>
        </article>
      </section>
    </>
  );
}
