import { Link } from 'react-router-dom'
import { MainMenu } from './menus'

// Template for each page. Display children after the main menu.
const PageTemplate = ({children}) =>
  <div className="page">
    <MainMenu />
    {children}
  </div>

export const Home = () =>
  <PageTemplate>
    <div className="home">
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">[About]</Link>
        <Link to="events">[Events]</Link>
        <Link to="products">[Products]</Link>
        <Link to="contact">[Contact Us]</Link>
      </nav>
    </div>
  </PageTemplate>

export const Events = () =>
  <PageTemplate>
    <section className="events">
      <h1>[Events Calendar]</h1>
    </section>
  </PageTemplate>

export const Products = () =>
  <PageTemplate>
    <section className="products">
      <h1>[Products Catalog]</h1>
    </section>
  </PageTemplate>

export const Contact = () =>
  <PageTemplate>
    <section className="contact">
      <h1>[Contact Us]</h1>
    </section>
  </PageTemplate>

export const About = ({ match }) =>
  <PageTemplate>
    <section className="about">
      <h1>[About the Company]</h1>
    </section>
  </PageTemplate>


export const Whoops404 = ({ location }) =>
  <PageTemplate>
    <div className="whoops-404">
      <h1>Resource not found at '{location.pathname}'</h1>
    </div>
  </PageTemplate>

