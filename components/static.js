var React = require('react');
// detects that there might be JSX in here


var MyComponent = React.createClass({
  render: function() {
    return <div>
      <div className="container-fluid">

        <section className="navbar">
        </section>

        <section className="section1">
          <div className="hero-header">
            <h1>Potpourri </h1>

            <h2>Everyone poops, so why not talk about it?</h2>
            <img className="hero-image" src="images/poopemoji.jpg" alt="PoopEmoji"/>
          </div>
        </section>

        <section className="section2">
        		<div className="wrap">
              <h2>Did you know that our poop is the most consistent indicator health?</h2>

              <h3>Find out what your poop is telling you!</h3>

        			<ul className="nav">
        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/margaret-cho.png" alt=""/></div>
        					<h3 className="name">Torpedo</h3>
                  <p>Congratulations, youre poop is healthy!</p>
        				</li>
        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/alan-cumming.png" alt=""/></div>
        					<h3 className="name">Little Lumps</h3>
                  <p>Its staying in the intestines too long, so water is being reabsorbed. A lack of dietary fibre can lead to these hard, pellet-like little lumps.</p>
        				</li>
        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/grace-helbig.png" alt=""/></div>
        					<h3 className="name">Too Liquid</h3>
                  <p>Its moving through the intestines too quickly, so water is not being absorbed, due to an increase in fibre, a cleanse or an infection.</p>
        				</li>
        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/hannah-hart.png" alt=""/></div>
        					<h3 className="name">Pencil Thin</h3>
                  <p>A mass in the colon could be constricting the stool. May be an indicator of colon cancer or polyps.</p>
        				</li>

        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/mamrie-hart.png" alt=""/></div>
        					<h3 className="name">Food Particles</h3>
                  <p>Your body is not digesting your food properly, which could indicate issues with stomach bile or the small intestine.</p>
        				</li>
        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/lily-singh.png" alt=""/></div>
        					<h3 className="name">Hard and Dry</h3>
                  <p>Its staying in your intestines too long, so water is being reabsorbed. Could be due to dehydration, constipation, medications.</p>
        				</li>
        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/wil-wheaton.png" alt=""/></div>
        					<h3 className="name">Floats & Stinks</h3>
                  <p>Your body is not properly absorbing fats. Could be the result of malabsorption condition.</p>
        				</li>
        				<li>
        					<div className="emoji"><img className="responsive" src="images/emojis/sci-show.png" alt=""/></div>
        					<h3 className="name">Non-existent!</h3>
                  <p>If you're not going, you're constipated! Drinking more water and increasing your fibre intake will help. Only plant foods contain fiber.</p>
        				</li>

        			</ul>

        		</div>
      	  </section>

          <section className="section3">

            <h2>Join the movement... </h2>

            <h3>#everyonepoops</h3>
          </section>

          <section className="section4">

            <h2>Start Tracking</h2>


          </section>

          <section className="footer">
          </section>
      </div>
    </div>;
  }
});



module.exports = MyComponent;
