import React, { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import Container from '../component/utility/Container';
import { getProduct, selectIsLoading, selectProduct } from '../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ProductType } from '../ts/productTypes';
import DOMPurify from 'dompurify';
import Button from '../component/utility/Button';
import Modal from '../component/utility/Modal';
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
      <section className="min-h-[80vh]">
        <div className="grid grid-cols-2-custom gap-10 mt-10">
          <img src={product?.image?.imageURL} alt="tours-image" className="h-[30rem] rounded" />
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
      {isOpen && (
        <Modal openModal={isOpen} onClose={() => setIsOpen(false)}>
          <BookingForm product={product} />
        </Modal>
      )}
    </Container>
  );
};

export default ProductDetails;
