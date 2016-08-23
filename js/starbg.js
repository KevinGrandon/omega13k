$.assign($, {
	drawStars: (r) => {
		let num = 100,
			i,
			stars = [],
			context = $.getElementById('f').getContext('2d')

		context.strokeStyle = '#ccc'

		for (i = 0; i < num; i++) {
			stars.push([
				// x
				$.round(r() * GameIndex.WIDTH),
				// y
				$.round(r() * GameIndex.HEIGHT),
				// velocity
				$.round(r() * 2) + 1
			])
		}
		console.log(stars);

		let draw = () => {
			// Draw stars
			context.fillRect(0, 0, GameIndex.WIDTH, GameIndex.HEIGHT);
			for (var i = 0; i < num; i++) {
				// Update positions of stars
				stars[i][0] -= stars[i][2]
				if (stars[i][0] < 0) {
					// Move the star back to the right of the screen.
					stars[i][0] = GameIndex.WIDTH
					// Randomize the starting y value so we don't repeat patterns.
					stars[i][1] = $.round(r() * GameIndex.HEIGHT)
				}


				context.beginPath()
				context.moveTo(stars[i][0], stars[i][1])
				context.lineTo(stars[i][0] - 1, stars[i][1] - 1)
				context.stroke()
				context.closePath()
			}

			setTimeout(draw, 16)
		}

		draw();
	},
});

$.drawStars($.getRandomNumberGenerator(1234));