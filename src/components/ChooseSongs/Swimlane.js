import React from 'react';
import Card from './Card';
import './Swimlane.css';

export default class Swimlane extends React.Component {
  render() {
    console.log(this.props.clients)
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className={"Swimlane-dragColumn " + this.props.name.replace(/ /g,'')} ref={this.props.dragulaRef}>
          {cards}
        </div>
      </div>);
  }

}
