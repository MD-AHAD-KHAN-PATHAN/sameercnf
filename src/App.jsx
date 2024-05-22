

function App() {

  return (
    <>
      <div className="flex justify-between mx-20 my-10">
        <div>
          <p className="text-5xl font-bold text-green-500">SE</p>
        </div>
        <div>
          <ul className="flex gap-3">
            <li><a className="p-4 font-bold" href="home">Home</a></li>
            <li><a className="p-4 font-bold" href="about">About Us</a></li>
            <li><a className="p-4 font-bold" href="profile">Profile</a></li>
            <li><a className="p-4 font-bold" href="contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
