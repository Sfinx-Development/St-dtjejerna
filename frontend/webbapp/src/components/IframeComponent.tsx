import React, { FC } from 'react';

interface IframeProps {
  src: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  allowFullScreen?: boolean;
  loading?: 'eager' | 'lazy';
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url';
}

const IframeComponent: FC<IframeProps> = ({ src, width = '100%', height = '450px', style, allowFullScreen = true, loading = 'lazy', referrerPolicy = 'no-referrer-when-downgrade' }) => (
  <iframe
  title='hej'
    src={src}
    width={width}
    height={height}
    style={style}
    allowFullScreen={allowFullScreen}
    loading={loading}
    referrerPolicy={referrerPolicy}
  />
);

export default IframeComponent;
