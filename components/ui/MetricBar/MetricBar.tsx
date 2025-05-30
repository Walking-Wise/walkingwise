import styles from "./MetricBar.module.css";

export interface MetricBarProps {
  title: string;
  value: string;
  description: string;
  citation: {
    source: string;
    link: string;
  };
}

export default function MetricBar({
  title,
  value,
  description,
  citation,
}: MetricBarProps) {
  return (
<div className={styles.metricBar}>
      <div className={styles.metricBarInner}>
        <div className={styles.metricBarTitle}>{title}</div>
        <div className={styles.metricBarValue}>{value}</div>
        <div className={styles.metricBarDescription}>{description}</div>
        <a href={citation.link} className={styles.metricBarCitation} target="_blank" rel="noopener noreferrer">{citation.source}</a>
      </div>
    </div>
  );
}
