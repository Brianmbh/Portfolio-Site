import "./works.scss"

export default function works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                <img src="assets/mobile-phone-icon-png-2.png"></img>
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, in tempora rerum officiis quae magni. In placeat ad aspernatur quisquam autem quibusdam, obcaecati, minima, consequuntur laudantium neque libero maiores enim?
                </p>
                <span>Projects</span>
              </div>
            </div>
              <div className="right">
                <img src="assets/portfolio test img.jpeg" alt="" />
                </div>           
          </div>
        </div>
      </div>   
      <img src="assets/white-arrow-transparent-png-22.png" className="arrow left" alt="" />  
      <img src="assets/white-arrow-transparent-png-22.png" className="arrow right" alt="" />

    </div>
  )
}
