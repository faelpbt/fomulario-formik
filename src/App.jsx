import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema/schema';

function App() {
  function onSubmit( values, actions ) {
    console.log('SUBMIT', values);
  }

  function validate( values ) {
    const errors = {};
    if (!values.name) {
      errors.name = 'Nome é obrigatório';
    }
    if (!values.email) {
      errors.email = 'Email é obrigatório';
    }
    return errors;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Formik 
        validate={validate}
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: '',
        }}
      >
        {({ values, errors, touched }) => ( 
          <Form className='flex flex-col justify-center items-center gap-9 bg-gray-100 p-10 rounded-md'>
            <div className="flex flex-col h-12">
              <label className='text-gray-800'>Nome:</label>
              <Field className='text-black rounded py-0.5 bg-gray-300 px-1' name='name' type='text' />
              <ErrorMessage className='text-red-600 text-[200] italic text-sm' name='name' component='span' />
            </div>
            <div className="flex flex-col h-12">
              <label className='text-gray-800'>Email:</label>
              <Field className='text-black rounded py-0.5 bg-gray-300 px-1' name='email' type='email' />
              <ErrorMessage className='text-red-600 text-[200] italic text-sm' name='email' component='span' />
            </div>
            <button className="bg-green-500 px-6 py-1 rounded" type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App;
