import sprite from './sprite.svg';

interface IconProps {
  icon: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  width = 24,
  height = 24,
  onClick,
  className = '',
}) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick}>
      <use href={sprite + `#${icon}`} />
    </svg>
  );
};

export default Icon;
