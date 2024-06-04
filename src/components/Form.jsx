/* eslint-disable react/no-unescaped-entities */
import Button from './Button';
import noPhoto from '../assets/no-photo.png';
import InputField from './InputField';
import { useState } from 'react';

import { render } from '@react-email/render';
import Email from '../../emails/Email';

const Form = ({ value }) => {
  const [files, setFiles] = useState([noPhoto, noPhoto, noPhoto]);
  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const getFile = (index, e) => {
    const newFiles = [...files];
    newFiles[index] = URL.createObjectURL(e.target.files[0]);
    setFiles(newFiles);
  };

  const emailHtml = render(
    <Email
      url='https://example.com'
      value={value}
      name={formState.name}
      number={formState.number}
      codeID={formState.codeId}
    />
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      SecureToken: 'bc5b9d4e-9dae-42b9-b54e-639acf005d2d',
      To: 'chetigry@gmail.com',
      From: 'chetigry@gmail.com',
      Subject: `Нові дані з сайту Strakhova24 `,
      Body: emailHtml,
    };

    window.Email.send(config)
      .then(() => setFormState(''), alert('Email sent successfully'))
      .catch((err) => console.error('Email not send:', err));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='grid grid-cols-2 relative max-md:grid-cols-1'>
        <div className=' flex flex-col gap-4 mt-10 '>
          <InputField
            value={formState.name || ''}
            name={'name'}
            placeholder={"Введіть ваше ім'я..."}
            label={"Ваше ім'я:"}
            onChange={changeHandler}
          />
          <InputField
            value={formState.number || ''}
            name={'number'}
            type={'text'}
            placeholder={'Введіть ваш номер телефону...'}
            label={' Номер телефону:'}
            onChange={changeHandler}
          />
          <InputField
            value={formState.codeId || ''}
            name={'codeId'}
            type={'text'}
            placeholder={'ID код...'}
            label={' Ідентифікаційний код цифрами:'}
            onChange={changeHandler}
          />
        </div>

        <div className='flex items-center gap-10  max-md:flex-col'>
          {files.map((file, index) => (
            <div key={index}>
              <label
                htmlFor={`file-input-${index}`}
                className='text-white text-xl  '
              >
                <p className='mb-4'>Тех-паспорт сторінка {index + 1}:</p>
                <img src={file} alt='' className='  h-[200px] w-[200px] ' />
              </label>
              <input
                type='file'
                accept='image/*'
                id={`file-input-${index}`}
                className='hidden '
                onChange={(e) => getFile(index, e)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center '>
        <Button
          type={'submit'}
          className={
            'max-md:text-lg max-md:px-6 max-md:py-4 bg-white text-[#28303d] text-xl px-16 py-4 font-medium mt-10 rounded-md border-2 hover:bg-opacity-0 hover:text-white'
          }
        >
          Відправити
        </Button>
      </div>
    </form>
  );
};

export default Form;
