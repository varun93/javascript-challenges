// crude implementation of react redux connect using hoc

import React,{Component} from "react";

const connect = (ChildComponent, mapStateToProps, mapDispatchToProps) => {

    return class Container extends Component{

        render(){
            const state = this.context.store.getState();
            const dispatch = this.context.store.dispatch;
            const stateToProps = mapStateToProps(state);
            const dispatchToProps = mapDispatchToProps(dispatch);
            return <ChildComponent {...this.props} {...stateToProps} {...dispatchToProps} />    
        }
    }

};
