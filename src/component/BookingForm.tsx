import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../redux/features/bookings/bookingSlice';
import { useAppDispatch } from '../redux/hooks';
import { ProductType } from '../ts/productTypes';
import Button from './utility/Button';
import Container from './utility/Container';
import Loading from './utility/Loading';

type BookingFormProps = {
  product: ProductType | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const BookingForm = ({ product, setIsOpen }: BookingFormProps) => {
  const initialState = {
    packageName: `${product?.city} | ${product?.country} | ${product?.price}`,
    tourDate: product?.date,
    customerName: '',
    contact: '',
    email: '',
    adultCount: '',
    childCount: '',
    hotel: '',
    numberOfRooms: '',
    status: false,
  };

  const dispatch = useAppDispatch();
  const [data, setData] = useState(initialState);
  const [note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { status, customerName, contact, email, adultCount, childCount, hotel, numberOfRooms } = data;
  const navigate = useNavigate();
  // Handling input changes on product
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value }); //set name to its value (name should be equal to value in input)
  };

  // Handle Submit Booking
  const saveBooking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      packageName: `${product?.city} | ${product?.country} | ${product?.price}`,
      tourDate: product?.date,
      customerName,
      contact,
      email,
      adultCount,
      childCount,
      hotel,
      numberOfRooms,
      note,
      status,
    };
    await dispatch(createBooking(formData));
    setIsLoading(false);
    navigate('/thankyou');
  };

  return (
    <Container>
      <form onSubmit={saveBooking} className="bg-lightGray p-10 sm:p-2 rounded-md mb-10">
        <Button onClick={() => setIsOpen(false)}>&larr; Back</Button>
        <h3 className="text-2xl font-semibold text-darkBlue">Please fill out the form</h3>
        <p className="text-lg mt-1">
          <span className="font-bold text-darkBlue">Tour:</span> {`${product?.city} | ${product?.country} | ₱${product?.price}`}
        </p>
        <p className="text-lg mt-1">
          <span className="font-bold text-darkBlue">Tour Date:</span> {product?.date}
        </p>
        <label>Name:</label>
        <input name="customerName" value={customerName} onChange={handleInputChange} type="text" placeholder="Your name" required />
        <label>Contact number:</label>
        <input name="contact" type="text" value={contact} onChange={handleInputChange} placeholder="09461721658" required />
        <label>Email:</label>
        <input name="email" type="email" value={email} onChange={handleInputChange} placeholder="Your email address" required />
        <div className="flex gap-10">
          <div className="max-w-[5rem]">
            <label>Adult count:</label>
            <input name="adultCount" value={adultCount} onChange={handleInputChange} type="number" min="1" max="100" placeholder="0" required />
          </div>
          <div className="max-w-[5rem]">
            <label>Child count:</label>
            <input name="childCount" value={childCount} onChange={handleInputChange} type="number" min="1" max="100" placeholder="0" />
          </div>
        </div>
        <label>Hotel:</label>
        <input name="hotel" value={hotel} onChange={handleInputChange} type="text" placeholder="Hotel preference (optional)" />
        <label>Number of rooms:</label>
        <input name="numberOfRooms" value={numberOfRooms} onChange={handleInputChange} type="text" placeholder="Number of rooms (optional)" />
        <label>Inquiry message:</label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Inquiry, Questions and message" className="w-full border border-lightGray min-h-[5rem]" required />

        {!isLoading ? (
          <Button type="submit">Inquire Now!</Button>
        ) : (
          <Button>
            <Loading />
          </Button>
        )}
      </form>
    </Container>
  );
};

export default BookingForm;
