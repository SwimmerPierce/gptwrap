import { Layout } from "@/components/layout"
import { ChatInterface } from "@/components/chat-interface"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <>
      <Layout>
        <ChatInterface />
      </Layout>
      <Toaster />
    </>
  )
}

export default App
