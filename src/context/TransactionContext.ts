import { createContext } from 'react'

export interface IFormData {
    addressTo: string
    amount: string
    keyword: string
    message: string
}

interface ITransactionContext {
    connectWallet?: () => Promise<void>
    currentAccount?: string
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void
    formData?: IFormData
    sendTransaction: () => Promise<void>
    isLoading: boolean
}

const sendTransaction =async () => {}

export const TransactionContext = createContext<ITransactionContext>({sendTransaction, isLoading: false})
