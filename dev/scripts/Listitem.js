import React from 'react';

class Listitem extends React.Component {

    render() {
        return (
                <div className="list-item-container">                     
                    <div className="list-item-content">                     
                        <div className="list-item-card">                  
                        <div>
                            <img src={this.props.list.picture} />
                        </div>
                        <div>
                            <a href="">
                            <h3>{this.props.list.title}</h3>
                            <p>{this.props.list.semiTitle}</p>
                            <p> {this.props.list.description}</p>
                            <p><i className="far fa-calendar"></i>{this.props.list.date}</p>
                            </a>
                        </div>                              
                        </div>                             
                    <button className="remove-button" onClick={() => this.props.removeItem(this.props.index)}><i className="far fa-trash-alt"></i></button>
                    </div>                                     
                </div>
        )
    }
}
export default Listitem;