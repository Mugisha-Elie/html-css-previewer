

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


//JS for downloading the html file

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", ()=>{
    const code = editor.value;

    //create a blob a file like object
    const blob = new Blob([code], {type: "text/html"});

    //create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my_preview.html";
    link.click();

    //clean up
    URL.revokeObjectURL(url);
});


