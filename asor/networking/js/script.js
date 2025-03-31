document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-btn').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const code = document.getElementById(targetId).innerText;
  
        navigator.clipboard.writeText(code).then(() => {
          const originalText = button.innerText;
          button.innerText = 'Copiado!';
          setTimeout(() => {
            button.innerText = originalText;
          }, 2000);
        });
      });
    });
  });
  