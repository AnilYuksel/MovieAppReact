import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import "./Navigation.css"
import { useContext } from "react";
import { MoviesContext } from "../../contextApi/MoviesContext";



const NavigationBar = () => {

    const { categories, categorySort } = useContext(MoviesContext)

    return (
        <Navbar id="navbar" variant="light" expand="lg">
            <Container className="my-2">
                <Navbar.Brand href="#home"><i className="fa-solid fa-film text-white"> A B D B</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Link</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((category) => (
                                <NavDropdown.Item key={category.categoryId}><button id="category-btn" onClick={() => categorySort(category)}>{category.name}</button></NavDropdown.Item>
                            ))}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="http://localhost:3001">All Movies</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar