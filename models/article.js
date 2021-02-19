const { Schema, model } = require('mongoose');

const articleSchema = new Schema(
	{
		title: String,
		body: String,
		summary: String,
	}
);

const article = model('Article', articleSchema);
module.exports = article;
