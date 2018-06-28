import React from 'react';
import Listitem from './Listitem';
import listCollection from './listCollection.js';

class Listcard extends React.Component {

constructor (props) {
    super(props)
    this.state = {
        newCollection:listCollection,
        show: true
    }

    this.removeItem = this.removeItem.bind(this);
    this.toggleList = this.toggleList.bind(this);
 }

removeItem (index) {  
   this.setState({
       newCollection: this.state.newCollection.filter((item,id) => id != index)
   })
}

toggleList () {
const {show} = this.state;
this.setState({show :!show})
}

render() {
    return (
            <section className="list-container">
            <div className="list-container-header">
            <div>
                <p>List Name <span className="list-number">1</span></p>
                <p>Total {this.state.newCollection.length}</p>
            </div>
                <button className="toggle-button" onClick={this.toggleList}>
                    <i class="fas fa-caret-down"></i>
                </button>
            </div>
            {this.state.show && 
            this.state.newCollection.map((list, id) => {
                return <Listitem list={list} key={id} index={id} removeItem={this.removeItem} />
                })
            }    
            
            <div className="load-more">
                <a href="">Load More</a>
            </div>
            </section>
    )
}
}

export default Listcard;

