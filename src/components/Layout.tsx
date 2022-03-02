import Spacer from '@/components/Spacer'
import Footer from '@/components/Footer'
import { useAuthContext } from '@/contexts/AuthProvider'

const Layout: React.FC = ({ children }) => {
  const { isLogin } = useAuthContext()
  return (
    <div className="flex flex-col min-h-screen">
      {isLogin && <header className="w-full h-14 bg-white">ヘッダー</header>}
      <Spacer />
      <div className="w-full flex flex-row">
        {/* <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
            <div className="sticky top-0 p-4 w-full h-full">
              <!-- nav goes here -->
              </div>
            </div> */}
        <Spacer />
        <main className="max-w-3xl w-full sm:px-4">{children}</main>
        {/* <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
              <!-- fixed-width -->
              <div className="flex sm:flex-col px-2">
              <!-- sidebar goes here -->
              </div>
            </div> */}
        <Spacer />
      </div>
      <Spacer />
      <Footer />
    </div>
  )
}

export default Layout
