import Head from 'next/head'
import CountdownTimer from '../components/CountdownTimer'
import ModalSubscribers from '../components/ModalSubscribers'

const Home = () => {
  return (
    <div
      style={{
        background: `url("/bg_vwanu.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        opacity: '1',
      }}
      className="mx-auto min-h-screen"
    >
      <Head>
        <title>Vwanu | Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto h-screen w-full max-w-screen-2xl items-center justify-center text-center">
        <div className="ml-auto flex flex-wrap-reverse items-center justify-end px-10 lg:flex-nowrap xl:pl-52">
          <div className="mx-auto pt-24 xl:ml-auto xl:pt-0">
            <p className="text-center text-3xl font-bold text-v-yellow md:text-5xl lg:text-4xl xl:text-right xl:text-5xl">
              We are Launching Soon
            </p>
            <CountdownTimer />
            <p className="pb-6 text-3xl  text-v-yellow md:text-5xl lg:text-4xl xl:text-4xl">
              join the waiting list
            </p>
            <ModalSubscribers />
          </div>
          <div className="mx-auto my-auto mt-8 hidden basis-1/3 py-4 md:w-full lg:block">
            <img
              className="z-10 w-full items-center justify-center rounded-xl object-center lg:w-64"
              alt="hero"
              src="/mockup.png"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
