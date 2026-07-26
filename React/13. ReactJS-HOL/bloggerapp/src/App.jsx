import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

import { books, blogs, courses } from "./data";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">

      {showCourses && <CourseDetails courses={courses} />}

      {showBooks ? <BookDetails books={books} /> : null}

      {showBlogs ? <BlogDetails blogs={blogs} /> : null}

    </div>
  );
}

export default App;