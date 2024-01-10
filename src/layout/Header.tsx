import i18nextLogo from "../assets/i18next-logo.png";
import reactLogo from "../assets/react.svg";
import LocaleSwitcher from "../i18n/LocaleSwitcher";

export default function Header() {
  return (
    <header className="mb-2 flex items-baseline justify-between border-b border-dashed border-slate-600 pb-4">
      <div className="flex items-baseline">
        <span className="relative top-[5px] flex gap-[3px] rounded-full bg-slate-800 px-2 py-1.5">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-6 w-6" alt="React logo" />
          </a>
          <a href="https://i18next.com" target="_blank">
            <img src={i18nextLogo} className="h-6 w-6" alt="i18next logo" />
          </a>
        </span>
        <span className="ms-2 text-xl">
          <span className="font-semibold">React + i18next</span>{" "}
          <span className="font-light">Playground</span>
        </span>
      </div>

      <LocaleSwitcher />
    </header>
  );
}
