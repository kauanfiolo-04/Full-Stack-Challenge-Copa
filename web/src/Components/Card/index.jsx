import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'


export const Card = ({ gameId,homeTeam, awayTeam, gameTime }) => {

    const [auth]=useLocalStorage('auth')

    const validationSchema = yup.object().shape({
        homeTeamScore: yup.string().required(),
        awayTeamScore: yup.string().required()
    })

    const formik = useFormik({
        onSubmit: (values) => {
            axios({
                method: 'post',
                baseURL: 'http://localhost:3333',
                url:'/hunches',
                headers:{
                    authorization: `Bearer ${auth.accessToken}`,
                },
                data:{
                    ...values,
                    gameId
                }
            })
        },
        initialValues: {
            homeTeamScore: '',
            awayTeamScore: '',
        },
        validationSchema
    })


    return (
        <div className="rounded-xl border border-gray-300 text-center p-4 space-y-4">
            <span className='text-xs md:text-md text-gray-700 font-bold'>{gameTime}</span>

            <form className="flex space-x-4 justify-center items-center">
                <span className="uppercase">{homeTeam}</span>
                <img src={`/imgs/flags/${homeTeam}.png`} />

                <Input type="number" max={10}
                    className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center'
                    name='homeTeamScore'
                    value={formik.values.homeTeamScore}
                    onChange={formik.handleChange} onBlur={formik.handleSubmit}
                />

                <span className=' text-red-500 font-bold'>X</span>
                <Input type="number" max={10}
                    className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center'
                    name='awayTeamScore'
                    value={formik.values.awayTeamScore}
                    onChange={formik.handleChange} onBlur={formik.handleSubmit}
                />

                <img src={`/imgs/flags/${awayTeam}.png`} />
                <span className="uppercase">{awayTeam}</span>
            </form>
        </div>
    )
}