import Link from "next/link"
const Home = () => {
  return (
    <div className="centerAll">
      <Link href={`/add-doctor`} >
        <button className="btn btn-success">Add Doc</button>
      </Link>

      <Link href={`/doc-cards`} >
        <button className="btn btn-success">Docs</button>
      </Link>
    </div>
  )
}

export default Home