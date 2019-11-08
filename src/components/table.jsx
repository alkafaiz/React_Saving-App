import React, { Component } from "react";
import ItemCard from "./itemcard";

class Table extends Component {
  state = {};
  render() {
    const { onEdit, onSave, onDelete, allTransaksi } = this.props;

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Tipe</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Judul</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allTransaksi.map(transaksi => (
            <ItemCard
              onEdit={onEdit}
              onSave={onSave}
              onDelete={onDelete}
              key={transaksi.id}
              id={transaksi.id}
              tipe={transaksi.tipe}
              jumlah={transaksi.jumlah}
              judul={transaksi.judul}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
