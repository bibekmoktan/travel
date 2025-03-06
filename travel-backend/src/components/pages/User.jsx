import React from 'react'
import '../styles/user.css'

const User = () => {
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
          <th>Email</th>
          <th>Status</th>

        </tr>
        <tr>
          <td>1</td>
          <td>Maria Anders</td>
          <td>hhh</td>
          <td>hhh</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td>
          <td>hhh</td>
          <td>hhh</td>
        </tr>
      </table>

      <p>To understand the example better, we have added borders to the table.</p>
    </div>
  )
}

export default User
