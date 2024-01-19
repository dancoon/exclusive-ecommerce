import { titleCase } from '@/src/Utils'
import React from 'react'
import Timer from './Timer'

interface Props {
    name: string
    title: string
    hasTimer?: boolean
    children: React.ReactNode
}

const HomeSections: React.FC<Props> = ({ name, title, hasTimer, children }) => {
    return (
        <div className="mt-12">
            <div className="flex text-red-secondary items-center">
                <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="40" rx="4" fill="#DB4444" />
                </svg>
                <h2 className="ml-4 font-semibold">
                    {name}
                </h2>
            </div>
            <div className="flex items-center">
                <h2 className="font-semibold text-4xl mt-6 mr-24">
                    {titleCase(title)}
                </h2>
                {hasTimer && < Timer />}
            </div>
            {children}
        </div>
    )
}

export default HomeSections