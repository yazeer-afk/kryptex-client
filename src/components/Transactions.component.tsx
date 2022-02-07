import { FC, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { TransactionCard } from './TransactionCard.component'
import dummyData from '../util/dummyData'

export interface TransactionsProps {

}

export const Transactions: FC<TransactionsProps> = (props) => {

    const { currentAccount } = useContext(TransactionContext)

    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount
                    ? <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
                    : <h3 className='text-white text-3xl text-center my-2'>Connexct your wallet</h3>
                }

                <div className='flex flex-wrap justify-center items-center mt-10'>
                    {dummyData.reverse().map((transaction, i) => (
                        <TransactionCard key={i} transaction={transaction}/>
                    ))}
                </div>
            </div>
        </div>
    )
}