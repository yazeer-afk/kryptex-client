import { FC } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { FeatureCard } from './FeatureCard.component'
import { Input } from './Input.component'
import { Loader } from './Loader.component'

export interface WelcomeProps {

}

export const Welcome: FC<WelcomeProps> = (props) => {

    const connectWallet = () => { }
    const handleSubmit = () => {}

    const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
                        Send Crypto <br />
                        Around the world
                    </h1>
                    <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base '>
                        Explore the crypto world. Buy and sell cryptocurrencies easily on kryptex
                    </p>

                    <button type='button'
                        onClick={connectWallet}
                        className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
                    >
                        <span className='text-white text-base font-semibold'>
                            Connect Wallet
                        </span>
                    </button>

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <FeatureCard title='Reliability' rounded='tl' />
                        <FeatureCard title='Security' />
                        <FeatureCard title='Etherium' rounded='tr' />
                        <FeatureCard title='Web 3.0' rounded='bl' />
                        <FeatureCard title='Low Fees' />
                        <FeatureCard title='Blockchain' rounded='br' />
                    </div>
                </div>

                <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
                    <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
                        <div className='flex justify-between flex-col w-full h-full'>
                            <div className='flex justify-between items-start'>
                                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center '>
                                    <SiEthereum fontSize={21} color='#fff' />
                                </div>
                                <BsInfoCircle fontSize={17} color='#fff' />
                            </div>
                            <div>
                                <p className='text-white font-light text-sm'>
                                    0xasdafasd.....fgdgf
                                </p>
                                <p className='text-white font-semibold text-lg mt-1'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                        <Input
                            placeholder='Address To'
                            name='addressTo'
                            type='text'
                            handleChange={(e, name) => { }}
                        />
                        <Input
                            placeholder='Amount (ETH)'
                            name='amount'
                            type='number'
                            handleChange={(e, name) => { }}
                        />
                        <Input
                            placeholder='Keyword (GIF)'
                            name='keyword'
                            type='text'
                            handleChange={(e, name) => { }}
                        />
                        <Input
                            placeholder='Enter Message'
                            name='message'
                            type='text'
                            handleChange={(e, name) => { }}
                        />

                        <div className='h-[1px] w-full bg-gray-400 my-2' />

                        {true
                            ? <Loader />
                            : (
                                <button
                                    type='button'
                                    onClick={handleSubmit}
                                    className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'
                                >
                                    Send now
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}