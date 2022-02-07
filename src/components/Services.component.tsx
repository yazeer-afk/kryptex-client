import { FC } from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'
import { ServiceCard } from './ServiceCard.component'

export interface ServicesProps {

}

export const Services: FC<ServicesProps> = (props) => {

    return (
        <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex flex-col justify-start items-start'>
                    <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>Services that we <br /> continoue to improve </h1>
                </div>
            </div>

            <div className='flex flex-col justify-start items-start'>
                <ServiceCard
                    color='bg-[#2952E3]'
                    title='Security Guaranteed'
                    icon={<BsShieldFillCheck font-size={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and maintain the quality of our products.'
                />

                <ServiceCard
                    color='bg-[#89845F]'
                    title='Best Exchange Rates'
                    icon={<BiSearchAlt font-size={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and maintain the quality of our products.'
                />

                <ServiceCard
                    color='bg-[#F84550]'
                    title='Fastest Transactions'
                    icon={<RiHeart2Fill font-size={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and maintain the quality of our products.'
                />
            </div>
        </div>
    )
}