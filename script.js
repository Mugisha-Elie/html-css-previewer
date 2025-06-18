const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', () => {
  const content = editor.value;
  preview.srcdoc = content;
});
