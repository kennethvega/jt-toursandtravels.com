import Button from '../component/utility/Button';
import Container from '../component/utility/Container';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';
import { runFireWorks } from '../hooks/utility';
const Success = () => {
  useEffect(() => {
    runFireWorks();
  }, []);
  return (
    <Container>
      <div className="min-h-[60vh] flex justify-center items-center flex-col gap-5">
        <h1 className="text-6xl text-darkBlue">THANK YOU FOR INQUIRING</h1>
        <h3 className="text-2xl text-darkBlue">Your message has been sent, We will get back to you as soon as possible</h3>
        <Link to="/#">
          <Button>Go back to home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Success;
