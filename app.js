var options = {
    series: [75],
    chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    colors: ["#04E762", "#2EDB75"], // Colors for the radial bar chart

    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#1D1D1E',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'back',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#252526',
                strokeWidth: '100%', // Full circle
                margin: 0,
                dropShadow: {
                    enabled: false,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },
            dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: -10,
                    show: false,
                    color: '#fff',
                    fontSize: '16px',
                    fontFamily: 'Rubik, sans-serif'
                },
                value: {
                    offsetY: 12,
                    formatter: function(val) {
                        return parseInt(val) + '%';
                    },
                    color: '#fff',
                    fontSize: '32px',
                    show: true,
                    fontFamily: 'Rubik, sans-serif'
                }
            }
        }
    },
    fill: {
        type: 'linear',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#04E762'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        },
        dropShadow: {  // Add drop shadow to the green part
            enabled: true,
            top: 5,
            left: 0,
            blur: 5,
            opacity: 0.5,
            color: '#04E762'
        }
    },
    stroke: {
        lineCap: 'round',
        color: '#04E762'
    },
    labels: ['%'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();





/* -------------------------------------------------------------------- */





var options = {
    series: [23],
    chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    colors: ["#04E762", "#2EDB75"], // Colors for the radial bar chart

    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#1D1D1E',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'back',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#252526',
                strokeWidth: '100%', // Full circle
                margin: 0,
                dropShadow: {
                    enabled: false,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },
            dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: -10,
                    show: false,
                    color: '#fff',
                    fontSize: '16px',
                    fontFamily: 'Rubik, sans-serif'
                },
                value: {
                    offsetY: 12,
                    formatter: function(val) {
                        return parseInt(val) + '%';
                    },
                    color: '#fff',
                    fontSize: '32px',
                    show: true,
                    fontFamily: 'Rubik, sans-serif'
                }
            }
        }
    },
    fill: {
        type: 'linear',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#04E762'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        },
        dropShadow: {  // Add drop shadow to the green part
            enabled: true,
            top: 5,
            left: 0,
            blur: 5,
            opacity: 0.5,
            color: '#04E762'
        }
    },
    stroke: {
        lineCap: 'round',
        color: '#04E762'
    },
    labels: ['%'],
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
chart2.render();




/* -------------------------------------------------------------------- */





var options = {
    series: [54],
    chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    colors: ["#04E762", "#2EDB75"], // Colors for the radial bar chart

    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#1D1D1E',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'back',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#252526',
                strokeWidth: '100%', // Full circle
                margin: 0,
                dropShadow: {
                    enabled: false,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },
            dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: -10,
                    show: false,
                    color: '#fff',
                    fontSize: '16px',
                    fontFamily: 'Rubik, sans-serif'
                },
                value: {
                    offsetY: 12,
                    formatter: function(val) {
                        return parseInt(val) + '%';
                    },
                    color: '#fff',
                    fontSize: '32px',
                    show: true,
                    fontFamily: 'Rubik, sans-serif'
                }
            }
        }
    },
    fill: {
        type: 'linear',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#04E762'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        },
        dropShadow: {  // Add drop shadow to the green part
            enabled: true,
            top: 5,
            left: 0,
            blur: 5,
            opacity: 0.5,
            color: '#04E762'
        }
    },
    stroke: {
        lineCap: 'round',
        color: '#04E762'
    },
    labels: ['%'],
};

var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
chart3.render();





/* ------ Dropdown ----- */

// Get the dropdown button
var dropbtn = document.querySelector('.wallet-chevron');

// Toggle the display of the dropdown content on click
dropbtn.onclick = function() {
  document.querySelector('.dropdown-content').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.wallet-chevron')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





/* ------ Burguer Menu Mobile ------ */

// Get the mobile menu 
var menuMobile = document.querySelector('.menu-toggle');

// Toggle the display of the menu mobile content on click
menuMobile.onclick = function() {
  document.querySelector('.side-nav').classList.add('flex');
}


function closeMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.classList.contains('flex')) {
        // If it does, remove the 'flex' class
        menu.classList.remove('flex');
    }

  }


