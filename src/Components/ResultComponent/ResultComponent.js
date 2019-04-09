import React from 'react';

const ResultComponent = (props) => {
    const { result, input } = props;
    return (
        <div>
           
          {({input} === '') ? 0 : {input}}
        </div>
    );
}

export default ResultComponent;