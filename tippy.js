// Id
tippy('#myButton', {content :'My Tooltip'})

// Attribute
tippy('[data-tippy-content]')

// Class
tippy('.tippy', {content: 'Tooltip by Class'})

// Element
tippy(document.getElementById('single'), {content: 'Single Element'})

// Multiple Elements
tippy([document.getElementById('first'), 
      document.getElementById('second'), 
      document.getElementById('third')])

tippy(document.querySelectorAll('.query'))

tippy(".customized", {
    content: 'Customized  Tooltip',
    duration: 0,
    arrow: false,
    delay: [1000, 200]
})

tippy(".customized2")