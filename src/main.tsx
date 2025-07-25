import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Since this is a vanilla HTML/JS app, we'll use a simple React wrapper
function App() {
  React.useEffect(() => {
    // Redirect to the main HTML page
    window.location.href = '/index.html'
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Tasbih Counter...</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)