import UseRecoilStateComponent from '@/components/UseRecoilStateComponent';
import UseRecoilStateSelectorComponent from '@/components/UseRecoilStateSelectorComponent';
import React from 'react';

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div>
      <UseRecoilStateComponent />
      <UseRecoilStateSelectorComponent />
    </div>
  );
};

export default page;
