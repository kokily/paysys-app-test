import classNames from 'classnames';
import ActiveLink from '../../ActiveLink';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  href: string;
  icon: string;
  name: string;
}

export default function FooterItem({ ...rest }: Props) {
  return (
    <ActiveLink href={rest.href} activeClassName={cx(styles.active)}>
      <div className={cx(styles.anchor)}>
        <i className="material-icons">{rest.icon}</i>
        {rest.name}
      </div>
    </ActiveLink>
  );
}
