
import Header from "../components/Header";
import Footer from "../components/Footer";


const AboutPage = (props) => {
    return (
    <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
            <section id="about-section">

                <div className= "container">
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <h1>About Page</h1>
                    <hr></hr>
                    <span>
                        <h5>Hello, my name is Muhammad Ahsan</h5> <br></br>
                        This is my Interactive React Shopmart App<br></br>
                        Using the concept of full stack developing. Creating the back and front End I have ended up with this App.
                        <br></br>
                        Enjoy your stay!

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan libero a sem venenatis pharetra.</span>
        <p>Cras dui dui, suscipit ac massa et, fermentum lacinia lacus. Aliquam erat volutpat. Phasellus non tellus quis quam eleifend laoreet. Etiam luctus augue nec lectus consequat euismod. Nulla tristique augue a urna eleifend rutrum eget quis turpis. Curabitur consectetur aliquet lobortis. Donec id felis leo. Etiam ullamcorper augue justo, vitae tincidunt ipsum gravida vitae. Donec orci justo, vehicula rutrum mattis et, ornare ullamcorper mi. Mauris eget diam est.</p>
        <p>Ut non diam varius ante dictum blandit nec in tortor. Pellentesque sodales vel elit eget cursus. In condimentum consequat mauris vel bibendum. Curabitur feugiat nibh in sodales condimentum. In sit amet hendrerit massa, sed porta ipsum. Praesent consectetur consectetur sem, at aliquam ante posuere ac. Sed sit amet quam egestas eros lobortis varius. Aenean eleifend nec turpis eget faucibus. Duis pretium consequat velit, quis eleifend leo laoreet non. Quisque sit amet lobortis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In nisi nibh, convallis eu metus et, adipiscing laoreet quam.</p>
                        
                    </span>

                </div>

            </section>
        </main>
        <Footer/>
    </div>
    )
}

export default AboutPage
