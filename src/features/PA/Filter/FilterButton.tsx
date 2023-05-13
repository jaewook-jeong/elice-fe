import Chip from '@/components/Chip';

interface Props {
  label: string;
  onClick: () => void;
  isSelected: boolean;
  value: string;
}
const FilterButton = ({ label, onClick, isSelected, value }: Props) => {
  return (
    <Chip
      aria-selected={isSelected}
      data-testid="filter_button"
      type="button"
      $selected={isSelected}
      onClick={onClick}
      value={value}
    >
      {label}
    </Chip>
  );
};

export default FilterButton;
