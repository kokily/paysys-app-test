'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export default function ReadWedding() {
  const [file, setFile] = useState<File>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  const onUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) return;

    try {
      const data = new FormData();

      data.set('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error(await response.text());
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className={cx(styles.container)}>
      <form onSubmit={onUpload}>
        <input type="file" name="file" onChange={onChange} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
}
