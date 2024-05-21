/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const InputField = ({ label, placeholder, type, name, onChange }) => {
    return (
        <div className="flex flex-col ">
            <label htmlFor={name} className="text-white text-xl mb-4">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type}
                id={name}
                name={name}
                required
                placeholder={placeholder}
                className=" px-2 max-w-[50%] py-4 rounded-md text-lg mb-10 max-md:max-w-[100%]"
            />
        </div>
    )
}

export default InputField
