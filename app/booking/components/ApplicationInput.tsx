"use client"
interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string
    name:string

  }
  
  const Input: React.FC<InputProps> = ({ placeholder, value,  onChange, disabled , label,name}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };
    return (
      <div className="w-full">
          <label  className='block text-sm font-medium text-gray-700 leading-6'>
                {label}
            </label>
      
        <input
          disabled={disabled}
          onChange={handleChange}
          name={name}
          value={value}
          placeholder={placeholder}
          className="
            w-full
            p-4 
            text-lg 
            bg-white
            border-2
            border-gray-300 
            rounded-md
            outline-none
            text-black
            focus:border-sky-500
            focus:border-2
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
            mb-2
          "
        
        />
      </div>
     );
  }
   
  export default Input;