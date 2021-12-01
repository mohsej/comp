import React from "react";

class FullName extends React.Component {
    constructor() {
        super()
    }
    render() {
      return <form>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name"/>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name"/>
        </div>
      </div>
    </form>
    }
  }
  export default FullName

