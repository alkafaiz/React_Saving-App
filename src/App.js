import React from "react";
import FormSubmit from "./components/formsubmit";
import "./App.css";
import Summary from "./components/summary";
import Table from "./components/table";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transaksi: [],
      counter: 0
    };
  }

  updateTotalPemasukan = () => {
    let total = 0;
    this.state.transaksi.forEach(element => {
      if (element.tipe === "Pemasukan") {
        total += element.jumlah;
      }
    });
    return total;
  };

  updateTotalPengeluaran = () => {
    let total = 0;
    this.state.transaksi.forEach(element => {
      if (element.tipe === "Pengeluaran") {
        total += element.jumlah;
      }
    });
    return total;
  };

  handleDelete = transaksiId => {
    const transaksi = this.state.transaksi.filter(c => c.id !== transaksiId);
    this.setState({ transaksi });
  };

  handleSave = transaksiedit => {
    const transaksiB = [...this.state.transaksi];
    let n = 0;
    transaksiB.forEach(el => {
      if (el.id === transaksiedit.id) {
        n += parseInt(el.id, 10) - 1;
      }
    });
    const index = n;
    transaksiB[index] = { ...transaksiedit };
    transaksiB[index].tipe = transaksiedit.tipe;
    transaksiB[index].jumlah = transaksiedit.jumlah;
    transaksiB[index].judul = transaksiedit.judul;
    this.setState({ transaksi: transaksiB });
  };

  handleSubmit = data => {
    let counter = this.state.counter;
    counter += 1;

    let transaksi = this.state.transaksi;
    transaksi.push(data);

    this.setState({
      transaksi: transaksi,
      counter: counter
    });
  };
  handleEdit = () => {
    console.log("edit is clicked");
  };
  render() {
    let transaksi = this.state.transaksi;
    console.log("App - rendered");
    return (
      <React.Fragment>
        <div className="container">
          <div data-aos="fade-down" className="row mt-4 mb-4">
            <div className="col">
              <h3 className="text-center font-weight-bold">REACT SAVING APP</h3>
            </div>
          </div>
          <div className="row ">
            <div data-aos="fade-right" className="col-sm-6 mb-4">
              <FormSubmit
                onSubmit={this.handleSubmit}
                counter={this.state.transaksi.length}
              />
            </div>
            <div data-aos="fade-left" className="col-sm-6 mb-4">
              <Summary
                totalPemasukan={this.updateTotalPemasukan()}
                totalPengeluaran={this.updateTotalPengeluaran()}
              />
            </div>
          </div>
          <div data-aos="fade-up" className="row">
            <div className="col">
              <Table
                onEdit={this.handleEdit}
                onSave={this.handleSave}
                onDelete={this.handleDelete}
                allTransaksi={this.state.transaksi}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
