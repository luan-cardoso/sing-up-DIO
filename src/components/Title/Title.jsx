import React from 'react';

const Title = (props) => {
  
    const titleStyle = {
        fontFamily: 'Open Sans',
        color: '#FFFFFF', 
        fontSize: '32px', 

        width: '388px',
        margin: '100px 0px 50px 175px', 
    };

  return (
    <div>
      <h1 style={titleStyle}>
        {props.title}
      </h1>

      <a 
        href="/"
        style={{ marginLeft: '175px', fontFamily: 'Sans-serif' }}
        >VOLTAR PARA LOGIN</a>
    </div>
  );
};

export default Title;