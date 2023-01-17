import { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import Container from '../component/utility/Container';
import { getProduct, selectIsLoading, selectProduct } from '../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ProductType } from '../ts/productTypes';
import DOMPurify from 'dompurify';
import Button from '../component/utility/Button';

import BookingForm from '../component/BookingForm';
const ProductDetails = () => {
  const { id } = useParams();
  // redux global state
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const productData = useAppSelector(selectProduct);
  // local state
  const [product, setProduct] = useState<ProductType | null>(productData);
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  // fetch data
  useEffect(() => {
    const getDetails = async () => {
      await dispatch(getProduct(id));
    };
    getDetails();
  }, [id]);
  useEffect(() => {
    const setDetails = async () => {
      setProduct(productData);
    };
    setDetails();
  }, [productData, id]);

  return (
    <Container>
      <>
        {!isOpen ? (
          <>
            {!isLoading ? (
              <section className="min-h-[80vh] mb-10">
                <div className="grid grid-cols-2-custom gap-10 mt-10">
                  <img src={product?.image?.imageURL} alt="tours-image" className="h-[30rem] rounded-lg bg-cover bg-center sm:h-[25rem] shadow-lg" />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-3">
                      <h1 className="text-2xl font-bold text-darkBlue ">{product?.city.toUpperCase()}</h1>
                      <span className="flex items-center text-gray text-lg gap-1">
                        <IoLocationSharp className="text-blue" /> {product?.country.toUpperCase()}
                      </span>
                      <div>
                        <span className="font-semibold">Details:</span>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(product?.description!),
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray text-xl mb-3">₱{product?.price}</p>
                      <div>
                        <Button onClick={() => setIsOpen(true)}>
                          <p className="px-5">INQUIRE NOW!</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <div className="min-h-[80vh]">
                <div className="grid grid-cols-2-custom gap-10 mt-10 animate-pulse">
                  <div className="flex items-center justify-center w-full h-[30rem] bg-lightGray">
                    <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className=" bg-lightGray rounded w-60 h-[2.5rem] mb-4"></div>
                    <div className=" bg-lightGray rounded w-24 h-[1.5rem] mb-4"></div>
                    <div className=" bg-lightGray rounded w-full h-[18rem] mb-2.5"></div>
                    <div className=" bg-lightGray rounded w-56 h-[2rem] mb-4"></div>
                    <div className=" bg-lightGray rounded w-48 h-[2.5rem] mb-4"></div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <BookingForm product={product} setIsOpen={setIsOpen} />
        )}
      </>
    </Container>
  );
};

export default ProductDetails;
