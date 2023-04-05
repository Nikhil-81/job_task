import NavBar from "../component/navbr";
import Sidebar from "../component/sidebar";
import "../styles/dashbord.css"
export default function Dashbord(){
    return (
        <>
        <div className="dash_main" >
        <Sidebar/>
        <div>
        <NavBar/>
      <div className="dash_con" >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non libero illo pariatur hic necessitatibus quod? Vero tempora dolore velit vitae, perspiciatis enim facilis natus veritatis explicabo sunt placeat aliquam?</h1>
      </div>
        </div>

        </div>
        </>
    )
}