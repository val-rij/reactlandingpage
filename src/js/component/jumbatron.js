import React from "react"


const Jumbotron = () => {
    return(
        <div className="jumbotron">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore, nulla iusto deserunt, perferendis tempora eum ullam beatae laboriosam eius ut, dignissimos accusantium quos sequi! Asperiores veritatis pariatur voluptatibus.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
        </p>
      </div>
    )
}

export default Jumbotron