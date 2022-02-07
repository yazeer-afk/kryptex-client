import { FC, useEffect, useState } from 'react'
import { IFormData, TransactionContext } from '../context/TransactionContext'
import { ethers } from 'ethers'
import { contractAbi } from '../util/constants'

const { ethereum } = window

const getEthereumContract = () => {

    const contractAddress = import.meta.env.CONTRACT_ADDRESS as string
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const TransactionContract = new ethers.Contract(contractAddress, contractAbi, signer)

    return TransactionContract
}

export interface ContextWrapperProps {

}

export const ContextWrapper: FC<ContextWrapperProps> = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState<IFormData>({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const checkIfWalletConnected = async () => {
        try {
            if (!ethereum)
                return alert('Please add metamask to your browser!')

            const accounts = await ethereum.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentAccount(accounts[0])


                // getAllTransactions(); 
            } else {
                console.log('No accounts found')
            }
        } catch (error) {
            console.log(error)
            throw new Error('No ethereum object')
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum)
                return alert('Please add metamask to your browser!')

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0])

        } catch (error) {
            console.log(error)
            throw new Error('No ethereum object')
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum)
                return alert('Please add metamask to your browser!')

            const { addressTo, amount, keyword, message } = formData
            const ethContract = getEthereumContract()
            // console.log(ethContract)
            const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex
                }]
            })


            const transactionHash = await ethContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

            setIsLoading(true)
            await transactionHash.wait()
            setIsLoading(false)

            const transactionCount = await ethContract.getTransactionCount()
            setTransactionCount(transactionCount.toNumber())

        } catch (error) {
            console.log(error)
            throw new Error('No ethereum object')
        }
    }

    useEffect(() => {
        checkIfWalletConnected()
    }, [])

    return (
        <TransactionContext.Provider value={{
            connectWallet,
            currentAccount,
            handleChange,
            formData,
            sendTransaction,
            isLoading
        }}>
            {children}
        </TransactionContext.Provider>
    )
}