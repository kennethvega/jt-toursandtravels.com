import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

const Navigation: React.FC = () => {
  const [matchesQuery, setMatchesQuery] = useState<boolean>(null as unknown as boolean);
  const matches = useMediaQuery('(min-width: 929px)');
  //Avoids hydration error
  useEffect(() => {
    setMatchesQuery(matches);
  }, [matches]);

  return (
    <>
      {matchesQuery === true && <NavbarDesktop />}
      {matchesQuery === false && <NavbarMobile />}
    </>
  );
};

export default Navigation;
