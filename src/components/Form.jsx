/* eslint-disable react/no-unescaped-entities */
import Button from './Button'
import noPhoto from '../assets/no-photo.png'
import InputField from './InputField'
import { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [files, setFiles] = useState([noPhoto, noPhoto, noPhoto])
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const getFile = (index, e) => {
        const newFiles = [...files]
        newFiles[index] = URL.createObjectURL(e.target.files[0])
        setFiles(newFiles)
       
    }

    const sendEmail = () => {
        axios.get('http://localhost:5000/', {
                params: {
                    email,
                    subject,
                    message,
                },
            })
            .then(() => console.log('success'))
            .catch(() => {
                console.log('failur')
            })
    }

    return (
        <form >
            <div className="grid grid-cols-2 relative max-md:grid-cols-1">
                <div className=" flex flex-col gap-4 mt-10 ">
                    <InputField
                    type={'email'}
                        placeholder={"Введіть ваше ім'я..."}
                        label={"Ваше ім'я:"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                    type={'text'}
                        placeholder={'Введіть ваш номер телефону...'}
                        label={' Номер телефону:'}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <InputField
                    type={'text'}
                        placeholder={'ID код...'}
                        

                        label={' Ідентифікаційний код цифрами:'}
                    />
                </div>

                <div className="flex items-center gap-10  max-md:flex-col">
                    {files.map((file, index) => (
                        <div key={index}>
                            <label
                                htmlFor={`file-input-${index}`}
                                className="text-white text-xl  "
                            >
                                <p className="mb-4">
                                    Тех-паспорт сторінка {index + 1}:
                                </p>
                                <img
                                    src={file}
                                    alt=""
                                    className="  h-[200px] w-[200px] "
                                />
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id={`file-input-${index}`}
                                className="hidden "
                                onChange={(e) => getFile(index, e)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center ">
                <Button
                    type={'submit'}
                    onClick={sendEmail}
                    className={
                        'max-md:text-lg max-md:px-6 max-md:py-4 bg-white text-[#28303d] text-xl px-16 py-4 font-medium mt-10 rounded-md border-2 hover:bg-opacity-0 hover:text-white'
                    }
                >
                    Відправити
                </Button>
            </div>
        </form>
    )
}

export default Form
