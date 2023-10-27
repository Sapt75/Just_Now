import './NaveBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import searchicon from '../images/icons/search.png';
import SideNavebar from '../SideNavbar/SideNavebar';
import LocationPopup from '../LocationPopup/LocationPopup';




function OffcanvasExample() {

  return (
    <div className='main-navebar-phone'>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-barbutton">
          <Container fluid>
            <div className="navicon-logotext d-flex">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <div className="textlogo-phone">
                <a href="/">
                  <div className="text-logo">
                    <h3 className='italic-text m-2'>
                      Get
                      <span className='normal-text'>
                        OnRoad
                      </span>
                      Price
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="navebaricon-sec justify-content-end">
              <div className="navbaricon-contain d-flex gap-3">
                <div className="search-icon-phone justify-content-end m-auto">
                  {/* <div className="searchicon">
                    <input className='border-0 px-3 mx-3' type="text" name="head-search" id="head-search" placeholder='Search' />
                    <img className='neviconwidth' src={searchicon} alt="search-icon" />
                  </div> */}
                </div>
                <div className="location-icon-phone justify-content-end">
                  <div className="locationiconbox">
                    <LocationPopup />

                    {/* <i className=" icon-for-location" aria-hidden="true"></i> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Offcanvas
              className="sidebar-menu-box"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header> */}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <NavLink to={'/'} >Home</NavLink> */}
                  {/* <Nav.Link href="/">Home</Nav.Link> */}
                  <h4 className="g-h4 d-none g-bold">Search New Cars</h4>
                  <SideNavebar />
                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;