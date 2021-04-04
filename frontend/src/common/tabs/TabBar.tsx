import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TabHeader {
  tabName: string;
  tabIcon?: any;
}

interface Props {
  tabs: TabHeader[];
  onChange(index: number): void;
  selected: number;
}

export const TabBar = (props: Props) => {
  const { tabs, onChange, selected } = props;

  return (
    <div className="flex">
      {tabs.map((t, i) => {
        const isSelected = selected === i;
        const selectedStyle = isSelected ? "bg-opacity-20 bg-white" : "";

        const handleChange = () => {
          onChange(i);
        };

        return (
          <div key={`tab-${t.tabName}`}>
            <button
              onClick={handleChange}
              className={`flex items-center duration-500 px-4 py-2 transition-colors focus:outline-none rounded ${selectedStyle}`}
            >
              {t.tabIcon && (
                <div className="pr-2 text-lg">
                  <FontAwesomeIcon icon={t.tabIcon} onClick={console.log} />
                </div>
              )}
              <div className="text-sm uppercase">{t.tabName}</div>
            </button>
          </div>
        );
      })}
    </div>
  );
};
