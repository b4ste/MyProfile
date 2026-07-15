import logo from './logo.svg';
import './App.css';
import ProfilePic from './dwag.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        <div className="profile-info">
          <img src={ProfilePic} className="pict" alt="Profile" />
          <div className="details">
            <p><strong>Sebastian Axl G. Cruz</strong></p>
            <p>Cruzaxl29@gmail.com</p>
            <p>National University MOA</p>
            <p>0921321322</p>
          </div>
        </div>
      </header>

      <section>
        <h2>Summary of experience</h2>
        <p>
         Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.
        </p>
      </section>

      <section>
        <h2>Programming Language Specialization</h2>
        <ul>
          <li>React JS</li>
          <li>Python</li>
        </ul>
      </section>

      <footer>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:Cruzaxl29@gmail.com">Cruzaxl29@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
