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

module.exports = { dummy, totalLikes, favoriteBlog }