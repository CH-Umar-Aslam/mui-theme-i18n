import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tour from "./Tour"
import Test from "./components/test";

// export const typographyTheme = createTheme({
//   palette: {
//     typography: {
//       fontFamily: 'Roboto, sans-serif',
//       fontSize: 16,
//     },
//   }
// });

function App() {




  return (
    <div>

      <BrowserRouter >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/id" element={<Tour />} />
          <Route path="/test" element={<Test />} />
        </Routes>

      </BrowserRouter>

    </div >

  )
}

export default App
