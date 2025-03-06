import React from 'react'
import '../styles/package.css'

const Blog = () => {
  return (
    <div className='package-container'>
      <div className='filter-section'>
          <button>Filter</button>
          <button>Add New</button>
      </div>
      <table  >
        <tr>
          <th>S.N</th>
          <th>Title</th>
          <th>Author</th>
          <th>Published Date</th>
          <th>Action</th>

        </tr>
        <tr>
          <td>1</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>hhh</td>
          <td>hhh</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>hhh</td>
          <td>hhh</td>
        </tr>
      </table>

      <p>To understand the example better, we have added borders to the table.</p>
    </div>
  )
}

export default Blog
