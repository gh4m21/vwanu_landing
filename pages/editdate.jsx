import React, { useEffect } from 'react'

const editDate = () => {
  const handleFetch = () => {
    try {
      fetch('api/launchDate/?id=627afe12ac2aae31906d033f', {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status === 200) {
          console.log('success', res)
        } else {
          console.log('error', res.data)
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
  const dateNow = new Date()

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <>
      <main
        style={{
          background: `url("/bg_vwanu.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: '1',
        }}
        className="mx-auto flex min-h-screen items-center"
      >
        <div className="mx-auto pb-10">
          <h1 className="text-center text-5xl font-semibold text-yellow-500">
            Edit Launch Date
          </h1>
          <form className="mx-auto py-10 text-center">
            <input
              type="datetime-local"
              name="launchDate"
              min={dateNow}
              className="w-94 mx-auto rounded-full bg-white py-2 px-4 font-semibold text-blue-600"
            />
          </form>
        </div>
      </main>
    </>
  )
}

export default editDate
