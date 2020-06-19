import React from 'react';
import "./ResultComponent.css";

class ResultComponent extends React.Component{

  render(){
    let {result}=this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;
