import { Icon, Card, DateSelect } from '~/components'
export const Dashboard = () => (
    <>

        <header className="bg-red-500 text-white p-2">
            <div className="container max-w-3xl  flex justify-between p-4">
                <img src="/imgs/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
                <a href="/profile">
                    <Icon name="profile" className="w-10" />
                </a>

            </div>
        </header>

        <main className='space-y-6'>
            <section className="bg-red-500 text-white">
                <div className="container max-w-3xl space-y-2 p-4">
                    <span className='container max-w-3xl space-y-2'>Olá Bruno</span>
                    <h3 className='text-2xl font-bold'>Qual o seu palpite?</h3>
                </div>
            </section>

            <section id="content" className='container max-w-3xl space-y-4 p-4'>

                <DateSelect/>

                <div className='space-y-4'>
                    <Card
                        timeA={{ slug: 'sui' }}
                        timeB={{ slug: 'cam' }}
                        match={{ time: '7:00' }}
                    />
                    <Card
                        timeA={{ slug: 'uru' }}
                        timeB={{ slug: 'cor' }}
                        match={{ time: '11:00' }}
                    />
                    <Card
                        timeA={{ slug: 'por' }}
                        timeB={{ slug: 'bra' }}
                        match={{ time: '18:00' }}
                    />
                </div>

            </section>
        </main>

    </>
)