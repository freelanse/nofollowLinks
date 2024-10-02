// Список URL, к которым нужно добавить nofollow
const nofollowLinks = [
  "https://example1.com",
  "https://example2.com",
  // добавьте все 20 ссылок сюда
];

document.addEventListener("DOMContentLoaded", function() {
  // Найти все ссылки на странице
  const allLinks = document.querySelectorAll("a");

  allLinks.forEach(link => {
    // Проверить, если href ссылки совпадает с одной из ссылок в массиве
    if (nofollowLinks.includes(link.href)) {
      // Добавить атрибут nofollow
      link.setAttribute("rel", "nofollow");
    }
  });
});
