import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  native: string;
  menu: Array<MenuType>;
  onMenu: (divide: string) => void;
}

export default function MainItem({ native, menu, onMenu }: Props) {
  return (
    <>
      {menu.map((item) => (
        <div
          key={item.id}
          className={cx(styles.container, styles[native])}
          onClick={() => onMenu(item.divide)}
        >
          {item.divide}
        </div>
      ))}
    </>
  );
}
