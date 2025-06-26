// gestion des feux tricolore 

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.traffic-light').forEach(trafficLight => {
    const lights = trafficLight.querySelectorAll('.light');
    const durations = [3000, 2000, 5000];
//                    rouge, orange, vert
    let current = 0;

    function switchLight() {
      lights.forEach((l, i) => l.classList.toggle('active', i === current));
      const delay = durations[current];
      current = (current + 1) % lights.length;
      setTimeout(switchLight, delay);
    }

    switchLight();
  });
});

// gestion de l'effet autour des cards de la Homepage
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    const classes = ['border-red', 'border-orange', 'border-green'];
    const durations = [3000, 2000, 5000]; // même ordre que pour le feu
    let current = 0;

    function switchBorder() {
      card.classList.remove(...classes);
      card.classList.add(classes[current]);
      const delay = durations[current];
      current = (current + 1) % classes.length;
      setTimeout(switchBorder, delay);
    }

    switchBorder();
  });
});