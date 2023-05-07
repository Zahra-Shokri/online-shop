import React, { PureComponent } from 'react';

class ErrorBoundry extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errMessage: ''
        }
    }

    componentDidCatch = (error, info) => {
        this.setState({
            error: true,
            errMessage: error
        });
        console.log('--------------------------------------');
        console.log(this.state.errMessage);
    }

    render() {
        const {error: err, errMessage} = this.state;
        
        if(err) {
            return(
                <div>
                    <p>{errMessage}</p>
                </div>
            );
        } else 
            return( 
                <div>
                    {this.props.children} 
                </div>
            );
    }
}

export default ErrorBoundry;