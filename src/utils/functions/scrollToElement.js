export function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 50;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
