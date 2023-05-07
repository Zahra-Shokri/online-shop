import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
color: white;
    display: flex;
    transition: 1s;
    margin: 25px 0;
    align-item: center;
    padding: 75px 55px;
    background-color: #30c0e4;
    justify-content: space-between;
    
    &:hover {
        background-color: #b5b5b5;
    }
    `;
    
class Search extends Component {
    constructor() {
        super();
        this.state = {
            textVal: '',
            option: ''
        }

        // 1-4 Show Value of Input with Use ref
        this.inputRef = React.createRef();
    }
    
    changeTextVal = (event) => {
        this.setState({
            textVal: event.target.value
        });
    }


    // 2-4 Show Value of Input with Use ref
    // getValue'sInput = () => {
    //     console.log(this.inputRef.current.value);
    // }

    // 1-2 Show Select Tag How to Work?
    // changeOptionSelect = (event) => {
    //     this.setState({
    //         option: event.target.value
    //     });
    //     console.log(event.target.value);
    // }

    // 1-2 Create Error For Show Error Boundry How to Work? 
    // buildErr = () => {
    //     const rand = Math.random();
    //     console.log(rand);

    //     if(rand > 0.5) {
    //         throw new Error('A error occured...');
    //     }
    // }

    render() {
        const pStyle = {fontSize:'50px', fontWeight: 'bold'};
        const inputStyle = {width: '350px', height: '40px', fontSize:'15px', padding: '0 15px', borderRadius: '10px'};

        return(
            <Div>
                <p style={pStyle}>Search What You Want?</p>
                <input type='text' value={this.state.textVal} onChange={this.changeTextVal} style={inputStyle} placeholder='Search...' />
                

                {/* 3-4 Show Value of Input with Use ref */}
                {/* <input type='text' ref={this.inputRef} onChange={this.changeTextVal} style={inputStyle} placeholder='Search...' /> */}
                {/* 4-4 Show Value of Input with Use ref */}
                {/* <button onClick={this.getValue'sInput}> Press To Get Input Ref</button> */}
                
                {/* 2-2 Show Select Tag How to Work? */}
                {/* <select value={this.state.option} onChange={this.changeOptionSelect}>
                    <option value='No'>Choose Number</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select> */}

                {/* 2-2 Create Error For Show Error Boundry How to Work? */}
                {/* <button onClick={this.buildErr}>Press Me!</button> */}
            </Div>
        );
    }
}

export default Search;