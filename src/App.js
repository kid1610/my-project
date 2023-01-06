
import Footer from './Component/Layout/Footer';
import Header from './Component/Layout/Header';
import MenuLeft from './Component/Layout/MenuLeft';

function App(props) {
  return (
    <>
    <Header />
    <section>
      <div className="container">
        <div className="row">
          <MenuLeft />
          {props.children}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default App;
