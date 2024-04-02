import { Form, Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();

  const contactNumberId = nanoid(4);
  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formWrapper}>
        <div className={css.formInner}>
          <label>Name</label>
          <Field className={css.formInput} name="name" placeholder="John Doe" />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="div"
          />
        </div>
        <div className={css.formInner}>
          <label htmlFor={contactNumberId}>Number</label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={contactNumberId}
            placeholder="111-22-33"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          />
          <ErrorMessage name="number" component="div" />
        </div>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
