import { useState } from 'react'

function Index() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('') // state สำหรับเก็บค่าหลัง submit

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedName(name) // เอาค่า name มาเก็บไว้
    setName('') // เคลียร์ input
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-1 border"
        />
        <input
          type="submit"
          value="Submit"
          className="p-1 bg-green-400 rounded-sm ms-3"
        />
      </form>

      <div className="p-3">
        {submittedName && (   // แสดงผลเฉพาะตอนที่กด submit แล้ว
          <h1 className="text-2xl font-bold">Hello {submittedName}</h1>
        )}
      </div>
    </div>
  )
}

export default Index
 