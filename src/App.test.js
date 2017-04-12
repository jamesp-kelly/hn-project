import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, {Search, Button, Table} from './App';


describe('App', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Search', () => {

  const props = {
    onSubmit: () => {},
    onChange: () => {},
    value: ''
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search { ...props} >Search</Search>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Search { ...props}>Search</Search>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {

  const props = {
    onClick: () => {}
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button { ...props}>More</Button>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Button { ...props}>More</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Table', () => {

  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' }
    ],
    onDismiss: () => {}
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table { ...props} />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(
      <Table { ...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});