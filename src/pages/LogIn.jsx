import { useNavigate } from "react-router-dom"

const LogIn = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        // Call API
        navigate("/")
    }
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="password" />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default LogIn
