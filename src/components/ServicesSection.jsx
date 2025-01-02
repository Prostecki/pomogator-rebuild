import { MdDone } from "react-icons/md";

export default function ServicesSection() {
  return (
    <section className="flex items-center justify-center h-3/4 mt-10">
      <div className="w-full">
        <img
          className="w-[50rem]"
          src="https://cdn-dpjhi.nitrocdn.com/awGxUrKcwtgrCElZGZidbFleUmKdhNuX/assets/images/source/rev-25c6bd0/24center.se/wp-content/uploads/2023/03/Lukkoseppa_tilanne.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold w-max">Помогаем людям 24/7</h1>
        <p className="text-xl w-3/4">
          Наша компания предлагает профессиональные услуги по аварийному
          вскрытию автомобилей. Мы работаем с различными марками и моделями
          машин, используя современные инструменты и методы, чтобы обеспечить
          быстрое и аккуратное вскрытие без повреждений.
        </p>
        <ul className="flex flex-col gap-5">
          <li className="text-lg underline flex items-center gap-4">
            <MdDone
              style={{
                filter: "drop-shadow(0 0 0.1rem black)",
                borderRadius: "50%",
                backgroundColor: "green",
                color: "white",
              }}
              size={50}
            />{" "}
            Замена повреждённых элементов двери
          </li>
          <li className="text-lg underline flex items-center gap-4">
            <MdDone
              style={{
                filter: "drop-shadow(0 0 0.1rem black)",
                borderRadius: "50%",
                backgroundColor: "green",
                color: "white",
              }}
              size={50}
            />{" "}
            Установка новых замков и фурнитуры
          </li>
          <li className="text-lg underline flex items-center gap-4">
            <MdDone
              style={{
                filter: "drop-shadow(0 0 0.1rem black)",
                borderRadius: "50%",
                backgroundColor: "green",
                color: "white",
              }}
              size={50}
            />{" "}
            Ремонт или замена поверхности двери
          </li>
        </ul>
      </div>
    </section>
  );
}
