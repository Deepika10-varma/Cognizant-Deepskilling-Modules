function BlogDetails({ blogs }) {
  return (
    <div className="section">
      <h1>Blog Details</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;