const { Schema, model } = require('mongoose');

const articleSchema = new Schema(
	{
		title: String,
		body: String,
		summary: String,
	},
	{
		timestamps: true
	}
);

const article = model('Article', articleSchema);
module.exports = article;
