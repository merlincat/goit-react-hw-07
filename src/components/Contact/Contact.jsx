import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.contactInfo}>
        <div className={css.contactWrap}>
          <p>
            <FaUser className={css.icon} />
            {data.name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} />
            {data.number}
          </p>
        </div>
        <button
          onClick={() =>
            dispatch(deleteContact(data.id))
              .unwrap()
              .then(value => {
                toast.success(`Contact ${value.name} deleted from your list!`);
              })
              .catch(() => {
                toast.error('Oops, something went wrong, please try again');
              })
          }
          className={css.contactBtn}
        >
          Delete
        </button>
      </div>
      <Toaster />
    </>
  );
};

export default Contact;
