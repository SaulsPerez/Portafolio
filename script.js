const cvLink = document.getElementById('cv-link');

cvLink.addEventListener('click', (event) => {
  event.preventDefault();
  const pdfUrl = cvLink.getAttribute('href');
  const fileName = 'CV.pdf';
  fetch(pdfUrl).then(response => {
    response.blob().then(blob => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
    });
  });
});


const form = document.getElementById('formulario-contacto');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('to').value;
  const email = document.getElementById('subject').value;
  const message = document.getElementById('body').value;

  try {
    const response = await fetch('https://formspree.io/f/mrgvjjra', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    });

    if (response.ok) {
      console.log('Correo electrónico enviado:', response);
      Swal.fire({
        icon: 'success',
        title: 'Message sent successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      
      // Limpiar el formulario después de enviar el mensaje
      form.reset();
    } else {
      throw new Error('Failed to send the message.');
    }
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error sending the message.',
      showConfirmButton: false,
      timer: 1500
    });
  }
});





$(document).ready(function(){
  $('.projects-container').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // se cambia a 3000 ms
    pauseOnHover: true, // se agrega la opción pauseOnHover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  .on('init', function(event, slick) { // se agrega el evento init para mostrar un mensaje de error en caso de algún problema
    if(!slick.$slides.length) {
      console.log('Error: No se encontraron elementos en el carrusel.');
    }
  });
});


  // Obtener el elemento del año actual
  const currentYearElement = document.getElementById("current-year");

  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  // Establecer el año actual en el elemento
  currentYearElement.textContent = currentYear;