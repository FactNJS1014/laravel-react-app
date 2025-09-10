import { useState } from 'react'

function Index() {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Hello, ${name}`)
    setName('')  // ใช้ state ตรงๆ
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}              // ผูกกับ state
          onChange={(e) => setName(e.target.value)} // อัปเดต state
          className="p-1 border"
        />
        <input
          type="submit"
          value="Submit"
          className="p-1 bg-green-400 rounded-sm ms-3"
        />
      </form>
    </div>
  )
}

export default Index
