import React from 'react';
import { Route } from 'react-router-dom';


// Pages
import HomePage from './HomePage';
import About from './About';




// Class Component
class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/about/:name' component={About} />
      </div>
    );
  }
}
export default App;




















/*
  Class
  Functional
  Higher Order
*/

// export default class App extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       isHomePage: true
//     }
//   }

//   goToHomePage = () => {
//     this.setState({ isHomePage: true });
//   }

//   goToAboutPage = () => {
//     this.setState({ isHomePage: false });
//   }

//   render() {

//     let componentToRender;

//     const isHomePage = this.state.isHomePage;

//     return (
//       <div>
//         <div className="button">
//           <span>
//             <button onClick={this.goToHomePage}>HomePage</button>
//             <button onClick={this.goToAboutPage}>About</button>
//           </span>
//         </div>

//         {isHomePage ? <HomePage /> : <About />}
//       </div>
//     );
//   }
// }



// // Class Component
// class App extends React.Component {
//   // TODO
// };

// // Functional Component
// function Header() {
//   // TODO
// }



// // Higher Order Component
// function MainComponent() {

//   return class extends React.Component {
//     // TODO
//   }
// }


