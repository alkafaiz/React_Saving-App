import React, { Component } from "react";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
      showDefault: true,
      tipenew: this.props.tipe,
      jumlahnew: this.props.jumlah,
      judulnew: this.props.judul
    };
  }

  toggleContent = event => {
    this.setState({
      showContent: !this.state.showContent
    });
  };

  actionSave = () => {
    console.log("ini id", this.props.id);
    let trans = {
      id: this.props.id,
      tipe: this.state.tipenew,
      jumlah: this.state.jumlahnew,
      judul: this.state.judulnew
    };
    this.props.onSave(trans);
    this.toggleContent();
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

  render() {
    const { onEdit, onSave, onDelete, id, tipe, jumlah, judul } = this.props;

    const { showContent } = this.state;

    return (
      <React.Fragment>
        {showContent === true ? (
          <tr>
            <td>
              <select
                onChange={this.myChangeHandler3}
                className="form-control"
                id="Tipe"
              >
                <option>Pemasukan</option>
                <option>Pengeluaran</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                id="Jumlah"
                placeholder="Jumlah"
                defaultValue={jumlah}
                onChange={this.myChangeHandler1}
              />
            </td>
            <td>
              <input
                className="form-control"
                id="Judul"
                placeholder="Judul"
                defaultValue={judul}
                onChange={this.myChangeHandler2}
              />
            </td>
            <td>
              <button
                type="button"
                onClick={this.actionSave}
                className="btn btn-success pr-3 pl-3"
              >
                Save
              </button>
            </td>
          </tr>
        ) : (
          <tr className={this.getRowClasses()}>
            <td>{tipe}</td>
            <td>{jumlah}</td>
            <td>{judul}</td>
            <td>
              <button
                type="button"
                onClick={this.toggleContent}
                className="btn btn-primary mr-2 mb-2 mb-sm-2 mb-md-2 mb-lg-0"
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  }

  getRowClasses() {
    let classes = "text-";
    classes += this.props.tipe === "Pemasukan" ? "primary" : "danger";
    return classes;
  }

  showEdit = () => {
    this.getRowClasses();
  };
}

export default ItemCard;
