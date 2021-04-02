interface Props {
  columns: string[];
  rows: any[];
  variant?: "highlight-last";
}

export const Table = (props: Props) => {
  const { columns, rows, variant } = props;
  return (
    <table className="w-full">
      <thead className="text-xs text-center text-white bg-brand">
        <tr>
          {columns.map((c, i) => {
            return (
              <td className="px-2 py-4" key={`col-${i}`}>
                {c}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => {
          return (
            <tr
              key={`row-${i}`}
              className={variant === "highlight-last" ? "last:font-bold" : ""}
            >
              {columns.map((c, j) => {
                return (
                  <td
                    key={`cell-${i}-${j}`}
                    className="px-2 py-6 text-sm text-center text-gray-500 border-b bg-gray-50 font-extra-light"
                  >
                    {r[c]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
