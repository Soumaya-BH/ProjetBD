import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


const Employe = props => (
  <tr>
    <td>{props.employe.nom}</td>
    <td>{props.employe.prenom}</td>
    <td>{props.employe.anciennete}</td>
    <td>{props.employe.adresse.numero}</td>
    <td>{props.employe.adresse.rue}</td>
    <td>{props.employe.adresse.codepostal}</td>
    <td>{props.employe.adresse.ville}</td>
    <td>{props.employe.tel}</td>
    <td>{props.employe.prime}</td>
    <td>
      <Link to={"/edit/"+props.employe._id}><FontAwesomeIcon style={{color: "green"}} icon={faEdit} /></Link> | <a href="#" onClick={() => { props.deleteEmploye(props.employe._id) }}><FontAwesomeIcon style={{color: "red"}} icon={faTrash}/></a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteEmploye = this.deleteEmploye.bind(this)

    this.state = {employes: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/employes/')
      .then(response => {
        this.setState({ employes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteEmploye(id) {
    axios.delete('http://localhost:5000/employes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      employes: this.state.employes.filter(el => el._id !== id)
    })
  }

  employeList() {
    return this.state.employes.map(currentemploye => {
      return <Employe employe={currentemploye} deleteEmploye={this.deleteEmploye} key={currentemploye._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Liste Employes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>nom</th>
              <th>prenom</th>
              <th>anciennete</th>
              <th>numero</th>
              <th>rue</th>
              <th>code postal</th>
              <th>ville</th>
              <th>tel</th>
              <th>prime</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.employeList() }
          </tbody>
        </table>
      </div>
    )
  }
}