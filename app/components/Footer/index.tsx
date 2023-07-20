import classNames from 'classnames';
import styles from './styles.module.scss';
import FooterItem from './FooterItem';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx(styles.footer)}>
      <div className={cx(styles.contents)}>
        <FooterItem href="/soldier" icon="military_tech" name="현 역" />
        <FooterItem href="/reserve" icon="camera_enhance" name="예비역" />
        <FooterItem href="/general" icon="face" name="일 반" />
        <FooterItem href="/cart" icon="shopping_cart" name="전표확인" />
        <FooterItem href="/fronts" icon="receipt_long" name="빌지목록" />
      </div>
    </footer>
  );
}
