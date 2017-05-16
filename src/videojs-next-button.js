/*
* @Author: Django Wong
* @Date:   2017-05-17 01:09:22
* @Last Modified by:   DjangoWong
* @Last Modified time: 2017-05-17 03:07:17
* @File Name: videojs-next-button.js
*/

(function(videojs){
	var Button = videojs.getComponent('Button');

	var NextButton = videojs.extend(Button, {
		constructor (player, options) {
			Button.apply(this, arguments);
			this.next = options.next;
		},

		buildCSSClass () {
			return 'vjs-next-button vjs-icon-next vjs-button vjs-control';
		},

		update (next) {
			this.next = next;
			return this;
		},

		handleClick () {
			var next = this.next;
			switch(true){
				case typeof next === 'function':
					this.next();
					break;
				case typeof next === 'string':
					window.location.href = this.next;
					break;
				default:
					break;
			}
			this.player.trigger('on-next-button-click');
		}
	});

	videojs.registerComponent('NextButton', NextButton);
}(videojs));