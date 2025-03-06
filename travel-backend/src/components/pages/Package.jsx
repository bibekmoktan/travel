import React from 'react'
import '../styles/package.css'

const Package = () => {
  return (
    <div className='package-container'>
      <div className='filter-section'>
          <button>Filter</button>
          <button>Add New</button>
      </div>
      <table  >
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Duration</th>
          <th>Difficulty</th>
          <th>Price</th>
          <th>Action</th>

        </tr>
        <tr>
          <td>1</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>hhh</td>
          <td>hhh</td>
          <td>hhh</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>hhh</td>
          <td>hhh</td>
          <td>hhh</td>
        </tr>
      </table>
    </div>
  )
}

export default Package
