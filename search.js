<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>React Tutorial</title>
<!-- Not present in the tutorial. Just for basic styling. -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.16/browser.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
</head>
<body>
<div id="content"></div>
<script type="text/babel">
  var Search = React.createClass({
    getInitialState: function(){
      return {
        searchString: ""
      };
      }
    },
    handleInput: function(event){
      this.setState({searchString: event.target.value});
    },
    render: function(){
      retrun (
        <h1>hello world</h1>
        )
    }
  });

  ReactDOM.render(
    <Search />,
    Document.getElementById('container');
    );
</script>

<div class='container'>
</div>

</body>
</html>
