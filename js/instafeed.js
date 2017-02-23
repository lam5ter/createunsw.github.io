var feed = new Instafeed({
	get: 'user',
	sortBy: 'random',
	userId: '2243092953',
	accessToken: '2243092953.1677ed0.63bba56abf5b42f6b00ce6e15482d2c9',
	limit: 10,
	resolution: 'standard_resolution',
    template: '<a href="{{link}}" class="photo" target="_blank"><img alt="{{caption}}" src="{{image}}"></a>'
});
feed.run();