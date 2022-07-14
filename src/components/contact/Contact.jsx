import "./contact.scss"

export default function Contact() {
  return (
    <div className='contact' id="contact">
         <div className="left">
          <img src="assets/Handshake svg.svg" alt="" />
         </div>
         <div className="right">
          <h3>Contact.</h3>
          <form>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
         </div>
    </div>
  )
}
