import React, { Component } from "react";

class Summary extends Component {
  state = {};
  render() {
    const { totalPemasukan, totalPengeluaran } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5>Total Pemasukan:</h5>
          <h5 className="mb-3">IDR {totalPemasukan}</h5>
          <h5>Total Pengeluaran:</h5>
          <h5 className="mb-3">IDR {totalPengeluaran}</h5>
          <h5>Total Saldo:</h5>
          <h5 className="mb-3">IDR {this.totalSaldo()}</h5>
        </div>
      </div>
    );
  }

  totalSaldo = () => {
    let saldo = this.props.totalPemasukan - this.props.totalPengeluaran;
    return saldo;
  };
}

export default Summary;
