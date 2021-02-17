const { Schema, model } = require('mongoose');

const authorSchema = new Schema(
	{
		name: String,
		topic: String,
		stories: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
	},
	{
		timestamps: true
	}
);

const Story = model('Author', authorSchema);

module.exports = Author;
