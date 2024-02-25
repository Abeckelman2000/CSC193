
 function alertUser(){
    alert("Hello, world!");
  }

  function radioAlert(){
    alert("Radio Changed");
  }

  // event handler function for Bigger button
  function growText(){
    // get element by id
    var textArea = document.getElementById("myText")

    if(textArea){
      textArea.style.fontSize = '24px';
    }
    

  }
  // event handler  fucnction for FancyShmancy radio button
  function addStyles(){
    document.getElementById("myText").style.fontWeight = "bold";
    document.getElementById("myText").style.color = "blue"
    document.getElementById("myText").style.textDecoration = "underline";
    console.log("DID THIS")
  }

  function removeStyles(){
    document.getElementById("myText").style.fontWeight = "normal";
    document.getElementById("myText").style.color = "black";
    document.getElementById("myText").style.textDecoration = "none";
    console.log("DID THIS2")
  }

  function moo(){
    var sentence = document.getElementById("myText").value;
    console.log(sentence);
    var upperCasedArray = [];
    var sentenceArray = sentence.split(" ");
    console.log("Printing the array...");
    sentenceArray.forEach(element => {
      element = element.toUpperCase();
      upperCasedArray.push(element);
    });
    
    // add moo to the last word
    lastWord = upperCasedArray[upperCasedArray.length - 1];
    // store punctuation point
    punct = lastWord[lastWord.length - 1];
    // remove punctuation point
    stringWithoutPunct = lastWord.slice(0, -1);
    // add MOO to the end
    finalWord = stringWithoutPunct + "-Moo" + punct;
    // replace the last word in the array with the modified version
    upperCasedArray[upperCasedArray.length - 1] = finalWord;
  

    // rebuild the sentence with the uppercased words
    upperCasedSentence = upperCasedArray.join(" ");
    console.log(upperCasedSentence);

  }




  document.addEventListener("DOMContentLoaded", function() {
    const fancyShmancyRadio = document.getElementById("idFancyShmancy");
    const boringBettyRadio = document.getElementById("idBoringBetty");
  
    fancyShmancyRadio.addEventListener("change", addStyles);
    boringBettyRadio.addEventListener("change", removeStyles);
  });