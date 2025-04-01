import s from "./spin.module.scss"; // Arquivo de estilos

const Loading = () => {
  return (
    <div className={s.loadingContainer}>
      <div className={s.loader}></div>
      <p className={s.info}>Carregando</p>
    </div>
  );
};

export default Loading;
