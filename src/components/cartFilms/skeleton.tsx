import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: JSX.IntrinsicAttributes) => (
  <ContentLoader
    speed={2}
    width={177}
    height={250}
    viewBox="0 0 177 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="539" y="148" rx="3" ry="3" width="67" height="11" />
    <rect x="524" y="151" rx="3" ry="3" width="140" height="11" />
    <rect x="547" y="152" rx="3" ry="3" width="53" height="11" />
    <rect x="556" y="154" rx="3" ry="3" width="72" height="11" />
    <rect x="567" y="154" rx="3" ry="3" width="37" height="11" />
    <rect x="492" y="149" rx="3" ry="3" width="140" height="11" />
    <rect x="528" y="149" rx="45" ry="45" width="165" height="11" />
    <rect x="-78" y="-51" rx="0" ry="0" width="280" height="371" />
  </ContentLoader>
);

export default Skeleton;
