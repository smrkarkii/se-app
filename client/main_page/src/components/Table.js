import React from 'react'
import TableBody from './TableBody'
import Thead from './Thead'

export default function Table() {
  return (
    <div className="row my-5">
    <h3 className="fs-4 mb-3">Recent posts</h3>
    <div className="col">
        <table className="table bg-dark rounded shadow-sm  table-hover">
            <Thead/>
            <TableBody/>
        </table>
    </div>
</div>
  )
}
