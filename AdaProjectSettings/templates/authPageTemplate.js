import React, {Component} from "react";
import { withAuthentication } from "../Session";

class [COMPONENT NAME HERE] extends Component {
    render(){
        return (
            <div>
                <h1>[COMPONENT NAME HERE]</h1>
                <p>This is the [COMPONENT NAME HERE] page</p>
            </div>
        );
    }
}

export default withAuthentication([COMPONENT NAME HERE]);