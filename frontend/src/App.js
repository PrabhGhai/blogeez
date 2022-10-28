import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import YourBlogsCard from "./components/profile/YourBlogsCard";
import AddBlogsCard from "./components/profile/AddBlogsCard";
import UpdateBlog from "./components/profile/UpadteBlog.js";
import AuthorProfile from "./components/AuthorProfile/AuthorProfile";
import Search from "./components/Search/Search.js";
import BlogsByCat from "./components/categories/BlogsByCat.js";

function App() {
  //const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="App bg-light">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories/all" element={<Categories />}></Route>
        <Route path="/categories/:id" element={<BlogsByCat />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />}>
          <Route exact path="yourblogs" element={<YourBlogsCard />} />
          <Route path="addblogs" element={<AddBlogsCard />} />
          <Route path="updateblogs/:id" element={<UpdateBlog />} />
        </Route>
        <Route path="/categories/all/author/:id" element={<AuthorProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
