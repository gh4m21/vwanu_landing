import Head from 'next/head'
import Image from 'next/image'

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
      className="flex min-h-screen flex-col items-center justify-center py-2"
    >
      <Head>
        <title>Vwanu | Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full items-center justify-center text-center">
        <div className="flex items-center justify-center px-16">
          <div className="mx-auto">
            <p className="text-right text-6xl font-bold text-yellow-500">
              We are Launching Soon
            </p>
            <count
            <div className="my-8 flex flex-wrap justify-between rounded-lg bg-white/30 text-center">
              <div className="w-1/4 p-4 sm:w-1/4">
                <h2 className="title-font text-6xl font-bold text-yellow-500 sm:text-4xl">
                  50
                </h2>
                <p className="text-2xl font-medium text-white">Days</p>
              </div>
              <div className="w-1/2 p-4 sm:w-1/4">
                <h2 className="title-font text-6xl font-bold text-yellow-500 sm:text-4xl">
                  30
                </h2>
                <p className="text-2xl font-medium text-white">Hours</p>
              </div>
              <div className="w-1/2 p-4 sm:w-1/4">
                <h2 className="title-font text-6xl font-bold text-yellow-500 sm:text-4xl">
                  30
                </h2>
                <p className="text-2xl font-medium text-white">Minutes</p>
              </div>
              <div className="w-1/2 p-4 sm:w-1/4">
                <h2 className="title-font text-6xl font-bold text-yellow-500 sm:text-4xl">
                  40
                </h2>
                <p className="text-2xl font-medium text-white">Seconds</p>
              </div>
            </div>
            <p className="py-4 text-4xl text-yellow-500">
              join the waiting list
            </p>
            <form>
              <input
                className="w-2/3 items-center rounded-full py-6 px-4 align-middle placeholder:text-xl"
                type="email"
                placeholder="Email Address"
              />
              <button className="absolute left-44 bottom-48 w-1/3 items-center rounded-full bg-orange-600 px-4 py-4 text-white">
                Send Now!
              </button>
            </form>
          </div>
          <div className="mx-auto my-auto w-full py-4 md:w-full lg:w-full lg:max-w-lg">
            <Image
              className="z-10 items-center justify-center rounded-lg object-center"
              alt="hero"
              src="/mockup.png"
              height={580}
              width={270}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
