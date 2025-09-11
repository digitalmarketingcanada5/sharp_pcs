import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
