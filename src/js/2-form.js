const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (savedData) {
      formData = JSON.parse(savedData);
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  });
  form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim(); // Видаляємо пробіли
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });
  form.addEventListener('submit', event => {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки
  
    // Перевірка на заповнення полів
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    console.log('Submitted data:', formData); // Виводимо дані у консоль
  
    // Очищаємо форму, об'єкт formData і сховище
    form.reset();
    formData = { email: '', message: '' };
    localStorage.removeItem(STORAGE_KEY);
  });
      