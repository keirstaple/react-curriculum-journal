import React, { Component } from 'react';
import Week from './Week';
import Header from './Header';
import SubHeader from './SubHeader';
import NewResource from './NewResource';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerColor: 'blue',
      titleValue: '',
      linkValue: '',
      optionValue: 'week4',
      week1: [
        {
          title: 'JavaScript Assessment',
          link: 'https://github.com/rmurphey/js-assessment',
        },
        {
          title: 'DevDocs, offline version',
          link: 'http://devdocs.io/offline',
        },
        {
          title: 'FunFunFunctions: Higher Order Functions',
          link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84',
        },
        {
          title: 'FunFunFunctions: ES6/2015 var, let, and const',
          link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8',
        },
        {
          title: 'FunFunFunctions: ES6/2015 arrow functions',
          link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I',
        },
        {
          title: 'Industry Talk: Women in tech',
          link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02',
        },
        {
          title: 'JavaScript: Understanding the Weird Parts',
          link: 'https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII',
        },
        {
          title: 'ES6 at a glance',
          link: 'http://es6-features.org/',
        },
        {
          title: 'Essential ES6 / ES2015 JavaScript',
          link: 'https://www.youtube.com/watch?v=CozSF5abcTA',
        },
        {
          title: 'Javascript ES6 Cheatsheet - the best of JS ES6',
          link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4',
        },
      ],
      week2: [
        {
          title: 'AirBnb Styleguide',
          link: 'https://github.com/airbnb/javascript',
        },
        {
          title: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
          link: 'https://egghead.io/courses/learn-es6-ecmascript-2015',
        },
        {
          title: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
          link: 'https://frontendmasters.com/courses/computer-science/',
        },
        {
          title: 'Git Intro',
          link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/',
        },
        {
          title: 'Sublime Text Power User Book by Wes Bos',
          link: 'https://sublimetextbook.com/',
        },
        {
          title: 'Atom keyboard shortcuts',
          link: '',
        },
      ],
      week3: [
        {
          title: 'Thinking in React',
          link: 'https://facebook.github.io/react/docs/thinking-in-react.html',
        },
        {
          title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
          link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be',
        },
        {
          title: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
          link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ',
        },
        {
          title: 'REACT JS TUTORIAL #4 - State vs Props & Application Data',
          link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s',
        },
        {
          title: 'React on ES6+',
          link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus',
        },
        {
          title: 'Learn ES2015 · Babel',
          link: 'https://babeljs.io/docs/learn-es2015/',
        },
        {
          title: 'Our First 50,000 Stars - React Blog (History of React)',
          link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html',
        },
        {
          title: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe',
          link: 'https://youtu.be/DN4yLZB1vUQ',
        },
        {
          title: 'React Developer Tools (for Chrome)',
          link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
        },
      ],
      week4: [
        {
          title: 'Handling Events',
          link: 'https://facebook.github.io/react/docs/handling-events.html',
        },
        {
          title: 'React Stateless Functional Components: Nine Wins You Might Have Overlooked',
          link: 'https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.kvftfyi7m',
        },
        {
          title: 'ReactJS Basics',
          link: 'https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8',
        },
        {
          title: '8 no-Flux strategies for React component communication',
          link: 'http://andrewhfarmer.com/component-communication/',
        },
        {
          title: 'Javascript Events & Data Changes in React',
          link: 'https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be',
        },
      ],
    };
    this.changeColor = this.changeColor.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addResource = this.addResource.bind(this);
  }

  changeColor(headerColor) {
    this.setState({headerColor});
  }

  addResource() {
    const newEntry = {
      title: this.state.titleValue,
      link: this.state.linkValue,
    };
    const selectedWeek = this.state.optionValue;
    const newWeek = this.state[selectedWeek].concat(newEntry);
    this.setState({
      titleValue: '',
      linkValue: '',
      [selectedWeek]: newWeek,
    });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header
          myName="Keir Staple"
        />

        <SubHeader
          changeColor={this.changeColor}
          headerColor={this.state.headerColor}
        />

        <NewResource
          titleValue={this.state.titleValue}
          linkValue={this.state.linkValue}
          optionValue={this.state.optionValue}
          handleInputChange={this.handleInputChange}
          addResource={this.addResource}
        />

        <Week
          title="Week 1"
          entries={this.state.week1}
        />

        <Week
          title="Week 2"
          entries={this.state.week2}
        />

        <Week
          title="Week 3"
          entries={this.state.week3}
        />

        <Week
          title="Week 4"
          entries={this.state.week4}
        />
      </div>
    );
  }
}

export default App;
