import React from 'react';
import Listitem from './Listitem';

class Listcard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="list-container">
                <div className="list-container-header">
                    <p>List Name <span className="list-number">1</span></p>
                    <p>Total 3</p>
                </div>
                <Listitem />
                <div className="load-more">
                    <a href="">Load More</a>
                </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Listcard;