import React from "react";
import './index.scss'


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className="contato"> 
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mzbajgan"
        method="POST"
        className="form"
      >
        <label>Seu Email:</label>
        <input type="email" name="email" />
        <label>Mensagem:</label>
        <input className="inputMessage" type="text" name="message" />
        {status === "SUCCESS" ? <p>Logo entraremos em contato!<br/> <a href="/"> Voltar ao inicio</a></p> : <button className="btnContato">Enviar</button>}
        {status === "ERROR" && <p>Ops, algo deu errado, Tente novamente.</p>}
      </form>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}