import React from 'react';
import Container from './utility/Container';

const About = () => {
  return (
    <Container>
      <section className="mt-20" id="about">
        <div className="flex justify-center">
          <h3 className="mb-6 mt-14 text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">ABOUT US</h3>
        </div>
        <p className="text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis necessitatibus eligendi, laudantium aperiam minus possimus illo voluptas! Non aperiam repudiandae dolor sunt quam. Repellat quia ducimus eos debitis tempore! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Veniam velit debitis sit porro commodi itaque, explicabo inventore temporibus repudiandae facilis doloremque dolorum libero dicta vel nihil quia maxime. Voluptatem, repudiandae.
        </p>
      </section>
    </Container>
  );
};

export default About;
