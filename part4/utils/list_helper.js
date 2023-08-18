var _ = require('lodash')

const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	const numLikes = blogs.reduce((total, blog) => {
		return total + blog.likes
	}, 0)
	return blogs.length > 0 ? numLikes : 0
}

const favoriteBlog = (blogs) => {
	const favorite = blogs.sort((a, b) => {
		return b.likes - a.likes
	})

	return blogs.length > 0 
	? {
		title: favorite[0].title,
		author: favorite[0].author,
		likes: favorite[0].likes
	} 
	: 0
}

const mostBlogs = (blogs) => {
	let blogsSortedByAuthor = _.countBy(blogs, 'author')
	let result = Object.entries(blogsSortedByAuthor).sort((a, b) => { return b[1] - a[1] })
	return {
		"author" : result[0][0],
		"blogs": result[0][1]
	}
}

const mostLikes = (blogs) => {
	let blogsSortedByLikes = _.reduce(blogs, (sum, n) => {
		let arr = []
		arr.push({
			[n.author]: n.likes
		})
		return arr
	}, [])
	console.log(blogsSortedByLikes)
}

const listBlogs = [
	{
		_id: '5a422aa71b54a676234d17f1',
		title: 'Go To Statement Considered Harmful',
		author: 'Eger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 11,
		__v: 0
	},
	{
		_id: '5a422aa71b54a676234d17f8',
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 5,
		__v: 0
	},
	{
		_id: '5a422aa71b54a676234d17f2',
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 12,
		__v: 0
	},
	{
		_id: '5a422aa71b54a676234d17f1',
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 11,
		__v: 0
	},
]

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }