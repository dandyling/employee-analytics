interface Props {
  columns: string[];
  rows: any[];
  variant?: "highlight-last";
  className?: string;
}

export const Table = (props: Props) => {
  const { columns, rows, variant, className = "" } = props;

  if (columns.length === 0) {
    return null;
  }

  return (
    <div className={className}>
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
              <tr key={`row-${i}`}>
                {columns.map((c, j) => {
                  const isBottomLeft = i === rows.length - 1 && j === 0;
                  const isHighlight =
                    variant === "highlight-last" && isBottomLeft;
                  const bottomLeftStyle = isHighlight ? "font-bold" : "";
                  return (
                    <td
                      key={`cell-${i}-${j}`}
                      className={`px-2 py-4 text-sm text-center text-gray-500 border-b ${bottomLeftStyle}`}
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
    </div>
  );
};
