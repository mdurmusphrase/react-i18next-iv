import { useTranslation } from "react-i18next";

export default function ProjectFiles({
  files = [],
}: {
  files: string[];
}) {
  const { t } = useTranslation();

  return (
    <div className="mb-6 mt-4 rounded-md bg-slate-900 p-3 pb-4">
      <h4 className="text-sm font-light text-slate-300 ltr:text-left rtl:text-center">
        {t("project_source_files")}
      </h4>

      <ul
        className="ms-3 list-outside list-disc font-mono text-sm text-cyan-500"
        dir="ltr"
      >
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  );
}
