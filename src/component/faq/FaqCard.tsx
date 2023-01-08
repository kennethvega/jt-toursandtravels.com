import  { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsQuestionCircle } from 'react-icons/bs';
import { Collapse } from 'react-collapse';
import { FaqType } from '../../ts/faqTypes';
type FaqItemProps = {
  faq: FaqType;
};
const FaqCard = ({ faq }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#fff] border-gray shadow p-4 cursor-pointer mt-2">
      <div className="flex justify-between items-center hover:text-blue p-3" onClick={() => setIsOpen(!isOpen)}>
        <p className={`${isOpen ? 'text-blue' : 'text-black'} flex items-center gap-3`}>
          <BsQuestionCircle className="w-4 h-4" /> {faq.question}
        </p>
        {/* if open rotate arrow */}
        <MdKeyboardArrowDown className={`${isOpen ? 'over text-blue' : 'out'} text-2xl`} />
      </div>
      <Collapse isOpened={isOpen}>
        <div>{faq.answer}</div>
      </Collapse>
    </div>
  );
};

export default FaqCard;
