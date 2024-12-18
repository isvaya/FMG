///change language

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById("header__language--switcher");
////текущий язык
  const currentPath = window.location.pathname.split('/')[1];
  select.value = currentPath || 'ru';
///обновляет язык при изменении
  select.addEventListener('change', function() {
    const selectedLanguage = this.value;
    window.window.location.href = `/${selectedLanguage}/index.html`;
  });
});
