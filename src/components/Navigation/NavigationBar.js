import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import "./Navigation.css"
import { useContext } from "react";
import { MoviesContext } from "../../contextApi/MoviesContext";
import { Link } from "react-router-dom";



const NavigationBar = () => {

    const { categories, categorySort } = useContext(MoviesContext)

    return (
        <Navbar id="navbar" variant="light" expand="lg">
            <Container className="my-2">
               <Link to="/"><i className="fa-solid fa-film text-white"> A B D B</i></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((category) => (
                                <NavDropdown.Item key={category.categoryId}><button id="category-btn" onClick={() => categorySort(category)}>{category.name}</button></NavDropdown.Item>
                            ))}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://abdb-movie-app.netlify.app/">All Movies</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
