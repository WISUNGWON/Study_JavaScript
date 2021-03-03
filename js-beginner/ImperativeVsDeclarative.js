/*Imperative Programming 
 - is like how you do something
*/

/*Declarative Programming 
 - is more like what you do.  
 - many declarative approaches have some sort of imperative abstraction layer.  
*/

// Imperative way
function double(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }
  return res;
}

// Declaraitive way
function double(arr) {
  return arr.map((e) => e * 2);
}

// Imperative way
function add(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

// Declaraitive way
function add(arr) {
  return arr.reduce((prev, current) => prev + current, 0);
}

// Imperative way
$('#btn').click(function () {
  $(this).toggleClass('highlight');
  $(this).text() === 'Add Highlight'
    ? $(this).text('Remove Highlight')
    : $(this).text('Add Highlight');
});

// Declaraitive way
<Btn
  onToggleHight={this.handleToggleHightlight}
  highlight={this.state.highlight}
>
  {this.state.buttonText}
</Btn>;
