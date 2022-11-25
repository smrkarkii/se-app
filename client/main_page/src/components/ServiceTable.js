import React from 'react'

export default function ServiceTable() {
  return (
<div className="row my-5">
    <h3 className="fs-4 mb-3">Recent Services</h3>
    <div className="col">
        <table className="table bg-dark rounded shadow-sm  table-hover">
        <thead>
    <tr className='text-white'>
        <th scope="col" width="50">S.N.</th>
        <th scope="col">Title</th>
        <th scope="col">Descriptions</th>
        <th scope="col">Date</th>
    </tr>
</thead>
<tbody>
                            <tr className='text-white'>
                                    <th scope="row">1</th>
                                    <td>Admission Procedure</td>
                                    <td>You can get the details about admission procedure. Just contact us.</td>
                                    <td>3-8</td>

                                </tr>
                                </tbody>
</table>
    </div>
</div>
  )
}
