//Select the textarea and preview elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

//Load saved code from LocalStorage if available
const savedCode = localStorage.getItem("savedCode");

if(savedCode){
    editor.value = savedCode;
    preview.srcdoc = savedCode;
}

editor.addEventListener('input', () => {
  const code = editor.value;
  localStorage.setItem("savedCode", code);
  preview.srcdoc = code;
});
