export const view = (element: HTMLElement, cls: string) => {
  if (!element) return;

  // Define la función de callback para el IntersectionObserver
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Agrega la clase cuando el elemento está visible
        entry.target.classList.add(cls);
      } else {
        // Quita la clase cuando el elemento ya no está visible
        entry.target.classList.remove(cls);
      }
    });
  };

  // Crea el IntersectionObserver
  const observer = new IntersectionObserver(observerCallback, {
    root: null, // Usa el viewport como contenedor de referencia
    threshold: 0.5, // El 50% del elemento debe ser visible para que se active
  });

  // Observa el elemento seleccionado
  observer.observe(element);
};
