In the upcoming lecture, we will be adding code to our index.tsx file and running a test in our browser. You will likely see the following warning:

_react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._

You are free to ignore this warning, or, you may choose to update to use createRoot:

```
 // 1) Import ReactDOM library
 import ReactDOM from "react-dom/client";

 // 2) Get a reference to the div with ID root
 const el \= document.getElementById("root");

 // 3) Tell React to take control of that element
 const root \= ReactDOM.createRoot(el!);

 // 4) Create a component
 const App \= () \=> {
    return (
        <div>
        <h1>Hi there!</h1\>
        </div\>
    );
 };

// 5) Show the component on the screen
root.render(<App />);
```
