import Chip from '@/components/Chip';

interface Props {
  label: string;
  onClick: () => void;
  isSelected: boolean;
}
const FilterButton = ({ label, onClick, isSelected }: Props) => {
  return (
    <Chip type="button" $selected={isSelected} onClick={onClick}>
      {label}
    </Chip>
  );
};

export default FilterButton;
