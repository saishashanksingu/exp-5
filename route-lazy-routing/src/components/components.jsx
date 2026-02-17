import '../App.css';

function Profile(){
  return (
    <div className="page">
      <h1>Sai Shashank</h1>
      <h2>BE CSE AIML</h2>
      <h2>Full Stack Developer</h2>
    </div>
  );
}

function DashBoard(){
  return (
    <div className="page">
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
    </div>
  );
}

function Contact(){
  return(
    <div className='contact'>
      <h1>Contact</h1>
      <h3>Mobile: +91 8330963720</h3>
      <h3>Email: singusaishashank2021@gmail.com</h3>
    </div>
  );
}

export {Profile, DashBoard, Contact};