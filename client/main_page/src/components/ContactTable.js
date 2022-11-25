import React from 'react'

export default function ContactTable() {
  return (
    <div className="row my-5">
    <h3 className="fs-4 mb-3">Contact List</h3>
    <div className="col">
        <table className="table bg-dark rounded shadow-sm  table-hover">
        <thead>
    <tr className='text-white'>
        <th scope="col" width="50">S.N.</th>
        <th scope="col">Name</th>
    <th scope="col">Email</th>
        <th scope="col">Descriptions</th>
        
    </tr>
</thead>
<tbody>
                            <tr className='text-white'>
                                    <th scope="row">1</th>
                                    <td>Raju Yadav</td>
                                    <td>raju@gmail.com</td>
                                    <td>I want to get admitted in IOE and need help.</td>

                                </tr>
                                </tbody>
</table>
    </div>
</div>
  )
}
