import { Formik, Form } from 'formik';

const FormikWrapper = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormikWrapper;
