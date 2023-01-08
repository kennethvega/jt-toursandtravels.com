import React from 'react';
type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[78rem] mx-auto px-6 sm:px-2">{children}</div>;
};

export default Container;
