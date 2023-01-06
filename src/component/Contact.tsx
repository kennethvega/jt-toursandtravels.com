import React from 'react';
import Container from './utility/Container';

const Contact = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <h3 className="mb-2  text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">CONTACT US</h3>
      </div>
      <p className="text-center mt-6 text-xl">
        Any concerns or a question ? feel free to email us @
        <a className="underline cursor-pointer text-blue" href="mailto:jttraveltours2022@gmail.com" aria-label="jttraveltours2022@gmail.com">
          jttraveltours2022@gmail.com
        </a>
      </p>
    </Container>
  );
};

export default Contact;
