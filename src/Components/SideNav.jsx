import './SideNav.css'
import img from '../assets/imgs/person.png'
function SideNav() {
  return (
    <>
    <div className="sidenav">
    <div className="profile">
        <img src={img} alt="" width="100" height="100"/>
        <div className="name">
            Abdelrahman Abubakr
        </div>
        <div className="job">
            Web Developer
        </div>
    </div>
    <div className="sidenav-url">
        <div className="url">
            <a href="#profile" className="active">Profile</a>
            <hr align="center"/>
        </div>
        <div className="url">
            <a href="#settings">Settings</a>
            <hr align="center" />
        </div>
    </div>
</div>
    </>
  )
}

export default SideNav