/* eslint-disable react/no-unescaped-entities */
import Button from './Button';
import noPhoto from '../assets/no-photo.png';
import InputField from './InputField';
import { useEffect, useState } from 'react';

const Form = () => {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState([noPhoto]);

  // rendering previews
  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);
  }, [files]);

  return (
    <form>
      <div className='grid grid-cols-2 relative max-md:grid-cols-1'>
        <div className=' flex flex-col gap-4 mt-10 '>
          <InputField
            placeholder={"Введіть ваше ім'я..."}
            label={"Ваше ім'я:"}
          />
          <InputField
            type={'text'}
            placeholder={'Введіть ваш номер телефону...'}
            label={' Номер телефону:'}
          />
          <InputField
            type={'text'}
            placeholder={'ID код...'}
            label={' Ідентифікаційний код цифрами:'}
          />
        </div>

        <div className='flex items-center gap-10  max-md:flex-col'>
          <label htmlFor='fileInput' className='text-white text-xl  '>
            <p className='mb-4'>Тех-паспорт сторінка 1:</p>
            {previews && previews.map((pic, i) => <img key={i} src={pic} />)}
          </label>
          <input
            type='file'
            id='fileInput'
            accept='image/jpeg, image/png, image/jpg'
            name='fileInput'
            required
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles(e.target.files);
              }
            }}
            className=' hidden '
          />

          <label htmlFor='fileInput2' className='text-white text-xl  '>
            <p className='mb-4'>Тех-паспорт сторінка 2:</p>
            {previews && previews.map((pic, i) => <img key={i} src={pic} />)}
          </label>
          <input
            type='file'
            id='fileInput2'
            accept='image/jpeg, image/png, image/jpg'
            name='fileInput2'
            required
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles(e.target.files);
              }
            }}
            className=' hidden '
          />
          <label htmlFor='fileInput3' className='text-white text-xl  '>
            <p className='mb-4'>Тех-паспорт сторінка 3:</p>
            {previews && previews.map((pic, i) => <img key={i} src={pic} />)}
          </label>
          <input
            type='file'
            id='fileInput3'
            accept='image/jpeg, image/png, image/jpg'
            name='fileInput3'
            required
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles(e.target.files);
              }
            }}
            className=' hidden '
          />
        </div>
      </div>
      <div className='flex justify-center '>
        <Button
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
