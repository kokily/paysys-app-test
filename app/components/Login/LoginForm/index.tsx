import classNames from 'classnames';
import styles from './styles.module.scss';
import useLogin from './../useLogin';

const cx = classNames.bind(styles);

export default function LoginForm() {
  const { username, password, usernameRef, onChange, onLogin } = useLogin();

  return (
    <form onSubmit={onLogin} className={cx(styles.container)}>
      <div className={cx(styles.input_group)}>
        <input
          type="text"
          className={cx(styles.input)}
          name="username"
          value={username}
          onChange={onChange}
          ref={usernameRef}
          required
        />
        <span className={cx(styles.bar)} />
        <label className={cx(styles.label)} htmlFor="username">
          아이디
        </label>
      </div>

      <div className={cx(styles.input_group)}>
        <input
          type="password"
          className={cx(styles.input)}
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <span className={cx(styles.bar)} />
        <label className={cx(styles.label)} htmlFor="password">
          비밀번호
        </label>
      </div>

      <button type="submit" className={cx(styles.button)}>
        <div className={cx(styles.layer)}>어서오세요!</div>
        로그인
      </button>
    </form>
  );
}
