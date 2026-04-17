particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },

    "color": {
      "value": "#38bdf8"
    },

    "shape": {
      "type": "circle"
    },

    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false
      }
    },

    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },

    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#38bdf8",
      "opacity": 0.3,
      "width": 1
    },

    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },

  "interactivity": {
    "detect_on": "canvas",

    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },

    "modes": {
      "grab": {
        "distance": 180,
        "line_linked": {
          "opacity": 0.6
        }
      },

      "push": {
        "particles_nb": 3
      }
    }
  },

  "retina_detect": true
});