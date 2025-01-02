import { IoIosCall } from "react-icons/io";

export default function Header({ isSticky }) {
  return (
    <header
      style={{
        position: isSticky ? "fixed" : "absolute",
        top: 0,
        width: "100%",
        backgroundColor: isSticky ? "white" : "transparent",
        color: isSticky ? "black" : "white",
        padding: "20px",
        transition: "position 0.3s ease-in-out",
        zIndex: 50,
      }}
      className="flex w-full justify-evenly items-center p-4 text-black font-bold"
    >
      <h1 className="uppercase">Помогаем людям 24/7</h1>
      <h1 className="uppercase text-2xl text-blue-500">
        Вскрыть <span className="text-red-500">дверь</span>
        <span className="text-black">.ру</span>
      </h1>
      <div className="flex items-center gap-2">
        <IoIosCall style={{ color: "red" }} size={25} />
        <a href="tel:020742470" id="contact-number" className="text-xl">
          020 74 24 70
        </a>
      </div>
    </header>
  );
}
