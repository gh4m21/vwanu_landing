import Head from 'next/head'
import Image from 'next/image'
import CountdownTimer from '../components/CountdownTimer'

const Home = () => {
  return (
    <div
      style={{
        background: `url("/bg_vwanu.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '1',
      }}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Head>
        <title>Vwanu | Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full items-center justify-center text-center">
        <div className="ml-auto flex items-center justify-end pl-52">
          <div className="ml-auto">
            <p className="text-right text-5xl font-bold text-yellow-500">
              We are Launching Soon
            </p>
            <CountdownTimer />
            <p className="pb-6 text-4xl text-yellow-500">
              join the waiting list
            </p>
            <form>
              <input
                className="w-[80%] items-center rounded-full py-6 px-4 align-middle text-blue-600 placeholder:text-xl hover:text-2xl focus:text-2xl active:text-2xl"
                type="email"
                placeholder="Email Address"
              />
              <button className="absolute left-[33rem] bottom-[11.1rem] w-[14%] items-center rounded-full bg-orange-600 py-4 text-xl text-white ">
                Send Now!
              </button>
            </form>
          </div>
          <div className="mx-auto my-auto mt-8 w-full py-4 md:w-full lg:w-full lg:max-w-lg">
            <Image
              className="z-10 items-center justify-center rounded-lg object-center"
              alt="hero"
              src="/mockup.png"
              height={580}
              width={250}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
