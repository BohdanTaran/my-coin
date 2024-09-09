import styles from './InfoCard.module.scss';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="icon" />
      <div className={styles.text}>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default InfoCard;
