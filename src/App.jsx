import { ArticlesContainer } from "./components/ArticlesContainer"
import { Header } from "./components/Header"
import { MainComponent } from "./components/MainComponent"
import { NewContainer } from "./components/NewContainer"

function App() {

  return (
    <main className="px-4 pt-6">
      <Header/>
      <div className="lg:flex lg:gap-8">
        <MainComponent/>
        <NewContainer/>
      </div>
      <ArticlesContainer/>
    </main>
  )
}

export default App
