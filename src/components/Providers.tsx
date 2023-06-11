'use client';
import { RecoilRoot } from 'recoil';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Providers;
