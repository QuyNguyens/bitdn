import React from 'react';

type WrapComponentProps = {
  children: React.ReactNode;
};

const WrapComponent = ({ children }: WrapComponentProps) => {
  return <div className="w-full bg-gray-100 py-10 flex justify-center">{children}</div>;
};

export default WrapComponent;
