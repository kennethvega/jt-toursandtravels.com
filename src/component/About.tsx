import Container from './utility/Container';

const About = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <h3 className="mb-2  text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">ABOUT US</h3>
      </div>
      <p className="text-2xl text-center">
        JT tours and travels is a duly licensed travel agency in the Philippines providing comprehensive services for groups and individuals to and from country. JT tours and travels, Inc. caters to both group and individual clients. We offer
        complete local and international ground arrangements at very competitive prices. Known for its efficient and professional service.
      </p>
    </Container>
  );
};

export default About;
