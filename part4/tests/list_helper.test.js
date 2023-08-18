const listHelper = require('../utils/list_helper')

const listBlogs = [
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

const listWithOneBlog = [
	{
		_id: '5a422aa71b54a676234d17f8',
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 5,
		__v: 0
	}
]

test('dummy returns one', () => {
	const blogs = []
	const result = listHelper.dummy(blogs)
	expect(result).toBe(1)
})

describe('total likes', () => {
	test('of empty list is zero', () => {
		const blogs = []
		expect(listHelper.totalLikes(blogs)).toBe(0)
	})

	test('when list has only one blog, return likes of that', () => {
		const result = listHelper.totalLikes(listWithOneBlog)
		expect(result).toBe(5)
	})

	test('of a bigger list, return the sum of likes', () => {
		const result = listHelper.totalLikes(listBlogs)
		expect(result).toBe(28)
	})
})

describe('favorite blog', () => {
	test('of empty list is zero', () => {
		const blogs = []
		expect(listHelper.favoriteBlog(blogs)).toBe(0)
	})

	test('when list has one blog, return itself', () => {
		const result = listHelper.favoriteBlog(listWithOneBlog)
		expect(result).toEqual({
			author: 'Edsger W. Dijkstra',
			title: 'Go To Statement Considered Harmful',
			likes: 5
		})
	})

	test('of a bigger list, return the blog with most likes', () => {
		const result = listHelper.favoriteBlog(listBlogs)
		expect(result).toEqual({
			author: 'Edsger W. Dijkstra',
			title: 'Go To Statement Considered Harmful',
			likes: 12
		})
	})
})

describe('most blogs', () => {
	test('of a list, return the author with most blogs written', () => {
		const result = listHelper.mostBlogs(listBlogs)
		expect(result).toEqual({
			author: 'Edsger W. Dijkstra',
			blogs: 3
		})
	})
})