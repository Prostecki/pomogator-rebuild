import ContactButton from "./ContactButton";

export default function PresentSection() {
  return (
    <section
      className="present bg-cover bg-center relative"
      style={{ backgroundImage: "url('/src/assets/img/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      <div className="z-10 flex flex-col items-center justify-center h-full text-center gap-8">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
          Когда в жизни закрывается одна дверь, мы приедем и откроем её!
        </h2>
        <h3 className="text-3xl font-bold text-orange-400 drop-shadow-lg">
          Ваши потребности - наш приоритет
        </h3>
        <ContactButton>Связаться с нами</ContactButton>
        <ContactButton>
          <a href="tel:+79959111125">+7 (995) 911-112-5</a>
        </ContactButton>
      </div>
    </section>
  );
}
