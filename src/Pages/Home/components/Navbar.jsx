
import '../styles/navbar.css';


const Navigation = () => {
    const navbarItems = document.querySelectorAll('.nav-item');
    navbarItems.forEach(item => {
        item.addEventListener('click', () => {
          navbarItems.forEach(item => item.classList.remove('active'));
          item.classList.add('active');
        });
      });

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Application Status</a></li>
        <li className="nav-item"><a href="#">Document</a></li>
        <li className="nav-item"><a href="#">NA</a></li>
        <li className="nav-item"><a href="#">NA</a></li>
        <li className="nav-item"><a href="#">NA</a></li>
        <li className="nav-item"><a href="#">NA</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;