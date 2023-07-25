import classNames from 'classnames';
import { useSetAtom } from 'jotai';
import styles from './styles.module.scss';
import { setBride, setHusband } from '@/libs/atom';
import RemoveSignModal from './RemoveSignModal';
import AddSignModal from './AddSignModal';

const cx = classNames.bind(styles);

interface Props {
  wedding: ReadWeddingResponse;
  onRemoveSign: () => void;
  husbandView: boolean | null;
  onConfirmHusband: () => void;
  onCancelHusband: () => void;
  brideView: boolean | null;
  onConfirmBride: () => void;
  onCancelBride: () => void;
}

export default function WeddingTitle({ ...rest }: Props) {
  const setVisibleHusbandSign = useSetAtom(setHusband);
  const setVisibleBrideSign = useSetAtom(setBride);

  const { wedding } = rest.wedding;

  return (
    <div className={cx(styles.container)}>
      <h3 className={cx(styles.name)}>
        신랑님:{' '}
        <strong
          className={cx(styles.select)}
          onClick={() => setVisibleHusbandSign(true)}
        >
          {wedding.husbandName}
        </strong>{' '}
        <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
        <strong
          className={cx(styles.select)}
          onClick={() => setVisibleBrideSign(true)}
        >
          {wedding.brideName}
        </strong>
      </h3>

      {(wedding.husbandImage || wedding.brideImage) && (
        <RemoveSignModal
          husbandImage={wedding.husbandImage || undefined}
          brideImage={wedding.brideImage || undefined}
          onRemoveSign={rest.onRemoveSign}
        />
      )}

      <h4 style={{ margin: 0 }}>
        웨딩 일시: {new Date(wedding.weddingAt).toLocaleDateString()}{' '}
        {wedding.eventAt}
      </h4>

      <AddSignModal
        visible={rest.husbandView!}
        title="신랑 서명"
        onConfirm={rest.onConfirmHusband}
        onCancel={rest.onCancelHusband}
      />

      <AddSignModal
        visible={rest.brideView!}
        title="신부 서명"
        onConfirm={rest.onConfirmBride}
        onCancel={rest.onCancelBride}
      />

      <hr style={{ width: '90%' }} />

      <h3 className={cx(styles.subTitle)}>웨딩 비용</h3>
    </div>
  );
}
