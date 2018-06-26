import React from 'react';
import listCollection from './listCollection.js'

class Listitem extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = { listItemData: [{
    //         title: 'Curabitur rutum ut',

    //     }] };
    // }



    render() {
        return (
            <React.Fragment>
                <div className="list-item-container">
                {/* <div className="list-item-content"> */}
                   {/* <h3>Curabitur rutum ut</h3>
                   <p>Vivamus quis enim vitae est</p>
                   <p>Proin maximus magna accumsan nulla lobortis, nec</p>
                   <p><i className="far fa-calendar"></i>Wed Jun 13 2018</p>
                   <div>
                      <i class="far fa-trash-alt"></i>
                   </div> */}

                        {listCollection.map((list,i) => {
                            return (<div className="list-item-content">
                                {/* <a className="list-item-card"href=""> */}
                                <div>
                                <img src={list.picture} />
                                <h3>{list.title}</h3>
                                <p>{list.semiTitle}</p>
                                <p> {list.description}</p>
                                <p><i className="far fa-calendar"></i>{list.date}</p>
                                </div>                             
                                <div className="remove-button">
                                    <a className="remove-icon" href=""><i className="far fa-trash-alt"></i></a>
                                </div>                               
                                {/* </a> */}
                            </div>)
                        })
                        }

                 {/* </div> */}
                
                </div>
            </React.Fragment>
        )
    }
}

export default Listitem;