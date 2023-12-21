import Link from "next/link"
const Home = () => {
  return (
    <div className="centerAll">
      <Link href={`/forminput`} >
        <button className="btn btn-success">Add Doc</button>
      </Link>
    </div>
  )
}

export default Home