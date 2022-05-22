const optionsButtons = document.querySelectorAll(".option-button"),
			alignButtons = document.querySelectorAll(".align"),
			formatButtons = document.querySelectorAll(".format");
const textareaInput = document.querySelector(".form-wysiwyg__textarea-input"),
			textareaText = document.querySelector(".form-wysiwyg__textarea-text");

// Hides and shows text as you type 
textareaInput.onkeyup = (event) =>{
	let lengthEditableText = textareaInput.innerText.length;

	if(lengthEditableText <= 0){
		textareaText.classList.add('show');
		textareaText.classList.remove('hide');
	}else{
		textareaText.classList.remove('show');
		textareaText.classList.add('hide');
	}
};
document.querySelector('#insertUnorderedList').addEventListener('click', () =>{
	textareaText.classList.add('hide');
});

//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  //No highlights for link, unlink,lists, undo,redo since they are one time operations
  highlighter(alignButtons, true);
  highlighter(formatButtons, false);
};

//main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;
        //If currently clicked button is already active
        if (button.classList.contains("option-button--active")) {
          alreadyActive = true;
        }
        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("option-button--active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("option-button--active");
      }
    });
  });
};
const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("option-button--active");
  });
};
window.onload = initializer();

// Text-slash button
function textSlash (){
	const textSlash = document.querySelector('#textSlash'),
				contenteditableParent = document.querySelector(".form-wysiwyg__textarea"),
				contenteditable = contenteditableParent.querySelector("[contenteditable=true]");

	textSlash.addEventListener('click', () =>{
		if(textSlash.classList.contains("option-button--active")){
			contenteditable.setAttribute("contenteditable", false);
		}else{
			contenteditable.setAttribute("contenteditable", true);
		}
	});
}textSlash();