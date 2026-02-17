import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Gallery from "./Pages/Gallery";

// Layout Lazy
const MainLayout = lazy(() => import("./layout/MainLayout"));

// Pages Lazy
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Courses = lazy(() => import("./Pages/Courses"));
// const Gallery = lazy(() => import("./Pages/Gallery"));
const Contact = lazy(() => import("./Pages/Contact"));
const StudentRegistration = lazy(() => import("./Components/StudentRegistration"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
      { path: "register", element: <StudentRegistration /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
