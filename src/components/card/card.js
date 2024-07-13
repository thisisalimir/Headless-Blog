import Image from "next/image";
import Button from "../button/button";
import ConditionalRenderer from "../conditional-renderer";
import styles from "./card.module.sass";
import getCategoryColor from "@/helpers/get-category-color";

const Card = (props) => (
  <div className={`${styles.card_wrap} ${props.className || ""}`}>
    <div className={styles.card}>
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>
          <Image src={props.imgSrc} alt={props.imgAlt} fill={true} />
        </div>
      </div>
      <div className={styles.card_content}>
        <ConditionalRenderer condition={props.label}>
          <div
            className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(
              props.label
            )}`}
          >
            {props.label}
          </div>
        </ConditionalRenderer>

        <ConditionalRenderer condition={props.title}>
          <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
        </ConditionalRenderer>

        <ConditionalRenderer condition={props.summary}>
          <p className={`${styles.card_summary} fw-600`}>{props.summary}</p>
        </ConditionalRenderer>

        <ConditionalRenderer condition={props.href}>
          <Button href={props.href} icon={props.btnIcon}>
            {props.btnLabel || "Read More"}
          </Button>
        </ConditionalRenderer>
      </div>
    </div>
  </div>
);

export default Card;
