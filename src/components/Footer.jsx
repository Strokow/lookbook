function Footer () {
    return (
        <footer className="footer p-40 justify-center">
        <p>Titmannstraße 44 01309 Dresden Germany</p>
        <p>lookbook@examplemail.com</p>
        <p className="mb-25">Tel.01722223340</p>
        
        <a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img className="mr-10" height={30} width={30} src="img/fb.png" alt="Facebook" />
        </a>
        
        
        <a className="whatsapp" href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <img className="mr-10" height={30} width={30} src="img/wp.png" alt="WhatsApp" />
        </a>
        
    
        <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img className="mr-10" height={30} width={30} src="img/ig.png" alt="Instagram" />
        </a>
      </footer>
    )
}

export default Footer;