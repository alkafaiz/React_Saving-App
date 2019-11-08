import React, { Component } from "react";

class FormSubmit extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      tipenew: "Pemasukan",
      jumlahnew: 0,
      judulnew: ""
    };
  }

  mySubmitHandler = event => {
    event.preventDefault();
    let idNew = this.props.counter + 1;
    let transaksibaru = {
      id: idNew,
      tipe: this.state.tipenew,
      jumlah: this.state.jumlahnew,
      judul: this.state.judulnew
    };
    this.props.onSubmit(transaksibaru);
  };
  myChangeHandler1 = event => {
    let n = event.target.value;
    let a = 0 + parseInt(n, 10);
    this.setState({ jumlahnew: a });
  };
  myChangeHandler2 = event => {
    this.setState({ judulnew: event.target.value });
  };
  myChangeHandler3 = event => {
    this.setState({ tipenew: event.target.value });
  };

  pushNewData = () => {
    this.props.onSubmit(this.state.transaksibaru);
  };

  reset = () => {
    return "";
  };
  componentDidUpdate() {}
  render() {
    const judul = "testing";
    const { onSubmit, counter } = this.props;

    return (
      <form name="submitForm">
        <div className="form-group">
          <label htmlFor="Tipe">Tipe</label>
          <select
            ref="tipe"
            className="form-control"
            id="Tipe"
            onChange={this.myChangeHandler3}
          >
            <option>Pemasukan</option>
            <option>Pengeluaran</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Jumlah">Jumlah</label>
          <input
            ref="jumlah"
            type="number"
            className="form-control"
            id="Jumlah"
            placeholder="Jumlah"
            defaultValue={this.reset()}
            onChange={this.myChangeHandler1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Judul">Judul</label>
          <input
            className="form-control"
            id="Judul"
            placeholder="Judul"
            ref="judul"
            onChange={this.myChangeHandler2}
          />
        </div>
        <button
          onClick={this.mySubmitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormSubmit;
