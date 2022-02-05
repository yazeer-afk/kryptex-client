import {FC} from 'react'

export interface FeatureCard {
    title: string
    rounded?: 'tl' | 'tr' | 'bl' | 'br'
}

export const FeatureCard: FC<FeatureCard> = ({title, rounded}) => {

    const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

    return (
        <div className={`${rounded? `rounded-${rounded}-2xl`: ''} ${commonStyles}`}>
            {title}
        </div>
    )
}