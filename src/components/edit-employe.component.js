import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeAnciennete = this.onChangeAnciennete.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangePrime = this.onChangePrime.bind(this);
    this.onChangeNumero = this.onChangeNumero.bind(this);
    this.onChangeRue = this.onChangeRue.bind(this);
    this.onChangeVille = this.onChangeVille.bind(this);
    this.onChangeCodepostal = this.onChangeCodepostal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      prenom: '',
      anciennete: '',
      tel: '',
      prime: '',

      adresse: {
        numero:'',
        rue:'',
        ville:'',
        codepostal:'',
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/employes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          nom: response.data.nom,
          prenom: response.data.prenom,
          anciennete: response.data.anciennete,
          tel: response.data.tel,
          prime: response.data.prime,
          numero: response.data.adresse.numero,
          rue: response.data.adresse.rue,
          ville: response.data.adresse.ville,
          codepostal: response.data.adresse.codepostal,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeNom(e) {
    this.setState({
      nom: e.target.value
    })
  }

  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value
    })
  }

  onChangeAnciennete(e) {
    this.setState({
      anciennete: e.target.value
    })
  }

  onChangeTel(e) {
    this.setState({
      tel: e.target.value
    })
  }

  onChangePrime(e) {
    this.setState({
      prime: e.target.value
    })
  }

  onChangeNumero(e) {
    this.setState({
      numero: e.target.value
    })
  }

  onChangeRue(e) {
    this.setState({
      rue: e.target.value
    })
  }

  onChangeVille(e) {
    this.setState({
      ville: e.target.value
    })
  }

  onChangeCodepostal(e) {
    this.setState({
      codepostal: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const employe = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      anciennete: this.state.anciennete,
      adresse:{ numero: this.state.numero,
       rue: this.state.rue,
       ville: this.state.ville,
       codepostal: this.state.codepostal,
      },
      tel:this.state.tel,
      prime: this.state.prime,
    }

    console.log(employe);

    axios.put('http://localhost:5000/employes/update/' + this.props.match.params.id, employe)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Modifier un employe</h3>
      <form onSubmit={this.onSubmit}>
        

      <div className="form-group"> 
          <label>Nom: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.nom}
              onChange={this.onChangeNom}
              />
        </div>

        <div className="form-group"> 
          <label>Prenom: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.prenom}
              onChange={this.onChangePrenom}
              />
        </div>

        <div className="form-group"> 
          <label>Anciennete: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.anciennete}
              onChange={this.onChangeAnciennete}
              />
        </div>

        <div className="form-group"> 
          <label>Tel: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.tel}
              onChange={this.onChangeTel}
              />
        </div>

        <div className="form-group"> 
          <label>Prime: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.prime}
              onChange={this.onChangePrime}
              />
        </div>

        <div className="form-group"> 
          <label>Numero: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.numero}
              onChange={this.onChangeNumero}
              />
        </div>

        <div className="form-group"> 
          <label>Rue: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.rue}
              onChange={this.onChangeRue}
              />
        </div>

        <div className="form-group"> 
          <label>Ville: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.ville}
              onChange={this.onChangeVille}
              />
        </div>

        <div className="form-group"> 
          <label>Code postal: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.codepostal}
              onChange={this.onChangeCodepostal}
              />
        </div>



       

        <div className="form-group">
          <input type="submit" value="Modifier employe" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}