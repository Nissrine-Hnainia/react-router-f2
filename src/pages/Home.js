import { Button } from 'react-bootstrap'
import React from 'react'

const Home = ({history}) => {
    return (
        <div>
            <h2>This is the home page</h2>
            <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante ex, aliquet ullamcorper elementum vitae, pharetra eu sapien. Nam pellentesque leo felis, nec fringilla elit eleifend a. Sed ex lorem, facilisis vel scelerisque in, faucibus ut ligula. Etiam ut velit convallis, euismod dolor et, viverra lectus. Praesent facilisis turpis vel finibus luctus. Quisque quis eleifend neque. Vestibulum vehicula pharetra iaculis. Curabitur eget cursus justo. Ut eget ultricies lacus. Nulla eu arcu nec orci tristique posuere quis at arcu. Nulla porta semper magna, ac semper turpis mollis a.
            </p>
            <Button onClick={() => history.goForward()}>go forward</Button>
        </div>
    )
}

export default Home
