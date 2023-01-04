import Container from '../utility/Container';
import ToursList from './ToursList';

const Tours = () => {
  return (
    <section className=" pb-10 min-h-full bg-[#F5F5F5] w-full">
      <Container>
        <div className="flex justify-center">
          <h3 className="text-center mb-6 mt-6 text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">DISCOVER OUR BEST DEALS</h3>
        </div>
        <ToursList />
      </Container>
    </section>
  );
};

export default Tours;
