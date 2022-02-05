import { FC } from 'react'

export interface InputProps {
    placeholder: string
    name: string
    type: string
    value?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void
}

export const Input: FC<InputProps> = ({ type, placeholder, value, handleChange, name }) => {

    return (
        <input
            type={type}
            placeholder={placeholder}
            step='0.0001'
            value={value}
            onChange={(e) => { handleChange(e, name) }}
            className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
        />
    )
}