import React from 'react'
import { Card } from 'react-bootstrap'

export default class Member extends React.Component {
    render() {
        return (
        <>
            <Card style={{maxWidth: '440px'}}>
                <div className="row no-gutters">
                <div className="col-md-4">
                  {/* <img src="..." className="card-img" alt="..."> */}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                  </div>
                </div>
              </div>
            </Card>
        </>
  ) 
    }
  
}
