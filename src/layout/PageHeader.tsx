import i18nextLogo from "../assets/i18next-logo.png";
import reactLogo from "../assets/react.svg";
import LocaleSwitcher from "../i18n/LocaleSwitcher";

export default function PageHeader() {
  return (
    <header className="container fixed mx-auto mb-2 flex max-w-[87%] items-baseline justify-between border-b border-dashed border-slate-600 bg-slate-950 pb-4 pt-2 md:max-w-[765px]">
      <div className="flex items-baseline">
        <span className="relative top-[5px] flex gap-[3px] rounded-full bg-slate-800 px-2 py-1.5">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-6 w-6" alt="React logo" />
          </a>
          <a href="https://i18next.com" target="_blank">
            <img src={i18nextLogo} className="h-6 w-6" alt="i18next logo" />
          </a>
        </span>
        <span className="ms-2 hidden text-xl sm:inline">
          <span className="font-semibold">React + i18next</span>{" "}
          <span className="font-light">Playground</span>
        </span>
      </div>

      <LocaleSwitcher />
    </header>
  );
}
