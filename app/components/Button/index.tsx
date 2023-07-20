import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface Props {
  children: string;
  color:
    | 'cancel'
    | 'submit'
    | 'edit'
    | 'remove'
    | 'restore'
    | 'menu'
    | 'reserve'
    | 'employee'
    | 'admin';
  fullsize?: boolean;
  onClick?: (e: any) => void;
  type?: string;
}

export default function Button({ children, ...rest }: Props) {
  const htmlProps = rest as any;

  return (
    <button
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }

        (e.target as HTMLButtonElement).blur();
      }}
      className={cx(
        styles.button,
        styles[rest.color],
        rest.fullsize && styles['fullsize']
      )}
    >
      {children}
    </button>
  );
}
