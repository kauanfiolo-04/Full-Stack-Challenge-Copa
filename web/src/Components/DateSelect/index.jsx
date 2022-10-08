import { addDays, format, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Icon } from '~/components/Icon'

export const DateSelect = ({ currentDate, onChange }) => {

    const prevDay = () => {
        const nextDate = subDays(currentDate, 1)
        onChange(nextDate)
    }
    const nextDay = () => {
        const nextDate = addDays(currentDate, 1)
        onChange(nextDate)
    }
    console.log(currentDate)
    return (
        <div className='flex space-x-4 items-center justify-center p-4'>
            <Icon name='arrowLeft' className="w-6 text-red-500" onClick={prevDay} />
            <span className='font-bold'>
                {format(currentDate, "d 'de' MMMM", { locale: ptBR })}
            </span>
            <Icon name='arrowRight' className="w-6 text-red-500" onClick={nextDay} />
        </div>
    )
}