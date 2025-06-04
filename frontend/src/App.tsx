import { useState } from "react"

function App() {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle the submitted text
    console.log("Submitted text:", input)
    setInput("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your text
            </label>
            <input
              id="text-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type something..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
