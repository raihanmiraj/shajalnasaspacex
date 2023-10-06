import React, { Component } from 'react';

class Check extends Component {
    componentDidMount(){
        const { match: { params } } = this.props;
        console.log(params );
       
    }
    render() {
        return (
            <div>
                hello
            </div>
        );
    }
}

export default Check;
