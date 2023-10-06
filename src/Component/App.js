// import React, {Component} from 'react'
// import {render} from 'react-dom'
// // import MathJax from 'react-mathjax-preview'
// import MathJax from 'simple-react-mathjax'
// import parse from "html-react-parser";

// const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`'  
// const math = String.raw`
// <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x222B;</mo><mfrac><mn>9</mn><mn>5</mn></mfrac></math><br><b>Heelo WOrld</b>`

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       math: math
//     }
//   }
//   render() {
//     return <MathJax math={this.state.math} />
//   }
// }

// export default App
// import React from "react";
 
// import MathElement from "./MathElement/MathElement";

// const App = () => {
//   const tex = `<math ><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>b</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>&#x222B;</mo><msqrt><mfrac><mn>3</mn><mn>4</mn></mfrac></msqrt></math> `;

//   return <MathElement elements={tex} />;
// };

// export default App;





// import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "ckeditor5-build-classic-mathtype";
// // import ReactHtmlParser from "react-html-parser";
// import parse from "html-react-parser";
// export default function App() {
//   const [ckData, setCkData] = useState("");
//   return (
//     <React.Fragment>
//       <CKEditor
//         editor={ClassicEditor}
//         config={{
//           toolbar: {
//             shouldNotGroupWhenFull: true,
//             items: [
//               // 'heading', '|',
//               // 'fontfamily', 'fontsize', '|',
//               // 'alignment', '|',
//               // 'fontColor', 'fontBackgroundColor', '|',
//               // 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
//               // 'link', '|',
//               // 'outdent', 'indent', '|',
//               // 'bulletedList', 'numberedList', 'todoList', '|',
//               // 'code', 'codeBlock', '|',
//               // 'insertTable', '|',
//               // 'uploadImage', 'blockQuote', '|',
//               "heading",
//               "fontsize",
//               "alignment",
//               "fontColor",
//               "fontBackgroundColor",
//               "outdent",
//               "indent",
//               "|",
//               "bold",
//               "italic",
//               "link",
//               "bulletedList",
//               "numberedList",
//               "imageUpload",
//               "mediaEmbed",
//               "insertTable",
//               "blockQuote",
//               "undo",
//               "redo",
//               "|",
//               "MathType",
//               "ChemType"
//             ]
//           }
//         }}
//         data={ckData}
//         onReady={(editor) => {
//           // You can store the "editor" and use when it is needed.
//           // console.log( 'Editor is ready to use!', editor );
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           // console.log({ event, editor, data });
//           setCkData(data);
//         }}
//       />
//       <div>{parse(ckData)}</div>
//       <div>{ckData}</div>
//     </React.Fragment>
//   );
// }
