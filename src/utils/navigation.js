const TOOLBAR_SCROLL_OFFSET = 160;

export const scrollToSection = (sectionId, offset = TOOLBAR_SCROLL_OFFSET) => {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
};

export const openExternalLink = (url) => {
  if (!url) {
    return;
  }

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
