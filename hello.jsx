var destination = document.querySelector('#container')

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Hello, {this.props.greetTarget}!</h3>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render( 
  <div>
    <Hello greetTarget="Batman">
      <p>It's good to see you!</p>
    </Hello>
    <Hello greetTarget="Iron Man" />
    <Hello greetTarget="Nicolas Cage">
      <small>Snap out of it!</small>
    </Hello>
    <Hello greetTarget="Howard the Duck" />
  </div>,
  destination
);
