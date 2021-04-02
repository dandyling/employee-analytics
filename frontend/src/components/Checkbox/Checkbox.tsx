interface Props {
  checked: boolean;
  onChange(e: any): void;
}

export const Checkbox = (props: Props) => {
  const { checked, onChange } = props;
  return (
    <input
      type="checkbox"
      checked={checked}
      className="w-5 h-5 mr-2 border-2 border-gray-400 rounded-sm focus:ring-transparent text-accent"
      onChange={onChange}
    />
  );
};
