import "./testimonials.scss"

export default function Testimonials() {
  const data = [
  {
    id: 1,
    name: "VS Code",
    title: "Senior Developer",
    img:
    "https://www.pngitem.com/pimgs/m/80-800968_vscode-visual-studio-logo-png-transparent-png.png",
    icon: "assets/twitter.png",
    desc:
      "My preferred code editor for debugging, task running, and version control.",
  },
  {
    id: 2,
    name: "Github",
    title: "Senior Developer",
    img:
      "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    icon: "assets/twitter.png",
    desc:
      "View my projects, readme's and codes here at my Github.",
      featured: true,
  },
  {
    id: 3,
    name: "LinkedIN",
    title: "Senior Developer",
    img:
      "https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png",
    icon: "assets/twitter.png",
    desc:
      "Connect with me and view some of my skill badges.",
  },
];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
      {data.map((d) => ( 
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
          <img src="assets/External Link Arrow.webp" 
          className="left"/>
          <img
                className="user"
                src={d.img}
                alt=""
              />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
