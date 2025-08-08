import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number : 0,
    color : null,
  }

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  colorRef = null

  // 1.마운트 후 부모의 값 상속받기
  constructor(props){
    super(props);
    console.log(props);
  }

  // 2.
  // static getDerivedStateFromProps(nextProps, preProps){
  //   if(nextProps != preProps)
  //     return {color = nextProps.color};
  // }


  render() {
    return (
      <div>
        <div>
          <div
            ref={(el) => this.colorRef = el}
            style={{
              width : "100px",
              height: "100px",
              backgroundColor: this.state.color,
              display: "flex",
              justifyContent : "center",
              alignItems : "center",
              color : "#000"
            }}
          >
            <h1>{this.state.number}</h1>
          </div>
        </div>
        <button onClick={this.onClickToIncrease}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;